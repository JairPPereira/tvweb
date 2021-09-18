let audioList = [
    {
      title:"Rádio Mix Belém FM",
      album:"Rádio FM",
      author:"",
      source:"https://playerservices.streamtheworld.com/api/livestream-redirect/MIXFM_BELEMPARA.mp3",
      type:"audio/mpeg"
 
    }
  
  ];
  
  let currentAudio;
  let player = document.getElementById("player");
  let play = document.getElementById("play");
  
  let mute = document.getElementById("mute");
  let playing;
  let musicInfo = document.getElementById("music-info");
  let musicInfoChilds = [...musicInfo.children];
  
  function loadAudio(audio){
    audio = audio || 0;
    if(currentAudio){
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    musicInfoChilds[0].innerHTML = audioList[audio].title;
  
    musicInfoChilds[2].innerHTML = "Album: " + audioList[audio].album;
    currentAudio = new Audio(audioList[audio].source);
  }
  
  function pixelPerSecond(){
    return Number(window.getComputedStyle(bar).getPropertyValue("width").replace("px", "")) / currentAudio.duration;
  }
  
  function currentTimeUpdate(){
    if(!window.grabbing){
      currentTime.style.width = (currentAudio.currentTime * pixelPerSecond()) + "px";
    }
  }
  
  function currentGrabTimeUpdate(event){
    let eventPageX = event.pageX || event.touches[0].pageX;
    
    if((eventPageX - barPosition) > Number(window.getComputedStyle(bar).getPropertyValue("width").replace("px",""))){
      currentTime.style.width = window.getComputedStyle(bar).getPropertyValue("width");
    }else if((eventPageX - barPosition) < 0){
      currentTime.style.width = 0;
    }else{
      currentTime.style.width = (eventPageX - barPosition) + "px";
    }
  }
  
  function barStart(event){
    if(event.target == bar){
      let eventPageX = event.pageX || event.touches[0].pageX;
      window.grabbing = true;
      
      currentTime.style.width = (eventPageX - barPosition) + "px";
      overlay.style.display = "block";
      
      if(event.type == 'touchstart'){
        window.addEventListener("touchmove", currentGrabTimeUpdate);
      }else{
        window.addEventListener("mousemove", currentGrabTimeUpdate);
      }
      currentAudio.muted = true;
    }
  }
  
  function barEnd(event){
    if(window.grabbing === true){
      window.grabbing = false;
      currentAudio.muted = false;
      currentAudio.currentTime = Number(currentTime.style.width.replace("px","")) / pixelPerSecond();
      overlay.style.display = "none";
      
      if(event.type == 'touchstart'){
        window.removeEventListener("touchmove", currentGrabTimeUpdate);
      }else{
        window.removeEventListener("mousemove", currentGrabTimeUpdate);
      }
    }
  }
  
  play.addEventListener("click", function(){
    if(currentAudio.paused){
      play.innerHTML = '<i class="fas fa-pause"></i>';
      currentAudio.play(true); 
    }else{
      play.innerHTML = '<i class="fas fa-play"></i>';
      currentAudio.pause();
    }
  });
  
  mute.addEventListener("click", function(){
    if(!currentAudio.muted){
      this.innerHTML = '<i class="fas fa-volume-mute"></i>';
      currentAudio.muted = true;
    }else{
      this.innerHTML = '<i class="fas fa-volume-up"></i>';
      currentAudio.muted = false;
    }
  })
  
  window.addEventListener("mousedown", barStart);
  window.addEventListener("mouseup", barEnd);
  
  window.addEventListener("touchstart", barStart);
  window.addEventListener("touchend", barEnd);
  
  (function load(){
    playing = setInterval(currentTimeUpdate, 1);
    loadAudio()
  })();
  
  currentAudio.addEventListener("ended", function(){
    play.innerHTML = '<i class="fas fa-play"></i>';
  });