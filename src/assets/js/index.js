import $ from 'jquery';
window.$ = window.jQuery = $;
import '@fortawesome/fontawesome-free/js/all.js';
import 'slick-carousel';
import "@scss/main.scss";

$(document).ready(function () {
    
    $('.slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6
    });

    $('.slider2').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6
    });

    $("#nav").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});