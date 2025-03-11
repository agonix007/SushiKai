import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

// Make mobile navigation & smooth scrolling work
const btnNavEl = document.querySelector(".nav__btn-mobile");
const headerEl = document.querySelector(".header");
const allLinks = document.querySelectorAll("a:link");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = link.getAttribute("href");

    // Scroll back to TOP
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      // console.log(href);
      const sectionEL = document.querySelector(href);
      // console.log(sectionEL);
      sectionEL.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("nav__link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});
