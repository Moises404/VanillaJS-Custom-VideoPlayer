console.log('Hello Vimeo!');

var Player,
	PlayPauseBtn,
	PlayDiv,
	PauseDiv,
	ControlsWrapper,
	Controls;

document.addEventListener('DOMContentLoaded', function() {
	initPlayer();
}, false);


function initPlayer() {
	Player 		 		 = document.getElementById('Player-video');
	PlayPauseBtn 		 = document.getElementById('Controls-play-pause');
	PlayDiv 	 		 = document.getElementsByClassName('Controls-play-icon')[0];
	PauseDiv 	 		 = document.getElementsByClassName('Controls-pause-icon')[0];
	ControlsWrapper 	 = document.getElementById('Controls-wrapper');
	ControlsClickWrapper = document.getElementById('Controls-click-wrapper');
	Controls 	 		 = document.getElementById('Controls');

	PlayPauseBtn.addEventListener('click', function () { togglePlayPause('PlayPauseBtn'); });
	ControlsClickWrapper.addEventListener('click', function () { togglePlayPause('ControlsWrapper'); });

	Player.controls = false;
	console.log(Player);

	initControlHover();
}

function togglePlayPause(context) {
	console.log(context);

	var PlayDivCN = PlayDiv.classList,
		PauseDivCN = PauseDiv.classList;

	if (Player.paused || Player.ended) {
		PlayPauseBtn.title = 'Pause';
		PlayDivCN.remove('--active');
		PauseDivCN.add('--active');
		console.log('Pause');
		Player.play();
	} else {
		PlayPauseBtn.title = 'Play';
		PlayDivCN.add('--active');
		PauseDivCN.remove('--active');
		console.log('Play');
		Player.pause();
	}
}

function initControlHover() {  
	  ControlsWrapper.addEventListener('mouseenter', function( event ) {   
	    Controls.classList.add('--fadeIn');
	    Controls.classList.remove('--fadeOut');
	  }, false);

	  ControlsWrapper.addEventListener('mouseleave', function( event ) {   
	    Controls.classList.add('--fadeOut');
	    Controls.classList.remove('--fadeIn');
	  }, false);
}

function changeButtonType(btn, value) {
	btn.title = value;
	btn.innerHTML = value;
	btn.className = value;
}

