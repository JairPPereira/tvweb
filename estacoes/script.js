var webradio = {
    player: function () {
        return document.getElementById("player");
    },
    play_station: function (url){
        document.getElementById("player").src = url;
    },
    load_channels: function (){
        var request = new XMLHttpRequest();
        request.onreadystatechange = function (){
            if (request.readyState == 4 && request.status == 200){
                var station_data = JSON.parse(request.responseText);
                for (var i=0;i<station_data.length;i++) {
                    var category = station_data[i];
                    var li = document.createElement("li");
                    li.textContent = category.name;
                    li.setAttribute("class", "category");
                    document.getElementById("channelList").appendChild(li);
                    for (var i1=0;i1<category.channels.length;i1++) {
                        var li = document.createElement("li");
                        li.textContent = category.channels[i1].name;
                        (function (url){li.addEventListener("click", function() {
                            webradio.play_station(url);
                        }, false)}(category.channels[i1].url));
                        li.setAttribute("class", "station");
                        document.getElementById("channelList").appendChild(li);
                    }
                    document.getElementById("channelList").appendChild(document.createElement("br"));
                }
            }
        }
        request.open("GET", "channels.json");
        request.send();
    },
    get_value: function (key) {
        if (window.localStorage[key] != undefined) {
            return window.localStorage[key];
        }
    },
    set_value: function (key, value) {
        window.localStorage[key] = value;
    }
};
