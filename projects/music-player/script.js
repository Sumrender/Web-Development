console.log("Website is running successfully");

// Variables initializaton
const songIndex = 0;
const bgImg = document.body;
const audioElement = new Audio('songs/1.mp3');
const masterPlay = document.getElementById('masterPlay');
const gif = document.getElementById('gif');
const myProgressBar = document.getElementById('myProgressBar');
const songs = [];   // copy from spotify clone


// Wallpaper setting
var wallpaper = Math.floor((Math.random())*9);
bgImg.style.backgroundImage = "url('wallpaper/" + wallpaper + ".jpg')" ;

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    var currTime = audioElement.currentTime;
    var totalTime = audioElement.duration;
    var progress = parseFloat((currTime/totalTime)*100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', function (){
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
