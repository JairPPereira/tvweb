function visualizeStream(stream) {
    let canvas = document.getElementById('canvas');
    let cx = canvas.getContext('2d');
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    var audioCtx = new(window.AudioContext || window.webkitAudioContext)();
    var analyser = audioCtx.createAnalyser();
    //analyser.maxDecibels = -90;
    //analyser.minDecibels = -110;
  
    let source = audioCtx.createMediaStreamSource(stream);
    source.connect(analyser);
  
    analyser.fftSize = 4096;
    let bufferLength = analyser.frequencyBinCount;
    let dataArray = new Uint8Array(bufferLength);
  
    cx.clearRect(0,0,WIDTH,HEIGHT);
  
    function draw() {
  
      let drawVisual = requestAnimationFrame(draw);
      analyser.getByteFrequencyData(dataArray);
  
      cx.fillStyle = 'rgb(0,0,0)';
      cx.fillRect(0,0,WIDTH,HEIGHT);
  
      var barWidth = (WIDTH / bufferLength);
      var barHeight;
      var x = 0;
  
      //let colormap = interpolate(['#ff0000', '#ffff00']);
  
      for(var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
  
        let intensity = 100*barHeight / 
          (analyser.maxDecibels - analyser.minDecibels);
  
        cx.fillStyle = 
          `hsl(${i*260/bufferLength},${intensity}%,50%)`;
          
          /*colormap(
          barHeight / 2 / (analyser.maxDecibels - analyser.minDecibels)
        );
        */
  
        cx.fillRect(x,HEIGHT-barHeight*2,barWidth - 1,barHeight*2);
  
        x += barWidth;
      }
      
  
    }
  
    draw();
  
  }