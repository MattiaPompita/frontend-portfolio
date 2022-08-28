import { run } from "./app/app";
import "./main.scss";

import { HeroAnim } from "./app/animations/hero";
import { AboutMeAnim } from "./app/animations/about-me";

import "@fortawesome/fontawesome-free/js/all.js";

const Hero = new HeroAnim();
const AboutMe = new AboutMeAnim();

run(Hero, AboutMe);
