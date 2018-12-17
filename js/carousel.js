$(document).ready(function() {
  $().owlCarousel && ($(".owl-carousel.basic").length > 0 && $(".owl-carousel.basic").owlCarousel({
      margin: 30,
      stagePadding: 15,
      dotsContainer: $(".owl-carousel.basic").parents(".owl-container").find(".slider-dot-container"),
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 2
          },
          1000: {
              items: 3
          }
      }
  }).data("owl.carousel").onResize(), $(".owl-carousel.single").length > 0 && $(".owl-carousel.single").owlCarousel({
      margin: 30,
      items: 1,
      loop: !0,
      stagePadding: 15,
      dotsContainer: $(".owl-carousel.single").parents(".owl-container").find(".slider-dot-container")
  }).data("owl.carousel").onResize(), $(".owl-dot").click(function() {
      $($(this).parents(".owl-container").find(".owl-carousel")).owlCarousel().trigger("to.owl.carousel", [$(this).index(), 300])
  }), $(".owl-prev").click(function(e) {
      e.preventDefault(), $($(this).parents(".owl-container").find(".owl-carousel")).owlCarousel().trigger("prev.owl.carousel", [300])
  }), $(".owl-next").click(function(e) {
      e.preventDefault(), $($(this).parents(".owl-container").find(".owl-carousel")).owlCarousel().trigger("next.owl.carousel", [300])
  }));
});