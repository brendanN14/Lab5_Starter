// explore.js

function init() {
  const faceImg = document.querySelector("#explore > img");
  const textArea = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");
  const talkButton = document.querySelector("button");

  let voices = [];

  function loadVoices() {
    voices = speechSynthesis.getVoices();

    // Clear the dropdown first
    voiceSelect.innerHTML = "";

    // Add default option
    const defaultOption = document.createElement("option");
    defaultOption.value = "select";
    defaultOption.textContent = "Select Voice:";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    voiceSelect.appendChild(defaultOption);

    // Add each available voice
    voices.forEach((voice, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  // Load voices once
  loadVoices();

  // Some browsers load voices late, so this catches them when ready
  speechSynthesis.addEventListener("voiceschanged", loadVoices);

  talkButton.addEventListener("click", () => {
    speechSynthesis.cancel();
    const text = textArea.value;

    if (text === "") {
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);

    if (voiceSelect.value !== "select") {
      utterance.voice = voices[voiceSelect.value];
    }

    utterance.addEventListener("start", () => {
      faceImg.src = "assets/images/smiling-open.png";
      faceImg.alt = "Open mouth smiling face";
    });

    utterance.addEventListener("end", () => {
      faceImg.src = "assets/images/smiling.png";
      faceImg.alt = "Smiling face";
    });

    speechSynthesis.speak(utterance);
  });
}

window.addEventListener("DOMContentLoaded", init);