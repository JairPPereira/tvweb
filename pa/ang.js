/** **********************************************  Ã‚ngulo Î±   ***********************************  **/  	
if (a === "anguloÎ±") { 	
    var anguloÎ² = eval(document.retang.anguloÎ².value.replace(",",".").replace(/ /g,""));
    
     
      if ((anguloÎ² < 0) || isNaN(anguloÎ²) || anguloÎ² == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.retang.anguloÎ².focus();
          document.retang.anguloÎ².select();  
      return false;
   }
   
  try {
   var anguloÎ² = document.getElementById("resposta").value = roundNumber(anguloÎ², 2);
   var anguloÎ± =  180 - anguloÎ² ;
   var anguloÎ± = document.getElementById("resposta").value = roundNumber(anguloÎ±, 2); 
      
          document.getElementById('resposta').innerHTML = "<hr> O Ã¢ngulo Î± Ã©: <br> <div style='line-height: 25px;'> Î± = 180Âº âˆ’ Î² = 180Âº âˆ’ "+anguloÎ²+"Âº <br> Î± = <a1 style='color: #FF0000'> "+anguloÎ±+"Âº  </div><hr><h1 class='logomarca'> BpW </h1>" ;
     
      document.retang.anguloÎ².focus();
      document.retang.anguloÎ².select(); 
  }
       catch(e) {alert(e)}
  } 
  
   /** ***********************************************  Ã‚ngulo Î²   ****************************************  **/  	
  if (a === "anguloÎ²") { 	
    var anguloÎ± = eval(document.retang.anguloÎ±.value.replace(",",".").replace(/ /g,""));
    
      if ((anguloÎ± < 0) || isNaN(anguloÎ±) || anguloÎ± == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.retang.anguloÎ±.focus();
          document.retang.anguloÎ±.select();  
      return false;
   }
   
  try {
   var anguloÎ± = document.getElementById("resposta").value = roundNumber(anguloÎ±, 2);	
   var anguloÎ² =  180 - anguloÎ± ;
   var anguloÎ² = document.getElementById("resposta").value = roundNumber(anguloÎ², 2);	
   
          document.getElementById('resposta').innerHTML = "<hr> O Ã¢ngulo Î² Ã©: <br> <div style='line-height: 25px;'>  Î² = 180Âº âˆ’ Î± = 180Âº âˆ’ "+anguloÎ±+"Âº <br> Î² = <a1 style='color: #FF0000'> "+anguloÎ²+"Âº  </div><hr><h1 class='logomarca'> BpW </h1>" ;
     
      document.retang.anguloÎ±.focus();
      document.retang.anguloÎ±.select(); 
  }
       catch(e) {alert(e)}
  } 
  