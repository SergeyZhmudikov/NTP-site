$(document).ready(function() {

    $('#stend_ver').click(function() {

        $('#stend_ver').css("border-bottom", "2px solid #005392");
        $('#table_ver').css("border-bottom", "2px solid #fff");
        $('.table-img-view').css("display", "none");
        $('.stend-img-view').css("display", "inline-block");
    });
    $('#table_ver').click(function() {

        $('#table_ver').css("border-bottom", "2px solid #005392");
        $('#stend_ver').css("border-bottom", "2px solid #fff");
        $('.stend-img-view').css("display", "none");
        $('.table-img-view').css("display", "inline-block");
    });

    

    // var order = $('.order_block');

    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > 200) {
    //         order.addClass("order_block-fixed");
    //     } else {
    //         order.removeClass("order_block-fixed");
    //     }
    // });




});
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });