$(function() {
    var mixer = mixitup('.directions__list');
    $('.directions__filter-btn').on('click', function(e) {
        $(this).addClass('directions__filter-btn--active');
    })

    $('.team__slider').slick({
        arrows: false,
        slidesToShow: 4,
        infinite: true,
        draggable: false,
        waitForAnimate:false,
    })

    $('.team__controls-prev').on('click', function(e) {
        e.preventDefault()
    $('.team__slider').slick('slickPrev')
})

    $('.team__controls-next').on('click', function(e) {
        e.preventDefault();
    $('.team__slider').slick('slickNext')
    })

    $('.testimonials__slider').slick({
        arrows: false,
        dots:true,
        slidesToShow: 4,
        infinite: true,
        draggable: false,
        waitForAnimate:false,
    })
})