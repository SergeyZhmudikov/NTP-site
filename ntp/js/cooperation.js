$(document).ready(function() {
    $('.cooperate_field, .cooperate_textarea ').blur(function() {
        if ($(this).val() != '') {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if (pattern.test($(this).val())) {
                $(this).css({ 'border': '1px solid #00B1EB' });
                // $('#valid').text('Верно');
            } else {
                $(this).css({ 'border': '1px solid #EB0000' });
                // $('#valid').text('Не верно');
            }
        } else {
            $(this).css({ 'border': '1px solid #005392' });
            // $('#valid').text('Поле email не должно быть пустым');
        }
    });
});