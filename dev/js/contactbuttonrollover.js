import {gsap} from "gsap";

export const contactbuttonTL = new gsap.timeline({paused:true});

const envelope = new gsap.timeline();
const flap = new gsap.timeline();


envelope.to("#envelope", {duration:.1, fill:"#FFFFFF"})
flap.to("#flap", {duration:.1, stroke:"#0047FF"})


contactbuttonTL.add(envelope)
contactbuttonTL.add(flap)