var userAgent = navigator.userAgent.toLowerCase(),

    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    isTouch = "ontouchstart" in window,

    mobile = false;

var sliderBanner = null;

if(isMobile || isTouch)  {
    mobile = true;
}

$(document).ready(function () {
    var $document = $(document),
        $window = $(window),
        $html = $("html"),
        $body = $("body");

    var windowWidth = $(window).width();
    
    //Prevent dragging img, links, buttons
    $("img, a, button").on("dragstart", function(event) { event.preventDefault(); });

    //Object-fit
    var $fitImages = $('img.js-fit');
    $(function () { objectFitImages($fitImages, {watchMQ: true}); });
    
    //Menu
    $('.js-menu-toggle').on('click', function(e) {
        $('.js-menu').fadeToggle();
    });

    jQuery(document).click(function (e) {
        if ($(window).width() < 1023) {
            var isMenu = $(e.target).hasClass('js-menu') || $(e.target).closest('.header__menu').hasClass('js-menu');
            var isToggle = $(e.target).hasClass('js-menu-toggle') || $(e.target).closest('.header__toggle').hasClass('js-menu-toggle');

            if (!isMenu && !isToggle) {
                $('.js-menu').fadeOut();
            } 
        }
    });

    $('.js-menu .js-anchor-link').on('click', function(e) {
        if ($(window).width() < 1023) {
            $('.js-menu').fadeOut();
        }
    });


    //About slider init on mobile
    var sliders = {};

    var sliderSettings = {
        loop: false,
        slidesPerView: 2,
        threshold: 0,
        spaceBetween:6,
        speed:400,
        slideClass:"about__gallery-item",
        wrapperClass:"about__gallery-list",
        
        navigation: {
            nextEl: $('.js-slider-about-next'),
            prevEl: $('.js-slider-about-prev')
        },
    };

    $(".js-slider-about").each(function (i) {
        sliders[i] = null;
    });

    $(".js-slider-about").each(function (i) {

        if ($(window).width() < 768) {
            if (sliders[i] === null && $(".js-slider-about").length > 0) {
                sliders[i] = new Swiper ($('.js-slider-about').eq(i), sliderSettings);
            }
        } else {
            if (sliders[i]) {
                sliders[i].destroy();
                sliders[i] = null;
                $('.about__gallery-list').removeAttr('style');
            }
        }
    });

    jQuery(window).resize(function () {

        $(".js-slider-about").each(function (i) {
            if ($(window).width() < 768) {
                if (sliders[i] === null && $(".js-slider-about").length > 0) {
                    sliders[i] = new Swiper ($('.js-slider-about').eq(i), sliderSettings);
                }
            } else {
                if (sliders[i]) {
                    sliders[i].destroy();
                    sliders[i] = null;
                    $('.about__gallery-list').removeAttr('style');
                }
            }
        });
    });
    

    //Slider Reviews
    var sliderReviews = new Swiper('.js-slider-reviews', {
        loop: false,
        slidesPerView: 4,
        spaceBetween: ( $('.js-slider-reviews .swiper-wrapper').width()*4.522613065326633/100 ), // 60 /1194 full w
        speed: 600,
        threshold: 40,

        navigation: {
            nextEl: $('.js-slider-reviews-next'),
            prevEl: $('.js-slider-reviews-prev')
        },

        breakpoints: {
            767: {
                threshold: 0,
                slidesPerView: 1,
                spaceBetween: 20,
                autoHeight: true,
            },
            1023: {
                spaceBetween: 20,
                slidesPerView: 2,
            },
            1419: {
                spaceBetween: 20,
                slidesPerView: 4,
            },
            1919: {
                spaceBetween: 54,
                slidesPerView: 3,
            }
        }
    });

    //Slider News
    var sliderNews = new Swiper('.js-slider-news', {
        loop: false,
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 60,
        speed: 600,
        threshold: 40,
        autoHeight: true,

        navigation: {
            nextEl: $('.js-slider-news-next'),
            prevEl: $('.js-slider-news-prev')
        },

        pagination: {
            el: '.js-slider-news-pagination',
            type: 'bullets',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            }
        },

        breakpoints: {
            767: {
                threshold: 0,
                slidesPerView: 1,
                slidesPerColumn: 2,
                slidesPerGroup: 1,
                spaceBetween: 20,
                autoHeight: false,
            },
            1023: {
                spaceBetween: 50,
                slidesPerView: 2,
            },
            1419: {
                spaceBetween: 20,
                slidesPerView: 2,
            },
            1919: {
                spaceBetween: 50,
                slidesPerView: 2,
            }
        }
    });

    //Slider Vacancies
    var sliderVacancies = new Swiper('.js-slider-vacancies', {
        loop: false,
        slidesPerView: 2,
        spaceBetween: ( $('.js-slider-vacancies .swiper-wrapper').width()*8.285714285714286/100 ), // 116 /1498 full w
        speed: 600,
        threshold: 40,
        autoHeight: true,

        navigation: {
            nextEl: $('.js-slider-vacancies-next'),
            prevEl: $('.js-slider-vacancies-prev')
        },

        breakpoints: {
            767: {
                threshold: 0,
                slidesPerView: 1,
                slidesPerColumn: 2,
                spaceBetween: 30,
                autoHeight: false,
            },
            1023: {
                spaceBetween: 20,
                slidesPerView: 2,
            },
            1419: {
                spaceBetween: 24,
                slidesPerView: 2,
            },
            1919: {
                spaceBetween: 48,
                slidesPerView: 2,
            }
        }
    });
    
    
    //Anchor link
    $('.js-anchor-link').on('click', function(e) {
        e.preventDefault();

        anchorScroll($(this).attr('href'),0,1000);
    });

    var anchorScroll = function(elName,offset,time) {
        var targetOffset = +$(elName).offset().top - offset;

        $('body, html').animate({scrollTop: targetOffset}, time);
    };


    //Gallery
    $('.js-gallery-item').fancybox({
        toolbar: false,
        infobar: false,
        loop: true,
        selector : '[data-fancybox*="gallery"]',

        animationEffect: "zoom",
        transitionEffect: "circular",
        transitionDuration: 600,
        
        smallBtn: true,
        
        image: {
            preload: true
        },

        btnTpl: {
            // Arrows
            arrowLeft:
            '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left">' +
            '<span class="icon icon-arrow-left"></span>' +
            "</button>",

            arrowRight:
            '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right">' +
            '<span class="icon icon-arrow-right"></span>' +
            "</button>",

            // This small close button will be appended to your html/inline/ajax content by default,
            // if "smallBtn" option is not set to false
            smallBtn:
            '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small">' +
            '<span class="icon icon-close"></span>' +
            "</button>"
        },
    });

    ////Gallery more
    $('.js-gallery-more').on('click', function (e) {
        e.preventDefault();
        var start = +$(this).data('start');

        var $links = $(this).closest('.js-gallery').find('.js-gallery-item');

        $.fancybox.open( $links, {
            toolbar: false,
            infobar: false,
            loop: true,
            selector : '[data-fancybox*="gallery"]',

            animationEffect: "zoom",
            transitionEffect: "circular",
            transitionDuration: 600,

            smallBtn: true,

            image: {
                preload: true
            },

            btnTpl: {
                // Arrows
                arrowLeft:
                '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left">' +
                '<span class="icon icon-arrow-left"></span>' +
                "</button>",

                arrowRight:
                '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right">' +
                '<span class="icon icon-arrow-right"></span>' +
                "</button>",

                // This small close button will be appended to your html/inline/ajax content by default,
                // if "smallBtn" option is not set to false
                smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small">' +
                '<span class="icon icon-close"></span>' +
                "</button>"
            },
        }, start );
    });
    
    
    //Service
    $('.js-service-toggle').on('click', function(e) {
        e.preventDefault();
        $(this).closest('.js-service').toggleClass('open');
    });
    

    //Feedback
    $('.js-feedback-link').on('click', function(e) {
        e.preventDefault();
        
        if ($(window).width() < 768) {
            $('.js-feedback-circle').addClass('invisible');
            $('.js-feedback-form').removeClass('open');
        }
        
        $($(this).attr('href')).addClass('open');
    });

    $('.js-feedback-close').on('click', function(e) {
        e.preventDefault();
        $(this).closest('.js-feedback-form').removeClass('open');
        $(this).closest('.js-feedback-success').removeClass('open');
        $('.js-feedback-circle').removeClass('invisible');
    });

    jQuery(document).click(function (e) {
        var isFeedback = $(e.target).hasClass('js-feedback') || $(e.target).closest('.feedback').hasClass('js-feedback');

        if (!isFeedback) {
            $('.js-feedback-form').removeClass('open');
            $('.js-feedback-circle').removeClass('invisible');
        }
    });
    
    //News
    $('.js-news-link').on('click',function (e) {
        e.preventDefault();
        var popupSrc = $(this).attr('href');

        $.fancybox.open({
            src  : popupSrc,
            type : 'inline',
            opts : {
                touch: false,
                animationEffect: "fade",
                animationDuration: 600,
                toolbar: false,
                smallBtn: false,
                autoFocus: true,
            }
        });
    });

    $('.js-news-close').on('click', function (e) {
        e.preventDefault();
        $.fancybox.close();
    });
    
    
    //Inpumask
    $('.js-phone-mask').inputmask({
        mask: '+7 (999) 999-99-99',
        showMaskOnHover: false
    });

    $('.js-date-mask').inputmask({
        mask: '99.99.99',
        showMaskOnHover: false
    });
    
});

