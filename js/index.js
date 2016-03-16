console.log('Hello Vimeo!');


var Player;

document.addEventListener('DOMContentLoaded', function() {
	initialisePlayer();
}, false);

function initialisePlayer() {
	Player = document.getElementById('Player-video');
	Player.controls = false;
	console.log(Player);
}

function togglePlayPause() {
	var btn = document.getElementById('Player-controls-play-pause');
	if (Player.paused || Player.ended) {
		btn.title = 'pause';
		btn.innerHTML = 'pause';
		btn.className = 'pause';
		Player.play();
	} else {
		btn.title = 'play';
		btn.innerHTML = 'play';
		btn.className = 'play';
		Player.pause();
	}
}

function changeButtonType(btn, value) {
	btn.title = value;
	btn.innerHTML = value;
	btn.className = value;
}

