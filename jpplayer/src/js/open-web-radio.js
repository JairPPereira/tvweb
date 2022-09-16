$(document).ready(function(){    
	
	// jPlayer stuff
	
	var myPlayer = $("#jquery_jplayer_1");   
	var station = 0;   
	
	var stations = [
		{mp3: "https://ice01.kshost.com.br:8000/live",
		oga: "https://ice01.kshost.com.br:8000/live"},
		{mp3: "https://hts02.kshost.com.br:8856/live",
		oga: "https://hts02.kshost.com.br:8856/live"}, 
		{mp3: "https://stm1.srvif.com:6672/stream",
		oga: "https://stm1.srvif.com:6672/stream"},
		{mp3: "http://177.105.192.70:9750/liberalfm.mp3",
		oga: "http://177.105.192.70:9750/liberalfm.mp3"},
		{mp3: "http://mp3-a0-128.as34763.net:80/;stream/1",
		oga: "http://ogg2.as34763.net/a0160.ogg"}                      
	];

	myPlayer.jPlayer({
		ready: function () {
      		$(this).jPlayer("setMedia", {
				mp3: stations[station].mp3, oga: stations[station].oga
      		});
    	},   
		solution: "html, flash",
    	swfPath: "js",
    	supplied: "mp3, oga"
        //errorAlerts: "true",
		//warningAlerts: "true"
  	}); 
   
	function getArcPc(pageX, pageY, elem) { 
		var	self	= elem,
			offset	= self.offset(),
			x	= pageX - offset.left - self.width()/2,
			y	= pageY - offset.top - self.height()/2,
			a	= Math.atan2(y,x);  
			
		if (a > -1*Math.PI && a < -0.5*Math.PI) {
		   a = 2*Math.PI+a; 
		} 

		// a is now value between -0.5PI and 1.5PI 
		// ready to be normalized and applied   			
		
		var pc = (a + Math.PI/2) / 2*Math.PI * 10;   
		   
		return pc;
	} 
	      
	var zoneSize = 100/stations.length;  
   
	
	function spinTuning(event) {
		var self = $('#tuning');
		var pc = getArcPc(event.position.x,event.position.y,self);       
		var degs = pc * 3.6+"deg"; 
		self.css({rotate: degs}); 
		
		// Check for station change
		
		for (i=0; i<stations.length; i++)
		{
			if (pc > i*zoneSize && pc <= (i+1)*zoneSize && i != station) {
			   	// Change stations  
			   	//console.log('station = '+i);
				station = i;  
				myPlayer.jPlayer("setMedia", {
					mp3: stations[station].mp3, oga: stations[station].oga
		      	});
		           
				// delay before playing or Firefox will stall for 15 seconds
		
				setTimeout(function() {myPlayer.jPlayer('play');},1500);

			}
		}
		
		return(pc);
	}    
	
	function startChannel(){
		
	}
	      
	var switchedOn = false;
	var volume = 0;    
	
	function spinVolume(event) {
		var self = $('#volume');  
	   
		var pc = getArcPc(event.position.x,event.position.y,self);     
		
		// may be a better way of grabbing the degrees
        //newVolPos = $('#volume').data('transform').rotate * 180 / Math.PI;  
		
		var degs = pc * 3.6+"deg";   
		//var cssDegs = degs    
		 
		/*if ((pc > 75 && pc < 100) || (pc > 0 && pc < 25)) {
			 self.css({rotate: degs});   
		} */ 
		
		
		
		if (pc >= 50 && pc < 75) {
			degs = '270deg';    
			if (switchedOn == true) {
				// stop the audio stream and set the media ready for playing 

				myPlayer.jPlayer("setMedia", {
					mp3: stations[station].mp3, oga: stations[station].oga
		      	});    
				volume = 0;      
				//console.log('off');
			}
			switchedOn = false;   
			
		}
		else { 
			if (switchedOn == false) {
				// play the audio stream
				myPlayer.jPlayer("play");   
			}
			switchedOn = true;        
			if (pc >= 75) {
			   volume = (pc - 75) * 2; 
			} 
			
			if (pc <= 25) {
				volume = (pc * 2) + 50;
			}        
			
			myPlayer.jPlayer("volume",volume/100);
			
			//console.log(pc);   
			//console.log("vol="+volume);
		}
		
		if (pc > 25 && pc < 50) degs = '90deg';  
        self.css({rotate: degs});   

		//console.log(pc);

		return(pc);
	}
	
	
	$('#tuning').grab({
		onstart: function(){     
			// dragging = true;
		}, onmove: function(event){ 
			var pc = spinTuning(event); 
			$('#dialer').css('left',((pc*8.8)+60)+'px');     
		}, onfinish: function(event){
           // do your funky thang here ...
		}
	});   
	
	$('#volume').grab({
		onstart: function(){     
			//dragging = true;
		}, onmove: function(event){   
			var pc = spinVolume(event);   
			//console.log(pc);
		}
	}); 
	
	 
});