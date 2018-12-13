var res = '';// this the data posted back variable
$(document).ready(function () {
    search_report();
    defaults();
    report_chosen_combo();
    add_date_txt();
});


function search_report() { //this is what will happen on the button click (rep_by_date.php
    $('.sys_rep_btn').click(function () {
        try {
            var report = $('.cbo_sys_rep option:selected').val();
            res = '';
            if (report !== '') {
                $('.load_res').show();
                if (report == 'Budget Lines - revenues expenses') {
                    var report_budget_lines = $('.cbo_also_rep option:selected').text().trim();
                    $.post('../admin/handler_report.php', {report_budget_lines: report_budget_lines}, function (data) {
                        res = data;
                    }).complete(function () {
                        $('.rep_result_box').html(res);
                        $('.load_res').hide(10);
                    });
                } else if (report == 'Stock Items') {
                    var report_item_stock = $('.cbo_also_rep option:selected').text().trim();
                    $.post('../admin/handler_report.php', {report_item_stock: report_item_stock}, function (data) {
                        res = data;
                    }).complete(function () {
                        $('.rep_result_box').html(res);
                        $('.load_res').hide(10);
                    });
                } else if (report == 'Budget Lines') {
                    res = '';
                    var report_budget_lines = 'c';
                    var min_date = $('#txt_min_date').val();
                    var max_date = $('#txt_max_date').val();
                    $.post('../admin/handler_report.php', {min_date: min_date, max_date: max_date, report_budget_lines: report_budget_lines}, function (data) {
                        res = data;
                    }).complete(function () {
                        $('.rep_result_box').html(res);
                        $('.load_res').hide(10);
                    });
                } else if (report == 'Income Statement') {
                    res = '';
                    var report_income_statement = 'c';
                    var min_date = $('#txt_min_date').val();
                    var max_date = $('#txt_max_date').val();
                    $.post('../admin/handler_report.php', {min_date: min_date, max_date: max_date, report_income_statement: report_income_statement}, function (data) {
                        res = data;
                    }).complete(function () {
                        $('.rep_result_box').html(res);
                        $('.load_res').hide(10);
                    });
                } else if (report == 'Balance sheet') {
                    res = '';
                    var report_balance = 'c';
                    var min_date = $('#txt_min_date').val();
                    var max_date = $('#txt_max_date').val();
                    $.post('../admin/handler_report.php', {min_date: min_date, max_date: max_date, report_balance: report_balance}, function (data) {
                        res = data;
                    }).complete(function () {
                        $('.rep_result_box').html(res);
                        $('.load_res').hide(10);
                    });
                } else if (report == 'Purchases') {
                    res = '';
                    var report_purchases = 'c';
                    var min_date = $('#txt_min_date').val();
                    var max_date = $('#txt_max_date').val();
                    $.post('../admin/handler_report.php', {min_date: min_date, max_date: max_date, report_purchases: report_purchases}, function (data) {
                        res = data;
                    }).complete(function () {
                        $('.rep_result_box').html(res);
                        $('.load_res').hide(10);
                    });
                } else if (report = 'Sales') {
                    res = '';
                    var report_sales = 'c';
                    var min_date = $('#txt_min_date').val();
                    var max_date = $('#txt_max_date').val();
                    $.post('../admin/handler_report.php', {min_date: min_date, max_date: max_date, report_sales: report_sales}, function (data) {
                        res = data;
                    }).complete(function () {
                        $('.rep_result_box').html(res);
                        $('.load_res').hide(10);
                    });
                } else if (report = 'Request') {
                    res = '';
                    var report_requests = 'c';
                    var min_date = $('#txt_min_date').val();
                    var max_date = $('#txt_max_date').val();
                    $.post('../admin/handler_report.php', {min_date: min_date, max_date: max_date, report_requests: report_requests}, function (data) {
                        res = data;
                    }).complete(function () {
                        $('.rep_result_box').html(res);
                        $('.load_res').hide(10);
                    });
                }
            }
        } catch (err) {
            alert(err.message);
        }
    });

}

function defaults() {
    $('#header2').slideUp();
    $('#my_header').slideUp();

}

function report_chosen_combo() {//this is what will happen when we select something from combobox
    $('.cbo_sys_rep').change(function () {
        var report = $(this, 'option:selected').val();
        if (report == 'Items') {
            $('.main_stock_items_bx').slideDown(20);
            $('.txt_rep_val').hide(10);

        } else if (report == 'Budget Lines') {
            $('.txt_rep_val').show(10);
        } else {
            $('.txt_rep_val').hide(10);
        }
    });
}
function add_date_txt() {
    $('#txt_min_date, #txt_max_date').datepicker({
        dateFormat: 'yy-mm-dd'
    });
}