jQuery(window).load(function () {
  jQuery('.flexslider').flexslider({
    animation: 'slide',
    controlNav: false,
    directionNav: false,
    slideshowSpeed : 5000
  })

  jQuery('.flexslider-introducing').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 380,
    itemMargin: 30,
    controlNav: false,
    customDirectionNav:".go-over"
  })

  jQuery('.flexslider-videos').flexslider({
    animation: "slide",
    animationLoop: false,
    controlNav: false,
    customDirectionNav:".go-over"
  })

  jQuery('.flexslider-concert').flexslider({
    animation: 'slide',
    controlNav: false,
    directionNav: false,
    slideshowSpeed : 8000
  })
})

jQuery(document).ready(function (event) {
  jQuery('.learn-more-button').on('click', function () {
    jQuery('.popup').fadeIn(300)
  })

  jQuery('.close-popup').on('click', function () {
    jQuery('.popup').fadeOut(200)
  })
})