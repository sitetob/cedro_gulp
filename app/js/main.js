$(function () {
    $('.header__btn-menu').on('click',function(){
        $('.popup-menu').removeClass('popup-menu--close');
        $('body').css('overflow','hidden');        
    });
    $('.popup-menu__close').on('click',function(){
        $('.popup-menu').addClass('popup-menu--close');
        $('body').css('overflow','initial');
    });

    const swiperTrends = new Swiper(".trends__slider", {
        slidesPerView: 2,
        spaceBetween: 8,        
        freeMode: true,
        loop: true,
        breakpoints: {
            1920: {
                slidesPerView: 5,
                spaceBetween: 32,
              },
            1366: {
                slidesPerView: 5,
                spaceBetween: 32,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            530: {
                slidesPerView: 2,
                spaceBetween: 8,
            },            
            375: {
                slidesPerView: 2,
                spaceBetween: 8,
            },
          },
        });

    $('.trends__fav').on('click',function(){
        $('.favorite-nocount').toggleClass('favorite-count');
    });
        
        
});