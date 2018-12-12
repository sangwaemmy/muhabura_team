<?php

    require_once 'connection.php';

    class updates {

        function update_account($acc_type, $acc_class, $account_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE account set acc_type= ?, acc_class= ? WHERE account_id=?");
            $stmt->execute(array($acc_type, $acc_class, $account_id));
        }

        function update_account_type($account_type_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE account_type set 
 WHERE account_type_id=?");
            $stmt->execute(array($account_type_id));
        }

        function update_ledger_settings($ledger_settings_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE ledger_settings set  WHERE ledger_settings_id=?");
            $stmt->execute(array($ledger_settings_id));
        }

        function update_bank($account, $bank_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE bank set 
account= ? WHERE bank_id=?");
            $stmt->execute(array($account, $bank_id));
        }

        function update_account_class($account_class_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE account_class set  WHERE account_class_id=?");
            $stmt->execute(array($account_class_id));
        }

        function update_general_ledger_line($general_ledge_header, $accountid, $general_ledger_line_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE general_ledger_line set 
general_ledge_header= ?, accountid= ? WHERE general_ledger_line_id=?");
            $stmt->execute(array($general_ledge_header, $accountid, $general_ledger_line_id));
        }

        function update_main_contra_account($main_contra_acc, $related_contra_acc, $main_contra_account_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE main_contra_account set 
main_contra_acc= ?, related_contra_acc= ? WHERE main_contra_account_id=?");
            $stmt->execute(array($main_contra_acc, $related_contra_acc, $main_contra_account_id));
        }

        function update_measurement($code, $description, $measurement_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE measurement set 
code= ?, description= ? WHERE measurement_id=?");
            $stmt->execute(array($code, $description, $measurement_id));
        }

        function update_journal_entry_line($accountid, $dr_cr, $amount, $memo) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE journal_entry_line set accountid= ?, dr_cr= ?, amount= ?, memo= ? WHERE journal_entry_line_id=?");
            $stmt->execute(array($accountid, $dr_cr, $amount, $memo));
        }
        function update_tax($sales_accid, $purchase_accid, $tax_name, $tax_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE tax set 
sales_accid= ?, purchase_accid= ?, tax_name= ? WHERE tax_id=?");
            $stmt->execute(array($sales_accid, $purchase_accid, $tax_name, $tax_id));
        }

        function update_vendor($venndor_number, $party, $payment_term, $tax_group, $purchase_acc, $pur_discount_accid, $primary_contact, $acc_payble, $vendor_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE vendor set 
venndor_number= ?, party= ?, payment_term= ?, tax_group= ?, purchase_acc= ?, pur_discount_accid= ?, primary_contact= ?, acc_payble= ? WHERE vendor_id=?");
            $stmt->execute(array($venndor_number, $party, $payment_term, $tax_group, $purchase_acc, $pur_discount_accid, $primary_contact, $acc_payble, $vendor_id));
        }

        function update_general_ledger_header($date, $doc_type, $desc, $general_ledger_header_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE general_ledger_header set 
date= ?, doc_type= ?, desc= ? WHERE general_ledger_header_id=?");
            $stmt->execute(array($date, $doc_type, $desc, $general_ledger_header_id));
        }

        function update_party($party_type, $name, $email, $website, $phone, $is_active, $party_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE party set 
party_type= ?, name= ?, email= ?, website= ?, phone= ?, is_active= ? WHERE party_id=?");
            $stmt->execute(array($party_type, $name, $email, $website, $phone, $is_active, $party_id));
        }

        function update_contact($party, $contact_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE contact set 
party= ? WHERE contact_id=?");
            $stmt->execute(array($party, $contact_id));
        }

        function update_customer($party_id, $contact, $number, $tax_group, $payment_term, $sales_accid, $acc_rec_accid, $promp_pyt_disc_accid, $customer_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE customer set 
party_id= ?, contact= ?, number= ?, tax_group= ?, payment_term= ?, sales_accid= ?, acc_rec_accid= ?, promp_pyt_disc_accid= ? WHERE customer_id=?");
            $stmt->execute(array($party_id, $contact, $number, $tax_group, $payment_term, $sales_accid, $acc_rec_accid, $promp_pyt_disc_accid, $customer_id));
        }

        function update_taxgroup($description, $tax_applied, $is_active, $taxgroup_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE taxgroup set 
description= ?, tax_applied= ?, is_active= ? WHERE taxgroup_id=?");
            $stmt->execute(array($description, $tax_applied, $is_active, $taxgroup_id));
        }

        function update_journal_entry_header($party, $voucher_type, $date, $memo, $reference_number, $posted, $journal_entry_header_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE journal_entry_header set 
party= ?, voucher_type= ?, date= ?, memo= ?, reference_number= ?, posted= ? WHERE journal_entry_header_id=?");
            $stmt->execute(array($party, $voucher_type, $date, $memo, $reference_number, $posted, $journal_entry_header_id));
        }

        function update_Payment_term($description, $payment_type, $due_after_days, $is_active, $Payment_term_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE Payment_term set 
description= ?, payment_type= ?, due_after_days= ?, is_active= ? WHERE Payment_term_id=?");
            $stmt->execute(array($description, $payment_type, $due_after_days, $is_active, $Payment_term_id));
        }

        function update_item($measurement, $vendor, $item_group, $item_category, $smallest_measurement, $sale_measurement, $purchase_measurement, $sales_account, $inventory_accid, $inventoty_adj_accid, $number, $Code, $description, $purchase_desc, $sale_desc, $cost, $price, $item_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE item set 
measurement= ?, vendor= ?, item_group= ?, item_category= ?, smallest_measurement= ?, sale_measurement= ?, purchase_measurement= ?, sales_account= ?, inventory_accid= ?, inventoty_adj_accid= ?, number= ?, Code= ?, description= ?, purchase_desc= ?, sale_desc= ?, cost= ?, price= ? WHERE item_id=?");
            $stmt->execute(array($measurement, $vendor, $item_group, $item_category, $smallest_measurement, $sale_measurement, $purchase_measurement, $sales_account, $inventory_accid, $inventoty_adj_accid, $number, $Code, $description, $purchase_desc, $sale_desc, $cost, $price, $item_id));
        }

        function update_item_group($name, $is_full_exempt, $item_group_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE item_group set 
name= ?, is_full_exempt= ? WHERE item_group_id=?");
            $stmt->execute(array($name, $is_full_exempt, $item_group_id));
        }

        function update_item_category($measurement, $sales_accid, $inventory_accid, $cost_good_sold_accid, $adjustment_accid, $assembly_accid, $name, $item_category_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE item_category set 
measurement= ?, sales_accid= ?, inventory_accid= ?, cost_good_sold_accid= ?, adjustment_accid= ?, assembly_accid= ?, name= ? WHERE item_category_id=?");
            $stmt->execute(array($measurement, $sales_accid, $inventory_accid, $cost_good_sold_accid, $adjustment_accid, $assembly_accid, $name, $item_category_id));
        }

        function update_vendor_payment($vendor, $gen_ledger_header, $pur_invoice_header, $number, $date, $amount, $vendor_payment_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE vendor_payment set 
vendor= ?, gen_ledger_header= ?, pur_invoice_header= ?, number= ?, date= ?, amount= ? WHERE vendor_payment_id=?");
            $stmt->execute(array($vendor, $gen_ledger_header, $pur_invoice_header, $number, $date, $amount, $vendor_payment_id));
        }

        function update_sales_delivery_header($customer, $gen_ledger_header, $payment_term, $sales_delivery_header_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE sales_delivery_header set 
customer= ?, gen_ledger_header= ?, payment_term= ? WHERE sales_delivery_header_id=?");
            $stmt->execute(array($customer, $gen_ledger_header, $payment_term, $sales_delivery_header_id));
        }

        function update_sale_delivery_line($item, $measurement, $sales_delivery_header, $sales_invoice_line, $sale_delivery_line_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE sale_delivery_line set 
item= ?, measurement= ?, sales_delivery_header= ?, sales_invoice_line= ? WHERE sale_delivery_line_id=?");
            $stmt->execute(array($item, $measurement, $sales_delivery_header, $sales_invoice_line, $sale_delivery_line_id));
        }

        function update_sales_invoice_line($item, $measurement, $sales_delivery_header, $sales_invoice_header, $sales_order_line, $quantity, $discount, $sales_invoice_line_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE sales_invoice_line set 
item= ?, measurement= ?, sales_delivery_header= ?, sales_invoice_header= ?, sales_order_line= ?, quantity= ?, discount= ? WHERE sales_invoice_line_id=?");
            $stmt->execute(array($item, $measurement, $sales_delivery_header, $sales_invoice_header, $sales_order_line, $quantity, $discount, $sales_invoice_line_id));
        }

        function update_sales_invoice_header($customer, $payment_term, $gen_ledger_header, $number, $date, $Shipping, $status, $reference_no, $sales_invoice_header_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE sales_invoice_header set 
customer= ?, payment_term= ?, gen_ledger_header= ?, number= ?, date= ?, Shipping= ?, status= ?, reference_no= ? WHERE sales_invoice_header_id=?");
            $stmt->execute(array($customer, $payment_term, $gen_ledger_header, $number, $date, $Shipping, $status, $reference_no, $sales_invoice_header_id));
        }

        function update_sales_order_line($sales_order_header, $item, $measurement, $quantity, $discount, $amount, $sales_order_line_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE sales_order_line set 
sales_order_header= ?, item= ?, measurement= ?, quantity= ?, discount= ?, amount= ? WHERE sales_order_line_id=?");
            $stmt->execute(array($sales_order_header, $item, $measurement, $quantity, $discount, $amount, $sales_order_line_id));
        }

        function update_sales_order_header($customer, $payment_term, $number, $reference_number, $date, $status, $sales_order_header_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE sales_order_header set 
customer= ?, payment_term= ?, number= ?, reference_number= ?, date= ?, status= ? WHERE sales_order_header_id=?");
            $stmt->execute(array($customer, $payment_term, $number, $reference_number, $date, $status, $sales_order_header_id));
        }

        function update_sales_quote_line($sales_quote_header, $item, $measurement, $quantity, $discount, $amount, $sales_quote_line_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE sales_quote_line set 
sales_quote_header= ?, item= ?, measurement= ?, quantity= ?, discount= ?, amount= ? WHERE sales_quote_line_id=?");
            $stmt->execute(array($sales_quote_header, $item, $measurement, $quantity, $discount, $amount, $sales_quote_line_id));
        }

        function update_sales_quote_header($customer, $date, $payment_term, $reference_number, $number, $status, $sales_quote_header_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE sales_quote_header set 
customer= ?, date= ?, payment_term= ?, reference_number= ?, number= ?, status= ? WHERE sales_quote_header_id=?");
            $stmt->execute(array($customer, $date, $payment_term, $reference_number, $number, $status, $sales_quote_header_id));
        }

        function update_sales_receit_header($customerid, $general_ledger_header, $status, $customer, $gen_ledger_header, $account, $number, $date, $amount, $sales_receit_header_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE sales_receit_header set customerid= ?, general_ledger_header= ?, status= ?, customer= ?, gen_ledger_header= ?, account= ?, number= ?, date= ?, amount= ? WHERE sales_receit_header_id=?");
            $stmt->execute(array($customerid, $general_ledger_header, $status, $customer, $gen_ledger_header, $account, $number, $date, $amount, $sales_receit_header_id));
        }

        function update_purchase_invoice_header($inv_control_journal, $item, $measurement, $quantity, $receieved_qusntinty, $cost, $discount, $purchase_order_line, $purchase_invoice_header_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE purchase_invoice_header set 
inv_control_journal= ?, item= ?, measurement= ?, quantity= ?, receieved_qusntinty= ?, cost= ?, discount= ?, purchase_order_line= ? WHERE purchase_invoice_header_id=?");
            $stmt->execute(array($inv_control_journal, $item, $measurement, $quantity, $receieved_qusntinty, $cost, $discount, $purchase_order_line, $purchase_invoice_header_id));
        }

        function update_purchase_invoice_line($item, $measurement, $pur_invoice_header, $cost, $discount, $amount, $pur_order_line, $inventory_control_journal, $quantity, $received_quantity, $purchase_invoice_line_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE purchase_invoice_line set 
item= ?, measurement= ?, pur_invoice_header= ?, cost= ?, discount= ?, amount= ?, pur_order_line= ?, inventory_control_journal= ?, quantity= ?, received_quantity= ? WHERE purchase_invoice_line_id=?");
            $stmt->execute(array($item, $measurement, $pur_invoice_header, $cost, $discount, $amount, $pur_order_line, $inventory_control_journal, $quantity, $received_quantity, $purchase_invoice_line_id));
        }

        function update_purchase_order_header($vendor, $gen_ledger_header, $date, $number, $vendor_invoice_number, $description, $payment_term, $reference_number, $status, $purchase_order_header_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE purchase_order_header set 
vendor= ?, gen_ledger_header= ?, date= ?, number= ?, vendor_invoice_number= ?, description= ?, payment_term= ?, reference_number= ?, status= ? WHERE purchase_order_header_id=?");
            $stmt->execute(array($vendor, $gen_ledger_header, $date, $number, $vendor_invoice_number, $description, $payment_term, $reference_number, $status, $purchase_order_header_id));
        }

        function update_purchase_order_line($pur_order_header, $item, $measurement, $quanitity, $cost, $discount, $amount, $purchase_order_line_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE purchase_order_line set 
pur_order_header= ?, item= ?, measurement= ?, quanitity= ?, cost= ?, discount= ?, amount= ? WHERE purchase_order_line_id=?");
            $stmt->execute(array($pur_order_header, $item, $measurement, $quanitity, $cost, $discount, $amount, $purchase_order_line_id));
        }

        function update_purchase_receit_header($gen_ledger_header, $date, $status, $number, $purchase_receit_header_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE purchase_receit_header set 
gen_ledger_header= ?, date= ?, status= ?, number= ? WHERE purchase_receit_header_id=?");
            $stmt->execute(array($gen_ledger_header, $date, $status, $number, $purchase_receit_header_id));
        }

        function update_purchase_receit_line($pur_recceit_header, $item, $Inventory_control_Journal, $measurement, $quantity, $received_qty, $cost, $discount, $amount, $purchase_receit_line_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE purchase_receit_line set 
pur_recceit_header= ?, item= ?, Inventory_control_Journal= ?, measurement= ?, quantity= ?, received_qty= ?, cost= ?, discount= ?, amount= ? WHERE purchase_receit_line_id=?");
            $stmt->execute(array($pur_recceit_header, $item, $Inventory_control_Journal, $measurement, $quantity, $received_qty, $cost, $discount, $amount, $purchase_receit_line_id));
        }

        function update_Inventory_control_journal($measurement, $item, $doc_type, $In_qty, $Out_qty, $date, $total_cost, $tot_amount, $is_reverse, $Inventory_control_journal_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE Inventory_control_journal set 
measurement= ?, item= ?, doc_type= ?, In_qty= ?, Out_qty= ?, date= ?, total_cost= ?, tot_amount= ?, is_reverse= ? WHERE Inventory_control_journal_id=?");
            $stmt->execute(array($measurement, $item, $doc_type, $In_qty, $Out_qty, $date, $total_cost, $tot_amount, $is_reverse, $Inventory_control_journal_id));
        }

        function update_p_activity($project, $name, $fisc_year, $p_activity_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_activity set project= ?, name= ?, fisc_year= ? WHERE p_activity_id=?");
            $stmt->execute(array($project, $name, $fisc_year, $p_activity_id));
        }

        function update_user($LastName, $FirstName, $UserName, $EmailAddress, $IsActive, $Password, $Roleid, $position_depart, $user_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE user set LastName= ?, FirstName= ?, UserName= ?, EmailAddress= ?, IsActive= ?, Password= ?, Roleid= ?, position_depart= ? WHERE user_id=?");
            $stmt->execute(array($LastName, $FirstName, $UserName, $EmailAddress, $IsActive, $Password, $Roleid, $position_depart, $user_id));
        }

        function update_user_username_password($UserName, $Password, $user_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE user set  UserName= ?,  Password= ? WHERE StaffID=?");
            echo $stmt->execute(array($UserName, $Password, $user_id));
        }

        function update_cheque($bank, $address, $expense_items, $account, $amount, $memo, $party, $cheque_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE cheque set bank= ?, address= ?, expense_items= ?, account= ?, amount= ?, memo= ?, party= ? WHERE cheque_id=?");
            $stmt->execute(array($bank, $address, $expense_items, $account, $amount, $memo, $party, $cheque_id));
        }

        function update_request_daf($status, $request) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_request set status= ?, DAF=? WHERE p_request_id=?");
            $stmt->execute(array($status, date('Y-m-d h:m:s'), $request,));
        }

        function update_po_daf($status, $request) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE purchase_order_line set status= ?, DAF=? WHERE purchase_order_line_id=?");
            $stmt->execute(array($status, date('Y-m-d h:m:s'), $request,));
        }

        function update_request_dg($status, $request) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_request set status= ?, DG=? WHERE p_request_id=?");
            $stmt->execute(array($status, date('Y-m-d h:m:s'), $request,));
            echo 'Affected rows: ' . $stmt->rowCount();
        }

        function update_pr_ord_dg($status, $request) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE purchase_order_line set status= ?, DG=? WHERE purchase_order_line_id=?");
            $stmt->execute(array($status, date('Y-m-d h:m:s'), $request,));
            echo 'Affected rows: ' . $stmt->rowCount();
        }

        function update_request_uc_qty($uc, $qty, $request) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_request set unit_cost= ?, quantity=? WHERE p_request_id=?");
            $stmt->execute(array($uc, $qty, $request,));
            echo 'Affected rows: ' . $stmt->rowCount();
        }

        function update_delete_update_permission($user, $permission, $delete_update_permission_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE delete_update_permission set user= ?, permission= ? WHERE delete_update_permission_id=?");
            $stmt->execute(array($user, $permission, $delete_update_permission_id));
        }

        // <editor-fold defaultstate="collapsed" desc="--------p_tables------------">


        function update_account_category($name, $account_category_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE account_category set 
name= ? WHERE account_category_id=?");
            $stmt->execute(array($name, $account_category_id));
        }

        function update_profile($image, $name, $surname, $image, $profile_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE profile set 
image= ?, name= ?, surname= ?, image= ? WHERE profile_id=?");
            $stmt->execute(array($image, $name, $surname, $image, $profile_id));
        }

        function update_image($path, $image_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE image set 
path= ? WHERE image_id=?");
            $stmt->execute(array($path, $image_id));
        }

        function update_p_budget($description, $entry_date, $is_active, $status, $activity, $unit_cost, $qty, $measurement, $created_by, $item, $p_budget_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_budget set 
description= ?, entry_date= ?, is_active= ?, status= ?, activity= ?, unit_cost= ?, qty= ?, measurement= ?, created_by= ?, item= ? WHERE p_budget_id=?");
            $stmt->execute(array($description, $entry_date, $is_active, $status, $activity, $unit_cost, $qty, $measurement, $created_by, $item, $p_budget_id));
        }

        function update_p_budget_items($item_name, $description, $created_by, $entry_date, $chart_account, $p_budget_items_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_budget_items set 
item_name= ?, description= ?, created_by= ?, entry_date= ?, chart_account= ? WHERE p_budget_items_id=?");
            $stmt->execute(array($item_name, $description, $created_by, $entry_date, $chart_account, $p_budget_items_id));
        }

        function update_p_items_expenses($item, $description, $amount, $date, $finalized, $is_deleted, $account, $date, $item, $p_items_expenses_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_items_expenses set 
item= ?, description= ?, amount= ?, date= ?, finalized= ?, is_deleted= ?, account= ?, date= ?, item= ? WHERE p_items_expenses_id=?");
            $stmt->execute(array($item, $description, $amount, $date, $finalized, $is_deleted, $account, $date, $item, $p_items_expenses_id));
        }

        function update_p_chart_account($acc_no, $name, $status, $created_by, $entry_date, $p_chart_account_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_chart_account set 
acc_no= ?, name= ?, status= ?, created_by= ?, entry_date= ? WHERE p_chart_account_id=?");
            $stmt->execute(array($acc_no, $name, $status, $created_by, $entry_date, $p_chart_account_id));
        }

        function update_p_department($department_name, $description, $abbreviation, $contact_person, $contact_person_email, $p_department_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_department set 
department_name= ?, description= ?, abbreviation= ?, contact_person= ?, contact_person_email= ? WHERE p_department_id=?");
            $stmt->execute(array($department_name, $description, $abbreviation, $contact_person, $contact_person_email, $p_department_id));
        }

        function update_p_unit($department, $name, $Contact_person, $contact_person_email, $p_unit_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_unit set 
department= ?, name= ?, Contact_person= ?, contact_person_email= ? WHERE p_unit_id=?");
            $stmt->execute(array($department, $name, $Contact_person, $contact_person_email, $p_unit_id));
        }

        function update_p_staff($name, $last_name, $position, $email, $username, $Password, $unit_id, $is_active, $p_staff_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_staff set 
name= ?, last_name= ?, position= ?, email= ?, username= ?, Password= ?, unit_id= ?, is_active= ? WHERE p_staff_id=?");
            $stmt->execute(array($name, $last_name, $position, $email, $username, $Password, $unit_id, $is_active, $p_staff_id));
        }

        function update_p_fund_request($amount, $reason, $entry_date, $User, $description, $status, $p_fund_request_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_fund_request set 
amount= ?, reason= ?, entry_date= ?, User= ?, description= ?, status= ? WHERE p_fund_request_id=?");
            $stmt->execute(array($amount, $reason, $entry_date, $User, $description, $status, $p_fund_request_id));
        }

        function update_p_approvals($request, $date, $account, $approval_type, $p_approvals_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_approvals set 
request= ?, date= ?, account= ?, approval_type= ? WHERE p_approvals_id=?");
            $stmt->execute(array($request, $date, $account, $approval_type, $p_approvals_id));
        }

        function update_p_user_approvals($approval_type, $account, $p_user_approvals_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_user_approvals set 
approval_type= ?, account= ? WHERE p_user_approvals_id=?");
            $stmt->execute(array($approval_type, $account, $p_user_approvals_id));
        }

        function update_p_project($name, $last_update_date, $project_contract_no, $project_spervisor, $budget, $account, $entry_date, $active, $status, $type_project, $field, $p_project_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_project set 
name= ?, last_update_date= ?, project_contract_no= ?, project_spervisor= ?, budget= ?, account= ?, entry_date= ?, active= ?, status= ?, type_project= ?, field= ? WHERE p_project_id=?");
            $stmt->execute(array($name, $last_update_date, $project_contract_no, $project_spervisor, $budget, $account, $entry_date, $active, $status, $type_project, $field, $p_project_id));
        }

        function update_p_approvals_type($name, $p_approvals_type_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_approvals_type set 
name= ? WHERE p_approvals_type_id=?");
            $stmt->execute(array($name, $p_approvals_type_id));
        }

        function update_p_other_expenses($item_name, $description, $amount, $date, $account, $project, $p_other_expenses_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_other_expenses set 
item_name= ?, description= ?, amount= ?, date= ?, account= ?, project= ? WHERE p_other_expenses_id=?");
            $stmt->execute(array($item_name, $description, $amount, $date, $account, $project, $p_other_expenses_id));
        }

        function update_p_type_project($name, $p_type_project_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_type_project set 
name= ? WHERE p_type_project_id=?");
            $stmt->execute(array($name, $p_type_project_id));
        }

        function update_p_field($name, $sector, $p_field_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_field set 
name= ?, sector= ? WHERE p_field_id=?");
            $stmt->execute(array($name, $sector, $p_field_id));
        }

        function update_p_province($name, $p_province_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_province set 
name= ? WHERE p_province_id=?");
            $stmt->execute(array($name, $p_province_id));
        }

        function update_p_district($name, $province, $p_district_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_district set 
name= ?, province= ? WHERE p_district_id=?");
            $stmt->execute(array($name, $province, $p_district_id));
        }

        function update_p_sector($name, $district, $p_sector_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_sector set 
name= ?, district= ? WHERE p_sector_id=?");
            $stmt->execute(array($name, $district, $p_sector_id));
        }

        function update_p_fiscal_year($fiscal_year_name, $start_date, $end_date, $entry_date, $account, $p_fiscal_year_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_fiscal_year set 
fiscal_year_name= ?, start_date= ?, end_date= ?, entry_date= ?, account= ? WHERE p_fiscal_year_id=?");
            $stmt->execute(array($fiscal_year_name, $start_date, $end_date, $entry_date, $account, $p_fiscal_year_id));
        }

        function update_p_users($username, $password, $position, $is_active, $role, $p_users_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_users set 
username= ?, password= ?, position= ?, is_active= ?, role= ? WHERE p_users_id=?");
            $stmt->execute(array($username, $password, $position, $is_active, $role, $p_users_id));
        }

        function update_p_roles($role_name, $p_roles_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_roles set 
role_name= ? WHERE p_roles_id=?");
            $stmt->execute(array($role_name, $p_roles_id));
        }

        function update_p_measurement($code, $description, $p_measurement_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_measurement set 
code= ?, description= ? WHERE p_measurement_id=?");
            $stmt->execute(array($code, $description, $p_measurement_id));
        }

        function update_p_request($item, $quantity, $unit_cost, $amount, $measurement, $p_request_id, $field) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_request set item= ?, quantity= ?, unit_cost= ?, amount= ?,   measurement= ?,  field=?       WHERE p_request_id=?");
            $stmt->execute(array($item, $quantity, $unit_cost, $amount, $measurement, $field, $p_request_id));
        }

        function update_p_request_type($name, $p_request_type_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_request_type set 
name= ? WHERE p_request_type_id=?");
            $stmt->execute(array($name, $p_request_type_id));
        }

        function update_p_qty_request($request, $unit_cost, $quantity, $measurement, $requirement, $p_qty_request_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_qty_request set 
request= ?, unit_cost= ?, quantity= ?, measurement= ?, requirement= ? WHERE p_qty_request_id=?");
            $stmt->execute(array($request, $unit_cost, $quantity, $measurement, $requirement, $p_qty_request_id));
        }

        function update_p_Currency($code, $description, $p_Currency_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_Currency set 
code= ?, description= ? WHERE p_Currency_id=?");
            $stmt->execute(array($code, $description, $p_Currency_id));
        }

        function update_p_budget_prep($project_type, $user, $activity_desc, $name, $fisc_year, $p_budget_prep_id) {
            try {
                $database = new dbconnection();
                $db = $database->openconnection();
                $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $stmt = $db->prepare("UPDATE p_budget_prep set project_type= ?, user= ?,   activity_desc= ? ,name= ?,fiscal_year=?  WHERE p_budget_prep_id=?");
                $stmt->execute(array($project_type, $user, $activity_desc, $name, $fisc_year, $p_budget_prep_id));
            } catch (PDOException $e) {
                echo $e->getMessage();
            }
        }

        function update_p_bdgt_prep_expenses($name, $budget, $p_bdgt_prep_expenses_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_bdgt_prep_expenses set 
name= ?, budget= ? WHERE p_bdgt_prep_expenses_id=?");
            $stmt->execute(array($name, $budget, $p_bdgt_prep_expenses_id));
        }

        function update_project_expectations($name, $project_expectations_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE project_expectations set 
name= ? WHERE project_expectations_id=?");
            $stmt->execute(array($name, $project_expectations_id));
        }

        function update_p_fund_usage($request, $amount, $d_account, $c_account, $activity, $entry_date, $User, $p_fund_usage_id) {
            $database = new dbconnection();
            $db = $database->openconnection();
            $stmt = $db->prepare("UPDATE p_fund_usage set request= ?, amount= ?, d_account= ?, c_account= ?, activity= ?, entry_date= ?, User= ? WHERE p_fund_usage_id=?");
            $stmt->execute(array($request, $amount, $d_account, $c_account, $activity, $entry_date, $User, $p_fund_usage_id));
        }

// </editor-fold>
    }
    