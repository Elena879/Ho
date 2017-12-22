jQuery(window).load(function () {
  jQuery('.flexslider').flexslider({
    animation: 'slide',
    controlNav: false,
    directionNav: false
  })
})

jQuery(document).ready(function (event) {
  jQuery('.learn-more-button').on('click', function () {
    jQuery('.popup').fadeIn(300)
  })
})

jQuery(document).ready(function (event) {
  jQuery('.close-popup').on('click', function () {
    jQuery('.popup').fadeOut(200)
  })
})