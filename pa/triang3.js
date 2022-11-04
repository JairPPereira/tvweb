/***#########################################                         #############################################      **/
/***#########################################  TRIÃ‚NGULO  ISÃ“SCELES   ##############################################      **/
 /** ************   Ãrea 1 (b.h)  ********************  **/  	
 function triangulo_isosceles2() {
    var a = document.forms["trian_isosc"]["trian_isosc_type"].value;
  /** *************   AREA   ***********************  **/  
   if (a === "area1") {
      document.getElementById("lado").disabled = true;
      document.getElementById("lado").value ="";
       document.getElementById("base").disabled = false;
      document.getElementById("altura").disabled = false;
   }
  try { 	}
       catch(e) {alert(e)}
      
   /** ************   Ãrea 2 (a.h)  ********************  **/ 	
   if (a === "area2") {
      document.getElementById("base").disabled = true;
      document.getElementById("base").value ="";	
       document.getElementById("lado").disabled = false;
      document.getElementById("altura").disabled = false;
   }
  try { 	}
       catch(e) {alert(e)}
   
   
   /** ***********  PerÃ­metro 1  *******************  **/  	
   if (a === "perimetro1") {
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";	
       document.getElementById("base").disabled = false;
      document.getElementById("lado").disabled = false;
   }
  try { 	}
       catch(e) {alert(e)}
      
   /** ***********  PerÃ­metro 2  *******************  **/  	   
   if (a === "perimetro2") {
      document.getElementById("lado").disabled = true;
      document.getElementById("lado").value ="";	
       document.getElementById("base").disabled = false;
      document.getElementById("altura").disabled = false;
   }
  try { 	}
       catch(e) {alert(e)}
      
   /** *********** lado (a)  *******************  **/  	   
   if (a === "lado") {
      document.getElementById("lado").disabled = true;
      document.getElementById("lado").value ="";	
       document.getElementById("base").disabled = false;
      document.getElementById("altura").disabled = false;
   }
  try { 	}
       catch(e) {alert(e)}
   
    /** *********** base (b)  *******************  **/ 
   if (a === "base") {
      document.getElementById("base").disabled = true;
      document.getElementById("base").value ="";	
       document.getElementById("lado").disabled = false;
      document.getElementById("altura").disabled = false;
   }
  try { 	}
       catch(e) {alert(e)}  
    
    /** *********** altura  *******************  **/ 
   if (a === "altura") {
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";	
       document.getElementById("lado").disabled = false;
      document.getElementById("base").disabled = false;
   }
  try { 	}
       catch(e) {alert(e)}    
  }
  
  
  
  function triangulo_isosceles1() {
      
   var ddl = document.getElementById("ops");
   var selectedValue = ddl.options[ddl.selectedIndex].value;
      if (selectedValue == "")
     {
      alert("Escolha uma opÃ§Ã£o para Calcular!");
     }	
      
    var a = document.forms["trian_isosc"]["trian_isosc_type"].value;
    /** ***********************************************  CÃ¡lculdo da Ã¡rea 1: b . h   ****************************************  **/  
    if (a === "area1") { 
     var base = eval(document.trian_isosc.base.value.replace(",",".").replace(/ /g,""));
     var altura = eval(document.trian_isosc.altura.value.replace(",",".").replace(/ /g,""));   
     
      if ((base < 0) || isNaN(base) || base == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_isosc.base.focus();
          document.trian_isosc.base.select();  
      return false;
   }
   
      if ((altura < 0) || (isNaN(altura)) || altura == "") { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_isosc.altura.focus();
          document.trian_isosc.altura.select();  
      return false;
  } 
   
  try {
   var base = document.getElementById("resposta").value = roundNumber(base, 2);
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2);	
   var areatrian_isosc = (base * altura)/2;
   var areatrian_isosc = document.getElementById("resposta").value = roundNumber(areatrian_isosc, 2);	
   var areatrian_isosc1 = (base * altura);
   var areatrian_isosc1 = document.getElementById("resposta").value = roundNumber(areatrian_isosc1, 2);	 
   
      
          document.getElementById('resposta').innerHTML = "<hr> A Ã¡rea do triÃ¢ngulo isÃ³sceles Ã©: <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+base+" âˆ™ "+altura+" </td></tr> <tr> <td> 2 </td><td> 2 </td> </tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+areatrian_isosc1+" </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table> </div> A = <a1 style='color: #FF0000'> "+areatrian_isosc+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> uÂ² </a1>  <hr><h1 class='logomarca'> BpW </h1>  ";
      
      document.trian_isosc.base.focus();
      document.trian_isosc.base.select(); 
  }
       catch(e) {alert(e)}
  }
      
   /** ************************************  CÃ¡lculo da Ã¡rea 2: A = h .âˆšaÂ² - hÂ²   *********************************  **/  	
     if (a === "area2") { 
     var lado = eval(document.trian_isosc.lado.value.replace(",",".").replace(/ /g,""));
     var altura = eval(document.trian_isosc.altura.value.replace(",",".").replace(/ /g,""));   
     
      if ((lado < 0) || isNaN(lado) || lado == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_isosc.lado.focus();
          document.trian_isosc.lado.select();  
      return false;
   }
   
      if ((altura < 0) || (isNaN(altura)) || altura == "") { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_isosc.altura.focus();
          document.trian_isosc.altura.select();  
      return false;
  }   
     
  try {
   var lado = document.getElementById("resposta").value = roundNumber(lado, 2);
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2);	
   var areatrian_isosc = altura * Math.sqrt(lado*lado - altura*altura);
   var areatrian_isosc = document.getElementById("resposta").value = roundNumber(areatrian_isosc, 2);	 
   var lado1 =  lado*lado;
   var lado1 = document.getElementById("resposta").value = roundNumber(lado1, 2);	 
   var altura1 =  altura*altura;
   var altura1 = document.getElementById("resposta").value = roundNumber(altura1, 2);	  
   var areatrian_isosc1 =  lado*lado - altura*altura;	
   var areatrian_isosc1 = document.getElementById("resposta").value = roundNumber(areatrian_isosc1, 2);	  
   var areatrian_isosc2 =  Math.sqrt(lado*lado - altura*altura);	
   var areatrian_isosc2 = document.getElementById("resposta").value = roundNumber(areatrian_isosc2, 2);	
   
      document.getElementById('resposta').innerHTML = "<hr>  A Ã¡rea do triÃ¢ngulo isÃ³sceles Ã©: <br> <div style='line-height: 24px;'> A = <a1 style='font-family: times new roman; font-style:italic;'>h</a1> âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '><a1 style='font-family: times new roman; font-style:italic;'>a</a1><a1 style='font-size: 20px; font-family: times new roman;'>Â² </a1> âˆ’ <a1 style='font-family: times new roman; font-style:italic;'>h</a1><a1 style='font-size: 20px; font-family: times new roman;'>Â² </a1>  </a1> <br> A = "+altura+" âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+lado+"<a1 style='font-size: 20px; font-family: times new roman;'>Â²</a1> âˆ’ "+altura+"<a1 style='font-size: 20px; font-family: times new roman;'>Â² </a1> </a1> <br> A = "+altura+" âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+lado1+" âˆ’ "+altura1+"</a1> <br> A = "+altura+" âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+areatrian_isosc1+" </a1> <br> A = "+altura+" âˆ™ "+areatrian_isosc2+"  <br> A =   <a1 style='color: #FF0000'> "+areatrian_isosc+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> uÂ² </a1> <br>  </div><hr><h1 class='logomarca'> BpW </h1>";
      
      document.trian_isosc.lado.focus();
      document.trian_isosc.lado.select(); 
  }
       catch(e) {alert(e)}
  } 
  
  
   /*********************************************   CÃ¡lculdo do PerÃ­metro 1 (P = 2a+b)  ****************************************  **/  	
   if (a === "perimetro1") { 
     var base = eval(document.trian_isosc.base.value.replace(",",".").replace(/ /g,""));
     var lado = eval(document.trian_isosc.lado.value.replace(",",".").replace(/ /g,""));   
     
      if ((base < 0) || isNaN(base) || base == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_isosc.base.focus();
          document.trian_isosc.base.select();  
      return false;
   }
   
      if ((lado < 0) || (isNaN(lado)) || lado == "") { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_isosc.lado.focus();
          document.trian_isosc.lado.select();  
      return false;
  }   
   
  try {
   var lado = document.getElementById("resposta").value = roundNumber(lado, 2);
   var base = document.getElementById("resposta").value = roundNumber(base, 2);		
   var perimetro1 = base + 2*lado ;
   var perimetro1 = document.getElementById("resposta").value = roundNumber(perimetro1, 2);	 
   var lado1 = 2*lado ;	
   var lado1 = document.getElementById("resposta").value = roundNumber(lado1, 2); 
      
      document.getElementById('resposta').innerHTML = "<hr>  O perÃ­metro do triÃ¢ngulo isÃ³sceles Ã©: <br> <div style='line-height: 22px;'> P = <a1 style='font-family: times new roman; font-style:italic;'>b</a1> + 2âˆ™<a1 style='font-family: times new roman; font-style:italic;'>a</a1> <br> P = "+base+" + 2 âˆ™ "+lado+" <br> P =  "+base+" + "+lado1+" <br> P =  <a1 style='color: #FF0000'> "+perimetro1+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1> <br>  </div><hr><h1 class='logomarca'> BpW </h1>";
      
      document.trian_isosc.base.focus();
      document.trian_isosc.base.select(); 
  }
       catch(e) {alert(e)}
  } 
  
   /** ***********************************  CÃ¡lculdo do PerÃ­metro 2 (P = 4aÂ²+bÂ²)    ****************************************  **/  	
   if (a === "perimetro2") { 
     var base = eval(document.trian_isosc.base.value.replace(",",".").replace(/ /g,""));
     var altura = eval(document.trian_isosc.altura.value.replace(",",".").replace(/ /g,""));   
     
      if ((base < 0) || isNaN(base) || base == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_isosc.base.focus();
          document.trian_isosc.base.select();  
      return false;
   }
   
      if ((altura < 0) || (isNaN(altura)) || altura == "") { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_isosc.altura.focus();
          document.trian_isosc.altura.select();  
      return false;
  } 
   
  try {
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2);
   var base = document.getElementById("resposta").value = roundNumber(base, 2);	
   var perimetro2 = Math.sqrt(4*(altura*altura) + base*base) + base ;
   var perimetro2 = document.getElementById("resposta").value = roundNumber(perimetro2, 2); 
   var perim2 = altura*altura  ;
   var perim2 = document.getElementById("resposta").value = roundNumber(perim2, 2);
   var perim3 = base*base ;
   var perim3 = document.getElementById("resposta").value = roundNumber(perim3, 2); 
   var perim4 = 4*(altura*altura) ;
   var perim4 = document.getElementById("resposta").value = roundNumber(perim4, 2); 
   var perim5 = (4*(altura*altura) + base*base) ;	
   var perim5 = document.getElementById("resposta").value = roundNumber(perim5, 2); 
   var perim6 = Math.sqrt(4*(altura*altura) + base*base) ;
   var perim6 = document.getElementById("resposta").value = roundNumber(perim6, 2); 
      
      document.getElementById('resposta').innerHTML = "<hr>  O perÃ­metro do triÃ¢ngulo isÃ³sceles Ã©: <br> <div style='line-height: 24px;'> P = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>4âˆ™<a1 style='font-family: times new roman; font-style:italic;'>h</a1><a1 style='font-size: 20px; font-family: times new roman;'>Â²</a1> + <a1 style='font-family: times new roman; font-style:italic;'>b</a1><a1 style='font-size: 20px; font-family: times new roman;'>Â²</a1> </a1>+ <a1 style='font-family: times new roman; font-style:italic;'>b</a1> <br> P = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>4âˆ™("+altura+")<a1 style='font-size: 20px; font-family: times new roman;'>Â²</a1> + "+base+"<a1 style='font-size: 20px; font-family: times new roman;'>Â²</a1> </a1>+ "+base+"  <br> P = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>4âˆ™("+perim2+") + "+perim3+" </a1>+ "+base+" <br> P = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+perim4+" + "+perim3+" </a1>+ "+base+" <br> P = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+perim5+" </a1> + "+base+" <br> P = "+perim6+" </a1> + "+base+" <br> P =   <a1 style='color: #FF0000'> "+perimetro2+" "+"&nbsp</a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1> <br>  </div><hr><h1 class='logomarca'> BpW </h1>";
      
      document.trian_isosc.base.focus();
      document.trian_isosc.base.select(); 
  }
       catch(e) {alert(e)}
  } 
  
      
   /** ************************************* CÃ¡lculo do lado (a): a = âˆšhÂ² + bÂ²/4       ****************************************  **/  	 
   if (a === "lado") { 
     var base = eval(document.trian_isosc.base.value.replace(",",".").replace(/ /g,""));
     var altura = eval(document.trian_isosc.altura.value.replace(",",".").replace(/ /g,""));   
     
      if ((base < 0) || isNaN(base) || base == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_isosc.base.focus();
          document.trian_isosc.base.select();  
      return false;
   }
   
      if ((altura < 0) || (isNaN(altura)) || altura == "") { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_isosc.altura.focus();
          document.trian_isosc.altura.select();  
      return false;
  }  
   
  try {
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2);
   var base = document.getElementById("resposta").value = roundNumber(base, 2);		
   var lado = Math.sqrt(altura*altura + (base*base)/4);
   var lado = document.getElementById("resposta").value = roundNumber(lado, 2);	 
   var lado1 = altura*altura ;
   var lado1 = document.getElementById("resposta").value = roundNumber(lado1, 2);	 
   var lado2 = base*base ;	
   var lado2 = document.getElementById("resposta").value = roundNumber(lado2, 2);	 
   var lado3 = (base*base)/4 ;
   var lado3 = document.getElementById("resposta").value = roundNumber(lado3, 2);	 
   var lado4 = (altura*altura + (base*base)/4);
   var lado4 = document.getElementById("resposta").value = roundNumber(lado4, 2);	 
      
      document.getElementById('resposta').innerHTML = "<hr>  O lado do triÃ¢ngulo isÃ³sceles Ã©: <br> <div style='line-height: 25px;'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '><a1 style='font-family: times new roman; font-style:italic;'>h</a1><a1 style='font-size: 20px; font-family: times new roman;'>Â²</a1> + <a1 style='font-family: times new roman; font-style:italic;'>b</a1><a1 style='font-size: 20px; font-family: times new roman;'>Â²</a1>/4 </a1> <br>   <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+altura+"<a1 style='font-size: 20px; font-family: times new roman;'>Â²</a1>+ ("+base+")<a1 style='font-size: 20px; font-family: times new roman;'>Â²</a1>/4 </a1>  <br> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+lado1+" + ("+lado2+")/4 </a1>&nbsp <br> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+lado1+" + "+lado3+"</a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+lado4+" </a1>&nbsp <br> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> =  <a1 style='color: #FF0000'> "+lado+" " +"&nbsp;</a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1> <br> </div><hr><h1 class='logomarca'> BpW </h1>";
      
      document.trian_isosc.base.focus();
      document.trian_isosc.base.select(); 
  }
       catch(e) {alert(e)}
  }  
    
    
   /** ***********************************  CÃ¡lculo da base (b): b = 2âˆ™âˆšaÂ² - hÂ²   ****************************************  **/  	 
   if (a === "base") { 
     var lado = eval(document.trian_isosc.lado.value.replace(",",".").replace(/ /g,""));
     var altura = eval(document.trian_isosc.altura.value.replace(",",".").replace(/ /g,""));   
     
      if ((lado < 0) || isNaN(lado) || lado == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_isosc.lado.focus();
          document.trian_isosc.lado.select();  
      return false;
   }
   
      if ((altura < 0) || (isNaN(altura)) || altura == "") { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_isosc.altura.focus();
          document.trian_isosc.altura.select();  
      return false;
  }
   
  try {
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2);
   var lado = document.getElementById("resposta").value = roundNumber(lado, 2);		
   var lado1 = 2*Math.sqrt(lado*lado - altura*altura);
   var lado1 = document.getElementById("resposta").value = roundNumber(lado1, 2); 
   var lado2 = lado*lado ;
   var lado2 = document.getElementById("resposta").value = roundNumber(lado2, 2); 
   var altura1 =  altura*altura ;
   var altura1 = document.getElementById("resposta").value = roundNumber(altura1, 2); 
   var lado4 = (lado*lado - altura*altura) ;	
   var lado4 = document.getElementById("resposta").value = roundNumber(lado4, 2);  
   var lado5 = Math.sqrt(lado*lado - altura*altura) ;	
   var lado5 = document.getElementById("resposta").value = roundNumber(lado5, 2);  
      
      document.getElementById('resposta').innerHTML = "<hr>  A base do triÃ¢ngulo isÃ³sceles Ã©: <br> <div style='line-height: 24px;'> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> = 2âˆ™âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '><a1 style='font-family: times new roman; font-style:italic;'>a</a1><a1 style='font-size: 20px; font-family: times new roman;'>Â²</a1> âˆ’ <a1 style='font-family: times new roman; font-style:italic;'>h</a1><a1 style='font-size: 20px; font-family: times new roman;'>Â²</a1> </a1> <br><a1 style='font-family: times new roman; font-style:italic;'>b</a1> =  2âˆ™âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+lado+"<a1 style='font-size: 20px; font-family: times new roman;'>Â²</a1> âˆ’ "+altura+"<a1 style='font-size: 20px; font-family: times new roman;'>Â²</a1> </a1>  <br> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> =  2âˆ™âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+lado2+" âˆ’ "+altura1+" </a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> = 2âˆ™âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+lado4+" </a1>  <br>  <a1 style='font-family: times new roman; font-style:italic;'>b</a1> = 2 âˆ™ "+lado5+" &nbsp <br> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> =  <a1 style='color: #FF0000'> "+lado1+" " +"&nbsp;</a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1> <br>  </div><hr><h1 class='logomarca'> BpW </h1>";
      
      document.trian_isosc.lado.focus();
      document.trian_isosc.lado.select(); 
  }
       catch(e) {alert(e)}
  }   
  
   /** ********************************** CÃ¡lculo da altura (h): h = âˆšaÂ² - bÂ²/4  ****************************************  **/    
  if (a === "altura") { 
     var base = eval(document.trian_isosc.base.value.replace(",",".").replace(/ /g,""));
     var lado = eval(document.trian_isosc.lado.value.replace(",",".").replace(/ /g,""));   
     
      if ((base < 0) || isNaN(base) || base == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_isosc.base.focus();
          document.trian_isosc.base.select();  
      return false;
   }
   
      if ((lado < 0) || (isNaN(lado)) || lado == "") { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_isosc.lado.focus();
          document.trian_isosc.lado.select();  
      return false;
  }
  
  try {
   var base = document.getElementById("resposta").value = roundNumber(base, 2);
   var lado = document.getElementById("resposta").value = roundNumber(lado, 2);		
   var altura = Math.sqrt(lado*lado - (base*base)/4);
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2); 
   var altura1 = lado*lado ;
   var altura1 = document.getElementById("resposta").value = roundNumber(altura1, 2);  
   var altura2 = base*base ;	
   var altura2 = document.getElementById("resposta").value = roundNumber(altura2, 2);  
   var altura3 = (base*base)/4 ;	
   var altura3 = document.getElementById("resposta").value = roundNumber(altura3, 2);  
   var altura4 = (lado*lado - (base*base)/4);
   var altura4 = document.getElementById("resposta").value = roundNumber(altura4, 2);  
      
      document.getElementById('resposta').innerHTML = "<hr>  A altura do triÃ¢ngulo isÃ³sceles Ã©: <br> <div style='line-height: 24px;'> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '><a1 style='font-family: times new roman; font-style:italic;'>a</a1><a1 style='font-size: 20px; font-family: times new roman;'>Â²</a1> âˆ’ <a1 style='font-family: times new roman; font-style:italic;'>b</a1><a1 style='font-size: 20px; font-family: times new roman;'>Â²</a1>/4 </a1><br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+lado+"<a1 style='font-size: 20px; font-family: times new roman;'>Â²</a1> âˆ’ ("+base+")<a1 style='font-size: 20px; font-family: times new roman;'>Â²</a1>/4 </a1>  <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+altura1+" âˆ’ ("+altura2+")/4 </a1>&nbsp <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+altura1+" âˆ’ "+altura3+"</a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+altura4+" </a1>&nbsp <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> =   <a1 style='color: #FF0000'> "+altura+" " +"&nbsp;</a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1> <br>  </div><hr><h1 class='logomarca'> BpW </h1>";
      
      document.trian_isosc.base.focus();
      document.trian_isosc.base.select(); 
  }
       catch(e) {alert(e)}
  }
  }
  
  
  
  /***###########################################                        ###############################################      **/
  /***###########################################  TRIÃ‚NGULO  RETÃ‚NGULO  ###############################################      **/
  
  function triangulo_retangulo2() {
    var a = document.forms["trian_retangulo"]["trian_retangulo_type"].value;
  /** *************   AREA 1 (c.b)   ***********************  **/  
   if (a === "area1") {
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value ="";
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";
      document.getElementById("projeÃ§aom").disabled = true;
      document.getElementById("projeÃ§aom").value ="";
      document.getElementById("projeÃ§aon").disabled = true;
      document.getElementById("projeÃ§aon").value ="";
       document.getElementById("ladob").disabled = false;
      document.getElementById("ladoc").disabled = false;
   }
  try { 	}
       catch(e) {alert(e)}
      
   /** ************   Ãrea 2 (a.h)  ********************  **/ 	
   if (a === "area2") {
      document.getElementById("ladob").disabled = true;
      document.getElementById("ladob").value ="";
      document.getElementById("ladoc").disabled = true;
      document.getElementById("ladoc").value ="";	
      document.getElementById("projeÃ§aom").disabled = true;
      document.getElementById("projeÃ§aom").value ="";
      document.getElementById("projeÃ§aon").disabled = true;
      document.getElementById("projeÃ§aon").value ="";	
       document.getElementById("ladoa").disabled = false;
      document.getElementById("altura").disabled = false;
   }
  try { 	}
       catch(e) {alert(e)}
   
    /** ***********  lado "a"  *******************  **/  	
   if (a === "ladoa") {
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value ="";
      document.getElementById("ladoc").disabled = true;
      document.getElementById("ladoc").value ="";	
      document.getElementById("projeÃ§aom").disabled = true;
      document.getElementById("projeÃ§aom").value ="";
      document.getElementById("projeÃ§aon").disabled = true;
      document.getElementById("projeÃ§aon").value ="";	
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";		
       document.getElementById("ladob").disabled = false;
      document.getElementById("ladoc").disabled = false;
   }
  try { 	}
       catch(e) {alert(e)}
      
   /** ***********  Altura 1 (h = (c.b)/a)  *******************  **/  	   
   if (a === "altura1") {
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";
      document.getElementById("projeÃ§aom").disabled = true;
      document.getElementById("projeÃ§aom").value ="";
      document.getElementById("projeÃ§aon").disabled = true;
      document.getElementById("projeÃ§aon").value ="";	
      document.getElementById("ladoa").disabled = false;	
       document.getElementById("ladob").disabled = false;
      document.getElementById("ladoc").disabled = false;
   }
  try { 	}
       catch(e) {alert(e)}
      
   /** ***********  Altura 2 (h = (m.n)^(1/2))  *********************/  	   
   if (a === "altura2") {
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";
      document.getElementById("ladoa").disabled = true;	
      document.getElementById("ladoa").value ="";	
       document.getElementById("ladob").disabled = true ;
      document.getElementById("ladob").value ="";	
      document.getElementById("ladoc").disabled = true;
      document.getElementById("ladoc").value ="";	
      document.getElementById("projeÃ§aom").disabled = false;
      document.getElementById("projeÃ§aon").disabled = false;
   }
  try { 	}
       catch(e) {alert(e)}	   
  
    /** ***********  Cateto b (1) (b = (aÂ² - cÂ²)^(1/2))  *********************/  	   
   if (a === "ladob") {
      document.getElementById("ladob").disabled = true;
      document.getElementById("ladob").value ="";
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";
      document.getElementById("projeÃ§aom").disabled = true;
      document.getElementById("projeÃ§aom").value ="";	
      document.getElementById("projeÃ§aon").disabled = true;
      document.getElementById("projeÃ§aon").value ="";
      document.getElementById("ladoa").disabled = false;	
      document.getElementById("ladoc").disabled = false;
   }
  try { 	}
       catch(e) {alert(e)}	 
    
   /** ***********  Cateto c (1) (c = (aÂ² - bÂ²)^(1/2))  *********************/  	   
   if (a === "ladoc") {
      document.getElementById("ladoc").disabled = true;
      document.getElementById("ladoc").value ="";
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";
      document.getElementById("projeÃ§aom").disabled = true;
      document.getElementById("projeÃ§aom").value ="";	
      document.getElementById("projeÃ§aon").disabled = true;
      document.getElementById("projeÃ§aon").value ="";
      document.getElementById("ladoa").disabled = false;	
      document.getElementById("ladob").disabled = false;
   }
  try { 	}
       catch(e) {alert(e)}	 	
  
    /** ***********  ProjeÃ§Ã£o m (1) (m = (hÂ²/n)  *********************/  	   
   if (a === "projeÃ§aom") {
      document.getElementById("projeÃ§aom").disabled = true;
      document.getElementById("projeÃ§aom").value ="";
      document.getElementById("ladoc").disabled = true;
      document.getElementById("ladoc").value ="";
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value ="";	
      document.getElementById("ladob").disabled = true;	
      document.getElementById("ladob").value ="";	
      document.getElementById("projeÃ§aon").disabled = false;
      document.getElementById("altura").disabled = false;
   }
  try { 	}
       catch(e) {alert(e)}	 
    
   /** ***********  ProjeÃ§Ã£o n (1) (n = (hÂ²/m)  *********************/  	   
   if (a === "projeÃ§aon") {
      document.getElementById("projeÃ§aon").disabled = true;
      document.getElementById("projeÃ§aon").value ="";
      document.getElementById("ladoc").disabled = true;
      document.getElementById("ladoc").value ="";
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value ="";	
      document.getElementById("ladob").disabled = true;	
      document.getElementById("ladob").value ="";	
      document.getElementById("projeÃ§aom").disabled = false;
      document.getElementById("altura").disabled = false;
   }
  try { 	}
       catch(e) {alert(e)}	   
    
   /** ***********  PerÃ­metro (P = a + b + c)  *********************/  	   
   if (a === "perimetro") {
      document.getElementById("projeÃ§aon").disabled = true;
      document.getElementById("projeÃ§aon").value ="";
      document.getElementById("projeÃ§aom").disabled = true;
      document.getElementById("projeÃ§aom").value ="";	
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";	
      document.getElementById("ladoa").disabled = false;
      document.getElementById("ladob").disabled = false;	
      document.getElementById("ladoc").disabled = false;
   }
  try { 	}
       catch(e) {alert(e)}	   
  }
  
  
  
  function triangulo_retangulo1() {
      
   var ddl = document.getElementById("ops");
   var selectedValue = ddl.options[ddl.selectedIndex].value;
      if (selectedValue == "")
     {
      alert("Escolha uma opÃ§Ã£o para Calcular!");
     } 
      
      
    var a = document.forms["trian_retangulo"]["trian_retangulo_type"].value;
    /** ********************************************   CÃ¡lculdo da Ã¡rea 1: A = (b.c)/2   ****************************************  **/  
    if (a === "area1") { 
     var ladob = eval(document.trian_retangulo.ladob.value.replace(",",".").replace(/ /g,""));
     var ladoc = eval(document.trian_retangulo.ladoc.value.replace(",",".").replace(/ /g,""));   
     
      if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_retangulo.ladob.focus();
          document.trian_retangulo.ladob.select();  
      return false;
   }
   
      if ((ladoc < 0) || (isNaN(ladoc)) || ladoc == "") { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_retangulo.ladoc.focus();
          document.trian_retangulo.ladoc.select();  
      return false;
  }  
  
  try {
   var ladob = document.getElementById("resposta").value = roundNumber(ladob, 2);	
   var ladoc = document.getElementById("resposta").value = roundNumber(ladoc, 2);	 
   var areatrian_retangulo = (ladob * ladoc)/2;
   var areatrian_retangulo = document.getElementById("resposta").value = roundNumber(areatrian_retangulo, 2);	 
   var trian_retang1 = ladob * ladoc;	
   var trian_retang1 = document.getElementById("resposta").value = roundNumber(trian_retang1, 2);	  
       
      document.getElementById('resposta').innerHTML = "<hr>  A Ã¡rea do triÃ¢ngulo retÃ¢ngulo Ã©: <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>c</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladob+" âˆ™ "+ladoc+" </td></tr> <tr> <td> 2 </td><td> 2 </td> </tr></tbody></table>     <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+trian_retang1+" </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>  A = <a1 style='color: #FF0000'> "+areatrian_retangulo+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> uÂ² </a1>&nbsp; </div><hr><h1 class='logomarca'> BpW </h1>";
      
      document.trian_retangulo.ladoa.focus();
      document.trian_retangulo.ladoa.select(); 
  }
       catch(e) {alert(e)}
  }
      
   /** ********************************************  CÃ¡lculo da Ã¡rea 2: A = (a.h)/2   ****************************************  **/  	
    if (a === "area2") { 
     var ladoa = eval(document.trian_retangulo.ladoa.value.replace(",",".").replace(/ /g,""));
     var altura = eval(document.trian_retangulo.altura.value.replace(",",".").replace(/ /g,""));   
     
      if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_retangulo.ladoa.focus();
          document.trian_retangulo.ladoa.select();  
      return false;
   }
   
      if ((altura < 0) || (isNaN(altura)) || altura == "") { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_retangulo.altura.focus();
          document.trian_retangulo.altura.select();  
      return false;
  } 
    
  try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);	
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2);		
   var areatrian_retangulo = (ladoa * altura)/2;
   var areatrian_retangulo = document.getElementById("resposta").value = roundNumber(areatrian_retangulo, 2); 
   var trian_retang2 = ladoa * altura;	
   var trian_retang2 = document.getElementById("resposta").value = roundNumber(trian_retang2, 2);  
       
      document.getElementById('resposta').innerHTML = "<hr>  A Ã¡rea do triÃ¢ngulo retÃ¢ngulo Ã©: <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladoa+" âˆ™ "+altura+" </td></tr> <tr> <td> 2 </td><td> 2 </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+trian_retang2+" </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table> </div>  A = &nbsp;<a1 style='color: #FF0000'> "+areatrian_retangulo+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> uÂ² </a1>   <hr><h1 class='logomarca'> BpW </h1>   ";
      
      document.trian_retangulo.ladoa.focus();
      document.trian_retangulo.ladoa.select(); 
  }
       catch(e) {alert(e)}
  }
  
  /***************************************  CÃ¡lculdo do lado "a":  a = âˆš(bÂ² + cÂ²)    ****************************************  **/  	
    if (a === "ladoa") { 
     var ladob = eval(document.trian_retangulo.ladob.value.replace(",",".").replace(/ /g,""));
     var ladoc = eval(document.trian_retangulo.ladoc.value.replace(",",".").replace(/ /g,""));   
     
      if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_retangulo.ladob.focus();
          document.trian_retangulo.ladob.select();  
      return false;
   }
   
      if ((ladoc < 0) || (isNaN(ladoc)) || ladoc == "") { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_retangulo.ladoc.focus();
          document.trian_retangulo.ladoc.select();  
      return false;
  }   
  
  try {
   var ladob = document.getElementById("resposta").value = roundNumber(ladob, 2);	
   var ladoc = document.getElementById("resposta").value = roundNumber(ladoc, 2);		
   var hipotenusa = Math.sqrt(ladob*ladob + ladoc*ladoc);
   var hipotenusa = document.getElementById("resposta").value = roundNumber(hipotenusa, 2);	 
   var trian_retang1 = ladob * ladoc;
   var trian_retang1 = document.getElementById("resposta").value = roundNumber(trian_retang1, 2);	
   var hipot1 = ladob*ladob;	
   var hipot1 = document.getElementById("resposta").value = roundNumber(hipot1, 2);	 
   var hipot2 = ladoc*ladoc;	
   var hipot2 = document.getElementById("resposta").value = roundNumber(hipot2, 2);	  
   var hipot3 = ladob*ladob + ladoc*ladoc;
   var hipot3 = document.getElementById("resposta").value = roundNumber(hipot3, 2);	  	
      
      document.getElementById('resposta').innerHTML = "<hr> A hipotenusa do triÃ¢ngulo ABC Ã©: <br> <div style='line-height: 25px;'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>b<a1 style='font-size: 18px; font-family: times new roman;'>Â²</a1> + c<a1 style='font-size: 18px; font-family: times new roman;'>Â²</a1> </a1>&nbsp; =  âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+ladob+"<a1 style='font-size: 18px; font-family: times new roman;'>Â²</a1> + "+ladoc+"<a1 style='font-size: 18px; font-family: times new roman;'>Â²</a1></a1>  <br> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> =  âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+hipot1+" + "+hipot2+" </a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>a</a1>&nbsp;= âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+hipot3+" </a1>    </div>  <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = <a1 style='color: #FF0000'> "+hipotenusa+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1> <hr><h1 class='logomarca'> BpW </h1>  ";
      
      document.trian_retangulo.ladoa.focus();
      document.trian_retangulo.ladoa.select(); 
  }
       catch(e) {alert(e)}
  }
  
  /** *****************************************    Altura 1 (h = (c.b)/a)     ****************************************  **/  	
    if (a === "altura1") {
     var ladoa = eval(document.trian_retangulo.ladoa.value.replace(",",".").replace(/ /g,"")); 	  
     var ladob = eval(document.trian_retangulo.ladob.value.replace(",",".").replace(/ /g,""));
     var ladoc = eval(document.trian_retangulo.ladoc.value.replace(",",".").replace(/ /g,"")); 
     
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_retangulo.ladoa.focus();
          document.trian_retangulo.ladoa.select();  
      return false;
   }
   
      if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_retangulo.ladob.focus();
          document.trian_retangulo.ladob.select();  
      return false;
   }
   
      if ((ladoc < 0) || (isNaN(ladoc)) || ladoc == "") { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_retangulo.ladoc.focus();
          document.trian_retangulo.ladoc.select();  
      return false;
  } 
  
  try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);	
   var ladob = document.getElementById("resposta").value = roundNumber(ladob, 2);	
   var ladoc = document.getElementById("resposta").value = roundNumber(ladoc, 2);	 
   var altura = (ladob * ladoc)/ladoa;
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2);	 
   var altura1 = ladob * ladoc;
   var altura1 = document.getElementById("resposta").value = roundNumber(altura1, 2);	 
      
      document.getElementById('resposta').innerHTML = "<hr>  A altura do triÃ¢ngulo ABC Ã©: <br> <div style='line-height: 13px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-size:18px; font-style:italic;'>h</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>c</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladob+" âˆ™ "+ladoc+" </td></tr> <tr> <td> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> </td><td> "+ladoa+" </td> </tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-size:18px; font-style:italic;'>h</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+altura1+" </td></tr><tr><td style='text-align:center;'> "+ladoa+" </td></tr></tbody></table>   <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = <a1 style='color: #FF0000'> "+altura+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1> &nbsp;  </div><hr><h1 class='logomarca'> BpW </h1>";
      
      document.trian_retangulo.ladoa.focus();
      document.trian_retangulo.ladoa.select(); 
  }
       catch(e) {alert(e)}
  }
   
  /** *********************************************   (h = (m.n)^(1/2))   ****************************************  **/  	
    if (a === "altura2") {
     var projeÃ§aom = eval(document.trian_retangulo.projeÃ§aom.value.replace(",",".").replace(/ /g,"")); 	  
     var projeÃ§aon = eval(document.trian_retangulo.projeÃ§aon.value.replace(",",".").replace(/ /g,""));
     
       if ((projeÃ§aom < 0) || isNaN(projeÃ§aom) || projeÃ§aom == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_retangulo.projeÃ§aom.focus();
          document.trian_retangulo.projeÃ§aom.select();  
      return false;
   }
   
      if ((projeÃ§aon < 0) || isNaN(projeÃ§aon) || projeÃ§aon == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_retangulo.projeÃ§aon.focus();
          document.trian_retangulo.projeÃ§aon.select();  
      return false;
   }
   
  try {
   var projeÃ§aom = document.getElementById("resposta").value = roundNumber(projeÃ§aom, 2);	
   var projeÃ§aon = document.getElementById("resposta").value = roundNumber(projeÃ§aon, 2);		
   var altura = Math.sqrt(projeÃ§aom * projeÃ§aon);
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2);	 
   var altura1 = (projeÃ§aom * projeÃ§aon);
   var altura1 = document.getElementById("resposta").value = roundNumber(altura1, 2); 
      
      document.getElementById('resposta').innerHTML = "<hr>  A altura do triÃ¢ngulo ABC Ã©: <br> <div style='line-height: 24px;'> <a1 style='font-family: times new roman; font-style:italic;'>h</a1>Â² =  <a1 style='font-family: times new roman; font-style:italic;'>m</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>n</a1> </a1> <br>  <a1 style='font-family: times new roman; font-style:italic;'>h</a1> =  âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '> <a1 style='font-family: times new roman; font-style:italic;'>m</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>n</a1> </a1>  </a1> <br><a1 style='font-family: times new roman; font-style:italic;'>h</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '> "+projeÃ§aom+" âˆ™ "+projeÃ§aon+" </a1>  </a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> =  âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '> "+altura1+" </a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = <a1 style='color: #FF0000'> "+altura+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>    </div><hr><h1 class='logomarca'> BpW </h1>";
      
      document.trian_retangulo.projeÃ§aom.focus();
      document.trian_retangulo.projeÃ§aom.select(); 
  }
       catch(e) {alert(e)}
  }
  
  /** *************************************  CÃ¡lculo do cateto (b): b = âˆš(aÂ² - cÂ²)     ****************************************  **/  	 
   if (a === "ladob") { 
     var ladoa = eval(document.trian_retangulo.ladoa.value.replace(",",".").replace(/ /g,"")); 	  
     var ladoc = eval(document.trian_retangulo.ladoc.value.replace(",",".").replace(/ /g,"")); 
     
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_retangulo.ladoa.focus();
          document.trian_retangulo.ladoa.select();  
      return false;
   }
   
      if ((ladoc < 0) || (isNaN(ladoc)) || ladoc == "") { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_retangulo.ladoc.focus();
          document.trian_retangulo.ladoc.select();  
      return false;
  }  
   
  try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);	
   var ladoc = document.getElementById("resposta").value = roundNumber(ladoc, 2);		
   var catetob = Math.sqrt(ladoa*ladoa - ladoc*ladoc);
   var catetob = document.getElementById("resposta").value = roundNumber(catetob, 2);	
   var catetob2 = ladoa*ladoa;
   var catetob2 = document.getElementById("resposta").value = roundNumber(catetob2, 2);	 
   var catetob3 = ladoc*ladoc;
   var catetob3 = document.getElementById("resposta").value = roundNumber(catetob3, 2); 
   var catetob4 = ladoa*ladoa - ladoc*ladoc;
   var catetob4 = document.getElementById("resposta").value = roundNumber(catetob4, 2);	
      
      document.getElementById('resposta').innerHTML = "<hr> O cateto <a1 style='font-family: times new roman; font-style:italic;'>b</a1> do triÃ¢ngulo ABC Ã©: <br> <div style='line-height: 22px;'><a1 style='font-family: times new roman; font-style:italic;'>b</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '><a1 style='font-family: times new roman; font-style:italic;'>a</a1><a1 style='font-size: 18px; font-family: times new roman;'>Â²</a1> âˆ’ <a1 style='font-family: times new roman; font-style:italic;'>c</a1><a1 style='font-size: 18px; font-family: times new roman;'>Â²</a1> </a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+ladoa+"<a1 style='font-size: 18px; font-family: times new roman;'>Â²</a1> âˆ’ "+ladoc+"<a1 style='font-size: 18px; font-family: times new roman;'>Â²</a1></a1>  <br> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> =  âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+catetob2+" âˆ’ "+catetob3+" </a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> =  âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+catetob4+" </a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> = <a1 style='color: #FF0000'> "+catetob+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>    </div><hr><h1 class='logomarca'> BpW </h1>";
      
      document.trian_retangulo.ladoa.focus();
      document.trian_retangulo.ladoa.select(); 
  }
       catch(e) {alert(e)}
  }
    
  /** ***********************************  CÃ¡lculo do cateto (c): c = âˆš(aÂ² - bÂ²)      ****************************************  **/  	 
   if (a === "ladoc") { 
     var ladoa = eval(document.trian_retangulo.ladoa.value.replace(",",".").replace(/ /g,"")); 	  
     var ladob = eval(document.trian_retangulo.ladob.value.replace(",",".").replace(/ /g,"")); 
     
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_retangulo.ladoa.focus();
          document.trian_retangulo.ladoa.select();  
      return false;
   }
   
      if ((ladob < 0) || (isNaN(ladob)) || ladob == "") { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_retangulo.ladob.focus();
          document.trian_retangulo.ladob.select();  
      return false;
  }  
   
  try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);	
   var ladob = document.getElementById("resposta").value = roundNumber(ladob, 2);		
   var catetoc = Math.sqrt(ladoa*ladoa - ladob*ladob);
   var catetoc = document.getElementById("resposta").value = roundNumber(catetoc, 2);	 
   var catetoc2 = ladoa*ladoa;
   var catetoc2 = document.getElementById("resposta").value = roundNumber(catetoc2, 2);	 
   var catetoc3 = ladob*ladob;
   var catetoc3 = document.getElementById("resposta").value = roundNumber(catetoc3, 2);	 
   var catetoc4 = ladoa*ladoa - ladob*ladob;
   var catetoc4 = document.getElementById("resposta").value = roundNumber(catetoc4, 2);		
      
      document.getElementById('resposta').innerHTML = "<hr>  O cateto <a1 style='font-family: times new roman; font-style:italic;'>c</a1> do triÃ¢ngulo ABC Ã©: <br> <div style='line-height: 25px;'><a1 style='font-family: times new roman; font-style:italic;'>c</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '><a1 style='font-family: times new roman; font-style:italic;'>a</a1><a1 style='font-size: 18px; font-family: times new roman;'>Â²</a1> âˆ’ <a1 style='font-family: times new roman; font-style:italic;'>b</a1><a1 style='font-size: 18px; font-family: times new roman;'>Â²</a1> </a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>c</a1> =  âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+ladoa+"<a1 style='font-size: 18px; font-family: times new roman;'>Â²</a1> âˆ’ "+ladob+"<a1 style='font-size: 18px; font-family: times new roman;'>Â²</a1></a1>  <br> <a1 style='font-family: times new roman; font-style:italic;'>c</a1> =  âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+catetoc2+" âˆ’ "+catetoc3+" </a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>c</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+catetoc4+" </a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>c</a1> = <a1 style='color: #FF0000'> "+catetoc+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>    </div><hr><h1 class='logomarca'> BpW </h1>";
      
      document.trian_retangulo.ladoa.focus();
      document.trian_retangulo.ladoa.select(); 
  }
       catch(e) {alert(e)}
  }  
    
  /** ****************************************   CÃ¡lculo da projeÃ§Ã£o m:   m = hÂ²/n    ****************************************  **/   
  if (a === "projeÃ§aom") { 
     var altura = eval(document.trian_retangulo.altura.value.replace(",",".").replace(/ /g,"")); 	  
     var projeÃ§aon = eval(document.trian_retangulo.projeÃ§aon.value.replace(",",".").replace(/ /g,"")); 
     
       if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_retangulo.altura.focus();
          document.trian_retangulo.altura.select();  
      return false;
   }
   
      if ((projeÃ§aon < 0) || (isNaN(projeÃ§aon)) || projeÃ§aon == "") { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_retangulo.projeÃ§aon.focus();
          document.trian_retangulo.projeÃ§aon.select();  
      return false;
  } 
  
  try {
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2);	
   var projeÃ§aon = document.getElementById("resposta").value = roundNumber(projeÃ§aon, 2);	
   var projecaom = (altura*altura)/projeÃ§aon ;
   var projecaom = document.getElementById("resposta").value = roundNumber(projecaom, 2);		
   var projeÃ§aom2 = altura*altura;	
   var projeÃ§aom2 = document.getElementById("resposta").value = roundNumber(projeÃ§aom2, 2);		
       
      document.getElementById('resposta').innerHTML = "<hr>  A projeÃ§Ã£o ortogonal <a1 style='font-family: times new roman; font-style:italic;'>m</a1> do cateto sobre a hipotenusa Ã©: <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>m</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>h</a1><a1 style='font-size: 18px; font-family: times new roman;'>Â²</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> ("+altura+"<a1 style='font-size: 18px; font-family: times new roman;'>)Â²</a1> </td></tr> <tr> <td> <a1 style='font-family: times new roman; font-style:italic;'>n</a1> </td><td> "+projeÃ§aon+" </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>m</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+projeÃ§aom2+" </td></tr><tr><td style='text-align:center;'> "+projeÃ§aon+" </td></tr></tbody></table>  </div> <a1 style='font-family: times new roman; font-style:italic;'>m</a1> =  <a1 style='color: #FF0000'> "+projecaom+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1> <hr><h1 class='logomarca'> BpW </h1> ";
      
      document.trian_retangulo.altura.focus();
      document.trian_retangulo.altura.select(); 
  }
       catch(e) {alert(e)}
  } 
  
  /** **************************************  CÃ¡lculo da projeÃ§Ã£o n: n = hÂ²/m    ****************************************  **/   
  if (a === "projeÃ§aon") { 
     var altura = eval(document.trian_retangulo.altura.value.replace(",",".").replace(/ /g,"")); 	  
     var projeÃ§aom = eval(document.trian_retangulo.projeÃ§aom.value.replace(",",".").replace(/ /g,"")); 
     
       if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_retangulo.altura.focus();
          document.trian_retangulo.altura.select();  
      return false;
   }
   
      if ((projeÃ§aom < 0) || (isNaN(projeÃ§aom)) ||projeÃ§aom == "") { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_retangulo.projeÃ§aom.focus();
          document.trian_retangulo.projeÃ§aom.select();  
      return false;
  } 
  
  try {
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2);	
   var projeÃ§aom = document.getElementById("resposta").value = roundNumber(projeÃ§aom, 2);		
   var projeÃ§aon = (altura*altura)/projeÃ§aom ;
   var projeÃ§aon = document.getElementById("resposta").value = roundNumber(projeÃ§aon, 2);		
   var projeÃ§aon2 = altura*altura;	
   var projeÃ§aon2 = document.getElementById("resposta").value = roundNumber(projeÃ§aon2, 2);		
       
      document.getElementById('resposta').innerHTML = "<hr>  A projeÃ§Ã£o ortogonal <a1 style='font-family: times new roman; font-style:italic;'>n</a1> do cateto sobre a hipotenusa Ã©: <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>h</a1><a1 style='font-size: 18px; font-family: times new roman;'>Â²</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> ("+altura+"<a1 style='font-size: 18px; font-family: times new roman;'>)Â²</a1> </td></tr> <tr> <td> <a1 style='font-family: times new roman; font-style:italic;'>m</a1> </td><td> "+projeÃ§aom+" </td> </tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+projeÃ§aon2+" </td></tr><tr><td style='text-align:center;'> "+projeÃ§aom+" </td></tr></tbody></table>  <a1 style='font-family: times new roman; font-style:italic;'>n</a1> =  <a1 style='color: #FF0000'> "+projeÃ§aon+"</a1> &nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1> </div><hr><h1 class='logomarca'> BpW </h1>";
      
      document.trian_retangulo.altura.focus();
      document.trian_retangulo.altura.select(); 
  }
       catch(e) {alert(e)}
  }
                                                         
  /** ************************************  CÃ¡lculo do PerÃ­metro (P = a + b + c)    ****************************  **/   
  if (a === "perimetro") { 
     var ladoa = eval(document.trian_retangulo.ladoa.value.replace(",",".").replace(/ /g,"")); 	  
     var ladob = eval(document.trian_retangulo.ladob.value.replace(",",".").replace(/ /g,""));
     var ladoc = eval(document.trian_retangulo.ladoc.value.replace(",",".").replace(/ /g,"")); 
     
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_retangulo.ladoa.focus();
          document.trian_retangulo.ladoa.select();  
      return false;
   }
   
      if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_retangulo.ladob.focus();
          document.trian_retangulo.ladob.select();  
      return false;
   }
   
      if ((ladoc < 0) || (isNaN(ladoc)) || ladoc == "") { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_retangulo.ladoc.focus();
          document.trian_retangulo.ladoc.select();  
      return false;
  } 
  
  try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);	
   var ladob = document.getElementById("resposta").value = roundNumber(ladob, 2);	
   var ladoc = document.getElementById("resposta").value = roundNumber(ladoc, 2);	
   var perimetro = ladoa + ladob + ladoc ;
   var perimetro = document.getElementById("resposta").value = roundNumber(perimetro, 2);
       
      document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 23px;'>O perÃ­metro do triÃ¢ngulo retÃ¢ngulo ABC Ã©: <br> P = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> + <a1 style='font-family: times new roman; font-style:italic;'>b</a1> + <a1 style='font-family: times new roman; font-style:italic;'>c</a1> <br> P =  "+ladoa+"  + "+ladob+" + "+ladoc+" <br> P =  <a1 style='color: #FF0000'> "+perimetro +"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>    </div><hr><h1 class='logomarca'> BpW </h1>";
      
      document.trian_retangulo.altura.focus();
      document.trian_retangulo.altura.select(); 
  }
       catch(e) {alert(e)}
  }
  }
  
  
  
  
  /***#######################################                       ##############################################      **/
  /***#######################################  TRIÃ‚NGULO  Escaleno  ##############################################      **/
  
  function triangulo_escaleno2() {
    var a = document.forms["trian_escaleno"]["trian_escaleno_type"].value;
  /** *************   AREA 1 (c.b)   ***********************  **/  
   if (a === "areaheron") {
      document.getElementById("area").disabled = true;
      document.getElementById("area").value ="";
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";
      document.getElementById("raio_maior").disabled = true;
      document.getElementById("raio_maior").value ="";
      document.getElementById("raio_menor").disabled = true;
      document.getElementById("raio_menor").value ="";
       document.getElementById("ladoa").disabled = false;	
       document.getElementById("ladob").disabled = false;
      document.getElementById("ladoc").disabled = false;
   }
   try { 	}
       catch(e) {alert(e)}
      
   /** ************   Ãrea 1 (c.h)/2  ********************  **/ 	
   if (a === "area1") {
      document.getElementById("area").disabled = true;
      document.getElementById("area").value ="";
      document.getElementById("raio_maior").disabled = true;
      document.getElementById("raio_maior").value ="";
      document.getElementById("raio_menor").disabled = true;
      document.getElementById("raio_menor").value ="";
       document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value ="";	
       document.getElementById("ladob").disabled = true;
      document.getElementById("ladob").value ="";	
      document.getElementById("ladoc").disabled = false;
      document.getElementById("altura").disabled = false;
   }
   try { 	}
       catch(e) {alert(e)}
   
  
   /** ************   Ãrea 2: (a.b.c)/4r  ********************  **/ 	
   if (a === "area2") {
      document.getElementById("area").disabled = true;
      document.getElementById("area").value ="";
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";
      document.getElementById("raio_menor").disabled = true;
      document.getElementById("raio_menor").value ="";
       document.getElementById("ladoa").disabled = false;
       document.getElementById("ladob").disabled = false;
      document.getElementById("ladoc").disabled = false;
      document.getElementById("raio_maior").disabled = false;
   }
   try { 	}
       catch(e) {alert(e)}
  
   /** ************   Ãrea 2: r.(a+b+c)/2  ********************  **/ 	
   if (a === "area3") {
      document.getElementById("area").disabled = true;
      document.getElementById("area").value ="";
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";
      document.getElementById("raio_maior").disabled = true;
      document.getElementById("raio_maior").value ="";
       document.getElementById("ladoa").disabled = false;
       document.getElementById("ladob").disabled = false;
      document.getElementById("ladoc").disabled = false;
      document.getElementById("raio_menor").disabled = false;
   }
   try { 	}
       catch(e) {alert(e)}
   /** ************   PerÃ­metro: P= a+b+c  ********************  **/ 	
   if (a === "perimetro") {
      document.getElementById("area").disabled = true;
      document.getElementById("area").value ="";
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";
      document.getElementById("raio_maior").disabled = true;
      document.getElementById("raio_maior").value ="";
      document.getElementById("raio_menor").disabled = true;	
      document.getElementById("raio_menor").value ="";	
       document.getElementById("ladoa").disabled = false;
       document.getElementById("ladob").disabled = false;
      document.getElementById("ladoc").disabled = false;
   }
   try { 	}
       catch(e) {alert(e)}
  
  
   /** ************   Raio maior (R): R = (a.b.c)/4a  ********************  **/ 	
   if (a === "raio_maior") {
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";
      document.getElementById("raio_maior").disabled = true;
      document.getElementById("raio_maior").value ="";
      document.getElementById("raio_menor").disabled = true;	
      document.getElementById("raio_menor").value ="";	
       document.getElementById("ladoa").disabled = false;
       document.getElementById("ladob").disabled = false;
      document.getElementById("ladoc").disabled = false;
      document.getElementById("area").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
      
  if (a === "raio_menor") {
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";
      document.getElementById("raio_maior").disabled = true;
      document.getElementById("raio_maior").value ="";
      document.getElementById("raio_menor").disabled = true;	
      document.getElementById("raio_menor").value ="";	
       document.getElementById("ladoa").disabled = false;
       document.getElementById("ladob").disabled = false;
      document.getElementById("ladoc").disabled = false;
      document.getElementById("area").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	 
  } 
   
  
  function triangulo_escaleno1() {
      
   var ddl = document.getElementById("ops");
   var selectedValue = ddl.options[ddl.selectedIndex].value;
      if (selectedValue == "")
     {
      alert("Escolha uma opÃ§Ã£o para Calcular!");
    } 	
      
    var a = document.forms["trian_escaleno"]["trian_escaleno_type"].value;
    /** ************************************  CÃ¡lculdo da Ã¡rea: FÃ³rmula de Heron   ****************************************  **/  
    if (a === "areaheron") { 
     var ladoa = eval(document.trian_escaleno.ladoa.value.replace(",",".").replace(/ /g,"")); 	  
     var ladob = eval(document.trian_escaleno.ladob.value.replace(",",".").replace(/ /g,""));
     var ladoc = eval(document.trian_escaleno.ladoc.value.replace(",",".").replace(/ /g,"")); 
     
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_escaleno.ladoa.focus();
          document.trian_escaleno.ladoa.select();  
      return false;
   }
   
      if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_escaleno.ladob.focus();
          document.trian_escaleno.ladob.select();  
      return false;
   }
   
      if ((ladoc < 0) || (isNaN(ladoc)) || ladoc == "") { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_escaleno.ladoc.focus();
          document.trian_escaleno.ladoc.select();  
      return false;
  }   
    
   try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);	 
   var ladob = document.getElementById("resposta").value = roundNumber(ladob, 2);
   var ladoc = document.getElementById("resposta").value = roundNumber(ladoc, 2);
   var SemiPerimetro = (ladoa + ladob + ladoc)/2;
   var SemiPerimetro = document.getElementById("resposta").value = roundNumber(SemiPerimetro, 2);	 
   var SemiPerimetro2 = (ladoa + ladob + ladoc);
   var SemiPerimetro2 = document.getElementById("resposta").value = roundNumber(SemiPerimetro2, 2);	 
   var AreaTrianguloHeron = Math.sqrt((ladoa + ladob + ladoc)/2 *((ladoa + ladob + ladoc)/2 - ladoa) * ((ladoa + ladob + ladoc)/2 - ladob) * ((ladoa + ladob + ladoc)/2 - ladoc));
   var AreaTrianguloHeron = document.getElementById("resposta").value = roundNumber(AreaTrianguloHeron, 2); 
   var escaleno2 = SemiPerimetro - ladoa;
   var escaleno2 = document.getElementById("resposta").value = roundNumber(escaleno2, 2);  
   var escaleno3 = SemiPerimetro - ladob;
   var escaleno3 = document.getElementById("resposta").value = roundNumber(escaleno3, 2);   
   var escaleno4 = SemiPerimetro - ladoc;
   var escaleno4 = document.getElementById("resposta").value = roundNumber(escaleno4, 2);   
   var escaleno5 = (ladoa + ladob + ladoc)/2 *((ladoa + ladob + ladoc)/2 - ladoa) * ((ladoa + ladob + ladoc)/2 - ladob) * ((ladoa + ladob + ladoc)/2 - ladoc); 
   var escaleno5 = document.getElementById("resposta").value = roundNumber(escaleno5, 2);   
   
  document.getElementById('resposta').innerHTML = "<hr> O semiperÃ­metro do triÃ¢ngulo ABC Ã©: <br> <div style='line-height: 17px;'>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> P &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+ladoa+" + "+ladob+" + "+ladoc+" </td>  <td rowspan='2'> &nbsp;=&nbsp; </td>  <td rowspan='2'> <a1 style='color: #FF0000'> "+SemiPerimetro+"</a1> </td></tr> <tr> <td> 2 </td> </tr></tbody></table>  <div style='line-height: 27px;'> A Ã¡rea do triÃ¢ngulo ABC Ã©: <br>  A = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'> <a1 style='font-family: times new roman; font-style:italic;'>p</a1>âˆ™(<a1 style='font-family: times new roman; font-style:italic;'>p</a1> âˆ’ <a1 style='font-family: times new roman; font-style:italic;'>a</a1>)âˆ™(<a1 style='font-family: times new roman; font-style:italic;'>p</a1> âˆ’ <a1 style='font-family: times new roman; font-style:italic;'>b</a1>)âˆ™(<a1 style='font-family: times new roman; font-style:italic;'>p</a1> âˆ’ <a1 style='font-family: times new roman; font-style:italic;'>c</a1>) </a1> <br> A = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>("+SemiPerimetro+"âˆ™("+SemiPerimetro+" âˆ’ "+ladoa+")âˆ™("+SemiPerimetro+" âˆ’ "+ladob+")âˆ™("+SemiPerimetro+" âˆ’ "+ladoc+")</a1> <br>  A = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>("+SemiPerimetro+"âˆ™("+escaleno2+")âˆ™("+escaleno3+")âˆ™("+escaleno4+")</a1> <br>  A = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>"+escaleno5+"</a1> <br>  A = <a1 style='color: #FF0000'> "+AreaTrianguloHeron+" </a1>" +"&nbsp <a1 style='font-size: 17px; font-family: times new roman;font-style:italic;'>uÂ² </a1>  </div><hr><h1 class='logomarca'> BpW </h1> " ;
     
      document.trian_escaleno.ladoa.focus();
      document.trian_escaleno.ladoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** *********************************************   CÃ¡lculdo da Ã¡rea (c.h)/2   ****************************************  **/  
   if (a === "area1") { 
     var ladoc = eval(document.trian_escaleno.ladoc.value.replace(",",".").replace(/ /g,""));  
     var altura = eval(document.trian_escaleno.altura.value.replace(",",".").replace(/ /g,"")); 	  
     
      if ((ladoc < 0) || (isNaN(ladoc)) || ladoc == "") { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_escaleno.ladoc.focus();
          document.trian_escaleno.ladoc.select();  
      return false;
  } 
       if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_escaleno.altura.focus();
          document.trian_escaleno.altura.select();  
      return false;
   }
   
  try {
   var ladoc = document.getElementById("resposta").value = roundNumber(ladoc, 2);	 
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2);
   var areatrian_escaleno = (ladoc * altura)/2;
   var areatrian_escaleno = document.getElementById("resposta").value = roundNumber(areatrian_escaleno, 2); 
   var trian_escaleno2 = ladoc * altura;	
   var trian_escaleno2 = document.getElementById("resposta").value = roundNumber(trian_escaleno2, 2);  
       
      document.getElementById('resposta').innerHTML = "<hr> A Ã¡rea do triÃ¢ngulo escaleno ABC Ã©: <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>c</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladoc+" âˆ™ "+altura+" </td></tr> <tr> <td> 2 </td><td> 2 </td> </tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+trian_escaleno2+" </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>  </div>  A =  <a1 style='color: #FF0000'> "+areatrian_escaleno+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> uÂ² </a1> <hr><h1 class='logomarca'> BpW </h1>";
      
      document.trian_escaleno.ladoc.focus();
      document.trian_escaleno.ladoc.select(); 
  }
       catch(e) {alert(e)}
  }
  
   /** ************************************************ CÃ¡lculdo da Ã¡rea (a.b.c)/4R   ****************************************  **/  
   if (a === "area2") { 
     var ladoa = eval(document.trian_escaleno.ladoa.value.replace(",",".").replace(/ /g,"")); 	  
     var ladob = eval(document.trian_escaleno.ladob.value.replace(",",".").replace(/ /g,""));
     var ladoc = eval(document.trian_escaleno.ladoc.value.replace(",",".").replace(/ /g,"")); 
     var raio_maior = eval(document.trian_escaleno.raio_maior.value.replace(",",".").replace(/ /g,""));    
     
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_escaleno.ladoa.focus();
          document.trian_escaleno.ladoa.select();  
      return false;
   }
   
      if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_escaleno.ladob.focus();
          document.trian_escaleno.ladob.select();  
      return false;
   }
   
      if ((ladoc < 0) || (isNaN(ladoc)) || ladoc == "") { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_escaleno.ladoc.focus();
          document.trian_escaleno.ladoc.select();  
      return false;
  }   
      if ((raio_maior < 0) || (isNaN(raio_maior)) || raio_maior == "") { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_escaleno.raio_maior.focus();
          document.trian_escaleno.raio_maior.select();  
      return false;
  }  
   
  try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);	 
   var ladob = document.getElementById("resposta").value = roundNumber(ladob, 2);	
   var ladoc = document.getElementById("resposta").value = roundNumber(ladoc, 2);	 
   var raio_maior = document.getElementById("resposta").value = roundNumber(raio_maior, 2);	
   var areatrian_escaleno = (ladoa *ladob *ladoc)/(4*raio_maior);
   var areatrian_escaleno = document.getElementById("resposta").value = roundNumber(areatrian_escaleno, 2);
   var trian_escaleno2 = ladoa *ladob *ladoc;
   var trian_escaleno2 = document.getElementById("resposta").value = roundNumber(trian_escaleno2, 2);	
   var trian_escaleno3 = 4*raio_maior;	
   var trian_escaleno3 = document.getElementById("resposta").value = roundNumber(trian_escaleno3, 2);		
       
      document.getElementById('resposta').innerHTML = "<hr> A Ã¡rea do triÃ¢ngulo escaleno ABC Ã©: <br>  <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>b</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>c</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladoa+" âˆ™ "+ladob+" âˆ™ "+ladoc+" </td></tr> <tr> <td> 4âˆ™R </td><td> 4 âˆ™ "+raio_maior+" </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+trian_escaleno2+" </td></tr><tr><td style='text-align:center;'> "+trian_escaleno3+" </td></tr></tbody></table>  A =  <a1 style='color: #FF0000'> "+areatrian_escaleno+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> uÂ² </a1> </div><hr><h1 class='logomarca'> BpW </h1>";
      
      document.trian_escaleno.ladoa.focus();
      document.trian_escaleno.ladoa.select(); 
  }
       catch(e) {alert(e)}
  }
  
   /** ********************************** CÃ¡lculdo da Ã¡rea 3: A = râˆ™(a + b + c)/2  ****************************************  **/  
   if (a === "area3") { 
     var ladoa = eval(document.trian_escaleno.ladoa.value.replace(",",".").replace(/ /g,"")); 	  
     var ladob = eval(document.trian_escaleno.ladob.value.replace(",",".").replace(/ /g,""));
     var ladoc = eval(document.trian_escaleno.ladoc.value.replace(",",".").replace(/ /g,"")); 
     var raio_menor = eval(document.trian_escaleno.raio_menor.value.replace(",",".").replace(/ /g,""));    
     
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_escaleno.ladoa.focus();
          document.trian_escaleno.ladoa.select();  
      return false;
   }
   
      if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_escaleno.ladob.focus();
          document.trian_escaleno.ladob.select();  
      return false;
   }
   
      if ((ladoc < 0) || (isNaN(ladoc)) || ladoc == "") { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_escaleno.ladoc.focus();
          document.trian_escaleno.ladoc.select();  
      return false;
  }   
      if ((raio_menor < 0) || (isNaN(raio_menor)) || raio_menor == "") { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_escaleno.raio_menor.focus();
          document.trian_escaleno.v.select();  
      return false;
  }   
   
  try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);	 
   var ladob = document.getElementById("resposta").value = roundNumber(ladob, 2);	
   var ladoc = document.getElementById("resposta").value = roundNumber(ladoc, 2);	 
   var raio_menor = document.getElementById("resposta").value = roundNumber(raio_menor, 2);	
   var areatrian_escaleno = raio_menor*(ladoa + ladob + ladoc)/2;
   var areatrian_escaleno = document.getElementById("resposta").value = roundNumber(areatrian_escaleno, 2);
   var trian_escaleno2 = ladoa + ladob  + ladoc;
   var trian_escaleno2 = document.getElementById("resposta").value = roundNumber(trian_escaleno2, 2);	
   var trian_escaleno3 = raio_menor*(ladoa + ladob + ladoc);	
   var trian_escaleno3 = document.getElementById("resposta").value = roundNumber(trian_escaleno3, 2);		
      
      document.getElementById('resposta').innerHTML = "<hr>  A Ã¡rea do triÃ¢ngulo escaleno ABC Ã©: <br> <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman; font-style:italic;'>r</a1> âˆ™ (<a1 style='font-family: times new roman; font-style:italic;'>a</a1> + <a1 style='font-family: times new roman; font-style:italic;'>b</a1> + <a1 style='font-family: times new roman; font-style:italic;'>c</a1>) </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+raio_menor+" âˆ™ ("+ladoa+" + "+ladob+" + "+ladoc+") </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> "+raio_menor+" âˆ™ "+trian_escaleno2+" </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+trian_escaleno3+" </td></tr> <tr> <td> 2 </td><td> 2 </td> </tr></tbody></table></div>  A = <a1 style='color: #FF0000'> "+areatrian_escaleno+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ² </a1>  <hr><h1 class='logomarca'> BpW </h1>  ";
      
      document.trian_escaleno.ladoa.focus();
      document.trian_escaleno.ladoa.select(); 
  }
       catch(e) {alert(e)}
  }
  
  
   /** *************************************  PerÃ­metro: P = a + b +c   ****************************************  **/  
   if (a === "perimetro") { 
     var ladoa = eval(document.trian_escaleno.ladoa.value.replace(",",".").replace(/ /g,"")); 	  
     var ladob = eval(document.trian_escaleno.ladob.value.replace(",",".").replace(/ /g,""));
     var ladoc = eval(document.trian_escaleno.ladoc.value.replace(",",".").replace(/ /g,"")); 
     var raio_menor = eval(document.trian_escaleno.raio_menor.value.replace(",",".").replace(/ /g,""));    
     
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_escaleno.ladoa.focus();
          document.trian_escaleno.ladoa.select();  
      return false;
   }
   
      if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_escaleno.ladob.focus();
          document.trian_escaleno.ladob.select();  
      return false;
   }
   
      if ((ladoc < 0) || (isNaN(ladoc)) || ladoc == "") { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_escaleno.ladoc.focus();
          document.trian_escaleno.ladoc.select();  
      return false;
  }   
  
  try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);	 
   var ladob = document.getElementById("resposta").value = roundNumber(ladob, 2);	
   var ladoc = document.getElementById("resposta").value = roundNumber(ladoc, 2);		
   var perimetro = ladoa + ladob + ladoc;
   var perimetro = document.getElementById("resposta").value = roundNumber(perimetro, 2);	 
       
      document.getElementById('resposta').innerHTML = "<hr>  O perÃ­metro do triÃ¢ngulo ABC Ã©: <br> <div style='line-height: 20px;'> P = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> + <a1 style='font-family: times new roman; font-style:italic;'>b</a1> + <a1 style='font-family: times new roman; font-style:italic;'>c</a1> </a1>&nbsp; <br> P = "+ladoa+" + "+ladob+" + "+ladoc+" </a1>&nbsp;  <br> P = <a1 style='color: #FF0000'> "+perimetro+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> u </a1>  </div><hr><h1 class='logomarca'> BpW </h1>";
      
      document.trian_escaleno.ladoa.focus();
      document.trian_escaleno.ladoa.select(); 
  }
       catch(e) {alert(e)}
  }
  
   /** ***************************************   CÃ¡lculdo o Raio R: (a.b.c)/4R   ****************************************  **/  
   if (a === "raio_maior") { 
     var ladoa = eval(document.trian_escaleno.ladoa.value.replace(",",".").replace(/ /g,"")); 	  
     var ladob = eval(document.trian_escaleno.ladob.value.replace(",",".").replace(/ /g,""));
     var ladoc = eval(document.trian_escaleno.ladoc.value.replace(",",".").replace(/ /g,"")); 
     var area = eval(document.trian_escaleno.area.value.replace(",",".").replace(/ /g,"")); 
     
     
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_escaleno.ladoa.focus();
          document.trian_escaleno.ladoa.select();  
      return false;
   }
   
      if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_escaleno.ladob.focus();
          document.trian_escaleno.ladob.select();  
      return false;
   }
   
      if ((ladoc < 0) || (isNaN(ladoc)) || ladoc == "") { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_escaleno.ladoc.focus();
          document.trian_escaleno.ladoc.select();  
      return false;
  }  
      if ((area < 0) || (isNaN(area)) || area == "") { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_escaleno.area.focus();
          document.trian_escaleno.area.select();  
      return false;
  } 
  
  try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);	 
   var ladob = document.getElementById("resposta").value = roundNumber(ladob, 2);	
   var ladoc = document.getElementById("resposta").value = roundNumber(ladoc, 2);	
   var area = document.getElementById("resposta").value = roundNumber(area, 2);	 
   var raio = (ladoa *ladob *ladoc)/(4*area);
   var raio = document.getElementById("resposta").value = roundNumber(raio, 2);	  
   var raio2 = ladoa *ladob *ladoc;
   var raio2 = document.getElementById("resposta").value = roundNumber(raio2, 2);	 
   var raio3 = 4*area;
   var raio3 = document.getElementById("resposta").value = roundNumber(raio3, 2);	  
      
      document.getElementById('resposta').innerHTML = "<hr> O raio R da circunferÃªncia maior Ã©: <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> R &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>b</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>c</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladoa+" âˆ™ "+ladob+" âˆ™ "+ladoc+" </td></tr> <tr> <td> 4âˆ™A </td><td> 4 âˆ™ "+area+" </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> R &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+raio2+" </td></tr><tr><td style='text-align:center;'> "+raio3+" </td></tr></tbody></table></div>  R = <a1 style='color: #FF0000'> "+raio+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1> <hr><h1 class='logomarca'> BpW </h1> ";
      
      document.trian_escaleno.ladoa.focus();
      document.trian_escaleno.ladoa.select(); 
  }
       catch(e) {alert(e)}
  }
  
   /** *************************************  CÃ¡lculdo do raio r: r = 2âˆ™A/(a+b+c)   ****************************************  **/  
   if (a === "raio_menor") { 
     var ladoa = eval(document.trian_escaleno.ladoa.value.replace(",",".").replace(/ /g,"")); 	  
     var ladob = eval(document.trian_escaleno.ladob.value.replace(",",".").replace(/ /g,""));
     var ladoc = eval(document.trian_escaleno.ladoc.value.replace(",",".").replace(/ /g,"")); 
     var area = eval(document.trian_escaleno.area.value.replace(",",".").replace(/ /g,"")); 
     
     
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_escaleno.ladoa.focus();
          document.trian_escaleno.ladoa.select();  
      return false;
   }
   
      if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_escaleno.ladob.focus();
          document.trian_escaleno.ladob.select();  
      return false;
   }
   
      if ((ladoc < 0) || (isNaN(ladoc)) || ladoc == "") { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_escaleno.ladoc.focus();
          document.trian_escaleno.ladoc.select();  
      return false;
  }  
      if ((area < 0) || (isNaN(area)) || area == "") { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_escaleno.area.focus();
          document.trian_escaleno.area.select();  
      return false;
  }  
   
  try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);	 
   var ladob = document.getElementById("resposta").value = roundNumber(ladob, 2);	
   var ladoc = document.getElementById("resposta").value = roundNumber(ladoc, 2);	
   var area = document.getElementById("resposta").value = roundNumber(area, 2);	
   var raio = (2*area)/(ladoa + ladob  + ladoc);
   var raio = document.getElementById("resposta").value = roundNumber(raio, 2);	 
   var raio2 = ladoa + ladob  + ladoc;
   var raio2 = document.getElementById("resposta").value = roundNumber(raio2, 2);	 
   var raio3 = 2*area;
   var raio3 = document.getElementById("resposta").value = roundNumber(raio3, 2);	  
      
       document.getElementById('resposta').innerHTML = "<hr>  O raio <a1 style='font-family: times new roman; font-style:italic;'>r</a1> da circunferÃªncia menor Ã©: <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-size: 18px; font-style:italic;'>r</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> 2 âˆ™ A </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'>2 âˆ™ "+area+" </td></tr> <tr> <td> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> + <a1 style='font-family: times new roman; font-style:italic;'>b</a1> + <a1 style='font-family: times new roman; font-style:italic;'>c</a1> </td><td> "+ladoa+" + "+ladob+" + "+ladoc+" </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-size: 18px; font-style:italic;'>r</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+raio3+" </td></tr><tr><td style='text-align:center;'> "+raio2+" </td></tr></tbody></table>  </div>  <a1 style='font-family: times new roman; font-style:italic;'>r</a1> = <a1 style='color: #FF0000'> "+raio+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1> <hr><h1 class='logomarca'> BpW </h1>  ";
      
      document.trian_escaleno.ladoa.focus();
      document.trian_escaleno.ladoa.select(); 
  }
       catch(e) {alert(e)}
  }
  }
  
  
  /***#######################################                        #######################################################      **/
  /***#######################################  TRIÃ‚NGULO  EquilÃ¡tero  ######################################################      **/
  
  function triangulo_equilatero2() {
    var a = document.forms["trian_equilatero"]["trian_equilatero_type"].value;
  /** *************   AREA 1 (A = LÂ².âˆš3/4)   ***********************  **/  
   if (a === "area") {
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value ="";
      document.getElementById("area").disabled = true;
      document.getElementById("area").value ="";	
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";
      document.getElementById("raio_maior").disabled = true;
      document.getElementById("raio_maior").value ="";
      document.getElementById("raio_menor").disabled = true;
      document.getElementById("raio_menor").value ="";
       document.getElementById("ladoa").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}
      
   /** ************   PerÃ­metro: P = 3.L  ********************  **/ 	
   if (a === "perimetro") {
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value ="";
      document.getElementById("area").disabled = true;
      document.getElementById("area").value ="";	
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";
      document.getElementById("raio_maior").disabled = true;
      document.getElementById("raio_maior").value ="";
      document.getElementById("raio_menor").disabled = true;
      document.getElementById("raio_menor").value ="";
       document.getElementById("ladoa").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}
  
   /** ************   altura: h = L.âˆš3/2  ********************  **/ 	
   if (a === "altura") {
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value ="";
      document.getElementById("area").disabled = true;
      document.getElementById("area").value ="";	
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";
      document.getElementById("raio_maior").disabled = true;
      document.getElementById("raio_maior").value ="";
      document.getElementById("raio_menor").disabled = true;
      document.getElementById("raio_menor").value ="";
       document.getElementById("ladoa").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}
      
   /** ************   Raio: R = L.âˆš3/2  ********************  **/ 	
   if (a === "raio_maior") {
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value ="";
      document.getElementById("area").disabled = true;
      document.getElementById("area").value ="";	
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";
      document.getElementById("raio_maior").disabled = true;
      document.getElementById("raio_maior").value ="";
      document.getElementById("raio_menor").disabled = true;
      document.getElementById("raio_menor").value ="";
       document.getElementById("ladoa").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
    
    
   /** ************   Raio (r): r = L.âˆš3/6  ********************  **/ 	
   if (a === "raio_menor") {
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value ="";
      document.getElementById("area").disabled = true;
      document.getElementById("area").value ="";	
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";
      document.getElementById("raio_maior").disabled = true;
      document.getElementById("raio_maior").value ="";
      document.getElementById("raio_menor").disabled = true;
      document.getElementById("raio_menor").value ="";
       document.getElementById("ladoa").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
    
   /** ************   Lado 1 (L): L = h.2.âˆš3/3  ********************  **/ 	
   if (a === "lado1") {
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";
      document.getElementById("area").disabled = true;
      document.getElementById("area").value ="";	
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";
      document.getElementById("raio_maior").disabled = true;
      document.getElementById("raio_maior").value ="";
      document.getElementById("raio_menor").disabled = true;
      document.getElementById("raio_menor").value ="";
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value ="";	
       document.getElementById("altura").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
      
   /** ************   Lado 2 (L): L = R.âˆš3  ********************  **/ 	
   if (a === "lado2") {
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";
      document.getElementById("area").disabled = true;
      document.getElementById("area").value ="";	
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";
      document.getElementById("raio_menor").disabled = true;
      document.getElementById("raio_menor").value ="";
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value ="";	
       document.getElementById("raio_maior").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}			
      
   /** ************   Raio menor (r): r = R/2  ********************  **/ 	
   if (a === "raio_menor2") {
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";
      document.getElementById("area").disabled = true;
      document.getElementById("area").value ="";	
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";
      document.getElementById("raio_menor").disabled = true;
      document.getElementById("raio_menor").value ="";
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value ="";	
       document.getElementById("raio_maior").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
  
   /** ************   Raio menor (r): r = R/2  ********************  **/ 	
   if (a === "lado3") {
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";
      document.getElementById("area").disabled = true;
      document.getElementById("area").value ="";	
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";
      document.getElementById("raio_maior").disabled = true;
      document.getElementById("raio_maior").value ="";
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value ="";	
       document.getElementById("raio_menor").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
      
   /** ************   Ãrea 2 (A): A = 3.RÂ².âˆš3/4  ********************  **/ 	
   if (a === "area2") {
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";
      document.getElementById("area").disabled = true;
      document.getElementById("area").value ="";	
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";
      document.getElementById("raio_menor").disabled = true;
      document.getElementById("raio_menor").value ="";
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value ="";	
       document.getElementById("raio_maior").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
  } 
   
  
  function triangulo_equilatero1() {
      
   var ddl = document.getElementById("ops");
   var selectedValue = ddl.options[ddl.selectedIndex].value;
      if (selectedValue == "")
     {
      alert("Escolha uma opÃ§Ã£o para Calcular!");
     }	
      
    var a = document.forms["trian_equilatero"]["trian_equilatero_type"].value;
    /** *******************************************  CÃ¡lculdo da Ã¡rea: A = LÂ².âˆš3/4  ****************************************  **/  
    if (a === "area") { 
     var ladoa = eval(document.trian_equilatero.ladoa.value.replace(",",".").replace(/ /g,"")); 	  
      
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_equilatero.ladoa.focus();
          document.trian_equilatero.ladoa.select();  
      return false;
   }
   
   try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);	 
   var areaTrianguloEquilatero = (ladoa * ladoa * Math.sqrt(3))/4;
   var areaTrianguloEquilatero = document.getElementById("resposta").value = roundNumber(areaTrianguloEquilatero, 2);	   
   var areaTrianguloEquilatero1 = (ladoa * ladoa)/4; 
   var areaTrianguloEquilatero1 = document.getElementById("resposta").value = roundNumber(areaTrianguloEquilatero1, 2);	  
   var ladolado = (ladoa * ladoa); 
   var ladolado = document.getElementById("resposta").value = roundNumber(ladolado, 2);	  
   var ladolado1 = (ladoa * ladoa * Math.sqrt(3)); 
   var ladolado1 = document.getElementById("resposta").value = roundNumber(ladolado1, 2);	  
   
     document.getElementById('resposta').innerHTML = "<hr>  A Ã¡rea do triÃ¢ngulo equilÃ¡tero Ã©: <br> <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'>  L<a1 style='font-size:20px' >Â²</a1> âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> ("+ladoa+") <a1 style='font-size: 21px; font-family: times new roman;'>Â² </a1> âˆ™ 1,73  </a1> </td></tr> <tr> <td> 4 </td><td> 4 </td> </tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'>  "+ladolado+" âˆ™ 1,73 </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladolado1+" </a1> </a1> </td></tr> <tr> <td> 4 </td><td> 4 </td> </tr></tbody></table>  </div>  A &nbsp;= <a1 style='color: #FF0000'> "+areaTrianguloEquilatero+"&nbsp; </a1><a1 style='font-size: 16px; font-family: times new roman;'> uÂ² </a1>  <br>  ou <br> "+"A = <a1 style='color: #FF0000'> "+areaTrianguloEquilatero1+"</a>âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>3</a1></a1>  " +"&nbsp <a1 style='font-size: 17px; font-family: times new roman;font-style:italic;'> uÂ² </a1> <hr><h1 class='logomarca'> BpW </h1> ";
     
      document.trian_equilatero.ladoa.focus();
      document.trian_equilatero.ladoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** ********************************************** PerÃ­metro: P = 3.L  ****************************************  **/  
   if (a === "perimetro") { 
     var ladoa = eval(document.trian_equilatero.ladoa.value.replace(",",".").replace(/ /g,"")); 	  
      
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_equilatero.ladoa.focus();
          document.trian_equilatero.ladoa.select();  
      return false;
   }  
    
   try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);		 
   var perim1 = 3*ladoa ;
   var perim1 = document.getElementById("resposta").value = roundNumber(perim1, 2);	
   
     document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 18px;'>O perÃ­metro do triÃ¢ngulo equilÃ¡tero ABC Ã©: <br> P = 3 âˆ™ L <br> P =  3 âˆ™ "+ladoa+" <br> P =  <a1 style='color: #FF0000'> "+perim1+"</a1> "+" <a1 style='font-size: 17px; font-family: times new roman;font-style:italic;'>u </a1>  <hr><h1 class='logomarca'> BpW </h1> </div> ";
     
      document.trian_equilatero.ladoa.focus();
      document.trian_equilatero.ladoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** ********************************************  altura: h = L.âˆš3/2  ****************************************  **/  
    if (a === "altura") { 
      var ladoa = eval(document.trian_equilatero.ladoa.value.replace(",",".").replace(/ /g,"")); 	  
      
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_equilatero.ladoa.focus();
          document.trian_equilatero.ladoa.select();  
      return false;
   }
   
   try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);		 
   var altura1 = (ladoa * Math.sqrt(3))/2;
   var altura1 = document.getElementById("resposta").value = roundNumber(altura1, 2);	 
   var altura2 = ladoa * Math.sqrt(3) ;
   var altura2 = document.getElementById("resposta").value = roundNumber(altura2, 2);	 
   var altura3 = ladoa/2 ;  
   var altura3 = document.getElementById("resposta").value = roundNumber(altura3, 2);	
     
     document.getElementById('resposta').innerHTML = "<hr>  A altura do triÃ¢ngulo equilÃ¡tero ABC Ã©: <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>  <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>h</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> L âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladoa+" âˆ™ 1,73 </a1> </a1> </td></tr> <tr> <td> 2 </td><td> 2 </td> </tr></tbody></table>  </div> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>h</a1> = <a1 style='color: #FF0000'> "+altura1+"</a1> "+" <a1 style='font-size: 17px; font-family: times new roman;font-style:italic;'>u </a1>  <br>  ou  <br>  <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>  <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>h</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> L âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladoa+" âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> </a1> </a1> </td></tr> <tr> <td> 2 </td><td> 2 </td> </tr></tbody></table> </div>   <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>h</a1> = <a1 style='color: #FF0000'> "+altura3+"âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> "+" </a1><a1 style='font-size: 17px; font-family: times new roman;font-style:italic;'>u </a1>  <hr><h1 class='logomarca'> BpW </h1> ";
     
      document.trian_equilatero.ladoa.focus();
      document.trian_equilatero.ladoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** ********************************************* Raio (R): R = L.âˆš3/3  ****************************************  **/  
    if (a === "raio_maior") { 
      var ladoa = eval(document.trian_equilatero.ladoa.value.replace(",",".").replace(/ /g,"")); 	  
      
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_equilatero.ladoa.focus();
          document.trian_equilatero.ladoa.select();  
      return false;
   }
   
   try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);		 
   var raio_maior = (ladoa * Math.sqrt(3))/3;
   var raio_maior = document.getElementById("resposta").value = roundNumber(raio_maior, 2);	 
   var altura2 = ladoa * Math.sqrt(3) ;
   var altura2 = document.getElementById("resposta").value = roundNumber(altura2, 2);	 
   var altura3 = ladoa/3 ;  
   var altura3 = document.getElementById("resposta").value = roundNumber(altura3, 2);	 
     
     document.getElementById('resposta').innerHTML = "<hr>  A altura do triÃ¢ngulo equilÃ¡tero ABC Ã©: <br>  <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>  R &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> L âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladoa+" âˆ™ 1,73 </td></tr> <tr> <td> 3 </td><td> 3 </td> </tr></tbody></table> </div> R = <a1 style='color: #FF0000'> "+raio_maior+"</a1> "+" <a1 style='font-size: 17px; font-family: times new roman;font-style:italic;'>u </a1> <br> ou <br>  <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>  R &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> L âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladoa+" âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> </td></tr> <tr> <td> 3 </td><td> 3 </td> </tr></tbody></table> </div> R =  <a1 style='color: #FF0000'> "+altura3+"âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> "+" </a1><a1 style='font-size: 17px; font-family: times new roman;font-style:italic;'>u </a1> <hr><h1 class='logomarca'> BpW </h1>";
     
      document.trian_equilatero.ladoa.focus();
      document.trian_equilatero.ladoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** ***********************************************  Raio (r): r = L.âˆš3/6  ****************************************  **/  
    if (a === "raio_menor") { 
      var ladoa = eval(document.trian_equilatero.ladoa.value.replace(",",".").replace(/ /g,"")); 	  
      
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_equilatero.ladoa.focus();
          document.trian_equilatero.ladoa.select();  
      return false;
   }
   
   try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);	
   var raio_maior = (ladoa * Math.sqrt(3))/6;
   var raio_maior = document.getElementById("resposta").value = roundNumber(raio_maior, 2);	 
   var altura2 = ladoa * Math.sqrt(3) ;
   var altura2 = document.getElementById("resposta").value = roundNumber(altura2, 2); 
   var altura3 = ladoa/6 ;  
   var altura3 = document.getElementById("resposta").value = roundNumber(altura3, 2);  
     
     document.getElementById('resposta').innerHTML = "<hr>  A altura do triÃ¢ngulo equilÃ¡tero ABC Ã©: <br> <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>  <a1 style='font-family: times new roman; font-size: 18px; font-style:italic;'>r</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> L âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladoa+" âˆ™ 1,73 </td></tr> <tr> <td> 6 </td><td> 6 </td> </tr></tbody></table> <a1 style='font-family: times new roman; font-size: 18px; font-style:italic;'>r</a1> =  <a1 style='color: #FF0000'> "+raio_maior+"</a1> "+" <a1 style='font-size: 17px; font-family: times new roman;font-style:italic;'>u </div></a1>  ou  <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>  <a1 style='font-family: times new roman; font-size: 18px; font-style:italic;'>r</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> L âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladoa+" âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> </td></tr> <tr> <td> 6 </td><td> 6 </td> </tr></tbody></table> </div>  <a1 style='font-family: times new roman; font-size: 18px; font-style:italic;'>r</a1> &nbsp; =&nbsp; <a1 style='color: #FF0000'> "+altura3+"âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> "+" </a1><a1 style='font-size: 17px; font-family: times new roman;font-style:italic;'>u </a1>  <hr><h1 class='logomarca'> BpW </h1>   "  ;
     
      document.trian_equilatero.ladoa.focus();
      document.trian_equilatero.ladoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** *********************************************  Lado 1 (L): L = h.2.âˆš3/3  ****************************************  **/  
    if (a === "lado1") { 
      var altura = eval(document.trian_equilatero.altura.value.replace(",",".").replace(/ /g,"")); 	  
      
       if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_equilatero.altura.focus();
          document.trian_equilatero.altura.select();  
      return false;
   } 
   
   try {
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2);		 
   var lado1 = (altura *2* Math.sqrt(3))/3;
   var lado1 = document.getElementById("resposta").value = roundNumber(lado1, 2);  
   var lado2 = altura * 2 /3 ;
   var lado2 = document.getElementById("resposta").value = roundNumber(lado2, 2); 
   var result = (altura *2* Math.sqrt(3));
   var result = document.getElementById("resposta").value = roundNumber(result, 2); 
   var result2 = (altura *2);
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 2);  
   
     
     document.getElementById('resposta').innerHTML = "<hr> O lado do triÃ¢ngulo equilÃ¡tero ABC Ã©: <br> <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>  L &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>h</a1> âˆ™ 2âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+altura+" âˆ™ 2 âˆ™ 1,73 </td></tr> <tr> <td> 3 </td><td> 3 </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> L &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+result+" </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>  L =&nbsp; <a1 style='color: #FF0000'> "+lado1+"</a1> "+" <a1 style='font-size: 17px; font-family: times new roman;'>u </a1></div> <br>  ou <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>  L &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>h</a1> âˆ™ 2âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+altura+" âˆ™ 2 âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> </td></tr> <tr> <td> 3 </td><td> 3 </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> L &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+result2+"âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table> </div>  L =&nbsp; <a1 style='color: #FF0000'> "+lado2+"âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> "+" </a1><a1 style='font-size: 17px; font-family: times new roman;'>u </a1>   <hr><h1 class='logomarca'> BpW </h1> ";
     
      document.trian_equilatero.altura.focus();
      document.trian_equilatero.altura.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** *********************************************  Lado 2 (L): L = R.âˆš3  ****************************************  **/  
    if (a === "lado2") { 
      var raio_maior = eval(document.trian_equilatero.raio_maior.value.replace(",",".").replace(/ /g,"")); 	  
      
       if ((raio_maior < 0) || isNaN(raio_maior) || raio_maior == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_equilatero.raio_maior.focus();
          document.trian_equilatero.raio_maior.select();  
      return false;
   }    
    
   try {
   var raio_maior = document.getElementById("resposta").value = roundNumber(raio_maior, 2);		 
   var raio1 = raio_maior * Math.sqrt(3);
   var raio1 = document.getElementById("resposta").value = roundNumber(raio1, 2);
     
     document.getElementById('resposta').innerHTML = "<hr>  O lado do triÃ¢ngulo equilÃ¡tero ABC Ã©:  <br> <div style='line-height: 25px;'>   L = <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>h</a1> âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> = "+raio_maior+" âˆ™ 1,73 =&nbsp; <a1 style='color: #FF0000'> "+raio1+" </a1><a1 style='font-size: 17px; font-family: times new roman;'>u </a1>   <br> ou <br>  L = <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>h</a1> âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> = "+raio_maior+" âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> =&nbsp; <a1 style='color: #FF0000'> "+raio_maior+"âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1></a1>   <a1 style='font-size: 17px; font-family: times new roman;font-style:italic;'>u </a1>   </div> <hr><h1 class='logomarca'> BpW </h1>";
     
      document.trian_equilatero.raio_maior.focus();
      document.trian_equilatero.raio_maior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** *****************************************************  Raio (r): r = L/2  ****************************************  **/  
    if (a === "raio_menor2") { 
      var raio_maior = eval(document.trian_equilatero.raio_maior.value.replace(",",".").replace(/ /g,"")); 	  
      
       if ((raio_maior < 0) || isNaN(raio_maior) || raio_maior == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_equilatero.raio_maior.focus();
          document.trian_equilatero.raio_maior.select();  
      return false;
   }   
    
   try {
   var raio_maior = document.getElementById("resposta").value = roundNumber(raio_maior, 2);		 
   var raio_menor = raio_maior/2;
   var raio_menor = document.getElementById("resposta").value = roundNumber(raio_menor, 2); 
   var altura2 = raio_maior * Math.sqrt(3) ;
   var altura2 = document.getElementById("resposta").value = roundNumber(altura2, 2);  
   var altura3 = raio_maior/6 ;  
   var altura3 = document.getElementById("resposta").value = roundNumber(altura3, 2);   
     
     document.getElementById('resposta').innerHTML = "<hr>  O Raio R triÃ¢ngulo equilÃ¡tero ABC Ã©: <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-size: 18px; font-style:italic;'>r</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> R </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+raio_maior+" </td><td rowspan='2'> &nbsp;=&nbsp;  <a1 style='color: #FF0000'> "+raio_menor+"</a1> "+" <a1 style='font-size: 17px; font-family: times new roman;font-style:italic;'> u </a1> </td></tr> <tr> <td> 2 </td><td> 2 </td> </tr></tbody></table>  </div><hr><h1 class='logomarca'> BpW </h1> ";
     
      document.trian_equilatero.raio_maior.focus();
      document.trian_equilatero.raio_maior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** *****************************************************  Lado 3 (L): L = 2.r.âˆš3  ****************************************  **/  
    if (a === "lado3") { 
      var raio_menor = eval(document.trian_equilatero.raio_menor.value.replace(",",".").replace(/ /g,"")); 	  
      
       if ((raio_menor < 0) || isNaN(raio_menor) || raio_menor == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_equilatero.raio_menor.focus();
          document.trian_equilatero.raio_menor.select();  
      return false;
   }   
    
   try {
   var raio_menor = document.getElementById("resposta").value = roundNumber(raio_menor, 2);		 
   var raio1 = 2*raio_menor * Math.sqrt(3);
   var raio1 = document.getElementById("resposta").value = roundNumber(raio1, 2); 
   var raio2 = 2*raio_menor;
   var raio2 = document.getElementById("resposta").value = roundNumber(raio2, 2);  
     
     document.getElementById('resposta').innerHTML = "<hr> O lado do triÃ¢ngulo equilÃ¡tero ABC Ã©:   <br> <div style='line-height: 20px;'> L = 2 âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>r</a1> âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> = 2 âˆ™ "+raio_menor+" âˆ™ 1,73 =&nbsp; <a1 style='color: #FF0000'> "+raio1+" </a1><a1 style='font-size: 17px; font-family: times new roman;'>u </a1>   <br> ou <br>  L = 2 âˆ™ r âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> = 2 âˆ™ "+raio_menor+" âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> =&nbsp; <a1 style='color: #FF0000'> "+raio2+"âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1></a1>   <a1 style='font-size: 17px; font-family: times new roman;font-style:italic;'>u </a1>     </div> <hr><h1 class='logomarca'> BpW </h1>";
     
      document.trian_equilatero.raio_menor.focus();
      document.trian_equilatero.raio_menor.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
    /** ***************************************   CÃ¡lculdo da Ã¡rea 2: Ãrea 2 (A): A = 3.RÂ².âˆš3/4  ****************************************  **/  
    if (a === "area2") { 
      var raio_maior = eval(document.trian_equilatero.raio_maior.value.replace(",",".").replace(/ /g,"")); 	  
      
       if ((raio_maior < 0) || isNaN(raio_maior) || raio_maior == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trian_equilatero.raio_maior.focus();
          document.trian_equilatero.raio_maior.select();  
      return false;
   }
   try {
   var raio_maior = document.getElementById("resposta").value = roundNumber(raio_maior, 2);
   var areaTrianguloEquilatero = 3*(raio_maior * raio_maior * Math.sqrt(3))/4;
   var areaTrianguloEquilatero = document.getElementById("resposta").value = roundNumber(areaTrianguloEquilatero, 2); 
   var areaTrianguloEquilatero1 = 3*(raio_maior * raio_maior)/4; 
   var areaTrianguloEquilatero1 = document.getElementById("resposta").value = roundNumber(areaTrianguloEquilatero1, 2);  
   var ladolado = (raio_maior * raio_maior); 
   var ladolado = document.getElementById("resposta").value = roundNumber(ladolado, 2);  
   var ladolado1 = 3*(raio_maior * raio_maior * Math.sqrt(3)); 
   var ladolado1 = document.getElementById("resposta").value = roundNumber(ladolado1, 2);  
   
     document.getElementById('resposta').innerHTML = "<hr> A Ã¡rea do triÃ¢ngulo equilÃ¡tero ABC Ã©: <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> 3 âˆ™ R<a1 style='font-size:20px' >Â²</a1> âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> 3 âˆ™ ("+raio_maior+") <a1 style='font-size: 21px; font-family: times new roman;'>Â² </a1> âˆ™ 1,73  </a1> </td></tr> <tr> <td> 4 </td><td> 4 </td> </tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> 3 âˆ™ "+ladolado+" âˆ™ 1,73 </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladolado1+" </td></tr> <tr> <td> 4 </td><td> 4 </td> </tr></tbody></table> </div> A &nbsp;= <a1 style='color: #FF0000'> "+areaTrianguloEquilatero+"&nbsp; </a1><a1 style='font-size: 16px; font-family: times new roman;'> uÂ² </a1>  <br>  ou <br> "+"A = <a1 style='color: #FF0000'> "+areaTrianguloEquilatero1+"</a>âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>3</a1></a1>  " +"&nbsp <a1 style='font-size: 17px; font-family: times new roman;font-style:italic;'> uÂ² </a1><hr><h1 class='logomarca'> BpW </h1>  ";
     
      document.trian_equilatero.raio_maior.focus();
      document.trian_equilatero.raio_maior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  }
  
  