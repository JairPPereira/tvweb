const sources = [
  "https://stream-41.zeno.fm/2cgy8mzvsy8uv?zs=yo4PyEhfTWK29YRfVvNeWA", // passado
  "https://stream-59.zeno.fm/p3yys99taphvv?zs=YmiO2TgATMaHAKx7t057pw", // top hits
  "https://stream-44.zeno.fm/9t6tfnsn3ehvv?zs=59Ws6zggTjSMI7cMkwtnFg", // Atualidade
  "https://stream-57.zeno.fm/9ts1tgxryhhvv?zs=cwpQYLFdTxmVOaOVAJ_rYQ&aw_0_req_lsid=1663871100546_0.44668418486659633&an-uid=8773777118362868920&triton-uid=cookie%3Ab9e998c5-ed73-45ba-983a-4fef71654a75", // Pop Rock
  "https://stream-41.zeno.fm/yyv0vgxz4rhvv?zs=xP4k0slFQTmUc4oKWb86hg&aw_0_req_lsid=1665535484228_0.3879091453241035&an-uid=7245416173759505668&triton-uid=cookie%3A6e29eb36-65fb-44bd-a64e-9f6c50e9599c", // Harpa cristã
];

const labels = [
  [ "Radio Passado", "https://stream-41.zeno.fm/2cgy8mzvsy8uv?zs=yo4PyEhfTWK29YRfVvNeWA" ],
  [ "Top hits", "https://stream-59.zeno.fm/p3yys99taphvv?zs=YmiO2TgATMaHAKx7t057pw"],
  [ "Atualidade", "https://stream-44.zeno.fm/9t6tfnsn3ehvv?zs=59Ws6zggTjSMI7cMkwtnFg"],
  [ "Pop Rock", "https://stream-57.zeno.fm/9ts1tgxryhhvv?zs=cwpQYLFdTxmVOaOVAJ_rYQ&aw_0_req_lsid=1663871100546_0.44668418486659633&an-uid=8773777118362868920&triton-uid=cookie%3Ab9e998c5-ed73-45ba-983a-4fef71654a75"],
  [ "Harpa Cristã", "https://stream-41.zeno.fm/yyv0vgxz4rhvv?zs=xP4k0slFQTmUc4oKWb86hg&aw_0_req_lsid=1665535484228_0.3879091453241035&an-uid=7245416173759505668&triton-uid=cookie%3A6e29eb36-65fb-44bd-a64e-9f6c50e9599c"]
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
