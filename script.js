const root = document.getElementById("pulseMotion");
const toggleBtn = document.getElementById("toggleBtn");
const restartBtn = document.getElementById("restartBtn");
const stage = root.querySelector(".stage");
const beat = document.getElementById("beat");
const audioContext = new AudioContext();
let beatBuffer;
let beatSource;

async function loadBeat() {
  const response = await fetch("matts-beat.mp3");
  const arrayBuffer = await response.arrayBuffer();
  beatBuffer = await audioContext.decodeAudioData(arrayBuffer);
}

loadBeat();

function startBeat() {
  beatSource = audioContext.createBufferSource();
  beatSource.buffer = beatBuffer;
  beatSource.loop = true;
  beatSource.connect(audioContext.destination);
  beatSource.start();
}

toggleBtn.addEventListener("click", async () => {
  const paused = root.classList.toggle("paused");

  if (paused) {
    if (beatSource) {
      beatSource.stop();
      beatSource = null;
    }

    toggleBtn.textContent = "Play";
  } else {
    await audioContext.resume();
    startBeat();
    toggleBtn.textContent = "Pause";
  }
});

restartBtn.addEventListener("click", async () => {
  root.classList.remove("paused");
  toggleBtn.textContent = "Pause";

  const currentStage = root.querySelector(".stage");
  const replacement = currentStage.cloneNode(true);
  currentStage.replaceWith(replacement);

  if (beatSource) {
    beatSource.stop();
    beatSource = null;
  }

  await audioContext.resume();
  startBeat();
});
