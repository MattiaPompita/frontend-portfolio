require("waypoints/lib/noframework.waypoints.min");

const aboutMeContainer = document.querySelector(".about-me");
const contextWrapper = document.querySelector(".wrapper");

export const run = (Navbar, Hero, AboutMe) => {
  Navbar.renderAnim();
  Hero.heroTextAnim.play();

  var waypoint = new Waypoint({
    element: aboutMeContainer,
    handler: function () {
      AboutMe.aboutMeTitle(Waypoint.viewportHeight());
      waypoint.disable();
    },
    context: contextWrapper,
  });
};
