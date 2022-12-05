// Variáveis globais
var linkTocando = '';
var linkAudio = '';

// verifica a radio atual
if(dataLayer[1]['radio'] == 'aovivo') {
    linkTocando = 'https://www.radiorauland.com.br/'
    linkAudio = 'https://stm1.srvif.com:6672/streamhttps://hts02.kshost.com.br:8856/live';

} else if(dataLayer[1]['radio'] == 'sertanejo') {
    linkTocando = 'https://api.metropolitanafm.com.br/home/tocando/sertanejo'
    linkAudio = 'https://ice.fabricahost.com.br/metrospsertanejo';
}  else if(dataLayer[1]['radio'] == 'pop') {
    linkTocando = 'https://api.metropolitanafm.com.br/home/tocando/pop'
    linkAudio = 'https://ice.fabricahost.com.br/metrosppop';
}  else if(dataLayer[1]['radio'] == 'funk') {
    linkTocando = 'https://api.metropolitanafm.com.br/home/tocando/funk'
    linkAudio = 'https://ice.fabricahost.com.br/metropoitanaspfunk';
}  else if(dataLayer[1]['radio'] == 'mpb') {
    linkTocando = 'https://api.metropolitanafm.com.br/home/tocando/funk'
    linkAudio = 'https://ice.fabricahost.com.br/metropolitanampb';
}  else if(dataLayer[1]['radio'] == 'light') {
    linkTocando = 'https://api.metropolitanafm.com.br/home/tocando/light'
    linkAudio = 'https://stm1.srvif.com:6672/streamhttps://hts02.kshost.com.br:8856/live';
}

// Atribui o link ao player
var audioPlayer = document.getElementById('audio-player');
audioPlayer.setAttribute('src', linkAudio);

/**
 * Função para pegar imprimir os dados da música no site
 */

// Variáveis para pegar músicas
var capa = document.getElementById('cover');
var artista = document.getElementById('artista');
var musica = document.getElementById('musica');
var id = '';
var id_radio = '';
var voted = '';

// Função para puxar os dados das músicas
function puxaMusica() {
    console.log('called puxamusica')
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
           if (xmlhttp.status == 200) {
                var obj = JSON.parse(xmlhttp.responseText)
                capa.style.background = `url(${obj.capa})`;
                artista.innerText = obj.artista;
                musica.innerText = obj.musica;
                id = obj.id;
                id_radio = obj.radio;
                voted = obj.voted;
                // document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
           }
           else if (xmlhttp.status == 400) {
              console.log('There was an error 400');
           }
           else {
               console.log('something else other than 200 was returned');
           }
        }
    };

    xmlhttp.open("GET", linkTocando, true);
    xmlhttp.send();

}

// Função para tocar
var btn_player = document.getElementById('btn-player');
var audio = document.getElementById('audio-player');
var tocando = false;

function toca() {
    console.log('toca() chamada');
    var playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.then(function() {
            tocando = true;
            btn_player.innerHTML = '<i class="fas fa-pause"></i>';
            btn_player.style.paddingLeft = "0";
        }).catch(function(error) {
            // O player automático falhou, vai ter que começar manual
            btn_player.innerHTML = '<i class="fas fa-play"></i>';
            btn_player.style.paddingLeft = "5px";
        });
    }
}

/**
 * Função para votação
 */
var btn_upvote = document.getElementById('btn-upvote');
var btn_donwvote = document.getElementById('btn-downvote');

// função para votar
function votacao(id, voto, id_radio, voted) {
    if(voted == "false") {
        alert(`Obrigado pelo seu voto!`);
    } else {
        var date = new Date();
        var data_hoje = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
        if(localStorage.getItem('voto') === `${id}-${data_hoje}`) {
            alert('Você já votou nessa música hoje. Você pode votar nela novamente amanhã');
        } else {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
                    if (xmlhttp.status == 200) {
                            voted = true;
                            localStorage.setItem('voto', `${id}-${data_hoje}`);
                            alert(`Obrigado pelo seu voto!`);
                    } else if (xmlhttp.status == 400) {
                        console.log('erro 400');
                    } else {
                        console.log('something else other than 200 was returned');
                    }
                }
            };

            xmlhttp.open("POST", `https://api.metropolitanafm.com.br/home/registervote/5bc9ebb419acf/${id}/${voto}/${id_radio}`, true);
            xmlhttp.send();
        }
    }
}


// execução quando a página é carregada
document.addEventListener("DOMContentLoaded", function(event) {
    toca()

    window.setInterval(puxaMusica, 30000);
    puxaMusica();

    // toca o audio pelo botão
    btn_player.addEventListener('click', function(){
        if(tocando === false) {
            btn_player.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            toca()
            console.log('ouvindo Metropolitana FM 98.5 YES!!!!!!!!!!!!!!2');
        } else {
            audio.pause();
            tocando = false;
            btn_player.innerHTML = '<i class="fas fa-play"></i>';
            btn_player.style.paddingLeft = "5px";
        }
    });

    // vota
    btn_upvote.addEventListener('click', () => votacao(id, 1, id_radio, voted));
    btn_donwvote.addEventListener('click', () => votacao(id, 2, id_radio, voted));
});