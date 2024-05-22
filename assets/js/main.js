$('.twitter-list').slick({
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    fadeSpeed: 1000
});

let headerNavList = $('.header-nav-list');

$('#header-nav__icon').click(function () {
    if(headerNavList.css("display") === "none") {
        headerNavList.css("display", "flex");
    }else {
        headerNavList.css("display", "none");
    }
});

$(window).on('resize', function() {
    var windowWidth = $(window).width();

    if (windowWidth > 767) {
        headerNavList.css("display", "flex");
    }
});
