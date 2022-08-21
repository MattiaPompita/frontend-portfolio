require("waypoints/lib/noframework.waypoints.min");

const aboutMeContainer = document.querySelector(".about-me");

export const run = (Navbar, Hero, AboutMe) => {
  Navbar.renderAnim();
  Hero.heroTextAnim.play();

  var waypoint = new Waypoint({
    element: aboutMeContainer,
    handler: function () {
      console.log(this);
      AboutMe.aboutMeTitle.play();
      waypoint.disable();
    },
  });
};
