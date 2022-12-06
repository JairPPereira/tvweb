function uvolnitDM(poradi) {        
  document.getElementById("valDM" + poradi).value = document.getElementById("desMista" + poradi).value;
  document.getElementById("desMista" + poradi).value = "";
}

function zaplnitDM(poradi) {        
  if (document.getElementById("desMista" + poradi).value == "") {
    document.getElementById("desMista" + poradi).value = document.getElementById("valDM" + poradi).value;
  } else {
    var cislo = document.getElementById("desMista" + poradi).value;
    if (isNaN(cislo) == true) {
      cislo = 0;
    } else {
      cislo = Math.abs(Math.round(eval(cislo)));
    }
    document.getElementById("desMista" + poradi).value = document.getElementById("valDM" + poradi).value = cislo;
  }     
}

// POSTUP VYPOCTU - velikost iframe
function getDocHeight(doc) {
    doc = doc || document;
    var body = doc.body, html = doc.documentElement;
    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    return height;
}
function VysRam() {
    var ifrm = document.getElementById("latex");
    var doc = postup.contentDocument ? postup.contentDocument : ifrm.contentWindow.document;
    ifrm.style.visibility = "hidden";
    ifrm.style.height = "10px"; 
    ifrm.style.height = getDocHeight(doc) + 20 + "px";
    ifrm.style.visibility = "visible";
}
