import anime from "animejs/lib/anime.es.js";

export class AboutMeAnim {
  aboutMeTitle = (viewportHeight) => {
    console.log(viewportHeight);
    anime
      .timeline({ autoplay: true })
      .add({
        targets: [".about-me__wrap-content__container__title"],
        translateX: [-200, 0],
        opacity: [0, 1],
        easing: "easeOutSine",
        duration: 1000,
      })
      .add({
        targets: [".about-me__wrap-content__container__title"],
        scale: 0.375,
        color: "#f2ece9",
        easing: "easeOutSine",
        duration: 1000,
      })
      .add({
        targets: [".about-me__wrap-content__container__title__line"],
        width: "90%",
        easing: "easeOutSine",
        duration: 1000,
      })
      .add({
        targets: [".about-me__wrap-content__container__title"],
        translateY: -viewportHeight,
        easing: "easeOutSine",
        duration: 1000,
      });
  };
}
