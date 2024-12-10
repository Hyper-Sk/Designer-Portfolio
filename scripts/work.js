function workSection() {
  let imgWidth = document.querySelector(".elem img").offsetWidth;
  let imgHeight = document.querySelector(".elem img").offsetHeight;
  let pointer = document.querySelector('.pointer')
  let pointerView = document.querySelector('.pointer span')
  const halfWidth = imgWidth / 2;
  const halfHeight = imgHeight / 2;

  let xprev = 0
  let rotateImg = 0
  let rotateTimeout;

  document.querySelectorAll(".elem").forEach((elem) => {



    elem.addEventListener("mousemove", (dets) => {

      clearTimeout(rotateTimeout)

      pointer.style.width = '70px'
      pointer.style.height = '70px'
      pointer.style.mixBlendMode = 'normal'
      pointer.style.opacity = '0.8'
      pointer.style.marginLeft = 'calc(-70px / 2)'
      pointer.style.marginTop = 'calc(-70px / 2)'
      pointerView.style.display = 'inline'

      let diffY = dets.clientY - elem.getBoundingClientRect().top;

      let diffX = dets.clientX - xprev;

      xprev = dets.clientX

      if (diffX > 0) {
        rotateImg = '3deg'
      } else if (diffX < 0) {
        rotateImg = '-3deg'
      }

      gsap.to(elem.querySelector("img"), {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        top: diffY - halfHeight,
        left: dets.clientX - halfWidth,
        rotate:rotateImg
      });

      rotateTimeout = setTimeout(() => {
        gsap.to(elem.querySelector("img"), {
          rotate:0
        });
      },100)
    });





    elem.addEventListener("mouseleave", (dets) => {
      pointer.style.width = '15px'
      pointer.style.height = '15px'
      pointer.style.mixBlendMode = 'difference'
      pointerView.style.display = 'none'
      pointer.style.marginLeft = 'calc(-15px / 2)'
      pointer.style.marginTop = 'calc(-15px / 2)'
      pointer.style.opacity = '1'


      gsap.to(elem.querySelector("img"), {
        scale: 0,
      });
    });
  });
  


}

workSection();
