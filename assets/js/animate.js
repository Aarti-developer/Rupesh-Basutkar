gsap.registerPlugin(ScrollTrigger);

// let sections = gsap.utils.toArray(".panel");

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".container",
//     pin: true,
//     pinSpacing: false,
//     scrub: 0.85,
//     start: "top top", 
//   }
// });

// gsap.utils.toArray(".stack").forEach((panel, i) => {
//   ScrollTrigger.create({
//     trigger: panel,
//     pin: true, 
//     pinSpacing: false,
//     markers: true
//   });
// });

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".scroller"),
  smooth: true,
  inertia: 0.6,
});
 
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".scroller", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },

  pinType: document.querySelector(".scroller").style.transform
    ? "transform"
    : "fixed",
});

ScrollTrigger.defaults({ scroller: ".scroller" });

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
