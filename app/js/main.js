$(function () {
    $('select').styler();

    $('.menu-btn').on('click', function (e) {
        e.preventDefault();
        $(".one").toggleClass('active')
        $(".three").toggleClass('active')
        $(".two").toggleClass('hidden')
        $('.menu').toggleClass('menu_active');
    })

})
