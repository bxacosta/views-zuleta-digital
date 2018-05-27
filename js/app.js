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
 * Animacion scroll de la barra de navegacion
 */
var navbarCollapse = function() {
    if ($("#navbar-scroll").offset().top > 100) {
        $("#navbar-scroll").addClass("bg-dark");
    } else {
        $("#navbar-scroll").removeClass("bg-dark");
    }
};
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);

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
$(document).ready(function() {
    $("#preloader").fadeOut("slow");
});

/**
 * Init lightbox
 */
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});
