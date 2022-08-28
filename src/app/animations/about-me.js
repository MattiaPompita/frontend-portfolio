import anime from "animejs/lib/anime.es.js";

export class AboutMeAnim {
  renderAnim = () => {
    return anime.timeline({ autoplay: false }).add({
      targets: [".about-me__container__text__span"],
      opacity: 1,
      translateY: ["100%", 0],
      easing: "easeOutQuad",
      duration: 1000,
      delay: anime.stagger(100),
    });
  };
}
