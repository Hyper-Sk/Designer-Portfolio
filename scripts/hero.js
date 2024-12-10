function heroSection() {
    let tl = gsap.timeline();
  
    tl.to(".top-text-area .fadeup h1", {
      y: 0,
      duration: 2,
      ease: Expo.easeInOut,
    });
  
    tl.to(".title-2 .fadedown h5", {
      y: 0,
      duration: 0.3,
    });
  
    tl.to(".middle-text-area .fadeup h5", {
      y: 0,
      duration: 0.3,
    });
  
    tl.to(".hero-content .bottom-text-area h5", {
      y: 0,
      duration: 0.3,
    });
    tl.to(".hero-content .bottom-text-area .icons a", {
      y: 0,
      duration: 0.3,
    });
  }
  heroSection();