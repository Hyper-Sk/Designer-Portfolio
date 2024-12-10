function navbarSection() {
    let navbarOpen = document.querySelector(".navbar .menu-btn");
    let close = document.querySelector(".navbar .close");
    let navTime = gsap.timeline({ paused: true });
    let asideOpen = document.querySelector(".aside-open")
    let asideClose = document.querySelector(".aside-close")
    let asideArea = document.querySelector('.mobile-aside')
  
    navTime.to(navbarOpen, {
      y: 50,
      duration: 0.5,
    });
    navTime.to(".navbar-menu span", {
      display: "inline-block",
      duration: 0,
    });
    navTime.to(".navbar-menu a", {
      y: 0,
      duration: 0.2,
      stagger: 0.1,
    });
  
    navbarOpen.addEventListener("click", () => {
      navTime.play();
    });
    
    close.addEventListener("click", () => {
      navTime.reverse();
    });
  
    // mobile navbar 
  
    asideOpen.addEventListener('click', () => {
      gsap.to(asideArea, {
        y:0
      })
    })
    asideClose.addEventListener('click', () => {
      gsap.to(asideArea, {
        y:"-100%"
      })
    })
  
  
  }
  navbarSection();