/* global , $,   document                           */
$(document).ready(function () {
    'use strict';
    $('select').material_select();
});

$(document).ready(function () {
    'use strict';
    $('input#input_text, textarea#textarea1').characterCounter();
});

// add asterisk on required filed

$('input, textarea').each(function () {
    'use strict';
    if ($(this).attr('required') === 'required') {
        $(this).before('<span class="asterisk">.</span>');
    }

});

/* popup validation error */

$(document).ready(function () {
    'use strict';

    function getErrors(inputClass, alertErrorClass) {
        $(inputClass).blur(function () {
            if ($(this).val() === "") {
                $(alertErrorClass).fadeIn(200);
                $(this).css('border-bottom', '1px solid #F44336');
                $(this).css('box-shadow', '0 1px 0 0 #F44336');
                $(this).css('-webkit-box-shadow', '0 1px 0 0 #F44336');
                $(this).siblings().css('color', '#F44336');
            } else {
                $(alertErrorClass).fadeOut(200);
                $(this).css('border-bottom', '1px solid #52D1D3');
                $(this).css('box-shadow', '0 1px 0 0 #52D1D3');
                $(this).css('-webkit-box-shadow', '0 1px 0 0 #52D1D3');
                $(this).siblings().css('color', '#52D1D3');

            }
        });
    }

    // Function to check the email
    getErrors('.email', '.alert-error-email');
    // To check the number
    getErrors('.number', '.alert-error-number');
    // Function to check the text
    getErrors('.text', '.alert-error-text');
    // Function to check description
    getErrors('.description', '.alert-error-description');

    // Function to check select

    $('select').hover(function () {
        if ($('select').val() === "") {
            $('.list .input-field').css('color', '#f00');
            $('.list .input-field i').css('color', '#f00');
            /*$('.alert-error-pais').fadeIn(200);
            $(this).css('border-bottom', '1px solid #F44336');
            $(this).css('box-shadow', '0 1px 0 0 #F44336');
            $(this).css('-webkit-box-shadow', '0 1px 0 0 #F44336');
            $(this).siblings().css('color', '#F44336');
            */
        } else {
            $('.alert-error-pais').fadeOut(200);
            $(this).css('border-bottom', '1px solid #52D1D3');
            $(this).css('box-shadow', '0 1px 0 0 #52D1D3');
            $(this).css('-webkit-box-shadow', '0 1px 0 0 #52D1D3');
            $(this).siblings().css('color', '#52D1D3');

        }

    });
    //var selectValue;
    //selectValue = document.getElementById("mySelect").value;
    $('option').click(function () {
        $(this).setAttribute('selected');
    });

});
