const links = document.querySelectorAll(".sidebar nav ul li a");
const sections = document.querySelectorAll("section");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    links.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
    sections.forEach((sec) => sec.classList.remove("active"));
    const target = link.getAttribute("data-section");
    document.getElementById(target).classList.add("active");
  });
});
