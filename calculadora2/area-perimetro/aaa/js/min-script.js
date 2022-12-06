window.onload = function() {
  // vypis hodnoceni webu
  var limit = Math.round(document.getElementById("hodnoceni").innerHTML.replace(",","."));
  for (i=4; i>=limit; i--) {
    document.getElementById("star" + i).innerHTML = "&#9734;";
  }
  // zobrazeni mobilni reklamy
  if (document.documentElement.clientWidth < 1200) {
    setTimeout(AddMN1, 10000);
  }
  // lista cookies
  if (localStorage.getItem("vypocitejto") == null) {
    document.getElementById("cookie").style.display = "block";
  }
} 

// zobrazovani mobilni reklamy
function AddMN1() {
  document.getElementById("reklMN0").style.bottom = "0";
}

function CloseMN() {
  document.getElementById("reklMN0").classList.add("none"); 
} 

// rozbalovani menu
function Rozbal(koef) {
  if(document.getElementById("menu"+koef).classList.contains("rozbal")) {
    document.getElementById("menu"+koef).classList.remove("rozbal");
    if(koef == 0) {
      document.getElementById("pozmenu0").classList.remove("rozbal");    
      document.getElementById("ovlmenu0").src = "/aaa/img/menu0.svg";      
    } else {
      document.getElementById("ovlmenu"+koef).innerHTML="&#9776;";
    }
  } else {
    document.getElementById("menu"+koef).classList.add("rozbal");
    if(koef==0) {
      document.getElementById("pozmenu0").classList.add("rozbal");  
      document.getElementById("ovlmenu0").src = "/aaa/img/menu1.svg";    
    } else {
      document.getElementById("ovlmenu"+koef).innerHTML="&#10005;";
    }
  }
}

function Tlacmenu(poradi) {
  if (poradi == 0) {
    document.getElementById("ovlmenu0").src = document.getElementById("ovlmenu0").src.replace(".svg","a.svg");
  } else {
    document.getElementById("ovlmenu0").src = document.getElementById("ovlmenu0").src.replace("a.svg",".svg");
  }
}
        
// hodnoceni     
function Hover(koef) {
  for (i=0; i<koef; i++) {
    document.getElementById("star" + i).classList.add("hover");
    document.getElementById("star" + i).innerHTML = "&#9733;";
  } 
}

function Unhover() {  
  var koef = Math.round(eval(document.getElementById("hodnoceni").innerHTML.replace(",",".")));   
  for (i=0; i<5; i++) {
    document.getElementById("star" + i).classList.remove("hover");
    if (i >= koef) {
      document.getElementById("star" + i).innerHTML = "&#9734;";
    }
  } 
} 

function Hlas(koef) {
  var prenos = document.getElementById("prenos").value.split(",");
  if (localStorage.getItem("vypocitejto_" + prenos[0] + prenos[1]) == null) {
    localStorage.setItem("vypocitejto_" + prenos[0] + prenos[1], koef); 
    Vypiska(((eval(prenos[2]) + koef)/(eval(prenos[3]) + 1)).toFixed(1), eval(prenos[3]) + 1, prenos[0]);
 
    var request = new XMLHttpRequest();
    request.open("POST", "/aaa/php/rating.php");
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
    request.send("jazyk=" + prenos[0] + "&stranka=" + prenos[1] + "&hodnoceni=" + koef);   
  }
}

function Vypiska(hod,hlas,jazyk) {
  if ((jazyk != "en")&&(jazyk != "kr")) {
    hod = hod.replace(".", ",");
  }
  document.getElementById("hodnoceni").innerHTML = hod; 
  document.getElementById("hlasy").innerHTML = hlas; 
}
               
// souhlas cookies
function Cookie() {
  localStorage.setItem("vypocitejto", "ok");    
  document.getElementById("cookie").style.display = "none";
}