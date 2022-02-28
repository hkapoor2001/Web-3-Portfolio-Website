import {gsap} from "gsap";

export const exitnavbuttonTL = new gsap.timeline({paused:true});

const fill = new gsap.timeline();


fill.to("#Exit-triangle", {duration:.1, fill:"#FFFFFF"})


exitnavbuttonTL.add(fill)