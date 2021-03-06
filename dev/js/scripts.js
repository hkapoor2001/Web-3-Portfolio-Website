import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import { horizontalScroll } from "./horizontalScroll";
import { aboutbuttonTL } from "./aboutbuttonrollover";
import { contactbuttonTL } from "./contactbuttonrollover";
import { navbuttonTL } from "./navbuttonrollover";
import { exitnavbuttonTL } from "./exitnavbuttonrollover";
import { displayWindowSize } from "./windowSize.js";
import { menuTL } from "./menuAnimation.js";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

horizontalScroll();

var menuButton= document.querySelector("#nav-button-container")
menuButton.addEventListener("click", OpenCloseMenu)
var exitmenuButton= document.querySelector("#exit-nav-button-container")
exitmenuButton.addEventListener("click", OpenCloseMenu)

let CanISeeMenu = false;
function OpenCloseMenu(){
    if(CanISeeMenu === false){
        menuTL.play();
        CanISeeMenu = true;
    }
    else{
        menuTL.reverse();
        CanISeeMenu = false;}
}


var about= document.querySelector("#about-button")
about.addEventListener("mouseenter", AboutButtonRolloverEnter)
about.addEventListener("mouseleave", AboutButtonRolloverLeave)

let IsAboutButtonRolloverActive = false;
function AboutButtonRolloverEnter(){
    if(IsAboutButtonRolloverActive === false){
        aboutbuttonTL.play();
        IsAboutButtonRolloverActive = true;
    }
}

function AboutButtonRolloverLeave(){
    if(IsAboutButtonRolloverActive === true){
        aboutbuttonTL.reverse();
        IsAboutButtonRolloverActive = false;
    }
}


var contact= document.querySelector("#contact-button")
contact.addEventListener("mouseenter", ContactButtonRolloverEnter)
contact.addEventListener("mouseleave", ContactButtonRolloverLeave)

let IsContactButtonRolloverActive = false;
function ContactButtonRolloverEnter(){
    if(IsContactButtonRolloverActive === false){
        contactbuttonTL.play();
        IsContactButtonRolloverActive = true;
    }
}

function ContactButtonRolloverLeave(){
    if(IsContactButtonRolloverActive === true){
        contactbuttonTL.reverse();
        IsContactButtonRolloverActive = false;
    }
}

var nav= document.querySelector("#nav-button-container")
nav.addEventListener("mouseenter", NavButtonRolloverEnter)
nav.addEventListener("mouseleave", NavButtonRolloverLeave)

let IsNavButtonRolloverActive = false;
function NavButtonRolloverEnter(){
    if(IsNavButtonRolloverActive === false){
        navbuttonTL.play();
        IsNavButtonRolloverActive = true;
    }
}

function NavButtonRolloverLeave(){
    if(IsNavButtonRolloverActive === true){
        navbuttonTL.reverse();
        IsNavButtonRolloverActive = false;
    }
}


var exitnav= document.querySelector("#exit-nav-button-container")
exitnav.addEventListener("mouseenter", ExitNavButtonRolloverEnter)
exitnav.addEventListener("mouseleave", ExitNavButtonRolloverLeave)

let IsExitNavButtonRolloverActive = false;
function ExitNavButtonRolloverEnter(){
    if(IsExitNavButtonRolloverActive === false){
        exitnavbuttonTL.play();
        IsExitNavButtonRolloverActive = true;
    }
}

function ExitNavButtonRolloverLeave(){
    if(IsExitNavButtonRolloverActive === true){
        exitnavbuttonTL.reverse();
        IsExitNavButtonRolloverActive = false;
    }
}



// Trying to get scrollto to work 

var scroll1= document.querySelector("#nav-link-1")
scroll1.addEventListener("click", scrollTo1)
// let container = document.getElementById("container");

function scrollTo1(){
    gsap.to(window, {duration: 2, scrollTo: "#div3"});
    console.log("scrolltoisactive");
}


window.addEventListener("resize", displayWindowSize )
window.addEventListener("load", displayWindowSize )


