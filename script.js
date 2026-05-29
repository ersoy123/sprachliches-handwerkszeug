const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const stepText = document.getElementById("stepText");
const progressFill = document.getElementById("progressFill");

let currentSlide = 0;

function updateView() {
  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === currentSlide);
  });

  stepText.textContent = `Schritt ${currentSlide + 1} von ${slides.length}`;
  progressFill.style.width = `${((currentSlide + 1) / slides.length) * 100}%`;

  prevBtn.disabled = currentSlide === 0;
  nextBtn.textContent = currentSlide === slides.length - 1 ? "Fertig" : "Weiter";
}

prevBtn.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateView();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    updateView();
  }
});

updateView();