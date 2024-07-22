let flag = window.innerWidth < 769;
let flag2 = window.innerWidth < 1201 && window.innerWidth > 768;
let flag3 = window.innerWidth < 1921 && window.innerWidth > 1200;
let flag4 = window.innerWidth < 1920 ;

window.addEventListener("resize", () => {
  flag = window.innerWidth < 768;
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".text-upper", {
    y: 0,
    scrollTrigger: {
      trigger: ".walk",
      start: "top center",
      end: "top top",
      scrub: 1,
    },
  });
  gsap.to(".text-lower", {
    y: 0,
    scrollTrigger: {
      trigger: ".walk",
      start: "top center",
      end: "top top",
      scrub: 1,
    },
  });
  gsap.to(".walk-bg", {
    y: 10,
    scrollTrigger: {
      trigger: ".walk",
      start: "top center",
      end: "top top",
      scrub: 1,
    },
  });

  gsap.to(".walk-bg", {
    scale: 2,
    scrollTrigger: {
      trigger: ".walk-video",
      start: "top bottom",
      end: "top 75%",
      scrub: 1,
    },
  });
  gsap.to(".walk-upper", {
    y: -70,
    fontSize: 20,
    scrollTrigger: {
      trigger: ".walk-video",
      start: "top bottom",
      end: "top 75%",
      scrub: 1,
    },
  });
  gsap.to(".walk-lower", {
    y: -50,
    fontSize: 70,
    scrollTrigger: {
      trigger: ".walk-video",
      start: "top bottom",
      end: "top 75%",
      scrub: 1,
    },
  });

  gsap.to(".text2-upper", {
    y: -30,
    scrollTrigger: {
      trigger: ".walk-video",
      start: "top 75%",
      end: "top 74%",
      scrub: 1,
    },
  });
  gsap.to(".text2-lower", {
    y: -150,
    scrollTrigger: {
      trigger: ".walk-video",
      start: "top 75%",
      end: "top 74%",
      scrub: 1,
    },
  });

  gsap.to(".walk-end", {
    scale: 1,
    y: "-100vh",
    scrollTrigger: {
      trigger: ".walk-end",
      start: "top bottom",
      end: "top 99%",
      scrub: 1,
    },
  });
  gsap.to(".walk-end", {
    backgroundColor: "white",
    scrollTrigger: {
      trigger: ".walk-end",
      start: "top bottom",
      end: "top 99%",
      scrub: 1,
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.to(".feedback-right", {
    x: 400,
    scrollTrigger: {
      trigger: ".feedback-right",
      start: "top bottom",
      end: "top top",
      scrub: 1,
    },
  });
  gsap.to(".feedback-right", {
    y: 0,
    scrollTrigger: {
      trigger: ".review-tittle",
      start: "top 60%",
      end: "top 59%",
      scrub: 1,
      // markers : true
    },
  });

  gsap.to(".feedback-left", {
    x: -400,
    scrollTrigger: {
      trigger: ".feedback-right",
      start: "top bottom",
      end: "top top",
      scrub: 1,
    },
  });
  gsap.to(".feedback-left", {
    y: 0,
    scrollTrigger: {
      trigger: ".review-tittle",
      start: "top 20%",
      end: "top 19%",
      scrub: 1,
    },
  });
});

// *------review  and mobile
document.addEventListener("DOMContentLoaded", function () {
  gsap.to(".para-text", {
    y: 0,
    scrollTrigger: {
      trigger: ".feedback-para",
      start: "top center",
      end: "top 49%",
      scrub: 1,
    },
  });

  // *-------------mobile animation
  const animateMobileElements = () => {
    if (!flag) {
      gsap.to(".mob-ft", {
        x: 0,
        scrollTrigger: {
          trigger: ".mob-ft",
          start: "top bottom",
          end: "top 20%",
          scrub: 1,
        },
      });
      gsap.to(".mobile-left-side", {
        x: 0,
        scrollTrigger: {
          trigger: ".mob-ft",
          start: "top bottom",
          end: "top 20%",
          scrub: 1,
        },
      });
      gsap.to(".mobile-right-side", {
        x: 0,
        scrollTrigger: {
          trigger: ".mob-ft",
          start: "top bottom",
          end: "top 20%",
          scrub: 1,
        },
      });
      gsap.to(".movile-display", {
        rotateY: "360deg",
        x: 0,
        scrollTrigger: {
          trigger: ".mob-ft",
          start: "top bottom",
          end: "top 20%",
          scrub: 1,
        },
      });
      gsap.to(".a-inside", {
        y: 0,
        scrollTrigger: {
          trigger: ".mobile-left-side",
          start: "top 60%",
          end: "top 59%",
          scrub: 1,
        },
      });
    }
  };

  animateMobileElements();
  window.addEventListener("resize", animateMobileElements);
});

// *-----------------------leader hover animation
document.addEventListener("DOMContentLoaded", function () {
  const leaderNames = document.querySelectorAll(".leader-name");
  const names = document.querySelectorAll(".pic");

  const animations = () => {
    leaderNames.forEach((name, i) => {
      //* hover
      if(flag4){
        name.addEventListener("mouseenter", () => {
            gsap.to(names[i], {
              width: 473,
              ease: "power1.inOut",
            });
          });
          name.addEventListener("mouseenter", () => {
            gsap.to(`.leaders-picture`, {
              width: 473,
              ease: "power1.inOut",
            });
          });
          name.addEventListener("mouseenter", () => {
            gsap.to(`.blue`, {
              width: 0,
              ease: "power1.inOut",
            });
          });
      }
      if(flag3){
        name.addEventListener("mouseenter", () => {
            gsap.to(names[i], {
              width: 350,
              ease: "power1.inOut",
            });
          });
          name.addEventListener("mouseenter", () => {
            gsap.to(`.leaders-picture`, {
              width: 350,
              ease: "power1.inOut",
            });
          });
          name.addEventListener("mouseenter", () => {
            gsap.to(`.blue`, {
              width: 0,
              ease: "power1.inOut",
            });
          });
      }
      if(flag2){
        name.addEventListener("mouseenter", () => {
            gsap.to(names[i], {
              width: 280,
              ease: "power1.inOut",
            });
          });
          name.addEventListener("mouseenter", () => {
            gsap.to(`.leaders-picture`, {
              width: 280,
              ease: "power1.inOut",
            });
          });
          name.addEventListener("mouseenter", () => {
            gsap.to(`.blue`, {
              width: 0,
              ease: "power1.inOut",
            });
          });
      }

      // *hover leave
      name.addEventListener("mouseleave", () => {
        gsap.to(names[i], {
          width: 0,
          ease: "power1.inOut",
        });
      });
      name.addEventListener("mouseleave", () => {
        gsap.to(`.leaders-picture`, {
          width: 0,
          ease: "power1.inOut",
        });
      });
      name.addEventListener("mouseleave", () => {
        gsap.to(`.blue`, {
          width: 1,
          ease: "power4.out",
        });
      });
    });
  };

  animations();
  window.addEventListener("resize", animations);
});
