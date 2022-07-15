
let songindex=0;
let audioplay=new Audio('songs/1.mp3');
let songitem=Array.from(document.getElementsByClassName('songitem'));
let masterPlay=document.getElementById('masterPlay');
let previous=document.getElementById('previous');
let next=document.getElementById('next');
let myProgressBar=document.getElementById('file');

let songs=[
    {songname:'sun rha ha na tu' ,filepath:'songs/1.mp3',cover:'images/1.jpg'},
    {songname:'Boss Jass Manak' ,filepath:'songs/2.mp3',cover:'images/2.jpg'},
    {songname:'tere mere Arman malik' ,filepath:'songs/3.mp3',cover:'images/3.jpg'},
    {songname:'tu mera dil falak' ,filepath:'songs/4.mp3',cover:'images/4.jpg'},
    {songname:'kuch tu Arman malik' ,filepath:'songs/5.mp3',cover:'images/5.jpg'},
    {songname:'moonroof jass manak' ,filepath:'songs/6.mp3',cover:'images/6.jpg'},
    {songname:'suit panjabi jass manak' ,filepath:'songs/7.mp3',cover:'images/7.jpg'},
    {songname:'Rab wangu jass manak' ,filepath:'songs/8.mp3',cover:'images/8.jpg'},
    {songname:'milne ha muj sy ay' ,filepath:'songs/9.mp3',cover:'images/9.jpg'}

];

//master play sudio play on icon click
masterPlay.addEventListener('click',()=>{
    if(audioplay.paused || audioplay<=0){
        audioplay.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

    }else{
        audioplay.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})



//change name and cover of song
songitem.forEach((element,i) => {
    // element.getElementsByTagName('img')[0].src=songs[i].cover;
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].cover;
    element.getElementsByClassName('songtitle')[0].innerHTML=songs[i].songname;
})

audioplay.addEventListener('timeupdate',()=>{
    progress=parseInt((audioplay.currentTime/audioplay.duration)*100);
    myProgressBar.value=progress;
});

myProgressBar.addEventListener('change',()=>{
    
    audioplay.currentTime=myProgressBar.value*audioplay.duration/100;
});

next.addEventListener('click',()=>{
    if (songindex>=9) {
        songindex=0;
        
    }else{
        songindex +=1;
    }
    audioplay.src=`songs/${songindex+1}.mp3`;
    audioplay.play();
    audioplay.currentTime=0;

    
})
previous.addEventListener('click',()=>{
    if (songindex<=0) {
        songindex=0;
        
    }else{
        songindex -=1;
    }
    audioplay.src=`songs/${songindex-1}.mp3`;
    audioplay.play();
    audioplay.currentTime=0;

    
})


// const makeallplay=()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.add('fa-play-circle');
//         element.classList.remove('fa-pause-circle');
//     })
// }

const makeallplay=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
}

Array.from(document.getElementsByClassName('songitem')).forEach((element)=>{
    
    element.addEventListener('click',(e)=>{
        makeallplay();
        console.log(parseInt(e.target.id));
        songindex=parseInt(e.target.id);
        console.log(e.target);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioplay.src=`songs/${songindex+1}.mp3`;
        masterSongName.innerText=songs[songindex].songname;
        audioplay.currentTime=0;
        audioplay.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        //gift opasity
        gif.style.opacity=1;
        
    })
});

