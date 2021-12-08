$(document).ready(function(){
    // banner slider
    $('.banner-slider').slick({
        arrows: false,
        dots: true,
    });

    // venobox
        $('.venobox').venobox(); 

    // testimonial-slider
    $('.testimonial-slider').slick({
        arrows:false,
        slidesToShow:'2',
        dots:true,
        autoplay:true,
    });

    // counter up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //brand slider
    $('.brand-slider').slick({
        slidesToShow:'5',
        centerMode:true,
        centerPadding:'0px',
        prevArrow:'<i class="fas fa-chevron-left slick-prev prev-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right slick-next next-arrow"></i>',
    });

});