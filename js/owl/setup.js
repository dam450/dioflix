$('.owl-carousel').owlCarousel({
  stagePadding: 45,
  loop: true,
  nav: false,
  margin: 8,
  center: false,
  autoplay: true,
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

$('#vidBox').VideoPopUp({
  backgroundColor: '#000',
  opener: 'video1',
  maxweight: '340',
  idvideo: 'v1',
  pausevideo: true
})

function playvid() {
  //vidBox.style.visibility = 'visible'
  vidBox.style.display = 'block' //make visible
  //hoc.load() // load video
  hoc.play() // and play
}

function pausevid() {
  hoc.pause() // pause video
}
