import { song } from "./Icons.js"

const musictwo =document.getElementById("aod")
const prev=document.getElementById("prev")
const forword=document.getElementById("forword")
const aod=document.getElementById("aod")
const imgmusic=document.getElementById("imgmusic")
const artist=document.getElementById("artist")

// const whiteRabbit = document.getElementById('rabbit');




// Play rabbit animation

aod.src=`${song[0].song}`

let playresume=document.getElementById("play")

let n="faaiz-alam jasim-oo"
let isPlayOroff=false
const rabbitDownKeyframes = new KeyframeEffect(
     imgmusic, // element to animate
     [
          { transform: 'rotate(0deg)' }, // keyframe
          { transform: 'rotate(360deg)' } // keyframe
     ],
     {duration:2000,fill:"auto",iterations:Infinity} // keyframe options
     );
const PlaySong=(()=>{
     isPlayOroff=true
     aod.play()
     
     // console.log(n.replace(/jasim-oo/g, "maaz-alam"))
     playresume.classList.replace("fa-play", "fa-pause")
          const rabbitDownAnimation = new Animation(rabbitDownKeyframes);
          rabbitDownAnimation.play();
          
          
})
const StopSong=(()=>{
     isPlayOroff=false
     aod.pause()
     // console.log(n.replace(/jasim-oo/g, "maaz-alam"))
     playresume.classList.replace("fa-pause", "fa-play")
     const rabbitDownAnimation = new Animation(rabbitDownKeyframes);
          rabbitDownAnimation.pause()

})
const plays=document.getElementById("play").addEventListener("click",()=>{


     if (isPlayOroff===false) {
          PlaySong()

          
     }else{

     
          
          StopSong()
     }

     
    
   
})

let allsongs=0
console.log(allsongs)
prev.addEventListener("click",()=>{
     // PlaySong()
     allsongs-=1

     if (allsongs>=0) {
          aod.src=`${song[allsongs].song}`
          imgmusic.src=`${song[allsongs].image}`
          artist.textContent=`${song[allsongs].title}`
          PlaySong()
          // musictwo.addEventListener("timeupdate",allms)
          
          return
          
     }else{
          window.alert("no more previous song")
     }
     
})
console.log(allsongs,"hh")
forword.addEventListener("click",()=>{
     // aod.play()
     allsongs+=1
     if (allsongs!==song.length) {
          aod.src=`${song[allsongs].song}`
          imgmusic.src=`${song[allsongs].image}`
          artist.textContent=`${song[allsongs].title}`
          // aod.play()
          PlaySong()
          // musictwo.addEventListener("timeupdate",allms)
          // document.addEventListener("timeupdate",allms)
          return
          
     }else{
          window.alert("no more songs")
     }
    
})


// progress bar code


const durationTimeDom =document.getElementById("duration")

// progressdiv
const currenttime=document.getElementById("currenttime")
const progress =document.getElementById("progress")

const allms=((e)=>{
     

     const {currentTime,duration}=e.srcElement
     const runningproBar=(currentTime / duration) * 100
     progress.style.width=`${runningproBar}%`
     
     // console.log(totalmin)

     // console.log(duration)
     // total duration time
     const totalmin=Math.floor(Number((duration / 60))) || "0"
     const sectotal=Math.floor(Number((duration % 60))) || "00"
 // total duration time incressing 
 const totalminincressing=Math.floor(Number((currentTime / 60))) || "0"
 const sectotalincressing=Math.floor(Number((currentTime % 60))) || "0"
     


       durationTimeDom.textContent=`${totalmin<10?"0"+totalmin:totalmin}:${sectotal}`
       currenttime.textContent=`${totalminincressing<10?"0"+totalminincressing:totalminincressing}:${sectotalincressing<10?"0"+sectotalincressing:sectotalincressing}`
     //   currenttime.textContent=`${}`
     
     
 if (currentTime===duration) {
            allsongs+=1
     if (allsongs!==song.length) {
          aod.src=`${song[allsongs].song}`
          imgmusic.src=`${song[allsongs].image}`
          artist.textContent=`${song[allsongs].title}`
          // aod.play()
          PlaySong()
          return
          
     }else{
          console.log("is it workin stopsong in progress")
          StopSong()
     }
          
     
     
}


})



const SongforwAndBackw=((e)=>{
          const {duration,currentTime}=musictwo
          
          const  movePorgress=(e.offsetX / e.srcElement.clientWidth)*duration
          console.log(movePorgress,e.offsetX)

          musictwo.currentTime=movePorgress
          // const movePorgress=(e.offsetX / e.srcElement.clientWidth)*3
          
     
     })
     
     const progressdiv= document.getElementById("progressdiv")
     // const prog= document.getElementById("progress")
     progressdiv.addEventListener("click",SongforwAndBackw)
    
     musictwo.addEventListener("timeupdate",allms)
    