import { run } from "./app/app";
import "./main.scss";
import { NavbarAnim } from "./app/animations/navbar";
import { HeroAnim } from "./app/animations/hero";
import "@fortawesome/fontawesome-free/js/all.js";

const Navbar = new NavbarAnim();
const Hero = new HeroAnim();

run(Navbar, Hero);
