import { gsap } from "gsap";
gsap.set("#inner-nav-container", {scaleX:0, transformOrigin: "left center"})

export const menuTL = new gsap.timeline({paused:true});


 const menuAnimation = new gsap.timeline();

 menuAnimation.to("#nav-container", {duration:0.3, y:0, x:0, ease: "power1.out" },"same")
 menuAnimation.to("#inner-nav-container", {duration:0.32, scaleX:1, ease: "none"},"same")
 menuAnimation.to("#inner-nav-container", {background:"#2C2C2C:"},"same")
menuTL.add(menuAnimation)