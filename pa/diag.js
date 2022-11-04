/** **********************************************   CÃ¡lculo da diagonal    ***********************************  **/  	
if (a === "diagonal") { 
    var ladoa = eval(document.retang.ladoa.value.replace(",",".").replace(/ /g,""));
    var ladob = eval(document.retang.ladob.value.replace(",",".").replace(/ /g,""));   
    
     if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
         document.retang.ladoa.focus();
         document.retang.ladoa.select();  
     return false;
  }
  
     if ((ladob < 0) || (isNaN(ladob )) || ladob == "") { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
         document.retang.ladob.focus();
         document.retang.ladob.select();  
     return false;
 }  
   
 try {
  var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);
  var ladob = document.getElementById("resposta").value = roundNumber(ladob, 2);		
  var diagonal = Math.sqrt((ladoa * ladoa) + (ladob * ladob));
  var diagonal = document.getElementById("resposta").value = roundNumber(diagonal, 2);	 
  var diagonal2 = (ladoa * ladoa);	
  var diagonal2 = document.getElementById("resposta").value = roundNumber(diagonal2, 2); 
  var diagonal3 = (ladob * ladob);
  var diagonal3 = document.getElementById("resposta").value = roundNumber(diagonal3, 2); 
  var diagonal4 = (ladoa * ladoa) + (ladob * ladob);	
  var diagonal4 = document.getElementById("resposta").value = roundNumber(diagonal4, 2); 
     
     document.getElementById('resposta').innerHTML = "<hr>A diagonal do retÃ¢ngulo Ã©: <br>  <div style='line-height: 30px; '> D = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.3px;'>  <a1 style='font-size: 16px; font-family: times new roman;'><a1 style='font-family: times new roman; font-style:italic;'>a</a1><a1 style='font-size: 16px; font-family: times new roman;'>Â² </a1> </a1>  + <a1 style='font-size: 16px; font-family: times new roman;'> <a1 style='font-family: times new roman; font-style:italic;'>b</a1>Â² </a1> </a1>  <br> D = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.3px;'> <a1 style='font-size: 16px; font-family: times new roman;'> "+ladoa+"<a1 style='font-size: 16px; font-family: times new roman;'>Â² </a1>  </a1>  + <a1 style='font-size: 16px; font-family: times new roman;'> "+ladob+"<a1 style='font-size: 16px; font-family: times new roman;'>Â² </a1> </a1> </a1> &nbsp; <br> D =   âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.3px;'>  <a1 style='font-size: 16px; font-family: times new roman;'> "+diagonal2+" </a1>  + <a1 style='font-size: 16px; font-family: times new roman;'> "+diagonal3+"</a1> </a1><br> D =  âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.3px;'> <a1 style='font-size: 16px; font-family: times new roman;'> "+diagonal4+" </a1> </a1> =  <a1 style='color: #FF0000'> "+diagonal+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> u </a1> </div><hr><h1 class='logomarca'> BpW </h1>";
     
     document.retang.ladoa.focus();
     document.retang.ladoa.select(); 
 }
      catch(e) {alert(e)}
 }
 