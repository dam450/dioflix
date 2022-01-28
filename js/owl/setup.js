$('.owl-carousel').owlCarousel({
  stagePadding: 45,
  loop: true,
  nav: false,
  margin: 8,
  center: false,
  autoplay: false,
  responsive: {
    0: {
      items: 1
    },
    450: {
      items: 2
    },
    600: {
      items: 3
    },
    800: {
      items: 4
    },
    1000: {
      items: 6
    }
  }
})
