window.onload = linkAudio;
var mouseDownEvent;
var vibranceMode = false;
var strobeMode = true;
var inverseMode = false;
var colourShift = true;
var increment = true;
var pulseSpacing = 20;
var pulse = 1;
var pulseMode = false;
var visualizerElement;
var foregroundElement;
var settingsFXElement;
var audioTag;
var sredHex = "05";
var sgrnHex = "10";
var sbluHex = "15";
var oredHex = "33";
var ogrnHex = "aa";
var obluHex = "ff";
var audioData;
var audioDataBackup;
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var source1;
var source2;
var gainNode;
var analyser = audioCtx.createAnalyser();
analyser.fftSize = 2048;
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);
var HEIGHT;
var WIDTH;
var barHeight = 2;
var barWidth = 5;
var barSpacing = 1;
var bleed = 10;
var fgColour = "33aaff";
var bgColour = "051015";
var barSize = 55;
var activeBufferLength = bufferLength / 0.666;
var radio = getUrlVars()["src"];
analyser.getByteTimeDomainData(dataArray);
var fps;
var lastFrame = new Date();
var lastFrameFrame = lastFrame;
var title = 'JP';
var radioName = 'DIÁRIO FM';
var host = "https://hts02.kshost.com.br:8856/live";

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
    // From http://papermashup.com/read-url-get-variables-withjavascript/
}

function checkUrl() {
    if(radio){
        document.querySelector("source").setAttribute("src",radio);
        document.getElementById("Stream").load();
        document.getElementById("Stream").play();
        var split = radio.split(".com")[0].split(".");
        radioName = split[split.length-1];
        radioName = radioName[0].toUpperCase() + radioName.slice(1);
    }
}

function init() {
    checkUrl();
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    canvas.height = HEIGHT;
    canvas.width = WIDTH;
    for(var i = 0; i < WIDTH / 55; i++) {
        $("#bars").append("<div class='bar'></div>");
        $("#bars-blur").append("<div class='bar'></div>");
    }
    visualizerElement = document.getElementById("visualizer");
    foregroundElement = document.getElementById("foreground");
    settingsFXElement = document.getElementById("settings-fx-wrapper");
    visualizerElement.setAttribute("style","background:#"+bgColour);
    sredHex = parseInt(bgColour[0]+bgColour[1], 16);
    sgrnHex = parseInt(bgColour[2]+bgColour[3], 16);
    sbluHex = parseInt(bgColour[4]+bgColour[5], 16);
    oredHex = parseInt(fgColour[0]+fgColour[1], 16);
    ogrnHex = parseInt(fgColour[2]+fgColour[3], 16);
    obluHex = parseInt(fgColour[4]+fgColour[5], 16);
    setVol(0.5);
    anim();
}

function GetInfo() {
    var element = document.getElementById("Stream");
}

$(window).resize(function() {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    canvas.height = HEIGHT;
    canvas.width = WIDTH;
});

function SettingsToggle() {
    if(document.getElementById("settings").style.left === "-230px" || !document.getElementById("settings").style.left) {
        document.getElementById("settings").style.left = "0px";
        document.getElementById("settings-toggle").style.margin = "0px";
        document.getElementById("settings-toggle").innerHTML = "<";
    } else {
        document.getElementById("settings").style.left = "-230px";
        document.getElementById("settings-toggle").style.margin = "0px -60px 0px 0px";
        document.getElementById("settings-toggle").innerHTML = ">";
    }
}

function NewSource() {
    radio = document.getElementById("srInput").value;
    document.querySelector("source").setAttribute("src", radio);
    document.getElementById("Stream").load();
    document.getElementById("Stream").play();
    window.history.pushState("Radio Visualizer", "Canvas Web Audio API Music Visualizer", window.location.href.split("?")[0] + "?src=" + radio);
    var split = radio.split(".com")[0].split(".");
    radioName = split[split.length - 1];
    radioName = radioName[0].toUpperCase() + radioName.slice(1);
}

function NewBGColour() {
    var input = document.getElementById("bgInput").value;
    input = input.replace("#", "");
    if(input.length === 6 ){
        bgColour = input;
        $("svg").css({
            "fill": "#" + bgColour,
            "stroke": "#" + fgColour
        });

        visualizerElement.setAttribute("style", "background:#" + bgColour);
    }
    else if (parseInt(input) !== "NaN" && input.legnth < 4) {
        bgColour = parseInt(input, 16).toString(16);
        $("svg").css({
            "fill": "#" + bgColour,
            "stroke": "#" + fgColour
        });
        visualizerElement.setAttribute("style", "background:#" + bgColour);
    }
    else{
        alert("Please enter decimal or hex code");
    }
    oredHex = parseInt(fgColour[0] + fgColour[1], 16);
    ogrnHex = parseInt(fgColour[2] + fgColour[3], 16);
    obluHex = parseInt(fgColour[4] + fgColour[5], 16);
}

function NewFGColour() {
    var input = document.getElementById("fgInput").value;
    input = input.replace("#", "");
    if(input.length === 6) {
        fgColour = input;
        if(parseInt(fgColour[0]) < 1 && parseInt(fgColour[2]) < 1 && parseInt(fgColour[4]) < 1){
            document.body.style.color = "#ffffff";
            $('input').css('color', '#ffffff');
        } else {
            document.body.style.color = "#" + fgColour;
            $('input').css('color','#' + fgColour);
            $("#current-volume").css({
                "fill": "#" + bgColour
            });
        }
    } else if (parseInt(input) !== "NaN" && input.legnth < 4) {
        fgColour = parseInt(input, 16).toString(16);
        document.body.style.color = "#" + fgColour;
        $('input').css('color','#' + fgColour);
    } else {
        alert("Please enter decimal or hex code");
    }

    sredHex = parseInt(bgColour[0]+bgColour[1], 16);
    sgrnHex = parseInt(bgColour[2]+bgColour[3], 16);
    sbluHex = parseInt(bgColour[4]+bgColour[5], 16);
}

function NewBleedQuality() {
    bleed = parseInt(document.getElementById("bqInput").value);
}

function NewBarHeight() {
    barHeight = 2 - document.getElementById("bhInput").value;
}

function NewBarWidth() {
    barWidth = parseInt(document.getElementById("bwInput").value);
}

function NewBarSpacing() {
    barSpacing = parseInt(document.getElementById("bsInput").value);
}

function anim() {
    pulse = 1;
    drawVisual = requestAnimationFrame(anim);
    analyser.getByteFrequencyData(dataArray);
    var mean = 0;
    canvasCtx.fillStyle = "#3af";
    canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
    for (var i = 0; i < bufferLength * 0.666; i++) {
        var v = dataArray[i] / 128.0;
        var h = v * HEIGHT/2;
        mean += h;
        var sred = sredHex;
        var sgrn = sgrnHex;
        var sblu = sbluHex;
        var ored = oredHex;
        var ogrn = ogrnHex;
        var oblu = obluHex;
        var tred  = ored / 2;
        var tgrn  = ogrn / 2;
        var tblu  = oblu / 2;
        var amp = 0;
        var loud = Math.abs(dataArray[i]);
        var cred = sred;
        var cgrn = sgrn;
        var cblu = sblu;

        if (pulseMode === true) {
            opacity = (1 / pulseSpacing) * pulse;
        } else {
            opacity = 1;
        }

        if (loud > amp) {
          amp = loud;
        }
        if (vibranceMode === true) {
            document.body.setAttribute("style", "-webkit-filter:brightness(" + (amp/256 + 1) + ")");
        } else {
            document.body.removeAttribute("style");
        }

        var redinc = Math.floor((tred - sred) / bleed);
        var grninc = Math.floor((tgrn - sgrn) / bleed);
        var bluinc = Math.floor((tblu - sblu) / bleed);

        for (var o = 0; o < bleed; o++) {
            if (o < bleed - 1) {
                cred += redinc;
                cgrn += grninc;
                cblu += bluinc;

                red = cred;
                green = cgrn;
                blue = cblu;
                canvasCtx.fillStyle = "rgba(" + red + "," + green + "," + blue + "," + opacity + ")";
                canvasCtx.fillRect(i * (barWidth + barSpacing), HEIGHT/2 - ((2-(o/bleed))*h/(2*barHeight)), barWidth, (((2-(o/bleed))*h)/barHeight));
            } else {
                red = ored;
                green = ogrn;
                blue = oblu;
                canvasCtx.fillStyle = "rgba(" + red + "," + green + "," + blue + "," + opacity + ")";
                canvasCtx.fillRect(i * (barWidth + barSpacing), HEIGHT/2 - h/(barHeight * 2), barWidth, h/barHeight);
            }
        }

        if (increment === true) {
            pulse++;
        } else {
            pulse--;
        }

        if (pulse > pulseSpacing -1) {
            increment = false;
        } else if (pulse < 1) {
            increment = true;
        }
        mean = 0;
    }

    var total = Math.floor(audioTag.currentTime);
    var seconds = Math.floor(total % 60).toString();
    var minutes = Math.floor(total/60 % 60).toString();
    var hours = Math.floor(total / 3600).toString();
    var ouput;

    if (hours.length === 1) {
        hours = "0" + hours;
    }
    if (minutes.length === 1) {
        minutes = "0" + minutes;
    }

    if (seconds.length === 1) {
        seconds = "0" + seconds;
    }

    canvasCtx.strokeStyle = "#" + fgColour;
    canvasCtx.lineWidth = 3;
    canvasCtx.font = "30px Play";
    canvasCtx.strokeText(hours + ":" + minutes + ":" + seconds, 10, HEIGHT / 2 + 30);
    canvasCtx.font = "60px Play";
    canvasCtx.strokeText(radioName,10,HEIGHT/2);
    canvasCtx.fillStyle = "#"+bgColour;
    canvasCtx.font = "30px Play";
    canvasCtx.fillText(hours + ":" + minutes + ":" + seconds, 10, HEIGHT / 2 + 30);
    canvasCtx.font = "60px Play";
    canvasCtx.fillText(radioName, 10, HEIGHT / 2);

    var now = new Date();
    if (now - lastFrameFrame > 100) {
        fps = Math.floor(1000 / (now - lastFrame));
        lastFrameFrame = now;
    }
    canvasCtx.font = "30px Play";
    canvasCtx.strokeStyle = "#" + fgColour;
    canvasCtx.strokeText(title, WIDTH / 2 - 100, HEIGHT / 2 + 10);
    canvasCtx.fillText(title, WIDTH / 2 - 100, HEIGHT / 2 + 10);
    lastFrame = now;
}

function linkAudio() {
    gainNode = audioCtx.createGain();
    analyser.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    canvas = document.getElementById("visualizer");
    audioTag = document.querySelector('audio');
    canvasCtx = canvas.getContext("2d");
    source1 = audioCtx.createMediaElementSource(audioTag);
    source1.connect(analyser);
    init();
}

function start() {
    document.getElementById("Stream").play();
}

function pause() {
    document.getElementById("Stream").pause();
}

$('#volume-bar').mousedown(function () {
    setVol($('#volume-bar').val());
    mouseDownEvent = setInterval(function () {
        setVol($('#volume-bar').val());
    }, 100);
});
$('#volume-bar').mouseup(function () {
    clearInterval(mouseDownEvent);
});
$('#volume-bar').mouseout(function () {
    clearInterval(mouseDownEvent);
});

function setVol(value) {
    gainNode.gain.value = value;
    document.getElementById("current-volume").style.width = (119 * value) + "px";
}

$(".filter-toggle").click(function() {
    firstChild = this.children[0];
    secondChild = this.children[1];

    if(firstChild.hasAttribute("style")){
        firstChild.removeAttribute("style");
        secondChild.setAttribute("style", "opacity:0.2;");
    } else {
        firstChild.setAttribute("style", "opacity:0.2;");
        secondChild.removeAttribute("style");
    }
});

function toggleFX(string) {
    if(string === "vibrance") {
        vibranceMode = !vibranceMode;
    } else if (string === "strobe") {
        strobeMode = !strobeMode;
    } else if (string === "inverse") {
        inverseMode = !inverseMode;
    } else if (string === "colourShift") {
        if (!colourShift) {
            colourShift = setInterval(function() {
                $("#body-fx-wrapper").css("-webkit-filter", "hue-rotate(" + (Math.random() * 360) + "deg)");
            }, 1000);
        } else {
            clearInterval(colourShift);
            colourShift = false;
        }
    } else if (string === "pulse") {
        pulseMode = !pulseMode;
    }
}

(function worker() {
    $.ajax({
        url: host + '/status-json.xsl',
        success: function(data) {
            artist = data.icestats.source.artist;
            title = artist + ' - ' + data.icestats.source.title;
            document.title = title;
        },
        complete: function() {
            // Schedule the next request when the current one's complete
            setTimeout(worker, 3000);
        }
    });

})();
