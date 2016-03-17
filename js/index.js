console.log('Hello Vimeo!');

var Player,
	PlayPauseBtn,
	PlayDiv,
	PauseDiv,
	ControlsWrapper,
	Controls,
	ProgressBar;

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
	ProgressBar 		 = document.getElementById('ControlsPlayBar-progress');
	ProgressBarPlayed	 = document.getElementsByClassName('ControlsPlayBar-played')[0];
	ProgressBarLoaded	 = document.getElementsByClassName('ControlsPlayBar-loaded')[0];

	PlayPauseBtn.addEventListener('click', function () { togglePlayPause('PlayPauseBtn'); });
	ControlsClickWrapper.addEventListener('click', function () { togglePlayPause('ControlsWrapper'); });
	Player.addEventListener('timeupdate', updateProgressBar, false);

	Player.controls = false;
	console.log(Player);

	initControlHover();
}

function togglePlayPause(context) {
	var PlayDivCN = PlayDiv.classList,
		PauseDivCN = PauseDiv.classList;

	if (Player.paused || Player.ended) {
		PlayPauseBtn.title = 'Pause';
		PlayDivCN.remove('--active');
		PauseDivCN.add('--active');
		Player.play();
	} else {
		PlayPauseBtn.title = 'Play';
		PlayDivCN.add('--active');
		PauseDivCN.remove('--active');
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

function updateProgressBar() {
	var bufferedEnd = Player.buffered.end(Player.buffered.length - 1);
	var duration = Player.duration;

	var currentPlayed = Math.floor((100 / Player.duration) * Player.currentTime),
		currentLoaded = ((bufferedEnd / duration) * 100);
	
	ProgressBarPlayed.style.width = currentPlayed + '%';
	ProgressBarLoaded.style.width =  currentLoaded + '%';
}


function changeButtonType(btn, value) {
	btn.title = value;
	btn.innerHTML = value;
	btn.className = value;
}

