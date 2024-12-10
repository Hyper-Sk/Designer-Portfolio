function maskOne() {
  let allMaskOne = document.querySelectorAll(".mask-1");
  allMaskOne.forEach((mask) => {
    mask.addEventListener("mouseover", () => {
      let pointer = document.querySelector(".pointer");
      pointer.style.width = "25px";
      pointer.style.height = "25px";
      pointer.style.marginLeft = "calc(-25px / 2)";
      pointer.style.marginTop = "calc(-25px / 2)";
    });
    mask.addEventListener("mouseleave", () => {
      let pointer = document.querySelector(".pointer");
      pointer.style.width = "15px";
      pointer.style.height = "15px";
      pointer.style.marginLeft = "calc(-15px / 2)";
      pointer.style.marginTop = "calc(-15px / 2)";
    });
  });
}
maskOne();

function maskTwo() {
  let allMaskTwo = document.querySelectorAll(".mask-2");
  allMaskTwo.forEach((mask) => {
    mask.addEventListener("mouseover", () => {
      let pointer = document.querySelector(".pointer");
      pointer.style.width = "40px";
      pointer.style.height = "40px";
      pointer.style.marginLeft = "calc(-40px / 2)";
      pointer.style.marginTop = "calc(-40px / 2)";
    });
    mask.addEventListener("mouseleave", () => {
      let pointer = document.querySelector(".pointer");
      pointer.style.width = "15px";
      pointer.style.height = "15px";
      pointer.style.marginLeft = "calc(-15px / 2)";
      pointer.style.marginTop = "calc(-15px / 2)";
    });
  });
}
maskTwo();

function maskHide() {
  let allMaskHide = document.querySelectorAll(".mask-hide");
  let pointer = document.querySelector(".pointer");
  allMaskHide.forEach((mask) => {
    mask.addEventListener("mouseover", () => {
      pointer.style.opacity = "0";
    });
    mask.addEventListener("mouseleave", () => {
      pointer.style.opacity = "1";
    });
  });
}
maskHide();

function maskView() {
  let maskViewTarget = document.querySelectorAll(".mask-view");

  maskViewTarget.forEach((mask) => {
    mask.addEventListener("mouseover", () => {
      gsap.to('.pointer', {
        duration:0.1,
        width: '70px',
        height: '70px',
        mixBlendMode: 'normal',
        opacity: 0.8,
        marginLeft: 'calc(-70px / 2)',
        marginTop: 'calc(-70px / 2)',
      })

      gsap.to('.pointer span', {
        display: 'inline',
        opacity:1,
      })
    });
    mask.addEventListener("mouseleave", () => {
      gsap.to('.pointer', {
        duration:0.1,
        width: '15px',
        height: '15px',
        mixBlendMode: 'difference',
        opacity: 1,
        marginLeft: 'calc(-15px / 2)',
        marginTop: 'calc(-15px / 2)',
      })

      gsap.to('.pointer span', {
        display: 'none',
        opacity:0
      })
    });
  });
}
maskView();
