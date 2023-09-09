console.log("welcome to spotify");


//initially play the songs
let songIndex =0 ;
let audioElement = new Audio('song/02.mp3');
let masterplay= document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songitem =Array.from(document.getElementsByClassName('songitem'));


let songs = [
    {songName: "let me love you", filepath: "song/03.mp3",coverPath: "covers/cover2.jpg"},
    {songName: "lovely", filepath: "song/02.mp3",coverPath: "covers/faded.jpg"},
    {songName: "baby", filepath: "song/03.mp3",coverPath: "covers/cover2.jpg"},
    {songName: "Meri jaan", filepath: "song/04.mp3",coverPath: "covers/maan.jpg"},
    {songName: "Brown rang de", filepath: "song/05.mp3",coverPath: "covers/brownrang.jpg"},
    {songName: "Believer", filepath: "song/06.mp3",coverPath: "covers/believer.jpg"},
    {songName: "faded", filepath: "song/07.mp3",coverPath: "covers/faded.jpg"},
    {songName: "salam-e-ishq", filepath: "song/02.mp3",coverPath: "covers/maan.jpg"},
    {songName: "Feel your love", filepath: "song/01.mp3",coverPath: "covers/brownrang.jpg"},
    {songName: "tumari kasam", filepath: "song/07.mp3",coverPath: "covers/faded.jpg"},


]
songitem.forEach((element,i) => {
   
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});



// audioElement.play();

// Handle play/push click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }

})

//listen to event
audioElement.addEventListener('timeupdate', ()=>{  

    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);  // percentage of song play = audioElement.currentTime/audioElement.duration) * 100
    myprogressbar.value =progress;

})

// audioElement.currentTime =  percentage of song play * audioElement.duration / 100
myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

const makeALLPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
        makeALLPlays();
        index = parseInt(e.target.id);
       
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src= 'song/02.mp3';
        audioElement.currentTime =0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

    })
})