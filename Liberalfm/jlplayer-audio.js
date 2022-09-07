(function () {

    "use strict";

    function JlAudio(playerId) {

        const player = document.getElementById(playerId);
        const audio = player.querySelector('audio');

        const elements = {
            presentation: player.querySelector('.jlplayer-audio__presentation'),
        }

        const controls = {
            play: player.querySelector('.jlplayer-audio__play')
        }

        const progress = {
            buffer: player.querySelector('.jlplayer-audio__buffer'),
            played: player.querySelector('.jlplayer-audio__played'),
            range: elements.presentation.querySelector('input'),
        }

        let states = {
            dragging: false,
            played: false,
        }


        function handler(o, e, f, r, c) {
            let s = e.split(" "),
                l = s.length;
            for (let i = 0; i < l; i++) {
                o[r ? "removeEventListener" : "addEventListener"](s[i], f, c)
            }
        }

        function startDrag(evt) {
            states.dragging = evt.type == "mousedown";
        }

        function canPlay(evt) {
            handler(progress.range, 'mousedown mouseup mousemove', setSeeker)
            // handler(controls.play, 'click', () => {
            //     states.played = play()
            // });
        }

        function setSeeker(evt) {

            const clientX = String(evt.clientX) !== 'undefined' ? evt.clientX : evt.touches[0].clientX;
            const clientPosition = (clientX - progress.range.getBoundingClientRect().left) / elements.presentation.clientWidth;

            if (evt.type == 'mousedown') {

                if (states.played) {
                    play()
                }

                progress.played.style.width = (clientPosition * 100) + '%';
                return;
            }

            if (evt.type == 'mousemove') {
                if (states.dragging) {
                    progress.played.style.width = (clientPosition * 100) + '%';
                }
                return;
            }

            audio.currentTime = (progress.range.value * audio.duration) / 100;
            if (states.played) {
                play()
            }

        }

        function timeUpdate(evt) {

            const currentTime = {
                hours: Math.floor(evt.currentTarget.currentTime / 3600),
                minutes: Math.floor(evt.currentTarget.currentTime / 60),
                seconds: Math.floor(((evt.currentTarget.currentTime / 60) % 1) * 60)
            };

            const seekPercent = (evt.currentTarget.currentTime / evt.currentTarget.duration) * 100;

            if (!states.dragging) {
                progress.played.style.width = seekPercent + '%';
                progress.range.value = seekPercent;
            }

        }

        function bufferProgress(evt) {
            if (evt.currentTarget.duration > 0) {
                for (let i = 0; i < evt.currentTarget.buffered.length; i++) {
                    if (evt.currentTarget.buffered.start(evt.currentTarget.buffered.length - 1 - i) < evt.currentTarget.currentTime) {
                        progress.buffer.style.width = (evt.currentTarget.buffered.end(evt.currentTarget.buffered.length - 1 - i) / evt.currentTarget.duration) * 100 + "%";
                        break;
                    }
                }
            }
        }

        function play() {

            if (audio.played.length > 0) {

                if (audio.paused) {
                    audio.play();
                    player.classList.add('jlplayer-played');
                    return true;
                }

                audio.pause();
                player.classList.remove('jlplayer-played');
                return false;
            };

            audio.play();
            player.classList.add('jlplayer-played');
            return true;
        }

        handler(audio, 'canplay', canPlay)
        handler(audio, 'timeupdate', timeUpdate)
        handler(audio, 'progress', bufferProgress)

        if (audio.preload == 'none') {
            handler(controls.play, 'click', () => {
                states.played = play()
            });
        }

        handler(elements.presentation, 'mousedown', startDrag);
        handler(elements.presentation, 'mouseup', startDrag);
        handler(document, 'mouseup', startDrag);

    }

    JlAudio('jlaudio')

})();