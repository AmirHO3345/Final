
(function ($) {
    "use strict" ;

    /*===========================================
	=           Venobox       =
    =============================================*/
    new VenoBox({
        selector: ".venobox"
    });

    /*===========================================
	=           Owl.carousel       =
    =============================================*/
    $(document).ready(function() {
        $('.owl-carousel-media1').owlCarousel({
            autoplay: false,
            autoplayHoverPause: true,
            loop: false,
            margin: 10,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            } ,
        });
    });


});