    const root = document.getElementById("pulseMotion");
    const toggleBtn = document.getElementById("toggleBtn");
    const restartBtn = document.getElementById("restartBtn");
    const stage = root.querySelector(".stage");

    toggleBtn.addEventListener("click", () => {
      const paused = root.classList.toggle("paused");
      toggleBtn.textContent = paused ? "Play" : "Pause";
    });

    restartBtn.addEventListener("click", () => {
      root.classList.remove("paused");
      toggleBtn.textContent = "Pause";

      const replacement = stage.cloneNode(true);
      stage.replaceWith(replacement);
    });