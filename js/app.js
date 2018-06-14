/**
 * Animacion smooth scroll (scroll suave)
 *
 * Creditos: https://youtu.be/o6eJ1K_1CKA
 */
$(function() {
    var selector = "[data-scroll]"; //Selector que activara la animacion
    var speed = 1000; //Tiempo que demora la animacion (ms)
    var offset = 10; //Distancia a correguir en el desplazamiento

    var headerHeight = $(".navbar").height(); //Alto del header
    $(selector).click(function(e) {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var link = $(this).attr("href");
            console.log(headerHeight);
            $("html, body").animate(
                {
                    scrollTop: $(link).offset().top - (headerHeight + offset)
                },
                speed
            );

            e.preventDefault();
        }
    });
});

/**
 * Animacion de contador
 */
$(".counter").each(function() {
    $(this)
        .prop("Counter", 0)
        .animate(
            {
                Counter: $(this).text()
            },
            {
                duration: 3000,
                easing: "swing",
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            }
        );
});

/**
 * Preloader
 */
$(window).on("load", function() {
    $("#preloader").fadeOut("slow");
});

/**
 * Init lightbox
 */
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

/**
 * Dashboard
 */
(function($) {
    "use strict"; // Start of use strict
    // Configure tooltips for collapsed side navigation
    $('.navbar-sidenav [data-toggle="tooltip"]').tooltip({
        template:
            '<div class="tooltip navbar-sidenav-tooltip" role="tooltip" style="pointer-events: none;"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
    });
    // Toggle the side navigation
    $("#sidenavToggler").click(function(e) {
        e.preventDefault();
        $("body").toggleClass("sidenav-toggled");
        $(".navbar-sidenav .nav-link-collapse").addClass("collapsed");
        $(
            ".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level"
        ).removeClass("show");
        
        if ($("body").hasClass("sidenav-toggled")) {
            $(".sidenav-submenu").hide();
            $(".toggle-icon").removeClass("fa-angle-left");
            $(".toggle-icon").addClass("fa-angle-right");
        } else {
            $(".sidenav-submenu").show();
            $(".toggle-icon").removeClass("fa-angle-right");
            $(".toggle-icon").addClass("fa-angle-left");
        }
    });
    // Force the toggled class to be removed when a collapsible nav link is clicked
    $(".navbar-sidenav .nav-link-collapse").click(function(e) {
        e.preventDefault();
        $(".sidenav-submenu").show();
    });
    // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
    $(
        "body.fixed-nav .navbar-sidenav, body.fixed-nav .sidenav-toggler, body.fixed-nav .navbar-collapse"
    ).on("mousewheel DOMMouseScroll", function(e) {
        var e0 = e.originalEvent,
            delta = e0.wheelDelta || -e0.detail;
        this.scrollTop += (delta < 0 ? 1 : -1) * 30;
        e.preventDefault();
    });
    // Scroll to top button appear
    $(document).scroll(function() {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $(".scroll-to-top").fadeIn();
        } else {
            $(".scroll-to-top").fadeOut();
        }
    });
    // Configure tooltips globally
    $('[data-toggle="tooltip"]').tooltip();
    // Smooth scrolling using jQuery easing
    $(document).on("click", "a.scroll-to-top", function(event) {
        var $anchor = $(this);
        $("html, body")
            .stop()
            .animate(
                {
                    scrollTop: $($anchor.attr("href")).offset().top
                },
                1000,
                "easeInOutExpo"
            );
        event.preventDefault();
    });
})(jQuery); // End of use strict


/**
 * Init DataTables
 */
$(document).ready(function () {
    $('.table').DataTable({
        language: {
            url: 'https://cdn.datatables.net/plug-ins/1.10.17/i18n/Spanish.json'
        },
        "info": false
    });
});