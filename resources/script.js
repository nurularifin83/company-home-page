// For toggle menu
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
});

// Sliders
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator span");

function updateSlider() {
  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === currentIndex);
    indicators[index].classList.toggle("active", index === currentIndex);
  });
}

function moveSlide(direction) {
  currentIndex = (currentIndex + direction + slides.length) % slides.length;
  updateSlider();
}

function setSlide(index) {
  currentIndex = index;
  updateSlider();
}

// Auto-Slide (Optional)
setInterval(() => {
  moveSlide(1);
}, 50000);

// For porjects tab section
const tabs = document.querySelectorAll(".tab-btn");
const projects = document.querySelectorAll(".project-item");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    const category = tab.getAttribute("data-tab");

    projects.forEach((project) => {
      if (
        category === "all" ||
        project.getAttribute("data-category").includes(category)
      ) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});
