/** ************************************************ CÃ¡lculo do perÃ­metro   ************************************  **/  	 
if (a === "perimetro") { 
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
  var perimetro = (2*ladoa + 2* ladob) ;
  var perimetro = document.getElementById("resposta").value = roundNumber(perimetro, 2);	 
  var perimetro1 = 2*ladoa ;	
  var perimetro1 = document.getElementById("resposta").value = roundNumber(perimetro1, 2);	  
  var perimetro2 =  2*ladob ;
  var perimetro2 = document.getElementById("resposta").value = roundNumber(perimetro2, 2);	  
     
         document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 25px;'>  O perÃ­metro do retÃ¢ngulo Ã©: <br> P = 2<a1 style='font-family: times new roman; font-style:italic;'>a</a1> + 2<a1 style='font-family: times new roman; font-style:italic;'>b</a1> = 2 âˆ™ <a1 style='font-size: 16px; font-family: times new roman;'> "+ladoa+"</a1>  + 2 âˆ™ <a1 style='font-size: 16px; font-family: times new roman;'> "+ladob+"</a1>  <br> P = <a1 style='font-size: 16px; font-family: times new roman;'> "+perimetro1+"</a1>  + <a1 style='font-size: 16px; font-family: times new roman;'> "+perimetro2+"</a1> = <a1 style='color: #FF0000'> "+perimetro+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> u </a1> </div><hr><h1 class='logomarca'> BpW </h1>";
     
     document.retang.ladoa.focus();
     document.retang.ladoa.select(); 
 }
      catch(e) {alert(e)}
 }