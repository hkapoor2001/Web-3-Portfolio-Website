// import { gsap } from "gsap";
// import { scrollTrigger } from "gsap";

// export function horizontalScroll(){

//     // gsap.to(".contentclass", {  xPercent: -100 * (".contentclass.length" - 1),
//     //     ease: "none"})

//     let container = document.getElementById("container");

//     gsap.to(container, {
//         x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
//         ease: "none",
//         scrollTrigger: {trigger: container, invalidateOnRefresh: true, pin: true, scrub: 1, end: () => "+=" + container.offsetWidth}
//       })


// }

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function horizontalScroll(){

    let container = document.getElementById("container");

    gsap.to(container, {
      x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
      ease: "none",
      scrollTrigger: {
        trigger: container,
        invalidateOnRefresh: true,
        pin: true,
        scrub: 1,
        end: () => "+=" + container.offsetWidth
      }
    })

}
