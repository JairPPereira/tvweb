
<script src="js/jquery-3.2.1.min.js"></script>
<script src="js/lunaradio-sincors.js"></script>

<style>
		html, body {
			margin:0;
			padding:0;
			/*overflow: hidden;*/
			width:100%;
			height:100%;
		}
		.fs-vid-background {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			z-index: 2;
		}
		.fs-vid-background video {
			object-fit: cover;
			width: 100%;
			height: 100%;
		}
		video {
			max-width: 100%;
		}
</style>

<div class="fs-vid-background">
<video autoplay="true" muted="true" loop="true">
<source src="https://qualitystreaming.000webhostapp.com/chica/chica.mp4" type="video/mp4">
</video>
</div>
<script src="js/jquery-3.2.1.min.js"></script> 
<script src="js/lunaradio-sincors.js"></script>
<div id="lunaradio" style="width:100%; height: 100%; position: absolute; left:0; top:0; z-index: 300;">
</div>	

<script>
  $("#lunaradio").lunaradio({
  userinterface: "big",
  backgroundcolor: "",
  fontcolor: "#00ffff",
  hightlightcolor: "#ff4b5c",
  fontname: "Anton",
  googlefont: "Anton&display=swap",
  fontratio: "0.4",
  radioname: ".::RADIO MAX::.", //nombre de radio
  scroll: "true",
  coverimage: "js/logo.jpg", //link o ruta de logo radio
  onlycoverimage: "false", //true para mostrar solo logo radio
  coverstyle: "animated",
  usevisualizer: "fake",
  visualizertype: "3",
  metadatatechnic: "",
  ownmetadataurl: "",
  usestreamcorsproxy: "false", //true o false
  corsproxy: "",
  streamurl: "https://stream.zenolive.com/2cgy8mzvsy8uv.aac",
  streamtype: "radiozeno", //shoutcast2, icecast2, radiozeno, radionomy, radiojar, radioco
  icecastmountpoint: "2cgy8mzvsy8uv/source",
  shoutcastpath: "",
  shoutcastid: "1",
  streamsuffix: "",
  radionomyid: "",
  radionomyapikey: "EAbrntwj",
  radiozenoid: "2cgy8mzvsy8uv",
  radiojarid: "",
  radiocoid: "",
  itunestoken: "1000lIPN",
  metadatainterval: "15000",
  volume: "100",
  debug: "false",
  });
</script>