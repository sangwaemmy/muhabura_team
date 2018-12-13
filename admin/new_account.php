<?php
    session_start();
    require_once '../web_db/multi_values.php';
    if (!isset($_SESSION)) {
        session_start();
    }if (!isset($_SESSION['login_token'])) {
        header('location:../index.php');
    }
    if (isset($_POST['send_account'])) {
        if (isset($_SESSION['table_to_update'])) {
            if ($_SESSION['table_to_update'] == 'account') {
                require_once '../web_db/updates.php';
                $upd_obj = new updates();
                $account_id = $_SESSION['id_upd'];
                $acc_type = trim($_POST['txt_acc_type_id']);
                $acc_class = $_POST['txt_acc_class_id'];
                $name = $_POST['txt_name'];
                $DrCrSide = $_POST['txt_DrCrSide'];
                $acc_code = $_POST['txt_acc_code'];
                $acc_desc = $_POST['txt_acc_desc'];
                $is_cash = $_POST['txt_is_cash'];
                $is_contra_acc = $_POST['txt_is_contra_acc'];
                $is_row_version = $_POST['txt_is_row_version'];
                $upd_obj->update_account($acc_type, $acc_class, $name, $DrCrSide, $acc_code, $acc_desc, $is_cash, $is_contra_acc, $is_row_version, $account_id);
                unset($_SESSION['table_to_update']);
            }
        } else {
            require_once '../web_db/new_values.php';
            $obj = new new_values();

            $acc_type = trim($_POST['txt_acc_type_id']);
            $acc_class = 0;
            $name = trim($_POST['txt_name']);
            $DrCrSide = 'none';
            $acc_code = 0;
            $acc_desc = $_POST['txt_acc_desc'];
            $is_cash = 'yes';
            $is_contra_acc = 'yes';
            $is_row_version = '';
            $amount = 0;
            $entry_date = date('y-m-d');
            require_once '../web_db/other_fx.php';
            $of = new other_fx();
            $acc = $of->get_account_exist($name);
            if (!empty($acc)) {
                ?><script>alert('The account is already in use, please use another account');</script><?php
            } else {
                $obj->new_account($acc_type, $acc_class, $name, $DrCrSide, $acc_code, $acc_desc, $is_cash, 'yes', $is_row_version);
                $m = new multi_values();
                $ot = new other_fx();
                $last_acc = $m->get_last_account();
//                $obj->new_account($acc_type, $acc_class, $name, $DrCrSide, $acc_code, $acc_desc, $is_cash, $is_contra_acc, $is_row_version);
                if (!empty($_POST['txt_if_save_Journal'])) {//if it is not income or expense category. When the user is adding openig balance
                    $amount = ($_POST['txt_end_balance_id'] > 0) ? $_POST['txt_end_balance_id'] : 0;
                    $obj->new_journal_entry_line($last_acc, 'debit', filter_var($amount, FILTER_SANITIZE_NUMBER_INT), 'Opening balance', 0, $entry_date);
                    if (isset($_POST['sub_acc'])) {//sub account checkbox is selected
                        $sub_name = $_POST['acc_name_combo'];
                        $order = $ot->get_account_order_by_account($_POST['acc_name_combo']);
                        $next_order = ($order < 1) ? 1 : $order + 1;
                        ?><script>alert('The last accoount order of: <?php echo $_POST['acc_name_combo']; ?> is: ' +<?php echo $next_order; ?>);</script><?php
                        $obj->new_main_contra_account($sub_name, $last_acc, $next_order);
                    }
                } else {
                    if (isset($_POST['sub_acc'])) {//sub account means that checkbox is selected
                        $sub_name = $_POST['acc_name_combo'];
                        $m = new multi_values();
                        $order = $ot->get_account_order_by_account($_POST['acc_name_combo']);
                        $next_order = ($order < 1) ? 1 : $order + 1;
                        ?><script>alert('The last accoount order of: <?php echo $_POST['acc_name_combo']; ?> is: ' +<?php echo $next_order; ?>);</script><?php
                        $obj->new_main_contra_account($sub_name, $last_acc, $next_order);
                    }
                }
                //the save the journal line
            }
        }
    }
    if (isset($_POST['save_income'])) {
        $account_type = filter_input(INPUT_POST, 'txt_acc_type_id');
        $account = filter_input(INPUT_POST, 'txt_income');
        save_data($account, 'income', 1);
    }
    if (filter_has_var(INPUT_POST, 'save_expense')) {
        $account_type = filter_input(INPUT_POST, 'txt_acc_type_id');
        $account = filter_input(INPUT_POST, 'txt_expense');
        save_data($account, 'expense', 1);
    }
    if (filter_has_var(INPUT_POST, 'save_assets')) {
        $account_type = filter_input(INPUT_POST, 'txt_acc_type_id');
        $account = filter_input(INPUT_POST, 'txt_asset');
        $asset = filter_input(INPUT_POST, 'asset');
        save_data($account, $asset, 2);
    }
    if (filter_has_var(INPUT_POST, 'save_libility')) {
        $account_type = filter_input(INPUT_POST, 'txt_acc_type_id');
        $account = filter_input(INPUT_POST, 'txt_liability');
        $lib_equity = filter_input(INPUT_POST, 'lib_equity');
        save_data($account, $lib_equity, 2);
    }

    function save_data($name, $book_section, $acc_type) {

        //Here is two combo box that hold the accounts, one is for the account (main account) and another is for the sub account
        //The system now detects the order by which the account will be displayed by
        //The main account is called "acc_name_combo" (not to be confused with the class name "cbo_account") whereas the sun account is called  "sub_acc_name_combo".
        require_once '../web_db/other_fx.php';
        require_once '../web_db/new_values.php';
        $obj = new new_values();
        $m = new multi_values();
        $ot = new other_fx();
        $acc_class = $ot->get_accountclassname_by_accid(filter_input(INPUT_POST, 'acc_name_combo'));
        $DrCrSide = 'none';
        $acc_code = 0;
        $acc_desc = ''; //$_POST['txt_acc_desc'];
        $is_cash = 'yes';
        $is_contra_acc = 'yes';
        $is_row_version = '';
        $amount = 0;
        $entry_date = date('y-m-d');
        $of = new other_fx();
        $acc = $of->get_account_exist($name);
        $sub_name = $_POST['acc_name_combo'];
        if (!empty($acc)) {
            ?><script>alert('The account is already in use, please use another account name');</script><?php
        } else {
            $m = new multi_values();

            $obj->new_account($acc_type, $acc_class, $name, $DrCrSide, $acc_code, $acc_desc, 'yes', $is_contra_acc, $is_row_version, $book_section);

            $last_acc = $m->get_last_account();
            if (!empty($_POST['txt_if_save_Journal'])) {//if it is not income or expense category
                $cash = filter_input(INPUT_POST, 'ending_balance');
                $amount = (filter_var($cash, FILTER_SANITIZE_NUMBER_INT) > 0) ? $cash : 0;
                $obj->new_party('neutral', 'none', 'none', 'none', 'none', 'no');
                $last_party = $m->get_last_party();
                $obj->new_journal_entry_header($last_party, 'receivable', date('Y-m-d'), '', '', '');
                $last_header = $m->get_last_journal_entry_header();
                $obj->new_journal_entry_line($last_acc, 'debit', filter_var($amount, FILTER_SANITIZE_NUMBER_INT), 'Opening balance', $last_header, $entry_date, 'other', 'neutral', '0', $_SESSION['userid']);
                save_main_contra_account($obj, $ot, $m); //This is the main contra account
                //the save the journal line
            } else {
                save_main_contra_account($obj, $ot, $m); //This is the main contra account
            }
            if (filter_has_var(INPUT_POST, 'bank_y_n')) {
                save_bank($obj, $last_acc, $name);
            }
        }
    }

    function save_main_contra_account($obj, $ot, $m) {
        $with_sub = filter_input(INPUT_POST, 'sub_acc'); //this is the checkbox 'sub_acc'
        $sub_acc = 0;
        if (filter_has_var(INPUT_POST, 'sub_acc')) {
            $sub_acc = filter_input(INPUT_POST, 'sub_acc_name_combo');
        } else {
            $sub_acc = 0;
        }
        $order = $ot->get_account_order_by_account($_POST['sub_acc_name_combo']);
        $next_order = ($order < 1) ? 1 : $order + 1;
        $main_acc = filter_input(INPUT_POST, 'acc_name_combo');
//        $sub_acc = (filter_has_var(INPUT_POST, 'cbo_account')) ? filter_input(INPUT_POST, 'cbo_account') : 0;
        $obj->new_main_contra_account($main_acc, $sub_acc, $next_order, $m->get_last_account());
        ?><script>alert('Saved successfully');</script><?php
    }

    function save_bank($obj, $last_acc, $name) {
        $val = filter_input(INPUT_POST, 'bank_y_n');
        if ($val == 'yes') {
            $obj->new_bank($last_acc, $name);
        }
    }
?>

<html>
    <head>
        <meta charset="UTF-8">
        <title>
            account
        </title>
        <link href="web_style/styles.css" rel="stylesheet" type="text/css"/>
        <link href="web_style/StylesAddon.css" rel="stylesheet" type="text/css"/>
        <link href="admin_style.css" rel="stylesheet" type="text/css"/>
        <meta name="viewport" content="width=device-width, initial scale=1.0"/>
        <link href="../web_scripts/date_picker/jquery-ui.css" rel="stylesheet" type="text/css"/>
        <link href="../web_scripts/date_picker/jquery-ui.min.css" rel="stylesheet" type="text/css"/>
        <link href="../web_scripts/date_picker/jquery-ui.structure.css" rel="stylesheet" type="text/css"/>
        <link href="../web_scripts/date_picker/jquery-ui.structure.min.css" rel="stylesheet" type="text/css"/>
        <link href="../web_scripts/date_picker/jquery-ui.theme.css" rel="stylesheet" type="text/css"/>
        <link href="../web_scripts/date_picker/jquery-ui.theme.min.css" rel="stylesheet" type="text/css"/>
        <link rel="shortcut icon" href="../web_images/tab_icon.png" type="image/x-icon">
        <style>
            .accounts_expln{
                width: 250px;
            }
            .dataList_table{
                width: 100%;
            } 
            .bank_yes_no{
                float: left;
                color: #322ab5;
            }
        </style>
    </head>
    <body>

        <input type="hidden" id="txt_shall_expand_toUpdate" value="<?php echo (isset($_SESSION['table_to_update'])) ? trim($_SESSION['table_to_update']) : '' ?>" />
        <!--this field  (shall_expand_toUpdate)above is for letting the form expand using js for updating-->
        <input type="hidden" id="txt_subacc_id" style="float: right;"   name="txt_subacc_id"/>
        <input type="hidden" id="txt_acc_class_id"   name="txt_acc_class_id"/>
        <input type="hidden" class="push_right" id="txt_acc_text"   name="txt_acc_text"/>
        <!--when the opening balance is available the below fields are used-->

        <!--this below check if we shall save the in the journal-->

        <?php
            include 'admin_header.php';
            $ot = new other_fx();
            $ot->get_yes_no_dialog();

            $ot->get_searchNew_menu('more accounts', without_admin());
        ?>
        <!--Start of Type Details-->

        <!--End Tuype Details-->

        <div class="parts eighty_centered off saved_dialog">
            account saved successfully!
        </div>
        <div class="parts no_padding">
            <?php cancel_btn(); ?>
        </div>

        <div class="parts eighty_centered no_paddin_shade_no_Border new_data_box off"> 

            <input type="hidden" id="txt_end_balance_id"  style="float: right;"  name="txt_end_balance_id"/>
            <input type="hidden" id="txt_end_date_id"   name="txt_end_date_id"/>
            <div class="parts seventy_centered no_paddin_shade_no_Border "> 
                <?php if (isset($_SESSION['table_to_update'])) { ?>
                        <div class="parts margin_free  no_padding">
                            <input type="button" class="cancel_btn red_cancel_button" name="send_cancel"  data-cancel_name="" style="margin: 2px; " value="Cancel update"/>
                        </div>
                    <?php } ?>
                <div class="parts margin_free">
                    <input type="radio" id="inc_rdio" checked="" name="inc_bal_rdio" class="link_cursor  btn_select" value="Income Accounts" />
                    <label class="link_cursor"  for="inc_rdio" >Income statement</label>
                </div>

                <div class="parts margin_free push_right">
                    <input type="radio" id="bal_rdio" name="inc_bal_rdio" class="link_cursor btn_select" value="Balance Accounts" />
                    <label class="link_cursor"  for="bal_rdio" >Balance sheet statement</label>
                </div>

            </div>
            <div class="parts full_center_two_h heit_free no_paddin_shade_no_Border margin_free">
                <div class="parts seventy_centered margin_free" >
                    <h2 id="chosen_label"></h2>
                    <div class="parts inc_pane no_paddin_shade_no_Border margin_free">
                        <ul>
                            <li>
                                <h2>Income</h2> 
                                <ul>
                                    <li> <form action="new_account.php" method="post">
                                            <table class="margin_free full_center_two_h heit_free">
                                                <tr><input type="hidden"  class="txt_acc"  id="txt_acc_type_id" style="float: right;"   name="txt_acc_type_id"/>
                                                <td><?php get_inc_stat_incomesection_combo(); ?></td>
                                                <td><input type="text" autocomplete="off" class="textbox" placeholder="Account Name" required="" name="txt_income"  /></td>
                                                </tr>
                                                <tr>
                                                    <td> <input style="float: left;" type="checkbox" name="sub_acc" id="sub_account_chk3" /><label  for="sub_account_chk3"> Sub account of </label> 
                                                        <span class="off hidable3"> <?php get_sub_acc_combo(); ?></span>
                                                    </td>
                                                    <td>    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2"><input type="submit" class="confirm_buttons" id="btn_save_income" name="save_income" autocomplete="off" value="Save" /></td>
                                                </tr>
                                            </table>
                                        </form>
                                    </li>
                                </ul>
                            </li>
                            <li><h2>Expenses</h2>
                                <ul>
                                    <li>
                                        <form action="new_account.php" method="post">
                                            <table>
                                                <tr>
                                                    <td><input type="hidden"  class="txt_acc"  id="txt_acc_type_id" style="float: right;"   name="txt_acc_type_id"/>
                                                        <?php get_inc_stat_expensesection_combo(); ?></td>
                                                    <td><input type="text" autocomplete="off" class="textbox" placeholder="Account Name" name="txt_expense" required=""  /></td>
                                                </tr><tr>
                                                    <td> <input style="float: left;" type="checkbox" name="sub_acc" id="sub_account_chk4" /><label  for="sub_account_chk4"> Sub account of </label> 
                                                        <span class="off hidable4"> <?php get_sub_acc_combo(); ?></span>
                                                    </td>
                                                    <td>   </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2"><input  placeholder="Account Name" type="submit" name="save_expense" class="confirm_buttons" autocomplete="off" value="Save" /></td>
                                                </tr>
                                            </table></form>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="parts bal_pane no_paddin_shade_no_Border off">
                        <ul>

                            <li>
                                <form action="new_account.php" method="post">

                                    <!--Start of opening balance pane-->
                                    <div class="parts abs_full">
                                        <div class="part  eighty_centered no_paddin_shade_no_Border ">
                                            <div class="parts pane_opening_balance other_pane">
                                                <table>
                                                    <tr>
                                                        <td colspan="2">
                                                            <b>Enter the ending date and balance</b> from 
                                                            the last <span class="chosen_acc"></span><br/>
                                                            <div class="parts full_center_two_h heit_free no_paddin_shade_no_Border iconed pane_icon">
                                                                <b> Attention.  </b>If this account did not have a balance before your first time
                                                                to use this system,click cancel and use transaction to put money in this account
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Statement Ending Balance</td>
                                                        <td><input type="text" class="textbox only_numbers"  id="ending_balance" name="ending_balance" /> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Statement Ending Date</td>
                                                        <td><input type="text" class="textbox" id="ending_date" name="ending_date"/></td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="2">
                                                            <input type="button" class="confirm_buttons reverse_bg_btn reverse_color" value="Help" />
                                                            <input type="button" class="confirm_buttons reverse_bg_btn reverse_color js_cancel_btn" value="Cancel" />
                                                            <input type="button" class="confirm_buttons" id="opn_balnce_btn" value="OK" />
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>  
                                    </div>
                                    <!--End of opening balance pane-->
                                    <h2>Assets</h2> 
                                    <input class="push_left left_off_xx" type="radio" name="asset" id="current" value="current asset" />
                                    <label class="push_left link_cursor"  for="current">Current asset</label>&nbsp;
                                    <input class="push_left" type="radio" name="asset" value="fixed asset" id="fixed" value="fixed asset" />
                                    <label class="push_left link_cursor"  for="fixed">Non current asset</label>&nbsp;
                                    <div class="parts full_center_two_h heit_free no_paddin_shade_no_Border red_message" id="warn_empty_asset_radio" style="font-size: 11px;"> </div>
                                    <ul>
                                        <li>
                                            <table>
                                                <tr>
                                                    <td>
                                                        <input type="hidden" id="txt_if_save_Journal" class="push_right" name="txt_if_save_Journal"/>
                                                        <input type="hidden"  class="txt_acc"  id="txt_acc_type_id" style="float: right;"   name="txt_acc_type_id"/>Select the category</td>
                                                </tr>
                                                <tr> 
                                                    <td> <?php get_bal_sheet_assetsection_acc_combo(); ?></td>
                                                    <td> <input type="text"autocomplete="off" class="textbox full_center_two_h heit_free" placeholder="Account Name" required="" name="txt_asset"  /> </td>
                                                </tr>
                                                <tr class="row_bankyn off">
                                                    <td>This is an account for a bank</td><td>
                                                        <input type="radio" name="bank_y_n" value="yes" id="rad_yes"><label class="bank_yes_no" for="rad_yes">Yes</label>
                                                        <input type="radio" class="left_off_seventy" name="bank_y_n" value="no" id="rad_no"><label class="bank_yes_no" for="rad_no">No</label>
                                                        <span class="parts no_paddin_shade_no_Border full_center_two_h heit_free" value="no" id="warn_empty_bank_radio"></span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td> <input style="float: left;" type="checkbox" name="sub_acc" id="sub_account_chk" /><label  for="sub_account_chk"> Sub account of </label> 
                                                        <span class="off hidable"> <?php get_sub_acc_combo(); ?></span>
                                                    </td>
                                                    <td> <input type="button" id="balance_btn" class="btn_select" value="Opening balance" style="margin-top: 3px;" />  </td>
                                                </tr>
                                                <tr>
                                                    <td></td><td><input  placeholder="Account Name" type="submit" id="btn_save_asset" class="confirm_buttons push_right" style="margin-right: 0px;" autocomplete="off" name="save_assets" value="Save" /></td>
                                                </tr>
                                            </table>
                                        </li>
                                    </ul>
                                </form> </li>
                            <li><form action="new_account.php" method="post">
                                    <h2>Liability</h2>
                                    <input class="push_left" type="radio" name="lib_equity" id="liability" value="liability" />
                                    <label class="push_left link_cursor"  for="liability"> Liability </label>&nbsp;
                                    <input class="push_left left_off_xx" type="radio" name="lib_equity" id="equity" value="equity" />
                                    <label class="push_left link_cursor"  for="equity">Equity</label>&nbsp;
                                    <div class="parts full_center_two_h heit_free no_paddin_shade_no_Border red_message" id="warn_empty_libeqty_radio" style="font-size: 11px;"> </div>
                                    <ul>     
                                        <li>
                                            <table class="full_center_two_h heit_free">
                                                <tr>
                                                    <td>
                                                        <input type="hidden" id="txt_if_save_Journal" class="push_right" name="txt_if_save_Journal"/>
                                                        <input type="hidden"  class="txt_acc"  id="txt_acc_type_id" style="float: right;"   name="txt_acc_type_id"/><?php get_bal_sheet_libilitysection_acc_combo(); ?></td>
                                                    <td><input type="text" autocomplete="off" class="textbox push_right" placeholder="Account Name" name="txt_liability" required=""  /> </td>
                                                </tr>
                                                <tr>
                                                    <td> <input style="float: left;" type="checkbox" name="sub_acc" id="sub_account_chk2" /><label  for="sub_account_chk2"> Sub account of </label> 
                                                        <span class="off hidable2"> <?php get_sub_acc_combo(); ?></span>
                                                    </td>
                                                    <td> <input  placeholder="Account Name" type="submit" class="confirm_buttons push_right" id="btn_save_liability" style="margin-right: 0px;" autocomplete="off" name="save_libility" value="Save" />  </td>
                                                </tr>
                                            </table>
                                        </li>
                                    </ul>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="parts eighty_centered datalist_box" >
            <div class="parts off no_shade_noBorder xx_titles no_bg whilte_text">account List</div>
            <?php
                if (isset($_POST['prev'])) {
                    $_SESSION['page'] = ($_SESSION['page'] < 1) ? 1 : ($_SESSION['page'] -= 1);
                    $last = ($_SESSION['page'] > 1) ? $_SESSION['page'] * 30 : 30;
                    $first = $last - 30;
                } else if (isset($_POST['page_level'])) {//this is next
                    $_SESSION['page'] = ($_SESSION['page'] < 1) ? 1 : ($_SESSION['page'] += 1);
                    $last = $_SESSION['page'] * 30;
                    $first = $last - 30;
                } else if (isset($_SESSION['page']) && isset($_POST['paginated']) && $_SESSION['page'] > 0) {// the use is on another page(other than the first) and clicked the page inside
                    $last = $_POST['paginated'] * 30;
                    $first = $last - 30;
                } else if (isset($_POST['paginated']) && $_SESSION['page'] = 0) {
                    $first = 0;
                } else if (isset($_POST['paginated'])) {
                    $last = $_POST['paginated'] * 30;
                    $first = $last - 30;
                } else if (isset($_POST['first'])) {
                    $_SESSION['page'] = 0;
                    $first = 0;
                } else {
                    $first = 0;
                }

                $obj = new multi_values();
                $obj->list_account($first, 30);
                $ot2 = new other_fx();
                $ot2->get_selected_pagination($first);
            ?>
        </div>  

        <div class="parts  eighty_centered no_paddin_shade_no_Border no_bg margin_free export_btn_box">
            <table class="margin_free">
                <td>
                    <form action="../web_exports/excel_export.php" method="post">
                        <input type="hidden" name="account" value="a"/>
                        <input type="submit" name="export" class="btn_export btn_export_excel" value="Export"/>
                    </form>
                </td>
                <td>
                    <form action="../prints/print_account.php" target="blank" method="post">
                        <input type="submit" name="export" class="btn_export btn_export_pdf" value="Export"/>
                    </form>
                </td>
            </table>
        </div>
        <div class="parts eighty_centered  no_paddin_shade_no_Border no_shade_noBorder check_loaded" >
            <?php require_once './navigation/add_nav.php'; ?> 
        </div>
        <script src="../web_scripts/jquery-2.1.3.min.js" type="text/javascript"></script>
        <script src="../web_scripts/web_scripts.js" type="text/javascript"></script>
        <script src="admin_script.js" type="text/javascript"></script>
        <script src="../web_scripts/date_picker/jquery-ui.min.js" type="text/javascript"></script>
        <script src="../web_scripts/date_picker/jquery-ui.js" type="text/javascript"></script>
        <script src="../web_scripts/accounts_validation.js" type="text/javascript"></script>

        <script>
            var upd = $('#txt_shall_expand_toUpdate').val();
            if (upd != '') {
                var account_type = '<?php echo chosen_acc_type_upd(); ?>';
//                $('.').show() show the cancel button
                if (account_type == 'Income statement') {
                    $('#inc_rdio').attr('checked', 'checked');
                    swtich_account();

                    //Display in the combo box
                    if (expr) {//Fi the account is sub

                    } else {//The account is main

                    }
                } else {
                    $('#bal_rdio').attr('checked', 'checked');
                    swtich_account();
                }
            }

        </script>


        <div class="parts full_center_two_h heit_free footer"> Copyrights <?php echo '2018 - ' . date("Y") . ' MUHABURA MULTICHOICE COMPANY LTD Version 1.0' ?></div>
    </body>
</hmtl>
<?php

    function cancel_btn() {
        $ot = new other_fx();
        $ot->get_cancel_button();
    }

    function get_sub_acc_combo() {
        $obj = new other_fx();
        $obj->get_sub_account_in_combo();
    }

    function get_sub_account() {//These are the sub accounts of the other accounts
        $obj = new other_fx();
        $obj->get_account_in_combo_array();
    }

    function get_acc_combo() {
        $obj = new multi_values();
        $obj->get_account_in_combo_enabled();
    }

    function get_inc_stat_incomesection_combo() {
        $obj = new multi_values();
        $obj->get_account_in_combo_income_income_section_statement();
    }

    function get_inc_stat_expensesection_combo() {
        $obj = new multi_values();
        $obj->get_account_in_combo_income_expense_section_statement();
    }

    function get_bal_sheet_assetsection_acc_combo() {
        $obj = new multi_values();
        $obj->get_account_in_combo_balance_assetsection_sheet();
    }

    function get_bal_sheet_libilitysection_acc_combo() {
        $obj = new multi_values();
        $obj->get_account_in_combo_balance_liabilitysection_sheet();
    }

    function get_acc_type_combo() {
        $obj = new multi_values();
        $obj->get_acc_type_in_combo();
    }

    function get_acc_class_combo() {
        $obj = new multi_values();
        $obj->get_acc_class_in_combo();
    }

    function chosen_acc_type_upd() {
        if (!empty($_SESSION['table_to_update'])) {
            if ($_SESSION['table_to_update'] == 'account') {
                $id = $_SESSION['id_upd'];
                $acc_type = new multi_values();
                return $acc_type->get_chosen_account_acc_type($id);
            } else {
                return '';
            }
        } else {
            return '';
        }
    }

    function chosen_acc_class_upd() {
        if (!empty($_SESSION['table_to_update'])) {
            if ($_SESSION['table_to_update'] == 'account') {
                $id = $_SESSION['id_upd'];
                $acc_class = new multi_values();
                return $acc_class->get_chosen_account_acc_class($id);
            } else {
                return '';
            }
        } else {
            return '';
        }
    }

    function chosen_name_upd() {
        if (!empty($_SESSION['table_to_update'])) {
            if ($_SESSION['table_to_update'] == 'account') {
                $id = $_SESSION['id_upd'];
                $name = new multi_values();
                return $name->get_chosen_account_name($id);
            } else {
                return '';
            }
        } else {
            return '';
        }
    }
    