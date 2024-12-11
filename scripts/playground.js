function hScrollSection1() {
  let scurb1Width = document.querySelector(".video__single").offsetWidth;


  let scrub1ChildrensLength =
  document.querySelector(".scrub1").childElementCount;
  scrub1ChildrensLength = scrub1ChildrensLength;
  let scrub1Value = (scurb1Width * scrub1ChildrensLength) - window.innerWidth
  // console.log(scrub1Value)
  gsap.to(".scrub1", {
    transform: `translateX(-${scrub1Value}px)`,
    start: "top 20%",
    end: "top 80%",
    scrollTrigger: {
      scroller: "body",
      trigger: ".scrub1",
      scrub: 3,
      // markers: true,
      pin: true, // only works if trigger targets parent
    },
  });
}
function hScrollSection2() {
  let scurb2Width = document.querySelector(".video__single").offsetWidth;
  let scrub2ChildrensLength =
    document.querySelector(".scrub2").childElementCount;
  scrub2ChildrensLength = scrub2ChildrensLength ;
  let scrub2Value = (scurb2Width * scrub2ChildrensLength) - window.innerWidth
  gsap.to(".scrub2", {
    transform: `translateX(-${scrub2Value}px)`,
    start: "top 20%",
    end: "top 80%",
    scrollTrigger: {
      scroller: "body",
      trigger: ".scrub2",
      scrub: 3,
      // markers: true,
      pin: true, // only works if trigger targets parent
    },
  });
}

if (window.innerWidth > 768) {
  hScrollSection1();
  hScrollSection2();
}
