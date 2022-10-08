class App {}

App.prototype.$ = function(elem) {
    return document.querySelector(elem);
};

App.prototype.getData = async function(url) {
    // const api_url = `http://localhost/XVideos-PornHub-RedTube-API/src/?data=${url}`;
    const api_url = `https://appsdev.cyou/xv-ph-rt/api/?data=${url}`;

    let result = await fetch(api_url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
        })
        .then((response) => {
            return response.text();
        })
        .catch((error) => {
            console.error(error);
        });

    if (typeof result === 'string' && result !== '') {
        return JSON.parse(result);
    }

    return null;
};

App.prototype.createVideoPlayer = function(data) {
    const {
        id,
        sources,
        type,
        config
    } = data;

    const video = this.$(`#${id}`);

    Array.from(video.querySelectorAll('source')).map(source => source.remove());

    for (const key in sources) {
        const source = document.createElement('source');

        source.title = key;
        source.src = sources[key];
        source.type = type;

        video.appendChild(source);
    }

    return fluidPlayer(id, config);
};

App.prototype.setupVideoPlayers = function() {
    const config = {
        layoutControls: {
            fillToContainer: true,
            posterImage: this.data.thumb,
            loop: true,
            autoPlay: {
                waitInteraction: true,
            },
            timelinePreview: {
                file: this.data.thumbnails,
                type: 'VTT',
            },
            playPauseAnimation: true,
            controlBar: {
                autoHide: true,
            },
            menu: {
                loop: true,
            },
            fullscreen: {
                iosNative: true,
            },
        },
        storage: {
            shared: false,
        },
        hls: {
            overrideNative: true,
        },
        debug: true,
    };

    const players = [{
            id: 'hls-video',
            sources: this.data.hls,
            type: 'application/x-mpegURL',
            config: config,
        },
        {
            id: 'mp4-video',
            sources: this.data.mp4,
            type: 'video/mp4',
            config: config,
        },
    ];

    for (const data of players) {
        this.instancesVideoPlayers.push(this.createVideoPlayer(data));
    }
};

App.prototype.createDownloadView = function(title, link) {
    return `
        <div class="row valign-wrapper">
            <div class="col s2">
                <span>${title[0].toUpperCase() + title.slice(1)}</span>
            </div>
            <div class="col s7">
                <span class="download-link">${link}</span>
            </div>
            <div class="col s3 center-align">
                <a class="waves-effect waves-light btn" href="${link}" target="_blank"><i class="material-icons">download</i></a>
            </div>
        </div>
    `;
};

App.prototype.setDownloads = function() {
    for (const key in this.data) {
        if (typeof this.data[key] !== 'object') continue;

        for (const source in this.data[key]) {
            const link = this.data[key][source];

            if (link === '') continue;

            this.$(`#${key}-downloads`).innerHTML += this.createDownloadView(source, link);
        }
    }
};

App.prototype.clearDownloads = function() {
    this.$('#hls-downloads').innerHTML = '';
    this.$('#mp4-downloads').innerHTML = '';
};

App.prototype.loadVideo = async function(url) {
    if (url === '' || this.lock) {
        return;
    }

    this.lock = true;

    for await (const player of this.instancesVideoPlayers) {
        await player.destroy();
    }

    this.lock = false;

    this.instancesVideoPlayers.length = 0;

    if (window.fluidPlayerDebug !== undefined) {
        window.fluidPlayerDebug.length = 0;
    }

    M.toast({
        html: 'Loading...',
    }, {
        displayLength: 10 * 1000,
    });

    this.lock = true;
    this.data = await this.getData(url);
    this.lock = false;

    if (this.$('.toast')) {
        M.Toast.getInstance(this.$('.toast')).dismiss();
    }

    if (this.data === null) {
        M.toast({
            html: 'Error',
        }, {
            displayLength: 3 * 1000,
        });

        return;
    }

    this.setupVideoPlayers();
    this.clearDownloads();
    this.setDownloads();

    // CORS is present in the hls links on pornhub and redtube
    if (/(pornhub|redtube)/.test(url)) {
        setTimeout(() => {
            this.tabs.select('mp4-tab');

            M.toast({
                html: 'CORS is present in the hls links',
            }, {
                displayLength: 3 * 1000,
            });
        }, 100);
    }
};

App.prototype.init = function() {
    const sites = this.$('.sites');
    const search = this.$('#search-btn');
    const input = this.$('#url-input');
    const tabs = this.$('.tabs');
    const videoLinks = {
        xv: 'https://www.xvideos.com/video68062203/ela_tinha_idade_pra_ser_minha_filha',
        ph: 'https://www.pornhub.com/view_video.php?viewkey=ph6116a13a48187',
        rt: 'https://www.redtube.com/39697741',
    };
    const videoDefault = videoLinks.xv;

    this.hlsPlayer = null;
    this.mp4Player = null;

    this.tabs = M.Tabs.init(tabs);

    this.instancesVideoPlayers = [];
    this.lock = false;

    input.placeholder = videoDefault;
    input.value = videoDefault;

    this.loadVideo(videoDefault);

    input.addEventListener('keydown', async ({
        key
    }) => {
        if (key === 'Enter') {
            this.loadVideo(input.value);
        }
    });

    search.addEventListener('click', async () => {
        this.loadVideo(input.value);
    });

    sites.addEventListener('click', (e) => {
        if (e.target.nodeName === 'A') {
            const url = videoLinks[e.target.id];

            input.value = url;

            this.loadVideo(url);
        }
    });
};

const app = new App();
app.init();