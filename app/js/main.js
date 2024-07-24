$(function () {
    $('.header__btn-menu').on('click',function(){
        $('.popup-menu').removeClass('popup-menu--close');
    });
    $('.popup-menu__close').on('click',function(){
        $('.popup-menu').addClass('popup-menu--close');
    });

    const swiperTrends = new Swiper(".trends__slider", {
        slidesPerView: 5,
        spaceBetween: 32,
        freeMode: true,
        });

});

