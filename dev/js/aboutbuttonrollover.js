import {gsap} from "gsap";
gsap.set("#abouticon", {alpha:0})

export const aboutbuttonTL = new gsap.timeline({paused:true});

const aboutrolloverAnimation = new gsap.timeline();


aboutrolloverAnimation.to("#abouticon", {duration:.1, alpha:1})


aboutbuttonTL.add(aboutrolloverAnimation)