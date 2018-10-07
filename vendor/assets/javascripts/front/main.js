var userAgent = navigator.userAgent.toLowerCase(),
    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    isTouch = "ontouchstart" in window,
    mobile = !1,
    sliderBanner = null;
(isMobile || isTouch) && (mobile = !0), $(document).ready(function() {
    var e = ($(document), $(window));
    $("html"), $("body"), $(window).width();
    $("img, a, button").on("dragstart", function(e) {
        e.preventDefault()
    });
    var s = $("img.js-fit");
    $(function() {
        objectFitImages(s, {
            watchMQ: !0
        })
    });
    var t = $(".js-drops"),
        a = t.length;
    e.scroll(function() {
        var e = $(window).scrollTop();
        window.requestAnimationFrame(function() {
            for (var s = 0; s < a; s++) {
                var n = t.eq(s);
                0 === s ? e < $(window).height() && n.css({
                    transform: "translate3d(0," + e * -.25 + "px, 0)"
                }) : n.css({
                    transform: "translate3d(0," + (e - .98 * n.offset().top) * -.25 + "px, 0)"
                })
            }
        })
    });
    var n = $(".scene"),
        i = [],
        o = {
            relativeInput: !0,
            clipRelativeInput: !1,
            hoverOnly: !0,
            calibrateX: !0,
            calibrateY: !0,
            invertX: !0,
            invertY: !0,
            limitX: 35,
            limitY: 35,
            frictionX: .2,
            frictionY: .1,
            selector: ".layer",
            pointerEvents: !0
        };
    e.width() > 1023 && !isMobile && n.each(function(e) {
        var s = $(".scene").eq(e);
        s.hasClass("scene_min") ? (o.limitY = 20, o.limitX = 20, o.frictionX = .1, i[e] = new Parallax(n[e], o)) : s.hasClass("scene_horizontal") ? (o.limitY = 0, o.limitX = 50, o.frictionX = .1, i[e] = new Parallax(n[e], o)) : s.hasClass("scene_vertical") ? (o.limitX = 0, o.limitY = 50, o.frictionY = .1, i[e] = new Parallax(n[e], o)) : (o.limitY = 35, o.limitX = 35, o.frictionX = .2, i[e] = new Parallax(n[e], o))
    }), jQuery(window).resize(function() {
        $(".scene").each(function() {
            $(window).width() < 1024 && $(this).attr("style", "")
        }), $(".layer").each(function() {
            $(window).width() < 1024 && $(this).attr("style", "")
        })
    }), $(".js-menu-toggle").on("click", function(e) {
        $(".js-menu").fadeToggle()
    }), jQuery(document).click(function(e) {
        if ($(window).width() < 1023) {
            var s = $(e.target).hasClass("js-menu") || $(e.target).closest(".header__menu").hasClass("js-menu"),
                t = $(e.target).hasClass("js-menu-toggle") || $(e.target).closest(".header__toggle").hasClass("js-menu-toggle");
            s || t || $(".js-menu").fadeOut()
        }
    }), $(".js-menu .js-anchor-link").on("click", function(e) {
        $(window).width() < 1023 && $(".js-menu").fadeOut()
    });
    var l = {},
        r = {
            loop: !1,
            slidesPerView: 2,
            threshold: 0,
            spaceBetween: 6,
            speed: 400,
            slideClass: "about__gallery-item",
            wrapperClass: "about__gallery-list",
            navigation: {
                nextEl: $(".js-slider-about-next"),
                prevEl: $(".js-slider-about-prev")
            }
        };
    $(".js-slider-about").each(function(e) {
        l[e] = null
    }), $(".js-slider-about").each(function(e) {
        $(window).width() < 768 ? null === l[e] && $(".js-slider-about").length > 0 && (l[e] = new Swiper($(".js-slider-about").eq(e), r)) : l[e] && (l[e].destroy(), l[e] = null, $(".about__gallery-list").removeAttr("style"))
    }), jQuery(window).resize(function() {
        $(".js-slider-about").each(function(e) {
            $(window).width() < 768 ? null === l[e] && $(".js-slider-about").length > 0 && (l[e] = new Swiper($(".js-slider-about").eq(e), r)) : l[e] && (l[e].destroy(), l[e] = null, $(".about__gallery-list").removeAttr("style"))
        })
    });
    new Swiper(".js-slider-reviews", {
        loop: !1,
        slidesPerView: 4,
        spaceBetween: 4.522613065326633 * $(".js-slider-reviews .swiper-wrapper").width() / 100,
        speed: 600,
        threshold: 40,
        navigation: {
            nextEl: $(".js-slider-reviews-next"),
            prevEl: $(".js-slider-reviews-prev")
        },
        breakpoints: {
            767: {
                threshold: 0,
                slidesPerView: 1,
                spaceBetween: 20,
                autoHeight: !0
            },
            1023: {
                spaceBetween: 20,
                slidesPerView: 2
            },
            1419: {
                spaceBetween: 20,
                slidesPerView: 4
            },
            1919: {
                spaceBetween: 54,
                slidesPerView: 3
            }
        }
    }), new Swiper(".js-slider-news", {
        loop: !1,
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 60,
        speed: 600,
        threshold: 40,
        autoHeight: !0,
        navigation: {
            nextEl: $(".js-slider-news-next"),
            prevEl: $(".js-slider-news-prev")
        },
        pagination: {
            el: ".js-slider-news-pagination",
            type: "bullets",
            clickable: !0,
            renderBullet: function(e, s) {
                return '<span class="' + s + '">' + (e + 1) + "</span>"
            }
        },
        breakpoints: {
            767: {
                threshold: 0,
                slidesPerView: 1,
                slidesPerColumn: 2,
                slidesPerGroup: 1,
                spaceBetween: 20,
                autoHeight: !1
            },
            1023: {
                spaceBetween: 50,
                slidesPerView: 2
            },
            1419: {
                spaceBetween: 20,
                slidesPerView: 2
            },
            1919: {
                spaceBetween: 50,
                slidesPerView: 2
            }
        }
    }), new Swiper(".js-slider-vacancies", {
        loop: !1,
        slidesPerView: 2,
        spaceBetween: 8.285714285714286 * $(".js-slider-vacancies .swiper-wrapper").width() / 100,
        speed: 600,
        threshold: 40,
        autoHeight: !0,
        navigation: {
            nextEl: $(".js-slider-vacancies-next"),
            prevEl: $(".js-slider-vacancies-prev")
        },
        breakpoints: {
            767: {
                threshold: 0,
                slidesPerView: 1,
                slidesPerColumn: 2,
                spaceBetween: 30,
                autoHeight: !1
            },
            1023: {
                spaceBetween: 20,
                slidesPerView: 2
            },
            1419: {
                spaceBetween: 24,
                slidesPerView: 2
            },
            1919: {
                spaceBetween: 48,
                slidesPerView: 2
            }
        }
    });
    $(".js-anchor-link").on("click", function(e) {
        e.preventDefault(), c($(this).attr("href"), 0, 1e3)
    });
    var c = function(e, s, t) {
        var a = +$(e).offset().top - s;
        $("body, html").animate({
            scrollTop: a
        }, t)
    };
    $(".js-gallery-item").fancybox({
        toolbar: !1,
        infobar: !1,
        loop: !0,
        selector: '[data-fancybox*="gallery"]',
        animationEffect: "zoom",
        transitionEffect: "circular",
        transitionDuration: 600,
        smallBtn: !0,
        image: {
            preload: !0
        },
        btnTpl: {
            arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left"><span class="icon icon-arrow-left"></span></button>',
            arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right"><span class="icon icon-arrow-right"></span></button>',
            smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small"><span class="icon icon-close"></span></button>'
        }
    }), $(".js-gallery-more").on("click", function(e) {
        e.preventDefault();
        var s = +$(this).data("start"),
            t = $(this).closest(".js-gallery").find(".js-gallery-item");
        $.fancybox.open(t, {
            toolbar: !1,
            infobar: !1,
            loop: !0,
            selector: '[data-fancybox*="gallery"]',
            animationEffect: "zoom",
            transitionEffect: "circular",
            transitionDuration: 600,
            smallBtn: !0,
            image: {
                preload: !0
            },
            btnTpl: {
                arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left"><span class="icon icon-arrow-left"></span></button>',
                arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right"><span class="icon icon-arrow-right"></span></button>',
                smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small"><span class="icon icon-close"></span></button>'
            }
        }, s)
    }), $(".js-service-toggle").on("click", function(e) {
        e.preventDefault(), $(this).closest(".js-service").toggleClass("open")
    }), $(".js-feedback-link").on("click", function(e) {
        e.preventDefault(), $(window).width() < 768 && ($(".js-feedback-circle").addClass("invisible"), $(".js-feedback-form").removeClass("open")), $($(this).attr("href")).addClass("open")
    }), $(".js-feedback-close").on("click", function(e) {
        e.preventDefault(), $(this).closest(".js-feedback-form").removeClass("open"), $(this).closest(".js-feedback-success").removeClass("open"), $(".js-feedback-circle").removeClass("invisible")
    }), jQuery(document).click(function(e) {
        var s = $(e.target).hasClass("js-feedback") || $(e.target).closest(".feedback").hasClass("js-feedback");
        s || ($(".js-feedback-form").removeClass("open"), $(".js-feedback-circle").removeClass("invisible"))
    }), $(".js-phone-mask").inputmask({
        mask: "+7 (999) 999-99-99",
        showMaskOnHover: !1
    }), $(".js-date-mask").inputmask({
        mask: "99.99.99",
        showMaskOnHover: !1
    })
});