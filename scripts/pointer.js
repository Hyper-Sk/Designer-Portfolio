let timeOut;
function circleScale() {
  let xScale = 1;
  let yScale = 1;
  let rotate = 0;

  let xPrev = 0;
  let yPrev = 0;

  window.addEventListener("mousemove", (dets) => {
    clearTimeout(timeOut);

    let xDiff = dets.clientX - xPrev;
    let yDiff = dets.clientY - yPrev;

    xPrev = dets.clientX;
    yPrev = dets.clientY;

    // xScale = gsap.utils.clamp(0.7, 1.2, xDiff);
    // yScale = gsap.utils.clamp(0.7, 1.2, yDiff);

    if (xDiff > 0) {
      xScale = 1;
      yScale = 0.8;
    } else if (xDiff < 0) {
      xScale = 1;
      yScale = 0.8;
    } else if (yDiff > 0) {
      yScale = 1;
      xScale = 0.8;
    } else if (yDiff < 0) {
      yScale = 1.1;
      xScale = 0.8;
    }


    gsap.to(".pointer", {
      x: dets.clientX,
      y: dets.clientY,
      scaleX: xScale,
      scaleY: yScale,
      rotate: rotate,
      ease: Elastic.out,
      duration: 0.1,
    });

    timeOut = setTimeout(() => {
      

      gsap.to(".pointer", {
        x: dets.clientX,
        y: dets.clientY,
        scaleX: 1,
        scaleY: 1,
        rotate: 0,
        duration: 0.1,
      });
    }, 100);
  });

  window.addEventListener('mouseleave', function () {
    console.log('out')
    gsap.to('.pointer', {
      scale:0
    })
  })

}

circleScale();


