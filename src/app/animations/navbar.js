import anime from 'animejs/lib/anime.es.js';

export class NavbarAnim {
  constructor() {
    this.navLinks = document.querySelectorAll(".navbar__container__link");
  }

  animateLink = (el, scale, duration, elasticity) => {
    anime.remove(el);
    anime({
      targets: el,
      scale: scale,
      duration: duration,
      elasticity: elasticity,
    });
  };

  enterLink = (el) => {
    this.animateLink(el, 1.2, 800, 400);
  };

  leaveLink = (el) => {
    this.animateLink(el, 1.0, 600, 300);
  };

  renderAnim() {
    this.navLinks.forEach((el) => {
      el.addEventListener(
        "mouseenter",
        (e) => {
          this.enterLink(e.target);
        },
        false
      );
      el.addEventListener(
        "mouseleave",
        (e) => {
          this.leaveLink(e.target);
        },
        false
      );
    });
  }
}
