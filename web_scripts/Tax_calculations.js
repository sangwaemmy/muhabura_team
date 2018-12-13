var current_formula = 0;
var sign = '';
var left_val = '', right_val = '';
var first_txtbox = '';
var units = [];
var selfid = '', self = '';
var leveled_up = 'no';
var whole_thing = '';
$(document).ready(function () {
    tax_label_col();
    sign_click();
});

function tax_label_col() {
    var values = [];
    $('.conf_tax').click(function () {
        try {
            var taxid = $(this).data('bind');
            var dis = $(this).closest('tr').find('.value_td > .textbox').val('');
            current_formula=0;
            left_val='';
            right_val='';
            sign='';
                    
        } catch (err) {
            alert(err.message);
        }
    });
    $('.tax_label_col').click(function () {
        try {
            whole_thing += $(this).data('bind');

            var is_warn_visible = $('.warn').is(':hidden');
//            if (sign === '' && left_val!=='' && right_val!=='') {
//                $('#warn_box').slideDown(100).text('Make sure you have chosen the sign');
//            } else {
            if (current_formula < 1) {
                current_formula = $(this).data('bind');
                $('.tips_res').html(left_val);
                var its_txtbox = $(this).closest('tr').find('.value_td > .textbox').focus().val('=');
                first_txtbox = $(this).closest('tr').find('.value_td > .textbox');

            } else if (typeof first_txtbox !== "undefined" && left_val === '') {
                first_txtbox.val('=' + $(this).data('bind'));
                left_val = $(this).data('bind');

            } else if (typeof first_txtbox !== "undefined" && left_val !== '' && right_val === '') {
                right_val = $(this).data('bind');
                units.push(left_val + sign + right_val);
                $('.tips_res').html(units);
                first_txtbox.val('=' + left_val + sign + right_val);
              
//                var its_txtbox = $(this).closest('tr').find('.value_td > .textbox').focus().val();
            } else if (left_val !== '' && typeof first_txtbox !== 'undefined' && right_val !== '') {
                //save the formula
                var save_formular = 'c';
                var this_ref = $(this);
      
                self = 'yes';

                var taxexists = tax_exstis(current_formula); right_val = this_ref.data('bind');
                if (taxexists !== '') {
//                    alert('tax exists, lets save with: ' + current_formula + sign + right_val);
                } else {
//                    alert('tax not exists, lets save with: ' + left_val + sign + right_val);
                }

                $.post('../admin/handler.php', {current_formula: current_formula, left_val: left_val, right_val: right_val, self: self, sign: sign, save_formular: save_formular}, function (data) {

                }).complete(function () {
                   
                    first_txtbox.val('=' + left_val + sign + right_val);
                    
                    right_val='';

                });
            } else {
//                right_val = $(this).data('bind');
//                var its_txtbox = $(this).closest('tr').find('.value_td > .textbox').focus().val();
            }
            $('#warn_box').slideUp(100);
//            }

        } catch (err) {
            alert(err.message);
        }
    });
}

function sign_click() {
    $('#pls, #mns, #mult, #dvd').click(function () {
        try {

            whole_thing += $(this).html();

            var aftr = $(this);
            if (left_val === '' && typeof first_txtbox !== 'undefined' && right_val === '') {
                $('#warn_box').slideDown(100).text('You have to select the first value first first');
            } else if (left_val !== '' && typeof first_txtbox !== 'undefined' && right_val !== '') {
//                var sign_exist = tax_exstis(current_formula);
                var save_formular = 'c';
                self = 'yes';
                $.post('../admin/handler.php', {current_formula: current_formula, left_val: left_val, right_val: right_val, self: self, sign: sign, save_formular: save_formular}, function (data) {
                    
                }).complete(function () {
                    self = 'yes';
                    sign = aftr.html();
                    first_txtbox.val('=' + left_val + sign + right_val + sign);
                    left_val = current_formula;
                  
                });
            } else {
                sign = $(this).html();
                first_txtbox.val('=' + left_val + $(this).html());
            }

//            if (current_formula > 0) {
//                sign = $(this).html();
//                $('.tips_res').html(left_val + sign);
//            } else {
//                $('#warn_box').slideDown(100).text('You have to select the formula first');
//            }
            $('#warn_box').slideDown(100);

//        $('.sign_tds').removeClass('sign_table_td_highlight');
//        $(this).addClass('sign_table_td_highlight');
        } catch (err) {
            alert(err.message);
        }
    });

}
function tax_exstis(tax) {
    var tax_exists = tax;
    var res = '';
    $.post('../admin/handler.php', {tax_exists: tax_exists}, function (data) {
        res = data;
    }).complete(function () {

    });
    return res;
}