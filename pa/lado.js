/** *****************************************************   Lado a    ****************************************  **/  	
if (a === "ladoa") { 
    var ladob = eval(document.retang.ladob.value.replace(",",".").replace(/ /g,""));
    var diagonal = eval(document.retang.diagonal.value.replace(",",".").replace(/ /g,""));   
    
     if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
         document.retang.ladob.focus();
         document.retang.ladob.select();  
     return false;
  }
  
     if ((diagonal < 0) || (isNaN(diagonal )) || diagonal == "") { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
         document.retang.diagonal.focus();
         document.retang.diagonal.select();  
     return false;
 }   
   
 try {
  var ladob = document.getElementById("resposta").value = roundNumber(ladob, 2);		
  var diagonal = document.getElementById("resposta").value = roundNumber(diagonal, 2);	
  var ladoa = Math.sqrt((diagonal * diagonal) - (ladob * ladob));
  var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);	 
  var ladoa2 = (diagonal * diagonal);
  var ladoa2 = document.getElementById("resposta").value = roundNumber(ladoa2, 2);	  
  var ladoa3 = (ladob * ladob);
  var ladoa3 = document.getElementById("resposta").value = roundNumber(ladoa3, 2);	  
  var ladoa4 = (diagonal * diagonal) - (ladob * ladob);	
  var ladoa4 = document.getElementById("resposta").value = roundNumber(ladoa4, 2);	  
     
         document.getElementById('resposta').innerHTML = "<hr> O lado <a1 style='font-family: times new roman; font-style:italic;'>a</a1> do retÃ¢ngulo Ã©: <br> <div style='line-height: 27px;'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>  <a1 style='font-size: 16px; font-family: times new roman;'>D<a1 style='font-size: 16px; font-family: times new roman;'>Â² </a1> </a1> âˆ’ <a1 style='font-size: 16px; font-family: times new roman;'> <a1 style='font-family: times new roman; font-style:italic;'>b</a1>Â² </a1> </a1> &nbsp; = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'> <a1 style='font-size: 16px; font-family: times new roman;'> "+diagonal+"<a1 style='font-size: 16px; font-family: times new roman;'>Â² </a1>  </a1> âˆ’ <a1 style='font-size: 16px; font-family: times new roman;'> "+ladob+"<a1 style='font-size: 16px; font-family: times new roman;'>Â² </a1> </a1> </a1> &nbsp; <br> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> =   âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>  <a1 style='font-size: 16px; font-family: times new roman;'> "+ladoa2+" </a1> âˆ’ <a1 style='font-size: 16px; font-family: times new roman;'> "+ladoa3+"</a1> </a1><br> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> =  âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'> <a1 style='font-size: 16px; font-family: times new roman;'> "+ladoa4+" </a1> </a1> =  <a1 style='color: #FF0000'> "+ladoa+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> u </a1> </div><hr><h1 class='logomarca'> BpW </h1>";
     
     document.retang.ladoa.focus();
     document.retang.ladoa.select(); 
 }
      catch(e) {alert(e)}
 }
 
 /** *************************************************  Lado b    ****************************************  **/  	
   if (a === "ladob") { 
    var ladoa = eval(document.retang.ladoa.value.replace(",",".").replace(/ /g,""));
    var diagonal = eval(document.retang.diagonal.value.replace(",",".").replace(/ /g,""));   
    
     if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
         document.retang.ladoa.focus();
         document.retang.ladoa.select();  
     return false;
  }
  
     if ((diagonal < 0) || (isNaN(diagonal )) || diagonal == "") { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
         document.retang.diagonal.focus();
         document.retang.diagonal.select();  
     return false;
 }    
   
 try {
  var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);		
  var diagonal = document.getElementById("resposta").value = roundNumber(diagonal, 2);	
  var ladob = Math.sqrt((diagonal * diagonal) - (ladoa * ladoa));
  var ladob = document.getElementById("resposta").value = roundNumber(ladob, 2);		 
  var ladob2 = (diagonal * diagonal);
  var ladob2 = document.getElementById("resposta").value = roundNumber(ladob2, 2);	 
  var ladob3 = (ladoa * ladoa);
  var ladob3 = document.getElementById("resposta").value = roundNumber(ladob3, 2);	 
  var ladob4 = (diagonal * diagonal) - (ladoa * ladoa);	
  var ladob4 = document.getElementById("resposta").value = roundNumber(ladob4, 2);	 
     
     document.getElementById('resposta').innerHTML = "<hr> O lado <a1 style='font-family: times new roman; font-style:italic;'>b</a1> do retÃ¢ngulo Ã©: <br> <div style='line-height: 27px;'> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>  <a1 style='font-size: 16px; font-family: times new roman;'>D<a1 style='font-size: 16px; font-family: times new roman;'>Â² </a1> </a1>  âˆ’ <a1 style='font-size: 16px; font-family: times new roman;'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1>Â² </a1> </a1> &nbsp; = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'> <a1 style='font-size: 16px; font-family: times new roman;'> "+diagonal+"<a1 style='font-size: 16px; font-family: times new roman;'>Â² </a1>  </a1>  âˆ’ <a1 style='font-size: 16px; font-family: times new roman;'> "+ladob+"<a1 style='font-size: 16px; font-family: times new roman;'>Â² </a1> </a1> </a1> &nbsp; <br> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> =   âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>  <a1 style='font-size: 16px; font-family: times new roman;'> "+ladob2+" </a1> âˆ’ <a1 style='font-size: 16px; font-family: times new roman;'> "+ladob3+"</a1> </a1><br> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> =  âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'> <a1 style='font-size: 16px; font-family: times new roman;'> "+ladob4+" </a1> </a1> =  <a1 style='color: #FF0000'> "+ladob+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> u </a1> </div><hr><h1 class='logomarca'> BpW </h1>";
     
     document.retang.ladoa.focus();
     document.retang.ladoa.select(); 
 }
      catch(e) {alert(e)}
 }
 
  /*******************************************************  Ãƒngulo Î±/2  ****************************************  **/  	
  if (a === "anguloÎ±/2") {
    var ladoa = eval(document.retang.ladoa.value.replace(",",".").replace(/ /g,""));
    var diagonal = eval(document.retang.diagonal.value.replace(",",".").replace(/ /g,""));   
    
     if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
         document.retang.ladoa.focus();
         document.retang.ladoa.select();  
     return false;
  }
  
     if ((diagonal < 0) || (isNaN(diagonal )) || diagonal == "") { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
         document.retang.diagonal.focus();
         document.retang.diagonal.select();  
     return false;
 } 
   
 try {
  var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);		
  var diagonal = document.getElementById("resposta").value = roundNumber(diagonal, 2);		
  var anguloÎ±2 =  (ladoa/diagonal);
  var anguloÎ±2 = document.getElementById("resposta").value = roundNumber(anguloÎ±2, 3);	
  var senoÎ±2 = Math.asin(anguloÎ±2)*180/Math.PI; 
  var senoÎ±2 = document.getElementById("resposta").value = roundNumber(senoÎ±2, 2);	 
 
     document.getElementById('resposta').innerHTML = "<hr> O Ã¢ngulo Î±/2 do retÃ¢ngulo Ã©: <br> <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> sen(Î±/2) &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladoa+" </td></tr> <tr> <td> D </td><td> "+diagonal+" </td> </tr></tbody></table> </div>  sen(Î±/2) =&nbsp;  <a1 style='color: #FF0000'> "+anguloÎ±2+"</a1>" +" &nbsp; &nbsp; <br> Logo: <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> Î± </td><td rowspan='2'> &nbsp;=&nbsp; <a1 style='color: #FF0000'> "+senoÎ±2+"Â° </td></tr><tr><td> 2 </td> </tr></tbody></table>  <hr><h1 class='logomarca'> BpW </h1>" ;
    
     document.retang.ladoa.focus();
     document.retang.ladoa.select(); 
     document.getElementById('resposta').style.display = "block"; 
 }
      catch(e) {alert(e)}
 } 