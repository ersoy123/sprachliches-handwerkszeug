const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const stepText = document.getElementById("stepText");
const progressFill = document.getElementById("progressFill");
const confettiLayer = document.getElementById("confettiLayer");

let currentSlide = 0;
const taskSlides = 5;

function updateView() {
  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === currentSlide);
  });

  if (currentSlide < taskSlides) {
    stepText.textContent = `Schritt ${currentSlide + 1} von ${taskSlides}`;
    progressFill.style.width = `${((currentSlide + 1) / taskSlides) * 100}%`;
    nextBtn.textContent = currentSlide === taskSlides - 1 ? "Fertig" : "Weiter";
    prevBtn.style.display = "inline-block";
    nextBtn.style.display = "inline-block";
    progressFill.parentElement.style.display = "block";
    stepText.style.display = "block";
  } else {
    stepText.textContent = "Abgeschlossen";
    progressFill.style.width = "100%";
    nextBtn.style.display = "none";
    prevBtn.style.display = "none";
  }

  prevBtn.disabled = currentSlide === 0;
}

function launchConfetti() {
  confettiLayer.innerHTML = "";

  const colors = ["#d9a93a", "#e6bd57", "#b78716", "#f4ead0", "#ffffff"];

  for (let i = 0; i < 70; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = `${Math.random() * 0.45}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    confettiLayer.appendChild(piece);
  }

  setTimeout(() => {
    confettiLayer.innerHTML = "";
  }, 2400);
}

prevBtn.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateView();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentSlide < taskSlides - 1) {
    currentSlide++;
    updateView();
  } else {
    currentSlide = taskSlides;
    updateView();
    launchConfetti();
  }
});

restartBtn.addEventListener("click", () => {
  currentSlide = 0;
  updateView();
});

updateView();