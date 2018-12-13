try {
    $('#ending_date').datepicker({
        dataFormat: 'yy-mm-dd'
    });

    $('#inc_rdio').click(function () {
        if ($('#inc_rdio').is(':checked')) {
            $('.inc_pane').show();
            $('.bal_pane').hide();
            //                                    $('#chosen_label').html('Income Statement accounts');
        }
    });
    $('#bal_rdio').click(function () {
        if ($('#bal_rdio').is(':checked')) {
            $('.inc_pane').hide();
            $('.bal_pane').show();
            //                                    $('#chosen_label').html('Balance sheet accounts');
        }
    });
    $('#sub_account_chk').click(function () {
        if ($(this).is(':checked')) {
            $('.hidable').show();
        } else {
            $('.hidable').hide();
        }
    });
    $('#sub_account_chk2').click(function () {
        if ($(this).is(':checked')) {
            $('.hidable2').show();
        } else {
            $('.hidable2').hide();
        }
    });
    $('#sub_account_chk3').click(function () {
        if ($(this).is(':checked')) {
            $('.hidable3').show();
        } else {
            $('.hidable3').hide();
        }
    });
    $('#sub_account_chk4').click(function () {
        if ($(this).is(':checked')) {
            $('.hidable4').show();
        } else {
            $('.hidable4').hide();
        }
    });
    $('.cbo_account').change(function () {
        var the_val = $(this, 'option:select').val();
        $('.txt_acc').val(the_val);
    });

//<editor-fold defaultstate="collapsed" desc="-------------validate the balance sheet on the radion buttons, book sections -------------------------">

///Validate the book section. This is jus to warn the suer that he has to select the book section while saving the book account
    $('#btn_save_asset').click(function () {
        var fix = $('#fixed').is(':checked');
        var curr = $('#current').is(':checked');
        //the an account is bank or not
        var bankyes = $('#rad_no').is(':checked');
        var bankno = $('#rad_yes').is(':checked');
        if (!fix && !curr) {
            $('#warn_empty_asset_radio').html('You have to sepcify the book section, either Fixed or the current');
            return false;
        } else {
            return true;
        }

        if (!bankno && !bankyes) {
            $('#warn_empty_bank_radio').html('You have to sepcify if the account is a bank account');
            return false;
        } else {
            return true;
        }

    });
    $('#fixed, #current').click(function () {
        $('#warn_empty_asset_radio').html('');
    });
    $('#rad_no, #rad_yes').click(function () {
        $('#warn_empty_bank_radio').html('');
    });
    $('#btn_save_liability').click(function () {
        var lib = $('#liability').is(':checked');
        var eqty = $('#equity').is(':checked');
        if (!lib && !eqty) {
            $('#warn_empty_libeqty_radio').html('You have to sepcify the book section, either Liability  or the Equity');
            return false;
        } else {
            return true;
        }
    });
    $('#fix').click(function () {
        if ($(this).is(':checked')) {
            $('#warn_empty_asset_radio').slideUp(10);
        }
    });
//</editor-fold>
    $('.cbo_aset').change(function () {
        var acc = $('.cbo_aset option:selected').text().trim();
        if (acc === 'Cash_hand_bank  (BALANCE SHEET)') {
            $('.row_bankyn').show();
        } else {
            $('.row_bankyn').hide();
        }
    });
    $('.cbo_sub_acc').change(function () {
        $('#txt_acc_class_id').val($(this, 'option:selected').val());

    });
    
    
    //The global method written here but used on account.php (below)
    
    function swtich_account() {
        if ($('#bal_rdio').is(':checked')) {
            $('.inc_pane').hide();
            $('.bal_pane').show();
            //                                    $('#chosen_label').html('Balance sheet accounts');
        }if ($('#inc_rdio').is(':checked')) {
            $('.inc_pane').show();
            $('.bal_pane').hide();
            //                                    $('#chosen_label').html('Income Statement accounts');
        }
    }
    
} catch (err) {
    alert(err.message);
}