import {gsap} from "gsap";

export const navbuttonTL = new gsap.timeline({paused:true});

const fill = new gsap.timeline();


fill.to("#nav-triangle", {duration:.1, fill:"#FFFFFF"})


navbuttonTL.add(fill)