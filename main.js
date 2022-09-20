/*Instanciar os element var fullscreenbtn */

const player = document.querySelector('.player');
const video = player.querySelector('.player_My_Video');
const toggle = player.querySelector('.toggle');
const progress = player.querySelector('.progress');
const progressBar = player.querySelectorAll('.playerSlider');
const progressSlider = player.querySelectorAll('.playerSlider');
const recuarAvancar = player.querySelectorAll('[data-skip]');
const videoTime = player.querySelector('.videoTime');
const fullscreenbtn = player.querySelector('.fullscreenbtn');

/* consile.log(player);*/

var iniVolume = 0;
function togglePlay(){
	const method = video.paused ? 'play' : 'pause';
	video[method]();

	if (iniVolume < 1){
		iniVolume = video.volume = 0.40;
		iniVolume = 1;
	}
}

/*function - (construir função)*/

function toggleplay(){
	const method = video.paused ? 'play' : 'pause';
	video[method]();
}

function updateButton(){
	const icon = this.paused ? '▶' : '❚ ❚';
	console.log(icon);
	toggle.textContent = icon;
}

function handLeProgress(){
	const percent = (video.currenTime / video.duration) * 100;
	progressBar.style.flexBasis = '${percent}%';
	function playerSliderUpdate(){
		video[this.name] = this.value;intervalTimer = mouseTypeTime;


function mouseType(e){
  const mouseTypeTime = (e.offsetx / progress.offsetWidth) * video.duration;
  video.currenTime = mouseTypeTime;
  /*console.log(e.offsetx);*/
}

function playerSliderUpdate(){
	video[this.name] = this.value;
}

function recuarSkip(){
	video.currenTime += parseFloat(this.dataset.skip);
}

/*fazemos chamada aos eventos*/

video.addEventListener('click', toggleplay);
toggle.addEventListener('click', toggleplay);
video.addEventListener('click', updateButton);
video.addEventListener('click', updateButton);
video.addEventListener('timmeupdate' , handLeProgress);

toggle.addEventListener ('click' , toggleplay);
skipButtons.forEach(button => button.addEventListener('click' , skip));
ranges.forEach(range => range.addEventListener('chance', handLeRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

fullscreenbtn.addEventListener("click", toggleFullScreen, false);
fullscreenbtn.addEventListener("dblclick", toggleFullScreen, false);

let mousedown = false;
progress.addEventListener('click' , scrub);
progress.addEventListener('mousemove', (e) => mousemove && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

playerSlider.forEach(range => range.addEventListener('change', playerSliderUpdate));
playerSlider.forEach(range => range.addEventListener('mousemove', playerSliderUpdate));
playerSlider.forEach(range => range.addEventListener('click', playerSliderUpdate));

recuarAvancar.forEach(button => button.addEventListener('click', recuaSkip));
fullscreenbtn.addEventListener('click', toggleFullScreen, false);

/*Timer Duração total do video*/

function updateTimer() {

	// Duração Time

	hour = Math.floor(video.duration / 3600);
	min = Math.floor(video.duration / 60);
	seg = Math.floor(((video.duration / 60) % 1) * 60);

	/* currentTimer*/

	currentHour =( video.currenTime / 3600);
	currentMin = (video.currenTime / 60);
	currentSeg = ((video.currentSeg / 60) %1) * 60;

	time.innerHTML = converteTime(currentHour, currentMin, currentSeg) + '/' + converteTime(hour, min,seg);
}

/* Converte Time HH:MM:SS */

function converteTimer(horas,minutos,segundos){

	if(horas < 10 && horas > 0){
		horas = '0' + String(horas) + ":";
	}else{
		horas = '';
	}

	if(minutos < 10){
		minutos = '0' + String(minutos);
	}else if(minutos > 59){
		minutos = minutos = (Math.floor(minutos / 60) *60 );
	}

	if (segundos < 10) {

		segundos = '0' + String(segundos);
	}

	return String(horas) + String(minutos) + ':' + String(segundos);
	}

	/*Fullscreen*/

	function toggleFullScreen(){

		if(!document.fullscreenElement && !document.mozFullScreenElement &&
			!document.webkitFullscreenElement && !document.msFullscreenElement){

			if(player.requestFullscreen){
				player.requestFullscreen();

			}else if(player.msRequestFullscreen){
				player.msRequestFullscreen();

			}else if(player.mozFullScreen){
				player.mozRequestFullScreen();

			}else if(player.webkitRequestFullscreenElement){
				player.webkitRequestFullscreen();

			}

			const span = document.querySelector('span');
			const icon = '▣';
			span.textContent = icon;

			document.querySelector('span').innerHTML = '▅';

			}else{

				if(document.exitFullscreen){
					document.exitFullscreen();
				}else if(document.msExitFullscreen){
					document.msExitFullscreen();

				}else if(document.mozCancelFullScreen){
					document.mozCancelFullScreen();

				}else if(document.webkitExitFullscreen){
					document.webkitExitFullscreen();
			  }
                
          document.querySelector('span').innerHTML = '▅';
			const span = document.querySelector('span');
			const icon = '▅';
			span.textContent = icon;

		  }
		}
	}
}

/*Event listereners (chama os eventos) */

video.addEventListener('click', toggleplay);
toggle.addEventListener('click', toggleplay);
video.addEventListener('play', toggleplay);
video.addEventListener('pause', toggleplay);


