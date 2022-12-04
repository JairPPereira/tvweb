// adblock   
setTimeout(function() { 
if (document.getElementById("adstest") == undefined) {
     var element = document.getElementById("zadost");
     element.style.display = "block";            
   }
}, 4000);
           

//zafixovani reklamaS > 1066px
window.onscroll = function () {
var sidebar = document.getElementById('reklS');
  sidebar.className = (
    document.documentElement.scrollTop + document.body.scrollTop > sidebar.parentNode.offsetTop
    && document.documentElement.clientHeight > sidebar.offsetHeight
  ) ? "fixed" : "";
}

//menu - rozbalovani
function Rozbal(element, trida) {
  if (element.className.match(trida)) {
    element.className = element.className.replace(trida, "");
  }
  else {
    element.className += " " + trida;
  }
}
//menu - zobrazeni pri scrollovani nahoru
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight){
        $('header').removeClass('navDown').addClass('navUp');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('navUp').addClass('navDown');
        }
    }   
    lastScrollTop = st;
}

//vyjizdeni menu   
function otevriMenu(){
 menuOff.style.display = "block"; 
 ulMenu.style.height = document.documentElement.clientHeight - 50 + "px"; 
} 
function zavriMenu(){
 menuOff.style.display = "none";  
}
   
  //cookies
	function readCookie(name) {
		var nameEQ = encodeURIComponent(name) + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) === ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
		}
   return null;
 	}
	$(document).ready(function() {
  	if (readCookie('cookies') == null) {
			$('.cookies').show();
		}
	});	
	$('.cookies button').click(function() {
		var date = new Date();
		date.setFullYear(date.getFullYear() + 10);
		document.cookie = 'cookies=1; path=/; expires=' + date.toGMTString();
		$('.cookies').hide();
	});     
