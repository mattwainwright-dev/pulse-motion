const root = document.getElementById("pulseMotion");
const toggleBtn = document.getElementById("toggleBtn");
const restartBtn = document.getElementById("restartBtn");
const stage = root.querySelector(".stage");
const beat = document.getElementById("beat"); 

toggleBtn.addEventListener("click", () => {
  const paused = root.classList.toggle("paused");

  if (paused) {
    beat.pause();
    toggleBtn.textContent = "Play";
  } else {
    beat.play();
    toggleBtn.textContent = "Pause";
  }
});

restartBtn.addEventListener("click", () => {
  root.classList.remove("paused");
  toggleBtn.textContent = "Pause";

  const replacement = stage.cloneNode(true);
  stage.replaceWith(replacement);
});
