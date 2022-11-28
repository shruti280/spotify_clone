console.log("welcome to spotify")

let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName')
let gif = document.getElementById('gif')
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs =
[
    {songName:"Dil Mere - The Local Train" , filePath :"songs/1.mp3" , coverPath : "images/song1.jpg "} ,
    {songName:"OOPS - King" , filePath :"songs/2.mp3" , coverPath : "images/song2.jpg "} ,
    {songName:"Maan Meri Jaan -  King" , filePath :"songs/3.mp3" , coverPath : "images/song3.jpg "} ,
    {songName:" Tu Aake Dekhle - King" , filePath :"songs/4.mp3" , coverPath : "images/song5.jpeg "} ,
    {songName:"Falsafa - Tanzeel Khan" , filePath :"songs/5.mp3" , coverPath : "images/song4.jpg "} ,
    {songName:"Meri Baaton Mein Tu - Anuv Jain" , filePath :"songs/6.mp3" , coverPath : "images/song6.png "} ,
    {songName:"Baarishein - Anuv Jain" , filePath :"songs/7.mp3" , coverPath : "images/song7.jpg "} ,
    {songName:" Irraday - Abdul Hannan" , filePath :"songs/8.mp3" , coverPath : "images/song8.jpeg "} ,
]

songItems.forEach((element,i)=> {

element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
console.log('timeupdate');
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
// console.log(progress);
myProgressBar.value= progress;
 
})
myProgressBar.addEventListener('change' , ()=> {
    audioElement.currentTime= myProgressBar.value*audioElement.duration/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
{
element.addEventListener('click',(e)=>{
makeAllPlays();
songIndex = parseInt(e.target.id);
e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle');
audioElement.src= `songs/${songIndex+1}.mp3`;
masterSongName.innerText = songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
gif.style.opacity=1;
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
})
})

document.getElementById('next').addEventListener('click' , ()=>{
    if (songIndex > 8){
        songIndex=0;
    }
    else {
        songIndex +=1;
    }
    audioElement.src= `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click' , ()=>{
    if (songIndex <=0){
        songIndex=0;
    }
    else {
        songIndex -=1;
    }
    audioElement.src= `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
})