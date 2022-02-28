import { gsap } from "gsap";

export function displayWindowSize(){
    let menu = document.querySelector("#nav-container")
    let menuWidth = -menu.offsetWidth
    gsap.set("#nav-container", {x:menuWidth - (menuWidth / 20)})
}