const sources = [
  "https://stream-41.zeno.fm/2cgy8mzvsy8uv?zs=yo4PyEhfTWK29YRfVvNeWA", // passado
  "https://stream-59.zeno.fm/p3yys99taphvv?zs=YmiO2TgATMaHAKx7t057pw", // top hits
  "http://ice2.somafm.com/folkfwd-128-mp3", // folk forward
  "http://94.23.26.22:8090/live.mp3" // punk fm
];

const labels = [
  [ "Radio Passado", "https://stream-41.zeno.fm/2cgy8mzvsy8uv?zs=yo4PyEhfTWK29YRfVvNeWA" ],
  [ "Top hits", "https://stream-59.zeno.fm/p3yys99taphvv?zs=YmiO2TgATMaHAKx7t057pw"],
  [ "SomaFM Folk Forward", "http://somafm.com/folkfwd/"],
  [ "Punk FM", " http://www.punkfm.co.uk/"]
];

let playingIndex = 0; // current radio
let playing = true; // stream status
let music = null;

setTimeout(function(){
    loadStream(playingIndex);
}, 1);

function loadStream(index){
  if(playing && music !== null)
    destroyStream();

  music = new Audio();
  music.src = sources[index];
  music.load();
  music.play();
  setLabel(index);
  pauseIcon();
  playingIndex = index;
  playing = true;
}

function destroyStream(){
  music.pause();
  music.src = "";
  playIcon();
  playing = false;
}

function changePlayback(){
  if(playing){ destroyStream();  }else{  loadStream(playingIndex);  }
}

function setLabel(index){
  document.getElementById("label").innerHTML = '<h6> <a target="_blank" href="' + labels[index][1] + '">' + labels[index][0] + '</a></h6>';
}

document.onkeydown = function(e) {
  e = e || window.event;
  switch(e.which || e.keyCode) {
    case 32:
      changePlayback();
    break;
  }
};

// icons
function pauseIcon(){
  document.getElementById('playbackButton').className = 'icon fa-pause';
}
function playIcon(){
  document.getElementById('playbackButton').className = 'icon fa-play';
}
