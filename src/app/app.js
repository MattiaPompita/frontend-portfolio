require("waypoints/lib/noframework.waypoints.min");

export const run = async (Hero, AboutMe) => {
  Hero.renderAnim();
  await splitLines(".about-me__container");
  waypoint(".about-me__container", AboutMe.renderAnim);
};

const waypoint = (elem, cbAnim) => {
  return new Waypoint({
    element: document.querySelector(elem),
    handler: function () {
      const anim = cbAnim();
      anim.play();
      this.disable();
    },
    offset: "50%",
  });
};

const splitLines = (query) => {
  var p = document.querySelector(query);
  p.innerHTML = p.innerText
    .split(/\n/)
    .map(function (word) {
      return (
        "<p class='about-me__container__text h-xl'><span class='about-me__container__text__span'>" +
        word +
        "</span></p>"
      );
    })
    .join(" ");
};
