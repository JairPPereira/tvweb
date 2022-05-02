const cover = document.querySelector(".card-image");
const title = document.querySelector(".card-content h5");
const artist = document.querySelector(".artist");
const audio = document.querySelector("audio");

const data = {

  cover: "https://1.bp.blogspot.com/-TGdVG07kU6s/YUFq5Toxe9I/AAAAAAAABFY/-X_xXV09DkcTfBPs2C7Oi7x7mIDuG5BAwCLcBGAsYHQ/s0/rauland.jpg",
  file: "https://stm1.srvif.com:6672/;?1614959595633"
};

cover.style.background = `url('${data.cover}') no-repeat center center / cover`;
title.innerText = data.title;
artist.innerText = data.artist;
audio.src = data.file;
