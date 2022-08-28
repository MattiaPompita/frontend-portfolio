import anime from "animejs/lib/anime.es.js";

export class HeroAnim {
  renderAnim = () => {
    anime
      .timeline()
      .add({
        targets: [".hero__container__title__row__span"],
        translateY: ["100%", 0],
        opacity: 1,
        easing: "easeOutQuad",
        duration: 1000,
        delay: anime.stagger(600),
      })
      .add(
        {
          targets: [".paragraph__span"],
          translateY: ["100%", 0],
          easing: "easeOutQuad",
          opacity: 1,
          duration: 1000,
        },
        "-=200"
      );
  };
}
