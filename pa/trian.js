/*******************************************************  Ãƒngulo Î²/2  ****************************************  **/  	
if (a === "anguloÎ²/2") {	
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
  var anguloÎ²2 =  (ladob/diagonal);
  var anguloÎ²2 = document.getElementById("resposta").value = roundNumber(anguloÎ²2, 3);	 
  var cosÎ²2 = Math.acos(anguloÎ²2)*180/Math.PI; 
  var cosÎ²2 = document.getElementById("resposta").value = roundNumber(cosÎ²2, 2);	 
 
     document.getElementById('resposta').innerHTML = "<hr> O Ã¢ngulo Î²/2 do retÃ¢ngulo Ã©: <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> cos(Î²/2) &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladob+" </td></tr> <tr> <td> D </td><td> "+diagonal+" </td> </tr></tbody></table>  </div> cos(Î²/2) =&nbsp;  <a1 style='color: #FF0000'> "+anguloÎ²2+"</a1>" +"  <br> Logo: <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> Î² </td><td rowspan='2'> &nbsp;=&nbsp; <a1 style='color: #FF0000'> "+cosÎ²2+"Â° </td></tr><tr><td> 2 </td> </tr></tbody></table>   <hr><h1 class='logomarca'> BpW </h1>" ;
    
     document.retang.ladob.focus();
     document.retang.ladob.select(); 
     document.getElementById('resposta').style.display = "block"; 
 }
      catch(e) {alert(e)}
 } 
 }
 
 