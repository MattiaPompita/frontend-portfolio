import anime from "animejs/lib/anime.es.js";

export class HeroAnim {
  heroTextAnim = (icontTl) => {
    const helloMsg = document.querySelectorAll(
      ".hero-section__main__presentation__helloMsg"
    );
      
    helloMsg.forEach((el) => {
      el.innerHTML = el.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
    });

    return anime
      .timeline()
      .add({
        targets: ".hero-section__main__presentation__helloMsg .letter",
        translateY: [100, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 2000,
        delay: (el, i) => 300 + 30 * i,
      })
      .add(
        {
          targets: [
            ".hero-section__main__presentation__p",
            ".navbar-brand",
            ".navbar__container__link",
          ],
          delay: anime.stagger(100),
          translateY: [200, 0],
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1400,
          begin: function () {
            icontTl.play();
          },
        },
        "-=1400"
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
