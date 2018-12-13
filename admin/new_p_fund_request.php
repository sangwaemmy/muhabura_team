<?php
    session_start();
    require_once '../web_db/multi_values.php';
    if (!isset($_SESSION)) {
        session_start();
    }
    if (!isset($_SESSION['login_token'])) {
        header('location:../index.php');
    }
    if (isset($_POST['send_p_fund_request'])) {
        if (isset($_SESSION['table_to_update'])) {
            if ($_SESSION['table_to_update'] == 'p_fund_request') {
                require_once '../web_db/updates.php';
                $upd_obj = new updates();
                $p_fund_request_id = $_SESSION['id_upd'];
                $cash = filter_input(INPUT_POST, 'txt_amount');

                $amount = filter_input(INPUT_POST, 'txt_amount', FILTER_SANITIZE_NUMBER_INT);
                $reason = $_POST['txt_reason'];
                $entry_date = date("y-m-d");

                $User = $_SESSION['userid'];

                $description = $_POST['txt_description'];
                $status = $_POST['txt_status'];


                $upd_obj->update_p_fund_request($amount, $reason, $entry_date, $User, $description, $status, $p_fund_request_id);
                unset($_SESSION['table_to_update']);
            }
        } else {
            $amount = filter_input(INPUT_POST, 'txt_amount', FILTER_SANITIZE_NUMBER_INT);
            $reason = $_POST['txt_reason'];
            $entry_date = date("y-m-d");
            $User = $_SESSION['userid'];
            $description = $_POST['txt_description'];
            $status = 'pending';

            require_once '../web_db/new_values.php';
            $obj = new new_values();
            $obj->new_p_fund_request($amount, $reason, $entry_date, $User, $description, $status);
        }
    }
?>

<html>
    <head>
        <meta charset="UTF-8">
        <title>
            p_fund_request</title>
        <link href="web_style/styles.css" rel="stylesheet" type="text/css"/>
        <link href="web_style/StylesAddon.css" rel="stylesheet" type="text/css"/>
        <meta name="viewport" content="width=device-width, initial scale=1.0"/>
        <link href="admin_style.css" rel="stylesheet" type="text/css"/>
        <link href="web_style/Searched_reports.css" rel="stylesheet" type="text/css"/>
        <link rel="shortcut icon" href="../web_images/tab_icon.png" type="image/x-icon">
        <link href="web_style/financial_rep.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <form action="new_p_fund_request.php" method="post" enctype="multipart/form-data">
            <input type="hidden" id="txt_shall_expand_toUpdate" value="<?php echo (isset($_SESSION['table_to_update'])) ? trim($_SESSION['table_to_update']) : '' ?>" />
            <!--this field  (shall_expand_toUpdate)above is for letting the form expand using js for updating-->
            <?php
                include 'admin_header.php';
                $ot = new other_fx();
                $ot->get_searchNew_menu('request', without_admin());
            ?>

            <!--Start dialog's-->
            <div class="parts abs_full y_n_dialog off">
                <div class="parts dialog_yes_no no_paddin_shade_no_Border reverse_border">
                    <div class="parts full_center_two_h heit_free margin_free skin">
                        Do you really want to delete this record?
                    </div>
                    <div class="parts full_center_two_h heit_free no_paddin_shade_no_Border top_off_x margin_free">
                        <div class="parts yes_no_btns no_shade_noBorder reverse_border left_off_xx link_cursor yes_dlg_btn" id="citizen_yes_btn">Yes</div>
                        <div class="parts yes_no_btns no_shade_noBorder reverse_border left_off_seventy link_cursor no_btn" id="no_btn">No</div>
                    </div>
                </div>
            </div>   
            <!--End dialog-->

            <div class="parts eighty_centered off saved_dialog">
                p_fund_request saved successfully!
            </div>
            <div class="parts eighty_centered new_data_box off">
                <div class="parts eighty_centered new_data_title">  Fund Request Registration </div>
                <table class="new_data_table">
                    <tr><td><label for="txt_amount">Amount </label></td><td> <input type="text"     name="txt_amount" required id="txt_amount" class="textbox only_numbers" value="<?php echo trim(chosen_amount_upd()); ?>"   />  </td></tr>
                    <tr><td><label for="txt_reason">Usage </label></td><td> <input type="text"     name="txt_reason" required id="txt_reason" class="textbox" value="<?php echo trim(chosen_reason_upd()); ?>"   />  </td></tr>
                    <tr><td><label for="txt_description">Description </label></td><td> <input type="text"     name="txt_description" required id="txt_description" class="textbox" value="<?php echo trim(chosen_description_upd()); ?>"   />  </td></tr>
                    <tr><td colspan="2"> <input type="submit" class="confirm_buttons" name="send_p_fund_request" value="Save"/>  </td></tr>
                </table>
            </div>

            <div class="parts eighty_centered datalist_box" >
                <div class="parts no_shade_noBorder xx_titles no_bg whilte_text dataList_title">Fund Request report</div>
                <?php
                    $obj = new multi_values();
                    $first = $obj->get_first_p_fund_request();
                    $obj->list_p_fund_request($first);
                ?>
            </div>  
        </form>
        <script src="../web_scripts/jquery-2.1.3.min.js" type="text/javascript"></script>
        <script src="admin_script.js" type="text/javascript"></script> 
        <script src="../web_scripts/date_picker/jquery-ui.js" type="text/javascript"></script>
        <script src="../web_scripts/date_picker/jquery-ui.min.js" type="text/javascript"></script>
        <script src="../web_scripts/web_scripts.js" type="text/javascript"></script>

        <div class="parts eighty_centered footer"> Copyrights <?php echo date("Y") ?></div>
    </body>
</hmtl>
<?php

    function chosen_amount_upd() {
        if (!empty($_SESSION['table_to_update'])) {
            if ($_SESSION['table_to_update'] == 'p_fund_request') {
                $id = $_SESSION['id_upd'];
                $amount = new multi_values();
                return $amount->get_chosen_p_fund_request_amount($id);
            } else {
                return '';
            }
        } else {
            return '';
        }
    }

    function chosen_reason_upd() {
        if (!empty($_SESSION['table_to_update'])) {
            if ($_SESSION['table_to_update'] == 'p_fund_request') {
                $id = $_SESSION['id_upd'];
                $reason = new multi_values();
                return $reason->get_chosen_p_fund_request_reason($id);
            } else {
                return '';
            }
        } else {
            return 'Petty Cash';
        }
    }

    function chosen_entry_date_upd() {
        if (!empty($_SESSION['table_to_update'])) {
            if ($_SESSION['table_to_update'] == 'p_fund_request') {
                $id = $_SESSION['id_upd'];
                $entry_date = new multi_values();
                return $entry_date->get_chosen_p_fund_request_entry_date($id);
            } else {
                return '';
            }
        } else {
            return '';
        }
    }

    function chosen_User_upd() {
        if (!empty($_SESSION['table_to_update'])) {
            if ($_SESSION['table_to_update'] == 'p_fund_request') {
                $id = $_SESSION['id_upd'];
                $User = new multi_values();
                return $User->get_chosen_p_fund_request_User($id);
            } else {
                return '';
            }
        } else {
            return '';
        }
    }

    function chosen_description_upd() {
        if (!empty($_SESSION['table_to_update'])) {
            if ($_SESSION['table_to_update'] == 'p_fund_request') {
                $id = $_SESSION['id_upd'];
                $description = new multi_values();
                return $description->get_chosen_p_fund_request_description($id);
            } else {
                return '';
            }
        } else {
            return '';
        }
    }

    function chosen_status_upd() {
        if (!empty($_SESSION['table_to_update'])) {
            if ($_SESSION['table_to_update'] == 'p_fund_request') {
                $id = $_SESSION['id_upd'];
                $status = new multi_values();
                return $status->get_chosen_p_fund_request_status($id);
            } else {
                return '';
            }
        } else {
            return '';
        }
    }
    