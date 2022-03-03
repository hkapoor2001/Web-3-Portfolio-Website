import { gsap } from "gsap";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

export function scrollTo1(){
    gsap.to(window, {duration: .2, scrollTo: "#title1"});
}

