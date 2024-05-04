// expose.js

window.jsConfetti = new JSConfetti();
window.addEventListener('DOMContentLoaded', init);

function pick_volume_image(volume) {
	let num = 3;
	if      (volume < 1)  num = 0;
	else if (volume < 33) num = 1;
	else if (volume < 67) num = 2;

	return "assets/icons/volume-level-" + num.toString() + ".svg";
}

function init() {
	let audio = document.querySelector("#expose audio");

	// Main Image
	let main_image = document.querySelector("#expose img");
	let select     = document.getElementById("horn-select");
	if (select.value != "select") {
		main_image.src = "assets/images/" + select.value + ".svg";
		audio     .src = "assets/audio/"  + select.value + ".mp3";
	}
	select.addEventListener("change",
		function () {
			main_image.src = "assets/images/" + select.value + ".svg";
			audio     .src = "assets/audio/"  + select.value + ".mp3";
		}
	);

	// Volume Slider
	let volume_image  = document.querySelector("#volume-controls img");
	let volume_slider = document.getElementById("volume");
	volume_slider.addEventListener("change",
		function () {
			let volume = parseInt(volume_slider.value);
			volume_image.src = pick_volume_image(volume);
			audio.volume = volume / 100;
		}
	);
	
	// Play Sound
	let play_button = document.querySelector("#expose button");
	play_button.addEventListener("click",
		function() {
			audio.play();
			if (select.value == "party-horn")
				window.jsConfetti.addConfetti();
		}	
	);
}