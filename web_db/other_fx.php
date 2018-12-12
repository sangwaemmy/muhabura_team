<?php
    require_once '../web_db/connection.php';

    class other_fx {

        function get_items_in_combo() {
            require_once('../web_db/connection.php');
            $database = new dbconnection();
            $db = $database->openConnection();
            $sql = "select p_budget_items.p_budget_items_id,  p_budget_items.item_name from p_budget_items";
            ?>
            <select name="acc_item_combo[]"  class="textbox cbo_items"><option></option> <option style="display: none;" value="fly_new_p_budget_items">--Add new--</option>
                <?php
                foreach ($db->query($sql) as $row) {
                    echo "<option value=" . $row['p_budget_items_id'] . ">" . $row['item_name'] . " </option>";
                }
                ?>
            </select>
            <?php
        }

        function get_measurement_in_combo_arr() {
            require_once('../web_db/connection.php');
            $database = new dbconnection();
            $db = $database->openConnection();
            $sql = "select measurement.measurement_id,   measurement.code from measurement";
            ?>
            <select name="measurement_array[]"  class="textbox bgt_txt_msrment  cbo_measurement cbo_onfly_measurement_change">
                <option></option>
                <option value="fly_new_measurement">--Add new--</option>
                <?php
                foreach ($db->query($sql) as $row) {
                    echo "<option value=" . $row['measurement_id'] . ">" . $row['code'] . " </option>";
                }
                ?>
            </select>
            <?php
        }

        function get_sum_income_or_expenses($inc_exp) {
            $db = new dbconnection();
            $sql = "select  sum(journal_entry_line.amount) as amount from account
                join journal_entry_line on journal_entry_line.accountid=account.account_id
                join account_type on account.acc_type=account_type.account_type_id where account_type.name=:name 
                  group by account_type.account_type_id";
            $stmt = $db->openConnection()->prepare($sql);
            $stmt->execute(array(":name" => $inc_exp));

            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            $field = $row['amount'];
            return $field;
        }

        function get_sum_liability() {
            $db = new dbconnection();
            $sql = "select  sum(journal_entry_line.amount) as amount from account               
                 join journal_entry_line on journal_entry_line.accountid=account.account_id
                 join account_type on account.acc_type=account_type.account_type_id   
                 where account_type.name='Other Current liability'
                 or account_type.name='Long Term Liability'
                 group by account_type.account_type_id";
            $stmt = $db->openConnection()->prepare($sql);
            $stmt->execute();

            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            $field = $row['amount'];
            return $field;
        }

        function get_sum_assets() {
            $db = new dbconnection();
            $sql = "select  sum(journal_entry_line.amount) as amount from account               
                 join journal_entry_line on journal_entry_line.accountid=account.account_id
                 join account_type on account.acc_type=account_type.account_type_id   
                 where account_type.name='Other Current asset'
                  or account_type.name='Other Assets'
                 or account_type.name='Fixed Assets'
                 group by account_type.account_type_id";
            $stmt = $db->openConnection()->prepare($sql);
            $stmt->execute();

            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            $field = $row['amount'];
            return $field;
        }

        function get_account_in_combo_array() {
            require_once('../web_db/connection.php');
            $database = new dbconnection();
            $db = $database->openConnection();
            $sql = "select account.account_id,   account.name,account_type.name as type from account"
                    . " join account_type on account.acc_type=account_type.account_type_id "
                    . "  group by account.name";
            ?>
            <select name="acc_name_com[]"  class="textbox cbo_account_arr">
                <option </option>
                <option value="new_item">-- Add New --</option>
                <?php
                foreach ($db->query($sql) as $row) {
                    echo "<option value=" . $row['account_id'] . ">" . $row['name'] . "      (<b>" . strtoupper($row['type']) . "</b>) </option>";
                }
                ?>
            </select>
            <?php
        }

        // <editor-fold defaultstate="collapsed" desc="--------Alerts unfinished processes -----------">
        function pur_ntfinished_request_p_order() {
            $db = new dbconnection();
            $sql = "select count(p_request.p_request_id) as p_request_id from p_request where p_request_id not in (select request from purchase_order_line)";
            $stmt = $db->openConnection()->prepare($sql);
            $stmt->execute();
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            $field = $row['p_request_id'];
            return $field;
        }

        function pur_ntfinished_p_order_p_invoice() {
            $db = new dbconnection();
            $sql = "select count(purchase_order_line_id) as purchase_order_line_id from purchase_order_line where purchase_order_line.purchase_order_line_id not in (select purchase_order from purchase_invoice_line)";
            $stmt = $db->openConnection()->prepare($sql);
            $stmt->execute();
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            $field = $row['purchase_order_line_id'];
            return $field;
        }

        function pur_ntfinished_p_invoice_p_receit() {
            $db = new dbconnection();
            $sql = "select count( purchase_invoice_line_id) as purchase_invoice_line_id from purchase_invoice_line where purchase_invoice_line_id not in (select purchase_invoice from purchase_receit_line)";
            $stmt = $db->openConnection()->prepare($sql);
            $stmt->execute();
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            $field = $row['purchase_invoice_line_id'];
            return $field;
        }

        function sale_ntfinished_quote_salesorder() {
            $db = new dbconnection();
            $sql = "select count(sales_quote_line_id) as sales_quote_line_id from sales_quote_line where sales_quote_line_id not in (select quotationid from sales_order_line)";
            $stmt = $db->openConnection()->prepare($sql);
            $stmt->execute();
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            $field = $row['sales_quote_line_id'];
            return $field;
        }

        function sale_ntfinished_salesorder_salesinvoice() {
            $db = new dbconnection();
            $sql = "select count(sales_order_line_id) as sales_order_line_id from sales_order_line where sales_order_line_id not in (select sales_order from sales_invoice_line)";
            $stmt = $db->openConnection()->prepare($sql);
            $stmt->execute();
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            $field = $row['sales_order_line_id'];
            return $field;
        }

        function sale_ntfinished_salesinvoice_salesreceipt() {
            $db = new dbconnection();
            $sql = "select count(sales_receit_header_id) as sales_receit_header_id from sales_receit_header where sales_invoice not in(select sales_invoice from sales_receit_header)";
            $stmt = $db->openConnection()->prepare($sql);
            $stmt->execute();
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            $field = $row['sales_receit_header_id'];
            return $field;
        }

// </editor-fold>
        function _e($string) {
            echo htmlspecialchars($string, ENT_QUOTES, 'UTF-8');
        }

        function get_searchNew_menu($add_text, $user_permission) {
            ?>
            <div class="parts eighty_centered no_paddin_shade_no_Border hider_box ">  
                <!--Add-->
                <span class="<?php echo $user_permission ?>">
                    <div class="parts no_shade_noBorder reverse_border icon32 add_icon margin_free">  </div>
                    <div class="parts  no_paddin_shade_no_Border new_data_hider "> Add <?php echo $add_text; ?> </div>
                </span>  
                <!--Search-->
                <div class="parts no_shade_noBorder reverse_border icon32 search_icon margin_free">  </div>
                <div class="parts no_paddin_shade_no_Border page_search link_cursor">Search</div>
            </div>
            <?php
        }

    }
    