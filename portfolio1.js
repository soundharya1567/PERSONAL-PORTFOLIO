const navLinks = document.querySelectorAll("#navbar a");
const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menu-toggle");
const headerHeight = document.querySelector("header").offsetHeight;
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    const top = targetSection.offsetTop - headerHeight;

    window.scrollTo({ top: top, behavior: "smooth" });

    navLinks.forEach((a) => a.classList.remove("active"));
    link.classList.add("active");

    navbar.classList.remove("show");
  });
});
menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("show");
});
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + headerHeight + 20;
  navLinks.forEach((link) => {
    const section = document.querySelector(link.getAttribute("href"));
    if (
      section.offsetTop <= scrollPos &&
      section.offsetTop + section.offsetHeight > scrollPos
    ) {
      navLinks.forEach((a) => a.classList.remove("active"));
      link.classList.add("active");
    }
  });
});
