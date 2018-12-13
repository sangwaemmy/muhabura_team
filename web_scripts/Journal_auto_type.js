var dr_cr_activityid = '';//Tjhis is the id that will be link to a journal entry transaction
var dr_cr_activityname = '';//Tjhis is the name that will be link to a journal entry transaction
var pic_holder = '';
var previous_activity = '';



$(document).ready(function () {
    Get_Credit_auto_typed();
    get_balanced_journal();
    get_journal_links_to_project();
    show_any_dialog();
});

function Get_Credit_auto_typed() {
    try {
        var credit2 = '';
        var credit3 = '';
        var credit4 = '';
        var credit5 = '';
        var credit6 = '';
        var credit7 = '';
        var credit8 = '';
        var debit1 = '';
        var debit2 = '';
        var debit3 = '';
        var debit4 = '';
        var debit5 = '';
        var debit6 = '';
        var debit7 = '';
        var debit8 = '';
        $('#txt_debit1').keyup(function () {
            debit1 = $(this).val();
            if (debit1 !== '') {
                $('#txt_credit2').val(debit1);
            }
        });
        $('#txt_debit2').keyup(function () {
            debit2 = $(this).val();
            $('#txt_credit3').val(debit2);
        });
        $('#txt_debit3').keyup(function () {
            debit3 = $(this).val();
            $('#txt_credit4').val(debit3);
        });
        $('#txt_debit4').keyup(function () {
            debit4 = $(this).val();
            $('#txt_credit5').val(debit4);
        });
        $('#txt_debit5').keyup(function () {
            debit6 = $(this).val();
            $('#txt_credit6').val(debit6);
        });
        $('#txt_debit6').keyup(function () {
            debit7 = $(this).val();
            $('#txt_credit7').val(debit7);
        });
        $('#txt_debit7').keyup(function () {
            debit8 = $(this).val();
            $('#txt_credit8').val(debit8);
        });
    } catch (err) {
        alert(err.message);
    }
}
function get_balanced_journal() {
    var am = parseInt(0);
    var am2 = parseInt(0);

    var tn = 0;
    var tn2 = 0;
    setTimeout(function () {

        $('.j_debit_txt').each(function (i) {
            if ($(this).val() !== '') {
                var n = $(this).val();
                tn = parseInt(n.replace(',', ''));
                am += tn;

            }
        });
        $('.j_credit_txt').each(function () {
            if ($(this).val() !== '') {
                var n = $(this).val();
                tn2 = parseInt(n.replace(',', ''));
                am2 += tn2;
            }
        });
        if (am !== am2) {
            $('#valid_balance_txt').slideDown().html('Not valid=> Debit: ' + am + '  and debit: ' + am2);
            $('#save_journal').hide();
        } else {
            $('#valid_balance_txt').slideUp();
            $('#save_journal').show();
        }

        get_balanced_journal();
    }, 500);





}

function get_journal_links_to_project() {
    $('.link_to_project').click(function () {
//        alert('Click on the go ..!');
    });
}
function show_any_dialog() {    //These are other journal entry scripts
    $('.dif_bg').click(function () {//This is the journal td, clicked to show the budget, activities pane
        dr_cr_activityid = $(this).find('span > .j_txt_projid');
        dr_cr_activityname = $(this).find('span > .j_txt_proj_name');
        if (dr_cr_activityid.val() !== '') {
            $('.tab_prev_activity').show(1);
            $('.proj_table').hide(1);
            $('.btn_new_cancel').show(1);
            $('#activity_by_link').html(dr_cr_activityname.val());
            
        } else {
            $('.tab_prev_activity').hide(1);
            $('.proj_table').show(1);
            $('.btn_new_cancel').hide(1);
            $('.cbo_fill_activity').empty();
            $('.cbo_fill_projects').empty();
             
        }
        $('.any_full_bg, .sub_full_bg').fadeIn(200);
        pic_holder = $(this);

    });
    $('.btn_select_j_proj').click(function () {
        var activityid = $('.cbo_fill_activity option:selected').val().trim();
        var activityname = $('.cbo_fill_activity option:selected').text().trim();

        if (activityid !== '' && activityid !== '--Add new --') {
            dr_cr_activityid.val(activityid);
            dr_cr_activityname.val(activityname);
            $('.any_full_bg, .sub_full_bg').fadeOut(200);
            pic_holder.addClass('ticked');//here is where we add a tick to show confirmation
            $('.warn_msg').hide(1);
        } else {
            $('.warn_msg').show(1);
        }
    });
    $('.cancel_proj_dg').click(function () {
        $('.any_full_bg, .sub_full_bg').fadeOut(200);
    });
    $('.dif_td a').click(function () {
        $('.tab_prev_activity').hide(1);
        $('.proj_table').show(1);
        $('.btn_new_cancel').hide(1);
    });
}      