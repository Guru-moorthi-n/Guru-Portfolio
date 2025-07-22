// Theme toggle
document.querySelector("#themeBtn").addEventListener("click", function () {
  const html = document.querySelector("html");
  const currentTheme = html.getAttribute("data-bs-theme");

  if (currentTheme === "light") {
    html.setAttribute("data-bs-theme", "dark");
    document.querySelector("#themeImg").setAttribute("src", "./assets/sun.png");
  } else {
    html.setAttribute("data-bs-theme", "light");
    document.querySelector("#themeImg").setAttribute("src", "./assets/moon.png");
  }
});

// Scroll and navigation
const sections = document.querySelectorAll(".page-section");
const navLinks = document.querySelectorAll(".nav-link.activeBtn");

let currentSectionIndex = 0;
let isScrolling = false;

// Update nav active class
function updateNavActive(sectionId) {
  navLinks.forEach(link => {
    if (link.getAttribute("href") === `#${sectionId}`) {
      link.classList.add("ActiveButton");
    } else {
      link.classList.remove("ActiveButton");
    }
  });
}

// Scroll to section
function scrollToSection(index) {
  if (index >= 0 && index < sections.length) {
    isScrolling = true;
    sections[index].scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      isScrolling = false;
    }, 700);
  }
}

// Track visible section using IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      currentSectionIndex = Array.from(sections).indexOf(entry.target);
      updateNavActive(id);
    }
  });
}, { threshold: 0.6 });

sections.forEach(section => observer.observe(section));

// Key press for ArrowUp / ArrowDown
document.addEventListener("keydown", function (e) {
  if (isScrolling) return;

  if (e.key === "ArrowDown") {
    e.preventDefault();
    scrollToSection(currentSectionIndex + 1);
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    scrollToSection(currentSectionIndex - 1);
  }
});

// Nav link click highlight
navLinks.forEach(link => {
  link.addEventListener("click", function () {
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      scrollToSection(Array.from(sections).indexOf(targetSection));
    }
  });
});
