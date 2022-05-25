$(document).ready(function() {

    var sync1 = $("#sync1");
    sync1.owlCarousel({
        items: 2,
        slideSpeed: 2000,
        nav: true,
        autoplay: true, 
        dots: false,
        loop: true,
        margin:10,
        responsiveRefreshRate: 200,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        },
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);

    
});

