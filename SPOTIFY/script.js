console.log("Welcome to Spotify");
//Initialize the variabel
let songIndex = 0;
let audiaElement = new Audio('song/6.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems =Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName: "Majya_Jatich Jatich",filePath:'song/1.m4a',coverPath:"cover/cover1.jpg"},
    {songName: "Jab Koi Bat Bigad Jaye",filePath:"song/2.m4a",coverPath:"cover/2.jpg"},
    {songName: "Kisi Shayar Ki Gajal",filePath:"song/3.m4a",coverPath:"cover/3.jpg"},
    {songName: "Ku Vada Huaa",filePath:"song/4.m4a",coverPath:"cover/4.jpg"},
    {songName: "DeKha ek Khwab",filePath:"song/5.m4a",coverPath:"cover/5.jpg"},
    {songName: "-",filePath:'song/7.m4a',coverPath:"cover/6.jpg"},
    {songName: "Samne vali",filePath:'song/8.m4a',coverPath:"cover/2.jpg"},
    {songName: "me fir bhi tumko",filePath:'song/9.m4a',coverPath:"cover/3.jpg"},
    {songName: "Sagar jaisi aakhovali",filePath:'song/10.m4a',coverPath:"cover/5.jpg"},

]
songItems.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})



//audioElement.play();
//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audiaElement.paused || audiaElement.currentTime<=0)
    {
        audiaElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

    }
    else{
        audiaElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
})
//listen to event
audiaElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audiaElement.currentTime/audiaElement.duration)* 100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audiaElement.currentTime = myProgressBar.value * audiaElement.duration/100;
})

const makeAllPlays = ()=>
{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
       
        makeAllPlays();
        
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audiaElement.src=`song/${songIndex+1}.m4a`;
        masterSongName.innerHTML=songs[songIndex].songName;
        audiaElement.currentTime=0;
        audiaElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9)
    {
        songIndex=0;
    }
    else{
        songIndex += 1;
    }
    audiaElement.src=`song/${songIndex+1}.m4a`;
    masterSongName.innerHTML=songs[songIndex].songName;
        audiaElement.currentTime=0;
        audiaElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    audiaElement.src=`song/${songIndex+1}.m4a`;
    masterSongName.innerHTML=songs[songIndex].songName;
    audiaElement.currentTime=0;
    audiaElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
