function popUp(URL, ancho, alto) {
    window.open(URL, '_blank', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=' + ancho + ',height=' + alto);
}

function popUpscroll(URL, ancho, alto) {
    window.open(URL, '_blank', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=' + ancho + ',height=' + alto);
}


var mi_array = null;
var globalhuso = null;
var globalformato = null;
function guardaHorario() {
    mi_array = new Array();


    var ie = (document.all) ? true : false;
    var elements = (ie) ? document.all : document.getElementsByTagName('span');
    for (i = 0; i < elements.length; i++) {
        if (elements[i].className == 't') {
            var a = elements[i].innerHTML;
            var b = toDate(a, "h:m");
            mi_array[i] = b;
        }
    }
    var hoy = new Date();
    globalhuso = hoy.getTimezoneOffset() * (-1);

    var formato = formatoRegion(globalhuso);


    horaHuso(hoy.getTimezoneOffset() * (-1), formato);


    actualizaRadioFormato(formato);
}


function actualizaRadioFormato(formato) {
    var ie = (document.all) ? true : false;
    var radios = (ie) ? document.all : document.getElementsByTagName('input');

    for (i = 0; i < radios.length; i++) {
        if (radios[i].name == 'formato') {
            if (radios[i].value == formato) {
                radios[i].checked = true;
            }
        }
    }
}


function formatoRegion(huso) {
    var formato = "24H";
    if ((huso == 600) || (huso == 570) || (huso == -300) || (huso == -420) || (huso == -480) || (huso == -540) || (huso == -600) || (huso == -660)) {
        formato = "AMPM";
    }
    return formato;
}
function horaHuso(huso, formato) {
    if (globalhuso != huso) {
        globalhuso = huso;
        formato = formatoRegion(huso);
        actualizaRadioFormato(formato);
    }
    globalformato = formato;

    var ie = (document.all) ? true : false;
    var elements = (ie) ? document.all : document.getElementsByTagName('span');
    for (i = 0; i < elements.length; i++) {
        if (elements[i].className == 't') {
            var b = new Date(mi_array[i]);

            b.setMinutes(b.getMinutes() - (120 - huso));
            if (formato == "AMPM") {
                elements[i].innerHTML = formatoAMPM(b);
            } else {
                elements[i].innerHTML = formato24h(b);
            }
        } else if (elements[i].className == 'husohorario') {
            var mistring = huso / 60;
            mistring = '' + huso / 60;
            var mas = '\+';
            if (mistring.match(/\-/)) {
                mas = ''
            }
            elements[i].innerHTML = 'UTC/GMT ' + mas + mistring;
        }
    }
}
function toDate(dStr, format) {
    var now = new Date();
    if (format == "h:m") {
        now.setHours(dStr.substr(0, dStr.indexOf(":")));
        now.setMinutes(dStr.substr(dStr.indexOf(":") + 1));
        now.setSeconds(0);
        return now;
    }
    return "Invalid Format";
}

function formatoAMPM(dia) {
    var now = dia;
    var hour = now.getHours();
    var minute = now.getMinutes();
    var ap = "am";
    if (hour > 11) {
        ap = "pm";
    }
    if (hour > 12) {
        hour = hour - 12;
    }
    if (hour == 0) {
        hour = 12;
    }
    if (hour < 10) {
        hour = "" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    var timeString = hour + ':' + minute + "" + ap;
    return timeString;
}

function formato24h(dia) {
    var hours = dia.getHours()
    var minutes = dia.getMinutes()
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    timeString = hours + ":" + minutes;

    return timeString;
}

var fecha = new Date();
var husodos = fecha.getTimezoneOffset();
var husotres = husodos * (-1000) * 60;
function tS() {
    x = new Date(tN().getUTCFullYear(),tN().getUTCMonth(),tN().getUTCDate(),tN().getUTCHours(),tN().getUTCMinutes(),tN().getUTCSeconds());
    x.setTime(x.getTime() + husotres);
    return x;
}
function tN() {
    return new Date();
}
function lZ(x) {
    return (x > 9) ? x : '0' + x;
}
function tH(x) {
    if (x == 0) {
        x = 12;
    }
    return (x > 12) ? x -= 12 : x;
}
function dT() {
    document.getElementById('tP').innerHTML = eval(oT);
    setTimeout('dT()', 1000);
}
function aP(x) {
    return (x > 11) ? 'pm' : 'am';
}

if ((husodos == '-600') || (husodos == '-570') || (husodos == 300) || (husodos == 420) || (husodos == 480) || (husodos == 540) || (husodos == 600) || (husodos == 660)) {
    var oT = "tH(tS().getHours())+':'+lZ(tS().getMinutes())+':'+lZ(tS().getSeconds())+aP(tS().getHours())";
} else {
    var oT = "lZ(tS().getHours())+':'+lZ(tS().getMinutes())+':'+lZ(tS().getSeconds())";
}

var table = function() {
    function sorter(n) {
        this.n = n;
        this.t;
        this.b;
        this.r;
        this.d;
        this.p;
        this.w;
        this.a = [];
        this.l = 0
    }
    sorter.prototype.init = function(t, f) {
        this.t = document.getElementById(t);
        this.b = this.t.getElementsByTagName('tbody')[0];
        this.r = this.b.rows;
        var l = this.r.length;
        for (var i = 0; i < l; i++) {
            if (i == 0) {
                var c = this.r[i].cells;
                this.w = c.length;
                for (var x = 0; x < this.w; x++) {
                    if (c[x].className != 'nosort') {
                        c[x].className = 'head';
                        c[x].onclick = new Function(this.n + '.work(this.cellIndex)')
                    }
                }
            } else {
                this.a[i - 1] = {};
                this.l++;
            }
        }
        if (f != null) {
            var a = new Function(this.n + '.work(' + f + ')');
            a()
        }
    }
    sorter.prototype.work = function(y) {
        this.b = this.t.getElementsByTagName('tbody')[0];
        this.r = this.b.rows;
        var x = this.r[0].cells[y], i;
        for (i = 0; i < this.l; i++) {
            this.a[i].o = i + 1;
            var v = this.r[i + 1].cells[y].firstChild;
            this.a[i].value = (v != null) ? v.nodeValue : ''
        }
        for (i = 0; i < this.w; i++) {
            var c = this.r[0].cells[i];
            if (c.className != 'nosort') {
                c.className = 'head'
            }
        }
        if (this.p == y) {
            this.a.reverse();
            x.className = (this.d) ? 'asc' : 'desc';
            this.d = (this.d) ? false : true
        } else {
            this.p = y;
            this.a.sort(compare);
            x.className = 'asc';
            this.d = false
        }
        var n = document.createElement('tbody');
        n.appendChild(this.r[0]);
        for (i = 0; i < this.l; i++) {
            var r = this.r[this.a[i].o - 1].cloneNode(true);
            n.appendChild(r);
            r.className = (i % 2 == 0) ? 'even' : 'odd'
        }
        this.t.replaceChild(n, this.b)
    }
    function compare(f, c) {
        f = f.value,
        c = c.value;
        var i = parseFloat(f.replace(/(\$|\,)/g, ''))
          , n = parseFloat(c.replace(/(\$|\,)/g, ''));
        if (!isNaN(i) && !isNaN(n)) {
            f = i,
            c = n
        }
        return (f < c ? 1 : (f > c ? -1 : 0))
    }
    return {
        sorter: sorter
    }
}();