$(document).ready(function () {
    // $('#stend').css("border-bottom", "2px solid #005392");
    $('#laboratory').click(function () {
        $('.hide_item').css("display", "none");
        $('#laboratory').css("border-bottom", "2px solid #005392");
        $('#stend').css("border-bottom", "2px solid #fff");
    });
    $('#stend').click(function () {
        $('.hide_item').css("display", "block");
        $('#stend').css("border-bottom", "2px solid #005392");
        $('#laboratory').css("border-bottom", "2px solid #fff");
    });
    // Dropdown header menu
    var growth = false;
    var get = function (obj) {
        return document.getElementById(obj)
    };
    get('dropdown').onclick = function () {
        if (growth) {
            $('.dropdown_menu').css("display", "none");
            $('img.drp_menu').attr("src", "css/images/icons/group.svg");
            growth = false
        } else {
            $('.dropdown_menu').css("display", "inline");
            $('img.drp_menu').attr("src", "css/images/icons/delete.svg");
            growth = true
        }
    }
    // Search modal




});
// ---------------------
// Slider
var btn_prev = document.querySelector('.butns .prev');
var btn_next = document.querySelector('.butns .next');

var slider = document.querySelectorAll('.slider_gallery .slider_item ');
var i = 0;
btn_prev.onclick = function () {
    // slider[i].style.display = 'none';
    slider[i].className = 'slider_item';
    i--;
    if (i < 0) {
        i = slider.length - 1;
    }
    // slider[i].style.display = 'block';
    slider[i].className = 'showed';
}
btn_next.onclick = function () {
    // slider[i].style.display = 'none';
    slider[i].className = 'slider_item';
    i++;
    if (i >= slider.length) {
        i = 0;
    }
    // slider[i].style.display = 'block';
    slider[i].className = 'showed';
}
// ---------------------


$(document).on("click", '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});


$('.wrapper-simple input[type=submit]').toggle(function () {
    $('.wrapper-simple').animate({
            'width': '300px'
        })
        .end().find('.wrapper-simple input[type=text]').animate({
            'width': '250px'
        })
        .end().find('.wrapper-simple img').animate({
            'marginLeft': '-5px'
        })
        .end().find(this).animate({
            'marginLeft': '22em'
        }).attr('value', 'X');
}, function () {
    $('.wrapper-simple').animate({
            'width': '60px'
        })
        .end().find('.wrapper-simple input[type=text]').animate({
            'width': '1px'
        })
        .end().find('.wrapper-simple img').animate({
            'marginLeft': '0'
        })
        .end().find(this).animate({
            'marginLeft': '0'
        }).attr('value', '');
});



// $(document).ready(function () {
//     var div_stop = $(".modal-backdrop.show");
//     setTimeout(div_stop, 4000);
// });