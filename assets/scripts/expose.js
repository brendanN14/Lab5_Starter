// expose.js

function init() {
  const hornSelect = document.getElementById("horn-select");
  const hornImage = document.querySelector("#expose > img");
  const audio = document.querySelector("audio");
  const volumeSlider = document.getElementById("volume");
  const volumeIcon = document.querySelector("#volume-controls img");
  const playButton = document.querySelector("button");

  hornSelect.addEventListener("change", function () {

    if (hornSelect.value === "air-horn") {
      hornImage.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    }

    if (hornSelect.value === "car-horn") {
      hornImage.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    }

    if (hornSelect.value === "party-horn") {
      hornImage.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
  });

  volumeSlider.addEventListener("input", function () {
    const volumeValue = Number(volumeSlider.value);

    audio.volume = volumeValue / 100;

    if (volumeValue === 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    } else if (volumeValue < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    } else if (volumeValue < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
  });

  playButton.addEventListener("click", function () {
    audio.play();

    if (hornSelect.value === "party-horn") {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
}

window.addEventListener('DOMContentLoaded', init);