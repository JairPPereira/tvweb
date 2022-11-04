/***#################################                          #########################################      **/
/***###############################    ÃLGEBRA: QUADRÃTICA    #########################################      **/


function quadratica2() {
    var a = document.forms["quadratica"]["quadratica_type"].value;
  /** ******************************   valor numÃ©rico: 2Â° grau   *****************************  **/  
   if (a === "valornumericoequaÃ§ao2grau") {
      document.getElementById("variÃ¡vel_x").disabled = false;		
       document.getElementById("coef_a").disabled = false;		
       document.getElementById("coef_b").disabled = false;		
       document.getElementById("coef_c").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
    
  /** ******************************   EquaÃ§Ã£o do 2Â° grau   *****************************  **/  
   if (a === "equaÃ§ao2grau") {
      document.getElementById("variÃ¡vel_x").disabled = true;	
      document.getElementById("variÃ¡vel_x").value ="";	
       document.getElementById("coef_a").disabled = false;		
       document.getElementById("coef_b").disabled = false;		
       document.getElementById("coef_c").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}
      
  /** ******************************   Valor mÃ¡ximo: funÃ§Ã£o quadrÃ¡tica   ***********************  **/  
   if (a === "valormaximoequaÃ§ao2grau") {
      document.getElementById("variÃ¡vel_x").disabled = true;	
      document.getElementById("variÃ¡vel_x").value ="";	
       document.getElementById("coef_a").disabled = false;		
       document.getElementById("coef_b").disabled = false;		
       document.getElementById("coef_c").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
      
  /** ******************************  VÃ©rtice: funÃ§Ã£o quadrÃ¡tica   *****************************  **/  
   if (a === "verticeequaÃ§ao2grau") {
      document.getElementById("variÃ¡vel_x").disabled = true;	
      document.getElementById("variÃ¡vel_x").value ="";	
       document.getElementById("coef_a").disabled = false;		
       document.getElementById("coef_b").disabled = false;		
       document.getElementById("coef_c").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
      
  /** ******************************  concavidade: funÃ§Ã£o quadrÃ¡tica   *****************************  **/  
   if (a === "concavidadeequaÃ§ao2grau") {
      document.getElementById("variÃ¡vel_x").disabled = true;	
      document.getElementById("variÃ¡vel_x").value ="";	
      document.getElementById("coef_b").disabled = true;	
      document.getElementById("coef_b").value ="";
      document.getElementById("coef_c").disabled = true;	
      document.getElementById("coef_c").value ="";	
       document.getElementById("coef_a").disabled = false;		
   }
   try { 	}
       catch(e) {alert(e)}	
          
  } 
   
   
  function quadratica1() {
   var ddl = document.getElementById("ops");
   var selectedValue = ddl.options[ddl.selectedIndex].value;
      if (selectedValue == "")
     {
      alert("Escolha uma opÃ§Ã£o para Calcular!");
     } 
     
    var a = document.forms["quadratica"]["quadratica_type"].value;
    /** ***************************** Valor numÃ©rico:  EquaÃ§Ã£o do 2Â° grau    ****************************************  **/  
    if (a === "valornumericoequaÃ§ao2grau") { 
      var coef_a = eval(document.quadratica.coef_a.value.replace(",",".").replace(/ /g,""));
      var coef_b = eval(document.quadratica.coef_b.value.replace(",",".").replace(/ /g,"")); 
      var coef_c = eval(document.quadratica.coef_c.value.replace(",",".").replace(/ /g,""));  
      var variÃ¡vel_x = eval(document.quadratica.variÃ¡vel_x.value.replace(",",".").replace(/ /g,""));  	
    
      if (isNaN(coef_a) ) { alert("Digite um valor numÃ©rico nÃ£o nulo, ou seja, o coeficiente a â‰  0!");
          document.quadratica.coef_a.focus();
          document.quadratica.coef_a.select();  
      return false;
    }
      if (isNaN(coef_b)) { alert("Digite um valor numÃ©rico para o coeficiente b!");
          document.quadratica.coef_b.focus();
          document.quadratica.coef_b.select();  
      return false;
    }
      if (isNaN(coef_c) ) { alert("Digite um valor numÃ©rico para o coeficiente c!");
          document.quadratica.coef_c.focus();
          document.quadratica.coef_c.select();  
      return false;
    }
      if (isNaN(variÃ¡vel_x) ) { alert("Digite um valor numÃ©rico para a incÃ³gnita x!");
          document.quadratica.variÃ¡vel_x.focus();
          document.quadratica.variÃ¡vel_x.select();  
      return false;
    }
    
  try {
      var coef_a = document.getElementById("resposta").value = roundNumber(coef_a, 2);
      var coef_b = document.getElementById("resposta").value = roundNumber(coef_b, 2);
      var coef_c = document.getElementById("resposta").value = roundNumber(coef_c, 2);	
      var variÃ¡vel_x = document.getElementById("resposta").value = roundNumber(variÃ¡vel_x, 2);	
      
      var xx = variÃ¡vel_x * variÃ¡vel_x;
      var xx = document.getElementById("resposta").value = roundNumber(xx, 2);	
      var bx = coef_b * variÃ¡vel_x;
      var bx = document.getElementById("resposta").value = roundNumber(bx, 2);		
      var axx = coef_a * xx;
      var axx = document.getElementById("resposta").value = roundNumber(axx, 2);		
      var resul = axx + bx + coef_c;
      var resul = document.getElementById("resposta").value = roundNumber(resul, 2);		
      
            document.getElementById('resposta').innerHTML = " <hr>  <div style='font-size:18px;'>  &emsp;   <a1 style='color: #FF0000'>"+coef_a+"</a1>xÂ² + (<a1 style='color: #FF0000'>"+coef_b+"</a1>)x + (<a1 style='color: #FF0000'>"+coef_c+"</a1>) = 0  </div>   <br> O valor numÃ©rico da funÃ§Ã£o quadrÃ¡tica Ã©: <br><br> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>f</a1>(<a1 style='font-family: times new roman; font-size: 12px; font-style:italic;'>x</a1>) = <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1><a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1>Â² + <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>b</a1><a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> + <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>c</a1>  <br> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>f</a1>(<a1 style='font-family: times new roman; font-size: 12px; '>"+variÃ¡vel_x+"</a1>) =  "+coef_a+"âˆ™("+variÃ¡vel_x+")Â² + ("+coef_b+")âˆ™("+variÃ¡vel_x+") + ("+coef_c+") <br> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>f</a1>(<a1 style='font-family: times new roman; font-size: 12px; '>"+variÃ¡vel_x+"</a1>) =  "+coef_a+" âˆ™ "+xx+" + ("+bx+") + ("+coef_c+") <br> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>f</a1>(<a1 style='font-family: times new roman; font-size: 12px; '>"+variÃ¡vel_x+"</a1>) =  "+axx+" + ("+bx+") + ("+coef_c+") <br> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>f</a1>(<a1 style='font-family: times new roman; font-size: 12px; '>"+variÃ¡vel_x+"</a1>) =  <a1 style='color: #FF0000'>"+resul+"</a1> <br>   <hr>  <h1 class='logomarca'> BpW </h1> ";
  
            document.quadratica.coef_a.focus();
               document.quadratica.coef_a.select(); 		 
  
      }
       catch(e) {alert(e)}
    }  
    
   
    /** *****************************************   valor mÃ¡ximo: quadrÃ¡tica    **********************************  **/  
    if (a === "valormaximoequaÃ§ao2grau") { 
      var coef_a = eval(document.quadratica.coef_a.value.replace(",",".").replace(/ /g,""));
      var coef_b = eval(document.quadratica.coef_b.value.replace(",",".").replace(/ /g,"")); 
      var coef_c = eval(document.quadratica.coef_c.value.replace(",",".").replace(/ /g,""));    
    
      if (isNaN(coef_a) || (coef_a == 0)) { alert("Digite um valor numÃ©rico nÃ£o nulo, ou seja, o coeficiente a â‰  0!");
          document.quadratica.coef_a.focus();
          document.quadratica.coef_a.select();  
      return false;
    }
      if (isNaN(coef_b)) { alert("Digite um valor numÃ©rico para o coeficiente b!");
          document.quadratica.coef_b.focus();
          document.quadratica.coef_b.select();  
      return false;
    }
      if (isNaN(coef_c) ) { alert("Digite um valor numÃ©rico para o coeficiente c!");
          document.quadratica.coef_c.focus();
          document.quadratica.coef_c.select();  
      return false;
    }
  
  try {
   var coef_a = document.getElementById("resposta").value = roundNumber(coef_a, 2);
   var coef_b = document.getElementById("resposta").value = roundNumber(coef_b, 2);
   var coef_c = document.getElementById("resposta").value = roundNumber(coef_c, 2);	
   var delta = (coef_b * coef_b) - 4 * coef_a * coef_c; 
   var delta = document.getElementById("resposta").value = roundNumber(delta, 2); 
   var delta1 = coef_b * coef_b; 
   var delta1 = document.getElementById("resposta").value = roundNumber(delta1, 2); 
   var delta2 = 4 * coef_a * coef_c;  
   var delta2 = document.getElementById("resposta").value = roundNumber(delta2, 2); 
   var delta3 = (coef_b * coef_b) - 4 * coef_a * coef_c;
   var delta3 = document.getElementById("resposta").value = roundNumber(delta3, 2);  
   var yv = ( -delta3 / (4*coef_a))
   var yv = document.getElementById("resposta").value = roundNumber(yv, 2);  
   var yv1 = -delta3;
   var yv1 = document.getElementById("resposta").value = roundNumber(yv1, 2); 
   var yv2 = 4*coef_a;
   var yv2 = document.getElementById("resposta").value = roundNumber(yv2, 2); 
    
      if (coef_a > 0) {
   
             document.getElementById('resposta').innerHTML = " <hr>  <div style='font-size:18px;'>  &emsp;  <a1 style='color: #FF0000'>"+coef_a+"</a1>xÂ² + (<a1 style='color: #FF0000'>"+coef_b+"</a1>)x + (<a1 style='color: #FF0000'>"+coef_c+"</a1>) = 0  </div>   <br> Os coeficientes sÃ£o: <br> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1> = "+coef_a+" &emsp;  <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>b</a1> =  "+coef_b+" &emsp;  <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>c</a1> =  "+coef_c+"  <br><br> Como <a1 style='color: #FF0000'><a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1> = "+coef_a+" > 0</a1>. Logo, a funÃ§Ã£o tem grÃ¡fico com concavidade voltada para cima. Portanto, a funÃ§Ã£o tem <a1 style='color: #FF0000'>VALOR MÃNIMO</a1>. <br><br>   Agora, o cÃ¡lculo do discriminante (Delta): <br>   Î” = bÂ² - 4<a1 style='font-family: times new roman; font-size: 16px; emsp; font-style:italic;'>a</a1><a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>c</a1> <br>  Î” = ("+coef_b+")Â² - 4 âˆ™ ("+coef_a+") âˆ™ ("+coef_c+") <br>  Î” = "+delta1+" - ("+delta2+") <br> Î” = "+delta+" <br><br><div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> y<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  - Î” </td></tr><tr><td style='text-align:center;'> 4 âˆ™ <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1> </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> y<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  - ("+delta+") </td></tr><tr><td style='text-align:center;'> 4 âˆ™ "+coef_a+" </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> y<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+yv1+" </td></tr><tr><td style='text-align:center;'> "+yv2+" </td></tr></tbody></table>  </div>   y<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> =&nbsp; <a1 style='color: #FF0000'> "+yv+"   </a1> <hr> <h1 class='logomarca'> BpW </h1> ";
  
            document.quadratica.coef_a.focus();
               document.quadratica.coef_a.select(); 
      return false;		  
         }
         else {
            document.getElementById('resposta').innerHTML = "<hr>  <div style='font-size:18px;'>  &emsp;   <a1 style='color: #FF0000'>"+coef_a+"</a1>xÂ² + (<a1 style='color: #FF0000'>"+coef_b+"</a1>)x + (<a1 style='color: #FF0000'>"+coef_c+"</a1>) = 0  </div>   <br> Os coeficientes sÃ£o: <br> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1> = "+coef_a+" &emsp;  <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>b</a1> =  "+coef_b+" &emsp;  <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>c</a1> =  "+coef_c+"  <br><br> Como <a1 style='color: #FF0000'><a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1> = "+coef_a+" < 0</a1>. Logo, a funÃ§Ã£o tem grÃ¡fico com concavidade voltada para baixo. Portanto, a funÃ§Ã£o tem <a1 style='color: #FF0000'>VALOR MÃXIMO.</a1> <br><br>   </h3> Agora, o cÃ¡lculo do discriminante (Delta): <br> Î” = bÂ² - 4<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1><a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>c</a1> <br>  Î” = ("+coef_b+")Â² - 4 âˆ™ ("+coef_a+") âˆ™ ("+coef_c+") <br>  Î” = "+delta1+" - ("+delta2+") <br> Î” = "+delta+" <br><br><div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'>  y<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> - Î”  </td></tr><tr><td style='text-align:center;'> 4 âˆ™ <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1> </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'>  y<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  - ("+delta+") </td></tr><tr><td style='text-align:center;'> 4 âˆ™ ("+coef_a+") </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'>  y<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+yv1+" </td></tr><tr><td style='text-align:center;'> "+yv2+" </td></tr></tbody></table> </div>   y<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> =&nbsp; <a1 style='color: #FF0000'> "+yv+"   </a1>    <hr>    <h1 class='logomarca'> BpW </h1> ";
  
           document.quadratica.coef_a.focus();
           document.quadratica.coef_a.select();
      }
      }
      catch(e) {alert(e)}
    }
  
  /** ******************************  VÃ©rtice: funÃ§Ã£o quadrÃ¡tica   *****************************  **/  
   if (a === "verticeequaÃ§ao2grau") {
      var coef_a = eval(document.quadratica.coef_a.value.replace(",",".").replace(/ /g,""));
      var coef_b = eval(document.quadratica.coef_b.value.replace(",",".").replace(/ /g,"")); 
      var coef_c = eval(document.quadratica.coef_c.value.replace(",",".").replace(/ /g,""));    
    
      if (isNaN(coef_a) || (coef_a == 0)) { alert("Digite um valor numÃ©rico nÃ£o nulo, ou seja, o coeficiente a â‰  0!");
          document.quadratica.coef_a.focus();
          document.quadratica.coef_a.select();  
      return false;
    }
      if (isNaN(coef_b)) { alert("Digite um valor numÃ©rico para o coeficiente b!");
          document.quadratica.coef_b.focus();
          document.quadratica.coef_b.select();  
      return false;
    }
      if (isNaN(coef_c) ) { alert("Digite um valor numÃ©rico para o coeficiente c!");
          document.quadratica.coef_c.focus();
          document.quadratica.coef_c.select();  
      return false;
    }
  
  try {
   var coef_a = document.getElementById("resposta").value = roundNumber(coef_a, 2);
   var coef_b = document.getElementById("resposta").value = roundNumber(coef_b, 2);
   var coef_c = document.getElementById("resposta").value = roundNumber(coef_c, 2);	
   var delta = (coef_b * coef_b) - 4 * coef_a * coef_c; 
   var delta = document.getElementById("resposta").value = roundNumber(delta, 2);
   var delta1 = coef_b * coef_b; 
   var delta1 = document.getElementById("resposta").value = roundNumber(delta1, 2); 
   var delta2 = 4 * coef_a * coef_c;  
   var delta2 = document.getElementById("resposta").value = roundNumber(delta2, 2); 
   var delta3 = (coef_b * coef_b) - 4 * coef_a * coef_c;
   var delta3 = document.getElementById("resposta").value = roundNumber(delta3, 2); 
   var yv = ( -delta3 / (4*coef_a))
   var yv = document.getElementById("resposta").value = roundNumber(yv, 2); 
   var yv1 = -delta3;
   var yv1 = document.getElementById("resposta").value = roundNumber(yv1, 2);  
   var yv2 = 4*coef_a;
   var yv2 = document.getElementById("resposta").value = roundNumber(yv2, 2);  
   var vertice1 = - coef_b / (2*coef_a);
   var vertice1 = document.getElementById("resposta").value = roundNumber(vertice1, 2);  
   var vertice2 = - coef_b; 
   var vertice2 = document.getElementById("resposta").value = roundNumber(vertice2, 2);  
   var vertice3 = 2*coef_a; 
   var vertice3 = document.getElementById("resposta").value = roundNumber(vertice3, 2);  
   
             document.getElementById('resposta').innerHTML = " <hr>  <div style='font-size:18px;'>  &emsp;   <a1 style='color: #FF0000'>"+coef_a+"</a1>xÂ² + (<a1 style='color: #FF0000'>"+coef_b+"</a1>)x + (<a1 style='color: #FF0000'>"+coef_c+"</a1>) = 0  </div>  <br>   Os coeficientes sÃ£o: <br> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1> = "+coef_a+" &emsp;  <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>b</a1> =  "+coef_b+" &emsp;  <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>c</a1> =  "+coef_c+"  <br><br>  Agora, o cÃ¡lculo do discriminante (Delta): <br> Î” = bÂ² - 4<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1><a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>c</a1> <br>  Î” = ("+coef_b+")Â² - 4 âˆ™ ("+coef_a+") âˆ™ ("+coef_c+") <br>  Î” = "+delta1+" - ("+delta2+") <br> Î” = "+delta+" <br><br> O vÃ©rtice da parÃ¡bola Ã©:  <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> x<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>   - <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>b</a1> </td></tr><tr><td style='text-align:center;'> 2 âˆ™ <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1> </td></tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> x<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>   - ("+coef_b+") </td></tr><tr><td style='text-align:center;'> 2 âˆ™ ("+coef_a+")  </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> x<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+vertice2+" </td></tr><tr><td style='text-align:center;'> "+vertice3+"  </td></tr></tbody></table> </div> x<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> =&nbsp; <a1 style='color: #FF0000'>"+vertice1+"</a1><hr> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> y<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> - Î” </td></tr><tr><td style='text-align:center;'> 4 âˆ™ <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1>  </td></tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> y<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> - ("+delta+") </td></tr><tr><td style='text-align:center;'> 4 âˆ™ ("+coef_a+")  </td></tr></tbody></table><table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> y<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+yv1+" </td></tr><tr><td style='text-align:center;'> "+yv2+"  </td></tr></tbody></table> </div> y<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> =&nbsp; <a1 style='color: #FF0000'> "+yv+" </a1> <br><br>  Logo, as coordenadas do vÃ©rtice da parÃ¡bola Ã©: <br> V = (<a1 style='color: #FF0000'>"+vertice1+"</a1>; <a1 style='color: #FF0000'>"+yv+"</a1>) <hr> <h1 class='logomarca'> BpW </h1> ";
  
           document.quadratica.coef_a.focus();
           document.quadratica.coef_a.select(); 
      }
      catch(e) {alert(e)}
    }
  
    
   /** ***************************************   RaÃ­zes: EquaÃ§Ã£o do 2Â° grau    ****************************************  **/  
    if (a === "equaÃ§ao2grau") { 
      var coef_a = eval(document.quadratica.coef_a.value.replace(",",".").replace(/ /g,""));
      var coef_b = eval(document.quadratica.coef_b.value.replace(",",".").replace(/ /g,"")); 
      var coef_c = eval(document.quadratica.coef_c.value.replace(",",".").replace(/ /g,""));    
    
      if (isNaN(coef_a) || (coef_a == 0)) { alert("Digite um valor numÃ©rico nÃ£o nulo, ou seja, o coeficiente a â‰  0!");
          document.quadratica.coef_a.focus();
          document.quadratica.coef_a.select();  
      return false;
    }
      if (isNaN(coef_b)) { alert("Digite um valor numÃ©rico para o coeficiente b!");
          document.quadratica.coef_b.focus();
          document.quadratica.coef_b.select();  
      return false;
    }
      if (isNaN(coef_c) ) { alert("Digite um valor numÃ©rico para o coeficiente c!");
          document.quadratica.coef_c.focus();
          document.quadratica.coef_c.select();  
      return false;
    }
  
  try {
   var coef_a = document.getElementById("resposta").value = roundNumber(coef_a, 2);
   var coef_b = document.getElementById("resposta").value = roundNumber(coef_b, 2);
   var coef_c = document.getElementById("resposta").value = roundNumber(coef_c, 2);
   var delta = (coef_b * coef_b) - 4 * coef_a * coef_c;
   var delta = document.getElementById("resposta").value = roundNumber(delta, 2);
   var delta1 = coef_b * coef_b; 
   var delta1 = document.getElementById("resposta").value = roundNumber(delta1, 2); 
   var delta2 = 4 * coef_a * coef_c;  
   var delta2 = document.getElementById("resposta").value = roundNumber(delta2, 2); 
   var delta3 = (coef_b * coef_b) - 4 * coef_a * coef_c;   
   var delta3 = document.getElementById("resposta").value = roundNumber(delta3, 2); 
   var delta4 = Math.sqrt(delta3);
   var delta4 = document.getElementById("resposta").value = roundNumber(delta4, 2); 
   var delta5 = -1 * coef_b;
   var delta5 = document.getElementById("resposta").value = roundNumber(delta5, 2); 
   var delta6 =  2 * coef_a; 
   var delta6 = document.getElementById("resposta").value = roundNumber(delta6, 2);  
   var delta7 =  (- coef_b + delta4);  
   var delta7 = document.getElementById("resposta").value = roundNumber(delta7, 2); 
   var delta8 =  (- coef_b - delta4);  
   var delta8 = document.getElementById("resposta").value = roundNumber(delta8, 2); 
   var x1 = (- coef_b + delta4)/(2*coef_a) ;
   var x1 = document.getElementById("resposta").value = roundNumber(x1, 2);
   var x2 = (- coef_b - delta4)/(2 *coef_a);
   var x2 = document.getElementById("resposta").value = roundNumber(x2, 2); 
   
       if (delta < 0) { 
            document.getElementById('resposta').innerHTML = " <hr>  <div style='font-size:18px;'>  &emsp;   <a1 style='color: #FF0000'>"+coef_a+"</a1>xÂ² + (<a1 style='color: #FF0000'>"+coef_b+"</a1>)x + (<a1 style='color: #FF0000'>"+coef_c+"</a1>) = 0  </div>        <br> Os coeficientes sÃ£o: <br> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1> = "+coef_a+" &emsp; <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>b</a1> =  "+coef_b+" &emsp; <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>c</a1> =  "+coef_c+"  <br><br> Agora, o cÃ¡lculo do discriminante (delta): <br>   Î” = bÂ² - 4ac <br>  Î” = ("+coef_b+")Â² - 4 âˆ™ ("+coef_a+") âˆ™ ("+coef_c+") <br>  Î” = "+delta1+" - ("+delta2+") <br> Î” = "+delta+" <br> <br> Como Î” = <a1 style='color: #FF0000'>"+delta+"</a1> < 0, logo a equaÃ§Ã£o nÃ£o possui raiz real. <br>    <hr> <h1 class='logomarca'> BpW </h1> ";
            document.quadratica.coef_a.focus();
               document.quadratica.coef_a.select(); 
      return false;		  
         }
         else { 
            document.getElementById('resposta').innerHTML = " <hr>  <div style='font-size:18px;'>  &emsp;   <a1 style='color: #FF0000'>"+coef_a+"</a1>xÂ² + (<a1 style='color: #FF0000'>"+coef_b+"</a1>)x + (<a1 style='color: #FF0000'>"+coef_c+"</a1>) = 0  </div>  <br>  Os coeficientes sÃ£o: <br> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1> = "+coef_a+" &emsp; <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>b</a1> =  "+coef_b+" &emsp; <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>c</a1> =  "+coef_c+"  <br><br> Agora, o cÃ¡lculo do discriminante (delta): <br>   Î” = bÂ² - 4<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1><a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>c</a1> <br>  Î” = ("+coef_b+")Â² - 4 âˆ™ ("+coef_a+") âˆ™ ("+coef_c+") <br>  Î” = "+delta1+" - ("+delta2+") <br> Î” = "+delta+" <br>    <br> Agora, as raÃ­zes da equaÃ§Ã£o do 2Â° grau sÃ£o: <br>  <div style='line-height: 15px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'><a1 style='font-family: times new roman; font-style:italic;'>x</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'>-b Â± âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>Î”</a1></td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'>-("+coef_b+") Â± âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+delta+"</a1></td></tr> <tr> <td>2 âˆ™ <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1></td><td>2 âˆ™("+coef_a+")</td> </tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'><a1 style='font-family: times new roman; font-style:italic;'>x</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+delta5+" Â± "+delta4+" </td></tr><tr><td style='text-align:center;'>"+delta6+"  </td></tr></tbody></table>  <br> Sendo assim,  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'><a1 style='font-family: times new roman; font-style:italic;'>x'</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'>"+delta5+" + "+delta4+"</td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'>"+delta7+"</td><td rowspan='2'> &nbsp;=&nbsp;  <a1 style='color: #FF0000'> "+x1+"</a1> </td></tr> <tr> <td>"+delta6+"</td><td>"+delta6+"</td> </tr></tbody></table>  <br>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'><a1 style='font-family: times new roman; font-style:italic;'>x''</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'>"+delta5+" - "+delta4+"</td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'>"+delta8+"</td><td rowspan='2'> &nbsp;=&nbsp; <a1 style='color: #FF0000'> "+x2+"</a1> </td></tr> <tr> <td>"+delta6+"</td><td>"+delta6+"</td> </tr></tbody></table>   </div>  Logo, S = {<a1 style='color: #FF0000'>"+x2+"</a1>,&nbsp; <a1 style='color: #FF0000'>"+x1+"</a1>}  <hr>   <h1 class='logomarca'> BpW </h1> ";
  
           document.quadratica.coef_a.focus();
           document.quadratica.coef_a.select(); 
       } 
      }
       catch(e) {alert(e)}
    }
    
    
  /** ******************************  concavidade: funÃ§Ã£o quadrÃ¡tica   *****************************  **/  
    if (a === "concavidadeequaÃ§ao2grau") { 
      var coef_a = eval(document.quadratica.coef_a.value.replace(",",".").replace(/ /g,""));
    
   
    
      if (isNaN(coef_a) || (coef_a == 0)) { alert("Digite um valor numÃ©rico nÃ£o nulo, ou seja, o coeficiente a â‰  0!");
          document.quadratica.coef_a.focus();
          document.quadratica.coef_a.select();  
      return false;
    }
    
  try {
   var coef_a = document.getElementById("resposta").value = roundNumber(coef_a, 2);	
       if (coef_a > 0) { 
            document.getElementById('resposta').innerHTML = " <hr> Como o coeficiente <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1> = <a1 style='color: #FF0000'>"+coef_a+" > 0</a1>. Logo, a funÃ§Ã£o tem grÃ¡fico com concavidade voltada para cima. <br> <br> <style>#box{width:150px; height:80px; background-color:#d9d9d9; border-radius: 0px 0px 90px 90px;border: 2px solid #ff0000;border-top-color: #d9d9d9; margin-left: 90px;} </style><div id='box'></div>      <hr><h1 class='logomarca'> BpW </h1> ";
  
            document.quadratica.coef_a.focus();
               document.quadratica.coef_a.select(); 
      return false;		  
         }
         else { 
            document.getElementById('resposta').innerHTML = " <hr> Como coeficiente <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1> = <a1 style='color: #FF0000'>"+coef_a+" < 0</a1>. Logo, a funÃ§Ã£o tem grÃ¡fico com concavidade voltada para baixo. <br> <br>  <style>#box1{width:150px; height:80px; background-color:#d9d9d9; border-radius: 90px 90px 0px 0px;border: 2px solid #ff0000; border-bottom-color: #d9d9d9; margin-left: 90px;} </style><div id='box1'></div>   <hr>   <h1 class='logomarca'> BpW </h1> ";
  
           document.quadratica.coef_a.focus();
           document.quadratica.coef_a.select(); 
       } 
      }
       catch(e) {alert(e)}
    }
   
     
   }   
   
    
  /***####################################                               #################################     **/
  /***####################################  ÃLGEBRA: FUNÃ‡ÃƒO DE 1Â° GRAU   #################################     **/
  
  
  function primeirograu2() {
    var a = document.forms["primeirograu"]["primeirograu_type"].value;
  /** ******************************   f(x)   *****************************  **/  
   if (a === "f(x)") {
      document.getElementById("coef_c").disabled = true;	
      document.getElementById("coef_c").value ="";
      document.getElementById("coef_d").disabled = true;	
      document.getElementById("coef_d").value ="";
      document.getElementById("coef_e").disabled = true;	
      document.getElementById("coef_e").value ="";	
      document.getElementById("coef_f").disabled = true;	
      document.getElementById("coef_f").value ="";
      document.getElementById("fx").disabled = true;	
      document.getElementById("fx").value ="";	
       document.getElementById("coef_a").disabled = false;		
       document.getElementById("coef_b").disabled = false;	
      document.getElementById("variÃ¡vel_x").disabled = false;		
   }
   try { 	}
       catch(e) {alert(e)}	  
    
  /** ******************************  raiz ou zero   *****************************  **/  
   if (a === "raiz_zero") {
      document.getElementById("variÃ¡vel_x").disabled = true;	
      document.getElementById("variÃ¡vel_x").value ="";	 
      document.getElementById("coef_c").disabled = true;	
      document.getElementById("coef_c").value ="";
      document.getElementById("coef_d").disabled = true;	
      document.getElementById("coef_d").value ="";
      document.getElementById("coef_e").disabled = true;	
      document.getElementById("coef_e").value ="";	
      document.getElementById("coef_f").disabled = true;	
      document.getElementById("coef_f").value ="";
       document.getElementById("coef_a").disabled = false;		
       document.getElementById("coef_b").disabled = false;	
       document.getElementById("fx").disabled = false;	
      
   }
   try { 	}
       catch(e) {alert(e)}	   
    
  /** ******************************   Sistema de equaÃ§Ãµes de 1Â° grau   *****************************  **/  
   if (a === "SistemaequaÃ§ao1grau") {
      document.getElementById("variÃ¡vel_x").disabled = true;	
      document.getElementById("variÃ¡vel_x").value ="";
      document.getElementById("fx").disabled = true;	
      document.getElementById("fx").value ="";		
      document.getElementById("coef_d").disabled = false;	
      document.getElementById("coef_e").disabled = false;	
      document.getElementById("coef_f").disabled = false;	
       document.getElementById("coef_a").disabled = false;		
       document.getElementById("coef_b").disabled = false;		
       document.getElementById("coef_c").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /** ******************************   Sistema de equaÃ§Ãµes de 1Â° grau   *****************************  **/  
   if (a === "SistemaequaÃ§ao1grauadicao") {
      document.getElementById("variÃ¡vel_x").disabled = true;	
      document.getElementById("variÃ¡vel_x").value ="";
      document.getElementById("fx").disabled = true;	
      document.getElementById("fx").value ="";		
      document.getElementById("coef_d").disabled = false;	
      document.getElementById("coef_e").disabled = false;	
      document.getElementById("coef_f").disabled = false;	
       document.getElementById("coef_a").disabled = false;		
       document.getElementById("coef_b").disabled = false;		
       document.getElementById("coef_c").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
      
  } 
   
  function primeirograu1() {
   var ddl = document.getElementById("ops");
   var selectedValue = ddl.options[ddl.selectedIndex].value;
      if (selectedValue == "")
     {
      alert("Escolha uma opÃ§Ã£o para Calcular!");
     } 	
      
    var a = document.forms["primeirograu"]["primeirograu_type"].value;
  /************************************  (fx)   ********************************************/  
    if (a === "f(x)") { 
      var coef_a = eval(document.primeirograu.coef_a.value.replace(",",".").replace(/ /g,""));
      var coef_b = eval(document.primeirograu.coef_b.value.replace(",",".").replace(/ /g,"")); 
      var variÃ¡vel_x = eval(document.primeirograu.variÃ¡vel_x.value.replace(",",".").replace(/ /g,"")); 
    
      if (isNaN(coef_a)) { alert("Digite um valor numÃ©rico para o coeficiente a!");
          document.primeirograu.coef_a.focus();
          document.primeirograu.coef_a.select();  
      return false;
          }
      if (isNaN(coef_b)) { alert("Digite um valor numÃ©rico para o coeficiente b!");
          document.primeirograu.coef_b.focus();
          document.primeirograu.coef_b.select();  
      return false;
      }
      if (isNaN(variÃ¡vel_x)) { alert("Digite um valor numÃ©rico para o incÃ³gnita x!");
          document.primeirograu.variÃ¡vel_x.focus();
          document.primeirograu.variÃ¡vel_x.select();  
      return false;
      }
      
  try {
      var coef_a = document.getElementById("resposta").value = roundNumber(coef_a, 2);
      var coef_b = document.getElementById("resposta").value = roundNumber(coef_b, 2);
      var variÃ¡vel_x = document.getElementById("resposta").value = roundNumber(variÃ¡vel_x, 2);	
      var result1 = coef_a * variÃ¡vel_x + coef_b;
      var result1 = document.getElementById("resposta").value = roundNumber(result1, 2); 
      var result2 = coef_a * variÃ¡vel_x;	
      var result2 = document.getElementById("resposta").value = roundNumber(result2, 2); 	
      
          document.getElementById('resposta').innerHTML = " <hr>  <div style='line-height: 25px;'>  O valor de <a style='font-family: times,helvica, sans-serif; font-style: italic; font-size: 17px; '>f</a>(x) Ã©: <br>  <a style='font-family: times,helvica, sans-serif; font-style: italic; font-size: 17px; '>f</a>(x) = ax + b <br>  <a style='font-family: times,helvica, sans-serif; font-style: italic; font-size: 17px; '>f</a>(<a1 style='color: #FF0000'>"+variÃ¡vel_x+"</a1>) =  "+coef_a+" âˆ™ ("+variÃ¡vel_x+") + ("+coef_b+") <br>  <a style='font-family: times,helvica, sans-serif; font-style: italic; font-size: 17px; '>f</a>(<a1 style='color: #FF0000'>"+variÃ¡vel_x+"</a1>) = "+result2+" + ("+coef_b+") <br>    <a style='font-family: times,helvica, sans-serif; font-style: italic; font-size: 17px; '>f</a>(<a1 style='color: #FF0000'>"+variÃ¡vel_x+"</a1>) = <a1 style='color: #FF0000'>"+result1+"</a1>" +"&nbsp </div> <hr><h1 class='logomarca'> BpW </h1>";
      
            document.primeirograu.coef_a.focus();
               document.primeirograu.coef_a.select(); 
  }
   catch(e) {alert(e)}
    }
  
  /************************************  raiz ou zero   ********************************************/  
    if (a === "raiz_zero") { 
      var coef_a = eval(document.primeirograu.coef_a.value.replace(",",".").replace(/ /g,""));
      var coef_b = eval(document.primeirograu.coef_b.value.replace(",",".").replace(/ /g,"")); 
      var fx = eval(document.primeirograu.fx.value.replace(",",".").replace(/ /g,"")); 
    
      if (isNaN(coef_a)) { alert("Digite um valor numÃ©rico para o coeficiente a!");
          document.primeirograu.coef_a.focus();
          document.primeirograu.coef_a.select();  
      return false;
          }
      if (isNaN(coef_b)) { alert("Digite um valor numÃ©rico para o coeficiente b!");
          document.primeirograu.coef_b.focus();
          document.primeirograu.coef_b.select();  
      return false;
      }
      if (isNaN(fx)) { alert("Digite um valor numÃ©rico para f(x)!");
          document.primeirograu.fx.focus();
          document.primeirograu.fx.select();  
      return false;
      }
      
  try {
      var coef_a = document.getElementById("resposta").value = roundNumber(coef_a, 2);
      var coef_b = document.getElementById("resposta").value = roundNumber(coef_b, 2);
      var fx = document.getElementById("resposta").value = roundNumber(fx, 2);	
      var result1 = (fx - coef_b)/coef_a;
      var result1 = document.getElementById("resposta").value = roundNumber(result1, 2); 	
      var result2 = fx - coef_b;	
      var result2 = document.getElementById("resposta").value = roundNumber(result2, 2); 	
      var result3 = -(coef_b);	
      var result3 = document.getElementById("resposta").value = roundNumber(result3, 2); 	
      
          document.getElementById('resposta').innerHTML = " <hr> <div style='line-height: 25px;'>  O valor de <a style='font-family: times,helvica, sans-serif; font-style: italic; font-size: 17px; '>x</a> Ã©: <br>  <a style='font-family: times,helvica, sans-serif; font-style: italic; font-size: 17px; '>f</a>(x) = ax + b <br>  "+fx+" = "+coef_a+" âˆ™ x + ("+coef_b+") <br>  "+fx+" - ("+coef_b+") = "+coef_a+" x <br>  "+fx+" + ("+result3+") = "+coef_a+" x <br>  "+result2+" = "+coef_a+" x  &emsp;  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> x &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+result2+" </td></tr><tr><td style='text-align:center;'> "+coef_a+" </td></tr></tbody></table>   <a style='font-family: times,helvica, sans-serif; font-style: italic; font-size: 17px; '>x</a>  = <a1 style='color: #FF0000'>"+result1+"</a1>" +"&nbsp </div> <hr><h1 class='logomarca'> BpW </h1>";
      
            document.primeirograu.coef_a.focus();
               document.primeirograu.coef_a.select(); 
  }
   catch(e) {alert(e)}
    }
  
   
  /*************************  Sistema de equaÃ§Ã£o de 1Â° grau - mÃ©todo da substituiÃ§Ã£o   ***********************/  
    if (a === "SistemaequaÃ§ao1grau") { 
      var coef_a = eval(document.primeirograu.coef_a.value.replace(",",".").replace(/ /g,""));
      var coef_b = eval(document.primeirograu.coef_b.value.replace(",",".").replace(/ /g,"")); 
      var coef_c = eval(document.primeirograu.coef_c.value.replace(",",".").replace(/ /g,""));   
      var coef_d = eval(document.primeirograu.coef_d.value.replace(",",".").replace(/ /g,"")); 
      var coef_e = eval(document.primeirograu.coef_e.value.replace(",",".").replace(/ /g,"")); 
      var coef_f = eval(document.primeirograu.coef_f.value.replace(",",".").replace(/ /g,"")); 	
    
      if (isNaN(coef_a) ) { alert("Digite um valor numÃ©rico para o coeficiente a!");
          document.primeirograu.coef_a.focus();
          document.primeirograu.coef_a.select();  
      return false;
    }
      if (isNaN(coef_b)) { alert("Digite um valor numÃ©rico para o coeficiente b!");
          document.primeirograu.coef_b.focus();
          document.primeirograu.coef_b.select();  
      return false;
    }
      if (isNaN(coef_c) ) { alert("Digite um valor numÃ©rico para o coeficiente c!");
          document.primeirograu.coef_c.focus();
          document.primeirograu.coef_c.select();  
      return false;
    }
      if (isNaN(coef_d) ) { alert("Digite um valor numÃ©rico para o coeficiente d!");
          document.primeirograu.coef_d.focus();
          document.primeirograu.coef_d.select();  
      return false;
    }  
      if (isNaN(coef_e) ) { alert("Digite um valor numÃ©rico para o coeficiente e!");
          document.primeirograu.coef_e.focus();
          document.primeirograu.coef_e.select();  
      return false;
    }  
      if (isNaN(coef_f) ) { alert("Digite um valor numÃ©rico para o coeficiente f!");
          document.primeirograu.coef_f.focus();
          document.primeirograu.coef_f.select();  
      return false;
    }  
  
  try {
   var coef_a = document.getElementById("resposta").value = roundNumber(coef_a, 2);
   var coef_b = document.getElementById("resposta").value = roundNumber(coef_b, 2);
   var coef_c = document.getElementById("resposta").value = roundNumber(coef_c, 2);	
   var coef_d = document.getElementById("resposta").value = roundNumber(coef_d, 2);	
   var coef_e = document.getElementById("resposta").value = roundNumber(coef_e, 2);	
   var coef_f = document.getElementById("resposta").value = roundNumber(coef_f, 2);		
   var result1 = coef_a / coef_d; 
   var result1 = document.getElementById("resposta").value = roundNumber(result1, 2);  
   var result2 = result1 * coef_f; 
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 2);   
   var result3 = result1 * coef_e;
   var result3 = document.getElementById("resposta").value = roundNumber(result3, 2);   
   var result4 =  -result3 + coef_b; 
   var result4 = document.getElementById("resposta").value = roundNumber(result4, 2);   
   var result5 = coef_c - result2;
   var result5 = document.getElementById("resposta").value = roundNumber(result5, 2);   
   var result7 = coef_c - result2 ;
   var result7 = document.getElementById("resposta").value = roundNumber(result7, 2);   
   var result8 = result7 / result4 ; 
   var result8 = document.getElementById("resposta").value = roundNumber(result8, 2);  
   var result9 = result8 * coef_e ;  
   var result9 = document.getElementById("resposta").value = roundNumber(result9, 2);   
   var result10 = -result9 + coef_f ;
   var result10 = document.getElementById("resposta").value = roundNumber(result10, 2);   
   var result11 = result10 / coef_d ;
   var result11 = document.getElementById("resposta").value = roundNumber(result11, 2);   
   var deter1 = coef_a / coef_d ;
   var deter1 = document.getElementById("resposta").value = roundNumber(deter1, 2);  
   var deter2 = coef_b / coef_e ;
   var deter2 = document.getElementById("resposta").value = roundNumber(deter2, 2);  
   var deter3 = coef_c / coef_f ;
   var deter3 = document.getElementById("resposta").value = roundNumber(deter3, 2);  
  
    if (deter1 != deter2) { 
            document.getElementById('resposta').innerHTML = " <hr>  Resolvendo o sistema pelo mÃ©todo da substituiÃ§Ã£o: <br> <table> <td style='  border-left: 1.8px solid ; border-radius: 5px 0px 0px 5px;   width: 300px; '><a1> "+coef_a+"<a1 style='font-family: times new roman; font-size: 15px; font-style:italic;'>x</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 15px; font-style:italic;'>y</a1> = "+coef_c+" &nbsp;<a style='color:#0000ff'> (I) </a></a1> <br>  <a1 style=' font-size: 14px;>  <a1> "+coef_d+"<a1 style='font-family: times new roman; font-size: 14px; font-style:italic;'>x</a1> + ("+coef_e+")<a1 style='font-family: times new roman; font-size: 14px; font-style:italic;'>y</a1> = "+coef_f+" &ensp; â†’&ensp;  "+coef_d+"<a1 style='font-family: times new roman; font-size: 14px; font-style:italic;'>x</a1> = "+coef_f+" - ("+coef_e+")<a1 style='font-family: times new roman; font-size: 14px; font-style:italic;'>y</a1> </a1> </a1> </td></table> <div style='line-height: 14px; margin-left: 145px;'>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-size: 14px; font-style:italic;'>x</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+coef_f+" - ("+coef_e+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> </td> <td style='color:#0000ff'>  &nbsp;&nbsp; (II)</td></tr><tr><td style='text-align:center;'> "+coef_d+" </td></tr></tbody></table> </div> Agora, substituindo a equaÃ§Ã£o (II) na (I), temos: <br> "+coef_a+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" <br> <div style='line-height: 14px; '>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>"+coef_a+" âˆ™   </td>  <td style='border-bottom:solid 1.3px'> ("+coef_f+" - ("+coef_e+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1>) </td>  <td rowspan='2'>  </td>  <td rowspan='2'> &nbsp; + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" </td></tr> <tr> <td> "+coef_d+" </td> </tr></tbody></table> </div>  "+result1+" âˆ™ ("+coef_f+" - ("+coef_e+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1>)) + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+"  <br>  "+result2+" - ("+result3+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+"  <br>  "+result4+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1>  = "+coef_c+"  - ("+result2+") <br>  "+result4+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1>  = "+result5+" <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> =&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+result7+" </td>  <td rowspan='2'> &nbsp;=&nbsp; </td>  <td rowspan='2'>  <a1 style='color: #FF0000'> "+result8+"</a1> </td></tr> <tr> <td> "+result4+" </td> </tr></tbody></table> </div> <br> Agora, para encontrar o valor de <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1>, devemos substituir <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> na equaÃ§Ã£o (II): <br>  <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> =&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+coef_f+" - ("+coef_e+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> </td></tr><tr><td style='text-align:center;'> "+coef_d+" </td></tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+coef_f+" - ("+coef_e+") âˆ™ ("+result8+") </td></tr><tr><td style='text-align:center;'> "+coef_d+" </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+coef_f+" - ("+result9+") </td></tr><tr><td style='text-align:center;'> "+coef_d+" </td></tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+result10+" </td>  <td rowspan='2'> &nbsp;=&nbsp; </td>  <td rowspan='2'> <a1 style='color: #FF0000'> "+result11+" </a1> </td></tr> <tr> <td> "+coef_d+" </td> </tr></tbody></table>   </div>  <br> Logo, a soluÃ§Ã£o do sistema Ã©: <br> S = {(<a1 style='color: #FF0000'>"+result11+"</a1>, <a1 style='color: #FF0000'>"+result8+"</a1>)}.   <hr><h1 class='logomarca'> BpW </h1> ";
  
            document.primeirograu.coef_a.focus();
               document.primeirograu.coef_a.select(); 
          return false;	  
         }
         
    if ( (deter2 != deter3)) { 
            document.getElementById('resposta').innerHTML = " <hr> Resolvendo o sistema pelo mÃ©todo da substituiÃ§Ã£o:  <br><table> <td style='  border-left: 1.8px solid ; border-radius: 5px 0px 0px 5px;   width: 300px; '><a1> "+coef_a+"<a1 style='font-family: times new roman; font-size: 15px; font-style:italic;'>x</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 15px; font-style:italic;'>y</a1> = "+coef_c+" &nbsp; <a style='color:#0000ff'> (I) </a></a1> <br> <a1> "+coef_d+"<a1 style='font-family: times new roman; font-size: 15px; font-style:italic;'>x</a1> + ("+coef_e+")<a1 style='font-family: times new roman; font-size: 15px; font-style:italic;'>y</a1> = "+coef_f+" &ensp; â†’ &ensp; "+coef_d+"<a1 style='font-family: times new roman; font-size: 15px; font-style:italic;'>x</a1> = "+coef_f+" - ("+coef_e+")<a1 style='font-family: times new roman; font-size: 15px; font-style:italic;'>y</a1> </a1> </td></table> <div style='line-height: 14px; margin-left: 145px;'><table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1>  &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+coef_f+" - ("+coef_e+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td>  <td style='color:#0000ff' rowspan='2'> &nbsp; (II) </td></tr> <tr> <td> "+coef_d+" </td> </tr></tbody></table> </div>  Agora, substituindo a equaÃ§Ã£o (II) na (I), temos: <br> "+coef_a+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" <br>   <div style='line-height: 14px; '>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> "+coef_a+" âˆ™  </td>  <td style='border-bottom:solid 1.3px'> ("+coef_f+" - ("+coef_e+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1>) </td>  <td rowspan='2'>  </td>  <td rowspan='2'> &nbsp; + "+coef_b+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" </td></tr> <tr> <td> "+coef_d+" </td> </tr></tbody></table>  </div>  "+result1+" âˆ™ ("+coef_f+" - ("+coef_e+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1>)) + "+coef_b+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+"  <br>  "+result2+" - ("+result3+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+"  <br>  "+result4+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1>  = "+coef_c+"  - ("+result2+") <br> "+result4+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1>  = "+result5+" <br><br>  Logo, o <a1 style='color: #FF0000'>sistema Ã© impossÃ­vel</a1> (S.I).<br> Ou seja, NÃƒO tem soluÃ§Ã£o.  <hr><h1 class='logomarca'> BpW </h1> ";
  
            document.primeirograu.coef_a.focus();
           document.primeirograu.coef_a.select(); 
          return false;		 
          }
  
    if ( (deter2 == deter3)) {  
            document.getElementById('resposta').innerHTML = "<hr> Resolvendo o sistema pelo mÃ©todo da substituiÃ§Ã£o:  <br>  <table> <td style='  border-left: 1.8px solid ; border-radius: 5px 0px 0px 5px;   width: 300px; '><a1> "+coef_a+"<a1 style='font-family: times new roman; font-size: 15px; font-style:italic;'>x</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 15px; font-style:italic;'>y</a1> = "+coef_c+" &nbsp;<a style='color:#0000ff'> (I) </a></a1> <br> <a1> "+coef_d+"<a1 style='font-family: times new roman; font-size: 15px; font-style:italic;'>x</a1> +("+coef_e+")<a1 style='font-family: times new roman; font-size: 15px; font-style:italic;'>y</a1> ="+coef_f+" &ensp; â†’&ensp; "+coef_d+"<a1 style='font-family: times new roman; font-size: 15px; font-style:italic;'>x</a1> = "+coef_f+" - ("+coef_e+")<a1 style='font-family: times new roman; font-size: 15px; font-style:italic;'>y</a1> </a1> </td></table> <div style='line-height: 14px; margin-left: 145px;'>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+coef_f+" - ("+coef_e+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td>  <td style='color:#0000ff' rowspan='2'> &nbsp; (II) </td></tr> <tr> <td> "+coef_d+" </td> </tr></tbody></table> </div>  Agora, substituindo a equaÃ§Ã£o (II) na (I), temos: <br> "+coef_a+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" <br>   <div style='line-height: 14px; '>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> "+coef_a+" âˆ™  </td>  <td style='border-bottom:solid 1.3px'> ("+coef_f+" - ("+coef_e+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1>) </td>  <td rowspan='2'>   </td>  <td rowspan='2'> &nbsp; + "+coef_b+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" </td></tr> <tr> <td> "+coef_d+"  </td> </tr></tbody></table>  </div>  "+result1+" âˆ™ ("+coef_f+" - ("+coef_e+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1>)) + "+coef_b+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+"  <br>  "+result2+" - ("+result3+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+"  <br>  "+result4+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1>  = "+coef_c+"  - ("+result2+") <br>  "+result4+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1>  = "+result5+" <br><br>  Logo, o sistema Ã©<a1 style='color: #FF0000'> possÃ­vel e indeterminado</a1> (S.P.I). Ou seja, tem <a1 style='color: #FF0000'>infinitas</a1> soluÃ§Ãµes.  <hr><h1 class='logomarca'> BpW </h1> ";
      
           document.primeirograu.coef_a.focus();
           document.primeirograu.coef_a.select(); 
          }
       } 
       catch(e) {alert(e)}
    }  
  
    
   /** *********************  Sistema de equaÃ§Ã£o de 1Â° grau - mÃ©todo da adiÃ§Ã£o   ******************************  **/  
    if (a === "SistemaequaÃ§ao1grauadicao") { 
      var coef_a = eval(document.primeirograu.coef_a.value.replace(",",".").replace(/ /g,""));
      var coef_b = eval(document.primeirograu.coef_b.value.replace(",",".").replace(/ /g,"")); 
      var coef_c = eval(document.primeirograu.coef_c.value.replace(",",".").replace(/ /g,""));   
      var coef_d = eval(document.primeirograu.coef_d.value.replace(",",".").replace(/ /g,"")); 
      var coef_e = eval(document.primeirograu.coef_e.value.replace(",",".").replace(/ /g,"")); 
      var coef_f = eval(document.primeirograu.coef_f.value.replace(",",".").replace(/ /g,"")); 	
    
      if (isNaN(coef_a) ) { alert("Digite um valor numÃ©rico para o coeficiente a!");
          document.primeirograu.coef_a.focus();
          document.primeirograu.coef_a.select();  
      return false;
    }
      if (isNaN(coef_b)) { alert("Digite um valor numÃ©rico para o coeficiente b!");
          document.primeirograu.coef_b.focus();
          document.primeirograu.coef_b.select();  
      return false;
    }
      if (isNaN(coef_c) ) { alert("Digite um valor numÃ©rico para o coeficiente c!");
          document.primeirograu.coef_c.focus();
          document.primeirograu.coef_c.select();  
      return false;
    }
      if (isNaN(coef_d) ) { alert("Digite um valor numÃ©rico para o coeficiente d!");
          document.primeirograu.coef_d.focus();
          document.primeirograu.coef_d.select();  
      return false;
    }  
      if (isNaN(coef_e) ) { alert("Digite um valor numÃ©rico para o coeficiente e!");
          document.primeirograu.coef_e.focus();
          document.primeirograu.coef_e.select();  
      return false;
    }  
      if (isNaN(coef_f) ) { alert("Digite um valor numÃ©rico para o coeficiente f!");
          document.primeirograu.coef_f.focus();
          document.primeirograu.coef_f.select();  
      return false;
    }  
    
  try {
   var coef_a = document.getElementById("resposta").value = roundNumber(coef_a, 2);
   var coef_b = document.getElementById("resposta").value = roundNumber(coef_b, 2);
   var coef_c = document.getElementById("resposta").value = roundNumber(coef_c, 2);	
   var coef_d = document.getElementById("resposta").value = roundNumber(coef_d, 2);	
   var coef_e = document.getElementById("resposta").value = roundNumber(coef_e, 2);	
   var coef_f = document.getElementById("resposta").value = roundNumber(coef_f, 2);	
   var result1 = coef_a + coef_d; 
   var result1 = document.getElementById("resposta").value = roundNumber(result1, 2); 
   var result2 = coef_c + coef_f; 
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 2);
   var result3 = result2 / result1; 
   var result3 = document.getElementById("resposta").value = roundNumber(result3, 2);
   var result4 = coef_a * result3; 
   var result4 = document.getElementById("resposta").value = roundNumber(result4, 2); 
   var result5 = coef_c - result4;  
   var result5 = document.getElementById("resposta").value = roundNumber(result5, 2); 
   var result6 = result5 / coef_b; 
   var result6 = document.getElementById("resposta").value = roundNumber(result6, 2);
   var cond1 = coef_b / coef_e ; 
   var cond1 = document.getElementById("resposta").value = roundNumber(cond1, 2);		
   var deter1 = coef_a / coef_d ;
   var deter1 = document.getElementById("resposta").value = roundNumber(deter1, 2);	
   var deter2 = coef_b / coef_e ;
   var deter2 = document.getElementById("resposta").value = roundNumber(deter2, 2);	 
   var deter3 = coef_c / coef_f ;
   var deter3 = document.getElementById("resposta").value = roundNumber(deter3, 2);	
   var mult1 = -coef_e * coef_a   ; 
   var mult1 = document.getElementById("resposta").value = roundNumber(mult1, 2);	 
   var mult2 = -coef_e * coef_b   ; 
   var mult2 = document.getElementById("resposta").value = roundNumber(mult2, 2);	 
   var mult3 = -coef_e * coef_c   ; 
   var mult3 = document.getElementById("resposta").value = roundNumber(mult3, 2);	 
   var mult4 = coef_b * coef_d   ; 
   var mult4 = document.getElementById("resposta").value = roundNumber(mult4, 2);	 
   var mult5 = coef_b * coef_e   ; 	
   var mult5 = document.getElementById("resposta").value = roundNumber(mult5, 2);	 
   var mult6 = coef_b * coef_f   ; 
   var mult6 = document.getElementById("resposta").value = roundNumber(mult6, 2);	
   var mult7 = mult1 + mult4 ;
   var mult7 = document.getElementById("resposta").value = roundNumber(mult7, 2);	 
   var mult8 = mult3 + mult6 ;	
   var mult8 = document.getElementById("resposta").value = roundNumber(mult8, 2);	 
   var mult9 = mult8 / mult7 ;	
   var mult9 = document.getElementById("resposta").value = roundNumber(mult9, 2);	 
   var mult10 = coef_a * mult9 ;
   var mult10 = document.getElementById("resposta").value = roundNumber(mult10, 2);	 
   var mult11 = coef_c - mult10 ;
   var mult11 = document.getElementById("resposta").value = roundNumber(mult11, 2);	 
   var mult12 = mult11 / coef_b  ;
   var mult12 = document.getElementById("resposta").value = roundNumber(mult12, 2);	 
   var mult13 = - coef_e  ;
   var mult13 = document.getElementById("resposta").value = roundNumber(mult13, 2);	
          
      if ((deter1 != deter2) && (cond1 == -1) ) {          
   
          document.getElementById('resposta').innerHTML = " <hr> Resolvendo o sistema pelo mÃ©todo da adiÃ§Ã£o:  <br> <table>  <td style='  border-left: 1.8px solid ; border-radius: 5px 0px 0px 5px;   width: 300px; '><a1> "+coef_a+"<a1 style='font-family: times new roman;  font-size: 16px; font-style:italic; '>x</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+"  </a1> <br> <a1> "+coef_d+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> + ("+coef_e+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_f+" </td>  </table>   <hr style='height:1.4px; border:none; width: 180px; color:#000; background-color:#000; margin: 0 0 0 5px;'/> &ensp; "+result1+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> &emsp;= &ensp; "+result2+"  <br> <div style='line-height: 14px; '>         <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+result2+" </td></tr><tr><td style='text-align:center;'> "+result1+" </td></tr></tbody></table>  </div> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> = <a1 style='color: #FF0000'>"+result3+"</a1> </div> <br><br>  Agora, encontrar o valor de y. <br>   <a1> "+coef_a+"<a1 style='font-family: times new roman;  font-size: 16px; font-style:italic; '>x</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" </a1> <br>  <a1> "+coef_a+" âˆ™ "+result3+" + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+"  </a1> <br>  <a1> "+result4+" + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+"  </a1> <br>   <a1>  "+coef_b+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" - ("+result4+")  </a1> <br>  <a1>  "+coef_b+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+result5+"  </a1> <br>   <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> y &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+result5+" </td></tr><tr><td style='text-align:center;'> "+coef_b+" </td></tr></tbody></table>     </div> y = <a1 style='color: #FF0000'>"+result6+"</a1> <br><br> Logo, S = {(<a1 style='color: #FF0000'>"+result3+"</a1>,&nbsp; <a1 style='color: #FF0000'>"+result6+"</a1>)}      <hr><h1 class='logomarca'> BpW </h1> ";
  
            document.primeirograu.coef_a.focus();
               document.primeirograu.coef_a.select(); 
              return false;					  
          } 
   
       if ( (deter1 != deter2) && (cond1 != -1)  ) { 
      
            document.getElementById('resposta').innerHTML = "<hr> Resolvendo o sistema pelo mÃ©todo da adiÃ§Ã£o:  <br> <table>  <td style='  border-left: 1.8px solid ; border-radius: 5px 0px 0px 5px;   width: 300px; '><a1> "+coef_a+"<a1 style='font-family: times new roman;  font-size: 16px; font-style:italic; '>x</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" &emsp; (I)  </a1> <br> <a1> "+coef_d+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> + ("+coef_e+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_f+" &emsp; (II)</td> </table> <br> Multiplicando a equaÃ§Ã£o (I) por <a1 style='color: #FF0000'>"+mult13+"</a1> e a equaÃ§Ã£o (II) por <a1 style='color: #FF0000'>"+coef_b+"</a1>. <br>  <table>  <td style='  border-left: 1.8px solid ; border-radius: 5px 0px 0px 5px;   width: 300px; '><a1> "+coef_a+"<a1 style='font-family: times new roman;  font-size: 16px; font-style:italic; '>x</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" &emsp; Ã— (<a1 style='color: #FF0000'>"+mult13+"</a1>)  </a1> <br> <a1> "+coef_d+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> + ("+coef_e+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_f+" &emsp; Ã— (<a1 style='color: #FF0000'>"+coef_b+")</td> </table>  <br> <table>  <td style='  border-left: 1.8px solid ; border-radius: 5px 0px 0px 5px;  width: 300px; '><a1> "+mult1+"<a1 style='font-family: times new roman;  font-size: 16px; font-style:italic; '>x</a1> + ("+mult2+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+mult3+"  </a1>  </a1> <br> <a1> "+mult4+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> + ("+mult5+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+mult6+"  </td> </table>  <hr style='height:1.4px; border:none; width: 180px; color:#000; background-color:#000; text-align: left; margin: 0 0 0 5px;'/> &ensp; "+mult7+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> &emsp;= &ensp; "+mult8+" <br> <div style='line-height: 14px; '> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+mult8+" </td></tr><tr><td style='text-align:center;'> "+mult7+" </td></tr></tbody></table> </div> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> = <a1 style='color: #FF0000'>"+mult9+"</a1> </div> <br><br>  Agora, encontrar o valor de <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1>. <br>   <a1> "+coef_a+"<a1 style='font-family: times new roman;  font-size: 16px; font-style:italic; '>x</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" </a1> <br>  <a1> "+coef_a+" âˆ™ ("+mult9+") + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+"  </a1> <br> <a1> "+mult10+" + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" </a1> <br> <a1>  "+coef_b+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" - ("+mult10+")  </a1> <br> <a1>  "+coef_b+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+mult11+"  </a1> <br>  <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+mult11+" </td></tr><tr><td style='text-align:center;'> "+coef_b+" </td></tr></tbody></table>   </div>  <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = <a1 style='color: #FF0000'>"+mult12+"</a1> <br><br> Logo, a soluÃ§Ã£o Ã©: <br>  S = {(<a1 style='color: #FF0000'>"+mult9+"</a1>,&nbsp; <a1 style='color: #FF0000'>"+mult12+"</a1>)}   <hr><h1 class='logomarca'> BpW </h1> ";
  
            document.primeirograu.coef_a.focus();
               document.primeirograu.coef_a.select(); 
               return false; 
           }	 
       
           if  ((deter2 != deter3)   ) { 
            document.getElementById('resposta').innerHTML = " <hr> Resolvendo o sistema pelo mÃ©todo da adiÃ§Ã£o:  <br> <table>  <td style='  border-left: 1.8px solid ; border-radius: 5px 0px 0px 5px;   width: 300px; '><a1> "+coef_a+"<a1 style='font-family: times new roman;  font-size: 16px; font-style:italic; '>x</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" &emsp; (I)  </a1> <br> <a1> "+coef_d+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> + ("+coef_e+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_f+" &emsp; (II)</td> </table>  Multiplicando a equaÃ§Ã£o (I) por <a1 style='color: #FF0000'>"+mult13+"</a1> e a equaÃ§Ã£o (II) por <a1 style='color: #FF0000'>"+coef_b+"</a1>. <br>  <table>  <td style='  border-left: 1.8px solid ; border-radius: 5px 0px 0px 5px;   width: 300px; '><a1> "+coef_a+"<a1 style='font-family: times new roman;  font-size: 16px; font-style:italic; '>x</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" &emsp; Ã— (<a1 style='color: #FF0000'>"+mult13+"</a1>)  </a1> <br> <a1> "+coef_d+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> + ("+coef_e+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_f+" &emsp; Ã— (<a1 style='color: #FF0000'>"+coef_b+")</td> </table>  <br> <table>  <td style='  border-left: 1.8px solid ; border-radius: 5px 0px 0px 5px;   width: 300px; '><a1> "+mult1+"<a1 style='font-family: times new roman;  font-size: 16px; font-style:italic; '>x</a1> + ("+mult2+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+mult3+"  </a1>  </a1> <br> <a1> "+mult4+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> + ("+mult5+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+mult6+"  </td> </table>  <hr style='height:1.4px; text-align: left; border:none; width: 180px; color:#000; background-color:#000; margin: 0 0 0 5px;'/> &ensp; "+mult7+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> &emsp;= &ensp; "+mult8+"  <br><br>   Logo, o <a1 style='color: #FF0000'>sistema Ã© impossÃ­vel</a1> (S.I).<br> Ou seja, NÃƒO tem soluÃ§Ã£o.  <hr><h1 class='logomarca'> BpW </h1> ";
  
           document.primeirograu.coef_a.focus();
           document.primeirograu.coef_a.select(); 
              return false;		 
          } 
       
           if (  (deter2 == deter3) ) { 
            document.getElementById('resposta').innerHTML = "<hr> Resolvendo o sistema pelo mÃ©todo da adiÃ§Ã£o:  <br> <table>  <td style='  border-left: 1.8px solid ; border-radius: 5px 0px 0px 5px;   width: 300px; '><a1> "+coef_a+"<a1 style='font-family: times new roman;  font-size: 16px; font-style:italic; '>x</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" &emsp; (I)  </a1> <br> <a1> "+coef_d+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> + ("+coef_e+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_f+" &emsp; (II)</td> </table>  Multiplicando a equaÃ§Ã£o (I) por <a1 style='color: #FF0000'>"+mult13+"</a1> e a equaÃ§Ã£o (II) por <a1 style='color: #FF0000'>"+coef_b+"</a1>. <br>  <table>  <td style='  border-left: 1.8px solid ; border-radius: 5px 0px 0px 5px;   width: 300px; '><a1> "+coef_a+"<a1 style='font-family: times new roman;  font-size: 16px; font-style:italic; '>x</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" &emsp; Ã— (<a1 style='color: #FF0000'>"+mult13+"</a1>)  </a1> <br> <a1> "+coef_d+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> + ("+coef_e+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_f+" &emsp; Ã— (<a1 style='color: #FF0000'>"+coef_b+")</td> </table>  <br> <table>  <td style='  border-left: 1.8px solid ; border-radius: 5px 0px 0px 5px;   width: 300px; '><a1> "+mult1+"<a1 style='font-family: times new roman;  font-size: 16px; font-style:italic; '>x</a1> + ("+mult2+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+mult3+"  </a1>  </a1> <br> <a1> "+mult4+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> + ("+mult5+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+mult6+"  </td> </table>  <hr style='height:1.4px; border:none; text-align: left; width: 180px; color:#000; background-color:#000; margin: 0 0 0 5px;'/> &ensp; "+mult7+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> &emsp;= &ensp; "+mult8+"  <br><br>  Logo, o sistema Ã©<a1 style='color: #FF0000'> possÃ­vel e indeterminado</a1> (S.P.I). Ou seja, tem <a1 style='color: #FF0000'>infinitas</a1> soluÃ§Ãµes.  <hr><h1 class='logomarca'> BpW </h1> ";
      
           document.primeirograu.coef_a.focus();
           document.primeirograu.coef_a.select(); 
              return false;		 
          }
       }
       catch(e) {alert(e)}
    }
    
   }   
    
  
  
  /***#############################################              ######################################################      **/
  /***#############################################   FATORAÃ‡ÃƒO  #####################################################      **/
  
  ar_fat_prm = {2:0,3:0,5:0,7:0};
  
  function lstQuoc( nr ){
      var lst_quoc = ''; //vai guardar a lista de quocientes
      var tem_div = false;
   for(var prm in ar_fat_prm){
    if(nr % prm == 0 && !tem_div){
              tem_div = true;
              lst_quoc += nr / prm +',';
     if( nr / prm > 1){
      lst_quoc += lstQuoc( nr / prm );
     }
          }
      }
   return ( !tem_div )? lst_quoc += nr / nr+',' : lst_quoc;
  }
  function lstFatPrm( nr ){
      var lst_fat = ''; //vai guardar a lista de fatores
      var tem_div = false;
   for(var prm in ar_fat_prm){
    if(nr % prm == 0 && !tem_div){
              tem_div = true;
     //document.write('prm: '+ prm );
              lst_fat += prm +',';
     if( nr / prm > 1){
      lst_fat += lstFatPrm( nr / prm);
     }
          }
      }
   lst_fat += (!tem_div)? nr+',' : '';
      return lst_fat ;
  }
  function exibFat(nr, quoc, fat ){
   var lst_div = nr +','+ quoc.replace(/,$/,'');
   var lst_fat = fat.replace(/,$/,'');
   var ar_div = lst_div.split(',');
   var ar_fat = lst_fat.split(',');
   var last_key = ar_div.length - 1;
      var tbl_fat = '<br><table border="0">';
      for(var key in ar_div){
          if( key < last_key){
              tbl_fat += '<tr><td>'+ ar_div[key] +'</td><td>| '+ ar_fat[key] +'</td></tr>';
          }else{
              tbl_fat += '<tr><td>'+ ar_div[key] +'</td><td>|  = '+ exibFatExp(ar_fat) +'</td></tr>';
          }
      }
      return tbl_fat +='</table>';
  }
  function exibFatExp( ar_fat ){ //Exibe fatores com expoente
      var ar_prm = new Object();
   for(var key in ar_fat){
    if(!ar_prm.hasOwnProperty( ar_fat[key] )){
     ar_prm[ ar_fat[key] ] = 1;
    }else{
     ar_prm[ ar_fat[key]]++;
    }
   }
      var str_prm = '';
      for(var key in ar_prm){
          str_prm += ' '+ key +'<sup>'+ ar_prm[key] +'</sup> âˆ™';
      }
    str_prm = str_prm.substring(0, str_prm.length - 1);  // elimina o Ãºltimo ponto 
   return str_prm.replace(/x$/,'');
  }
  function execute(){
     var str = '';
     var lst_quoc = lstQuoc( getNumero() );
     var lst_fat = lstFatPrm( getNumero() );
     str += 'DecomposiÃ§Ã£o:'+ exibFat( getNumero(), lst_quoc, lst_fat ) + '<h1 class="logomarca"> BpW </h1>';
     imprima(str);
  }
  function getNumero(){
    num = document.getElementById('numero');
    return parseInt(num.value);
  }
  
  function imprima(htm){
    document.getElementById('result').innerHTML = htm;
  }
  
  
  
  
  /***#########################################                       ####################################     **/
  /***#########################################  GEOMETRIA ANALÃTICA  ####################################     **/
  
  function Geom_Analit2() {
    var a = document.forms["Geom_Analit"]["Geom_Analit_type"].value;
  /** ******************************   DistÃ¢ncia entre 2 pontos   *****************************  **/  
   if (a === "Dist_2_pontos") {
      document.getElementById("x_c").disabled = true;	
      document.getElementById("x_c").value ="";
      document.getElementById("y_c").disabled = true;	
      document.getElementById("y_c").value ="";
      document.getElementById("coefangular_m").disabled = true;	
      document.getElementById("coefangular_m").value ="";	
      document.getElementById("angulo_Î±").disabled = true;	
      document.getElementById("angulo_Î±").value ="";		
      document.getElementById("raio").disabled = true;	
      document.getElementById("raio").value ="";	
      document.getElementById("coef_a").disabled = true;	
      document.getElementById("coef_a").value ="";
      document.getElementById("coef_b").disabled = true;	
      document.getElementById("coef_b").value ="";	
      document.getElementById("coef_c").disabled = true;	
      document.getElementById("coef_c").value ="";
       document.getElementById("x_a").disabled = false;		
       document.getElementById("x_b").disabled = false;		
       document.getElementById("y_a").disabled = false;
       document.getElementById("y_b").disabled = false;
   }
   try { 	}
       catch(e) {alert(e)}
      
  /** ******************************  Ponto MÃ©dio   *****************************  **/  
   if (a === "ponto_medio") {
      document.getElementById("x_c").disabled = true;	
      document.getElementById("x_c").value ="";
      document.getElementById("y_c").disabled = true;	
      document.getElementById("y_c").value ="";
      document.getElementById("coefangular_m").disabled = true;	
      document.getElementById("coefangular_m").value ="";	
      document.getElementById("angulo_Î±").disabled = true;	
      document.getElementById("angulo_Î±").value ="";		
      document.getElementById("raio").disabled = true;	
      document.getElementById("raio").value ="";	
      document.getElementById("coef_a").disabled = true;	
      document.getElementById("coef_a").value ="";
      document.getElementById("coef_b").disabled = true;	
      document.getElementById("coef_b").value ="";	
      document.getElementById("coef_c").disabled = true;	
      document.getElementById("coef_c").value ="";	
       document.getElementById("x_a").disabled = false;		
       document.getElementById("x_b").disabled = false;		
       document.getElementById("y_a").disabled = false;
       document.getElementById("y_b").disabled = false;
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /** ******************************  condiÃ§Ã£o de alinhamento de 3 pontos   *****************************  **/  
   if (a === "condicao_alinhamento") {
      document.getElementById("coefangular_m").disabled = true;	
      document.getElementById("coefangular_m").value ="";	
      document.getElementById("angulo_Î±").disabled = true;	
      document.getElementById("angulo_Î±").value ="";		
      document.getElementById("raio").disabled = true;	
      document.getElementById("raio").value ="";	
      document.getElementById("coef_a").disabled = true;	
      document.getElementById("coef_a").value ="";
      document.getElementById("coef_b").disabled = true;	
      document.getElementById("coef_b").value ="";	
      document.getElementById("coef_c").disabled = true;	
      document.getElementById("coef_c").value ="";	
       document.getElementById("x_a").disabled = false;		
       document.getElementById("x_b").disabled = false;		
       document.getElementById("y_a").disabled = false;
       document.getElementById("y_b").disabled = false;
      document.getElementById("x_c").disabled = false;	
      document.getElementById("y_c").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /** ******************************  EquaÃ§Ã£o da reta (2 pontos)   *****************************  **/  
   if (a === "equac_da_reta_2_pontos") {
      document.getElementById("coefangular_m").disabled = true;	
      document.getElementById("coefangular_m").value ="";
      document.getElementById("x_c").disabled = true;	
      document.getElementById("x_c").value ="";	
      document.getElementById("y_c").disabled = true;	
      document.getElementById("y_c").value ="";
      document.getElementById("angulo_Î±").disabled = true;	
      document.getElementById("angulo_Î±").value ="";		
      document.getElementById("raio").disabled = true;	
      document.getElementById("raio").value ="";	
      document.getElementById("coef_a").disabled = true;	
      document.getElementById("coef_a").value ="";
      document.getElementById("coef_b").disabled = true;	
      document.getElementById("coef_b").value ="";	
      document.getElementById("coef_c").disabled = true;	
      document.getElementById("coef_c").value ="";	
       document.getElementById("x_a").disabled = false;		
       document.getElementById("x_b").disabled = false;		
       document.getElementById("y_a").disabled = false;
       document.getElementById("y_b").disabled = false;
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /** ******************************  EquaÃ§Ã£o da reta (1 ponto e coef. angular)   *****************************  **/  
   if (a === "equac_da_reta_1ponto_coef_angular") {
      document.getElementById("x_b").disabled = true;	
      document.getElementById("x_b").value ="";
      document.getElementById("y_b").disabled = true;	
      document.getElementById("y_b").value ="";	
      document.getElementById("x_c").disabled = true;	
      document.getElementById("x_c").value ="";	
      document.getElementById("y_c").disabled = true;	
      document.getElementById("y_c").value ="";
      document.getElementById("angulo_Î±").disabled = true;	
      document.getElementById("angulo_Î±").value ="";		
      document.getElementById("raio").disabled = true;	
      document.getElementById("raio").value ="";	
      document.getElementById("coef_a").disabled = true;	
      document.getElementById("coef_a").value ="";
      document.getElementById("coef_b").disabled = true;	
      document.getElementById("coef_b").value ="";	
      document.getElementById("coef_c").disabled = true;	
      document.getElementById("coef_c").value ="";	
       document.getElementById("x_a").disabled = false;		
        document.getElementById("y_a").disabled = false;
      document.getElementById("coefangular_m").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
          
  /** ******************************  Coeficiente angular   ****************************  **/  
   if (a === "coef_angular") {
      document.getElementById("coefangular_m").disabled = true;	
      document.getElementById("coefangular_m").value ="";
      document.getElementById("x_c").disabled = true;	
      document.getElementById("x_c").value ="";	
      document.getElementById("y_c").disabled = true;	
      document.getElementById("y_c").value ="";
      document.getElementById("angulo_Î±").disabled = true;	
      document.getElementById("angulo_Î±").value ="";		
      document.getElementById("raio").disabled = true;	
      document.getElementById("raio").value ="";	
      document.getElementById("coef_a").disabled = true;	
      document.getElementById("coef_a").value ="";
      document.getElementById("coef_b").disabled = true;	
      document.getElementById("coef_b").value ="";	
      document.getElementById("coef_c").disabled = true;	
      document.getElementById("coef_c").value ="";	
       document.getElementById("x_a").disabled = false;		
       document.getElementById("x_b").disabled = false;		
       document.getElementById("y_a").disabled = false;
       document.getElementById("y_b").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /** ******************************  Coeficiente angular 2 (tg )   ****************************  **/  
   if (a === "coef_angular2") {
      document.getElementById("coefangular_m").disabled = true;	
      document.getElementById("coefangular_m").value ="";
      document.getElementById("x_c").disabled = true;	
      document.getElementById("x_c").value ="";	
      document.getElementById("y_c").disabled = true;	
      document.getElementById("y_c").value ="";
      document.getElementById("raio").disabled = true;	
      document.getElementById("raio").value ="";	
      document.getElementById("coef_a").disabled = true;	
      document.getElementById("coef_a").value ="";
      document.getElementById("coef_b").disabled = true;	
      document.getElementById("coef_b").value ="";	
      document.getElementById("coef_c").disabled = true;	
      document.getElementById("coef_c").value ="";	
       document.getElementById("x_a").disabled = true;		
       document.getElementById("x_b").disabled = true;		
       document.getElementById("y_a").disabled = true;
       document.getElementById("y_b").disabled = true;	
      document.getElementById("angulo_Î±").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /** ******************************  DistÃ¢ncia entre um ponto e uma reta   ****************************  **/  
   if (a === "dist_ponto_reta") {
      document.getElementById("coefangular_m").disabled = true;	
      document.getElementById("coefangular_m").value ="";
      document.getElementById("x_c").disabled = true;	
      document.getElementById("x_c").value ="";	
      document.getElementById("y_c").disabled = true;	
      document.getElementById("y_c").value ="";	
      document.getElementById("raio").disabled = true;	
      document.getElementById("raio").value ="";		
       document.getElementById("x_b").disabled = true;		
      document.getElementById("x_b").value ="";		
       document.getElementById("y_b").disabled = true;		
      document.getElementById("y_b").value ="";		
      document.getElementById("angulo_Î±").disabled = true;	
      document.getElementById("angulo_Î±").value ="";		
      document.getElementById("coef_a").disabled = false;	
      document.getElementById("coef_b").disabled = false;	
      document.getElementById("coef_c").disabled = false;	
       document.getElementById("x_a").disabled = false;		
       document.getElementById("y_a").disabled = false;
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /** ******************************  Ãrea de triÃ¢ngulos dados 3 pontos   ****************************  **/  
   if (a === "area_triangulo") {
      document.getElementById("coefangular_m").disabled = true;	
      document.getElementById("coefangular_m").value ="";	
      document.getElementById("angulo_Î±").disabled = true;	
      document.getElementById("angulo_Î±").value ="";		
      document.getElementById("raio").disabled = true;	
      document.getElementById("raio").value ="";	
      document.getElementById("coef_a").disabled = true;	
      document.getElementById("coef_a").value ="";
      document.getElementById("coef_b").disabled = true;	
      document.getElementById("coef_b").value ="";	
      document.getElementById("coef_c").disabled = true;	
      document.getElementById("coef_c").value ="";	
       document.getElementById("x_a").disabled = false;		
       document.getElementById("x_b").disabled = false;		
       document.getElementById("y_a").disabled = false;
       document.getElementById("y_b").disabled = false;
      document.getElementById("x_c").disabled = false;	
      document.getElementById("y_c").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /** ******************************  equaÃ§Ã£o da circunferÃªncia   ****************************  **/  
   if (a === "equac_circunferencia") {
      document.getElementById("coefangular_m").disabled = true;	
      document.getElementById("coefangular_m").value ="";	
      document.getElementById("angulo_Î±").disabled = true;	
      document.getElementById("angulo_Î±").value ="";		
      document.getElementById("coef_a").disabled = true;	
      document.getElementById("coef_a").value ="";
      document.getElementById("coef_b").disabled = true;	
      document.getElementById("coef_b").value ="";	
      document.getElementById("coef_c").disabled = true;	
      document.getElementById("coef_c").value ="";
      document.getElementById("x_c").disabled = true;
      document.getElementById("x_c").value ="";	
      document.getElementById("y_c").disabled = true;	
      document.getElementById("y_c").value ="";
       document.getElementById("x_b").disabled = true;
      document.getElementById("x_b").value ="";	
       document.getElementById("y_b").disabled = true;	
      document.getElementById("y_b").value ="";	
       document.getElementById("x_a").disabled = false;		
       document.getElementById("y_a").disabled = false;		
      document.getElementById("raio").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
      
  } 
   
  function Geom_Analit1() {
      
   var ddl = document.getElementById("ops");
   var selectedValue = ddl.options[ddl.selectedIndex].value;
      if (selectedValue == "")
     {
      alert("Escolha uma opÃ§Ã£o para Calcular!");
     } 	
      
    var a = document.forms["Geom_Analit"]["Geom_Analit_type"].value;
    /** *****************************************************  DistÃ¢ncia entre 2 pontos  ****************************************  **/  
    if (a === "Dist_2_pontos") { 
      var x_a = eval(document.Geom_Analit.x_a.value.replace(",",".").replace(/ /g,""));
      var y_a = eval(document.Geom_Analit.y_a.value.replace(",",".").replace(/ /g,"")); 	
      var x_b = eval(document.Geom_Analit.x_b.value.replace(",",".").replace(/ /g,""));   
      var y_b = eval(document.Geom_Analit.y_b.value.replace(",",".").replace(/ /g,""));  
  
      if (isNaN(x_a)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.x_a.focus();
          document.Geom_Analit.x_a.select();  
      return false;
   }
  
      if (isNaN(x_b)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.x_b.focus();
          document.Geom_Analit.x_b.select();  
      return false;
   }
  
      if (isNaN(y_a)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.y_a.focus();
          document.Geom_Analit.y_a.select();  
      return false;
   }
   
      if (isNaN(y_b)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.y_b.focus();
          document.Geom_Analit.y_b.select();  
      return false;
   } 
   
   try {
    var x_a = document.getElementById("resposta").value = roundNumber(x_a, 2);
    var x_b = document.getElementById("resposta").value = roundNumber(x_b, 2);
    var y_a = document.getElementById("resposta").value = roundNumber(y_a, 2);
    var y_b = document.getElementById("resposta").value = roundNumber(y_b, 2);  
    var Dab = Math.sqrt((x_a - x_b)*(x_a - x_b) + (y_a - y_b)*(y_a - y_b));
    var Dab = document.getElementById("resposta").value = roundNumber(Dab, 2);   
    var Dab1 = (x_a - x_b);
    var Dab1 = document.getElementById("resposta").value = roundNumber(Dab1, 2);   
    var Dab2 = y_a - y_b;
    var Dab2 = document.getElementById("resposta").value = roundNumber(Dab2, 2);   
    var Dab3 = (x_a - x_b)*(x_a - x_b);    
    var Dab3 = document.getElementById("resposta").value = roundNumber(Dab3, 2);    
    var Dab4 = (y_a - y_b)*(y_a - y_b);  
    var Dab4 = document.getElementById("resposta").value = roundNumber(Dab4, 2);   
    var Dab5 = (x_a - x_b)*(x_a - x_b) + (y_a - y_b)*(y_a - y_b);    
    var Dab5 = document.getElementById("resposta").value = roundNumber(Dab5, 2);   
    
      document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 20px; padding: 5px; '>A distÃ¢ncia entre os pontos A e B Ã©: <br>  <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>D</a1><a1 style='font-size: 10px; font-family: times new roman;'>AB</a1> =  âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>(<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1>)Â² + (<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1>)Â²</a1> <br>  <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>D</a1><a1 style='font-size: 10px; font-family: times new roman;'>AB</a1> =  âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>("+x_a+" - ("+x_b+"))Â² + ("+y_a+" - ("+y_b+"))Â²</a1> <br>  <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>D</a1><a1 style='font-size: 10px; font-family: times new roman;'>AB</a1> =  âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>("+Dab1+")Â² + ("+Dab2+")Â²</a1> <br>  <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>D</a1><a1 style='font-size: 10px; font-family: times new roman;'>AB</a1> =  âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+Dab3+" + "+Dab4+"</a1> <br>   <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>D</a1><a1 style='font-size: 10px; font-family: times new roman;'>AB</a1> =  âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+Dab5+" </a1> <br>   <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>D</a1><a1 style='font-size: 10px; font-family: times new roman;'>AB</a1> â‰ˆ <a1 style='color: #FF0000'> "+Dab+"</a1>" +" <hr> <h1 class='logomarca'> BpW </h1> </div>" 
     
      document.Geom_Analit.x_a.focus();
      document.Geom_Analit.x_a.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
   /** *******************************************  DistÃ¢ncia entre 2 pontos  ****************************************  **/  
    if (a === "ponto_medio") { 
      var x_a = eval(document.Geom_Analit.x_a.value.replace(",",".").replace(/ /g,""));
      var y_a = eval(document.Geom_Analit.y_a.value.replace(",",".").replace(/ /g,"")); 	
      var x_b = eval(document.Geom_Analit.x_b.value.replace(",",".").replace(/ /g,""));   
      var y_b = eval(document.Geom_Analit.y_b.value.replace(",",".").replace(/ /g,""));  
     
      if (isNaN(x_a)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.x_a.focus();
          document.Geom_Analit.x_a.select();  
      return false;
   }
  
      if (isNaN(x_b)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.x_b.focus();
          document.Geom_Analit.x_b.select();  
      return false;
   }
      if (isNaN(y_a)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.y_a.focus();
          document.Geom_Analit.y_a.select();  
      return false;
   }
      if (isNaN(y_b)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.y_b.focus();
          document.Geom_Analit.y_b.select();  
      return false;
   } 
   
   try {
   var x_a = document.getElementById("resposta").value = roundNumber(x_a, 2);
   var x_b = document.getElementById("resposta").value = roundNumber(x_b, 2);
   var y_a = document.getElementById("resposta").value = roundNumber(y_a, 2);
   var y_b = document.getElementById("resposta").value = roundNumber(y_b, 2);  	 
   var Pont_med_x =  (x_a + x_b)/2; 
   var Pont_med_x = document.getElementById("resposta").value = roundNumber(Pont_med_x, 2); 
   var Pont_med_x1 =  x_a + x_b ; 
   var Pont_med_x1 = document.getElementById("resposta").value = roundNumber(Pont_med_x1, 2);  
   var Pont_med_y =  (y_a + y_b)/2; 
   var Pont_med_y = document.getElementById("resposta").value = roundNumber(Pont_med_y, 2);
   var Pont_med_y1 =  y_a + y_b ;  
   var Pont_med_y1 = document.getElementById("resposta").value = roundNumber(Pont_med_y1, 2); 
   
      document.getElementById('resposta').innerHTML =" <hr> <div style='line-height: 20px; padding: 5px; '>O ponto mÃ©dio entre os pontos A e B Ã©: <br>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman;  font-size: 20px;'>M</a1><a1 style='font-size: 15px; font-family: times new roman;'>(x)</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+x_a+" + ("+x_b+") </td></tr> <tr> <td> 2 </td><td> 2 </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman;  font-size: 20px;'>M</a1><a1 style='font-size: 15px; font-family: times new roman;'>(x)</a1> &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+Pont_med_x1+" </td>  <td rowspan='2'> &nbsp;=&nbsp; </td>  <td rowspan='2'> <a1 style='color: #FF0000'> "+Pont_med_x+"</a1> </td></tr> <tr> <td> 2 </td> </tr></tbody></table> e <br>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman;  font-size: 20px;'>M</a1><a1 style='font-size: 15px; font-family: times new roman;'>(y)</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+y_a+" + ("+y_b+") </td></tr> <tr> <td> 2 </td><td> 2 </td> </tr></tbody></table>      <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman;  font-size: 20px;'>M</a1><a1 style='font-size: 15px; font-family: times new roman;'>(y)</a1> &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'>  "+Pont_med_y1+"  </td>  <td rowspan='2'> &nbsp;=&nbsp; </td>  <td rowspan='2'> <a1 style='color: #FF0000'> "+Pont_med_y+"</a1> </td></tr> <tr> <td> 2 </td> </tr></tbody></table>  Logo, o ponto MÃ©dio Ã© M (<a1 style='color: #FF0000'> "+Pont_med_x+"</a1>; <a1 style='color: #FF0000'> "+Pont_med_y+"</a1>)  <hr>   <h1 class='logomarca'> BpW </h1> </div>" 
     
      document.Geom_Analit.x_a.focus();
      document.Geom_Analit.x_a.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** ********************************  CondiÃ§Ã£o de alinhamento de 3 pontos   ************************************  **/  
    if (a === "condicao_alinhamento") { 
      var x_a = eval(document.Geom_Analit.x_a.value.replace(",",".").replace(/ /g,"")); 
      var y_a = eval(document.Geom_Analit.y_a.value.replace(",",".").replace(/ /g,"")); 
      var x_b = eval(document.Geom_Analit.x_b.value.replace(",",".").replace(/ /g,""));   
        var y_b = eval(document.Geom_Analit.y_b.value.replace(",",".").replace(/ /g,"")); 
      var x_c = eval(document.Geom_Analit.x_c.value.replace(",",".").replace(/ /g,""));    
      var y_c = eval(document.Geom_Analit.y_c.value.replace(",",".").replace(/ /g,""));
    
      if (isNaN(x_a)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.x_a.focus();
          document.Geom_Analit.x_a.select();  
      return false;
   }
  
      if (isNaN(x_b)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.x_b.focus();
          document.Geom_Analit.x_b.select();  
      return false;
   }
  
      if (isNaN(y_a)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.y_a.focus();
          document.Geom_Analit.y_a.select();  
      return false;
   }
   
      if (isNaN(y_b)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.y_b.focus();
          document.Geom_Analit.y_b.select();  
      return false;
   } 
   
      if (isNaN(y_c)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.y_c.focus();
          document.Geom_Analit.y_c.select();  
      return false;
   } 
  
      if (isNaN(x_c)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.x_c.focus();
          document.Geom_Analit.x_c.select();  
      return false;
   } 
   try {
   var x_a = document.getElementById("resposta").value = roundNumber(x_a, 2);
   var x_b = document.getElementById("resposta").value = roundNumber(x_b, 2);
   var y_a = document.getElementById("resposta").value = roundNumber(y_a, 2);
   var y_b = document.getElementById("resposta").value = roundNumber(y_b, 2); 
   var x_c = document.getElementById("resposta").value = roundNumber(x_c, 2);
   var y_c = document.getElementById("resposta").value = roundNumber(y_c, 2);  
   var Cond_alinham = 1*x_b*y_c + y_a*1*x_c + x_a*y_b*1 - y_a*x_b*1 - x_a*1*y_c - 1*y_b*x_c ;
   var Cond_alinham = document.getElementById("resposta").value = roundNumber(Cond_alinham, 2);   
    var Cond_alinham1 = 1*x_b*y_c;  
   var Cond_alinham1 = document.getElementById("resposta").value = roundNumber(Cond_alinham1, 2);   
    var Cond_alinham2 =  y_a*1*x_c;  
   var Cond_alinham2 = document.getElementById("resposta").value = roundNumber(Cond_alinham2, 2);   
    var Cond_alinham3 =  x_a*y_b*1; 
   var Cond_alinham3 = document.getElementById("resposta").value = roundNumber(Cond_alinham3, 2);   
    var Cond_alinham4 = - y_a*x_b*1; 
   var Cond_alinham4 = document.getElementById("resposta").value = roundNumber(Cond_alinham4, 2);   
    var Cond_alinham5 = - x_a*1*y_c;  
   var Cond_alinham5 = document.getElementById("resposta").value = roundNumber(Cond_alinham5, 2);   
    var Cond_alinham6 = - 1*y_b*x_c;
   var Cond_alinham6 = document.getElementById("resposta").value = roundNumber(Cond_alinham6, 2);   
  
    if (Cond_alinham == 0) { document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 20px; padding: 5px; '>Calculando o determinante pela regra de Sarrus: <br>   <table style='border-left: solid 1.5px; width:150px;  '> <tbody> <tr>  <td><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td>  <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> <td>&ensp;1</td> <td style='border-left: solid 1.5px'> <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> </tr>  <tr> <td><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td> <td>&ensp;1</td> <td style='border-left: solid 1.5px'><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td>  <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td>   </tr> <tr> <td><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td>  <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td>  <td>&ensp;1</td> <td style='border-left: solid 1.5px'><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td> <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td> </tr>  </tbody> </table>       <br>         Det =  1 âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1> + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> âˆ™ 1 âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1> + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> âˆ™ 1 - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> âˆ™ 1 - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> âˆ™ 1 âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1> - 1 âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1> <BR><br>  Det =  1 âˆ™ ("+x_b+") âˆ™ ("+y_c+") + ("+y_a+") âˆ™ 1 âˆ™ ("+x_c+") + ("+x_a+") âˆ™ ("+y_b+") âˆ™ 1 - ("+y_a+") âˆ™ ("+x_b+") âˆ™ 1 â€“ ("+x_a+") âˆ™ 1 âˆ™ ("+y_c+") - 1 âˆ™ ("+y_b+") âˆ™ ("+x_c+") <BR><br>      Det =  ("+Cond_alinham1+") + ("+Cond_alinham2+") + ("+Cond_alinham3+") + ("+Cond_alinham4+") + ("+Cond_alinham5+") + ("+Cond_alinham6+") <BR><br>  Det = <a1 style='color: #FF0000'> "+Cond_alinham+"</a1>" +"  <BR>    Como o Det = 0, logo, os pontos A, B e C sÃ£o colineares, ou seja, pertenca a uma mesma reta. <hr> <h1 class='logomarca'> BpW </h1> </div>" 
    
      return false;		  
         }
         else { 
             document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 20px; padding: 5px; '>Calculando o determinate pela regra de Sarrus: <br><table style='border-left: solid 1.5px; width:150px;  '> <tbody> <tr>  <td><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td>  <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> <td>&ensp;1</td> <td style='border-left: solid 1.5px'> <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> </tr>  <tr> <td><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td> <td>&ensp;1</td> <td style='border-left: solid 1.5px'><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td>  <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td>   </tr> <tr> <td><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td>  <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td>  <td>&ensp;1</td> <td style='border-left: solid 1.5px'><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td> <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td> </tr>  </tbody> </table> <br> Det =  1 âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1> + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> âˆ™ 1 âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1> + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> âˆ™ 1 - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> âˆ™ 1 - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> âˆ™ 1 âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1> - 1 âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1> <BR><BR>  Det =  1 âˆ™ ("+x_b+") âˆ™ ("+y_c+") + ("+y_a+") âˆ™ 1 âˆ™ ("+x_c+") + ("+x_a+") âˆ™ ("+y_b+") âˆ™ 1 - ("+y_a+") âˆ™ ("+x_b+") âˆ™ 1 - ("+x_a+") âˆ™ 1 âˆ™ ("+y_c+") - 1 âˆ™ ("+y_b+") âˆ™ ("+x_c+") <BR><BR>      Det =  "+Cond_alinham1+" + ("+Cond_alinham2+") + ("+Cond_alinham3+") + ("+Cond_alinham4+") + ("+Cond_alinham5+") + ("+Cond_alinham6+") <BR><BR>  Det = <a1 style='color: #FF0000'> "+Cond_alinham+"</a1>" +"   <br> Como o Det = "+Cond_alinham+" â‰  0, logo, os pontos A, B e C NÃƒO sÃ£o colineares, ou seja, nÃ£o pertence a uma mesma reta. <hr>  <h1 class='logomarca'> BpW </h1> </div>" 
      document.Geom_Analit.x_a.focus();
      document.Geom_Analit.x_a.select();     
      document.getElementById('resposta').style.display = "block";
   } 
  }	
  catch(e) {alert(e)}
  }
  
  
   /** *****************************************  EquaÃ§Ã£o da reta (2 pontos)   ************************************  **/  
    if (a === "equac_da_reta_2_pontos") {
      var x_a = eval(document.Geom_Analit.x_a.value.replace(",",".").replace(/ /g,"")); 
      var x_b = eval(document.Geom_Analit.x_b.value.replace(",",".").replace(/ /g,"")); 	
      var y_a = eval(document.Geom_Analit.y_a.value.replace(",",".").replace(/ /g,"")); 	
      var y_b = eval(document.Geom_Analit.y_b.value.replace(",",".").replace(/ /g,""));   
    
      if (isNaN(x_a)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.x_a.focus();
          document.Geom_Analit.x_a.select();  
      return false;
   }
      if (isNaN(x_b)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.x_b.focus();
          document.Geom_Analit.x_b.select();  
      return false;
   }
  
      if (isNaN(y_a)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.y_a.focus();
          document.Geom_Analit.y_a.select();  
      return false;
   }
   
      if (isNaN(y_b)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.y_b.focus();
          document.Geom_Analit.y_b.select();  
      return false;
   } 
  
   try {
   var x_a = document.getElementById("resposta").value = roundNumber(x_a, 2);
   var x_b = document.getElementById("resposta").value = roundNumber(x_b, 2);
   var y_a = document.getElementById("resposta").value = roundNumber(y_a, 2);
   var y_b = document.getElementById("resposta").value = roundNumber(y_b, 2); 
   var eq_reta1 = x_a*y_b;
   var eq_reta1 = document.getElementById("resposta").value = roundNumber(eq_reta1, 2);   
    var eq_reta2 = x_b*y_a; 
   var eq_reta2 = document.getElementById("resposta").value = roundNumber(eq_reta2, 2);     
    var eq_reta3 = (x_a*y_b) - (x_b*y_a);   
   var eq_reta3 = document.getElementById("resposta").value = roundNumber(eq_reta3, 2);     
    var eq_reta4 = y_a - y_b; 
   var eq_reta4 = document.getElementById("resposta").value = roundNumber(eq_reta4, 2);     
    var eq_reta5 = x_b - x_a  ;  
   var eq_reta5 = document.getElementById("resposta").value = roundNumber(eq_reta5, 2);     
    var eq_reta6 = -((x_a*y_b) - (x_b*y_a));  
   var eq_reta6 = document.getElementById("resposta").value = roundNumber(eq_reta6, 2);     
    var eq_reta7 = -(y_a - y_b);  
   var eq_reta7 = document.getElementById("resposta").value = roundNumber(eq_reta7, 2);     
    var eq_reta8 = - eq_reta4; 
   var eq_reta8 = document.getElementById("resposta").value = roundNumber(eq_reta8, 2);     
    var eq_reta9 = - eq_reta3; 
   var eq_reta9 = document.getElementById("resposta").value = roundNumber(eq_reta9, 2);     
    var eq_reta10 = - eq_reta4 / eq_reta5;  
   var eq_reta10 = document.getElementById("resposta").value = roundNumber(eq_reta10, 2);     
    var eq_reta11 = - eq_reta3 / eq_reta5;  
   var eq_reta11 = document.getElementById("resposta").value = roundNumber(eq_reta11, 2);     
    
     document.getElementById('resposta').innerHTML =" <hr> <div style='line-height: 20px; padding: 5px; '>A equaÃ§Ã£o da reta Ã© <br><table style='border-left: solid 1.5px; width:150px;  '> <tbody> <tr>  <td><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> </td>  <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> </td> <td>&ensp;1</td> <td style='border-left: solid 1.5px'> <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> </td> <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> </td> </tr>  <tr> <td><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> <td>&ensp;1</td> <td style='border-left: solid 1.5px'><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td>  <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td>   </tr> <tr> <td><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td>  <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td>  <td>&ensp;1</td> <td style='border-left: solid 1.5px'><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td> <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td> </tr>  </tbody> </table> <BR>    1 âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> âˆ™ 1 âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> âˆ™ 1 - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> âˆ™ 1 - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> âˆ™ 1 âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> - 1 âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> = 0 <BR><BR>          1 âˆ™ ("+x_a+") âˆ™ ("+y_b+") + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> âˆ™ 1 âˆ™ ("+x_b+") + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> âˆ™ ("+y_a+") âˆ™ 1 - ("+y_a+") âˆ™ ("+x_b+") âˆ™ 1 - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> âˆ™ 1 âˆ™ ("+y_b+") - 1 âˆ™ ("+x_a+") âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> = 0 <BR><BR>     "+eq_reta1+" + ("+x_b+")<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> + ("+y_a+")<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1>  - ("+x_a+")<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> - ("+y_b+")<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1>  - ("+eq_reta2+") = 0 <BR><BR>  <a1 style='color: #FF0000'>EquaÃ§Ã£o geral</a1> <BR>   ("+eq_reta4+")<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> + ("+eq_reta5+")<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1>  + ("+eq_reta3+") = 0 &emsp;  <BR>  <BR>  <a1 style='color: #FF0000'>EquaÃ§Ã£o reduzida</a1> <BR>  "+eq_reta5+"<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> = "+eq_reta8+"<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1>  + ("+eq_reta9+")  <BR>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> y &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> "+eq_reta8+"x </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> ("+eq_reta9+") </td></tr> <tr> <td> "+eq_reta5+" </td><td> "+eq_reta5+" </td> </tr></tbody></table> ou <br> y =  "+eq_reta10+"x + ("+eq_reta11+")    <hr><h1 class='logomarca'> BpW </h1> </div>" 
    
      document.Geom_Analit.x_a.focus();
      document.Geom_Analit.x_a.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }  
    
    
    /** ****************************** equaÃ§Ã£o da reta (1 ponto e coeficiente angular) *********************************/  
    if (a === "equac_da_reta_1ponto_coef_angular") { 
      var x_a = eval(document.Geom_Analit.x_a.value.replace(",",".").replace(/ /g,"")); 
      var y_a = eval(document.Geom_Analit.y_a.value.replace(",",".").replace(/ /g,""));   
      var coefangular_m = eval(document.Geom_Analit.coefangular_m.value.replace(",",".").replace(/ /g,""));   
  
      if (isNaN(x_a)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.x_a.focus();
          document.Geom_Analit.x_a.select();  
      return false;
   }
  
      if (isNaN(y_a)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.y_a.focus();
          document.Geom_Analit.y_a.select();  
      return false;
   }
  
      if (isNaN(coefangular_m)) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.coefangular_m.focus();
          document.Geom_Analit.coefangular_m.select();  
      return false;
   }
   
   try {
   var x_a = document.getElementById("resposta").value = roundNumber(x_a, 2);
   var y_a = document.getElementById("resposta").value = roundNumber(y_a, 2);	 
    var eq_ret = - y_a;	
   var eq_ret = document.getElementById("resposta").value = roundNumber(eq_ret, 2);	   
    var eq_ret1 = - x_a;	 
   var eq_ret1 = document.getElementById("resposta").value = roundNumber(eq_ret1, 2);	  
    var eq_ret2 = - coefangular_m * x_a;
   var eq_ret2 = document.getElementById("resposta").value = roundNumber(eq_ret2, 2);	  
    var eq_ret3 = - coefangular_m ;  
   var eq_ret3 = document.getElementById("resposta").value = roundNumber(eq_ret3, 2);	  
    var eq_ret4 =  coefangular_m * x_a;  
   var eq_ret4 = document.getElementById("resposta").value = roundNumber(eq_ret4, 2);	  
    var eq_ret5 =  eq_ret + eq_ret4;  
   var eq_ret5 = document.getElementById("resposta").value = roundNumber(eq_ret5, 2);	  
    
      document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 20px; padding: 5px; '>A equaÃ§Ã£o geral da reta Ã©: <br>  <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> = <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>m</a1> âˆ™ (<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1>) <br>  <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> - ("+y_a+") = "+coefangular_m+" âˆ™ (<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> - ("+x_a+")) <br>  <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> + ("+eq_ret+") = "+coefangular_m+" âˆ™ (<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> + ("+eq_ret1+")) <br>  <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> + ("+eq_ret+") = "+coefangular_m+"<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> + ("+eq_ret2+") <br>   "+eq_ret3+"<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> + ("+eq_ret+") + ("+eq_ret4+") = 0 <br>  "+eq_ret3+"<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> + ("+eq_ret5+")  = 0 <br>  <hr>        <h1 class='logomarca'> BpW </h1> </div>" 
     
      document.Geom_Analit.x_a.focus();
      document.Geom_Analit.x_a.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }  
    
    /** *****************************************  coeficiente angular   ****************************************  **/  
    if (a === "coef_angular") { 
      var x_a = eval(document.Geom_Analit.x_a.value.replace(",",".").replace(/ /g,"")); 
      var y_a = eval(document.Geom_Analit.y_a.value.replace(",",".").replace(/ /g,""));   
      var x_b = eval(document.Geom_Analit.x_b.value.replace(",",".").replace(/ /g,"")); 
      var y_b = eval(document.Geom_Analit.y_b.value.replace(",",".").replace(/ /g,"")); 	
      
      if (isNaN(x_a)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.x_a.focus();
          document.Geom_Analit.x_a.select();  
      return false;
   }
  
      if (isNaN(y_a)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.y_a.focus();
          document.Geom_Analit.y_a.select();  
      return false;
   }
  
      if (isNaN(x_b)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.x_b.focus();
          document.Geom_Analit.x_b.select();  
      return false;
   }
  
      if (isNaN(y_b)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.y_b.focus();
          document.Geom_Analit.y_b.select();  
      return false;
   }
   
   
   try {
   var x_a = document.getElementById("resposta").value = roundNumber(x_a, 2);
   var y_a = document.getElementById("resposta").value = roundNumber(y_a, 2);	 
   var x_b = document.getElementById("resposta").value = roundNumber(x_b, 2);	  
   var y_b = document.getElementById("resposta").value = roundNumber(y_b, 2);	   
   var coefic_angular1 =  y_a - y_b;	 
   var coefic_angular1 = document.getElementById("resposta").value = roundNumber(coefic_angular1, 2);	  
    var coefic_angular2 =  x_a - x_b;	
   var coefic_angular2 = document.getElementById("resposta").value = roundNumber(coefic_angular2, 2);	    
    var coefic_angular3 =  coefic_angular1 / coefic_angular2;  
   var coefic_angular3 = document.getElementById("resposta").value = roundNumber(coefic_angular3, 2);	    
  
      document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 20px; padding: 5px; '>O coeficiente angular Ã©: <br>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>m</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1>  </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>m</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+y_a+" - ("+y_b+") </td></tr><tr><td style='text-align:center;'> "+x_a+" - ("+x_b+") </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>m</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+coefic_angular1+" </td></tr><tr><td style='text-align:center;'> "+coefic_angular2+"  </td></tr></tbody></table>   ou <br> <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>m</a1> =  <a1 style='color: #FF0000'>"+coefic_angular3+"</a1>    <br>  <hr>   <h1 class='logomarca'> BpW </h1> </div>" 
     
      document.Geom_Analit.x_a.focus();
      document.Geom_Analit.x_a.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }    
    
    
   /** *****************************************  coeficiente angular   ****************************************  **/  
    if (a === "coef_angular2") { 
      var angulo_Î± = eval(document.Geom_Analit.angulo_Î±.value.replace(",",".").replace(/ /g,"")); 
  
      if (isNaN(angulo_Î±)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.angulo_Î±.focus();
          document.Geom_Analit.angulo_Î±.select();  
      return false;
   }
       
   try {
   var angulo_Î± = document.getElementById("resposta").value = roundNumber(angulo_Î±, 3);	 
   var tgÎ± = Math.tan((angulo_Î±)*Math.PI/180); 	    
   var tgÎ±= document.getElementById("resposta").value = roundNumber(tgÎ±, 3);	
   
      document.getElementById('resposta').innerHTML =" <hr> <div style='line-height: 20px; padding: 5px; '>O coeficiente angular Ã©: <br> <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>m</a1> = tg Î± <br>  <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>m</a1> = tg "+angulo_Î±+"Âº <br>  <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>m</a1> =  <a1 style='color: #FF0000'>"+tgÎ±+"</a1>  <br> <hr>  <h1 class='logomarca'> BpW </h1> </div>" 
      document.Geom_Analit.angulo_Î±.focus();
      document.Geom_Analit.angulo_Î±.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }    
  
  
  /** *****************************************  DistÃ¢ncia entre um ponto e uma reta   ***************************  **/  
    if (a === "dist_ponto_reta") { 
      var coef_a = eval(document.Geom_Analit.coef_a.value.replace(",",".").replace(/ /g,""));
      var coef_b = eval(document.Geom_Analit.coef_b.value.replace(",",".").replace(/ /g,""));	
      var coef_c = eval(document.Geom_Analit.coef_c.value.replace(",",".").replace(/ /g,""));		
      var x_a = eval(document.Geom_Analit.x_a.value.replace(",",".").replace(/ /g,""));	
      var y_a = eval(document.Geom_Analit.y_a.value.replace(",",".").replace(/ /g,""));		
  
    if (isNaN(coef_a)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.coef_a.focus();
          document.Geom_Analit.coef_a.select();  
      return false;
   }
   
    if (isNaN(coef_b)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.coef_b.focus();
          document.Geom_Analit.coef_b.select();  
      return false;
   } 
   
    if (isNaN(coef_c)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.coef_c.focus();
          document.Geom_Analit.coef_c.select();  
      return false;
   } 
  
    if (isNaN(x_a)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.x_a.focus();
          document.Geom_Analit.x_a.select();  
      return false;
   } 
   
    if (isNaN(y_a)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.y_a.focus();
          document.Geom_Analit.y_a.select();  
      return false;
   } 
   
   try {
   var coef_a = document.getElementById("resposta").value = roundNumber(coef_a, 3);		 
   var coef_b = document.getElementById("resposta").value = roundNumber(coef_b, 3);		 
   var coef_c = document.getElementById("resposta").value = roundNumber(coef_c, 3);	
   var x_a = document.getElementById("resposta").value = roundNumber(x_a, 3);
   var y_a = document.getElementById("resposta").value = roundNumber(y_a, 3);
   var dist_pont_reta = Math.abs((coef_a*x_a + coef_b*y_a +coef_c))/(Math.sqrt(coef_a*coef_a + coef_b*coef_b))  ;
   var dist_pont_reta = document.getElementById("resposta").value = roundNumber(dist_pont_reta, 3); 
   var d_p_r1 =  coef_a *  x_a ;	
   var d_p_r1 = document.getElementById("resposta").value = roundNumber(d_p_r1, 3);	
   var d_p_r2 =  coef_b *  y_a ;	
   var d_p_r2 = document.getElementById("resposta").value = roundNumber(d_p_r2, 3);	
   var d_p_r3 =  coef_a *  coef_a ;
   var d_p_r3 = document.getElementById("resposta").value = roundNumber(d_p_r3, 3);	
   var d_p_r4 =  coef_b *  coef_b ;
   var d_p_r4 = document.getElementById("resposta").value = roundNumber(d_p_r4, 3);	
   var d_p_r5 =  d_p_r1 + d_p_r2 + coef_c;	
   var d_p_r5 = document.getElementById("resposta").value = roundNumber(d_p_r5, 3);	
   var d_p_r6 =  d_p_r3 + d_p_r4 ;	
   var d_p_r6 = document.getElementById("resposta").value = roundNumber(d_p_r6, 3);	
   var d_p_r7 =  Math.abs(d_p_r5) ;	
   var d_p_r7 = document.getElementById("resposta").value = roundNumber(d_p_r7, 3);	
   var d_p_r8 =  Math.sqrt(d_p_r6) ;	
   var d_p_r8 = document.getElementById("resposta").value = roundNumber(d_p_r8, 3);	
  
      document.getElementById('resposta').innerHTML =" <hr> <div style='line-height: 20px; padding: 1px; '>A distÃ¢ncia entre um ponto A e uma reta (r) Ã©: <br> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;  font-size: 20px;'>D</a1><a1 style='font-size: 12px; font-family: times new roman;'>(A, r)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> |<a1 style='font-family: times new roman; font-style:italic;font-size: 25px;'>a</a1><a1 style='font-family: times new roman; font-style:italic;font-size: 25px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> + <a1 style='font-family: times new roman; font-style:italic;font-size: 25px;'>b</a1><a1 style='font-family: times new roman; font-style:italic;font-size: 23px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> + <a1 style='font-family: times new roman; font-style:italic;font-size: 25px;'>c</a1>|  </td></tr><tr><td style='text-align:center;'> âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1px;'><a1 style='font-family: times new roman; font-style:italic;font-size: 18px;'>aÂ²</a1> + <a1 style='font-family: times new roman; font-style:italic;font-size: 18px;'>bÂ²</a1></a1>  </td></tr></tbody></table>     <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;  font-size: 20px;'>D</a1><a1 style='font-size: 12px; font-family: times new roman;'>(A, r)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  |"+coef_a+" âˆ™ ("+x_a+") + ("+coef_b+") âˆ™ ("+y_a+") + ("+coef_c+")|  </td></tr><tr><td style='text-align:center;'> âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1px;'><a1 style='font-family: times new roman;  font-size: 18px;'>("+coef_a+")Â²</a1> + <a1 style='font-family: times new roman;  font-size: 18px;'>("+coef_b+")Â²</a1></a1>  </td></tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;  font-size: 20px;'>D</a1><a1 style='font-size: 12px; font-family: times new roman;'>(A, r)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> |"+d_p_r1+" + ("+d_p_r2+") + ("+coef_c+")| </td></tr><tr><td style='text-align:center;'> âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1px;'><a1 style='font-family: times new roman;  font-size: 18px;'>"+d_p_r3+"</a1> + <a1 style='font-family: times new roman;  font-size: 18px;'>"+d_p_r4+"</a1></a1>  </td></tr></tbody></table>                 <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman;  font-size: 18px;'>D</a1><a1 style='font-size: 13px; font-family: times new roman;'>(A, r)</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> |"+d_p_r5+"| </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+d_p_r7+" </td></tr> <tr> <td> âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1px;'><a1 style='font-family: times new roman;  font-size: 18px;'>"+d_p_r6+"</a1> </a1> </td><td> "+d_p_r8+" </td> </tr></tbody></table>  <br>  <a1 style='font-family: times new roman;  font-size: 18px;'>D</a1><a1 style='font-size: 13px; font-family: times new roman;'>(A, r)</a1> =  <a1 style='color: #FF0000'>"+dist_pont_reta+"</a1>  <br>   <hr>   <h1 class='logomarca'> BpW </h1> </div>" 
      
      document.Geom_Analit.coef_a.focus();
      document.Geom_Analit.coef_a.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }    
  
  /** ***************************************** Ãrea de triÃ¢ngulo   *****************************  **/  
    if (a === "area_triangulo") { 
      var x_a = eval(document.Geom_Analit.x_a.value.replace(",",".").replace(/ /g,"")); 
      var y_a = eval(document.Geom_Analit.y_a.value.replace(",",".").replace(/ /g,"")); 
      var x_b = eval(document.Geom_Analit.x_b.value.replace(",",".").replace(/ /g,""));   
        var y_b = eval(document.Geom_Analit.y_b.value.replace(",",".").replace(/ /g,"")); 
      var x_c = eval(document.Geom_Analit.x_c.value.replace(",",".").replace(/ /g,""));    
      var y_c = eval(document.Geom_Analit.y_c.value.replace(",",".").replace(/ /g,""));
    
      if (isNaN(x_a)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.x_a.focus();
          document.Geom_Analit.x_a.select();  
      return false;
   }
  
      if (isNaN(x_b)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.x_b.focus();
          document.Geom_Analit.x_b.select();  
      return false;
   }
  
      if (isNaN(y_a)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.y_a.focus();
          document.Geom_Analit.y_a.select();  
      return false;
   }
   
      if (isNaN(y_b)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.y_b.focus();
          document.Geom_Analit.y_b.select();  
      return false;
   } 
   
      if (isNaN(y_c)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.y_c.focus();
          document.Geom_Analit.y_c.select();  
      return false;
   } 
  
      if (isNaN(x_c)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.x_c.focus();
          document.Geom_Analit.x_c.select();  
      return false;
   } 
   
   try {
   var x_a = document.getElementById("resposta").value = roundNumber(x_a, 2);
   var x_b = document.getElementById("resposta").value = roundNumber(x_b, 2);
   var y_a = document.getElementById("resposta").value = roundNumber(y_a, 2);
   var y_b = document.getElementById("resposta").value = roundNumber(y_b, 2); 
   var y_c = document.getElementById("resposta").value = roundNumber(y_c, 2);
   var x_c = document.getElementById("resposta").value = roundNumber(x_c, 2);  
   var area_triang = 1*x_b*y_c + y_a*1*x_c + x_a*y_b*1 - y_a*x_b*1 - x_a*1*y_c - 1*y_b*x_c ;
   var area_triang = document.getElementById("resposta").value = roundNumber(area_triang, 2); 
   var area_triang1 = 1*x_b*y_c;  
   var area_triang1 = document.getElementById("resposta").value = roundNumber(area_triang1, 2);  
   var area_triang2 =  y_a*1*x_c;  
   var area_triang2 = document.getElementById("resposta").value = roundNumber(area_triang2, 2); 
   var area_triang3 =  x_a*y_b*1; 
   var area_triang3 = document.getElementById("resposta").value = roundNumber(area_triang3, 2);  
   var area_triang4 = - y_a*x_b*1; 
   var area_triang4 = document.getElementById("resposta").value = roundNumber(area_triang4, 2);
   var area_triang5 = - x_a*1*y_c;  
   var area_triang5 = document.getElementById("resposta").value = roundNumber(area_triang5, 2); 
   var area_triang6 = - 1*y_b*x_c;
   var area_triang6 = document.getElementById("resposta").value = roundNumber(area_triang6, 2);  
   var area_triang7 =  Math.abs(1*x_b*y_c + y_a*1*x_c + x_a*y_b*1 - y_a*x_b*1 - x_a*1*y_c - 1*y_b*x_c) ; 
   var area_triang7 = document.getElementById("resposta").value = roundNumber(area_triang7, 2);  
   var area_triang8 = 0.5 * Math.abs(1*x_b*y_c + y_a*1*x_c + x_a*y_b*1 - y_a*x_b*1 - x_a*1*y_c - 1*y_b*x_c)   
   var area_triang8 = document.getElementById("resposta").value = roundNumber(area_triang8, 2);  
      
   document.getElementById('resposta').innerHTML ="<hr>  <div style='line-height: 20px; padding: 5px; '>Primeiro calcular o determinante pela regra de Sarrus: <br>   <table style='border-left: solid 1.5px; width:150px;  '> <tbody> <tr>  <td><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td>  <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> <td>&ensp;1</td> <td style='border-left: solid 1.5px'> <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> </tr>  <tr> <td><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td> <td>&ensp;1</td> <td style='border-left: solid 1.5px'><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td>  <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td>   </tr> <tr> <td><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td>  <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td>  <td>&ensp;1</td> <td style='border-left: solid 1.5px'><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td> <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td> </tr>  </tbody> </table> <br> Det =  1 âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1> + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> âˆ™ 1 âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1> + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> âˆ™ 1 - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> âˆ™ 1 - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> âˆ™ 1 âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1> - 1 âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1> <BR><br>  Det =  1 âˆ™ ("+x_b+") âˆ™ ("+y_c+") + ("+y_a+") âˆ™ 1 âˆ™ ("+x_c+") + ("+x_a+") âˆ™ ("+y_b+") âˆ™ 1 - ("+y_a+") âˆ™ ("+x_b+") âˆ™ 1 â€“ ("+x_a+") âˆ™ 1 âˆ™ ("+y_c+") - 1 âˆ™ ("+y_b+") âˆ™ ("+x_c+") <BR><br>      Det =  ("+area_triang1+") + ("+area_triang2+") + ("+area_triang3+") + ("+area_triang4+") + ("+area_triang5+") + ("+area_triang6+") <BR><br>  Det =   "+area_triang+" " +"  <BR>  Logo, a Ã¡rea do triÃ¢ngulo de coordenadas A("+x_a+"; "+y_a+"), B("+x_b+"; "+y_b+") e C("+x_c+"; "+y_c+") Ã©: <BR>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>  Ãrea &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> 1 </td>  <td rowspan='2'> &nbsp;âˆ™&nbsp; </td>  <td rowspan='2'> |D| </td></tr> <tr> <td> 2 </td> </tr></tbody></table>  Ãrea =&nbsp; 0,5 âˆ™ "+area_triang7+" =  <a1 style='color: #FF0000'> "+area_triang8+"</a1> <hr> <h1 class='logomarca'> BpW </h1> </div>" 
    
      document.Geom_Analit.x_a.focus();
      document.Geom_Analit.x_a.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
  /** *****************************************  equaÃ§Ã£o da circunferÃªncia   ************************************  **/  
    if (a === "equac_circunferencia") { 
      var x_a = eval(document.Geom_Analit.x_a.value.replace(",",".").replace(/ /g,"")); 
      var y_a = eval(document.Geom_Analit.y_a.value.replace(",",".").replace(/ /g,"")); 
      var raio = eval(document.Geom_Analit.raio.value.replace(",",".").replace(/ /g,""));    
    
      if (isNaN(x_a)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.x_a.focus();
          document.Geom_Analit.x_a.select();  
      return false;
   }
  
      if (isNaN(y_a)   ) { alert("Digite um valor numÃ©rico!");
          document.Geom_Analit.y_a.focus();
          document.Geom_Analit.y_a.select();  
      return false;
   }
  
      if (isNaN(raio) ||  (raio < 0)    ) { alert("Digite um valor numÃ©rico nÃ£o negativo!");
          document.Geom_Analit.raio.focus();
          document.Geom_Analit.raio.select();  
      return false;
   } 
  
   try {
   var x_a = document.getElementById("resposta").value = roundNumber(x_a, 2);
   var y_a = document.getElementById("resposta").value = roundNumber(y_a, 2);
   var raio = document.getElementById("resposta").value = roundNumber(raio, 2); 
    var equac_circunf1 = - x_a ;
   var equac_circunf1 = document.getElementById("resposta").value = roundNumber(equac_circunf1, 2);   
    var equac_circunf2 = - y_a ;
   var equac_circunf2 = document.getElementById("resposta").value = roundNumber(equac_circunf2, 2);   
    var equac_circunf3 = raio * raio;
   var equac_circunf3 = document.getElementById("resposta").value = roundNumber(equac_circunf3, 2);     
    var equac_circunf4 = 2 * x_a;
   var equac_circunf4 = document.getElementById("resposta").value = roundNumber(equac_circunf4, 2);     
    var equac_circunf5 = 2 * y_a;  
   var equac_circunf5 = document.getElementById("resposta").value = roundNumber(equac_circunf5, 2);     
    var equac_circunf6 = x_a * x_a;
   var equac_circunf6 = document.getElementById("resposta").value = roundNumber(equac_circunf6, 2);     
    var equac_circunf7 = y_a * y_a;  
   var equac_circunf7 = document.getElementById("resposta").value = roundNumber(equac_circunf7, 2);     
    var equac_circunf8 = - equac_circunf8; 
   var equac_circunf8 = document.getElementById("resposta").value = roundNumber(equac_circunf8, 2);     
    var equac_circunf9 = - equac_circunf4; 
    var equac_circunf9 = document.getElementById("resposta").value = roundNumber(equac_circunf9, 2);    
    var equac_circunf10 = - equac_circunf5; 
    var equac_circunf10 = document.getElementById("resposta").value = roundNumber(equac_circunf10, 2);    
    var equac_circunf11 = equac_circunf6 + equac_circunf7 - equac_circunf3 ;  
   var equac_circunf11 = document.getElementById("resposta").value = roundNumber(equac_circunf11, 2);     
    
   document.getElementById('resposta').innerHTML =" <hr> <div style='line-height: 20px; padding: 5px; '>A equaÃ§Ã£o reduzida da circunferÃªncia de centro C("+x_a+"; "+y_a+") e raio R = "+raio+" Ã©: <br> (<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>a</a1>)Â² + (<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>b</a1>)Â² = <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>R</a1>Â²  <br>  (<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> - ("+x_a+"))Â² + (<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> - ("+y_a+"))Â² = ("+raio+")Â²  <br>  (<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> + ("+equac_circunf1+"))Â² + (<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> + ("+equac_circunf2+"))Â² = "+equac_circunf3+"   <br> <br> Agora, a equaÃ§Ã£o geral da circunferÃªncia:  <br>   <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1>Â² - 2âˆ™("+x_a+")âˆ™<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1>  + ("+x_a+")Â²  +  <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1>Â² - 2âˆ™("+y_a+")âˆ™<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> + ("+y_a+")Â² = 0 <br>   <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1>Â² - ("+equac_circunf4+")<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1>  +  "+equac_circunf6+"  +  <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1>Â² - ("+equac_circunf5+")<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> + "+equac_circunf7+" = "+equac_circunf3+"   <br>  <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1>Â² + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1>Â² - ("+equac_circunf4+")<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> - ("+equac_circunf5+")<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> + "+equac_circunf6+" + "+equac_circunf7+" + ("+equac_circunf3+") = 0 <br>   <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1>Â² + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1>Â² + ("+equac_circunf9+")<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> + ("+equac_circunf10+")<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> + ("+equac_circunf11+")  = 0 <br>  <hr>           <h1 class='logomarca'> BpW </h1> </div>" 
      document.Geom_Analit.x_a.focus();
      document.Geom_Analit.x_a.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  }
  
  
  /***#######################################                 ###########################################     **/
  /***########################################  JUROS SIMPLES  ###########################################     **/
  
  
  function jurosimples2() {
    var a = document.forms["jurosimples"]["jurosimples_type"].value;
  /**************************   JUROS   ***********************/  
   if (a === "juros") {
      document.getElementById("montant").disabled = true;	
      document.getElementById("montant").value ="";
       document.getElementById("juro").disabled = true;		
      document.getElementById("juro").value ="";	
      document.getElementById("tempo").disabled = false;	
       document.getElementById("capit").disabled = false;		
       document.getElementById("taxa").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /********************************   CAPITAL ****************************/  
   if (a === "capital") {
      document.getElementById("montant").disabled = true;	
      document.getElementById("montant").value ="";
       document.getElementById("capit").disabled = true;		
      document.getElementById("capit").value ="";		
       document.getElementById("juro").disabled = false;		
      document.getElementById("tempo").disabled = false;	
       document.getElementById("taxa").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /********************************  TAXA   *******************************/  	
   if (a === "taxa") {
      document.getElementById("montant").disabled = true;	
      document.getElementById("montant").value ="";
       document.getElementById("taxa").disabled = true;		
      document.getElementById("taxa").value ="";		
       document.getElementById("juro").disabled = false;		
      document.getElementById("tempo").disabled = false;	
       document.getElementById("capit").disabled = false;		
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /********************************  TEMPO   *******************************/  	
   if (a === "tempo") {
      document.getElementById("montant").disabled = true;	
      document.getElementById("montant").value ="";
       document.getElementById("tempo").disabled = true;		
      document.getElementById("tempo").value ="";		
       document.getElementById("juro").disabled = false;		
      document.getElementById("taxa").disabled = false;	
       document.getElementById("capit").disabled = false;		
   }
   try { 	}
       catch(e) {alert(e)}		
      
  /********************************  MONTANTE  *******************************/  	
   if (a === "montante") {
      document.getElementById("montant").disabled = true;	
      document.getElementById("montant").value ="";
       document.getElementById("juro").disabled = true;		
      document.getElementById("juro").value ="";		
       document.getElementById("tempo").disabled = false;		
      document.getElementById("taxa").disabled = false;	
       document.getElementById("capit").disabled = false;		
   }
   try { 	}
       catch(e) {alert(e)}		
      
  /********************************  CAPITAL - (montante)  *******************************/  	
   if (a === "capitalMont") {
      document.getElementById("capit").disabled = true;	
      document.getElementById("capit").value ="";
       document.getElementById("juro").disabled = true;		
      document.getElementById("juro").value ="";	
       document.getElementById("tempo").disabled = false;		
      document.getElementById("taxa").disabled = false;	
       document.getElementById("montant").disabled = false;		
   }
   try { 	}
       catch(e) {alert(e)}		
      
  /********************************  TAXA - (montante)  *******************************/  	
   if (a === "taxaMont") {
      document.getElementById("taxa").disabled = true;	
      document.getElementById("taxa").value ="";
       document.getElementById("juro").disabled = true;		
      document.getElementById("juro").value ="";	
       document.getElementById("tempo").disabled = false;		
      document.getElementById("capit").disabled = false;	
       document.getElementById("montant").disabled = false;		
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /********************************  TEMPO - (montante)  *******************************/  	
   if (a === "tempoMont") {
      document.getElementById("tempo").disabled = true;	
      document.getElementById("tempo").value ="";
       document.getElementById("juro").disabled = true;		
      document.getElementById("juro").value ="";	
       document.getElementById("taxa").disabled = false;		
      document.getElementById("capit").disabled = false;	
       document.getElementById("montant").disabled = false;		
   }
   try { 	}
       catch(e) {alert(e)}		
  
  } 
    
  function jurosimples1() {
      
   var ddl = document.getElementById("ops");
   var selectedValue = ddl.options[ddl.selectedIndex].value;
      if (selectedValue == "")
     {
      alert("Escolha uma opÃ§Ã£o para Calcular!");
     }	
      
    var a = document.forms["jurosimples"]["jurosimples_type"].value;
    
    /** ***********************    JUROS SIMPLES  ************************  **/  
    if (a === "juros") { 
      var capit = eval(document.jurosimples.capit.value.replace(",",".").replace(/ /g,""));
      var taxa = eval(document.jurosimples.taxa.value.replace(",",".").replace(/ /g,"")); 
      var tempo = eval(document.jurosimples.tempo.value.replace(",",".").replace(/ /g,""));   
    
      if (isNaN(capit) ) { alert("Digite um valor numÃ©rico para o capital!");
          document.jurosimples.capit.focus();
          document.jurosimples.capit.select();  
      return false;
    }
      if (isNaN(taxa)) { alert("Digite um valor numÃ©rico para a taxa!");
          document.jurosimples.taxa.focus();
          document.jurosimples.taxa.select();  
      return false;
    }
      if (isNaN(tempo) ) { alert("Digite um valor numÃ©rico para o tempo!");
          document.jurosimples.tempo.focus();
          document.jurosimples.tempo.select();  
      return false;
    }
  
  try {
   var capit = document.getElementById("resposta").value = roundNumber(capit, 2);
   var taxa = document.getElementById("resposta").value = roundNumber(taxa, 3);
   var tempo = document.getElementById("resposta").value = roundNumber(tempo, 2);
   var result1 = (capit * taxa * tempo) / 100; 
   var result1 = document.getElementById("resposta").value = roundNumber(result1, 2); 
   var result2 = capit * taxa * tempo; 
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 3); 
   
      document.getElementById('resposta').innerHTML = "<hr> O valor do Juros (J) Ã©: <br>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> J  &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> C âˆ™ i âˆ™ t  </td></tr><tr><td style='text-align:center;'> 100 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> J &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+capit+" âˆ™ "+taxa+" âˆ™ "+tempo+"  </td></tr><tr><td style='text-align:center;'> 100 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> J &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px; text-align:center;'> "+result2+"</td></tr><tr><td style='text-align:center;'> 100 </td></tr></tbody></table>  J =  "+result1.toFixed(2)+"  <br><br> Logo, o juros (J) Ã©: <br> J = <a1 style='color: #FF0000'>$ "+result1.toFixed(2)+"</a1>      <hr>   <h1 class='logomarca'> BpW </h1> ";
  
      document.jurosimples.capit.focus();
      document.jurosimples.capit.select(); 
      return false;	  
      } 
       catch(e) {alert(e)}
    }  
    
  
    /** ***********************    CAPITAL   ************************  **/  
    if (a === "capital") { 
      var juro = eval(document.jurosimples.juro.value.replace(",",".").replace(/ /g,""));
      var taxa = eval(document.jurosimples.taxa.value.replace(",",".").replace(/ /g,"")); 
      var tempo = eval(document.jurosimples.tempo.value.replace(",",".").replace(/ /g,""));   
    
      if (isNaN(juro) ) { alert("Digite um valor numÃ©rico para o juros!");
          document.jurosimples.juro.focus();
          document.jurosimples.juro.select();  
      return false;
    }
      if (isNaN(taxa)) { alert("Digite um valor numÃ©rico para a taxa!");
          document.jurosimples.taxa.focus();
          document.jurosimples.taxa.select();  
      return false;
    }
      if (isNaN(tempo) ) { alert("Digite um valor numÃ©rico para o tempo!");
          document.jurosimples.tempo.focus();
          document.jurosimples.tempo.select();  
      return false;
    }
  
  try {
   var juro = document.getElementById("resposta").value = roundNumber(juro, 2);
   var taxa = document.getElementById("resposta").value = roundNumber(taxa, 2);
   var tempo = document.getElementById("resposta").value = roundNumber(tempo, 2);	
   var result1 = (juro * 100) / (taxa * tempo); 
   var result1 = document.getElementById("resposta").value = roundNumber(result1, 2);	 
   var result2 = juro * 100; 
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 2);
   var result3 = taxa * tempo; 
   var result3 = document.getElementById("resposta").value = roundNumber(result3, 2); 
  
      document.getElementById('resposta').innerHTML = "<hr> O valor do Capital (C) Ã©: <br>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> J &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> C âˆ™ i âˆ™ t </td></tr><tr><td style='text-align:center;'> 100 </td></tr></tbody></table>     <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> "+juro+" &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  C âˆ™ "+taxa+" âˆ™ "+tempo+" </td></tr><tr><td style='text-align:center;'> 100 </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> C &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+juro+" âˆ™ 100 </td></tr><tr><td style='text-align:center;'> "+taxa+" âˆ™ "+tempo+" </td></tr></tbody></table>     <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> C &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+result2+" </td></tr><tr><td style='text-align:center;'> "+result3+" </td></tr></tbody></table>    C = "+result1.toFixed(2)+"  <br><br> Logo, o Capital (C) Ã©: <br> C = <a1 style='color: #FF0000'>$ "+result1.toFixed(2)+"</a1>       <hr>  <h1 class='logomarca'> BpW </h1> ";
  
      document.jurosimples.juro.focus();
      document.jurosimples.juro.select(); 
      return false;	  
      } 
       catch(e) {alert(e)}
    }  
      
    
    /** ***********************   TAXA   ************************  **/  
    if (a === "taxa") { 
      var juro = eval(document.jurosimples.juro.value.replace(",",".").replace(/ /g,""));
      var capit = eval(document.jurosimples.capit.value.replace(",",".").replace(/ /g,"")); 
      var tempo = eval(document.jurosimples.tempo.value.replace(",",".").replace(/ /g,""));   
    
      if (isNaN(capit)) { alert("Digite um valor numÃ©rico para o capital!");
          document.jurosimples.capit.focus();
          document.jurosimples.capit.select();  
      return false;
    }  
      if (isNaN(juro) ) { alert("Digite um valor numÃ©rico para o juros!");
          document.jurosimples.juro.focus();
          document.jurosimples.juro.select();  
      return false;
    }
      if (isNaN(tempo) ) { alert("Digite um valor numÃ©rico para o tempo!");
          document.jurosimples.tempo.focus();
          document.jurosimples.tempo.select();  
      return false;
    }
  
  try {
   var juro = document.getElementById("resposta").value = roundNumber(juro, 2);
   var capit = document.getElementById("resposta").value = roundNumber(capit, 2);
   var tempo = document.getElementById("resposta").value = roundNumber(tempo, 2);		
   var result1 = (juro * 100) / (capit * tempo); 
   var result1 = document.getElementById("resposta").value = roundNumber(result1, 2);	 
   var result2 = juro * 100;
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 2);	 
   var result3 = capit * tempo; 
   var result3 = document.getElementById("resposta").value = roundNumber(result3, 2);	 
  
      document.getElementById('resposta').innerHTML = "<hr> O valor da taxa (i) Ã©: <br> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> J &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> C âˆ™ i âˆ™ t </td></tr><tr><td style='text-align:center;'> 100 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> "+juro+" &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+capit+" âˆ™ i âˆ™ "+tempo+"</td></tr><tr><td style='text-align:center;'> 100 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> i &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+juro+" âˆ™ 100 </td></tr><tr><td style='text-align:center;'> "+capit+" âˆ™ "+tempo+" </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> i &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+result2+"</td></tr><tr><td style='text-align:center;'> "+result3+" </td></tr></tbody></table>   i = "+result1+"  <br><br> Logo, a taxa (i) Ã©: <br> i = <a1 style='color: #FF0000'> "+result1+" %</a1>       <hr>  <h1 class='logomarca'> BpW </h1> ";
  
      document.jurosimples.capit.focus();
      document.jurosimples.capit.select(); 
      return false;	  
  
      } 
       catch(e) {alert(e)}
    }  
  
    /** ***********************   Tempo  ************************  **/  
    if (a === "tempo") { 
      var juro = eval(document.jurosimples.juro.value.replace(",",".").replace(/ /g,""));
      var capit = eval(document.jurosimples.capit.value.replace(",",".").replace(/ /g,"")); 
      var taxa = eval(document.jurosimples.taxa.value.replace(",",".").replace(/ /g,""));   
    
      if (isNaN(capit)) { alert("Digite um valor numÃ©rico para o capital!");
          document.jurosimples.capit.focus();
          document.jurosimples.capit.select();  
      return false;
    }  
      if (isNaN(juro) ) { alert("Digite um valor numÃ©rico para o juro!");
          document.jurosimples.juro.focus();
          document.jurosimples.juro.select();  
      return false;
    }
      if (isNaN(taxa) ) { alert("Digite um valor numÃ©rico para a taxa!");
          document.jurosimples.taxa.focus();
          document.jurosimples.taxa.select();  
      return false;
    }
  
  try {
   var juro = document.getElementById("resposta").value = roundNumber(juro, 2);
   var capit = document.getElementById("resposta").value = roundNumber(capit, 2);
   var taxa = document.getElementById("resposta").value = roundNumber(taxa, 2);	
   var result1 = (juro * 100) / (capit * taxa); 
   var result1 = document.getElementById("resposta").value = roundNumber(result1, 2); 
   var result2 = juro * 100; 
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 2);  
   var result3 = capit * taxa; 
   var result3 = document.getElementById("resposta").value = roundNumber(result3, 2);  
  
      document.getElementById('resposta').innerHTML = "<hr> O valor do tempo (t) Ã©: <br>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> J &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  C âˆ™ i âˆ™ t</td></tr><tr><td style='text-align:center;'> 100 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> "+juro+" &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+capit+" âˆ™ "+taxa+" âˆ™ t </td></tr><tr><td style='text-align:center;'> 100 </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> t &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+juro+" âˆ™ 100</td></tr><tr><td style='text-align:center;'> "+capit+" âˆ™ "+taxa+" </td></tr></tbody></table>     <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> t &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+result2+"</td></tr><tr><td style='text-align:center;'> "+result3+" </td></tr></tbody></table>  t = "+result1+"  <br><br> Logo, o tempo (t) Ã©: <br> t = <a1 style='color: #FF0000'> "+result1+" </a1>   <hr>   <h1 class='logomarca'> BpW </h1> ";
  
      document.jurosimples.capit.focus();
      document.jurosimples.capit.select(); 
      return false;	  
  
      } 
       catch(e) {alert(e)}
    }  
  
  /** ***********************   MONTANTE  ************************  **/  
    if (a === "montante") { 
      var tempo = eval(document.jurosimples.tempo.value.replace(",",".").replace(/ /g,""));
      var capit = eval(document.jurosimples.capit.value.replace(",",".").replace(/ /g,"")); 
      var taxa = eval(document.jurosimples.taxa.value.replace(",",".").replace(/ /g,""));   
    
      if (isNaN(capit)) { alert("Digite um valor numÃ©rico para o capital!");
          document.jurosimples.capit.focus();
          document.jurosimples.capit.select();  
      return false;
    }  
      if (isNaN(tempo) ) { alert("Digite um valor numÃ©rico para o tempo!");
          document.jurosimples.tempo.focus();
          document.jurosimples.tempo.select();  
      return false;
    }
      if (isNaN(taxa) ) { alert("Digite um valor numÃ©rico para a taxa!");
          document.jurosimples.taxa.focus();
          document.jurosimples.taxa.select();  
      return false;
    }
  
  try {
   var tempo = document.getElementById("resposta").value = roundNumber(tempo, 2);
   var capit = document.getElementById("resposta").value = roundNumber(capit, 2);
   var taxa = document.getElementById("resposta").value = roundNumber(taxa, 5);		
   var result1 = capit * (1 +  (taxa/100) * tempo) ; 
   var result1 = document.getElementById("resposta").value = roundNumber(result1, 5);	 
   var result2 =  (taxa/100) * tempo ;
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 5);	 
   var result3 = 1 +  (taxa/100) * tempo ;  
   var result3 = document.getElementById("resposta").value = roundNumber(result3, 5);	 
   var result4 = (taxa/100) ;  
   var result4 = document.getElementById("resposta").value = roundNumber(result4, 5);	 
  
   
      document.getElementById('resposta').innerHTML = "<hr> O valor do montante (M) Ã©: <br> M = C âˆ™ (1 + i âˆ™ t) <br>    M = "+capit+" âˆ™ (1 + "+result4+" âˆ™ "+tempo+") <br>  M = "+capit+" âˆ™ (1 + "+result2+") <br> M = "+capit+" âˆ™ ("+result3+") <br>   M = "+result1.toFixed(2)+"  <br><br> Logo, o Montante (M) Ã©: <br> M = <a1 style='color: #FF0000'> $ "+result1.toFixed(2)+" </a1>     <hr>  <h1 class='logomarca'> BpW </h1> ";
  
      document.jurosimples.capit.focus();
      document.jurosimples.capit.select(); 
      return false;	  
  
      } 
       catch(e) {alert(e)}
    }  
  
  
  /** ***********************  CAPITAL (montante)  ************************  **/  
    if (a === "capitalMont") { 
      var tempo = eval(document.jurosimples.tempo.value.replace(",",".").replace(/ /g,""));
      var montant = eval(document.jurosimples.montant.value.replace(",",".").replace(/ /g,"")); 
      var taxa = eval(document.jurosimples.taxa.value.replace(",",".").replace(/ /g,""));   
    
      if (isNaN(montant)) { alert("Digite um valor numÃ©rico para o montante!");
          document.jurosimples.montant.focus();
          document.jurosimples.montant.select();  
      return false;
    }  
      if (isNaN(tempo) ) { alert("Digite um valor numÃ©rico para o tempo!");
          document.jurosimples.tempo.focus();
          document.jurosimples.tempo.select();  
      return false;
    }
      if (isNaN(taxa) ) { alert("Digite um valor numÃ©rico para a taxa!");
          document.jurosimples.taxa.focus();
          document.jurosimples.taxa.select();  
      return false;
    }
  
  try {
   var montant = document.getElementById("resposta").value = roundNumber(montant, 2);
   var tempo = document.getElementById("resposta").value = roundNumber(tempo, 2);
   var taxa = document.getElementById("resposta").value = roundNumber(taxa, 5);	
   var result1 = montant/(1 + (taxa/100) * tempo) ; 
   var result1 = document.getElementById("resposta").value = roundNumber(result1, 5);	
   var result2 =  (taxa/100) * tempo ;
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 5); 
   var result3 = 1 + (taxa/100) * tempo ;  
   var result3 = document.getElementById("resposta").value = roundNumber(result3, 5); 
   var result4 = (taxa/100) ;  
   var result4 = document.getElementById("resposta").value = roundNumber(result4, 5); 
  
      document.getElementById('resposta').innerHTML = "<hr> O valor do capital (C) Ã©: <br> M = C âˆ™ (1 + i âˆ™ t) <br>  "+montant+" = C âˆ™ (1 + "+result4+" âˆ™ "+tempo+") <br>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> C &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+montant+"</td></tr><tr><td style='text-align:center;'> 1 + "+result4+" âˆ™ "+tempo+" </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> C &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+montant+"</td></tr><tr><td style='text-align:center;'> 1 + "+result2+" </td></tr></tbody></table>     <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> C &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+montant+"</td></tr><tr><td style='text-align:center;'> "+result3+" </td></tr></tbody></table>    C = "+result1.toFixed(2)+"  <br><br> Logo, o capital (C) Ã©: <br> C = <a1 style='color: #FF0000'> $ "+result1.toFixed(2)+" </a1>     <hr>  <h1 class='logomarca'> BpW </h1> ";
  
      document.jurosimples.montant.focus();
      document.jurosimples.montant.select(); 
      return false;	  
  
      } 
       catch(e) {alert(e)}
    } 
  
  
  /*************************  TAXA (montante)  ************************  **/  
    if (a === "taxaMont") { 
      var tempo = eval(document.jurosimples.tempo.value.replace(",",".").replace(/ /g,""));
      var montant = eval(document.jurosimples.montant.value.replace(",",".").replace(/ /g,"")); 
      var capit = eval(document.jurosimples.capit.value.replace(",",".").replace(/ /g,""));   
    
      if (isNaN(montant)) { alert("Digite um valor numÃ©rico para o montante!");
          document.jurosimples.montant.focus();
          document.jurosimples.montant.select();  
      return false;
    }  
      if (isNaN(tempo) ) { alert("Digite um valor numÃ©rico para o tempo!");
          document.jurosimples.tempo.focus();
          document.jurosimples.tempo.select();  
      return false;
    }
      if (isNaN(capit) ) { alert("Digite um valor numÃ©rico para o capital!");
          document.jurosimples.capit.focus();
          document.jurosimples.capit.select();  
      return false;
    }
  
  try {
   var montant = document.getElementById("resposta").value = roundNumber(montant, 2);
   var tempo = document.getElementById("resposta").value = roundNumber(tempo, 2);
   var capit = document.getElementById("resposta").value = roundNumber(capit, 2);	
   var result1 =  ((montant/capit - 1)) / tempo ; 
   var result1 = document.getElementById("resposta").value = roundNumber(result1, 2);	
   var result2 =  montant/capit ;
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 2);	 
   var result3 =  (montant/capit) - 1 ; 
   var result3 = document.getElementById("resposta").value = roundNumber(result3, 2);	 
   var result4 =  result1 * 100 ; 
   var result4 = document.getElementById("resposta").value = roundNumber(result4, 2);	 
   
      document.getElementById('resposta').innerHTML = "<hr> O valor da taxa (i) Ã©: <br> M = C âˆ™ (1 + i âˆ™ t) <br>  "+montant+" = "+capit+" âˆ™ (1 + i âˆ™ "+tempo+") <br>  <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> "+montant+" </td><td rowspan='2'> &nbsp;=&nbsp; 1 + "+tempo+"i   </td></tr><tr><td> "+capit+" </td> </tr></tbody></table>  "+result2+" - 1 = "+tempo+"i  <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> "+result3+" </td><td rowspan='2'> &nbsp;=&nbsp; i  </td></tr><tr><td> "+tempo+" </td> </tr></tbody></table> i = "+result1+"  <br> ou <br>  i = "+result1+" Ã— 100 = "+result4+"% <br><br> Logo, a taxa (i) Ã©: <br> i = <a1 style='color: #FF0000'> "+result4+"% </a1>  <hr>  <h1 class='logomarca'> BpW </h1> ";
      document.jurosimples.montant.focus();
      document.jurosimples.montant.select(); 
      return false;	  
      } 
       catch(e) {alert(e)}
    } 
  
  
  /*************************  TEMPO (montante)  ************************  **/  
    if (a === "tempoMont") { 
      var taxa = eval(document.jurosimples.taxa.value.replace(",",".").replace(/ /g,""));
      var montant = eval(document.jurosimples.montant.value.replace(",",".").replace(/ /g,"")); 
      var capit = eval(document.jurosimples.capit.value.replace(",",".").replace(/ /g,""));   
    
      if (isNaN(montant)) { alert("Digite um valor numÃ©rico para o montante!");
          document.jurosimples.montant.focus();
          document.jurosimples.montant.select();  
      return false;
    }  
      if (isNaN(taxa) ) { alert("Digite um valor numÃ©rico para a taxa!");
          document.jurosimples.taxa.focus();
          document.jurosimples.taxa.select();  
      return false;
    }
      if (isNaN(capit) ) { alert("Digite um valor numÃ©rico para o capital!");
          document.jurosimples.capit.focus();
          document.jurosimples.capit.select();  
      return false;
    }
  
  try {
   var montant = document.getElementById("resposta").value = roundNumber(montant, 2);
   var taxa = document.getElementById("resposta").value = roundNumber(taxa, 5);
   var capit = document.getElementById("resposta").value = roundNumber(capit, 2);	
   var result1 =  ((montant/capit - 1)) / (taxa/100) ; 
   var result1 = document.getElementById("resposta").value = roundNumber(result1, 5);	 
   var result2 =  montant/capit ;
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 5);	  
   var result3 =  (montant/capit) - 1 ; 
   var result3 = document.getElementById("resposta").value = roundNumber(result3, 5);	  
   var result4 =  (taxa/100); 
   var result4 = document.getElementById("resposta").value = roundNumber(result4, 5);	  
   
      document.getElementById('resposta').innerHTML = "<hr> O valor do tempo (t) Ã©: <br> M = C âˆ™ (1 + i âˆ™ t) <br>  "+montant+" = "+capit+" âˆ™ (1 + "+result4+" âˆ™ t) <br>   <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> "+montant+"  </td><td rowspan='2'> &nbsp;=&nbsp; 1 + "+result4+"t  </td></tr><tr><td> "+capit+" </td> </tr></tbody></table>  "+result2+" - 1 = "+result4+"t   <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> "+result3+" </td><td rowspan='2'> &nbsp;=&nbsp; t  </td></tr><tr><td>  "+result4+" </td> </tr></tbody></table> t = "+result1+"   <br><br> Logo, a tempo (t) Ã©: <br> t = <a1 style='color: #FF0000'> "+result1+" </a1>  <hr>  <h1 class='logomarca'> BpW </h1> ";
      document.jurosimples.montant.focus();
      document.jurosimples.montant.select(); 
      return false;	  
      } 
       catch(e) {alert(e)}
    }   
  }  
  
  
  /***#######################################                 ###########################################     **/
  /***########################################  JUROS COMPOSTO  ###########################################     **/
  
  function jurocomposto2() {
    var a = document.forms["jurocomposto"]["jurocomposto_type"].value;
  /**************************   MONTANTE   ***********************/  
   if (a === "montante") {
      document.getElementById("montant").disabled = true;	
      document.getElementById("montant").value ="";
      document.getElementById("tempo").disabled = false;	
       document.getElementById("capit").disabled = false;		
       document.getElementById("taxa").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /**************************   CAPITAL   ***********************/  
   if (a === "capital") {
      document.getElementById("capit").disabled = true;	
      document.getElementById("capit").value ="";
      document.getElementById("tempo").disabled = false;	
       document.getElementById("montant").disabled = false;		
       document.getElementById("taxa").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /**************************   TAXA   ***********************/  
   if (a === "taxa") {
      document.getElementById("taxa").disabled = true;	
      document.getElementById("taxa").value ="";
      document.getElementById("tempo").disabled = false;	
       document.getElementById("montant").disabled = false;		
       document.getElementById("capit").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
      
  /**************************   TEMPO   ***********************/  
   if (a === "tempo") {
      document.getElementById("tempo").disabled = true;	
      document.getElementById("tempo").value ="";
      document.getElementById("taxa").disabled = false;	
       document.getElementById("montant").disabled = false;		
       document.getElementById("capit").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
      
  } 
   
  function jurocomposto1() {
   var ddl = document.getElementById("ops");
   var selectedValue = ddl.options[ddl.selectedIndex].value;
      if (selectedValue == "")
     {
      alert("Escolha uma opÃ§Ã£o para Calcular!");
     } 
     
    var a = document.forms["jurocomposto"]["jurocomposto_type"].value;
    
    /** ***********************   MONTANTE     ************************  **/  
    if (a === "montante") { 
      var capit = eval(document.jurocomposto.capit.value.replace(",",".").replace(/ /g,""));
      var taxa = eval(document.jurocomposto.taxa.value.replace(",",".").replace(/ /g,"")); 
      var tempo = eval(document.jurocomposto.tempo.value.replace(",",".").replace(/ /g,""));   
      
      if (isNaN(capit) ) { alert("Digite um valor numÃ©rico para o capital!");
          document.jurocomposto.capit.focus();
          document.jurocomposto.capit.select();  
      return false;
    }
      if (isNaN(taxa)) { alert("Digite um valor numÃ©rico para a taxa!");
          document.jurocomposto.taxa.focus();
          document.jurocomposto.taxa.select();  
      return false;
    }
      if (isNaN(tempo) ) { alert("Digite um valor numÃ©rico para o tempo!");
          document.jurocomposto.tempo.focus();
          document.jurocomposto.tempo.select();  
      return false;
    }
  
  try {
   var capit = document.getElementById("resposta").value = roundNumber(capit, 2);	
   var taxa = document.getElementById("resposta").value = roundNumber(taxa, 6);		
   var tempo = document.getElementById("resposta").value = roundNumber(tempo, 2);
   var result2 =   taxa/100; 
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 6); 
   var result3 =  1 + result2;
   var result3 = document.getElementById("resposta").value = roundNumber(result3, 6);  
   var result4 =  (Math.pow(result3, tempo)); 
   var result4 = document.getElementById("resposta").value = roundNumber(result4, 6);  
   var result1 =  capit * (Math.pow(result3, tempo));  
   var result1 = document.getElementById("resposta").value = roundNumber(result1, 2); 
   
    document.getElementById('resposta').innerHTML = "<hr> O valor do Montante (M) Ã©: <br>  M = C Ã— (1 + i)<span class=\'exp\'>t</span>  <br>  M = "+capit+" Ã— (1 + "+result2+")<span class=\'exp\'>"+tempo+" </span> <br>  M = "+capit+" Ã— ("+result3+")<span class=\'exp\'>"+tempo+" </span>  <br>  M = "+capit+" Ã— "+result4+" <br>  M = "+result1.toFixed(2)+" <br><br>  Logo, o montante (M) Ã©: <br> M = <a1 style='color: #FF0000'>$ "+result1.toFixed(2)+"</a1>   <hr><h1 class='logomarca'> BpW </h1> ";
  
      document.jurocomposto.capit.focus();
      document.jurocomposto.capit.select(); 
      return false;	  
      } 
       catch(e) {alert(e)}
    }  
    
  
    /** ***********************   CAPITAL     ************************  **/  
    if (a === "capital") { 
      var montant = eval(document.jurocomposto.montant.value.replace(",",".").replace(/ /g,""));
      var taxa = eval(document.jurocomposto.taxa.value.replace(",",".").replace(/ /g,"")); 
      var tempo = eval(document.jurocomposto.tempo.value.replace(",",".").replace(/ /g,""));   
      
      if (isNaN(montant) ) { alert("Digite um valor numÃ©rico para o montante!");
          document.jurocomposto.montant.focus();
          document.jurocomposto.montant.select();  
      return false;
    }
      if (isNaN(taxa)) { alert("Digite um valor numÃ©rico para a taxa!");
          document.jurocomposto.taxa.focus();
          document.jurocomposto.taxa.select();  
      return false;
    }
      if (isNaN(tempo) ) { alert("Digite um valor numÃ©rico para o tempo!");
          document.jurocomposto.tempo.focus();
          document.jurocomposto.tempo.select();  
      return false;
    }
  
  try {
   var montant = document.getElementById("resposta").value = roundNumber(montant, 2);	
   var taxa = document.getElementById("resposta").value = roundNumber(taxa, 6);		
   var tempo = document.getElementById("resposta").value = roundNumber(tempo, 2);
   var result2 =   taxa/100; 
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 5); 
   var result3 =  1 + result2;
   var result3 = document.getElementById("resposta").value = roundNumber(result3, 5);  
   var result4 =  (Math.pow(result3, tempo)); 
   var result4 = document.getElementById("resposta").value = roundNumber(result4, 5);  
   var result1 =  montant / (Math.pow(result3, tempo));  
   var result1 = document.getElementById("resposta").value = roundNumber(result1, 5);  
  
      document.getElementById('resposta').innerHTML = "<hr> O valor do capital (C) Ã©: <br>  M = C Ã— (1 + i)<span class=\'exp\'>t</span>  <br>  "+montant+" = C Ã— (1 + "+result2+")<span class=\'exp\'>"+tempo+" </span> <br> "+montant+" = C Ã— ("+result3+")<span class=\'exp\'>"+tempo+" </span>  <br>  "+montant+" = C Ã— "+result4+" <br>  <table id='fracao'><tbody><tr><td  rowspan='2'>C  &nbsp;=&nbsp;  </td><td style='border-bottom:solid 1.3px;text-align:center; '>  "+montant+"  </td></tr><tr><td style='text-align:center;'> "+result4+" </td></tr></tbody></table>    <br>  Logo, o capital (C) Ã©: <br> C = <a1 style='color: #FF0000'>$ "+result1.toFixed(2)+"</a1>   <hr><h1 class='logomarca'> BpW </h1> ";
  
      document.jurocomposto.montant.focus();
      document.jurocomposto.montant.select(); 
      return false;	  
      } 
       catch(e) {alert(e)}
    }    
    
    
    /** ***********************   TAXA    ************************  **/  
    if (a === "taxa") { 
      var montant = eval(document.jurocomposto.montant.value.replace(",",".").replace(/ /g,""));
      var capit = eval(document.jurocomposto.capit.value.replace(",",".").replace(/ /g,"")); 
      var tempo = eval(document.jurocomposto.tempo.value.replace(",",".").replace(/ /g,""));   
      
      if (isNaN(montant) ) { alert("Digite um valor numÃ©rico para o montante!");
          document.jurocomposto.montant.focus();
          document.jurocomposto.montant.select();  
      return false;
    }
      if (isNaN(capit)) { alert("Digite um valor numÃ©rico para o capital!");
          document.jurocomposto.capit.focus();
          document.jurocomposto.capit.select();  
      return false;
    }
      if (isNaN(tempo) ) { alert("Digite um valor numÃ©rico para o tempo!");
          document.jurocomposto.tempo.focus();
          document.jurocomposto.tempo.select();  
      return false;
    }
  
  try {
   var montant = document.getElementById("resposta").value = roundNumber(montant, 2);	
   var capit = document.getElementById("resposta").value = roundNumber(capit, 2);		
   var tempo = document.getElementById("resposta").value = roundNumber(tempo, 2);	
   var result3 =  montant / capit;
   var result3 = document.getElementById("resposta").value = roundNumber(result3, 2);	 
   var result5 =  Math.pow(result3, 1/tempo);
   var result5 = document.getElementById("resposta").value = roundNumber(result5, 3); 
   var result6 =  result5 - 1;  
   var result6 = document.getElementById("resposta").value = roundNumber(result6, 4); 
   var result7 =  result6 * 100; 
   var result7 = document.getElementById("resposta").value = roundNumber(result7, 2); 
   
      document.getElementById('resposta').innerHTML = "<hr> O valor da taxa (i) Ã©: <br>  M = C Ã— (1 + i)<span class=\'exp\'>t</span>  <br>  "+montant+" = "+capit+" Ã— (1 + i)<span class=\'exp\'>"+tempo+" </span> <br> <table id='fracao'><tbody><tr><td style='border-bottom:solid 1px'> "+montant+" </td><td rowspan='2'> &nbsp;=&nbsp; (1 + i)<span class=\'exp\'>"+tempo+" </span> </td></tr><tr><td> "+capit+" </td> </tr></tbody></table>   "+result3+" = (1 + i)<span class=\'exp\'>"+tempo+" </span> <br><br>  <span class=\'exp\'>"+tempo+"</span>âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px;'>"+result3+"</a1> &nbsp;=&nbsp;   <span class=\'exp\'>"+tempo+"</span>âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px;'>(1 + i)<span class=\'exp\'>"+tempo+" </span></a1>  <br>  "+result5+" = 1 + i <br>   "+result5+" - 1 =  i <br>    "+result6+" =  i <br>    i =  "+result6+" <br> ou  <br>  i =  "+result6+" Ã— 100 = "+result7+"% <br><br>     Logo, a taxa (i) Ã©: <br> i = <a1 style='color: #FF0000'>"+result7+"%</a1>   <hr><h1 class='logomarca'> BpW </h1> ";
  
      document.jurocomposto.montant.focus();
      document.jurocomposto.montant.select(); 
      return false;	  
      } 
       catch(e) {alert(e)}
    }    
    
    
    
    /** ***********************  TEMPO    ************************  **/  
    if (a === "tempo") { 
      var montant = eval(document.jurocomposto.montant.value.replace(",",".").replace(/ /g,""));
      var capit = eval(document.jurocomposto.capit.value.replace(",",".").replace(/ /g,"")); 
      var taxa = eval(document.jurocomposto.taxa.value.replace(",",".").replace(/ /g,""));   
      
      if (isNaN(montant) ) { alert("Digite um valor numÃ©rico para o montante!");
          document.jurocomposto.montant.focus();
          document.jurocomposto.montant.select();  
      return false;
    }
      if (isNaN(capit)) { alert("Digite um valor numÃ©rico para o capital!");
          document.jurocomposto.capit.focus();
          document.jurocomposto.capit.select();  
      return false;
    }
      if (isNaN(taxa) ) { alert("Digite um valor numÃ©rico para o taxa!");
          document.jurocomposto.taxa.focus();
          document.jurocomposto.taxa.select();  
      return false;
    }
  
  try {
   var montant = document.getElementById("resposta").value = roundNumber(montant, 2);	
   var capit = document.getElementById("resposta").value = roundNumber(capit, 2);		
   var taxa = document.getElementById("resposta").value = roundNumber(taxa, 5);		
   var result2 = taxa/100;
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 5);  
   var result3 =  montant/capit;
   var result3 = document.getElementById("resposta").value = roundNumber(result3, 3);  
   var result4 =  1 + result2;  
   var result4 = document.getElementById("resposta").value = roundNumber(result4, 5);  
   var result5 =  Math.log(result3) ; 
   var result5 = document.getElementById("resposta").value = roundNumber(result5, 5);  
   var result6 =  Math.log(result4) ; 
   var result6 = document.getElementById("resposta").value = roundNumber(result6, 5);  
   var result7 =  result5 / result6; 
   var result7 = document.getElementById("resposta").value = roundNumber(result7, 3);  
   
       document.getElementById('resposta').innerHTML = "<hr> O valor do tempo (t) Ã©: <br>  M = C Ã— (1 + i)<span class=\'exp\'>t</span>  <br>  "+montant+" = "+capit+" Ã— (1 + "+result2+")<span class=\'exp\'>t</span> <br>  <table id='fracao'><tbody><tr><td style='border-bottom:solid 1px'> "+montant+" </td><td rowspan='2'> &nbsp;=&nbsp; (1 + "+result2+")<span class=\'exp\'>t</span> </td></tr><tr><td> "+capit+" </td> </tr></tbody></table>   "+result3+" = "+result4+"<span class=\'exp\'>t</span> <br> Agora, aplicando o log em ambos lados da equaÃ§Ã£o: <br>   log("+result3+") = log("+result4+"<span class=\'exp\'>t</span>) <br>   log("+result3+") = t Ã— log("+result4+")  <table id='fracao'><tbody><tr> <td rowspan='2'>t &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1px'>log("+result3+")</td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1px'>"+result5+"</td></tr> <tr> <td>log("+result4+")</td><td>"+result6+"</td> </tr></tbody></table>    t =  "+result7+"  <br> Logo, o tempo (t) Ã©: <br> t = <a1 style='color: #FF0000'>"+result7+" u.t</a1>   <hr><h1 class='logomarca'> BpW </h1> ";
  
      document.jurocomposto.montant.focus();
      document.jurocomposto.montant.select(); 
      return false;	  
      } 
       catch(e) {alert(e)}
    }  
  
   }  
  
  
  
   
  
  /***#######################################                ###########################################     **/
  /***########################################  PORCENTAGEM  ###########################################     **/
  
  function porcentagem2() {
    var a = document.forms["porcentagem"]["porcentagem_type"].value;
  /**************************   Valor fornecendo a porcentagem  ***********************/  
   if (a === "valor_1") {
      document.getElementById("valor2").disabled = true;	
      document.getElementById("valor2").value ="";
      document.getElementById("valor1").disabled = false;	
       document.getElementById("taxa").disabled = false;		
   }
   try { 	}
       catch(e) {alert(e)}	
      
   /**************************   Valor fornecendo a porcentagem  ***********************/  
   if (a === "taxa_1") {
      document.getElementById("taxa").disabled = true;	
      document.getElementById("taxa").value ="";
      document.getElementById("valor1").disabled = false;	
       document.getElementById("valor2").disabled = false;		
   }
   try { 	}
       catch(e) {alert(e)}	 	
      
   /**************************   Reajuste ou aumento  ***********************/  
   if (a === "aumen_reajuste") {
      document.getElementById("valor2").disabled = true;	
      document.getElementById("valor2").value ="";
      document.getElementById("valor1").disabled = false;	
       document.getElementById("taxa").disabled = false;		
   }
   try { 	}
       catch(e) {alert(e)}	
  
   /**************************   Desconto  ***********************/  
   if (a === "desconto") {
      document.getElementById("valor2").disabled = true;	
      document.getElementById("valor2").value ="";
      document.getElementById("valor1").disabled = false;	
       document.getElementById("taxa").disabled = false;		
   }
   try { 	}
       catch(e) {alert(e)}
      
   /**************************   Desconto percentual  ***********************/  
   if (a === "desconto_2") {
      document.getElementById("taxa").disabled = true;	
      document.getElementById("taxa").value ="";
      document.getElementById("valor1").disabled = false;	
       document.getElementById("valor2").disabled = false;		
   }
   try { 	}
       catch(e) {alert(e)}	
  
      
  }  
  
  
  
  function porcentagem1() {
   var ddl = document.getElementById("ops");
   var selectedValue = ddl.options[ddl.selectedIndex].value;
      if (selectedValue == "")
     {
      alert("Escolha uma opÃ§Ã£o para Calcular!");
     } 	
      
    var a = document.forms["porcentagem"]["porcentagem_type"].value;
    
    /** ***********************  Valor fornecendo a porcentagem    ************************  **/  
    if (a === "valor_1") { 
      var valor1 = eval(document.porcentagem.valor1.value.replace(",",".").replace(/ /g,""));
      var taxa = eval(document.porcentagem.taxa.value.replace(",",".").replace(/ /g,"")); 
      
      if (isNaN(valor1) ) { alert("Digite um valor numÃ©rico!");
          document.porcentagem.valor1.focus();
          document.porcentagem.valor1.select();  
      return false;
    }
      if (isNaN(taxa)) { alert("Digite um valor numÃ©rico para a taxa!");
          document.porcentagem.taxa.focus();
          document.porcentagem.taxa.select();  
      return false;
    }
  
  try {
   var valor1 = document.getElementById("resposta").value = roundNumber(valor1, 2);	
   var taxa = document.getElementById("resposta").value = roundNumber(taxa, 5);	
   var result1 =   taxa/100; 
   var result1 = document.getElementById("resposta").value = roundNumber(result1, 5);	 
   var result2 =   result1 * valor1; 
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 5);	
  
      document.getElementById('resposta').innerHTML = " <hr> Quanto Ã© <a1 style='color: #FF0000'>"+taxa+"%</a1> de <a1 style='color: #FF0000'>"+valor1+"</a1>? <br><br>  Observe que: "+taxa+" Ã· 100 = "+result1+" <br> Logo, <br>&emsp;  "+valor1+" Ã— "+result1+" = "+result2+" <br>   Portanto, o valor Ã©: <br> &emsp;  <a1 style='color: #FF0000'> "+result2+"</a1>   <hr><h1 class='logomarca'> BpW </h1> ";
  
      document.porcentagem.valor1.focus();
      document.porcentagem.valor1.select(); 
      return false;	  
      } 
       catch(e) {alert(e)}
    }  
    
  
    /** ***********************  Porcentagem fornecendo o valor    ************************  **/  
    if (a === "taxa_1") { 
      var valor1 = eval(document.porcentagem.valor1.value.replace(",",".").replace(/ /g,""));
      var valor2 = eval(document.porcentagem.valor2.value.replace(",",".").replace(/ /g,"")); 
      
      if (isNaN(valor1) ) { alert("Digite um valor numÃ©rico!");
          document.porcentagem.valor1.focus();
          document.porcentagem.valor1.select();  
      return false;
    }
      if (isNaN(valor2)) { alert("Digite um valor numÃ©rico!");
          document.porcentagem.valor2.focus();
          document.porcentagem.valor2.select();  
      return false;
    }
  
  try {
   var valor1 = document.getElementById("resposta").value = roundNumber(valor1, 2);	
   var valor2 = document.getElementById("resposta").value = roundNumber(valor2, 2);		
   var result1 = valor1/valor2; 
   var result1 = document.getElementById("resposta").value = roundNumber(result1, 5);	 
   var result2 = result1 * 100; 
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 5);	  
   
      document.getElementById('resposta').innerHTML = "<hr>O valor <a1 style='color: #FF0000'>"+valor1+"</a1> corresponde a qual porcentagem de <a1 style='color: #FF0000'>"+valor2+"</a1>?  <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> "+valor1+" </td><td rowspan='2'> &nbsp; = &nbsp; "+result1+" </td></tr><tr><td> "+valor2+" </td> </tr></tbody></table>   <br> Logo,<br>&emsp;  "+result1+" Ã— 100 =  "+result2+" <br> Portanto, o valor Ã© de: <br>&emsp;    <a1 style='color: #FF0000'> "+result2+" %</a1> <hr>  <h1 class='logomarca'> BpW </h1> ";
  
      document.porcentagem.valor1.focus();
      document.porcentagem.valor1.select(); 
      return false;	  
      } 
       catch(e) {alert(e)}
    }  
      
    
     /** ***********************  Aumento ou reajuste    ************************  **/  
    if (a === "aumen_reajuste") { 
      var valor1 = eval(document.porcentagem.valor1.value.replace(",",".").replace(/ /g,""));
      var taxa = eval(document.porcentagem.taxa.value.replace(",",".").replace(/ /g,"")); 
      
      if (isNaN(valor1)) { alert("Digite um valor numÃ©rico!");
          document.porcentagem.valor1.focus();
          document.porcentagem.valor1.select();  
      return false;
    }
      if (isNaN(taxa)) { alert("Digite um valor numÃ©rico!");
          document.porcentagem.taxa.focus();
          document.porcentagem.taxa.select();  
      return false;
    }
  
  try {
   var valor1 = document.getElementById("resposta").value = roundNumber(valor1, 3);	
   var taxa = document.getElementById("resposta").value = roundNumber(taxa, 6);		
   var result1 = taxa/100; 
   var result1 = document.getElementById("resposta").value = roundNumber(result1, 6); 
   var result2 = 1+ taxa/100; 
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 6); 
   var result3 = result2 * valor1; 
   var result3 = document.getElementById("resposta").value = roundNumber(result3, 6);  
   
      document.getElementById('resposta').innerHTML = "<hr>Tenho <a1 style='color: #FF0000'>"+valor1+"</a1> e quero reajustar <a1 style='color: #FF0000'>"+taxa+"%</a1>. Qual Ã© o resultado? <br> Observe que: <br>&emsp; "+taxa+" Ã· 100 = "+result1+" <br> Portanto, basta multiplicar por: <br>&emsp; = 1 + "+result1+" = "+result2+" <br>   Logo,<br>&emsp;  "+valor1+" Ã— "+result2+" =  "+result3+" <br> Portanto, o valor Ã©: <br>&emsp;    <a1 style='color: #FF0000'> "+result3+" </a1>   <hr><h1 class='logomarca'> BpW </h1> ";
  
      document.porcentagem.valor1.focus();
      document.porcentagem.valor1.select(); 
      return false;	  
      } 
       catch(e) {alert(e)}
    }  
      
     /** ***********************  Desconto    ************************  **/  
    if (a === "desconto") { 
      var valor1 = eval(document.porcentagem.valor1.value.replace(",",".").replace(/ /g,""));
      var taxa = eval(document.porcentagem.taxa.value.replace(",",".").replace(/ /g,"")); 
      
      if (isNaN(valor1) ) { alert("Digite um valor numÃ©rico!");
          document.porcentagem.valor1.focus();
          document.porcentagem.valor1.select();  
      return false;
    }
      if (isNaN(taxa)) { alert("Digite um valor numÃ©rico!");
          document.porcentagem.taxa.focus();
          document.porcentagem.taxa.select();  
      return false;
    }
  
  try {
   var valor1 = document.getElementById("resposta").value = roundNumber(valor1, 3);	
   var taxa = document.getElementById("resposta").value = roundNumber(taxa, 6);		
   var result1 =  100 - taxa; 
   var result1 = document.getElementById("resposta").value = roundNumber(result1, 6); 
   var result2 = result1/100; 
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 6);  
   var result3 = result2 * valor1; 
   var result3 = document.getElementById("resposta").value = roundNumber(result3, 6);  
   
      document.getElementById('resposta').innerHTML = "<hr>Tenho <a1 style='color: #FF0000'>"+valor1+"</a1> e quero descontar <a1 style='color: #FF0000'>"+taxa+"%</a1>. Qual Ã© o resultado? <br> Observe que:<br>&emsp; 100% âˆ’ "+taxa+"% = "+result1+"% <br> Logo, <br> &emsp; "+result1+"% Ã· 100 = "+result2+" <br>  Portanto, basta multiplicar por: "+result2+" <br>     Logo,<br>&emsp;  "+valor1+" Ã— "+result2+" =  "+result3+" <br> Portanto, o valor Ã©: <br>&emsp;    <a1 style='color: #FF0000'> "+result3+" </a1>  <hr> <h1 class='logomarca'> BpW </h1> ";
  
      document.porcentagem.valor1.focus();
      document.porcentagem.valor1.select(); 
      return false;	  
      } 
       catch(e) {alert(e)}
    } 	
      
      
     /** ***********************  Desconto percentual    ************************  **/  
    if (a === "desconto_2") { 
      var valor1 = eval(document.porcentagem.valor1.value.replace(",",".").replace(/ /g,""));
      var valor2 = eval(document.porcentagem.valor2.value.replace(",",".").replace(/ /g,"")); 
      
      if (isNaN(valor1) || (valor1 < valor2) ) { alert("Digite um valor numÃ©rico e/ou o valor 1 deve ser menor do que valor 2!!");
          document.porcentagem.valor1.focus();
          document.porcentagem.valor1.select();  
      return false;
    }
      if (isNaN(valor2)) { alert("Digite um valor numÃ©rico!");
          document.porcentagem.valor2.focus();
          document.porcentagem.valor2.select();  
      return false;
    }
  
  try {
   var valor1 = document.getElementById("resposta").value = roundNumber(valor1, 4);	
   var valor2 = document.getElementById("resposta").value = roundNumber(valor2, 6);		
   var result1 =  valor1 - valor2; 	
   var result1 = document.getElementById("resposta").value = roundNumber(result1, 6); 
   var result2 = result1/valor1;
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 6); 
   var result3 = result2 * 100; 
   var result3 = document.getElementById("resposta").value = roundNumber(result3, 6); 
   
       document.getElementById('resposta').innerHTML = "<hr>Tenho <a1 style='color: #FF0000'>"+valor1+"</a1> e diminuiu para <a1 style='color: #FF0000'>"+valor2+"</a1>. Qual foi a diminuiÃ§Ã£o percentual? <br> Observe que:<br>&emsp; "+valor1+" âˆ’ "+valor2+" = "+result1+" <br> Como <br> &emsp; "+result1+" Ã· "+valor1+" = "+result2+" <br> Portanto, basta multiplicar por 100: <br> &emsp; "+result2+" Ã— 100 = "+result3+" <br> Portanto, o valor Ã©: <br>&emsp; <a1 style='color: #FF0000'> "+result3+"% </a1>  <hr><h1 class='logomarca'> BpW </h1> ";
  
      document.porcentagem.valor1.focus();
      document.porcentagem.valor1.select(); 
      return false;	  
      } 
       catch(e) {alert(e)}
    } 	
   }
  
  
   /** =============================  Ãrea do TriÃ¢ngulo: Determinante (G.A).  ============================= **/
  function calcularAreaTrianguloDeterminante() {
   var x1 = parseFloat(document.areas.campoX1.value.replace(",", "."));
   var y1 = parseFloat(document.areas.campoY1.value.replace(",", ".")); 
   var x2 = parseFloat(document.areas.campoX2.value.replace(",", ".")); 
   var y2 = parseFloat(document.areas.campoY2.value.replace(",", "."));
   var x3 = parseFloat(document.areas.campoX3.value.replace(",", ".")); 
   var y3 = parseFloat(document.areas.campoY3.value.replace(",", ".")); 
   
   if (isNaN(x1) || isNaN(y1) || isNaN(x2)  || isNaN(y2)  || isNaN(x3)  || isNaN(y3)) { alert("Preencher todos os campos e/ou informar apenas nÃºmeros!");
    return false;
   }
   try {
   var x1 = document.getElementById("resposta").value = roundNumber(x1, 2);	
   var y1 = document.getElementById("resposta").value = roundNumber(y1, 2);
   var x2 = document.getElementById("resposta").value = roundNumber(x2, 2);
   var y2 = document.getElementById("resposta").value = roundNumber(y2, 2);	
   var x3 = document.getElementById("resposta").value = roundNumber(x3, 2);
   var y3 = document.getElementById("resposta").value = roundNumber(y3, 2);
   var Determinante = x1*y2*1 + y1*1*x3 + 1*x2*y3 - x3*y2*1 - y3*1*x1 - 1*x2*y1;	
   var Determinante = document.getElementById("resposta").value = roundNumber(Determinante, 2); 
   var areatdeter = (Math.abs(x1*y2*1 + y1*1*x3 + 1*x2*y3 - x3*y2*1 - y3*1*x1 - 1*x2*y1)) *0.5;
   var areatdeter = document.getElementById("resposta").value = roundNumber(areatdeter, 2); 
   
      document.getElementById('resposta').innerHTML = "<hr>   <table style='border-left: solid 1.5px; width:150px;  '> <tbody> <tr>  <td><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td>  <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> <td>&ensp;1</td> <td style='border-left: solid 1.5px'> <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> </tr>  <tr> <td><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td> <td>&ensp;1</td> <td style='border-left: solid 1.5px'><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td>  <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td>   </tr> <tr> <td><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td>  <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td>  <td>&ensp;1</td> <td style='border-left: solid 1.5px'><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td> <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td> </tr>  </tbody> </table> <br>  <div style='line-height: 22px;'>  O determinante Ã©: <br>  D = xAâˆ™yB + yAâˆ™xC + xBâˆ™yC - <br> &emsp;&emsp; - xCâˆ™yB - yCâˆ™xA - xBâˆ™yA = <a1 style='color: #FF0000'> "+Determinante+"</a1><br><br> A Ã¡rea do triÃ¢ngulo Ã©:<br>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> Ãrea &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> 1 âˆ™ |D| </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> |"+Determinante+"| </td><td rowspan='2'> &nbsp;=&nbsp; <a1 style='color: #FF0000'> "+areatdeter+" </a1></td></tr> <tr> <td> 2 </td><td> 2 </td> </tr></tbody></table> <hr><h1 class='logomarca'> BpW </h1> </div>" ;
  
      document.areas.campoX1.focus();
      document.areas.campoX1.select();     
      document.getElementById('resposta').style.display = "block";
  }
  catch(e) {alert(e)}
  }
  
  
  
  
  /***########################################              ###############################################      **/
  /***#######################################     ELIPSE    ###############################################      **/
  
  
  function Elipse2() {
    var a = document.forms["Elipse"]["Elipse_type"].value;
  /** **************************  AREA (A = Pi âˆ™ a âˆ™ b)  *************************/  
   if (a === "area") {
      document.getElementById("Semidist_focal").disabled = true;	
      document.getElementById("Semidist_focal").value ="";		
      document.getElementById("x_o").disabled = true;	
      document.getElementById("x_o").value ="";		
      document.getElementById("y_o").disabled = true;	
      document.getElementById("y_o").value ="";		
       document.getElementById("semieixo_maior").disabled = false;		
       document.getElementById("semieixo_menor").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}
      
  /** ********************  PerÃ­metro (P = 2Pi (âˆš(aÂ² + bÂ²)/2))   ******************/  
   if (a === "perimetro") {
      document.getElementById("Semidist_focal").disabled = true;	
      document.getElementById("Semidist_focal").value ="";
      document.getElementById("x_o").disabled = true;	
      document.getElementById("x_o").value ="";		
      document.getElementById("y_o").disabled = true;	
      document.getElementById("y_o").value ="";		
       document.getElementById("semieixo_maior").disabled = false;		
       document.getElementById("semieixo_menor").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /************   EquaÃ§Ã£o (eixo maior horizontal) ((x-xo)Â²/aÂ² + (y-yo)Â²/bÂ² = 1)   ***************/  
   if (a === "equaÃ§Ã£oHoriz") {
      document.getElementById("Semidist_focal").disabled = true;	
      document.getElementById("Semidist_focal").value ="";
      document.getElementById("x_o").disabled = false;	
      document.getElementById("y_o").disabled = false;	
       document.getElementById("semieixo_maior").disabled = false;		
       document.getElementById("semieixo_menor").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
  
  
  /** ************  foco 1 (eixo maior horizontal) (F1 (xo - c, yo))   ***************/  
   if (a === "foco1") {
      document.getElementById("Semidist_focal").disabled = true;	
      document.getElementById("Semidist_focal").value ="";
      document.getElementById("semieixo_menor").disabled = false;	
       document.getElementById("semieixo_maior").disabled = false;	
      document.getElementById("x_o").disabled = false;	
      document.getElementById("y_o").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
   
  
  /** ************  Foco 2 (eixo maior horizontal) (F2 (xo + c, yo))   ***************/  
   if (a === "foco2") {
      document.getElementById("Semidist_focal").disabled = true;	
      document.getElementById("Semidist_focal").value ="";
      document.getElementById("semieixo_menor").disabled = false;	
       document.getElementById("semieixo_maior").disabled = false;	
      document.getElementById("x_o").disabled = false;	
      document.getElementById("y_o").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /** ************  SemidistÃ¢ncia focal (c = âˆš(aÂ² - bÂ²))   ***************/  
   if (a === "semifocal") {
      document.getElementById("Semidist_focal").disabled = true;	
      document.getElementById("Semidist_focal").value ="";
      document.getElementById("x_o").disabled = true;	
      document.getElementById("x_o").value ="";	
      document.getElementById("y_o").disabled = true;	
      document.getElementById("y_o").value ="";	
      document.getElementById("semieixo_menor").disabled = false;	
       document.getElementById("semieixo_maior").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /** ************  Excentricidade (e = c/a = âˆš(aÂ² - bÂ²) / a)   ***************/  
   if (a === "excentricidad") {
      document.getElementById("Semidist_focal").disabled = true;	
      document.getElementById("Semidist_focal").value ="";
      document.getElementById("x_o").disabled = true;	
      document.getElementById("x_o").value ="";	
      document.getElementById("y_o").disabled = true;	
      document.getElementById("y_o").value ="";	
      document.getElementById("semieixo_menor").disabled = false;	
       document.getElementById("semieixo_maior").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
      
  /** ************  VÃ©rtice (A1 = (xo - a, yo))   ***************/  
   if (a === "vertice1") {
      document.getElementById("Semidist_focal").disabled = true;	
      document.getElementById("Semidist_focal").value ="";
      document.getElementById("semieixo_menor").disabled = true;	
      document.getElementById("semieixo_menor").value ="";	
       document.getElementById("semieixo_maior").disabled = false;	
      document.getElementById("x_o").disabled = false;	
      document.getElementById("y_o").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /** ************  VÃ©rtice (A2 = (xo + a, yo))   ***************/  
   if (a === "vertice2") {
      document.getElementById("Semidist_focal").disabled = true;	
      document.getElementById("Semidist_focal").value ="";
      document.getElementById("semieixo_menor").disabled = true;	
      document.getElementById("semieixo_menor").value ="";	
       document.getElementById("semieixo_maior").disabled = false;	
      document.getElementById("x_o").disabled = false;	
      document.getElementById("y_o").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /** ************  VÃ©rtice (B1 = (xo, yo - b))   ***************/  
   if (a === "verticeB1") {
      document.getElementById("Semidist_focal").disabled = true;	
      document.getElementById("Semidist_focal").value ="";
      document.getElementById("semieixo_maior").disabled = true;	
      document.getElementById("semieixo_maior").value ="";	
       document.getElementById("semieixo_menor").disabled = false;		
      document.getElementById("x_o").disabled = false;	
      document.getElementById("y_o").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /** ************  VÃ©rtice (B1 = (xo, yo + b))   ***************/  
   if (a === "verticeB2") {
      document.getElementById("Semidist_focal").disabled = true;	
      document.getElementById("Semidist_focal").value ="";
      document.getElementById("semieixo_maior").disabled = true;	
      document.getElementById("semieixo_maior").value ="";	
       document.getElementById("semieixo_menor").disabled = false;	
      document.getElementById("x_o").disabled = false;	
      document.getElementById("y_o").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
      
  /********** EquaÃ§Ã£o (eixo maior vertical) ((x-xo)Â²/aÂ² + (y-yo)Â²/bÂ² = 1) ***************/  
   if (a === "equaÃ§Ã£oVert") {
      document.getElementById("Semidist_focal").disabled = true;	
      document.getElementById("Semidist_focal").value ="";
      document.getElementById("x_o").disabled = false;	
      document.getElementById("y_o").disabled = false;	
       document.getElementById("semieixo_maior").disabled = false;		
       document.getElementById("semieixo_menor").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
      
  /** ************  foco 1 (eixo maior vertical) (F1 (xo, yo - c))   ***************/  
   if (a === "focoVert1") {
      document.getElementById("Semidist_focal").disabled = true;	
      document.getElementById("Semidist_focal").value ="";
      document.getElementById("semieixo_menor").disabled = false;	
       document.getElementById("semieixo_maior").disabled = false;	
      document.getElementById("x_o").disabled = false;	
      document.getElementById("y_o").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
       
      
  /** ************  foco 2 (eixo maior vertical) (F2 (xo, yo + c))   ***************/  
   if (a === "focoVert2") {
      document.getElementById("Semidist_focal").disabled = true;	
      document.getElementById("Semidist_focal").value ="";
      document.getElementById("semieixo_menor").disabled = false;	
       document.getElementById("semieixo_maior").disabled = false;	
      document.getElementById("x_o").disabled = false;	
      document.getElementById("y_o").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}			
       
  /** ************  SemidistÃ¢ncia focal (c = âˆš(bÂ² - aÂ²))   ***************/  
   if (a === "semifocalVert") {
      document.getElementById("Semidist_focal").disabled = true;	
      document.getElementById("Semidist_focal").value ="";
      document.getElementById("x_o").disabled = true;	
      document.getElementById("x_o").value ="";	
      document.getElementById("y_o").disabled = true;	
      document.getElementById("y_o").value ="";	
      document.getElementById("semieixo_menor").disabled = false;	
       document.getElementById("semieixo_maior").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
      
  /** ************  Excentricidade (e = c/a = âˆš(bÂ² - aÂ²) / b)   ***************/  
   if (a === "excentricVert") {
      document.getElementById("Semidist_focal").disabled = true;	
      document.getElementById("Semidist_focal").value ="";
      document.getElementById("x_o").disabled = true;	
      document.getElementById("x_o").value ="";	
      document.getElementById("y_o").disabled = true;	
      document.getElementById("y_o").value ="";	
      document.getElementById("semieixo_menor").disabled = false;	
       document.getElementById("semieixo_maior").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
      
  /**************  VÃ©rtice (A1 = (xo - a, yo))   ***************/  
   if (a === "verticeVert1") {
      document.getElementById("Semidist_focal").disabled = true;	
      document.getElementById("Semidist_focal").value ="";
      document.getElementById("semieixo_maior").disabled = true;	
      document.getElementById("semieixo_maior").value ="";	
       document.getElementById("semieixo_menor").disabled = false;	
      document.getElementById("x_o").disabled = false;	
      document.getElementById("y_o").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /**************  VÃ©rtice (A2 = (xo + a, yo))   ***************/  
   if (a === "verticeVert2") {
      document.getElementById("Semidist_focal").disabled = true;	
      document.getElementById("Semidist_focal").value ="";
      document.getElementById("semieixo_maior").disabled = true;	
      document.getElementById("semieixo_maior").value ="";	
       document.getElementById("semieixo_menor").disabled = false;	
      document.getElementById("x_o").disabled = false;	
      document.getElementById("y_o").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /** ************  VÃ©rtice (B1 = (xo, yo - a))   ***************/  
   if (a === "verticeVertB1") {
      document.getElementById("Semidist_focal").disabled = true;	
      document.getElementById("Semidist_focal").value ="";
      document.getElementById("semieixo_menor").disabled = true;	
      document.getElementById("semieixo_menor").value ="";	
       document.getElementById("semieixo_maior").disabled = false;		
      document.getElementById("x_o").disabled = false;	
      document.getElementById("y_o").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /** ************  VÃ©rtice (B2 = (xo, yo + a))   ***************/  
   if (a === "verticeVertB2") {
      document.getElementById("Semidist_focal").disabled = true;	
      document.getElementById("Semidist_focal").value ="";
      document.getElementById("semieixo_menor").disabled = true;	
      document.getElementById("semieixo_menor").value ="";	
       document.getElementById("semieixo_maior").disabled = false;		
      document.getElementById("x_o").disabled = false;	
      document.getElementById("y_o").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
  } 
  
   
  
  function Elipse1() {
      
   var ddl = document.getElementById("ops");
   var selectedValue = ddl.options[ddl.selectedIndex].value;
      if (selectedValue == "")
     {
      alert("Escolha uma opÃ§Ã£o para Calcular!");
     } 	
      
    var a = document.forms["Elipse"]["Elipse_type"].value;
  /************************  CÃ¡lculdo da Ã¡rea: A = (B.b).h/2  *************************/  
    if (a === "area") { 
     var semieixo_maior = parseFloat(document.Elipse.semieixo_maior.value.replace(",", "."));  
     var semieixo_menor = parseFloat(document.Elipse.semieixo_menor.value.replace(",", ".")); 
     
   if ((semieixo_maior < 0) || (isNaN(semieixo_maior))) { alert("Digite um valor positivo para o semieixo maior!");
            document.Elipse.semieixo_maior.focus();
            document.Elipse.semieixo_maior.select(); 
    return false;
   }
  
   if ((semieixo_menor < 0) || (isNaN(semieixo_menor))) { alert("Digite um valor positivo para o semieixo menor!");
            document.Elipse.semieixo_menor.focus();
            document.Elipse.semieixo_menor.select(); 
    return false;
    } 
    
   try {
     
   var areaElipse = Math.PI * semieixo_maior * semieixo_menor;
    
     document.getElementById('resposta').innerHTML ="  <hr> <div style='line-height: 16px;'>A Ã¡rea da Elipse Ã©: <br> Ãrea = Ï€ âˆ™ a âˆ™ b <br>  Ãrea = Ï€ âˆ™ "+semieixo_maior+" âˆ™ "+semieixo_menor+" <br> Ãrea = <a1 style='color: #FF0000'> "+areaElipse.toFixed(2)+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>  <hr><h1 class='logomarca'> BpW </h1></div>" 
     
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
    /******************  perÃ­metro da elipse: P =  = 2Ï€ âˆš(aÂ² + bÂ²)/2   ******************/  
    if (a === "perimetro") { 
     var semieixo_maior = parseFloat(document.Elipse.semieixo_maior.value.replace(",", "."));  
     var semieixo_menor = parseFloat(document.Elipse.semieixo_menor.value.replace(",", ".")); 
     
   if ((semieixo_maior < 0) || (isNaN(semieixo_maior))) { alert("Digite um valor positivo para o semieixo maior!");
            document.Elipse.semieixo_maior.focus();
            document.Elipse.semieixo_maior.select(); 
    return false;
   }
  
   if ((semieixo_menor < 0) || (isNaN(semieixo_menor))) { alert("Digite um valor positivo para o semieixo menor!");
            document.Elipse.semieixo_menor.focus();
            document.Elipse.semieixo_menor.select(); 
    return false;
   }
   
   try {
   var aa = semieixo_maior * semieixo_maior;  
   var bb = semieixo_menor * semieixo_menor; 
   var soma_ab = aa + bb;  
   var h = soma_ab / 2; 
   var k = Math.sqrt(h);
   var y = 2 * k; 
   var Peri_Elipse = 2 * Math.PI * k; 
  
     document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 16px;'>O perÃ­metro da Elipse Ã©: <br><br>  P = 2Ï€ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>(aÂ² + bÂ²)/2</a1> <br><br>  P = 2Ï€ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>[("+semieixo_maior+")Â² + ("+semieixo_menor+")Â²]/2</a1> <br><br>  P = 2Ï€ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>["+aa+" + "+bb+"]/2</a1> <br><br> P = 2Ï€ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+soma_ab+"/2</a1> <br><br>  P = 2Ï€ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+h.toFixed(2)+"</a1> <br>  P â‰ˆ 2Ï€ âˆ™ "+k.toFixed(2)+" <br>  P â‰ˆ <a1 style='color: #FF0000'> "+y.toFixed(2)+"Ï€</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u.m</a1> <br> &emsp;ou <br> P â‰ˆ <a1 style='color: #FF0000'> "+Peri_Elipse.toFixed(2)+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u.m</a1>  <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** ******************   EquaÃ§Ã£o: (x - xo)Â²/aÂ² + (y - yo)Â²/bÂ² = 1)  *********************/  
    if (a === "equaÃ§Ã£oHoriz") { 
     var semieixo_maior = parseFloat(document.Elipse.semieixo_maior.value.replace(",", "."));  
     var semieixo_menor = parseFloat(document.Elipse.semieixo_menor.value.replace(",", ".")); 
     var x_o = parseFloat(document.Elipse.x_o.value.replace(",", "."));  
     var y_o = parseFloat(document.Elipse.y_o.value.replace(",", "."));   
     
   if ((semieixo_maior < 0) || (isNaN(semieixo_maior))) { alert("Digite um valor positivo para o semieixo maior!");
            document.Elipse.semieixo_maior.focus();
            document.Elipse.semieixo_maior.select(); 
    return false;
   }
  
   if ((semieixo_menor < 0) || (isNaN(semieixo_menor))) { alert("Digite um valor positivo para o semieixo menor!");
            document.Elipse.semieixo_menor.focus();
            document.Elipse.semieixo_menor.select(); 
    return false;
   }
  
   if ((semieixo_maior < semieixo_menor)) { alert("O semieixo maior 'a' deve ser maior do que o semieixo menor 'b'!");
            document.Elipse.semieixo_maior.focus();
            document.Elipse.semieixo_maior.select(); 
    return false;
   }
  
   if ((isNaN(x_o))) { alert("Digite um valor para o xo!");
            document.Elipse.x_o.focus();
            document.Elipse.x_o.select(); 
    return false;
   }
   
   if ((isNaN(y_o))) { alert("Digite um valor para o yo!");
            document.Elipse.y_o.focus();
            document.Elipse.y_o.select(); 
    return false;
   }
   
   try {
   var aa = semieixo_maior * semieixo_maior;  
   var bb = semieixo_menor * semieixo_menor; 
   var k = - x_o; 
   var h = - y_o;  
  
   if ((x_o == 0) && (y_o == 0)) {
      document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div> <hr><div style='line-height: 16px;'>Como temos o semieixo maior a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1>, o semieixo menor b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equaÃ§Ã£o da elipse com eixo maior na horizontal Ã©: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> aÂ² </td><td> bÂ² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"Â² </td><td> "+semieixo_menor+"Â² </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> xÂ² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> yÂ² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>     <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
      return false;		  
         }
         
   if ((x_o < 0) && (y_o < 0)) {
      document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1>, o semieixo menor b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equaÃ§Ã£o da elipse com eixo maior na horizontal Ã©: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> aÂ² </td><td> bÂ² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - ("+x_o+"))Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - ("+y_o+"))Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"Â² </td><td> "+semieixo_menor+"Â² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x + "+k+")Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y + "+h+")Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>    <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
      return false;		  
         }
         
   if ((x_o < 0) && (y_o > 0)) {
      document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1>, o semieixo menor b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equaÃ§Ã£o da elipse com eixo maior na horizontal Ã©: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> aÂ² </td><td> bÂ² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - ("+x_o+"))Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"Â² </td><td> "+semieixo_menor+"Â² </td> </tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x + "+k+")Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>    <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
      return false;		  
         }	   
  
   if ((x_o > 0) && (y_o < 0)) {
      document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1>, o semieixo menor b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equaÃ§Ã£o da elipse com eixo maior na horizontal Ã©: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> aÂ² </td><td> bÂ² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - ("+y_o+"))Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"Â² </td><td> "+semieixo_menor+"Â² </td> </tr></tbody></table>        <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y + "+h+")Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>    <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
      return false;		  
         }		   
         
   if ((x_o > 0) && (y_o == 0)) {
      document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1>, o semieixo menor b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equaÃ§Ã£o da elipse com eixo maior na horizontal Ã©: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> aÂ² </td><td> bÂ² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"Â² </td><td> "+semieixo_menor+"Â² </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> yÂ² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>    <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
      return false;		  
         }	   
         
   if ((x_o < 0) && (y_o == 0)) {
      document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1>, o semieixo menor b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equaÃ§Ã£o da elipse com eixo maior na horizontal Ã©: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> aÂ² </td><td> bÂ² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - ("+x_o+"))Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"Â² </td><td> "+semieixo_menor+"Â² </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x + "+k+")Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> yÂ² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>    <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
      return false;		  
         }
  
   if ((x_o == 0) && (y_o > 0)) {
      document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1>, o semieixo menor b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equaÃ§Ã£o da elipse com eixo maior na horizontal Ã©: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> aÂ² </td><td> bÂ² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"Â² </td><td> "+semieixo_menor+"Â² </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> xÂ² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>    <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
      return false;		  
         }
         
   if ((x_o == 0) && (y_o < 0)) {
      document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1>, o semieixo menor b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equaÃ§Ã£o da elipse com eixo maior na horizontal Ã©: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> aÂ² </td><td> bÂ² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - ("+y_o+"))Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"Â² </td><td> "+semieixo_menor+"Â² </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> xÂ² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y + "+h+")Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>    <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
      return false;		  
         }	   
         
      else {
     document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1>, o semieixo menor b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equaÃ§Ã£o da elipse com eixo maior na horizontal Ã©: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> aÂ² </td><td> bÂ² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"Â² </td><td> "+semieixo_menor+"Â² </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>      <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
      }
  }	
  catch(e) {alert(e)}
  }
  
   /** ********************   (F1 (xo - c, yo))  *********************/  
    if (a === "foco1") { 
     var semieixo_maior = parseFloat(document.Elipse.semieixo_maior.value.replace(",", ".")); 
     var semieixo_menor = parseFloat(document.Elipse.semieixo_menor.value.replace(",", "."));  
     var x_o = parseFloat(document.Elipse.x_o.value.replace(",", ".")); 
     var y_o = parseFloat(document.Elipse.y_o.value.replace(",", "."));    
     
   if ((semieixo_maior < 0) || (isNaN(semieixo_maior))) { alert("Digite um valor positivo para o semieixo maior!");
            document.Elipse.semieixo_maior.focus();
            document.Elipse.semieixo_maior.select(); 
    return false;
   }
  
   if ((semieixo_menor < 0) || (isNaN(semieixo_menor))) { alert("Digite um valor positivo para o semieixo menor!");
            document.Elipse.semieixo_menor.focus();
            document.Elipse.semieixo_menor.select(); 
    return false;
   }
  
   if ((semieixo_maior < semieixo_menor)) { alert("O semieixo maior 'a' deve ser maior do que o semieixo menor 'b'!");
            document.Elipse.semieixo_maior.focus();
            document.Elipse.semieixo_maior.select(); 
    return false;
   }
  
   if ((isNaN(x_o))) { alert("Digite um valor para o xo!");
            document.Elipse.x_o.focus();
            document.Elipse.x_o.select(); 
    return false;
   }
   
   if ((isNaN(y_o))) { alert("Digite um valor para o yo!");
            document.Elipse.y_o.focus();
            document.Elipse.y_o.select(); 
    return false;
   } 
   
   try {
   var k = semieixo_maior * semieixo_maior ;  
   var h = semieixo_menor * semieixo_menor ; 
   var aa = k - h ;  
   var bb = Math.sqrt(aa) ;
   var bb = document.getElementById("resposta").value = roundNumber(bb, 2); 
   var cc = x_o - bb ;
   var cc = document.getElementById("resposta").value = roundNumber(cc, 2);  
  
     document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>O foco 1 (F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1>) da elipse Ã©: <br> F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> (x<a1 style='font-family: times new roman;font-size: 11px;'>o</a1> - c,&nbsp; y<a1 style='font-family: times new roman;font-size: 11px;'>o</a1>)  <br><br>    F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> (x<a1 style='font-family: times new roman;font-size: 11px;'>o</a1> - âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>aÂ² - bÂ²</a1>,&nbsp; y<a1 style='font-family: times new roman;font-size: 11px;'>o</a1>) <br><br>  F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> ("+x_o+" - âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>("+semieixo_maior+")Â² - ("+semieixo_menor+")Â²</a1>, "+y_o+")  <br><br>  F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> ("+x_o+" - âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+k+" - "+h+"</a1>, "+y_o+")  <br><br>   F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> ("+x_o+" - âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+aa+"</a1>, "+y_o+")  <br> F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> ("+x_o+" - "+bb+", "+y_o+") <br> F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> (<a1 style='color: #FF0000'> "+cc+"</a1>, <a1 style='color: #FF0000'>"+y_o+"</a1>)    <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** ********************   (F2 (xo + c, yo))  *********************/  
    if (a === "foco2") { 
     var semieixo_maior = parseFloat(document.Elipse.semieixo_maior.value.replace(",", ".")); 
     var semieixo_menor = parseFloat(document.Elipse.semieixo_menor.value.replace(",", "."));  
     var x_o = parseFloat(document.Elipse.x_o.value.replace(",", ".")); 
     var y_o = parseFloat(document.Elipse.y_o.value.replace(",", "."));    
     
   if ((semieixo_maior < 0) || (isNaN(semieixo_maior))) { alert("Digite um valor positivo para o semieixo maior!");
            document.Elipse.semieixo_maior.focus();
            document.Elipse.semieixo_maior.select(); 
    return false;
   }
  
   if ((semieixo_menor < 0) || (isNaN(semieixo_menor))) { alert("Digite um valor positivo para o semieixo menor!");
            document.Elipse.semieixo_menor.focus();
            document.Elipse.semieixo_menor.select(); 
    return false;
   }
  
   if ((semieixo_maior < semieixo_menor)) { alert("O semieixo maior 'a' deve ser maior do que o semieixo menor 'b'!");
            document.Elipse.semieixo_maior.focus();
            document.Elipse.semieixo_maior.select(); 
    return false;
   }
  
   if ((isNaN(x_o))) { alert("Digite um valor para o xo!");
            document.Elipse.x_o.focus();
            document.Elipse.x_o.select(); 
    return false;
   }
   
   if ((isNaN(y_o))) { alert("Digite um valor para o yo!");
            document.Elipse.y_o.focus();
            document.Elipse.y_o.select(); 
    return false;
   }
   
   try {
   var k = semieixo_maior * semieixo_maior ;  
   var h = semieixo_menor * semieixo_menor ; 
   var aa = k - h ;  
   var bb = Math.sqrt(aa) ;
   var bb = document.getElementById("resposta").value = roundNumber(bb, 2); 
   var cc = x_o + bb ;
   var cc = document.getElementById("resposta").value = roundNumber(cc, 2);  
  
     document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>O foco 2 (F<a1 style='font-family: times new roman;font-size: 11px;'>2</a1>) da elipse Ã©: <br> F<a1 style='font-family: times new roman;font-size: 11px;'>2</a1> (x<a1 style='font-family: times new roman;font-size: 11px;'>o</a1> + c,&nbsp; y<a1 style='font-family: times new roman;font-size: 11px;'>o</a1>)  <br><br>    F<a1 style='font-family: times new roman;font-size: 11px;'>2</a1> (x<a1 style='font-family: times new roman;font-size: 11px;'>o</a1> + âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>aÂ² - bÂ²</a1>,&nbsp; y<a1 style='font-family: times new roman;font-size: 11px;'>o</a1>) <br><br>  F<a1 style='font-family: times new roman;font-size: 11px;'>2</a1> ("+x_o+" + âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>("+semieixo_maior+")Â² - ("+semieixo_menor+")Â²</a1>, "+y_o+")  <br><br>  F<a1 style='font-family: times new roman;font-size: 11px;'>2</a1> ("+x_o+" + âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+k+" - "+h+"</a1>, "+y_o+")  <br><br>   F<a1 style='font-family: times new roman;font-size: 11px;'>2</a1> ("+x_o+" + âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+aa+"</a1>, "+y_o+")  <br> F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> ("+x_o+" + "+bb+", "+y_o+") <br> F<a1 style='font-family: times new roman;font-size: 11px;'>2</a1> (<a1 style='color: #FF0000'> "+cc+"</a1>, <a1 style='color: #FF0000'>"+y_o+"</a1>)    <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** ********************   SemidistÃ¢ncia focal (c = âˆš(aÂ² - bÂ²))  *********************/  
    if (a === "semifocal") { 
     var semieixo_maior = parseFloat(document.Elipse.semieixo_maior.value.replace(",", ".")); 
     var semieixo_menor = parseFloat(document.Elipse.semieixo_menor.value.replace(",", "."));  
     
   if ((semieixo_maior < 0) || (isNaN(semieixo_maior))) { alert("Digite um valor positivo para o semieixo maior!");
            document.Elipse.semieixo_maior.focus();
            document.Elipse.semieixo_maior.select(); 
    return false;
   }
  
   if ((semieixo_menor < 0) || (isNaN(semieixo_menor))) { alert("Digite um valor positivo para o semieixo menor!");
            document.Elipse.semieixo_menor.focus();
            document.Elipse.semieixo_menor.select(); 
    return false;
   }
  
   if ((semieixo_maior < semieixo_menor)) { alert("O semieixo maior 'a' deve ser maior do que o semieixo menor 'b'!");
            document.Elipse.semieixo_maior.focus();
            document.Elipse.semieixo_maior.select(); 
    return false;
   }
   
   try {
   var k = semieixo_maior * semieixo_maior ;  
   var h = semieixo_menor * semieixo_menor ; 
   var aa = k - h ;  
   var bb = Math.sqrt(aa) ;
   var bb = document.getElementById("resposta").value = roundNumber(bb, 2); 
  
     document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>O comprimentro da semidistÃ¢ncia focal (c) da elipse Ã©:<br><br>  c = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>("+semieixo_maior+")Â² - ("+semieixo_menor+")Â²</a1>  <br><br>  c = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+k+" - "+h+"</a1>  <br><br>  c = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+aa+"</a1> <br>  c = <a1 style='color: #FF0000'> "+bb+"</a1> u.c   <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** ********************   excentricidade (e = c/a = âˆš(aÂ² - bÂ²)/a)  *********************/  
    if (a === "excentricidad") { 
     var semieixo_maior = parseFloat(document.Elipse.semieixo_maior.value.replace(",", ".")); 
     var semieixo_menor = parseFloat(document.Elipse.semieixo_menor.value.replace(",", "."));  
     
   if ((semieixo_maior < 0) || (isNaN(semieixo_maior))) { alert("Digite um valor positivo para o semieixo maior!");
            document.Elipse.semieixo_maior.focus();
            document.Elipse.semieixo_maior.select(); 
    return false;
   }
  
   if ((semieixo_menor < 0) || (isNaN(semieixo_menor))) { alert("Digite um valor positivo para o semieixo menor!");
            document.Elipse.semieixo_menor.focus();
            document.Elipse.semieixo_menor.select(); 
    return false;
   }
  
   if ((semieixo_maior < semieixo_menor)) { alert("O semieixo maior 'a' deve ser maior do que o semieixo menor 'b'!");
            document.Elipse.semieixo_maior.focus();
            document.Elipse.semieixo_maior.select(); 
    return false;
   }
   
   try {
   var k = semieixo_maior * semieixo_maior ;  
   var h = semieixo_menor * semieixo_menor ; 
   var aa = k - h ;  
   var bb = Math.sqrt(aa) ;
   var bb = document.getElementById("resposta").value = roundNumber(bb, 2); 
   var cc = bb/semieixo_maior ;
   var cc = document.getElementById("resposta").value = roundNumber(cc, 2); 
  
     document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>Excentricidade da elipse Ã¡ a razÃ£o entre a semi-distÃ¢ncia focal e o semieixo maior. <br> TambÃ©m, Ã© a medida de quanto a elipse se afasta de um cÃ­rculo. <br>Sendo assim, a excentricidade (e) da elipse Ã©:<br><br>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> e &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> c </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>aÂ² - bÂ²</a1> </td></tr> <tr> <td> a </td><td> a </td> </tr></tbody></table> <br>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> e &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>("+semieixo_maior+")Â² - ("+semieixo_menor+")Â²</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+k+" - "+h+"</a1> </td></tr> <tr> <td> "+semieixo_maior+" </td><td> "+semieixo_maior+" </td> </tr></tbody></table> <br>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> e &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+aa+"</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+bb+"</td></tr> <tr> <td> "+semieixo_maior+" </td><td> "+semieixo_maior+" </td> </tr></tbody></table>  <br>   c = <a1 style='color: #FF0000'> "+cc+"</a1>   <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /**********************   VÃ©rtice 1 (A1 = (xo - a, yo)  *********************/  
    if (a === "vertice1") { 
     var semieixo_maior = parseFloat(document.Elipse.semieixo_maior.value.replace(",", ".")); 
     var x_o = parseFloat(document.Elipse.x_o.value.replace(",", ".")); 
     var y_o = parseFloat(document.Elipse.y_o.value.replace(",", "."));
  
   if ((semieixo_maior < 0) || (isNaN(semieixo_maior))) { alert("Digite um valor positivo para o semieixo maior!");
            document.Elipse.semieixo_maior.focus();
            document.Elipse.semieixo_maior.select(); 
    return false;
   }
  
   if ((isNaN(x_o))) { alert("Digite um valor para o xo!");
            document.Elipse.x_o.focus();
            document.Elipse.x_o.select(); 
    return false;
   }
   
   if ((isNaN(y_o))) { alert("Digite um valor para o yo!");
            document.Elipse.y_o.focus();
            document.Elipse.y_o.select(); 
    return false;
   }
   
   try {
   var k = x_o -  semieixo_maior;  
  
     document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>As coordenadas do vÃ©rtice (A<a1 style='font-size: 10px; font-family: times new roman;'>1</a1>) Ã©:<br> A<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = (x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1> - a,&ensp; y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)<br> A<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = ("+x_o+" - "+semieixo_maior+",&ensp; "+y_o+")<br> A<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = (<a1 style='color: #FF0000'> "+k+"</a1>,&ensp; <a1 style='color: #FF0000'> "+y_o+"</a1>)<br>  <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** ********************   VÃ©rtice 2 (A1 = (xo + a, yo)  *********************/  
    if (a === "vertice2") { 
     var semieixo_maior = parseFloat(document.Elipse.semieixo_maior.value.replace(",", ".")); 
     var x_o = parseFloat(document.Elipse.x_o.value.replace(",", ".")); 
     var y_o = parseFloat(document.Elipse.y_o.value.replace(",", "."));
  
   if ((semieixo_maior < 0) || (isNaN(semieixo_maior))) { alert("Digite um valor positivo para o semieixo maior!");
            document.Elipse.semieixo_maior.focus();
            document.Elipse.semieixo_maior.select(); 
    return false;
   }
  
   if ((isNaN(x_o))) { alert("Digite um valor para o xo!");
            document.Elipse.x_o.focus();
            document.Elipse.x_o.select(); 
    return false;
   }
   
   if ((isNaN(y_o))) { alert("Digite um valor para o yo!");
            document.Elipse.y_o.focus();
            document.Elipse.y_o.select(); 
    return false;
   }
   
   try {
   var k = x_o + semieixo_maior;  
  
     document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>As coordenadas do vÃ©rtice (A<a1 style='font-size: 10px; font-family: times new roman;'>2</a1>) Ã©:<br> A<a1 style='font-size: 10px; font-family: times new roman;'>2</a1> = (x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1> - a,&ensp; y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)<br> A<a1 style='font-size: 10px; font-family: times new roman;'>2</a1> = ("+x_o+" + "+semieixo_maior+",&ensp; "+y_o+")<br>  A<a1 style='font-size: 10px; font-family: times new roman;'>2</a1> = (<a1 style='color: #FF0000'> "+k+"</a1>,&ensp; <a1 style='color: #FF0000'> "+y_o+"</a1>)<br>  <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /*********************   VÃ©rtice (B1 = (xo, yo - a)  *********************/  
    if (a === "verticeB1") { 
     var semieixo_menor = parseFloat(document.Elipse.semieixo_menor.value.replace(",", ".")); 
     var x_o = parseFloat(document.Elipse.x_o.value.replace(",", ".")); 
     var y_o = parseFloat(document.Elipse.y_o.value.replace(",", "."));
  
   if ((semieixo_menor < 0) || (isNaN(semieixo_menor))) { alert("Digite um valor positivo para o semieixo maior!");
            document.Elipse.semieixo_menor.focus();
            document.Elipse.semieixo_menor.select(); 
    return false;
   }
  
   if ((isNaN(x_o))) { alert("Digite um valor para o xo!");
            document.Elipse.x_o.focus();
            document.Elipse.x_o.select(); 
    return false;
   }
   
   if ((isNaN(y_o))) { alert("Digite um valor para o yo!");
            document.Elipse.y_o.focus();
            document.Elipse.y_o.select(); 
    return false;
   } 
   
   try {
   var k = y_o - semieixo_menor;  
  
     document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>As coordenadas do vÃ©rtice (B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1>) Ã©:<br> B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = (x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>,&ensp; y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1> - b)<br> B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = ("+x_o+",&ensp; "+y_o+" - "+semieixo_menor+")<br> B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = (<a1 style='color: #FF0000'> "+x_o+"</a1>,&ensp; <a1 style='color: #FF0000'> "+k+"</a1>)<br> <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_menor.focus();
      document.Elipse.semieixo_menor.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
  
  /** ********************   VÃ©rtice (B2 = (xo, yo + a)  *********************/  
    if (a === "verticeB2") { 
     var semieixo_menor = parseFloat(document.Elipse.semieixo_menor.value.replace(",", ".")); 
     var x_o = parseFloat(document.Elipse.x_o.value.replace(",", ".")); 
     var y_o = parseFloat(document.Elipse.y_o.value.replace(",", "."));
  
   if ((semieixo_menor < 0) || (isNaN(semieixo_menor))) { alert("Digite um valor positivo para o semieixo maior!");
            document.Elipse.semieixo_menor.focus();
            document.Elipse.semieixo_menor.select(); 
    return false;
   }
  
   if ((isNaN(x_o))) { alert("Digite um valor para o xo!");
            document.Elipse.x_o.focus();
            document.Elipse.x_o.select(); 
    return false;
   }
   
   if ((isNaN(y_o))) { alert("Digite um valor para o yo!");
            document.Elipse.y_o.focus();
            document.Elipse.y_o.select(); 
    return false;
   }
   
   try {
   var k = y_o + semieixo_menor;  
  
     document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>As coordenadas do vÃ©rtice (B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1>) Ã©:<br> B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = (x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>,&ensp; y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1> + b)<br> B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = ("+x_o+",&ensp; "+y_o+" + "+semieixo_menor+")<br>   B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = (<a1 style='color: #FF0000'> "+x_o+"</a1>,&ensp; <a1 style='color: #FF0000'> "+k+"</a1>)<br>  <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_menor.focus();
      document.Elipse.semieixo_menor.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** ******************   EquaÃ§Ã£o: (x - xo)Â²/aÂ² + (y - yo)Â²/bÂ² = 1)  *********************/  
    if (a === "equaÃ§Ã£oVert") { 
     var semieixo_maior = parseFloat(document.Elipse.semieixo_maior.value.replace(",", "."));  
     var semieixo_menor = parseFloat(document.Elipse.semieixo_menor.value.replace(",", ".")); 
     var x_o = parseFloat(document.Elipse.x_o.value.replace(",", "."));  
     var y_o = parseFloat(document.Elipse.y_o.value.replace(",", "."));   
     
   if ((semieixo_maior < 0) || (isNaN(semieixo_maior))) { alert("Digite um valor positivo para o semieixo maior!");
            document.Elipse.semieixo_maior.focus();
            document.Elipse.semieixo_maior.select(); 
    return false;
   }
  
   if ((semieixo_menor < 0) || (isNaN(semieixo_menor))) { alert("Digite um valor positivo para o semieixo menor!");
            document.Elipse.semieixo_menor.focus();
            document.Elipse.semieixo_menor.select(); 
    return false;
   }
  
   if ((semieixo_maior > semieixo_menor)) { alert("O semieixo 'b' deve ser maior do que o semieixo menor 'a'!");
            document.Elipse.semieixo_maior.focus();
            document.Elipse.semieixo_maior.select(); 
    return false;
   }
  
   if ((isNaN(x_o))) { alert("Digite um valor para o xo!");
            document.Elipse.x_o.focus();
            document.Elipse.x_o.select(); 
    return false;
   }
   
   if ((isNaN(y_o))) { alert("Digite um valor para o yo!");
            document.Elipse.y_o.focus();
            document.Elipse.y_o.select(); 
    return false;
   }
   
   try {
   var aa = semieixo_maior * semieixo_maior;  
   var bb = semieixo_menor * semieixo_menor; 
   var k = - x_o; 
   var h = - y_o;  
  
   if ((x_o == 0) && (y_o == 0)) {
      document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1>, o semieixo menor a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equaÃ§Ã£o da elipse com eixo maior na vertical Ã©: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> aÂ² </td><td> bÂ² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"Â² </td><td> "+semieixo_menor+"Â² </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> xÂ² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> yÂ² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>     <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
      return false;		  
         }
         
   if ((x_o < 0) && (y_o < 0)) {
      document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1>, o semieixo menor a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equaÃ§Ã£o da elipse com eixo maior na vertical Ã©: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> aÂ² </td><td> bÂ² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - ("+x_o+"))Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - ("+y_o+"))Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"Â² </td><td> "+semieixo_menor+"Â² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x + "+k+")Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y + "+h+")Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>    <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
      return false;		  
         }
         
   if ((x_o < 0) && (y_o > 0)) {
      document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1>, o semieixo menor a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equaÃ§Ã£o da elipse com eixo maior na vertical Ã©: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> aÂ² </td><td> bÂ² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - ("+x_o+"))Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"Â² </td><td> "+semieixo_menor+"Â² </td> </tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x + "+k+")Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>    <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
      return false;		  
         }	   
  
   if ((x_o > 0) && (y_o < 0)) {
      document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1>, o semieixo menor a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equaÃ§Ã£o da elipse com eixo maior na vertical Ã©: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td> <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> aÂ² </td><td> bÂ² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - ("+y_o+"))Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"Â² </td><td> "+semieixo_menor+"Â² </td> </tr></tbody></table>        <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y + "+h+")Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>    <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
      return false;		  
         }		   
         
   if ((x_o > 0) && (y_o == 0)) {
      document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1>, o semieixo menor a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equaÃ§Ã£o da elipse com eixo maior na vertical Ã©: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> aÂ² </td><td> bÂ² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"Â² </td><td> "+semieixo_menor+"Â² </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> yÂ² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>    <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
      return false;		  
         }	   
         
   if ((x_o < 0) && (y_o == 0)) {
      document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1>, o semieixo menor a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equaÃ§Ã£o da elipse com eixo maior na vertical Ã©: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> aÂ² </td><td> bÂ² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - ("+x_o+"))Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"Â² </td><td> "+semieixo_menor+"Â² </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x + "+k+")Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> yÂ² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>    <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
      return false;		  
         }
  
   if ((x_o == 0) && (y_o > 0)) {
      document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1>, o semieixo menor a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equaÃ§Ã£o da elipse com eixo maior na vertical Ã©: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> aÂ² </td><td> bÂ² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"Â² </td><td> "+semieixo_menor+"Â² </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> xÂ² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>    <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
      return false;		  
         }
         
   if ((x_o == 0) && (y_o < 0)) {
      document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1>, o semieixo menor a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equaÃ§Ã£o da elipse com eixo maior na vertical Ã©: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> aÂ² </td><td> bÂ² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - ("+y_o+"))Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"Â² </td><td> "+semieixo_menor+"Â² </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> xÂ² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y + "+h+")Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>    <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
      return false;		  
         }	   
         
      else {
     document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1>, o semieixo menor a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equaÃ§Ã£o da elipse com eixo maior na vertical Ã©: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> aÂ² </td><td> bÂ² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"Â² </td><td> "+semieixo_menor+"Â² </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")Â² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")Â² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>      <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
      }
  }	
  catch(e) {alert(e)}
  }
  
  /** ******************** Eixo maior vertical  (F1 (xo, yo - c))  *********************/  
    if (a === "focoVert1") { 
     var semieixo_maior = parseFloat(document.Elipse.semieixo_maior.value.replace(",", ".")); 
     var semieixo_menor = parseFloat(document.Elipse.semieixo_menor.value.replace(",", "."));  
     var x_o = parseFloat(document.Elipse.x_o.value.replace(",", ".")); 
     var y_o = parseFloat(document.Elipse.y_o.value.replace(",", "."));    
     
   if ((semieixo_maior < 0) || (isNaN(semieixo_maior))) { alert("Digite um valor positivo para o semieixo maior!");
            document.Elipse.semieixo_maior.focus();
            document.Elipse.semieixo_maior.select(); 
    return false;
   }
  
   if ((semieixo_menor < 0) || (isNaN(semieixo_menor))) { alert("Digite um valor positivo para o semieixo menor!");
            document.Elipse.semieixo_menor.focus();
            document.Elipse.semieixo_menor.select(); 
    return false;
   }
  
   if ((semieixo_maior > semieixo_menor)) { alert("O semieixo 'b' deve ser maior do que o semieixo menor 'a'!");
            document.Elipse.semieixo_maior.focus();
            document.Elipse.semieixo_maior.select(); 
    return false;
   }
  
   if ((isNaN(x_o))) { alert("Digite um valor para o xo!");
            document.Elipse.x_o.focus();
            document.Elipse.x_o.select(); 
    return false;
   }
   
   if ((isNaN(y_o))) { alert("Digite um valor para o yo!");
            document.Elipse.y_o.focus();
            document.Elipse.y_o.select(); 
    return false;
   } 
   
   try {
   var k = semieixo_maior * semieixo_maior ;  
   var h = semieixo_menor * semieixo_menor ; 
   var aa = h - k ;  
   var bb = Math.sqrt(aa) ;
   var bb = document.getElementById("resposta").value = roundNumber(bb, 2); 
   var cc = y_o - bb ;
   var cc = document.getElementById("resposta").value = roundNumber(cc, 2);  
  
     document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>O foco 1 (F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1>) da elipse com eixo maior na vertical Ã©: <br> F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> (x<a1 style='font-family: times new roman;font-size: 11px;'>o</a1>,&nbsp; y<a1 style='font-family: times new roman;font-size: 11px;'>o</a1> - c) <br><br> F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> (x<a1 style='font-family: times new roman;font-size: 11px;'>o</a1>,&nbsp; y<a1 style='font-family: times new roman;font-size: 11px;'>o</a1> - âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>bÂ² - aÂ²</a1>) <br><br> F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> ("+x_o+",&nbsp; "+y_o+" - âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>("+semieixo_menor+")Â² - ("+semieixo_maior+")Â²</a1>)<br><br> F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> ("+x_o+",&nbsp; "+y_o+" - âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+h+" - "+k+"</a1>) <br><br>F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> ("+x_o+",&nbsp; "+y_o+" - âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+aa+"</a1>) <br> F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> ("+x_o+",&nbsp; "+y_o+" - "+bb+") <br>              F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> (<a1 style='color: #FF0000'>"+x_o+"</a1>,&nbsp; <a1 style='color: #FF0000'>"+cc+"</a1>)    <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** ******************** Eixo maior vertical  (F2 (xo, yo + c))  *********************/  
    if (a === "focoVert2") { 
     var semieixo_maior = parseFloat(document.Elipse.semieixo_maior.value.replace(",", ".")); 
     var semieixo_menor = parseFloat(document.Elipse.semieixo_menor.value.replace(",", "."));  
     var x_o = parseFloat(document.Elipse.x_o.value.replace(",", ".")); 
     var y_o = parseFloat(document.Elipse.y_o.value.replace(",", "."));    
     
   if ((semieixo_maior < 0) || (isNaN(semieixo_maior))) { alert("Digite um valor positivo para o semieixo maior!");
            document.Elipse.semieixo_maior.focus();
            document.Elipse.semieixo_maior.select(); 
    return false;
   }
  
   if ((semieixo_menor < 0) || (isNaN(semieixo_menor))) { alert("Digite um valor positivo para o semieixo menor!");
            document.Elipse.semieixo_menor.focus();
            document.Elipse.semieixo_menor.select(); 
    return false;
   }
  
   if ((semieixo_maior > semieixo_menor)) { alert("O semieixo 'b' deve ser maior do que o semieixo menor 'a'!");
            document.Elipse.semieixo_maior.focus();
            document.Elipse.semieixo_maior.select(); 
    return false;
   }
  
   if ((isNaN(x_o))) { alert("Digite um valor para o xo!");
            document.Elipse.x_o.focus();
            document.Elipse.x_o.select(); 
    return false;
   }
   
   if ((isNaN(y_o))) { alert("Digite um valor para o yo!");
            document.Elipse.y_o.focus();
            document.Elipse.y_o.select(); 
    return false;
   } 
   
   try {
   var k = semieixo_maior * semieixo_maior ;  
   var h = semieixo_menor * semieixo_menor ; 
   var aa = h - k ;  
   var bb = Math.sqrt(aa) ;
   var bb = document.getElementById("resposta").value = roundNumber(bb, 2); 
   var cc = y_o + bb ;
   var cc = document.getElementById("resposta").value = roundNumber(cc, 2);  
  
     document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>O foco 1 (F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1>) da elipse com eixo maior na vertical Ã©: <br> F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> (x<a1 style='font-family: times new roman;font-size: 11px;'>o</a1>,&nbsp; y<a1 style='font-family: times new roman;font-size: 11px;'>o</a1> + c) <br><br> F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> (x<a1 style='font-family: times new roman;font-size: 11px;'>o</a1>,&nbsp; y<a1 style='font-family: times new roman;font-size: 11px;'>o</a1> + âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>bÂ² - aÂ²</a1>) <br><br> F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> ("+x_o+",&nbsp; "+y_o+" + âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>("+semieixo_menor+")Â² - ("+semieixo_maior+")Â²</a1>)<br><br> F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> ("+x_o+",&nbsp; "+y_o+" + âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+h+" - "+k+"</a1>) <br><br>F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> ("+x_o+",&nbsp; "+y_o+" + âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+aa+"</a1>) <br> F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> ("+x_o+",&nbsp; "+y_o+" + "+bb+") <br>              F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> (<a1 style='color: #FF0000'>"+x_o+"</a1>,&nbsp; <a1 style='color: #FF0000'>"+cc+"</a1>)    <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /***************** eixo maior na vertical: SemidistÃ¢ncia focal (c = âˆš(bÂ² - aÂ²))  *****************/  
    if (a === "semifocalVert") { 
     var semieixo_maior = parseFloat(document.Elipse.semieixo_maior.value.replace(",", ".")); 
     var semieixo_menor = parseFloat(document.Elipse.semieixo_menor.value.replace(",", "."));  
     
   if ((semieixo_maior < 0) || (isNaN(semieixo_maior))) { alert("Digite um valor positivo para o semieixo maior!");
            document.Elipse.semieixo_maior.focus();
            document.Elipse.semieixo_maior.select(); 
    return false;
   }
  
   if ((semieixo_menor < 0) || (isNaN(semieixo_menor))) { alert("Digite um valor positivo para o semieixo menor!");
            document.Elipse.semieixo_menor.focus();
            document.Elipse.semieixo_menor.select(); 
    return false;
   }
  
   if ((semieixo_maior > semieixo_menor)) { alert("O semieixo 'b' deve ser maior do que o semieixo menor 'a'!");
            document.Elipse.semieixo_maior.focus();
            document.Elipse.semieixo_maior.select(); 
    return false;
   }
   
   try {
   var k = semieixo_maior * semieixo_maior ;  
   var h = semieixo_menor * semieixo_menor ; 
   var aa = h - k ;  
   var bb = Math.sqrt(aa) ;
   var bb = document.getElementById("resposta").value = roundNumber(bb, 2); 
  
     document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>O comprimentro da semidistÃ¢ncia focal (c) da elipse com eixo maior na vertical Ã©:<br><br>  c = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>("+semieixo_menor+")Â² - ("+semieixo_maior+")Â²</a1>  <br><br>  c = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+h+" - "+k+"</a1>  <br><br>  c = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+aa+"</a1> <br>  c = <a1 style='color: #FF0000'> "+bb+"</a1> u.c   <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /****************** Eixo maior na vertical - excentricidade (e = c/a = âˆš(bÂ² - aÂ²)/b)  ******************/  
    if (a === "excentricVert") { 
     var semieixo_maior = parseFloat(document.Elipse.semieixo_maior.value.replace(",", ".")); 
     var semieixo_menor = parseFloat(document.Elipse.semieixo_menor.value.replace(",", "."));  
     
   if ((semieixo_maior < 0) || (isNaN(semieixo_maior))) { alert("Digite um valor positivo para o semieixo maior!");
            document.Elipse.semieixo_maior.focus();
            document.Elipse.semieixo_maior.select(); 
    return false;
   }
  
   if ((semieixo_menor < 0) || (isNaN(semieixo_menor))) { alert("Digite um valor positivo para o semieixo menor!");
            document.Elipse.semieixo_menor.focus();
            document.Elipse.semieixo_menor.select(); 
    return false;
   }
  
   if ((semieixo_maior > semieixo_menor)) { alert("O semieixo 'b' deve ser maior do que o semieixo menor 'a'!");
            document.Elipse.semieixo_maior.focus();
            document.Elipse.semieixo_maior.select(); 
    return false;
   }
   
   try {
   var k = semieixo_maior * semieixo_maior ;  
   var h = semieixo_menor * semieixo_menor ; 
   var aa = h - k ;  
   var bb = Math.sqrt(aa) ;
   var bb = document.getElementById("resposta").value = roundNumber(bb, 2); 
   var cc = bb/semieixo_maior ;
   var cc = document.getElementById("resposta").value = roundNumber(cc, 2); 
  
     document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>Excentricidade da elipse Ã¡ a razÃ£o entre a semi-distÃ¢ncia focal e o semieixo maior. <br> TambÃ©m, Ã© a medida de quanto a elipse se afasta de um cÃ­rculo. <br>Sendo assim, a excentricidade (e) da elipse com eixo maior na vertical Ã©:<br><br>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> e &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> c </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>bÂ² - aÂ²</a1> </td></tr> <tr> <td> b </td><td> b </td> </tr></tbody></table> <br>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> e &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>("+semieixo_menor+")Â² - ("+semieixo_maior+")Â²</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+h+" - "+k+"</a1> </td></tr> <tr> <td> "+semieixo_menor+" </td><td> "+semieixo_menor+" </td> </tr></tbody></table> <br>          <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> e &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+aa+"</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+bb+"</td></tr> <tr> <td> "+semieixo_maior+" </td><td> "+semieixo_maior+" </td> </tr></tbody></table>  <br>   c = <a1 style='color: #FF0000'> "+cc+"</a1>   <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /****************** Vertice maior na vertical: (A1 = (xo, yo - b) *************/  
    if (a === "verticeVert1") { 
     var semieixo_menor = parseFloat(document.Elipse.semieixo_menor.value.replace(",", ".")); 
     var x_o = parseFloat(document.Elipse.x_o.value.replace(",", ".")); 
     var y_o = parseFloat(document.Elipse.y_o.value.replace(",", "."));
  
   if ((semieixo_menor < 0) || (isNaN(semieixo_menor))) { alert("Digite um valor positivo para o semieixo maior!");
            document.Elipse.semieixo_menor.focus();
            document.Elipse.semieixo_menor.select(); 
    return false;
   }
  
   if ((isNaN(x_o))) { alert("Digite um valor para o xo!");
            document.Elipse.x_o.focus();
            document.Elipse.x_o.select(); 
    return false;
   }
   
   if ((isNaN(y_o))) { alert("Digite um valor para o yo!");
            document.Elipse.y_o.focus();
            document.Elipse.y_o.select(); 
    return false;
   }
   
   try {
   var k = y_o -  semieixo_menor;  
  
     document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>As coordenadas do vÃ©rtice (A<a1 style='font-size: 10px; font-family: times new roman;'>1</a1>) com eixo maior na vertical Ã©:<br> A<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = (x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>,&ensp; y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1> - b)<br>  A<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = ("+x_o+",&ensp; "+y_o+" - "+semieixo_menor+")<br>         A<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = (<a1 style='color: #FF0000'>"+x_o+"</a1>,&ensp; <a1 style='color: #FF0000'> "+k+"</a1>)<br>  <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_menor.focus();
      document.Elipse.semieixo_menor.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
  /******************** Vertice maior na vertical: (A2 = (xo, yo + b) ***************/  
    if (a === "verticeVert2") { 
     var semieixo_menor = parseFloat(document.Elipse.semieixo_menor.value.replace(",", ".")); 
     var x_o = parseFloat(document.Elipse.x_o.value.replace(",", ".")); 
     var y_o = parseFloat(document.Elipse.y_o.value.replace(",", "."));
  
   if ((semieixo_menor < 0) || (isNaN(semieixo_menor))) { alert("Digite um valor positivo para o semieixo maior!");
            document.Elipse.semieixo_menor.focus();
            document.Elipse.semieixo_menor.select(); 
    return false;
   }
  
   if ((isNaN(x_o))) { alert("Digite um valor para o xo!");
            document.Elipse.x_o.focus();
            document.Elipse.x_o.select(); 
    return false;
   }
   
   if ((isNaN(y_o))) { alert("Digite um valor para o yo!");
            document.Elipse.y_o.focus();
            document.Elipse.y_o.select(); 
    return false;
   }
   
   try {
   var k = y_o +  semieixo_menor;  
  
     document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>As coordenadas do vÃ©rtice (A<a1 style='font-size: 10px; font-family: times new roman;'>2</a1>) com eixo maior na vertical Ã©:<br> A<a1 style='font-size: 10px; font-family: times new roman;'>2</a1> = (x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>,&ensp; y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1> + b)<br>  A<a1 style='font-size: 10px; font-family: times new roman;'>2</a1> = ("+x_o+",&ensp; "+y_o+" + "+semieixo_menor+")<br>         A<a1 style='font-size: 10px; font-family: times new roman;'>2</a1> = (<a1 style='color: #FF0000'>"+x_o+"</a1>,&ensp; <a1 style='color: #FF0000'> "+k+"</a1>)<br>  <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_menor.focus();
      document.Elipse.semieixo_menor.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /*********************   VÃ©rtice (B1 = (xo, yo - a)  *********************/  
    if (a === "verticeVertB1") { 
     var semieixo_maior = parseFloat(document.Elipse.semieixo_maior.value.replace(",", ".")); 
     var x_o = parseFloat(document.Elipse.x_o.value.replace(",", ".")); 
     var y_o = parseFloat(document.Elipse.y_o.value.replace(",", "."));
  
   if ((semieixo_maior < 0) || (isNaN(semieixo_maior))) { alert("Digite um valor positivo para o semieixo maior!");
            document.Elipse.semieixo_maior.focus();
            document.Elipse.semieixo_maior.select(); 
    return false;
   }
  
   if ((isNaN(x_o))) { alert("Digite um valor para o xo!");
            document.Elipse.x_o.focus();
            document.Elipse.x_o.select(); 
    return false;
   }
   
   if ((isNaN(y_o))) { alert("Digite um valor para o yo!");
            document.Elipse.y_o.focus();
            document.Elipse.y_o.select(); 
    return false;
   } 
  
   try {
   var k = y_o - semieixo_maior;  
  
     document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>As coordenadas do vÃ©rtice (B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1>) da elipse com eixo maior na vertical Ã©:<br> B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = (x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>,&ensp; y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1> - a)<br> B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = ("+x_o+",&ensp; "+y_o+" - "+semieixo_maior+")<br> B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = (<a1 style='color: #FF0000'>"+x_o+"</a1>,&ensp; <a1 style='color: #FF0000'> "+k+"</a1>)<br> <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
  /*********************   VÃ©rtice (B2 = (xo, yo + a)  *********************/  
    if (a === "verticeVertB2") { 
     var semieixo_maior = parseFloat(document.Elipse.semieixo_maior.value.replace(",", ".")); 
     var x_o = parseFloat(document.Elipse.x_o.value.replace(",", ".")); 
     var y_o = parseFloat(document.Elipse.y_o.value.replace(",", "."));
  
   if ((semieixo_maior < 0) || (isNaN(semieixo_maior))) { alert("Digite um valor positivo para o semieixo maior!");
            document.Elipse.semieixo_maior.focus();
            document.Elipse.semieixo_maior.select(); 
    return false;
   }
  
   if ((isNaN(x_o))) { alert("Digite um valor para o xo!");
            document.Elipse.x_o.focus();
            document.Elipse.x_o.select(); 
    return false;
   }
   
   if ((isNaN(y_o))) { alert("Digite um valor para o yo!");
            document.Elipse.y_o.focus();
            document.Elipse.y_o.select(); 
    return false;
   } 
  
   try {
   var k = y_o + semieixo_maior;  
  
     document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>As coordenadas do vÃ©rtice (B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1>) da elipse com eixo maior na vertical Ã©:<br>    B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = (x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>,&ensp; y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1> + a)<br> B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = ("+x_o+",&ensp; "+y_o+" + "+semieixo_maior+")<br> B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = (<a1 style='color: #FF0000'>"+x_o+"</a1>,&ensp; <a1 style='color: #FF0000'> "+k+"</a1>)<br> <hr><h1 class='logomarca'> BpW </h1></div>" 
      document.Elipse.semieixo_maior.focus();
      document.Elipse.semieixo_maior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  }
  
  
  
  
  
  
  
  