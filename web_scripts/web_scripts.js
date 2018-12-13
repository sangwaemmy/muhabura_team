//Since we have many item combo box on new_sales_quote_line.php and new_p_request.php
//we have to get the current selected combobox
var this_item = null;
var this_measurement = null;

var clicked_table_id = 0;
var id_delete = 0;
var table_to_delete = '';
var journal_trans = 0;//This var is used in journal_entry_line in the botttom of the page

$(document).ready(function () {
    try {
        //<editor-fold defaultstate="collapsed" desc="---defaults---">
        get_new_data_hide_show();
        show_form_toUpdate();
        Inventory_control_journal_del_udpate();
//        get_pages_moving();
        dlog_btn_No_Yes();
        hide_select_pane();
        get_acc_type_id_combo();
        get_acc_class_id_combo();
        get_general_ledge_header_id_combo();
        get_main_contra_acc_id_combo();
        get_customerid_id_combo();
        get_general_ledger_header_id_combo();
        get_account_id_combo();
        get_customer_id_combo();
        get_gen_ledger_header_id_combo();
        get_journal_entry_header_id_combo();
        get_sales_accid_id_combo();
        get_purchase_accid_id_combo();
        get_party_id_combo();
        get_payment_term_id_combo();
        get_party_id_combo();
        get_contact_id_combo();
        get_tax_group_id_combo();
        get_payment_term_id_combo();
        get_sales_accid_id_combo();
        get_acc_rec_accid_id_combo();
        get_party_id_combo();
        get_item_group_id_combo();
        get_item_category_id_combo();
        get_sales_accid_id_combo();
        get_inventory_accid_id_combo();
        get_cost_good_sold_accid_id_combo();
        get_assembly_accid_id_combo();
        get_gen_ledger_header_id_combo();
        get_pur_invoice_header_id_combo();
        get_gen_ledger_header_id_combo();
        get_sales_delivery_header_id_combo();
        get_sales_invoice_line_id_combo();
        get_sales_invoice_header_id_combo();
        get_sales_order_line_id_combo();
        get_sales_order_header_id_combo();
        get_sales_quote_header_id_combo();
        get_customerid_id_combo();
        get_inv_control_journal_id_combo();
        get_purchase_order_line_id_combo();
        get_pur_invoice_header_id_combo();
        get_pur_order_line_id_combo();
        get_inventory_control_journal_id_combo();
        get_vendor_id_combo();
        get_gen_ledger_header_id_combo();
        get_payment_term_id_combo();
        get_pur_order_header_id_combo();
        get_gen_ledger_header_id_combo();
        get_pur_recceit_header_id_combo();
        get_Inventory_control_Journal_id_combo();
        get_project_id_combo();

        get_province_id_combo();
        get_district_id_combo();
        get_sector_id_combo();
        get_locations_combos();
        get_field_id_combo();
        get_Roleid_id_combo();
        get_acc_payable_id_combo();
        get_position_depart_id_combo();
        get_fisc_year_id_combo();
        get_item_id_combo();
        measurement_del_udpate();
        get_measurement_id_combo();

        get_req_type_id_combo();
        get_request_id_combo();
        get_currencyid_id_combo();
        validate_numbers_textfields();
        get_type_project_id_combo();
        get_activities_by_project_combo();
        get_quotationid_id_combo();
        get_client_id_combo();
        get_sales_order_id_combo();
        get_activity_id_combo();
        get_purchase_order_id_combo();

        //</editor-fold>
        // pane_on_the_fly();
        //panes on the fly
        save_on_the_fly_customer();
        save_on_the_fly_measurement();
        save_on_the_fly_p_activity();
        save_on_the_fly_account();
        save_on_the_fly_p_budget_items();
        save_on_the_fly_p_fiscal_year();
        save_on_the_fly_supplier();
        save_on_the_fly_staff_positions();
        save_on_the_fly_p_type_project();
        get_supplier_id_combo();
        get_purchase_invoice_id_combo();
        get_main_request_id_combo();
        //change combobox
        show_pane_from_cbo();
        save_on_the_fly_p_project();
        number_no_100_separator();
        chk_delete_update();
        cance_recover();
        Get_data_row_clicked();
        continue_to_pourchaseinvoice();
        table2_finance();
        hide_Y_N_dialog();
        journal_entry_line_del_udpate();
        project_expectations_del_udpate();
        //Other deletes (From p)
        p_budget_prep_del_udpate();
        p_request_del_udpate();
        p_Currency_del_udpate();
        p_activity_del_udpate();
        p_approvals_del_udpate();
        p_bdgt_prep_expenses_del_udpate();
        p_budget_del_udpate();
        p_chart_account_del_udpate();
        p_department_del_udpate();
        p_district_del_udpate();
        p_field_del_udpate();
        p_fiscal_year_del_udpate();
        p_fund_request_del_udpate();
        p_items_expenses_del_udpate();
        p_measurement_del_udpate();
        account_del_udpate();


    } catch (err) {
        alert(err.message);
    }
});
//<editor-fold defaultstate="collapsed" desc="--Defaults-">
function get_client_id_combo() {
    try {
        $('.cbo_client').change(function () {
            var cbo_sales_order = $('.cbo_client option:selected').val();
            $('#txt_cbo_client_id').val(cbo_sales_order);

        });
    } catch (err) {
        alert(err.message);
    }
}
function get_sales_order_id_combo() {
    try {
        $('.cbo_sales_order').change(function () {
            var cbo_sales_order = $('.cbo_sales_order option:selected').val();
            $('#txt_sales_order_id').val(cbo_sales_order);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_acc_type_id_combo() {
    try {
        $('.cbo_acc_type').change(function () {
            var cbo_acc_type = $('.cbo_acc_type option:selected').val();
            $('#txt_acc_type_id').val(cbo_acc_type);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_acc_class_id_combo() {
    try {
        $('.cbo_acc_class').change(function () {
            var cbo_acc_class = $('.cbo_acc_class option:selected').val();
            $('#txt_acc_class_id').val(cbo_acc_class);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_account_id_combo() {
    try {
        $('.cbo_account').change(function () {

            var cbo_account = $('.cbo_account option:selected').val();
            $('#txt_account_id').val(cbo_account);
            $('#txt_acc_type_id').val(cbo_account);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_general_ledge_header_id_combo() {
    try {
        $('.cbo_general_ledge_header').change(function () {
            var cbo_general_ledge_header = $('.cbo_general_ledge_header option:selected').val();
            $('#txt_general_ledge_header_id').val(cbo_general_ledge_header);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_main_contra_acc_id_combo() {
    try {
        $('.cbo_main_contra_acc').change(function () {
            var cbo_main_contra_acc = $('.cbo_main_contra_acc option:selected').val();
            $('#txt_main_contra_acc_id').val(cbo_main_contra_acc);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_customerid_id_combo() {
    try {
        $('.cbo_customerid').change(function () {
            var cbo_customerid = $('.cbo_customerid option:selected').val();
            $('#txt_customerid_id').val(cbo_customerid);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_general_ledger_header_id_combo() {
    try {
        $('.cbo_general_ledger_header').change(function () {
            var cbo_general_ledger_header = $('.cbo_general_ledger_header option:selected').val();
            $('#txt_general_ledger_header_id').val(cbo_general_ledger_header);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_customer_id_combo() {
    try {
        $('.cbo_customer').change(function () {
            var cbo_customer = $('.cbo_customer option:selected').val();
            $('#txt_customer_id').val(cbo_customer);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_gen_ledger_header_id_combo() {
    try {
        $('.cbo_gen_ledger_header').change(function () {
            var cbo_gen_ledger_header = $('.cbo_gen_ledger_header option:selected').val();
            $('#txt_gen_ledger_header_id').val(cbo_gen_ledger_header);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_accountid_id_combo() {
    try {
        $('.cbo_accountid').change(function () {
            var cbo_accountid = $('.cbo_accountid option:selected').val();
            $('#txt_accountid_id').val(cbo_accountid);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_journal_entry_header_id_combo() {
    try {
        $('.cbo_journal_entry_header').change(function () {
            var cbo_journal_entry_header = $('.cbo_journal_entry_header option:selected').val();
            $('#txt_journal_entry_header_id').val(cbo_journal_entry_header);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_sales_accid_id_combo() {
    try {
        $('.cbo_sales_accid').change(function () {
            var cbo_sales_accid = $('.cbo_sales_accid option:selected').val();
            $('#txt_sales_accid_id').val(cbo_sales_accid);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_purchase_accid_id_combo() {
    try {
        $('.cbo_purchase_accid').change(function () {
            var cbo_purchase_accid = $('.cbo_purchase_accid option:selected').val();
            $('#txt_purchase_accid_id').val(cbo_purchase_accid);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_party_id_combo() {
    try {
        $('.cbo_party').change(function () {
            var cbo_party = $('.cbo_party option:selected').val();
            $('#txt_party_id').val(cbo_party);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_payment_term_id_combo() {
    try {
        $('.cbo_payment_term').change(function () {
            var cbo_payment_term = $('.cbo_payment_term option:selected').val();
            $('#txt_payment_term_id').val(cbo_payment_term);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_tax_group_id_combo() {
    try {
        $('.cbo_tax_group').change(function () {
            var cbo_tax_group = $('.cbo_tax_group option:selected').val();
            $('#txt_tax_group_id').val(cbo_tax_group);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_contact_id_combo() {
    try {
        $('.cbo_contact').change(function () {
            var cbo_contact = $('.cbo_contact option:selected').val();
            $('#txt_contact_id').val(cbo_contact);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_sales_accid_id_combo() {
    try {
        $('.cbo_sales_accid').change(function () {
            var cbo_sales_accid = $('.cbo_sales_accid option:selected').val();
            $('#txt_sales_accid_id').val(cbo_sales_accid);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_acc_rec_accid_id_combo() {
    try {
        $('.cbo_acc_rec_accid').change(function () {
            var cbo_acc_rec_accid = $('.cbo_acc_rec_accid option:selected').val();
            $('#txt_acc_rec_accid_id').val(cbo_acc_rec_accid);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_item_group_id_combo() {
    try {
        $('.cbo_item').change(function () {
            var cbo_item_group = $('.cbo_item_group option:selected').val();
            $('#txt_item_id').val(cbo_item_group);

        });
    } catch (err) {
        alert(err.message);
    }
}
function get_item_category_id_combo() {
    try {
        $('.cbo_item_category').change(function () {
            var cbo_item_category = $('.cbo_item_category option:selected').val();
            $('#txt_item_category_id').val(cbo_item_category);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_sales_accid_id_combo() {
    try {
        $('.cbo_sales_accid').change(function () {
            var cbo_sales_accid = $('.cbo_sales_accid option:selected').val();
            $('#txt_sales_accid_id').val(cbo_sales_accid);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_inventory_accid_id_combo() {
    try {
        $('.cbo_inventory_accid').change(function () {
            var cbo_inventory_accid = $('.cbo_inventory_accid option:selected').val();
            $('#txt_inventory_accid_id').val(cbo_inventory_accid);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_cost_good_sold_accid_id_combo() {
    try {
        $('.cbo_cost_good_sold_accid').change(function () {
            var cbo_cost_good_sold_accid = $('.cbo_cost_good_sold_accid option:selected').val();
            $('#txt_cost_good_sold_accid_id').val(cbo_cost_good_sold_accid);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_assembly_accid_id_combo() {
    try {
        $('.cbo_assembly_accid').change(function () {
            var cbo_assembly_accid = $('.cbo_assembly_accid option:selected').val();
            $('#txt_assembly_accid_id').val(cbo_assembly_accid);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_vendor_id_combo() {
    try {
        $('.cbo_vendor').change(function () {
            var cbo_vendor = $('.cbo_vendor option:selected').val();
            $('#txt_vendor_id').val(cbo_vendor);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_gen_ledger_header_id_combo() {
    try {
        $('.cbo_gen_ledger_header').change(function () {
            var cbo_gen_ledger_header = $('.cbo_gen_ledger_header option:selected').val();
            $('#txt_gen_ledger_header_id').val(cbo_gen_ledger_header);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_pur_invoice_header_id_combo() {
    try {
        $('.cbo_pur_invoice_header').change(function () {
            var cbo_pur_invoice_header = $('.cbo_pur_invoice_header option:selected').val();
            $('#txt_pur_invoice_header_id').val(cbo_pur_invoice_header);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_gen_ledger_header_id_combo() {
    try {
        $('.cbo_gen_ledger_header').change(function () {
            var cbo_gen_ledger_header = $('.cbo_gen_ledger_header option:selected').val();
            $('#txt_gen_ledger_header_id').val(cbo_gen_ledger_header);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_measurement_id_combo() {
    try {
        $('.cbo_measurement').change(function () {
            var this_measurement = $(this);
            var cbo_measurement = $('.cbo_measurement option:selected').val();
            $('#txt_measurement_id').val(cbo_measurement);

        });
    } catch (err) {
        alert(err.message);
    }
}
function get_sales_delivery_header_id_combo() {
    try {
        $('.cbo_sales_delivery_header').change(function () {
            var cbo_sales_delivery_header = $('.cbo_sales_delivery_header option:selected').val();
            $('#txt_sales_delivery_header_id').val(cbo_sales_delivery_header);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_sales_invoice_line_id_combo() {
    try {
        $('.cbo_sales_invoice_line').change(function () {
            var cbo_sales_invoice_line = $('.cbo_sales_invoice_line option:selected').val();
            $('#txt_sales_invoice_line_id').val(cbo_sales_invoice_line);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_sales_delivery_header_id_combo() {
    try {
        $('.cbo_sales_delivery_header').change(function () {
            var cbo_sales_delivery_header = $('.cbo_sales_delivery_header option:selected').val();
            $('#txt_sales_delivery_header_id').val(cbo_sales_delivery_header);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_sales_invoice_header_id_combo() {
    try {
        var res = '';
        $('.cbo_sales_invoice_header').change(function () {
            var cbo_sales_invoice_header = $('.cbo_sales_invoice_header option:selected').val();
            $('#txt_sales_invoice_header_id').val(cbo_sales_invoice_header);
            var get_on_salesreceit_fromsaleinvoice = cbo_sales_invoice_header;
            $.post('../admin/handler.php', {get_on_salesreceit_fromsaleinvoice: get_on_salesreceit_fromsaleinvoice}, function (data) {
                res = data;
            }).complete(function () {
                $('.load_res').slideUp(100, function () {
                    $('.continuous_res').html(res);

                });
            });

        });
    } catch (err) {
        alert(err.message);
    }
}
function get_sales_order_line_id_combo() {
    try {
        $('.cbo_sales_order_line').change(function () {
            var cbo_sales_order_line = $('.cbo_sales_order_line option:selected').val();
            $('#txt_sales_order_line_id').val(cbo_sales_order_line);

        });
    } catch (err) {
        alert(err.message);
    }
}
function get_sales_order_id_combo() {
    try {
        var res2 = '';
        $('.cbo_sales_order').change(function () {
            var cbo_sales_order = $('.cbo_sales_order option:selected').val();
            $('#txt_sales_order_id').val(cbo_sales_order);

            var get_on_salesinvoice_from_saleorder = cbo_sales_order;
            $('.load_res').slideDown(100);
            $.post('../admin/handler.php', {get_on_salesinvoice_from_saleorder: get_on_salesinvoice_from_saleorder}, function (data) {
                res2 = data;
            }).complete(function () {
                $('.load_res').slideUp(100, function () {
                    $('.continuous_res').html(res2);

                });
            });
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_sales_order_header_id_combo() {
    try {
        $('.cbo_sales_order_header').change(function () {
            var cbo_sales_order_header = $('.cbo_sales_order_header option:selected').val();
            $('#txt_sales_order_header_id').val(cbo_sales_order_header);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_payment_term_id_combo() {
    try {
        $('.cbo_payment_term').change(function () {
            var cbo_payment_term = $('.cbo_payment_term option:selected').val();
            $('#txt_payment_term_id').val(cbo_payment_term);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_sales_quote_header_id_combo() {
    try {
        $('.cbo_sales_quote_header').change(function () {
            var cbo_sales_quote_header = $('.cbo_sales_quote_header option:selected').val();
            $('#txt_sales_quote_header_id').val(cbo_sales_quote_header);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_customerid_id_combo() {
    try {
        $('.cbo_customerid').change(function () {
            var cbo_customerid = $('.cbo_customerid option:selected').val();
            $('#txt_customerid_id').val(cbo_customerid);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_general_ledger_header_id_combo() {
    try {
        $('.cbo_general_ledger_header').change(function () {
            var cbo_general_ledger_header = $('.cbo_general_ledger_header option:selected').val();
            $('#txt_general_ledger_header_id').val(cbo_general_ledger_header);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_account_id_combo() {
    try {
        $('.cbo_account').change(function () {
            var cbo_account = $('.cbo_account option:selected').val();
            $('#txt_account_id').val(cbo_account);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_inv_control_journal_id_combo() {
    try {
        $('.cbo_inv_control_journal').change(function () {
            var cbo_inv_control_journal = $('.cbo_inv_control_journal option:selected').val();
            $('#txt_inv_control_journal_id').val(cbo_inv_control_journal);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_purchase_order_line_id_combo() {
    try {
        $('.cbo_purchase_order_line').change(function () {
            var cbo_purchase_order_line = $('.cbo_purchase_order_line option:selected').val();
            $('#txt_purchase_order_line_id').val(cbo_purchase_order_line);

        });
    } catch (err) {
        alert(err.message);
    }
}
function get_pur_invoice_header_id_combo() {
    try {
        $('.cbo_pur_invoice_header').change(function () {
            var cbo_pur_invoice_header = $('.cbo_pur_invoice_header option:selected').val();
            $('#txt_pur_invoice_header_id').val(cbo_pur_invoice_header);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_pur_order_line_id_combo() {
    try {
        $('.cbo_pur_order_line').change(function () {
            var cbo_pur_order_line = $('.cbo_pur_order_line option:selected').val();
            $('#txt_pur_order_line_id').val(cbo_pur_order_line);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_inventory_control_journal_id_combo() {
    try {
        $('.cbo_inventory_control_journal').change(function () {
            var cbo_inventory_control_journal = $('.cbo_inventory_control_journal option:selected').val();
            $('#txt_inventory_control_journal_id').val(cbo_inventory_control_journal);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_vendor_id_combo() {
    try {
        $('.cbo_vendor').change(function () {
            var cbo_vendor = $('.cbo_vendor option:selected').val();
            $('#txt_vendor_id').val(cbo_vendor);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_gen_ledger_header_id_combo() {
    try {
        $('.cbo_gen_ledger_header').change(function () {
            var cbo_gen_ledger_header = $('.cbo_gen_ledger_header option:selected').val();
            $('#txt_gen_ledger_header_id').val(cbo_gen_ledger_header);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_payment_term_id_combo() {
    try {
        $('.cbo_payment_term').change(function () {
            var cbo_payment_term = $('.cbo_payment_term option:selected').val();
            $('#txt_payment_term_id').val(cbo_payment_term);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_pur_order_header_id_combo() {
    try {
        $('.cbo_pur_order_header').change(function () {
            var cbo_pur_order_header = $('.cbo_pur_order_header option:selected').val();
            $('#txt_pur_order_header_id').val(cbo_pur_order_header);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_gen_ledger_header_id_combo() {
    try {
        $('.cbo_gen_ledger_header').change(function () {
            var cbo_gen_ledger_header = $('.cbo_gen_ledger_header option:selected').val();
            $('#txt_gen_ledger_header_id').val(cbo_gen_ledger_header);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_pur_recceit_header_id_combo() {
    try {
        $('.cbo_pur_recceit_header').change(function () {
            var cbo_pur_recceit_header = $('.cbo_pur_recceit_header option:selected').val();
            $('#txt_pur_recceit_header_id').val(cbo_pur_recceit_header);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_Inventory_control_Journal_id_combo() {
    try {
        $('.cbo_Inventory_control_Journal').change(function () {
            var cbo_Inventory_control_Journal = $('.cbo_Inventory_control_Journal option:selected').val();
            $('#txt_Inventory_control_Journal_id').val(cbo_Inventory_control_Journal);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_item_id_combo() {
    try {
        $('.cbo_item, .cbo_items').change(function () {
            var cbo_item = $(this, 'option:selected').val();
            this_item = $(this);
            $('#txt_item_id').val(cbo_item);
            if (cbo_item === 'fly_new_p_budget_items') {
                $('.onfly_pane_p_budget_items').fadeIn(100);

            }

        });
    } catch (err) {
        alert(err.message);
    }
}
function get_new_data_hide_show() {
    $('.new_data_hider').click(function () {
        $('.new_data_box').slideToggle();

        // hide the admin short descri0ptions
//        $('.pages').hide();
    });
    $(document).on("keypress", function (e) {
//        if (e.ctrlKey && (e.which === 46)) {
//            $('.new_data_box').slideToggle();
//        }

        var ctrlPressed = false; //Variable to check if the the first button is pressed at this exact moment
        $(document).keydown(function (e) {
            if (e.ctrlKey) { //If it's ctrl key
                ctrlPressed = true; //Set variable to true                 
            }
        }).keyup(function (e) { //If user releases ctrl button
            if (e.ctrlKey) {
                ctrlPressed = false; //Set it to false                
            }
        }); //This way you know if ctrl key is pressed. You can change e.ctrlKey to any other key code you want

        $(document).keydown(function (e) { //For any other keypress event
            if (e.which == 32) { //Checking if it's space button
                if (ctrlPressed == true) { //If it's space, check if ctrl key is also pressed
                    $('.new_data_box').slideToggle(); //Do anything you want
                    ctrlPressed = false; //Important! Set ctrlPressed variable to false. Otherwise the code will work everytime you press the space button again               
                    $(this).unbind('keydown');
                    $(document).scrollTop(0);
                }
            }
        });
    });

}
function validate_numbers_textfields() {
    $('.only_numbers').keyup(function (event) {
        if (event.which >= 37 && event.which <= 40)
            return;
        // format number
        $(this).val(function (index, value) {
            return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        });

    });
    $('.only_numbers').keydown(function (e) {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                // Allow: Ctrl+A, Command+A
                        (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
                        // Allow: home, end, left, right, down, up
                                (e.keyCode >= 35 && e.keyCode <= 40)) {
                    // let it happen, don't do anything
                    return;
                }
                // Ensure that it is a number and stop the keypress
                if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                    e.preventDefault();
                }
            });
}

function number_no_100_separator() {
    $('.n_no_100_sep').keydown(function (e) {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                // Allow: Ctrl+A, Command+A
                        (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
                        // Allow: home, end, left, right, down, up
                                (e.keyCode >= 35 && e.keyCode <= 40)) {
                    // let it happen, don't do anything
                    return;
                }
                // Ensure that it is a number and stop the keypress
                if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                    e.preventDefault();
                }
            });
}
function hover_theme1() {
    $('.hover_theme1').mouseover(function () {
        $(this).css('background-color', '#29f15c');
        $(this).addClass('no_shade_noBorder');
        $(this).css('cursoer', 'pointer');
    });

    $('.hover_theme1').mouseleave(function () {
        $(this).css('background-color', 'transparent');
        $(this).removeClass('no_shade_noBorder');
    });
}
function show_form_toUpdate() {

    var updname = $('#txt_shall_expand_toUpdate').val();
    if (updname != '') {
        if (updname.trim() == 'p_request') {
            $('.new_data_box').delay(200).slideDown();
            //Get the number of items
            var items_by_request = 'c';

        } else {
            $('.new_data_box').delay(200).slideDown();
        }
    }

}
function postDisplayData(call_dialog, div) {
    $.post('../Admin/handler.php', {call_dialog: call_dialog}, function (data) {
        $(div).html(data);
    }).complete(function () {
        $('.msg_dialog').slideDown(300);
    });
}
function dlog_btn_No_Yes() {
    $('#dlog_btnNo').unbind('click').click(function () {
        alert('Confirmed!');
    });
    $('#dlog_btnYs').unbind('click').click(function () {
        alert('Declined!');
    });
}
function hide_select_pane() {
    $('.foreign_select').unbind('click').click(function () {
        $(this).fadeOut(200);
        $('.dialog').hide("drop", {direction: 'up'}, 500,
                (function () {
                    $('.menu').show();
                }));
    });

}
function get_acc_payable_id_combo() {
    try {
        $('.cbo_acc_payable').change(function () {
            var cbo_acc_payable = $('.cbo_acc_payable option:selected').val();
            $('#txt_acc_payable_id').val(cbo_acc_payable);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_Roleid_id_combo() {
    try {
        $('.cbo_Roleid').change(function () {
            var cbo_Roleid = $('.cbo_Roleid option:selected').val();
            $('#txt_Roleid_id').val(cbo_Roleid);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_position_depart_id_combo() {
    try {
        $('.cbo_position_depart').change(function () {
            var cbo_position_depart = $('.cbo_position_depart option:selected').val();
            $('#txt_position_depart_id').val(cbo_position_depart);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_fisc_year_id_combo() {
    try {
        $('.cbo_fisc_year').change(function () {
            var cbo_fisc_year = $('.cbo_fisc_year option:selected').val();
            $('#txt_fisc_year_id').val(cbo_fisc_year);

        });
    } catch (err) {
        alert(err.message);
    }
}
function get_activity_id_combo() {
    try {
        $('.cbo_activity').change(function () {
            var cbo_activity = $('.cbo_activity option:selected').val();
            $('#txt_activity_id').val(cbo_activity);

        });
    } catch (err) {
        alert(err.message);
    }
}
function get_req_type_id_combo() {
    try {
        $('.cbo_req_type').change(function () {
            var cbo_req_type = $('.cbo_req_type option:selected').val();
            $('#txt_req_type_id').val(cbo_req_type);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_request_id_combo() {
    try {
        $('.cbo_request').change(function () {
            var cbo_request = $('.cbo_request option:selected').val();
            $('#txt_request_id').val(cbo_request);

        });
    } catch (err) {
        alert(err.message);
    }
}
function get_currencyid_id_combo() {
    try {
        $('.cbo_currencyid').change(function () {
            var cbo_currencyid = $('.cbo_currencyid option:selected').val();
            $('#txt_currencyid_id').val(cbo_currencyid);
        });
    } catch (err) {
        alert(err.message);
    }
}

function get_sales_invoice_id_combo() {
    try {
        $('.cbo_sales_invoice').change(function () {
            var cbo_sales_invoice = $('.cbo_sales_invoice option:selected').val();
            $('#txt_sales_invoice_id').val(cbo_sales_invoice);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_purchase_order_id_combo() {
    try {
        var res = '';
        $('.cbo_purchase_order').change(function () {
            var cbo_purchase_order = $('.cbo_purchase_order option:selected').val();
            $('#txt_purchase_order_id').val(cbo_purchase_order);
            var get_on_purchaseinvpoice_from_purchaseorder = cbo_purchase_order;
            $.post('../admin/handler.php', {get_on_purchaseinvpoice_from_purchaseorder: get_on_purchaseinvpoice_from_purchaseorder}, function (data) {
                res = data;
            }).complete(function () {
                $('.load_res').slideUp(100, function () {
                    $('.continuous_res').html(res);
                });
            });
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_cbo_client_combo() {
    try {
        $('.cbo_client').change(function () {
            var cbo_village = $('.cbo_client option:selected').val();
            $('#txt_cbo_client_id').val(cbo_village);
            alert(cbo_village);
        });
    } catch (err) {
        alert(err.message);
    }
}
//update from account ...
function get_quotationid_id_combo() {
    try {
        var res = '';
        $('.cbo_quotationid').change(function () {
            var cbo_quotationid = $('.cbo_quotationid option:selected').val();
            $('#txt_quotationid_id').val(cbo_quotationid);
            var get_on_salesorder_from_quototion = cbo_quotationid;
            $('.load_res').slideDown(100);
            $.post('../admin/handler.php', {get_on_salesorder_from_quototion: get_on_salesorder_from_quototion}, function (data) {
                res = data;
            }).complete(function () {
                $('.load_res').slideUp(100, function () {
                    $('.continuous_res').html(res);
                });

            });



        });
    } catch (err) {
        alert(err.message);
    }
}
function account_del_udpate() {
    $('.account_update_link').click(function () {
        var table_to_update = $(this).closest('td').siblings('.account').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {
        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromaccount.. 
    $('.account_delete_link').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');

        current_del_btn = $(this);
        show_Y_N_dialog();
    });
}//update from account_type ...

function account_type_del_udpate() {
    $('.account_type_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.account_type').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromaccount_type.. 
    $('.account_type_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.account_type').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from ledger_settings ...

function ledger_settings_del_udpate() {
    $('.ledger_settings_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.ledger_settings').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromledger_settings.. 
    $('.ledger_settings_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.ledger_settings').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from bank ...

function bank_del_udpate() {
    $('.bank_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.bank').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete frombank.. 
    $('.bank_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.bank').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from account_class ...

function account_class_del_udpate() {
    $('.account_class_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.account_class').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromaccount_class.. 
    $('.account_class_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.account_class').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from general_ledger_line ...

function general_ledger_line_del_udpate() {
    $('.general_ledger_line_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.general_ledger_line').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromgeneral_ledger_line.. 
    $('.general_ledger_line_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.general_ledger_line').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from main_contra_account ...

function main_contra_account_del_udpate() {
    $('.main_contra_account_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.main_contra_account').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete frommain_contra_account.. 
    $('.main_contra_account_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.main_contra_account').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from sales_receit_header ...

function sales_receit_header_del_udpate() {
    $('.sales_receit_header_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.sales_receit_header').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromsales_receit_header.. 
    $('.sales_receit_header_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.sales_receit_header').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from measurement ...

function measurement_del_udpate() {
    $('.measurement_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.measurement').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete frommeasurement.. 
    $('.measurement_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.measurement').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from journal_entry_line ...


function tax_del_udpate() {
    $('.tax_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.tax').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromtax.. 
    $('.tax_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.tax').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from vendor ...

function vendor_del_udpate() {
    $('.vendor_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.vendor').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromvendor.. 
    $('.vendor_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.vendor').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from general_ledger_header ...

function general_ledger_header_del_udpate() {
    $('.general_ledger_header_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.general_ledger_header').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromgeneral_ledger_header.. 
    $('.general_ledger_header_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.general_ledger_header').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from party ...

function party_del_udpate() {
    $('.party_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.party').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromparty.. 
    $('.party_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.party').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from contact ...

function contact_del_udpate() {
    $('.contact_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.contact').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromcontact.. 
    $('.contact_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.contact').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from customer ...

function customer_del_udpate() {
    $('.customer_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.customer').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromcustomer.. 
    $('.customer_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.customer').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from taxgroup ...

function taxgroup_del_udpate() {
    $('.taxgroup_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.taxgroup').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromtaxgroup.. 
    $('.taxgroup_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.taxgroup').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from journal_entry_header ...

function journal_entry_header_del_udpate() {
    $('.journal_entry_header_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.journal_entry_header').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromjournal_entry_header.. 
    $('.journal_entry_header_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.journal_entry_header').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from Payment_term ...

function Payment_term_del_udpate() {
    $('.Payment_term_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.Payment_term').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromPayment_term.. 
    $('.Payment_term_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.Payment_term').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from item ...

function item_del_udpate() {
    $('.item_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.item').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromitem.. 
    $('.item_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.item').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from item_group ...

function item_group_del_udpate() {
    $('.item_group_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.item_group').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromitem_group.. 
    $('.item_group_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.item_group').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from item_category ...

function item_category_del_udpate() {
    $('.item_category_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.item_category').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromitem_category.. 
    $('.item_category_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.item_category').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from vendor_payment ...

function vendor_payment_del_udpate() {
    $('.vendor_payment_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.vendor_payment').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromvendor_payment.. 
    $('.vendor_payment_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.vendor_payment').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from sales_delivery_header ...

function sales_delivery_header_del_udpate() {
    $('.sales_delivery_header_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.sales_delivery_header').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromsales_delivery_header.. 
    $('.sales_delivery_header_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.sales_delivery_header').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from sale_delivery_line ...

function sale_delivery_line_del_udpate() {
    $('.sale_delivery_line_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.sale_delivery_line').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromsale_delivery_line.. 
    $('.sale_delivery_line_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.sale_delivery_line').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from sales_invoice_line ...

function sales_invoice_line_del_udpate() {
    $('.sales_invoice_line_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.sales_invoice_line').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromsales_invoice_line.. 
    $('.sales_invoice_line_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.sales_invoice_line').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from sales_invoice_header ...

function sales_invoice_header_del_udpate() {
    $('.sales_invoice_header_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.sales_invoice_header').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromsales_invoice_header.. 
    $('.sales_invoice_header_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.sales_invoice_header').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from sales_order_line ...

function sales_order_line_del_udpate() {
    $('.sales_order_line_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.sales_order_line').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromsales_order_line.. 
    $('.sales_order_line_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.sales_order_line').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from sales_order_header ...

function sales_order_header_del_udpate() {
    $('.sales_order_header_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.sales_order_header').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromsales_order_header.. 
    $('.sales_order_header_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.sales_order_header').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from sales_quote_line ...

function sales_quote_line_del_udpate() {
    $('.sales_quote_line_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.sales_quote_line').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromsales_quote_line.. 
    $('.sales_quote_line_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.sales_quote_line').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from sales_quote_header ...

function sales_quote_header_del_udpate() {
    $('.sales_quote_header_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.sales_quote_header').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromsales_quote_header.. 
    $('.sales_quote_header_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.sales_quote_header').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from sales_receit_header ...

function sales_receit_header_del_udpate() {
    $('.sales_receit_header_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.sales_receit_header').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromsales_receit_header.. 
    $('.sales_receit_header_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.sales_receit_header').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from purchase_invoice_header ...

function purchase_invoice_header_del_udpate() {
    $('.purchase_invoice_header_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.purchase_invoice_header').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete frompurchase_invoice_header.. 
    $('.purchase_invoice_header_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.purchase_invoice_header').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from purchase_invoice_line ...

function purchase_invoice_line_del_udpate() {
    $('.purchase_invoice_line_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.purchase_invoice_line').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete frompurchase_invoice_line.. 
    $('.purchase_invoice_line_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.purchase_invoice_line').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from purchase_order_header ...

function purchase_order_header_del_udpate() {
    $('.purchase_order_header_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.purchase_order_header').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete frompurchase_order_header.. 
    $('.purchase_order_header_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.purchase_order_header').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from purchase_order_line ...

function purchase_order_line_del_udpate() {
    $('.purchase_order_line_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.purchase_order_line').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete frompurchase_order_line.. 
    $('.purchase_order_line_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.purchase_order_line').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from purchase_receit_header ...

function purchase_receit_header_del_udpate() {
    $('.purchase_receit_header_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.purchase_receit_header').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete frompurchase_receit_header.. 
    $('.purchase_receit_header_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.purchase_receit_header').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from purchase_receit_line ...

function purchase_receit_line_del_udpate() {
    $('.purchase_receit_line_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.purchase_receit_line').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete frompurchase_receit_line.. 
    $('.purchase_receit_line_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.purchase_receit_line').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}//update from Inventory_control_journal ...

function Inventory_control_journal_del_udpate() {
    $('.Inventory_control_journal_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.Inventory_control_journal').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromInventory_control_journal.. 
    $('.Inventory_control_journal_delete_link').unbind('click').click(function () {
        var table_to_delete = $(this).closest('td').siblings('.Inventory_control_journal').attr('title');
        var id_delete = $(this).attr('value').trim();

        $(this).closest('tr').slideUp(400);
        $.post('../Admin/handler.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {
        }).complete(function () {

        });

    });
}
function get_project_id_combo() {
    try {
        $('.cbo_project').change(function () {
            var cbo_project = $('.cbo_project option:selected').val();
            $('#txt_project_id').val(cbo_project);
            $('#onfly_txt_project_id').val(cbo_project);

        });
    } catch (err) {
        alert(err.message);
    }
}
//</editor-fold>
//<editor-fold defaultstate="collapsed" desc="---Budget line, project and activities comboboxes ---">

function get_type_project_id_combo() {//this fills the projet combobox after selcting a budget line
    try {
        $('.fly_new_p_type_project').change(function () {
            var cbo_type_project = $('.cbo_type_project option:selected').val();
            $('#txt_p_type_project_id').val(cbo_type_project);
            //on the fly
            if (cbo_type_project === 'fly_new_p_type_project') {//here is to get data on the fly(purchase, sale forms)
                $('.onfly_pane_p_type_project').fadeIn(100);
            } else {
                var project_by_budget_line = cbo_type_project;//the budget line here is the type project in the dastabase
                $('.wait_loader').show(2);
                $('.cbo_fill_projects').empty().append('<option></option> <option value="fly_new_p_project">--Add new --</option>');
                $.post('../admin/handler.php', {project_by_budget_line: project_by_budget_line}, function (data) {
                    var final = $.parseJSON(data.trim());
                    $.each(final, function (i, option) {
                        $('.cbo_fill_projects').append($('<option/>').attr("value", option.id).text(option.name));
                    });
                }).complete(function () {
                    $('.wait_loader').hide(2);
                });
            }
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_activities_by_project_combo() {
    try {
        $('.put_in_textbox').on('change', function () {
            $('#txt_project_id').val($(this, 'option:selected').val());
        });
    } catch (err) {
        alert(err.message);
    }
    try {
        $('.cbo_fill_projects').on('change', function () {

            var cbo_activity = $(this, 'option:selected').val().trim();

            $('#txt_project_id').val(cbo_activity);
            if (cbo_activity == 'fly_new_p_project') {
                $('.onfly_pane_p_project').fadeIn(100);
            } else {
                var activities_by_project = cbo_activity;//the budget line here is the type project in the dastabase
                $('.wait_loader').show(2);
                $.post('../admin/handler.php', {activities_by_project: activities_by_project}, function (data) {

                    var final = $.parseJSON(data.trim());
                    $('.cbo_fill_activity').empty().append('<option></option> <option value="fly_new_p_activity">--Add new-- </option>');
                    $.each(final, function (i, option) {
                        $('.cbo_fill_activity').append($('<option/>').attr("value", option.id).text(option.name));
                    });

                }).complete(function () {
                    $('.wait_loader').hide(2);
                });
            }
        });
        $('.cbo_fill_activity').change(function () {
            var activity = $(this, 'option:selected').val();
            $('#txt_activity_id').val(activity);

        });
    } catch (err) {
        alert(err.message);
    }



}
//</editor-fold>
function get_province_id_combo() {
    try {
        $('.cbo_province').change(function () {
            var cbo_province = $('.cbo_province option:selected').val();
            $('#txt_province_id').val(cbo_province);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_district_id_combo() {
    try {
        $('.cbo_district').change(function () {
            var cbo_district = $('.cbo_district option:selected').val();
            $('#txt_district_id').val(cbo_district);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_sector_id_combo() {
    try {
        $('.cbo_sector').change(function () {
            var cbo_sector = $('.cbo_sector option:selected').val();
            $('#txt_sector_id').val(cbo_sector);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_field_id_combo() {
    try {
        $('.cbo_field').change(function () {
            var cbo_field = $('.cbo_field option:selected').val();
            $('#txt_field_id').val(cbo_field);
        });
    } catch (err) {
        alert(err.message);
    }
}

//the pane on the fly (Saving)
function save_on_the_fly() {
    var the_pane = $('.onfly_pane_p_budget_prep');
    var the_chosen_ite = '';//this is the item that will be automatically selected
    var last_value = 0;
    // in the combobox.
    $('.cancel_btn_onfly').click(function () {
        $('.onfly_pane_p_budget_prep').fadeOut(100);
    });
    $('.btn_onfly_save_p_budget_prep').click(function () {
        var onfly_saving_budget_prep = 'new';
        var onfly_txt_name = $('#onfly_txt_name').val();//these are the fields to insert in the database;
        $.post('../admin/handler.php', {onfly_saving_budget_prep: onfly_saving_budget_prep, onfly_txt_name: onfly_txt_name}, function (data) {
        }).complete(function () {
            $('.cbo_type_project').empty();
            var refill_cbo_p_budget_prep = 'c';
            $.post('../admin/handler.php', {refill_cbo_p_budget_prep: refill_cbo_p_budget_prep}, function (data) {
                var final = $.parseJSON(data.trim());
                $.each(final, function (i, option) {
                    $('.cbo_type_project').append($('<option/>').attr("value", option.id).text(option.name));
                });
            }).complete(function () {
                last_value = $('.cbo_type_project option:last-child').val();
                $('.cbo_type_project').val(last_value);
                $('#txt_type_project_id').val(last_value);
                $(the_pane).hide();
            });
        });
    });
}
function save_on_the_fly_p_type_project() {
    var the_pane = $('.onfly_pane_p_type_project');
    var the_chosen_item = '';//this is the item that will be automatically selected
    var last_value = 0;
    // in the combobox.
    $('.cancel_btn_onfly').click(function () {
        $('.onfly_pane_p_type_project').fadeOut(100);
    });
    $('.btn_onfly_save_p_type_project').click(function () {
        var onfly_saving_p_type_project = 'new';
        var onfly_txt_name = $('#onfly_txt_name').val();//these are the fields to insert in the database;
        $.post('../admin/handler.php', {onfly_saving_p_type_project: onfly_saving_p_type_project, onfly_txt_name: onfly_txt_name}, function (data) {

        }).complete(function () {

            var refill_cbo_p_type_project = 'c';
            $.post('../admin/handler.php', {refill_cbo_p_type_project: refill_cbo_p_type_project}, function (data) {
                var final = $.parseJSON(data.trim());
                $('.cbo_type_project').empty();
                $.each(final, function (i, option) {
                    $('.cbo_type_project').append($('<option/>').attr("value", option.id).text(option.name));
                });
            }).complete(function () {
                last_value = $('.cbo_type_project option:last-child').val();
                $('.cbo_type_project').val(last_value);
                $('#txt_p_type_project_id').val(last_value);
                $(the_pane).hide();
            });
        });
    });
}
function save_on_the_fly_p_fiscal_year() {
    var the_pane = $('.onfly_pane_p_fiscal_year');
    var the_chosen_item = '';//this is the item that will be automatically selected
    var last_value = 0;
    // in the combobox.
    $('.cancel_btn_onfly').click(function () {
        $('.onfly_pane_p_fiscal_year').fadeOut(100);
    });
    $('.btn_onfly_save_p_fiscal_year').click(function () {
        var onfly_saving_p_fiscal_year = 'new';
        var onfly_txt_fiscal_year_name = $('#onfly_txt_fiscal_year_name').val();
        var onfly_txt_start_date = $('#onfly_txt_start_date').val();
        var onfly_txt_end_date = $('#onfly_txt_end_date').val();
        var onfly_txt_entry_date = $('#onfly_txt_entry_date').val();
        var onfly_txt_account = $('#onfly_txt_account').val();
        var onfly_txt_name = $('#onfly_txt_name').val();//these are the fields to insert in the database;
        $.post('../admin/handler.php', {onfly_txt_fiscal_year_name: onfly_txt_fiscal_year_name, txt_onfly_fiscal_year_name: onfly_txt_fiscal_year_name, txt_onfly_start_date: onfly_txt_start_date, txt_onfly_end_date: onfly_txt_end_date, txt_onfly_entry_date: onfly_txt_entry_date, txt_onfly_account: onfly_txt_account}, function (data) {

        }).complete(function () {
            $('.cbo_p_fiscal_year').empty();
            var refill_cbo_p_fiscal_year = 'c';
            $.post('../admin/handler.php', {refill_cbo_p_fiscal_year: refill_cbo_p_fiscal_year}, function (data) {
                var final = $.parseJSON(data.trim());
                $.each(final, function (i, option) {
                    $('.cbo_p_fiscal_year').append($('<option/>').attr("value", option.id).text(option.name));
                });
            }).complete(function () {
                last_value = $('.cbo_p_fiscal_year option:last-child').val();
                $('.cbo_p_fiscal_year').val(last_value);
                $('#txt_p_fiscal_year_id').val(last_value);
                $(the_pane).hide();
            });
        });
    });
}
function save_on_the_fly_p_budget_items() {
    var the_pane = $('.onfly_pane_p_budget_items');
    var the_chosen_item = '';//this is the item that will be automatically selected
    var last_value = 0;
    // in the combobox.
    $('.cancel_btn_onfly').click(function () {
        $('.onfly_pane_p_budget_items').fadeOut(100);
    });
    $('.btn_onfly_save_p_budget_items').click(function () {
        var onfly_saving_p_budget_items = 'new';
        var onfly_txt_item_name = $('#onfly_txt_item_name').val();
        var onfly_txt_description = $('#onfly_txt_description').val();
        var onfly_txt_created_by = $('#onfly_txt_created_by').val();
        var onfly_txt_entry_date = $('#onfly_txt_entry_date').val();
        var onfly_txt_chart_account = $('#onfly_txt_chart_account').val();
        var onfly_txt_name = $('#onfly_txt_name').val();//these are the fields to insert in the database;
        $.post('../admin/handler.php', {onfly_txt_item_name: onfly_txt_item_name, txt_onfly_description: onfly_txt_description, txt_onfly_created_by: onfly_txt_created_by, txt_onfly_entry_date: onfly_txt_entry_date, txt_onfly_chart_account: onfly_txt_chart_account}, function (data) {

        }).complete(function () {
            $('.cbo_p_budget_items').empty();
            var refill_cbo_p_budget_items = 'c';
            $.post('../admin/handler.php', {refill_cbo_p_budget_items: refill_cbo_p_budget_items}, function (data) {
                var final = $.parseJSON(data.trim());
                $.each(final, function (i, option) {
                    $('.cbo_p_budget_items').append($('<option/>').attr("value", option.id).text(option.name));
                });
            }).complete(function () {
                last_value = $('.cbo_p_budget_items option:last-child').val();
                $('.cbo_p_budget_items').val(last_value);
                $('#txt_p_budget_items_id').val(last_value);
                $(the_pane).hide();
            });
        });
    });
}
function save_on_the_fly_account() {
    var the_pane = $('.onfly_pane_account');
    var the_chosen_item = '';//this is the item that will be automatically selected
    var last_value = 0;
    // in the combobox.
    $('.cancel_btn_onfly').click(function () {
        $('.onfly_pane_account').fadeOut(100);
    });
    $('.btn_onfly_save_account').click(function () {
        var onfly_saving_account = 'new';
        var onfly_txt_acc_type = $('#onfly_txt_acc_type').val();
        var onfly_txt_acc_class = $('#onfly_txt_acc_class').val();
        var onfly_txt_name = $('#onfly_txt_name').val();
        var onfly_txt_DrCrSide = $('#onfly_txt_DrCrSide').val();
        var onfly_txt_acc_code = $('#onfly_txt_acc_code').val();
        var onfly_txt_acc_desc = $('#onfly_txt_acc_desc').val();
        var onfly_txt_is_cash = $('#onfly_txt_is_cash').val();
        var onfly_txt_is_contra_acc = $('#onfly_txt_is_contra_acc').val();
        var onfly_txt_is_row_version = $('#onfly_txt_is_row_version').val();
        var onfly_txt_name = $('#onfly_txt_name').val();//these are the fields to insert in the database;
        $.post('../admin/handler.php', {onfly_txt_acc_type: onfly_txt_acc_type, txt_onfly_acc_class: onfly_txt_acc_class, txt_onfly_name: onfly_txt_name, txt_onfly_DrCrSide: onfly_txt_DrCrSide, txt_onfly_acc_code: onfly_txt_acc_code, txt_onfly_acc_desc: onfly_txt_acc_desc, txt_onfly_is_cash: onfly_txt_is_cash, txt_onfly_is_contra_acc: onfly_txt_is_contra_acc, txt_onfly_is_row_version: onfly_txt_is_row_version}, function (data) {

        }).complete(function () {
            $('.cbo_account').empty();
            var refill_cbo_account = 'c';
            $.post('../admin/handler.php', {refill_cbo_account: refill_cbo_account}, function (data) {
                var final = $.parseJSON(data.trim());
                $.each(final, function (i, option) {
                    $('.cbo_account').append($('<option/>').attr("value", option.id).text(option.name));
                });
            }).complete(function () {
                last_value = $('.cbo_account option:last-child').val();
                $('.cbo_account').val(last_value);
                $('#txt_account_id').val(last_value);
                $(the_pane).hide();
            });
        });
    });
}
function save_on_the_fly_supplier() {
    var the_pane = $('.onfly_pane_supplier');
    var the_chosen_item = '';//this is the item that will be automatically selected
    var last_value = 0;
    // in the combobox.
    $('.cancel_btn_onfly').click(function () {
        $('.onfly_pane_supplier').fadeOut(100);
    });
    $('.btn_onfly_save_supplier').click(function () {
        var onfly_saving_supplier = 'new';
        var onfly_txt_party = $('#onfly_txt_party').val();
        var onfly_txt_name = $('#onfly_txt_name').val();//these are the fields to insert in the database;
        $.post('../admin/handler.php', {onfly_txt_party: onfly_txt_party}, function (data) {

        }).complete(function () {
            $('.cbo_supplier').empty();
            var refill_cbo_supplier = 'c';
            $.post('../admin/handler.php', {refill_cbo_supplier: refill_cbo_supplier}, function (data) {
                var final = $.parseJSON(data.trim());
                $.each(final, function (i, option) {
                    $('.cbo_supplier').append($('<option/>').attr("value", option.id).text(option.name));
                });
            }).complete(function () {
                last_value = $('.cbo_supplier option:last-child').val();
                $('.cbo_supplier').val(last_value);
                $('#txt_supplier_id').val(last_value);
                $(the_pane).hide();
            });
        });
    });
}
function save_on_the_fly_customer() {
    var the_pane = $('.onfly_pane_customer');
    var the_chosen_item = '';//this is the item that will be automatically selected
    var last_value = 0;
    // in the combobox.
    $('.cancel_btn_onfly').click(function () {
        $('.onfly_pane_customer').fadeOut(100);
    });
    $('.btn_onfly_save_customer').click(function () {
        var onfly_saving_customer = 'new';
        var onfly_txt_party_id = $('#onfly_txt_party_id').val();
        var onfly_txt_contact = $('#onfly_txt_contact').val();
        var onfly_txt_number = $('#onfly_txt_number').val();
        var onfly_txt_tax_group = $('#onfly_txt_tax_group').val();
        var onfly_txt_payment_term = $('#onfly_txt_payment_term').val();
        var onfly_txt_sales_accid = $('#onfly_txt_sales_accid').val();
        var onfly_txt_acc_rec_accid = $('#onfly_txt_acc_rec_accid').val();
        var onfly_txt_promp_pyt_disc_accid = $('#onfly_txt_promp_pyt_disc_accid').val();
        var onfly_txt_name = $('#onfly_txt_name').val();//these are the fields to insert in the database;
        $.post('../admin/handler.php', {onfly_txt_party_id: onfly_txt_party_id, txt_onfly_contact: onfly_txt_contact, txt_onfly_number: onfly_txt_number, txt_onfly_tax_group: onfly_txt_tax_group, txt_onfly_payment_term: onfly_txt_payment_term, txt_onfly_sales_accid: onfly_txt_sales_accid, txt_onfly_acc_rec_accid: onfly_txt_acc_rec_accid, txt_onfly_promp_pyt_disc_accid: onfly_txt_promp_pyt_disc_accid}, function (data) {

        }).complete(function () {
            $('.cbo_customer').empty();
            var refill_cbo_customer = 'c';
            $.post('../admin/handler.php', {refill_cbo_customer: refill_cbo_customer}, function (data) {
                var final = $.parseJSON(data.trim());
                $.each(final, function (i, option) {
                    $('.cbo_customer').append($('<option/>').attr("value", option.id).text(option.name));
                });
            }).complete(function () {
                last_value = $('.cbo_customer option:last-child').val();
                $('.cbo_customer').val(last_value);
                $('#txt_customer_id').val(last_value);
                $(the_pane).hide();
            });
        });
    });
}
function save_on_the_fly_measurement() {
    var the_pane = $('.onfly_pane_measurement');
    var the_chosen_item = '';//this is the item that will be automatically selected
    var last_value = 0;

    // in the combobox.
    $('.cancel_btn_onfly').click(function () {
        $('.onfly_pane_measurement').fadeOut(100);
    });
    $('.btn_onfly_save_measurement').click(function () {
        try {
            var onfly_saving_measurement = 'new';
            var onfly_txt_code = $('#onfly_txt_code').val();
            var onfly_txt_description = $('#onfly_txt_description').val();
            var onfly_txt_name = $('#onfly_txt_name').val();//these are the fields to insert in the database;
            $.post('../admin/handler.php', {onfly_saving_measurement: onfly_saving_measurement, onfly_txt_code: onfly_txt_code, txt_onfly_description: onfly_txt_description}, function (data) {

            }).complete(function () {
                $('.cbo_measurement').empty();
                var refill_cbo_measurement = 'c';
                $.post('../admin/handler.php', {refill_cbo_measurement: refill_cbo_measurement}, function (data) {

                    var final = $.parseJSON(data.trim());
                    $.each(final, function (i, option) {
                        $('.cbo_measurement').append($('<option/>').attr("value", option.id).text(option.name));
                    });
                }).complete(function () {
                    last_value = $(this_measurement, 'option:last-child').val();
                    this_measurement.val(last_value);
                    $('#txt_measurement_id').val(last_value);
                    $(the_pane).hide();
                });
            });
        } catch (err) {
            alert(err.message);
        }
    });
}
function save_on_the_fly_p_activity() {
    var the_pane = $('.onfly_pane_p_activity');
    var the_chosen_item = '';//this is the item that will be automatically selected
    var last_value = 0;
    // in the combobox.
    $('.cancel_btn_onfly').click(function () {
        $('.onfly_pane_p_activity').fadeOut(100);
    });

    $('.btn_onfly_save_p_activity').click(function () {
        var onfly_saving_p_activity = 'new';
        var onfly_txt_project = $('#onfly_txt_project_id').val();
        var onfly_txt_name = $('#onfly_activity_txt_name').val();
        var onfly_txt_fisc_year = $('#onfly_txt_fisc_year').val();
        $.post('../admin/handler.php', {onfly_saving_p_activity: onfly_saving_p_activity, onfly_txt_project: onfly_txt_project, onfly_txt_name: onfly_txt_name, onfly_txt_fisc_year: onfly_txt_fisc_year}, function (data) {

        }).complete(function () {
            $('.cbo_activity').empty();
            var refill_cbo_p_activity = 'c';
            $.post('../admin/handler.php', {refill_cbo_p_activity: refill_cbo_p_activity}, function (data) {
                var final = $.parseJSON(data.trim());
                $.each(final, function (i, option) {
                    $('.cbo_activity').append($('<option/>').attr("value", option.id).text(option.name));
                });
            }).complete(function () {
                last_value = $('.cbo_activity option:last-child').val();
                $('.cbo_activity').val(last_value);
                $('#txt_p_activity_id').val(last_value);
                $(the_pane).hide();
            });
        });
    });
}
function save_on_the_fly_staff_positions() {
    var the_pane = $('.onfly_pane_staff_positions');
    var the_chosen_item = '';//this is the item that will be automatically selected
    var last_value = 0;
    // in the combobox.
    $('.cancel_btn_onfly').click(function () {
        $('.onfly_pane_staff_positions').fadeOut(100);
    });
    $('.btn_onfly_save_staff_positions').click(function () {
        var onfly_saving_staff_positions = 'new';
        var onfly_txt_name = $('#onfly_txt_name').val();
        var onfly_txt_name = $('#onfly_txt_name').val();//these are the fields to insert in the database;
        $.post('../admin/handler.php', {onfly_txt_name: onfly_txt_name}, function (data) {

        }).complete(function () {
            $('.cbo_staff_positions').empty();
            var refill_cbo_staff_positions = 'c';
            $.post('../admin/handler.php', {refill_cbo_staff_positions: refill_cbo_staff_positions}, function (data) {
                var final = $.parseJSON(data.trim());
                $.each(final, function (i, option) {
                    $('.cbo_staff_positions').append($('<option/>').attr("value", option.id).text(option.name));
                });
            }).complete(function () {
                last_value = $('.cbo_staff_positions option:last-child').val();
                $('.cbo_staff_positions').val(last_value);
                $('#txt_staff_positions_id').val(last_value);
                $(the_pane).hide();
            });
        });
    });
}
function save_on_the_fly_p_project() {
    var the_pane = $('.onfly_pane_p_project');
    var the_chosen_item = '';//this is the item that will be automatically selected
    var last_value = 0;
    // in the combobox.
    $('.cancel_btn_onfly').click(function () {
        $('.onfly_pane_p_project').fadeOut(100);
    });
    $('.btn_onfly_save_p_project').click(function () {
        var onfly_saving_p_budget_prep = 'new';
        var onfly_txt_project_type = $('#onfly_txt_project_type').val();
        var onfly_txt_user = $('#onfly_txt_user').val();
        var onfly_txt_entry_date = $('#onfly_txt_entry_date').val();
        var onfly_txt_budget_type = $('#onfly_txt_budget_type').val();
        var onfly_txt_activity_desc = $('#onfly_txt_activity_desc').val();

        var onfly_txt_amount = $('#onfly_txt_amount').val();
        var onfly_txt_name = $('#onfly_saleinvoice_txt_name').val();
        $.post('../admin/handler.php', {onfly_saving_p_budget_prep: onfly_saving_p_budget_prep, onfly_txt_project_type: onfly_txt_project_type, onfly_txt_user: onfly_txt_user, onfly_txt_entry_date: onfly_txt_entry_date, onfly_txt_budget_type: onfly_txt_budget_type, onfly_txt_activity_desc: onfly_txt_activity_desc, onfly_txt_amount: onfly_txt_amount, onfly_txt_name: onfly_txt_name}, function (data) {

        }).complete(function () {

            $('.cbo_p_project').empty();
            var refill_cbo_p_budget_prep = 'c';
            $.post('../admin/handler.php', {refill_cbo_p_budget_prep: refill_cbo_p_budget_prep}, function (data) {
                var final = $.parseJSON(data.trim());
                $.each(final, function (i, option) {
                    $('.cbo_p_project').append($('<option/>').attr("value", option.id).text(option.name));
                });
            }).complete(function () {
                last_value = $('.cbo_p_project option:last-child').val();
                $('.cbo_p_project').val(last_value);
                $('#txt_p_budget_prep_id').val(last_value);
                $(the_pane).hide();
                //this for the middle combo. After saving  a new project the actiovity combo box should bring add new automatically

                $('.tobe_refilled').empty().append('<option></option> <option value="fly_new_p_activity">--Add new--</option');
            });
        });
    });
}
function save_on_the_fly_p_budget_items() {
    var the_pane = $('.onfly_pane_p_budget_items');
    var the_chosen_item = '';//this is the item that will be automatically selected
    var last_value = 0;
    var item_combo = null;
    // in the combobox.
    $('.cancel_btn_onfly').click(function () {
        $('.onfly_pane_p_budget_items').fadeOut(100);
    });

    $('.btn_onfly_save_p_budget_items').click(function () {
        var onfly_saving_p_budget_items = 'new';
        var onfly_txt_item_name = $('#onfly_txt_item_name').val();
        var onfly_txt_description = $('#onfly_txt_description').val();
        var onfly_txt_created_by = $('#onfly_txt_created_by').val();
        var onfly_txt_entry_date = $('#onfly_txt_entry_date').val();
        var onfly_txt_chart_account = $('#onfly_txt_chart_account').val();
        $.post('../admin/handler.php', {onfly_saving_p_budget_items: onfly_saving_p_budget_items, onfly_txt_item_name: onfly_txt_item_name, onfly_txt_description: onfly_txt_description, onfly_txt_created_by: onfly_txt_created_by, onfly_txt_entry_date: onfly_txt_entry_date, onfly_txt_chart_account: onfly_txt_chart_account}, function (data) {
            alert(data);
        }).complete(function () {
            $('.cbo_items').empty();
            this_item.append('<option>I think i found it!!!</option>')
            var refill_cbo_p_budget_items = 'c';
            $('.onfly_pane_p_budget_items').fadeOut(100);

//            $.post('../admin/handler.php', {refill_cbo_p_budget_items: refill_cbo_p_budget_items}, function (data) {
//                var final = $.parseJSON(data.trim());
//                $.each(final, function (i, option) {
//                    $('.cbo_p_budget_items').append($('<option/>').attr("value", option.id).text(option.name));
//                });
//            }).complete(function () {
//                last_value = $(this_item, 'option:last-child').val();
//                $(this_item).val(last_value);
//                $('#txt_p_budget_items_id').val(last_value);
//                $(the_pane).hide();
//            });
        });
    });
}
function show_pane_from_cbo() {
    try {
        $('.cbo_onfly_p_type_project_change').change(function () {
            var cbo_p_type_project = $('.cbo_p_type_project option:selected').val();
            if (cbo_p_type_project === 'fly_new_p_type_project') {
                $('.onfly_pane_p_type_project').fadeIn(100);
            }
        });

        $('.cbo_onfly_p_fiscal_year_change').change(function () {
            var cbo_p_fiscal_year = $('.cbo_p_fiscal_year option:selected').val();
            if (cbo_p_fiscal_year === 'fly_new_p_fiscal_year') {
                $('.onfly_pane_p_fiscal_year').fadeIn(100);
            }
        });

        $('.cbo_onfly_p_budget_items_change').change(function () {
            var cbo_p_budget_items = $('.cbo_p_budget_items option:selected').val();
            if (cbo_p_budget_items === 'fly_new_p_budget_items') {
                $('.onfly_pane_p_budget_items').fadeIn(100);
            }
        });

        $('.cbo_onfly_account_change').change(function () {
            var cbo_account = $('.cbo_account option:selected').val();
            if (cbo_account === 'fly_new_account') {
                $('.onfly_pane_account').fadeIn(100);
            }
        });

        $('.cbo_onfly_supplier_change').change(function () {
            var cbo_supplier = $('.cbo_supplier option:selected').val();
            if (cbo_supplier === 'fly_new_supplier') {
                $('.onfly_pane_supplier').fadeIn(100);
            }
        });

        $('.cbo_onfly_customer_change').change(function () {
            var cbo_customer = $('.cbo_customer option:selected').val();
            if (cbo_customer === 'fly_new_customer') {
                $('.onfly_pane_customer').fadeIn(100);
            }
        });

        $('.cbo_onfly_measurement_change').change(function () {
            var cbo_measurement = $(this, 'option:selected').val();

            if (cbo_measurement === 'fly_new_measurement') {
                $('.onfly_pane_measurement').fadeIn(100);
            }
        });

        $('.cbo_onfly_p_project_change').change(function () {
            var cbo_p_project = $('.cbo_p_project option:selected').val();
            if (cbo_p_project === 'fly_new_p_project') {
                $('.onfly_pane_p_project').fadeIn(100);
            }
        });

        $('.cbo_onfly_staff_positions_change').change(function () {
            var cbo_staff_positions = $('.cbo_staff_positions option:selected').val();
            if (cbo_staff_positions === 'fly_new_staff_positions') {
                $('.onfly_pane_staff_positions').fadeIn(100);
            }
        });
        $('.cbo_onfly_p_project_change').on('change', function () {
            var cbo_p_project = $('.cbo_onfly_p_project_change option:selected').val();
            if (cbo_p_project === 'fly_new_p_project') {
                $('.onfly_pane_p_project').fadeIn(100);
            }
        });
        $('.tobe_refilled').on('change', function () {
            var cbo_p_activity = $(this, 'option:selected').val();
            if (cbo_p_activity === 'fly_new_p_activity') {
                $('.onfly_pane_p_activity').fadeIn(100);
            }

        });

    } catch (err) {
        alert(err.message);
    }
}
function get_supplier_id_combo() {
    try {
        $('.cbo_client').change(function () {
            var cbo_supplier = $(this, ' option:selected').val();
            $('#txt_supplier_id').val(cbo_supplier);

        });
    } catch (err) {
        alert(err.message);
    }
}
function get_purchase_invoice_id_combo() {
    try {
        var res = '';
        $('.cbo_purchase_invoice').change(function () {
            var cbo_purchase_invoice = $('.cbo_purchase_invoice option:selected').val();
            $('#txt_purchase_invoice_id').val(cbo_purchase_invoice);
            var get_on_purchasereceit_from_p_invoice = cbo_purchase_invoice;
            $.post('../admin/handler.php', {get_on_purchasereceit_from_p_invoice: get_on_purchasereceit_from_p_invoice}, function (data) {
                res = data;
            }).complete(function () {
                $('.load_res').slideUp(100, function () {
                    $('.continuous_res').html(res);

                });
            });
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_main_request_id_combo() {
    try {
        $('.cbo_main_request').change(function () {
            var cbo_purchase_invoice = $(this, ' option:selected').val().trim();
            $('#txt_cbo_main_request_id').val(cbo_purchase_invoice);
            var get_items_by_request = cbo_purchase_invoice;
            var my_data = '';
            $.post('../admin/handler.php', {get_items_by_request: get_items_by_request}, function (data) {
                my_data = data;

            }).complete(function () {
                $('.req_res').html(my_data);
            });
        });
    } catch (err) {
        alert(err.message);
    }
}

function p_request_del_udpate() {
    $('.p_request_update_link').unbind('click').click(function () {
        var table_to_update = $(this).data('table');
        var id_update = $(this).attr('value').trim();
        $.post('../admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromp_request.. 
    $('.p_request_delete_link').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('table_id').trim();
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}//update from p_request_type ...

//<editor-fold defaultstate="collapsed" desc="---------location--------">
function get_locations_combos() {
    try {
        $('#sp_combo_prov').change(function () {
            var distr_by_prov = $('#sp_combo_prov option:selected').val().trim();
            $('#sp_combo_distr').empty();
            $('#sp_combo_distr').append('<option> -- District -- </option>');
            $.post('../admin/handler.php', {distr_by_prov: distr_by_prov}, function (data) {
                var final = $.parseJSON(data.trim());
                $.each(final, function (i, option) {
                    $('.middle_cbo').append($('<option/>').attr("value", option.id).text(option.name));
                });
            });
        });
        $('.middle_cbo').change(function () {
            var sector_by_distr = $('.middle_cbo option:selected').val().trim();

            $('#sp_combo_sector').empty();
            $('#sp_combo_sector').append('<option> -- Sector -- </option>');
            $.post('../admin/handler.php', {sector_by_distr: sector_by_distr}, function (data) {
                var final = $.parseJSON(data.trim());
                $.each(final, function (i, option) {
                    $('#sp_combo_sector').append($('<option/>').attr("value", option.id).text(option.name));
                });
            }).error(function () {
                alert('error occured');
            });
        });
        $('#sp_combo_sector').change(function () {
            var village_by_cell = $('#sp_combo_village option:selected').val().trim();
            $('#txt_sector_id').val(village_by_cell);
        });

        $('.combo_province').unbind('change').change(function () {
            var province = $('.combo_province option:selected').text().trim();
            $.post('../Admin/handler.php', {province: province}, function (data) {
                var dd = $('#d').html(data);
                $('#txt_province_id').val($('#d').text());
                $('#districts_res').html(data);
            });
        });
    } catch (err) {
        alert(err.message);
    }

}
//</editor-fold>

function chk_delete_update() {
    $('.dele_upd_link').click(function () {

        $('.hide_delete_update').slideToggle(20);
        return false;
    });
}
function cance_recover() {
    $('.cancel_recover').click(function () {
        $('.hidable, .abs_full').fadeOut(2);
        return false;
    });
}
function Get_data_row_clicked() {
    $('.clickable_row').click(function () {
        var unit = $(this).data('bind');
        var res = '';
        $('.data_details_pane').fadeIn(1);
        $('.add_load_gif').show();

        var id = $(this).data('table_id');
        clicked_table_id = id;
        if (unit == 'p_type_project') {
            var details_by_click_table = unit;
            var p_type_project_details_click = details_by_click_table;

            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, p_type_project_details_click: p_type_project_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.add_load_gif').hide();
            });
        }
        if (unit == 'account') {
            var details_by_click_table = unit;
            var account_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, account_details_click: account_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'account_type') {
            var details_by_click_table = unit;
            var account_type_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, account_type_details_click: account_type_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'ledger_settings') {
            var details_by_click_table = unit;
            var ledger_settings_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, ledger_settings_details_click: ledger_settings_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'bank') {
            var details_by_click_table = unit;
            var bank_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, bank_details_click: bank_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'account_class') {
            var details_by_click_table = unit;
            var account_class_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, account_class_details_click: account_class_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'general_ledger_line') {
            var details_by_click_table = unit;
            var general_ledger_line_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, general_ledger_line_details_click: general_ledger_line_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'main_contra_account') {
            var details_by_click_table = unit;
            var main_contra_account_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, main_contra_account_details_click: main_contra_account_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'sales_receit_header') {
            var details_by_click_table = unit;
            var sales_receit_header_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, sales_receit_header_details_click: sales_receit_header_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'measurement') {
            var details_by_click_table = unit;
            var measurement_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, measurement_details_click: measurement_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'journal_entry_line') {
            var details_by_click_table = unit;
            var journal_entry_line_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, journal_entry_line_details_click: journal_entry_line_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'tax') {
            var details_by_click_table = unit;
            var tax_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, tax_details_click: tax_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'vendor') {
            var details_by_click_table = unit;
            var vendor_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, vendor_details_click: vendor_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'general_ledger_header') {
            var details_by_click_table = unit;
            var general_ledger_header_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, general_ledger_header_details_click: general_ledger_header_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'party') {
            var details_by_click_table = unit;
            var party_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, party_details_click: party_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'contact') {
            var details_by_click_table = unit;
            var contact_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, contact_details_click: contact_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'customer') {
            var details_by_click_table = unit;
            var customer_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, customer_details_click: customer_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'taxgroup') {
            var details_by_click_table = unit;
            var taxgroup_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, taxgroup_details_click: taxgroup_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'journal_entry_header') {
            var details_by_click_table = unit;
            var journal_entry_header_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, journal_entry_header_details_click: journal_entry_header_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'Payment_term') {
            var details_by_click_table = unit;
            var Payment_term_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, Payment_term_details_click: Payment_term_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'item') {
            var details_by_click_table = unit;
            var item_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, item_details_click: item_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'item_group') {
            var details_by_click_table = unit;
            var item_group_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, item_group_details_click: item_group_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'item_category') {
            var details_by_click_table = unit;
            var item_category_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, item_category_details_click: item_category_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'vendor_payment') {
            var details_by_click_table = unit;
            var vendor_payment_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, vendor_payment_details_click: vendor_payment_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'sale_delivery_line') {
            var details_by_click_table = unit;
            var sale_delivery_line_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, sale_delivery_line_details_click: sale_delivery_line_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'sales_invoice_line') {
            var details_by_click_table = unit;
            var sales_invoice_line_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, sales_invoice_line_details_click: sales_invoice_line_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'sales_invoice_header') {
            var details_by_click_table = unit;
            var sales_invoice_header_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, sales_invoice_header_details_click: sales_invoice_header_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'sales_order_line') {
            var details_by_click_table = unit;
            var sales_order_line_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, sales_order_line_details_click: sales_order_line_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'sales_order_header') {
            var details_by_click_table = unit;
            var sales_order_header_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, sales_order_header_details_click: sales_order_header_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'sales_quote_line') {
            var details_by_click_table = unit;
            var sales_quote_line_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, sales_quote_line_details_click: sales_quote_line_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'sales_quote_header') {
            var details_by_click_table = unit;
            var sales_quote_header_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, sales_quote_header_details_click: sales_quote_header_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'sales_receit_header') {
            var details_by_click_table = unit;
            var sales_receit_header_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, sales_receit_header_details_click: sales_receit_header_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'purchase_invoice_header') {
            var details_by_click_table = unit;
            var purchase_invoice_header_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, purchase_invoice_header_details_click: purchase_invoice_header_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'purchase_invoice_line') {
            var details_by_click_table = unit;
            var purchase_invoice_line_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, purchase_invoice_line_details_click: purchase_invoice_line_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'purchase_order_header') {
            var details_by_click_table = unit;
            var purchase_order_header_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, purchase_order_header_details_click: purchase_order_header_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'purchase_order_line') {
            var details_by_click_table = unit;
            var purchase_order_line_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, purchase_order_line_details_click: purchase_order_line_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'purchase_receit_header') {
            var details_by_click_table = unit;
            var purchase_receit_header_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, purchase_receit_header_details_click: purchase_receit_header_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'purchase_receit_line') {
            var details_by_click_table = unit;
            var purchase_receit_line_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, purchase_receit_line_details_click: purchase_receit_line_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'Inventory_control_journal') {
            var details_by_click_table = unit;
            var Inventory_control_journal_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, Inventory_control_journal_details_click: Inventory_control_journal_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'user') {
            var details_by_click_table = unit;
            var user_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, user_details_click: user_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'role') {
            var details_by_click_table = unit;
            var role_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, role_details_click: role_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'staff_positions') {
            var details_by_click_table = unit;
            var staff_positions_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, staff_positions_details_click: staff_positions_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'request') {
            var details_by_click_table = unit;
            var request_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, request_details_click: request_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'supplier') {
            var details_by_click_table = unit;
            var supplier_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, supplier_details_click: supplier_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'client') {
            var details_by_click_table = unit;
            var client_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, client_details_click: client_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'p_budget') {
            var details_by_click_table = unit;
            var p_budget_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, p_budget_details_click: p_budget_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'p_activity') {
            var details_by_click_table = unit;
            var p_activity_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, p_activity_details_click: p_activity_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'Main_Request') {
            var details_by_click_table = unit;
            var Main_Request_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, Main_Request_details_click: Main_Request_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'p_budget_prep') {
            var details_by_click_table = unit;
            var p_budget_prep_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, p_budget_prep_details_click: p_budget_prep_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'payment_voucher') {
            var details_by_click_table = unit;
            var payment_voucher_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, payment_voucher_details_click: payment_voucher_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'delete_update_permission') {
            var details_by_click_table = unit;
            var delete_update_permission_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, delete_update_permission_details_click: delete_update_permission_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'stock_taking') {
            var details_by_click_table = unit;
            var stock_taking_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, stock_taking_details_click: stock_taking_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1);
            });
        }
        if (unit == 'p_budget_items') {
            var details_by_click_table = unit;
            var p_budget_items_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, p_budget_items_details_click: p_budget_items_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1000);
            });
        }
        if (unit == 'p_request') {
            var details_by_click_table = unit;
            var p_request_details_click = details_by_click_table;
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, p_request_details_click: p_request_details_click}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.data_details_pane').html(res);
                $('.data_details_pane_load').fadeOut(1000);
            });
        }
        if (unit == 'budget_for_details') {//This is the report (view) of the overall budget report not a real unit
            var budget_for_details = unit;
            var id = $(this).data('prjtype');
            var p_request_details_click = details_by_click_table;
            $('.add_load_gif').show();
            $.post('../admin/handler.php', {details_by_click_table: details_by_click_table, id: id, budget_for_details: budget_for_details}, function (data) {
                res = data;
            }).complete(function () {
                $('.data_details_pane_title').html('Budget Line->Projects');
                $('.add_load_gif').hide(function () {
                    $('.data_details_pane').html(res);
                });

            });
        }
    });

}
function continue_to_pourchaseinvoice() {
    $('#selct_f_year').click(function () {
//        alert('Click on the go ..!');
    });
}
function save_pos() {
}
function main_small_stock_switch() {
    $('#stock_rep_main_stock_link').click(function () {
        $('.main_stock_pane').slideDown(10);
        $('.small_stock_pane').slideUp(10);
        return false;
    });
    $('#stock_rep_small_stock_link').click(function () {
        $('.main_stock_pane').slideUp(10);
        $('.small_stock_pane').slideDown(10);
        return false;
    });
    $('.btn_main_search').click(function () {
        var main_stock_item = $('#txt_main_stock').val();
        $('.load_res_box').show(10);
        var res = '';
        $.post('../admin/handler.php', {main_stock_item: main_stock_item}, function (data) {
            res = data;
        }).complete(function () {
            $('.load_res_box').hide(10, function () {
                $('.data_res').html(res);
            });
        });
    });
    $('.btn_small_search').click(function () {

    });

}
function table2_finance() {
    $('.income_table2 tr td:nth-child(2)').addClass('second_td');

}

function scroll_on_page() {//This is to check if the page sho=uld be scrolled back to the top. The first implementation is used on Journal entry
    setTimeout(function () {

//        $('html, body').animate({scrollTop: 7}, 500);

    }, 200);
    scroll_on_page();
}
function journal_entry_line_del_udpate() {
    $('.journal_entry_line_update_link').click(function () {
        try {
            $('.load_in_center').fadeIn(100);
            table_to_update = 'journal_transactions';
            table_to_delete = 'journal_transactions';
            current_del_btn = $(this);
            id_update = $(this).data('table_id');
            id_delete = $(this).data('table_id');
            journal_trans = id_update;
            var journal_update = id_update;

            $('.load_in_center').fadeIn(100);
            $('.cbo_account_arr').val('');
            $('.j_debit_txt').val('');
            $('.j_credit_txt').val('');
            $('.txt_memo').val('');
            $('.cbo_tax_arr').val('');
            $('.link_to_project').val('');
            $('.cbo_account_arr').val('');
            var c = 0;
            var final = '', final2 = '';
            $.post('../admin/handler.php', {journal_update: journal_update, id_update: id_update, table_to_update: table_to_update}, function (data) {
                final = $.parseJSON(data.trim());
                $.each(final, function (i, option) {
                    $('.upd_refill:eq(' + c + ')').val(option.account.trim());
                    $('.upd_refill:eq(' + c + ')').append('<span>' + option.id_update + '</span>');
                    var dr_cr = (option.dr_cr);
                    if (dr_cr == 'Debit') {
                        $('.j_debit_txt:eq(' + c + ')').val(option.amount);
                    } else {
                        $('.j_credit_txt:eq(' + c + ')').val(option.amount);
                    }
                    $('.txt_memo:eq(' + c + ')').val(option.memo);
                    $('.cbo_tax_arr:eq(' + c + ')').val(option.tax);
                    $('.link_to_project:eq(' + c + ')').val(option.activity);
                    c += 1;
                });
            }).complete(function () {
                $('.load_in_center').fadeOut(100);
                $('html, body').animate({scrollTop: 10}, 500);
                $('.cancel_btn').slideDown(100);
                $('.new_data_box').slideDown(50);
                $('.delete_btn').slideDown(50);
                $('#txt_shall_expand_toUpdate').val(table_to_delete);
            });

            //Get the tax that was saved witht the transaction
            var get_tax_by_journal = journal_trans;  //This is the journal_transactrion id 
            $.post('../admin/handler.php', {get_tax_by_journal: get_tax_by_journal}, function (data) {
                final = $.parseJSON(data.trim());
                $.each(final, function (i, option) {
                    $('.cbo_tax_upd:eq(' + i + ')').val(option.tax_type);
                });
            });

            //Get the client taht was saved with the transaction
            var get_party_by_journal = journal_trans;
            final = '';

            $.post('../admin/handler.php', {get_party_by_journal: get_party_by_journal}, function (data) {
                final = $.parseJSON(data.trim());
                $.each(final, function (i, option) {
                    $('.cbo_party_upd:eq(' + i + ')').val(option.party_id);
                    console.log('The returned' + data);
                });
            }).complete(function () {
                $('.load_in_center').fadeOut(100);
            });

        } catch (err) {
            alert(err.message);
        }
    });//delete fromjournal_entry_line.. 
    $('.journal_entry_line_delete_link').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}

function p_request_del_udpate() {
    $('.p_request_update_link').click(function () {
//        var table_to_update = $(this).closest('td').siblings('.p_request').attr('title');
        var table_to_update = $(this).data('table');
        var id_update = $(this).data('id_update');

//        var id_update = $(this).attr('value').trim();
        var items_by_request = id_update;
        $('.load_in_center').fadeIn(100);

        //Clear all the fields
        $('.cbo_items').val('');
        $('.bgt_txt_msrment').val('');
        $('.bgt_txt_unitC').val('');
        $('.item_txt_qty').val('');
        $('.item_txt_amnt').val('');
        $('.cbo_field').val('');

        $.post('../admin/handler.php', {id_update: id_update, items_by_request: items_by_request, table_to_update: table_to_update}, function (data) {
            var final = $.parseJSON(data.trim());
            var c = 0;

            $.each(final, function (i, option) {
                $('.cbo_items:eq(' + c + ')').val(option.id);
                $('.cbo_items:eq(' + c + ')').append('<span>' + option.req + '</span>');//This is the span that takes the request id. each combo box takes the request by which the update will  be done
                $('.bgt_txt_msrment:eq(' + c + ')').val(option.item);
                $('.bgt_txt_msrment:eq(' + c + ')').val(option.msrmnt);
                $('.bgt_txt_unitC:eq(' + c + ')').val(option.uc);
                $('.item_txt_qty:eq(' + c + ')').val(option.qty);
                $('.item_txt_amnt:eq(' + c + ')').val(option.amount);
                $('.cbo_field').val(option.field);
                $('.cbo_acti_by_proj').append($('<option/>').attr("value", option.id).text(option.name));
                c += 1;
            });

            $('.load_in_center').fadeOut(100, function () {
                $('.new_data_box').slideDown(300);
                $('.cancel_btn').slideDown()();

            });

        }).complete(function () {

        });

        $('.cancel_btn').slideDown()();
    });//delete fromp_request.. 
    $('.p_request_delete_link').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('table_id');
        current_del_btn = $(this);
//        alert('Before we show here are the vars: table_to_del: '+table_to_delete+' id_del: '+id_delete );
        show_Y_N_dialog();

    });
}//update from p_request_type ...

 
//update from tax ...
function show_Y_N_dialog() {
    $('.y_n_dialog , .any_full_bg').fadeIn(300, function () {
        $('.dialog_yes_no').delay(100).show("drop", {direction: "up"}, 130);
    });

}
function hide_Y_N_dialog() {//here the user will be confirming to delete the record
    $('#user_yes_btn,  .yes_dlg_btn').click(function () {
        $('.y_n_dialog').fadeOut(300);
        $.post('../admin/handler_update_details.php', {id_delete: id_delete, table_to_delete: table_to_delete}, function (data) {

        }).complete(function () {
            unset_update_session();
            current_del_btn.closest('tr').slideUp(400);
            window.location.reload();
        });
    });
    $('#no_btn, .no_dlg_btn, .no_btn').click(function () {
        $('.dialog_yes_no').hide('slide', {direction: 'up'}, 200, function () {
            $('.y_n_dialog').delay(100).fadeOut(200);
        });
    });

}
function project_expectations_del_udpate() {
    $('.project_expectations_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.project_expectations').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromproject_expectations.. 
    $('.project_expectations_delete_link').unbind('click').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}

//Other deletes

function p_budget_del_udpate() {
    $('.p_budget_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.p_budget').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromp_budget.. 
    $('.p_budget_delete_link').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}//update from p_budget_items ...

function p_budget_items_del_udpate() {
    $('.p_budget_items_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.p_budget_items').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromp_budget_items.. 
    $('.p_budget_items_delete_link').unbind('click').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}//update from p_items_expenses ...

function p_items_expenses_del_udpate() {
    $('.p_items_expenses_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.p_items_expenses').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromp_items_expenses.. 
    $('.p_items_expenses_delete_link').unbind('click').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}//update from p_items_type ...

function p_items_type_del_udpate() {
    $('.p_items_type_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.p_items_type').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromp_items_type.. 
    $('.p_items_type_delete_link').unbind('click').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}//update from p_chart_account ...

function p_chart_account_del_udpate() {
    $('.p_chart_account_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.p_chart_account').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromp_chart_account.. 
    $('.p_chart_account_delete_link').unbind('click').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}//update from p_department ...

function p_department_del_udpate() {
    $('.p_department_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.p_department').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromp_department.. 
    $('.p_department_delete_link').unbind('click').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}//update from p_unit ...

function p_unit_del_udpate() {
    $('.p_unit_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.p_unit').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromp_unit.. 
    $('.p_unit_delete_link').unbind('click').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}//update from p_staff ...

function p_staff_del_udpate() {
    $('.p_staff_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.p_staff').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromp_staff.. 
    $('.p_staff_delete_link').unbind('click').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}//update from p_fund_request ...

function p_fund_request_del_udpate() {
    $('.p_fund_request_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.p_fund_request').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromp_fund_request.. 
    $('.p_fund_request_delete_link').unbind('click').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}//update from p_approvals ...

function p_approvals_del_udpate() {
    $('.p_approvals_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.p_approvals').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromp_approvals.. 
    $('.p_approvals_delete_link').unbind('click').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}//update from p_user_approvals ...

function p_user_approvals_del_udpate() {
    $('.p_user_approvals_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.p_user_approvals').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromp_user_approvals.. 
    $('.p_user_approvals_delete_link').unbind('click').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}//update from p_project ...

function p_project_del_udpate() {
    $('.p_project_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.p_project').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromp_project.. 
    $('.p_project_delete_link').unbind('click').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}//update from p_approvals_type ...

function p_approvals_type_del_udpate() {
    $('.p_approvals_type_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.p_approvals_type').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromp_approvals_type.. 
    $('.p_approvals_type_delete_link').unbind('click').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}//update from p_other_expenses ...

function p_other_expenses_del_udpate() {
    $('.p_other_expenses_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.p_other_expenses').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromp_other_expenses.. 
    $('.p_other_expenses_delete_link').unbind('click').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}//update from p_type_project ...

function p_type_project_del_udpate() {
    $('.p_type_project_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.p_type_project').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromp_type_project.. 
    $('.p_type_project_delete_link').unbind('click').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}//update from p_activity ...

function p_activity_del_udpate() {
    $('.p_activity_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.p_activity').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromp_activity.. 
    $('.p_activity_delete_link').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}//update from p_field ...

function p_field_del_udpate() {
    $('.p_field_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.p_field').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromp_field.. 
    $('.p_field_delete_link').unbind('click').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}//update from p_province ...

function p_province_del_udpate() {
    $('.p_province_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.p_province').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromp_province.. 
    $('.p_province_delete_link').unbind('click').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}//update from p_district ...

function p_district_del_udpate() {
    $('.p_district_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.p_district').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromp_district.. 
    $('.p_district_delete_link').unbind('click').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}//update from p_sector ...

function p_sector_del_udpate() {
    $('.p_sector_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.p_sector').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromp_sector.. 
    $('.p_sector_delete_link').unbind('click').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}//update from p_fiscal_year ...

function p_fiscal_year_del_udpate() {
    $('.p_fiscal_year_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.p_fiscal_year').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromp_fiscal_year.. 
    $('.p_fiscal_year_delete_link').unbind('click').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}//update from p_users ...

function p_users_del_udpate() {
    $('.p_users_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.p_users').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromp_users.. 
    $('.p_users_delete_link').unbind('click').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}//update from p_roles ...

function p_roles_del_udpate() {
    $('.p_roles_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.p_roles').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromp_roles.. 
    $('.p_roles_delete_link').unbind('click').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}//update from p_measurement ...

function p_measurement_del_udpate() {
    $('.p_measurement_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.p_measurement').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromp_measurement.. 
    $('.p_measurement_delete_link').unbind('click').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}//update from p_request ...


function p_request_type_del_udpate() {
    $('.p_request_type_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.p_request_type').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromp_request_type.. 
    $('.p_request_type_delete_link').unbind('click').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}//update from p_qty_request ...

function p_qty_request_del_udpate() {
    $('.p_qty_request_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.p_qty_request').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromp_qty_request.. 
    $('.p_qty_request_delete_link').unbind('click').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}//update from p_Currency ...

function p_Currency_del_udpate() {
    $('.p_Currency_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.p_Currency').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromp_Currency.. 
    $('.p_Currency_delete_link').unbind('click').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}//update from p_budget_prep ...

function p_budget_prep_del_udpate() {
    $('.p_budget_prep_update_link').click(function () {
        var table_to_update = $(this).data('table');
        var id_update = $(this).data('id_delete');
        $.post('../admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromp_budget_prep.. 
    $('.p_budget_prep_delete_link').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}//update from p_bdgt_prep_expenses ...

function p_bdgt_prep_expenses_del_udpate() {
    $('.p_bdgt_prep_expenses_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.p_bdgt_prep_expenses').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromp_bdgt_prep_expenses.. 
    $('.p_bdgt_prep_expenses_delete_link').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });



}//update from project_expectations ...

function project_expectations_del_udpate() {
    $('.project_expectations_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.project_expectations').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromproject_expectations.. 
    $('.project_expectations_delete_link').unbind('click').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}//update from p_fund_usage ...

function p_fund_usage_del_udpate() {
    $('.p_fund_usage_update_link').unbind('click').click(function () {
        var table_to_update = $(this).closest('td').siblings('.p_fund_usage').attr('title');
        var id_update = $(this).attr('value').trim();
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromp_fund_usage.. 
    $('.p_fund_usage_delete_link').unbind('click').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();

    });
}

function journal_transactions_del_udpate() {
    $('.journal_transactions_update_link').unbind('click').click(function () {
        var table_to_update = $(this).data('table');
        var id_update = $(this).data('table_id');
        $.post('../Admin/handler.php', {id_update: id_update, table_to_update: table_to_update}, function (data) {

        }).complete(function () {
            window.location.replace('redirect.php');
        });
    });//delete fromjournal_transactions.. 
    $('.journal_transactions_delete_link').unbind('click').click(function () {
        table_to_delete = $(this).data('table');
        id_delete = $(this).data('id_delete');
        current_del_btn = $(this);
        show_Y_N_dialog();
    });
}


























































        