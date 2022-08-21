import anime from "animejs/lib/anime.es.js";

export class HeroAnim {
  heroTextAnim = (icontTl) => {
    return anime
      .timeline()
      .add({
        targets: [".hero-section__main__presentation__helloMsg"],
        translateY: [200, 0],
        opacity: [0, 1],
        easing: "easeOutSine",
        duration: 1000,
      })
      .add(
        {
          targets: [
            ".hero-section__main__presentation__p",
            ".navbar-brand",
            ".navbar__container__link",
          ],
          delay: anime.stagger(200),
          translateY: [100, 0],
          opacity: [0, 1],
          easing: "easeOutSine",
          duration: 1000,
          begin: function () {
            icontTl.play();
          },
        },
      );
  };

  heroIconAnim = () => {
    let heroIconPath = anime.path("#icon-hero-path path");

    return anime.timeline({ loop: true, autoplay: false }).add({
      targets: ".hero-section__main__presentation__icon",
      translateY: heroIconPath("y"),
      opacity: [0.3, 0.8, 1, 0.8, 0.3],
      duration: 2000,
      easing: "easeInOutSine",
      direction: "reverse",
    });
  };
}
