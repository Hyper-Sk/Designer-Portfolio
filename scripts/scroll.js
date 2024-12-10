function stickyNavbar() {
  var prevScrollpos = window.pageYOffset;
  console.log(prevScrollpos);

  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      gsap.to('.navbar', {
        y: 0,
        duration:1,
      })
      
    } else {
      gsap.to('.navbar', {
        y: -150,
        duration: 1,
      })
    }
    prevScrollpos = currentScrollPos;
  };
}

stickyNavbar()
