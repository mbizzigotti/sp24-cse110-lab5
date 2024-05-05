// explore.js

window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;
var voices = [];
var voiceSelect;

function populateVoiceList() {
	voices = synth.getVoices();
	
	for (let i = 0; i < voices.length; i++) {
		const option = document.createElement("option");
		option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
		if (voices[i].default) {
			option.textContent += " — DEFAULT";
		}
  
		option.setAttribute("data-lang", voices[i].lang);
	  option.setAttribute("data-name", voices[i].name);
	  voiceSelect.appendChild(option);
	}
  }
  
function init() {
	voiceSelect = document.getElementById("voice-select");
	
	populateVoiceList();
	if (synth.onvoiceschanged !== undefined) {
		synth.onvoiceschanged = populateVoiceList;
	}
}

const text = document.getElementById("text-to-speak")
const talk_button = document.querySelector("#explore button");
talk_button.addEventListener("click", () => {
	const utterance = new SpeechSynthesisUtterance(text.value);

	const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
	for (let i = 0; i < voices.length; i++) {
		if (voices[i].name === selectedOption) {
			utterance.voice = voices[i];
		}
	}
	
	// Open mouth while speaking
    utterance.onstart = (event) => {
        document.querySelector('#explore img').src = "assets/images/smiling-open.png";
    };
    utterance.onend = (event) => {
        document.querySelector('#explore img').src = "assets/images/smiling.png";
    };

	synth.speak(utterance);
  });