/***#########################################                ############################################################      **/
/***#########################################  PARALELOGRAMO  ############################################################      **/

function Paralelogramo2() {
    var a = document.forms["Paralelogramo"]["Paralelogramo_type"].value;
  /** *************   AREA 1 (A = a.h_a)   ***********************  **/  
   if (a === "area") {
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value ="";
      document.getElementById("alturab").disabled = true;
      document.getElementById("alturab").value ="";	
      document.getElementById("angulo2").disabled = true;
      document.getElementById("angulo2").value ="";
      document.getElementById("ladob").disabled = true;
      document.getElementById("ladob").value ="";
      document.getElementById("angulo1").disabled = true;
      document.getElementById("angulo1").value ="";
       document.getElementById("ladoa").disabled = false;	
       document.getElementById("alturaa").disabled = false;		
   }
   try { 	}
       catch(e) {alert(e)}
      
  /** *************   AREA 2 (A = b.h_b)   ***********************  **/  
   if (a === "area2") {
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value ="";
      document.getElementById("alturaa").disabled = true;
      document.getElementById("alturaa").value ="";	
      document.getElementById("angulo2").disabled = true;
      document.getElementById("angulo2").value ="";
      document.getElementById("angulo1").disabled = true;
      document.getElementById("angulo1").value ="";
       document.getElementById("ladob").disabled = false;	
       document.getElementById("alturab").disabled = false;		
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /** *************   PerÃ­metro (P = 2(a + b))   ***********************  **/  
   if (a === "perimetro1") {
      document.getElementById("alturaa").disabled = true;
      document.getElementById("alturaa").value ="";
      document.getElementById("alturab").disabled = true;
      document.getElementById("alturab").value ="";	
      document.getElementById("angulo2").disabled = true;
      document.getElementById("angulo2").value ="";
      document.getElementById("angulo1").disabled = true;
      document.getElementById("angulo1").value ="";
      document.getElementById("ladoa").disabled = false;		
      document.getElementById("ladob").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /** *************   Altura (h(a) = b. sen Î±1)   ***********************  **/  
   if (a === "alturaA") {
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value ="";
      document.getElementById("alturaa").disabled = true;
      document.getElementById("alturaa").value ="";
      document.getElementById("alturab").disabled = true;
      document.getElementById("alturab").value ="";	
      document.getElementById("angulo2").disabled = true;
      document.getElementById("angulo2").value ="";
      document.getElementById("ladob").disabled = false;
      document.getElementById("angulo1").disabled = false;
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /** *************   Altura (h(b) = a. sen Î±1)   ***********************  **/  
   if (a === "alturaB") {
      document.getElementById("ladob").disabled = true;
      document.getElementById("ladob").value ="";
      document.getElementById("alturaa").disabled = true;
      document.getElementById("alturaa").value ="";
      document.getElementById("alturab").disabled = true;
      document.getElementById("alturab").value ="";	
      document.getElementById("angulo2").disabled = true;
      document.getElementById("angulo2").value ="";
      document.getElementById("ladoa").disabled = false;
      document.getElementById("angulo1").disabled = false;
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /** *************   Ã‚ngulo Î±1:   Î±1 = 180Â° - Î±2    ***********************  **/  
   if (a === "angulo5") {
      document.getElementById("ladob").disabled = true;
      document.getElementById("ladob").value ="";
      document.getElementById("alturaa").disabled = true;
      document.getElementById("alturaa").value ="";
      document.getElementById("alturab").disabled = true;
      document.getElementById("alturab").value ="";	
      document.getElementById("angulo1").disabled = true;
      document.getElementById("angulo1").value ="";
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value ="";
      document.getElementById("angulo2").disabled = false;
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /** *************   Ã‚ngulo Î±2:   Î±2 = 180Â° - Î±1    ***********************  **/  
   if (a === "angulo6") {
      document.getElementById("ladob").disabled = true;
      document.getElementById("ladob").value ="";
      document.getElementById("alturaa").disabled = true;
      document.getElementById("alturaa").value ="";
      document.getElementById("alturab").disabled = true;
      document.getElementById("alturab").value ="";	
      document.getElementById("angulo2").disabled = true;
      document.getElementById("angulo2").value ="";
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value ="";
      document.getElementById("angulo1").disabled = false;
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /** *************   diagonal 1: D1 = âˆšaÂ² + bÂ² - 2.a.b.cos Î±1    ***********************  **/  
   if (a === "diagonal1") {
      document.getElementById("alturaa").disabled = true;
      document.getElementById("alturaa").value ="";
      document.getElementById("alturab").disabled = true;
      document.getElementById("alturab").value ="";	
      document.getElementById("angulo2").disabled = true;
      document.getElementById("angulo2").value ="";
      document.getElementById("ladoa").disabled = false;
      document.getElementById("ladob").disabled = false;	
      document.getElementById("angulo1").disabled = false;
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /** *************   diagonal 2: D2 = âˆšaÂ² + bÂ² - 2.a.b.cos Î±2    ***********************  **/  
   if (a === "diagonal2") {
      document.getElementById("alturaa").disabled = true;
      document.getElementById("alturaa").value ="";
      document.getElementById("alturab").disabled = true;
      document.getElementById("alturab").value ="";	
      document.getElementById("angulo1").disabled = true;
      document.getElementById("angulo1").value ="";
      document.getElementById("ladoa").disabled = false;
      document.getElementById("ladob").disabled = false;	
      document.getElementById("angulo2").disabled = false;
   }
   try { 	}
       catch(e) {alert(e)}		
  } 
   
  function Paralelogramo1() {
      
   var ddl = document.getElementById("ops");
   var selectedValue = ddl.options[ddl.selectedIndex].value;
      if (selectedValue == "")
     {
      alert("Escolha uma opÃ§Ã£o para Calcular!");
     } 
      
    var a = document.forms["Paralelogramo"]["Paralelogramo_type"].value;
    /** *****************************************************   CÃ¡lculdo da AREA (A = a.h_a)  ****************************************  **/  
    if (a === "area") { 
      var ladoa = eval(document.Paralelogramo.ladoa.value.replace(",",".").replace(/ /g,"")); 	 
      var alturaa = eval(document.Paralelogramo.alturaa.value.replace(",",".").replace(/ /g,"")); 		
      
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.Paralelogramo.ladoa.focus();
          document.Paralelogramo.ladoa.select();  
      return false;
   }  
       if ((alturaa < 0) || isNaN(alturaa) || alturaa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.Paralelogramo.alturaa.focus();
          document.Paralelogramo.alturaa.select();  
      return false;
   }    
   
   try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);
   var alturaa = document.getElementById("resposta").value = roundNumber(alturaa, 2); 
   var areaParalelogramo = ladoa * alturaa;
   var areaParalelogramo = document.getElementById("resposta").value = roundNumber(areaParalelogramo, 2);  
   
     document.getElementById('resposta').innerHTML = "<hr> <div style='line-height: 23px;'>A Ã¡rea do paralelogramo Ã©: <br> A = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1><a1 style='font-size: 10px; font-family: times new roman; font-style:italic;'>a</a1> = "+ladoa+" âˆ™ "+alturaa+" <br>  A &nbsp;= <a1 style='color: #FF0000'> "+areaParalelogramo+"&nbsp; </a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> uÂ² </a1>  </div><hr><h1 class='logomarca'> BpW </h1> ";
     
      document.Paralelogramo.ladoa.focus();
      document.Paralelogramo.ladoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
    /** **************************************  CÃ¡lculdo da AREA 2 (A = b.h_b)  ****************************************  **/  
    if (a === "area2") { 
      var ladob = eval(document.Paralelogramo.ladob.value.replace(",",".").replace(/ /g,"")); 	 
      var alturab = eval(document.Paralelogramo.alturab.value.replace(",",".").replace(/ /g,"")); 		
      
       if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.Paralelogramo.ladob.focus();
          document.Paralelogramo.ladob.select();  
      return false;
   }  
       if ((alturab < 0) || isNaN(alturab) || alturab == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.Paralelogramo.alturab.focus();
          document.Paralelogramo.alturab.select();  
      return false;
   }  
  
   try {
   var ladob = document.getElementById("resposta").value = roundNumber(ladob, 2);
   var alturab = document.getElementById("resposta").value = roundNumber(alturab, 2); 	 
   var areaParalelogramo1 = ladob * alturab;
   var areaParalelogramo1 = document.getElementById("resposta").value = roundNumber(areaParalelogramo1, 2);   
   
     document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 23px;'>A Ã¡rea do paralelogramo Ã©: <br> A = <a1 style='font-family: times new roman; font-style:italic;'>b</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1><a1 style='font-size: 10px; font-family: times new roman; font-style:italic;'>b</a1> = "+ladob+" âˆ™ "+alturab+" <br>  A &nbsp;= <a1 style='color: #FF0000'> "+areaParalelogramo1+"&nbsp; </a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> uÂ² </a1>  </div> <hr><h1 class='logomarca'> BpW </h1>";
     
      document.Paralelogramo.ladob.focus();
      document.Paralelogramo.ladob.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
    /** ******************************************  PerÃ­metro (P = 2(a + b)  ****************************************  **/  
    if (a === "perimetro1") { 
      var ladoa = eval(document.Paralelogramo.ladoa.value.replace(",",".").replace(/ /g,""));  
      var ladob = eval(document.Paralelogramo.ladob.value.replace(",",".").replace(/ /g,"")); 	 
          
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.Paralelogramo.ladoa.focus();
          document.Paralelogramo.ladoa.select();  
      return false;
   }
        if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.Paralelogramo.ladob.focus();
          document.Paralelogramo.ladob.select();  
      return false;
   }  
  
   try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);
   var ladob = document.getElementById("resposta").value = roundNumber(ladob, 2); 	 
   var perimetro = 2*(ladoa + ladob);
   var perimetro = document.getElementById("resposta").value = roundNumber(perimetro, 2);   
   var perimetro2 = ladoa + ladob;  
   var perimetro2 = document.getElementById("resposta").value = roundNumber(perimetro2, 2);     
   
     document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 23px;'>O perÃ­metro do paralelogramo Ã©: <br> P = 2(<a1 style='font-family: times new roman; font-style:italic;'>a</a1> + <a1 style='font-family: times new roman; font-style:italic;'>b</a1>) = 2 âˆ™ ("+ladoa+" + "+ladob+") <br>  P &nbsp;=  2 âˆ™ "+perimetro2+" <br> P = <a1 style='color: #FF0000'> "+perimetro+"&nbsp;</a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>  </div> <hr><h1 class='logomarca'> BpW </h1>";
     
      document.Paralelogramo.ladoa.focus();
      document.Paralelogramo.ladoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
    /** *****************************************  Altura: h(a) = b. sen Î±1   ****************************************  **/  
    if (a === "alturaA") {
      var ladob = eval(document.Paralelogramo.ladob.value.replace(",",".").replace(/ /g,"")); 	  
      var angulo1 = eval(document.Paralelogramo.angulo1.value.replace(",",".").replace(/ /g,""));  
       
        if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.Paralelogramo.ladob.focus();
          document.Paralelogramo.ladob.select();  
      return false;
   }   
            
       if ((angulo1 < 0) || isNaN(angulo1) || angulo1 == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.Paralelogramo.angulo1.focus();
          document.Paralelogramo.angulo1.select();  
      return false;
   }
  
   try {
   var ladob = document.getElementById("resposta").value = roundNumber(ladob, 2);
   var angulo1 = document.getElementById("resposta").value = roundNumber(angulo1, 3); 	 
   var altura1 = ladob * Math.sin((Math.PI*angulo1)/180);
   var altura1 = document.getElementById("resposta").value = roundNumber(altura1, 2);   
   var angulo2 = Math.sin((Math.PI*angulo1)/180);  
   var angulo2 = document.getElementById("resposta").value = roundNumber(angulo2, 3);   
    
     document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 22px;'>A altura <a1 style='font-family: times new roman; font-style:italic;'>h</a1><a1 style='font-size: 10px; font-family: times new roman; font-style:italic;'>a</a1> do paralelogramo Ã©: <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1><a1 style='font-size: 10px; font-family: times new roman; font-style:italic;'>a</a1> = <a1 style='font-family: times new roman; font-style:italic;'>b</a1> âˆ™ sen Î±<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> =  "+ladob+" âˆ™ seno "+angulo1+"Â° <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1><a1 style='font-size: 10px; font-family: times new roman; font-style:italic;'>a</a1> = "+ladob+" âˆ™ "+angulo2+" <br>  <a1 style='font-family: times new roman; font-style:italic;'>h</a1><a1 style='font-size: 10px; font-family: times new roman; font-style:italic;'>a</a1> &nbsp;=  <a1 style='color: #FF0000'> "+altura1+"&nbsp;</a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>  </div><hr><h1 class='logomarca'> BpW </h1> ";
     
      document.Paralelogramo.ladob.focus();
      document.Paralelogramo.ladob.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
   /** *******************************************  Altura: h(b) = a. sen Î±1   ****************************************  **/  
    if (a === "alturaB") { 
      var ladoa = eval(document.Paralelogramo.ladoa.value.replace(",",".").replace(/ /g,"")); 	  
      var angulo1 = eval(document.Paralelogramo.angulo1.value.replace(",",".").replace(/ /g,""));  
       
        if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.Paralelogramo.ladoa.focus();
          document.Paralelogramo.ladoa.select();  
      return false;
   }   
       if ((angulo1 < 0) || isNaN(angulo1) || angulo1 == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.Paralelogramo.angulo1.focus();
          document.Paralelogramo.angulo1.select();  
      return false;
   }  
    
   try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);
   var angulo1 = document.getElementById("resposta").value = roundNumber(angulo1, 3); 	 
   var altura1 = ladoa * Math.sin((Math.PI*angulo1)/180);
   var altura1 = document.getElementById("resposta").value = roundNumber(altura1, 2); 
   var angulo2 = Math.sin((Math.PI*angulo1)/180);  
   var angulo2 = document.getElementById("resposta").value = roundNumber(angulo2, 3);  
     
     document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 20px;'>A altura <a1 style='font-family: times new roman; font-style:italic;'>h</a1><a1 style='font-size: 10px; font-family: times new roman; font-style:italic;'>b</a1> do paralelogramo Ã©: <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1><a1 style='font-size: 10px; font-family: times new roman; font-style:italic;'>b</a1> = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> âˆ™ sen Î±<sub>1</sub> =  "+ladoa+" âˆ™ seno "+angulo1+"Â° <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1><a1 style='font-size: 10px; font-family: times new roman; font-style:italic;'>b</a1> = "+ladoa+" âˆ™ "+angulo2+" &nbsp;=  <a1 style='color: #FF0000'> "+altura1+"&nbsp;</a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>  </div><hr><h1 class='logomarca'> BpW </h1> ";
     
      document.Paralelogramo.ladob.focus();
      document.Paralelogramo.ladob.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
  
   /** ********************************************  Ã¢ngulo:  Î±1 = 180Â° - Î±2   ****************************************  **/  
    if (a === "angulo5") { 
      var angulo2 = eval(document.Paralelogramo.angulo2.value.replace(",",".").replace(/ /g,""));  
        
       if ((angulo2 < 0) || isNaN(angulo2) || angulo2 == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.Paralelogramo.angulo2.focus();
          document.Paralelogramo.angulo2.select();  
      return false;
   }  
  
   try {
   var angulo2 = document.getElementById("resposta").value = roundNumber(angulo2, 3); 	 
   var angulo3 = 180 - angulo2;  
   var angulo3 = document.getElementById("resposta").value = roundNumber(angulo3, 3); 	
    
     document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 20px;'>O Ã¢ngulo  Î±<sub>1</sub> do paralelogramo Ã©: <br> Î±<sub>1</sub> = 180Â° - Î±<sub>2</sub> =  180Â° - "+angulo2+"Â° <br> Î±<sub>1</sub> =  <a1 style='color: #FF0000'>"+angulo3+"</a1><a1 style='font-size: 13px; font-family: times new roman;'>Â° </a1>    </div> <hr><h1 class='logomarca'> BpW </h1>";
     
      document.Paralelogramo.angulo2.focus();
      document.Paralelogramo.angulo2.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   
    /** *****************************************************  Ã¢ngulo:  Î±2 = 180Â° - Î±1   ****************************************  **/  
    if (a === "angulo6") { 
      var angulo1 = eval(document.Paralelogramo.angulo1.value.replace(",",".").replace(/ /g,""));  
        
       if ((angulo1 < 0) || isNaN(angulo1) || angulo1 == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.Paralelogramo.angulo1.focus();
          document.Paralelogramo.angulo1.select();  
      return false;
   }  
  
   try {
   var angulo1 = document.getElementById("resposta").value = roundNumber(angulo1, 3); 	 
   var angulo3 = 180 - angulo1;  
   var angulo3 = document.getElementById("resposta").value = roundNumber(angulo3, 2);   
    
     document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 20px;'>O Ã¢ngulo  Î±<sub>2</sub> do paralelogramo Ã©: <br> Î±<sub>2</sub> = 180Â° - Î±<sub>1</sub> =  180Â° - "+angulo1+"Â° <br> Î±<sub>2</sub> =  <a1 style='color: #FF0000'>"+angulo3+"</a1><a1 style='font-size: 13px; font-family: times new roman;'>Â° </a1>  </div> <hr><h1 class='logomarca'> BpW </h1>";
     
      document.Paralelogramo.angulo1.focus();
      document.Paralelogramo.angulo1.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
    /** ************************************** diagonal 1: D1 = âˆšaÂ² + bÂ² - 2.a.b.cos Î±1   ****************************************  **/  
    if (a === "diagonal1") { 
      var ladoa = eval(document.Paralelogramo.ladoa.value.replace(",",".").replace(/ /g,"")); 	 
      var ladob = eval(document.Paralelogramo.ladob.value.replace(",",".").replace(/ /g,"")); 	
      var angulo1 = eval(document.Paralelogramo.angulo1.value.replace(",",".").replace(/ /g,"")); 	
      
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.Paralelogramo.ladoa.focus();
          document.Paralelogramo.ladoa.select();  
      return false;
   }  
       if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.Paralelogramo.ladob.focus();
          document.Paralelogramo.ladob.select();  
      return false;
   }  
       if ((angulo1 < 0) || isNaN(angulo1) || angulo1 == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.Paralelogramo.angulo1.focus();
          document.Paralelogramo.angulo1.select();  
      return false;
   } 
    
   try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2); 
   var ladob = document.getElementById("resposta").value = roundNumber(ladob, 2);  
   var angulo1 = document.getElementById("resposta").value = roundNumber(angulo1, 3); 
   var diagonal1 = Math.sqrt(ladoa*ladoa + ladob*ladob - 2*ladoa*ladob*Math.cos((Math.PI*angulo1)/180));
   var diagonal1 = document.getElementById("resposta").value = roundNumber(diagonal1, 2);   
   var lado2 = ladoa * ladoa;
   var lado2 = document.getElementById("resposta").value = roundNumber(lado2, 2);   
   var lado3 = ladob * ladob;  
   var lado3 = document.getElementById("resposta").value = roundNumber(lado3, 2);    
   var lado4 = 2*ladoa * ladob;
   var lado4 = document.getElementById("resposta").value = roundNumber(lado4, 2);    
   var lado5 = (ladoa * ladoa)+ (ladob * ladob);
   var lado5 = document.getElementById("resposta").value = roundNumber(lado5, 2);    
   var lado6 = (2*ladoa * ladob)*Math.cos((Math.PI*angulo1)/180); 
   var lado6 = document.getElementById("resposta").value = roundNumber(lado6, 3);    
   var lado7 = (ladoa * ladoa)+ (ladob * ladob) - (2*ladoa * ladob)*Math.cos((Math.PI*angulo1)/180);  
   var lado7 = document.getElementById("resposta").value = roundNumber(lado7, 3);    
   var cos2 = Math.cos((Math.PI*angulo1)/180);  
   var cos2 = document.getElementById("resposta").value = roundNumber(cos2, 3);    
    
     document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 24px;'>A diagonal <a1 style='font-family: times new roman; font-style:italic;'>d</a1><sub>1</sub> do paralelogramo Ã©: <br> <a1 style='font-family: times new roman; font-style:italic;'>d</a1><sub>1</sub> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'><a1 style='font-family: times new roman; font-style:italic;'>a</a1>Â² + <a1 style='font-family: times new roman; font-style:italic;'>b</a1>Â² âˆ’ 2 âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>a</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>b</a1> âˆ™ cos Î±<sub>1</sub> </a1><br> <a1 style='font-family: times new roman; font-style:italic;'>d</a1><sub>1</sub> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>("+ladoa+")Â² + ("+ladob+")Â² âˆ’ 2 âˆ™ "+ladoa+" âˆ™ "+ladob+" âˆ™ cos("+angulo1+") </a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>d</a1><sub>1</sub> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>"+lado2+" + "+lado3+" âˆ’ "+lado4+" âˆ™ ("+cos2+") </a1> <br>   <a1 style='font-family: times new roman; font-style:italic;'>d</a1><sub>1</sub> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>"+lado5+" âˆ’ ("+lado6+") </a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>"+lado7+" </a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>d</a1><sub>1</sub> =  <a1 style='color: #FF0000'>"+diagonal1+"</a1> <a1 style='font-size: 17px; font-family: times new roman;font-style:italic;'> u </a1>  </div><hr><h1 class='logomarca'> BpW </h1> ";
     
      document.Paralelogramo.ladoa.focus();
      document.Paralelogramo.ladoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
    /** *************************************  diagonal 2: D2 = âˆšaÂ² + bÂ² - 2.a.b.cos Î±2   ****************************************  **/  
    if (a === "diagonal2") { 
      var ladoa = eval(document.Paralelogramo.ladoa.value.replace(",",".").replace(/ /g,"")); 	 
      var ladob = eval(document.Paralelogramo.ladob.value.replace(",",".").replace(/ /g,"")); 	
      var angulo2 = eval(document.Paralelogramo.angulo2.value.replace(",",".").replace(/ /g,"")); 	
      
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.Paralelogramo.ladoa.focus();
          document.Paralelogramo.ladoa.select();  
      return false;
   }  
       if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.Paralelogramo.ladob.focus();
          document.Paralelogramo.ladob.select();  
      return false;
   }  
       if ((angulo2 < 0) || isNaN(angulo2) || angulo2 == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.Paralelogramo.angulo2.focus();
          document.Paralelogramo.angulo2.select();  
      return false;
   }   
    
   try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2); 
   var ladob = document.getElementById("resposta").value = roundNumber(ladob, 2);  
   var angulo2 = document.getElementById("resposta").value = roundNumber(angulo2, 3); 	 
   var diagonal2 = Math.sqrt(ladoa*ladoa + ladob*ladob - 2*ladoa*ladob*Math.cos((Math.PI*angulo2)/180));
   var diagonal2 = document.getElementById("resposta").value = roundNumber(diagonal2, 2);  
   var lado2 = ladoa * ladoa;
   var lado2 = document.getElementById("resposta").value = roundNumber(lado2, 2);  
   var lado3 = ladob * ladob;  
   var lado3 = document.getElementById("resposta").value = roundNumber(lado3, 2);   
   var lado4 = 2*ladoa * ladob;
   var lado4 = document.getElementById("resposta").value = roundNumber(lado4, 2);   
   var lado5 = (ladoa * ladoa)+ (ladob * ladob);
   var lado5 = document.getElementById("resposta").value = roundNumber(lado5, 2);   
   var lado6 = (2*ladoa * ladob)*Math.cos((Math.PI*angulo2)/180); 
   var lado6 = document.getElementById("resposta").value = roundNumber(lado6, 3);   
   var lado7 = (ladoa * ladoa)+ (ladob * ladob) - (2*ladoa * ladob)*Math.cos((Math.PI*angulo2)/180);   
   var lado7 = document.getElementById("resposta").value = roundNumber(lado7, 3);   
   var cos2 = Math.cos((Math.PI*angulo2)/180);  
   var cos2 = document.getElementById("resposta").value = roundNumber(cos2, 3);   
   
     document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 23px;'>A diagonal <a1 style='font-family: times new roman; font-style:italic;'>d</a1><sub>2</sub> do paralelogramo Ã©: <br> <a1 style='font-family: times new roman; font-style:italic;'>d</a1><sub>2</sub> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'><a1 style='font-family: times new roman; font-style:italic;'>a</a1>Â² + <a1 style='font-family: times new roman; font-style:italic;'>b</a1>Â² âˆ’ 2 âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>a</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>b</a1> âˆ™ cos Î±<sub>2</sub> </a1><br> <a1 style='font-family: times new roman; font-style:italic;'>d</a1><sub>2</sub> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>("+ladoa+")Â² + ("+ladob+")Â² âˆ’ 2 âˆ™ "+ladoa+" âˆ™ "+ladob+" âˆ™ cos("+angulo2+") </a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>d</a1><sub>2</sub> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>"+lado2+" + "+lado3+" âˆ’ "+lado4+" âˆ™ ("+cos2+") </a1> <br>   <a1 style='font-family: times new roman; font-style:italic;'>d</a1><sub>2</sub> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>"+lado5+" âˆ’ ("+lado6+") </a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>"+lado7+" </a1> &nbsp;=  <a1 style='color: #FF0000'>"+diagonal2+"</a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> u </a1>  </div><hr><h1 class='logomarca'> BpW </h1> ";
     
      document.Paralelogramo.ladoa.focus();
      document.Paralelogramo.ladoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  }
  
  
  
  /***#########################################                #################################################      **/
  /***#########################################     LOSANGO    #################################################      **/
  
  
   function losango2() {
    var a = document.forms["losango"]["losango_type"].value;
  /** *************   AREA 1 (A = (d1 . d2)/2)   ***********************  **/  
   if (a === "area") {
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value ="";
      document.getElementById("anguloÎ±").disabled = true;
      document.getElementById("anguloÎ±").value ="";	
      document.getElementById("anguloÎ²").disabled = true;
      document.getElementById("anguloÎ²").value ="";
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";
      
       document.getElementById("diagonald1").disabled = false;	
       document.getElementById("diagonald2").disabled = false;		
   }
   try { 	}
       catch(e) {alert(e)}
  
      
  /** *************   AREA 2 (A = a.h)   ***********************  **/  
   if (a === "area2") {
      document.getElementById("diagonald1").disabled = true;
      document.getElementById("diagonald1").value ="";
      document.getElementById("anguloÎ±").disabled = true;
      document.getElementById("anguloÎ±").value ="";	
      document.getElementById("anguloÎ²").disabled = true;
      document.getElementById("anguloÎ²").value ="";
      document.getElementById("diagonald2").disabled = true;
      document.getElementById("diagonald2").value ="";
       document.getElementById("ladoa").disabled = false;	
       document.getElementById("altura").disabled = false;		
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /** *************   PerÃ­metro: (P = 4.a)   ***********************  **/  
   if (a === "perimetro") {
      document.getElementById("diagonald1").disabled = true;
      document.getElementById("diagonald1").value ="";
      document.getElementById("anguloÎ±").disabled = true;
      document.getElementById("anguloÎ±").value ="";	
      document.getElementById("anguloÎ²").disabled = true;
      document.getElementById("anguloÎ²").value ="";
      document.getElementById("diagonald2").disabled = true;
      document.getElementById("diagonald2").value ="";
       document.getElementById("altura").disabled = true;		
      document.getElementById("altura").value ="";	
       document.getElementById("ladoa").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /** *************   Lado a: (a = âˆš((d1/2)Â² + (d2/2)Â²)   ***********************  **/  
   if (a === "ladoa") {
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value ="";
      document.getElementById("anguloÎ±").disabled = true;
      document.getElementById("anguloÎ±").value ="";	
      document.getElementById("anguloÎ²").disabled = true;
      document.getElementById("anguloÎ²").value ="";
       document.getElementById("altura").disabled = true;		
      document.getElementById("altura").value ="";	
       document.getElementById("diagonald1").disabled = false;	
       document.getElementById("diagonald2").disabled = false;		
   }
   try { 	}
       catch(e) {alert(e)}	
  
      
  /** *************   altura: (h1 = a . sen Î±)   ***********************  **/  
   if (a === "altura1") {
      document.getElementById("diagonald1").disabled = true;
      document.getElementById("diagonald1").value ="";
      document.getElementById("anguloÎ²").disabled = true;
      document.getElementById("anguloÎ²").value ="";
      document.getElementById("diagonald2").disabled = true;
      document.getElementById("diagonald2").value ="";
       document.getElementById("altura").disabled = true;		
      document.getElementById("altura").value ="";
      document.getElementById("anguloÎ±").disabled = false;	
       document.getElementById("ladoa").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
      
  /** *************   altura: (h2 = a . sen Î²)   ***********************  **/  
   if (a === "altura2") {
      document.getElementById("diagonald1").disabled = true;
      document.getElementById("diagonald1").value ="";
      document.getElementById("anguloÎ±").disabled = true;
      document.getElementById("anguloÎ±").value ="";
      document.getElementById("diagonald2").disabled = true;
      document.getElementById("diagonald2").value ="";
       document.getElementById("altura").disabled = true;		
      document.getElementById("altura").value ="";
      document.getElementById("anguloÎ²").disabled = false;	
       document.getElementById("ladoa").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
      
  /** *************   Ã¢ngulo Î±: (Î± = 180Â° - Î²)   ***********************  **/  
   if (a === "anguloÎ±") {
      document.getElementById("diagonald1").disabled = true;
      document.getElementById("diagonald1").value ="";
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value ="";
      document.getElementById("diagonald2").disabled = true;
      document.getElementById("diagonald2").value ="";
       document.getElementById("altura").disabled = true;		
      document.getElementById("altura").value ="";
      document.getElementById("anguloÎ±").disabled = true;
      document.getElementById("anguloÎ±").value ="";	
      document.getElementById("anguloÎ²").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
      
  /** *************   Ã¢ngulo Î²: (Î² = 180Â° - Î±)   ***********************  **/  
   if (a === "anguloÎ²") {
      document.getElementById("diagonald1").disabled = true;
      document.getElementById("diagonald1").value ="";
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value ="";
      document.getElementById("diagonald2").disabled = true;
      document.getElementById("diagonald2").value ="";
       document.getElementById("altura").disabled = true;		
      document.getElementById("altura").value ="";
      document.getElementById("anguloÎ²").disabled = true;
      document.getElementById("anguloÎ²").value ="";	
      document.getElementById("anguloÎ±").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /** *************  Diagonal d1: (d1 = a . âˆš(2 - 2 . cos Î±))   ***********************  **/  
   if (a === "diagonald1") {
      document.getElementById("diagonald1").disabled = true;
      document.getElementById("diagonald1").value ="";
      document.getElementById("diagonald2").disabled = true;
      document.getElementById("diagonald2").value ="";
       document.getElementById("altura").disabled = true;		
      document.getElementById("altura").value ="";
      document.getElementById("anguloÎ²").disabled = true;
      document.getElementById("anguloÎ²").value ="";
      document.getElementById("ladoa").disabled = false;	
      document.getElementById("anguloÎ±").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
          
  /** *************  Diagonal d2: (d2 = a . âˆš(2 - 2 . cos Î²))   ***********************  **/  
   if (a === "diagonald2") {
      document.getElementById("diagonald1").disabled = true;
      document.getElementById("diagonald1").value ="";
      document.getElementById("diagonald2").disabled = true;
      document.getElementById("diagonald2").value ="";
       document.getElementById("altura").disabled = true;		
      document.getElementById("altura").value ="";
      document.getElementById("anguloÎ±").disabled = true;
      document.getElementById("anguloÎ±").value ="";
      document.getElementById("ladoa").disabled = false;	
      document.getElementById("anguloÎ²").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
  } 
   
    
  function losango1() {
      
   var ddl = document.getElementById("ops");
   var selectedValue = ddl.options[ddl.selectedIndex].value;
      if (selectedValue == "")
     {
      alert("Escolha uma opÃ§Ã£o para Calcular!");
     } 
     
    var a = document.forms["losango"]["losango_type"].value;
    /** *****************************************************   CÃ¡lculdo da AREA 1 (A = (d1 . d2)/2)  ****************************************  **/  
    if (a === "area") { 
      var diagonald1 = eval(document.losango.diagonald1.value.replace(",",".").replace(/ /g,"")); 	 
      var diagonald2 = eval(document.losango.diagonald2.value.replace(",",".").replace(/ /g,"")); 		
      
       if ((diagonald1 < 0) || isNaN(diagonald1) || diagonald1 == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.losango.diagonald1.focus();
          document.losango.diagonald1.select();  
      return false;
   }  
       if ((diagonald2 < 0) || isNaN(diagonald2) || diagonald2 == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.losango.diagonald2.focus();
          document.losango.diagonald2.select();  
      return false;
   }     
    
   try {
   var diagonald1 = document.getElementById("resposta").value = roundNumber(diagonald1, 2);	 
   var diagonald2 = document.getElementById("resposta").value = roundNumber(diagonald2, 2); 
   var areaLosango = (diagonald1 * diagonald2)/2;
   var areaLosango = document.getElementById("resposta").value = roundNumber(areaLosango, 2); 
   var areaLosango2 = (diagonald1 * diagonald2); 
   var areaLosango2 = document.getElementById("resposta").value = roundNumber(areaLosango2, 2);  
   
     document.getElementById('resposta').innerHTML = "<hr> A Ã¡rea do losango Ã©: <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'><a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1></td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'>"+diagonald1+" âˆ™ "+diagonald2+"</td></tr> <tr> <td>2</td><td>2</td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+areaLosango2+" </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>  </div> A = <a1 style='color: #FF0000'> "+areaLosango+"&nbsp; </a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> uÂ² </a1> <hr><h1 class='logomarca'> BpW </h1> ";
     
      document.losango.diagonald1.focus();
      document.losango.diagonald1.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
    /** *****************************************************   CÃ¡lculdo da AREA 2 (A = a.h)   ****************************************  **/  
    if (a === "area2") { 
      var ladoa = eval(document.losango.ladoa.value.replace(",",".").replace(/ /g,"")); 	 
      var altura = eval(document.losango.altura.value.replace(",",".").replace(/ /g,"")); 		
      
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.losango.ladoa.focus();
          document.losango.ladoa.select();  
      return false;
   }  
       if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.losango.altura.focus();
          document.losango.altura.select();  
      return false;
   }  
    
   try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);	 
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2); 	 
   var areaLosango = (ladoa * altura);
   var areaLosango = document.getElementById("resposta").value = roundNumber(areaLosango, 2);   
   
     document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 22px;'>A Ã¡rea do losango Ã©: <br> A = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = "+ladoa+" âˆ™ "+altura+"  <br> A =  <a1 style='color: #FF0000'> "+areaLosango+"&nbsp; </a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> uÂ² </a1>     </div><hr><h1 class='logomarca'> BpW </h1> ";
     
      document.losango.ladoa.focus();
      document.losango.ladoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
    /** *****************************************************   CÃ¡lculdo do PerÃ­metro (P = 4.a)   ****************************************  **/  
    if (a === "perimetro") {
      var ladoa = eval(document.losango.ladoa.value.replace(",",".").replace(/ /g,"")); 	 		
      
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.losango.ladoa.focus();
          document.losango.ladoa.select();  
      return false;
   }  
  
   try {
    var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);	 	 
    var perimetroLosango = (4*ladoa);
    var perimetroLosango = document.getElementById("resposta").value = roundNumber(perimetroLosango, 2);	 
   
     document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 22px;'>O perÃ­metro do losango Ã©: <br> P = 4 âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = 4 âˆ™ "+ladoa+" <br> P = <a1 style='color: #FF0000'> "+perimetroLosango+"&nbsp; </a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>  </div><hr><h1 class='logomarca'> BpW </h1> ";
     
      document.losango.ladoa.focus();
      document.losango.ladoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
    /** **********************************  CÃ¡lculdo lado a: (a = âˆš((d1/2)Â² + (d2/2)Â²))   ****************************************  **/  
    if (a === "ladoa") { 
      var diagonald1 = eval(document.losango.diagonald1.value.replace(",",".").replace(/ /g,"")); 	 
      var diagonald2 = eval(document.losango.diagonald2.value.replace(",",".").replace(/ /g,"")); 		
      
       if ((diagonald1 < 0) || isNaN(diagonald1) || diagonald1 == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.losango.diagonald1.focus();
          document.losango.diagonald1.select();  
      return false;
   }  
       if ((diagonald2 < 0) || isNaN(diagonald2) || diagonald2 == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.losango.diagonald2.focus();
          document.losango.diagonald2.select();  
      return false;
   }   
    
   try {
    var diagonald1 = document.getElementById("resposta").value = roundNumber(diagonald1, 2);
    var diagonald2 = document.getElementById("resposta").value = roundNumber(diagonald2, 2);  
    var ladoaLosango = Math.sqrt((diagonald1/2)*(diagonald1/2) + (diagonald2/2)*(diagonald2/2));
    var ladoaLosango = document.getElementById("resposta").value = roundNumber(ladoaLosango, 2);   
    var ladoaLosango2 = (diagonald1/2); 
    var ladoaLosango2 = document.getElementById("resposta").value = roundNumber(ladoaLosango2, 3);     
    var ladoaLosango3 = (diagonald2/2); 
    var ladoaLosango3 = document.getElementById("resposta").value = roundNumber(ladoaLosango3, 3);    
    var ladoaLosango4 = (diagonald1/2)*(diagonald1/2); 
    var ladoaLosango4 = document.getElementById("resposta").value = roundNumber(ladoaLosango4, 3);    
    var ladoaLosango5 = (diagonald2/2)*(diagonald2/2) ; 
    var ladoaLosango5 = document.getElementById("resposta").value = roundNumber(ladoaLosango5, 3);    
    var ladoaLosango6 = (diagonald1/2)*(diagonald1/2) + (diagonald2/2)*(diagonald2/2) ; 
    var ladoaLosango6 = document.getElementById("resposta").value = roundNumber(ladoaLosango6, 3);     
     
     document.getElementById('resposta').innerHTML = "<hr> O lado <a1 style='font-family: times new roman; font-style:italic;'>a</a1> do losango Ã©: <br> <div style='line-height: 25px;'>  <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>(<a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1>/2)Â² + <a1 style='width:100%; height:100%; border-top:solid 1.1px;'>(<a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1>/2)Â²</a1></a1> <br>  <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>("+diagonald1+"/2)Â² + <a1 style='width:100%; height:100%; border-top:solid 1.1px;'>("+diagonald2+"/2)Â²</a1></a1>  <br>  <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>("+ladoaLosango2+")Â² + <a1 style='width:100%; height:100%; border-top:solid 1.1px;'>("+ladoaLosango3+")Â²</a1></a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>"+ladoaLosango4+" + <a1 style='width:100%; height:100%; border-top:solid 1.1px;'>"+ladoaLosango5+"</a1></a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>"+ladoaLosango6+" </a1></a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = <a1 style='color: #FF0000'> "+ladoaLosango+"&nbsp; </a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>  </div><hr><h1 class='logomarca'> BpW </h1> ";
     
      document.losango.diagonald1.focus();
      document.losango.diagonald1.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** ************************************  CÃ¡lculo da altura: (h1 = a . sen Î±)  ****************************************  **/  
    if (a === "altura1") { 
      var ladoa = eval(document.losango.ladoa.value.replace(",",".").replace(/ /g,"")); 	 
      var anguloÎ± = eval(document.losango.anguloÎ±.value.replace(",",".").replace(/ /g,"")); 		
      
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.losango.ladoa.focus();
          document.losango.ladoa.select();  
      return false;
   }  
       if ((anguloÎ± < 0) || isNaN(anguloÎ±) || anguloÎ± == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.losango.anguloÎ±.focus();
          document.losango.anguloÎ±.select();  
      return false;
   }   
    
   try {
    var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);
    var anguloÎ± = document.getElementById("resposta").value = roundNumber(anguloÎ±, 3);  	 
    var alturah1 = ladoa * Math.sin((Math.PI*anguloÎ±)/180);
    var alturah1 = document.getElementById("resposta").value = roundNumber(alturah1, 2);  
    var alturah2 =  Math.sin((Math.PI*anguloÎ±)/180);
    var alturah2 = document.getElementById("resposta").value = roundNumber(alturah2, 3);   
   
     document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 22px;'>A altura do losango Ã©: <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> âˆ™ sen(Î±) = "+ladoa+" âˆ™ sen("+anguloÎ±+"Â°) <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = "+ladoa+" âˆ™ "+alturah2+" <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = <a1 style='color: #FF0000'> "+alturah1+"&nbsp; </a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>  </div><hr><h1 class='logomarca'> BpW </h1> ";
     
      document.losango.ladoa.focus();
      document.losango.ladoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** ***********************************  CÃ¡lculo da altura: (h2 = a . sen Î²)  ****************************************  **/  
    if (a === "altura2") {
      var ladoa = eval(document.losango.ladoa.value.replace(",",".").replace(/ /g,"")); 	 
      var anguloÎ² = eval(document.losango.anguloÎ².value.replace(",",".").replace(/ /g,"")); 		
      
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.losango.ladoa.focus();
          document.losango.ladoa.select();  
      return false;
   }  
       if ((anguloÎ² < 0) || isNaN(anguloÎ²) || anguloÎ² == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.losango.anguloÎ².focus();
          document.losango.anguloÎ².select();  
      return false;
   }
  
   try {
    var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);
    var anguloÎ² = document.getElementById("resposta").value = roundNumber(anguloÎ², 3);  	 
    var alturah1 = ladoa * Math.sin((Math.PI*anguloÎ²)/180);
    var alturah1 = document.getElementById("resposta").value = roundNumber(alturah1, 2);   
    var alturah2 =  Math.sin((Math.PI*anguloÎ²)/180);
    var alturah2 = document.getElementById("resposta").value = roundNumber(alturah2, 3);    
   
     document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 22px;'>A altura do losango Ã©: <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> âˆ™ sen(Î²) = "+ladoa+" âˆ™ sen("+anguloÎ²+"Â°) <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = "+ladoa+" âˆ™ "+alturah2+" <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = <a1 style='color: #FF0000'> "+alturah1+"&nbsp; </a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>  </div> <hr><h1 class='logomarca'> BpW </h1>";
     
      document.losango.ladoa.focus();
      document.losango.ladoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** *****************************************************   Ã¢ngulo: (Î± = 180Â° - Î²)  ****************************************  **/  
    if (a === "anguloÎ±") {
      var anguloÎ² = eval(document.losango.anguloÎ².value.replace(",",".").replace(/ /g,"")); 		
       
       if ((anguloÎ² < 0) || isNaN(anguloÎ²) || anguloÎ² == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.losango.anguloÎ².focus();
          document.losango.anguloÎ².select();  
      return false;
   }
  
   try {
    var anguloÎ² = document.getElementById("resposta").value = roundNumber(anguloÎ², 3); 	 
    var anguloÎ± =  180 - anguloÎ² ;
    var anguloÎ± = document.getElementById("resposta").value = roundNumber(anguloÎ±, 3);   
   
     document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 22px;'>O Ã¢ngulo Î± do losango Ã©: <br> Î± = 180Â° âˆ’  Î² =  180Â° âˆ’ "+anguloÎ²+"Â° <br> Î± = <a1 style='color: #FF0000'>"+anguloÎ±+"Â° </a1> </div><hr><h1 class='logomarca'> BpW </h1> ";
     
      document.losango.anguloÎ².focus();
      document.losango.anguloÎ².select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /*******************************************************   Ã¢ngulo Î²: (Î² = 180Â° - Î±)  ****************************************  **/  
    if (a === "anguloÎ²") { 
      var anguloÎ± = eval(document.losango.anguloÎ±.value.replace(",",".").replace(/ /g,"")); 		
       
       if ((anguloÎ± < 0) || isNaN(anguloÎ±) || anguloÎ± == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.losango.anguloÎ±.focus();
          document.losango.anguloÎ±.select();  
      return false;
   }  
  
   try {
    var anguloÎ± = document.getElementById("resposta").value = roundNumber(anguloÎ±, 3); 	 
    var anguloÎ² =  180 - anguloÎ± ;
    var anguloÎ² = document.getElementById("resposta").value = roundNumber(anguloÎ², 3); 
   
     document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 22px;'>O Ã¢ngulo Î² do losango Ã©: <br> Î² = 180Â° âˆ’  Î± =  180Â° âˆ’ "+anguloÎ±+"Â° <br> Î² = <a1 style='color: #FF0000'>"+anguloÎ²+"Â° </a1> </div><hr><h1 class='logomarca'> BpW </h1> ";
     
      document.losango.anguloÎ±.focus();
      document.losango.anguloÎ±.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** *********************************** Diagonal d1: (d1 = a . âˆš(2 - 2 . cos Î±))  ****************************************  **/  
    if (a === "diagonald1") { 
      var ladoa = eval(document.losango.ladoa.value.replace(",",".").replace(/ /g,"")); 	 
      var anguloÎ± = eval(document.losango.anguloÎ±.value.replace(",",".").replace(/ /g,"")); 		
      
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.losango.ladoa.focus();
          document.losango.ladoa.select();  
      return false;
   }  
       if ((anguloÎ± < 0) || isNaN(anguloÎ±) || anguloÎ± == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.losango.anguloÎ±.focus();
          document.losango.anguloÎ±.select();  
      return false;
   }  
    
   try {
    var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2); 	 
    var anguloÎ± = document.getElementById("resposta").value = roundNumber(anguloÎ±, 3); 	 
    var diagonald1 = ladoa * Math.sqrt(2 - 2*(Math.cos((Math.PI*anguloÎ±)/180))); 
    var diagonald1 = document.getElementById("resposta").value = roundNumber(diagonald1, 2); 	  
    var diagonald2 =  Math.cos((Math.PI*anguloÎ±)/180);
    var diagonald2 = document.getElementById("resposta").value = roundNumber(diagonald2, 3);   
    var diagonald3 =  2*(Math.cos((Math.PI*anguloÎ±)/180)); 
    var diagonald3 = document.getElementById("resposta").value = roundNumber(diagonald3, 3);   
    var diagonald4 =  2 - 2*(Math.cos((Math.PI*anguloÎ±)/180));  
    var diagonald4 = document.getElementById("resposta").value = roundNumber(diagonald4, 3);   
    var diagonald5 =  Math.sqrt(2 - 2*(Math.cos((Math.PI*anguloÎ±)/180))); 
    var diagonald5 = document.getElementById("resposta").value = roundNumber(diagonald5, 3);   
   
     document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 22px;'>A diagonal <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1> do losango Ã©: <br> <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>2 âˆ’ 2 âˆ™ cos(Î±)</a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1> =  "+ladoa+" âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>2 âˆ’ 2 âˆ™ cos("+anguloÎ±+"Â°)</a1> <br>  <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1> =  "+ladoa+" âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>2 âˆ’ 2 âˆ™ "+diagonald2+"</a1> <br>   <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1> =  "+ladoa+" âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>2 âˆ’ "+diagonald3+"</a1> <br>  <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1> =  "+ladoa+" âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>"+diagonald4+"</a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1> =  "+ladoa+" âˆ™ "+diagonald5+" <br>  <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = <a1 style='color: #FF0000'> "+diagonald1+"&nbsp; </a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>  </div> <hr><h1 class='logomarca'> BpW </h1>";
     
      document.losango.ladoa.focus();
      document.losango.ladoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** ********************************* Diagonal d2: (d2 = a . âˆš(2 - 2 . cos Î±))  ****************************************  **/  
    if (a === "diagonald2") { 
      var ladoa = eval(document.losango.ladoa.value.replace(",",".").replace(/ /g,"")); 	 
      var anguloÎ² = eval(document.losango.anguloÎ².value.replace(",",".").replace(/ /g,"")); 		
      
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.losango.ladoa.focus();
          document.losango.ladoa.select();  
      return false;
   }  
       if ((anguloÎ² < 0) || isNaN(anguloÎ²) || anguloÎ² == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.losango.anguloÎ².focus();
          document.losango.anguloÎ².select();  
      return false;
   }     
    
   try {
    var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2); 	 
    var anguloÎ² = document.getElementById("resposta").value = roundNumber(anguloÎ², 3); 	 
    var diagonald1 = ladoa * Math.sqrt(2 - 2*(Math.cos((Math.PI*anguloÎ²)/180))); 
    var diagonald1 = document.getElementById("resposta").value = roundNumber(diagonald1, 2); 	   
    var diagonald2 =  Math.cos((Math.PI*anguloÎ²)/180);
    var diagonald2 = document.getElementById("resposta").value = roundNumber(diagonald2, 3); 	   
    var diagonald3 =  2*(Math.cos((Math.PI*anguloÎ²)/180)); 
    var diagonald3 = document.getElementById("resposta").value = roundNumber(diagonald3, 3); 	   
    var diagonald4 =  2 - 2*(Math.cos((Math.PI*anguloÎ²)/180)); 
    var diagonald4 = document.getElementById("resposta").value = roundNumber(diagonald4, 3); 	   
    var diagonald5 =  Math.sqrt(2 - 2*(Math.cos((Math.PI*anguloÎ²)/180))); 
    var diagonald5 = document.getElementById("resposta").value = roundNumber(diagonald5, 3); 	   
   
     document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 22px;'>A diagonal <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1> do losango Ã©: <br> <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1> = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>2 âˆ’ 2 âˆ™ cos(Î±)</a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1> =  "+ladoa+" âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>2 âˆ’ 2 âˆ™ cos("+anguloÎ²+"Â°)</a1> <br>  <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1> =  "+ladoa+" âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>2 âˆ’ 2 âˆ™ "+diagonald2+"</a1> <br>   <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1> =  "+ladoa+" âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>2 âˆ’ "+diagonald3+"</a1> <br>  <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1> =  "+ladoa+" âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>"+diagonald4+"</a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1> =  "+ladoa+" âˆ™ "+diagonald5+" <br>  <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1> = <a1 style='color: #FF0000'> "+diagonald1+"&nbsp; </a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>  </div><hr><h1 class='logomarca'> BpW </h1>";
     
      document.losango.ladoa.focus();
      document.losango.ladoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  }
  
  
  
  /***###########################################  POLÃGONO REGULAR  ###########################################      **/
  
  function poligonoRegular2() {
    var a = document.forms["poligonoRegular"]["poligonoRegular_type"].value;
  /** *************   AREA (A =(n.aÂ².cotg PI/n)/4   ***********************  **/  
   if (a === "area") {
      document.getElementById("raio_maior").disabled = true;
      document.getElementById("raio_maior").value ="";
      document.getElementById("raio_menor").disabled = true;
      document.getElementById("raio_menor").value ="";
      document.getElementById("diagonais").disabled = true;	
      document.getElementById("diagonais").value ="";		
       document.getElementById("ladoa").disabled = false;		
       document.getElementById("ladosn").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}
      
  /** *************   PerÃ­metro: P = n.a  ***********************  **/  
   if (a === "perimetro") {
      document.getElementById("raio_maior").disabled = true;
      document.getElementById("raio_maior").value ="";
      document.getElementById("raio_menor").disabled = true;
      document.getElementById("raio_menor").value ="";
      document.getElementById("diagonais").disabled = true;	
      document.getElementById("diagonais").value ="";		
       document.getElementById("ladoa").disabled = false;		
       document.getElementById("ladosn").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}
      
  /** *************   Raio maior R: R = a/(2.sen(PI/n)  ***********************  **/  
   if (a === "raio_maior") {
      document.getElementById("raio_maior").disabled = true;
      document.getElementById("raio_maior").value ="";
      document.getElementById("raio_menor").disabled = true;
      document.getElementById("raio_menor").value ="";
      document.getElementById("diagonais").disabled = true;	
      document.getElementById("diagonais").value ="";		
       document.getElementById("ladoa").disabled = false;		
       document.getElementById("ladosn").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /** *************   apÃ³tema r: r = a/(2.sen(PI/n)  ***********************  **/  
   if (a === "raio_menor") {
      document.getElementById("raio_maior").disabled = true;
      document.getElementById("raio_maior").value ="";
      document.getElementById("raio_menor").disabled = true;
      document.getElementById("raio_menor").value ="";
      document.getElementById("diagonais").disabled = true;	
      document.getElementById("diagonais").value ="";		
       document.getElementById("ladoa").disabled = false;		
       document.getElementById("ladosn").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /** *************   Lado a:   a = 2.R.sen(PI/n)  ***********************  **/  
   if (a === "ladoa") {
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value ="";
      document.getElementById("raio_menor").disabled = true;
      document.getElementById("raio_menor").value ="";
      document.getElementById("diagonais").disabled = true;	
      document.getElementById("diagonais").value ="";		
      document.getElementById("raio_maior").disabled = false;		
       document.getElementById("ladosn").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /** *************   Lado a:   a = 2.r.tg(PI/n)  ***********************  **/  
   if (a === "ladoa1") {
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value ="";
      document.getElementById("raio_maior").disabled = true;
      document.getElementById("raio_maior").value ="";
      document.getElementById("diagonais").disabled = true;	
      document.getElementById("diagonais").value ="";		
      document.getElementById("raio_menor").disabled = false;		
       document.getElementById("ladosn").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /** *************   CÃ¡lculo do nÃºmero de diagonais: D = n(n-3)/2   ***********************  **/  
   if (a === "diagonais") {
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value ="";
      document.getElementById("raio_maior").disabled = true;
      document.getElementById("raio_maior").value ="";
      document.getElementById("raio_menor").disabled = true;	
      document.getElementById("raio_menor").value ="";
      document.getElementById("diagonais").disabled = true;	
      document.getElementById("diagonais").value ="";		
       document.getElementById("ladosn").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
      
  /** *************   NÂ° de diagonais que partem de um vÃ©rtice: D = n-3   ***********************  **/  
   if (a === "diagonaisVertice") {
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value ="";
      document.getElementById("raio_maior").disabled = true;
      document.getElementById("raio_maior").value ="";
      document.getElementById("raio_menor").disabled = true;	
      document.getElementById("raio_menor").value ="";
      document.getElementById("diagonais").disabled = true;	
      document.getElementById("diagonais").value ="";	
       document.getElementById("ladosn").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
          
  /** *************   NÂ° de lados em funÃ§Ã£o das diagonais: a:   aÂ² - 3a - 2D = 0   ***********************  **/  
   if (a === "diagonaisLado") {
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value ="";
      document.getElementById("raio_maior").disabled = true;
      document.getElementById("raio_maior").value ="";
      document.getElementById("raio_menor").disabled = true;	
      document.getElementById("raio_menor").value ="";	
       document.getElementById("ladosn").disabled = true;
      document.getElementById("ladosn").value ="";	
      document.getElementById("diagonais").disabled = false;		
      
   }
   try { 	}
       catch(e) {alert(e)}
      
  /** *************   Soma dos Ã¢ngulos internos: S= (n - 2).180   ***********************  **/  
   if (a === "somaangulos") {
      document.getElementById("raio_maior").disabled = true;
      document.getElementById("raio_maior").value ="";
      document.getElementById("raio_menor").disabled = true;
      document.getElementById("raio_menor").value ="";
      document.getElementById("diagonais").disabled = true;	
      document.getElementById("diagonais").value ="";		
      document.getElementById("ladoa").disabled = true;	
      document.getElementById("ladoa").value ="";		
       document.getElementById("ladosn").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /** *************   Ã¢ngulo interno de um polÃ­gono regular: ai= ((n - 2).180)/n   ***********************  **/  
   if (a === "Angulointerno") {
      document.getElementById("raio_maior").disabled = true;
      document.getElementById("raio_maior").value ="";
      document.getElementById("raio_menor").disabled = true;
      document.getElementById("raio_menor").value ="";
      document.getElementById("diagonais").disabled = true;	
      document.getElementById("diagonais").value ="";		
      document.getElementById("ladoa").disabled = true;	
      document.getElementById("ladoa").value ="";		
       document.getElementById("ladosn").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
          
  
  } 
   
  function poligonoRegular1() {
      
   var ddl = document.getElementById("ops");
   var selectedValue = ddl.options[ddl.selectedIndex].value;
      if (selectedValue == "")
     {
      alert("Escolha uma opÃ§Ã£o para Calcular!");
     } 	
      
    var a = document.forms["poligonoRegular"]["poligonoRegular_type"].value;
    /** ***********************************   CÃ¡lculdo da Ã¡rea: A =(n.aÂ².cotg PI/n)/4  ****************************************  **/  
    if (a === "area") { 
      var ladoa = eval(document.poligonoRegular.ladoa.value.replace(",",".").replace(/ /g,"")); 	 
      var ladosn = eval(document.poligonoRegular.ladosn.value.replace(",",".").replace(/ /g,"")); 		
      
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.poligonoRegular.ladoa.focus();
          document.poligonoRegular.ladoa.select();  
      return false;
   }  
   
       if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("NÃ£o existe polÃ­gono menor de 3 lados!! EntÃ£o, digite um valor numÃ©rico maior do que 2!!");
          document.poligonoRegular.ladosn.focus();
          document.poligonoRegular.ladosn.select();  
      return false;
   }   
    
   try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);	 
   var ladosn = document.getElementById("resposta").value = roundNumber(ladosn, 0);   
   var PoligonoRegular = (ladosn * ladoa * ladoa * (1/(Math.tan((Math.PI*(180/ladosn)/180)))))/4;
   var PoligonoRegular = document.getElementById("resposta").value = roundNumber(PoligonoRegular, 2);	 
   var Res1 = ladosn * ladoa * ladoa;
   var Res1 = document.getElementById("resposta").value = roundNumber(Res1, 2);	 
   var Res2 = (Math.tan((Math.PI*(180/ladosn)/180)));
   var Res2 = document.getElementById("resposta").value = roundNumber(Res2, 3);	 
   var Res3 =  ladoa * ladoa;
   var Res3 = document.getElementById("resposta").value = roundNumber(Res3, 2);	 
   var Res4 = (180/ladosn);
   var Res4 = document.getElementById("resposta").value = roundNumber(Res4, 2);	 
   
     document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 16px;'> A Ã¡rea do polÃ­gono regular de <a1 style='color: #FF0000'>"+ladosn+"</a1> lados Ã©: <br>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>a</a1><a1 style='font-size: 21px; font-family: times new roman;'>Â²</a1> âˆ™ cotg(180Â°/<a1 style='font-family: times new roman; font-style:italic;'>n</a1>) </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladosn+" âˆ™ ("+ladoa+")<a1 style='font-size: 21px; font-family: times new roman;'>Â²</a1> âˆ™ cotg(180Â°/"+ladosn+") </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladosn+" âˆ™ "+Res3+" âˆ™ cotg("+Res4+")Â° </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+Res1+" âˆ™ "+Res2+" </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table> A = <a1 style='color: #FF0000'> "+PoligonoRegular+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>  </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.poligonoRegular.ladoa.focus();
      document.poligonoRegular.ladoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** ********************************************  PerÃ­metro: P = a.n  ****************************************  **/  
  
    if (a === "perimetro") { 
      var ladoa = eval(document.poligonoRegular.ladoa.value.replace(",",".").replace(/ /g,"")); 	 
      var ladosn = eval(document.poligonoRegular.ladosn.value.replace(",",".").replace(/ /g,"")); 		
      
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.poligonoRegular.ladoa.focus();
          document.poligonoRegular.ladoa.select();  
      return false;
   }  
       if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("NÃ£o existe polÃ­gono menor de 3 lados!! EntÃ£o, digite um valor numÃ©rico maior do que 2!!");
          document.poligonoRegular.ladosn.focus();
          document.poligonoRegular.ladosn.select();  
      return false;
   }  
   
   try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);	 
   var ladosn = document.getElementById("resposta").value = roundNumber(ladosn, 0);    
   var perimetro = ladosn * ladoa ;
   var perimetro = document.getElementById("resposta").value = roundNumber(perimetro, 2);	 
   
     document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>O perÃ­metro do polÃ­gono regular de <a1 style='color: #FF0000'>"+ladosn+"</a1> lados Ã©: <br> P = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>n</a1> = "+ladoa+" âˆ™ "+ladosn+" <br> P = <a1 style='color: #FF0000'> "+perimetro+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.poligonoRegular.ladoa.focus();
      document.poligonoRegular.ladoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
    /** *************************************   CÃ¡lculdo do Raio R: R =(a/(2.sen(PI/n)  ****************************************  **/  
    if (a === "raio_maior") {
      var ladoa = eval(document.poligonoRegular.ladoa.value.replace(",",".").replace(/ /g,"")); 	 
      var ladosn = eval(document.poligonoRegular.ladosn.value.replace(",",".").replace(/ /g,"")); 		
      
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.poligonoRegular.ladoa.focus();
          document.poligonoRegular.ladoa.select();  
      return false;
   }  
       if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("NÃ£o existe polÃ­gono menor de 3 lados!! EntÃ£o, digite um valor numÃ©rico maior do que 2!!");
          document.poligonoRegular.ladosn.focus();
          document.poligonoRegular.ladosn.select();  
      return false;
   }
  
   try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);	 
   var ladosn = document.getElementById("resposta").value = roundNumber(ladosn, 0);     
   var raio_maior = ladoa/(2 * ((Math.sin((Math.PI*(180/ladosn)/180)))));
   var raio_maior = document.getElementById("resposta").value = roundNumber(raio_maior, 2);	 
   var raio_maior2 = (180/ladosn);
   var raio_maior2 = document.getElementById("resposta").value = roundNumber(raio_maior2, 2);	 
   var raio_maior3 = (Math.sin((Math.PI*(180/ladosn)/180)));
   var raio_maior3 = document.getElementById("resposta").value = roundNumber(raio_maior3, 3);	 
   var raio_maior4 = 2*(Math.sin((Math.PI*(180/ladosn)/180))); 
   var raio_maior4 = document.getElementById("resposta").value = roundNumber(raio_maior4, 3);	 
   
     document.getElementById('resposta').innerHTML ="<hr> O raio R do polÃ­gono regular inscrito numa circunferÃªncia Ã©: <br> <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> R &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman;'> 2 âˆ™ sen(180Â°/<a1 style='font-family: times new roman; font-style:italic;'>n</a1>) </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> R &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladoa+" </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman;'> 2 âˆ™ sen(180Â°/"+ladosn+") </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> R &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladoa+" </td></tr><tr><td style='text-align:center;'> 2 âˆ™ sen("+raio_maior2+"Â°) </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> R &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> "+ladoa+" </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'>  "+ladoa+" </td></tr> <tr> <td> 2 âˆ™ "+raio_maior3+" </td><td> "+raio_maior4+" </td> </tr></tbody></table></div>   R = <a1 style='color: #FF0000'> "+raio_maior+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1> <hr><h1 class='logomarca'> BpW </h1> " 
     
      document.poligonoRegular.ladoa.focus();
      document.poligonoRegular.ladoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
    /** **************************************   CÃ¡lculo da apÃ³tema r:   r =(a/(2.tg(PI/n)  ****************************************  **/  
    if (a === "raio_menor") { 
      var ladoa = eval(document.poligonoRegular.ladoa.value.replace(",",".").replace(/ /g,"")); 	 
      var ladosn = eval(document.poligonoRegular.ladosn.value.replace(",",".").replace(/ /g,"")); 		
      
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.poligonoRegular.ladoa.focus();
          document.poligonoRegular.ladoa.select();  
      return false;
   }  
       if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("NÃ£o existe polÃ­gono menor de 3 lados!! EntÃ£o, digite um valor numÃ©rico maior do que 2!!");
          document.poligonoRegular.ladosn.focus();
          document.poligonoRegular.ladosn.select();  
      return false;
   }  
  
   try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);	 
   var ladosn = document.getElementById("resposta").value = roundNumber(ladosn, 0);     
   var raio_menor = ladoa/(2 * ((Math.tan((Math.PI*(180/ladosn)/180)))));
   var raio_menor = document.getElementById("resposta").value = roundNumber(raio_menor, 2);	  
   var raio_menor2 = (180/ladosn);
   var raio_menor2 = document.getElementById("resposta").value = roundNumber(raio_menor2, 2); 
   var raio_menor3 = (Math.tan((Math.PI*(180/ladosn)/180)));
   var raio_menor3 = document.getElementById("resposta").value = roundNumber(raio_menor3, 3); 
   var raio_menor4 = 2*(Math.tan((Math.PI*(180/ladosn)/180))); 
   var raio_menor4 = document.getElementById("resposta").value = roundNumber(raio_menor4, 3); 
   
     document.getElementById('resposta').innerHTML ="<hr> A apÃ³tema <a1 style='font-family: times new roman; font-style:italic;'>r</a1> do polÃ­gono regular Ã©: <br> <div style='line-height: 15px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>r</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman;'> 2 âˆ™ tg(180Â°/<a1 style='font-family: times new roman; font-style:italic;'><a1 style='font-family: times new roman; font-style:italic;'>n</a1></a1>) </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>r</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladoa+" </td></tr><tr><td style='text-align:center;'> 2 âˆ™ tg(180Â°/"+ladosn+") </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>r</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladoa+" </td></tr><tr><td style='text-align:center;'> 2 âˆ™ tg("+raio_menor2+"Â°) </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>r</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> "+ladoa+" </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladoa+" </td></tr> <tr> <td> 2 âˆ™ "+raio_menor3+" </td><td> "+raio_menor4+" </td> </tr></tbody></table>  </div> <a1 style='font-family: times new roman; font-style:italic;'>r</a1> = <a1 style='color: #FF0000'> "+raio_menor+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1> <hr><h1 class='logomarca'> BpW </h1> " 
     
      document.poligonoRegular.ladoa.focus();
      document.poligonoRegular.ladoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
    /** ***********************************   CÃ¡lculdo do Lado a: a = R.2.sen(PI/n)  ****************************************  **/  
    if (a === "ladoa") { 
      var raio_maior = eval(document.poligonoRegular.raio_maior.value.replace(",",".").replace(/ /g,"")); 	 
      var ladosn = eval(document.poligonoRegular.ladosn.value.replace(",",".").replace(/ /g,"")); 		
      
       if ((raio_maior < 0) || isNaN(raio_maior) || raio_maior == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.poligonoRegular.raio_maior.focus();
          document.poligonoRegular.raio_maior.select();  
      return false;
   }  
       if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("NÃ£o existe polÃ­gono menor de 3 lados!! EntÃ£o, digite um valor numÃ©rico maior do que 2!!");
          document.poligonoRegular.ladosn.focus();
          document.poligonoRegular.ladosn.select();  
      return false;
   }  
    
   try {
   var raio_maior = document.getElementById("resposta").value = roundNumber(raio_maior, 2);	 
   var ladosn = document.getElementById("resposta").value = roundNumber(ladosn, 0);    
   var ladoa = 2 * raio_maior * ((Math.sin((Math.PI*(180/ladosn)/180))));
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2); 
   var ladoa2 = (180/ladosn);
   var ladoa2 = document.getElementById("resposta").value = roundNumber(ladoa2, 2);  
   var ladoa3 = 2 * raio_maior; 
   var ladoa3 = document.getElementById("resposta").value = roundNumber(ladoa3, 2);  
   var ladoa4 = (Math.sin((Math.PI*(180/ladosn)/180)));
   var ladoa4 = document.getElementById("resposta").value = roundNumber(ladoa4, 3);  
   
     document.getElementById('resposta').innerHTML ="<hr>  O lado <a1 style='font-family: times new roman; font-style:italic;'>a</a1> do polÃ­gono regular  Ã©: <br> <div style='line-height: 24px;'><a1 style='font-family: times new roman; font-style:italic;'> a </a1> = 2 âˆ™ R âˆ™ sen(180Â°/<a1 style='font-family: times new roman; font-style:italic;'>n</a1>) <br> <a1 style='font-family: times new roman; font-style:italic;'> a </a1> = 2 âˆ™ "+raio_maior+" âˆ™ sen(180Â°/"+ladosn+") <br> <a1 style='font-family: times new roman; font-style:italic;'> a </a1> = "+ladoa3+" âˆ™ sen("+ladoa2+"Â°) <br> <a1 style='font-family: times new roman; font-style:italic;'> a </a1> = "+ladoa3+" âˆ™ "+ladoa4+" <br>  <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = <a1 style='color: #FF0000'> "+ladoa+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.poligonoRegular.ladosn.focus();
      document.poligonoRegular.ladosn.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
    /** **************************************   CÃ¡lculo do Lado a: a = R.2.sen(PI/n)  ****************************************  **/  
    if (a === "ladoa1") { 
      var raio_menor = eval(document.poligonoRegular.raio_menor.value.replace(",",".").replace(/ /g,"")); 	 
      var ladosn = eval(document.poligonoRegular.ladosn.value.replace(",",".").replace(/ /g,"")); 		
      
       if ((raio_menor < 0) || isNaN(raio_menor) || raio_menor == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.poligonoRegular.raio_menor.focus();
          document.poligonoRegular.raio_menor.select();  
      return false;
   }  
       if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("NÃ£o existe polÃ­gono menor de 3 lados!! EntÃ£o, digite um valor numÃ©rico maior do que 2!!");
          document.poligonoRegular.ladosn.focus();
          document.poligonoRegular.ladosn.select();  
      return false;
   } 
   
   try {
   var raio_menor = document.getElementById("resposta").value = roundNumber(raio_menor, 2);	 
   var ladosn = document.getElementById("resposta").value = roundNumber(ladosn, 0);    
   var ladoa = 2 * raio_menor * ((Math.tan((Math.PI*(180/ladosn)/180))));
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2); 
   var ladoa2 = (180/ladosn);
   var ladoa2 = document.getElementById("resposta").value = roundNumber(ladoa2, 2);  
   var ladoa3 = 2 * raio_menor; 
   var ladoa3 = document.getElementById("resposta").value = roundNumber(ladoa3, 2);  
   var ladoa4 = (Math.tan((Math.PI*(180/ladosn)/180)));
   var ladoa4 = document.getElementById("resposta").value = roundNumber(ladoa4, 3);  
   
     document.getElementById('resposta').innerHTML ="<hr> O lado <a1 style='font-family: times new roman; font-style:italic;'>a</a1> do polÃ­gono regular  Ã©: <br> <div style='line-height: 24px;'> <a1 style='font-family: times new roman; font-style:italic;'> a </a1> = 2 âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>r</a1> âˆ™ tg(180Â°/<a1 style='font-family: times new roman; font-style:italic;'>n</a1>) <br> <a1 style='font-family: times new roman; font-style:italic;'> a </a1> = 2 âˆ™ "+raio_menor+" âˆ™ tg(180Â°/"+ladosn+") <br> <a1 style='font-family: times new roman; font-style:italic;'> a </a1> = "+ladoa3+" âˆ™ tg("+ladoa2+"Â°) <br> <a1 style='font-family: times new roman; font-style:italic;'> a </a1> = "+ladoa3+" âˆ™ "+ladoa4+" <br>  <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = <a1 style='color: #FF0000'> "+ladoa+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.poligonoRegular.ladosn.focus();
      document.poligonoRegular.ladosn.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
    /** ***********************************  CÃ¡lculo do nÃºmero de diagonais: D = n(n-3)/2  ****************************************  **/  
    if (a === "diagonais") { 
      var ladosn = eval(document.poligonoRegular.ladosn.value.replace(",",".").replace(/ /g,"")); 		
      
       if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("NÃ£o existe polÃ­gono menor de 3 lados!! EntÃ£o, digite um valor numÃ©rico maior do que 2!!");
          document.poligonoRegular.ladosn.focus();
          document.poligonoRegular.ladosn.select();  
      return false;
   } 
   
   try {
   var ladosn = document.getElementById("resposta").value = roundNumber(ladosn, 0);     
   var diagonais = (ladosn*(ladosn-3))/2;
   var diagonais = document.getElementById("resposta").value = roundNumber(diagonais, 2);  
   var diagonais1 = ladosn-3; 
   var diagonais2 = (ladosn-3) * ladosn; 
   
     document.getElementById('resposta').innerHTML ="<hr> O nÃºmero de diagonais D de um polÃ­gono regular de <a1 style='color: #FF0000'>"+ladosn.toFixed(0)+"</a1> lados Ã©: <br>  <div style='line-height: 16px;'>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> D &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1>(<a1 style='font-family: times new roman; font-style:italic;'>n</a1> - 3) </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladosn+"("+ladosn+" - 3) </td></tr> <tr> <td> 2 </td><td> 2 </td> </tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> D &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladosn+" âˆ™ "+diagonais1+" </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> D &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>"+diagonais2+" </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table> D = <a1 style='color: #FF0000'> "+diagonais+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>diagonais</a1>  </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.poligonoRegular.ladosn.focus();
      document.poligonoRegular.ladosn.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** *************   NÂ° de diagonais que partem de um vÃ©rtice: D = n-3   ***********************  **/  
    if (a === "diagonaisVertice") { 
      var ladosn = eval(document.poligonoRegular.ladosn.value.replace(",",".").replace(/ /g,"")); 		
      
       if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("NÃ£o existe polÃ­gono menor de 3 lados!! EntÃ£o, digite um valor numÃ©rico maior do que 2!!");
          document.poligonoRegular.ladosn.focus();
          document.poligonoRegular.ladosn.select();  
      return false;
   } 
     
   try {
   var ladosn = document.getElementById("resposta").value = roundNumber(ladosn, 0);     
   var diagonaisVertice = ladosn-3;
   var diagonaisVertice = document.getElementById("resposta").value = roundNumber(diagonaisVertice, 2);  
    
     document.getElementById('resposta').innerHTML ="<hr>  O nÃºmero de diagonais D que partem de um vÃ©rtice polÃ­gono regular de <a1 style='color: #FF0000'>"+ladosn+"</a1> lados Ã©: <br> <div style='line-height: 22px;'> D = <a1 style='font-family: times new roman; font-style:italic;'>n</a1> âˆ’ 3 = "+ladosn+" âˆ’ 3  <br>    D = <a1 style='color: #FF0000'> "+diagonaisVertice+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>diagonais</a1>  </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.poligonoRegular.ladosn.focus();
      document.poligonoRegular.ladosn.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** *************   NÂ° de lados em funÃ§Ã£o das diagonais: a:   nÂ² - 3n - 2D = 0   ***********************  **/  
    if (a === "diagonaisLado") { 
      var diagonais = eval(document.poligonoRegular.diagonais.value.replace(",",".").replace(/ /g,"")); 		
      
       if ((diagonais < 0) || isNaN(diagonais) || diagonais == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.poligonoRegular.diagonais.focus();
          document.poligonoRegular.diagonais.select();  
      return false;
   } 
   
   try {
   var diagonais = document.getElementById("resposta").value = roundNumber(diagonais, 2);   	 
   var delta = 9 - 4*1*(-2*diagonais);
   var delta = document.getElementById("resposta").value = roundNumber(delta, 2);  
   var delta2 = Math.sqrt(9 - 4*1*(-2*diagonais));
   var delta2 = document.getElementById("resposta").value = roundNumber(delta2, 2);  
   var diagonaisLado = (3 + Math.sqrt(9 - 4*1*(-2*diagonais)))/2;
   var diagonaisLado = document.getElementById("resposta").value = roundNumber(diagonaisLado, 2);   
   var diagonaisLado2 = (3 - Math.sqrt(9 - 4*1*(-2*diagonais)))/2;
   var diagonaisLado2 = document.getElementById("resposta").value = roundNumber(diagonaisLado2, 2);  
   
     document.getElementById('resposta').innerHTML ="<hr>  O nÃºmero de lados <a1 style='font-family: times new roman; font-style:italic;'>n</a1> do polÃ­gono regular Ã©: <br> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> D &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1>(<a1 style='font-family: times new roman; font-style:italic;'>n</a1> âˆ’ 3) </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>  <div style='line-height: 14px;'><a1 style='font-family: times new roman; font-style:italic;'>n</a1>Â² âˆ’ 3<a1 style='font-family: times new roman; font-style:italic;'>n</a1> âˆ’ 2D = 0. <br><br>  Î” = <a1 style='font-family: times new roman; font-style:italic;'>b</a1>Â² - 4<a1 style='font-family: times new roman; font-style:italic;'>ac</a1> = (âˆ’3)Â² âˆ’ 4âˆ™1âˆ™(âˆ’2âˆ™"+diagonais+") = "+delta+" <br><br>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> âˆ’b Â± âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>Î”</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> âˆ’(âˆ’3) Â± âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+delta+"</a1> </td></tr> <tr> <td> 2 âˆ™ 1 </td><td> 2 </td> </tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> 3 Â± "+delta2+" </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>   <br>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>n'</a1> &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> 3 + "+delta2+" </td>  <td rowspan='2'> &nbsp;=&nbsp; </td>  <td rowspan='2'> <a1 style='color: #FF0000'> "+diagonaisLado+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>lados</a1> </td></tr> <tr> <td> 2 </td> </tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>n'</a1> &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> 3 âˆ’ "+delta2+" </td>  <td rowspan='2'> &nbsp;=&nbsp; </td>  <td rowspan='2'> <a1 style='color: #FF0000'> "+diagonaisLado2+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>(NÃ£o convÃ©m)</a1>&nbsp; </td></tr> <tr> <td> 2 </td> </tr></tbody></table> </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.poligonoRegular.diagonais.focus();
      document.poligonoRegular.diagonais.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** ********************************   Soma dos Ã¢ngulos internos: S= (n - 2).180   ************************************  **/  
    if (a === "somaangulos") { 
      var ladosn = eval(document.poligonoRegular.ladosn.value.replace(",",".").replace(/ /g,"")); 		
      
       if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("NÃ£o existe polÃ­gono menor de 3 lados!! EntÃ£o, digite um valor numÃ©rico maior do que 2!!");
          document.poligonoRegular.ladosn.focus();
          document.poligonoRegular.ladosn.select();  
      return false;
   } 
  
   try {
   var ladosn = document.getElementById("resposta").value = roundNumber(ladosn, 0);  	 
   var somaangulos = (ladosn - 2)* 180 ;
   var somaangulos = document.getElementById("resposta").value = roundNumber(somaangulos, 2);  
   var somaangulos2 = (ladosn - 2) ;
   var somaangulos2 = document.getElementById("resposta").value = roundNumber(somaangulos2, 2);   
   
     document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 22px;'> A soma dos Ã¢ngulos internos de um polÃ­gono convexo Ã©: <br>  S<a1 style='font-size: 10px; font-family: times new roman;'>i</a1> = (<a1 style='font-family: times new roman; font-style:italic;'>n</a1> âˆ’ 2) âˆ™ 180Â°  <br>  S<a1 style='font-size: 10px; font-family: times new roman;'>i</a1> =  ("+ladosn+" âˆ’ 2) âˆ™ 180Â°  <br>  S<a1 style='font-size: 10px; font-family: times new roman;'>i</a1> = "+ladosn+" âˆ™ 180Â° <br>  S<a1 style='font-size: 10px; font-family: times new roman;'>i</a1> =  <a1 style='color: #FF0000'> "+somaangulos+"</a1>"+"<a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>Â°</a1>  </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.poligonoRegular.ladosn.focus();
      document.poligonoRegular.ladosn.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** *************   Ã¢ngulo interno de um polÃ­gono regular: ai= ((n - 2).180)/n   ***********************  **/  
    if (a === "Angulointerno") { 
      var ladosn = eval(document.poligonoRegular.ladosn.value.replace(",",".").replace(/ /g,"")); 		
      
       if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("NÃ£o existe polÃ­gono menor de 3 lados!! EntÃ£o, digite um valor numÃ©rico maior do que 2!!");
          document.poligonoRegular.ladosn.focus();
          document.poligonoRegular.ladosn.select();  
      return false;
   } 
   
   try {
   var ladosn = document.getElementById("resposta").value = roundNumber(ladosn, 0);  	 
   var anguloInterno = ((ladosn - 2)* 180)/ladosn ;
   var anguloInterno = document.getElementById("resposta").value = roundNumber(anguloInterno, 2);   
   var anguloInterno2 = (ladosn - 2) ;
   var anguloInterno2 = document.getElementById("resposta").value = roundNumber(anguloInterno2, 2);  
   var anguloInterno3 = (ladosn - 2)* 180;
   var anguloInterno3 = document.getElementById("resposta").value = roundNumber(anguloInterno3, 2);  
   
     document.getElementById('resposta').innerHTML ="<hr> O Ã¢ngulo interno <a1 style='font-family: times new roman; font-size: 21px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman;'>i</a1> de um polÃ­gono regular Ã©: <br> <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;font-size: 21px;'>a</a1><a1 style='font-size: 10px; font-family: times new roman;'>i</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> (<a1 style='font-family: times new roman; font-style:italic;'>n</a1> - 2) âˆ™ 180Â° </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> ("+ladosn+" - 2) âˆ™ 180Â° </td></tr> <tr> <td> <a1 style='font-family: times new roman; font-style:italic;'>n</a1> </td><td> "+ladosn+" </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;font-size: 21px;'>a</a1><a1 style='font-size: 10px; font-family: times new roman;'>i</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> "+anguloInterno2+" âˆ™ 180Â° </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+anguloInterno3+" </td></tr> <tr> <td> "+ladosn+" </td><td> "+ladosn+" </td> </tr></tbody></table>  </div> <a1 style='font-family: times new roman; font-style:italic;font-size: 21px;'>a</a1><a1 style='font-size: 10px; font-family: times new roman;'>i</a1> =  <a1 style='color: #FF0000'> "+anguloInterno+"</a1>"+"<a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>Â°</a1>   <hr><h1 class='logomarca'> BpW </h1>  " 
     
      document.poligonoRegular.ladosn.focus();
      document.poligonoRegular.ladosn.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  }
  
  
  
  /***##############################################  CIRCULAR  ############################################################      **/
  
  function circular2() {
    var a = document.forms["circular"]["circular_type"].value;
  /** *************   AREA do circulo (A = PI.RÂ²)   ***********************  **/  
   if (a === "area") {
      document.getElementById("anguloÎ±").disabled = true;
      document.getElementById("anguloÎ±").value ="";
      document.getElementById("raio_menor").disabled = true;
      document.getElementById("raio_menor").value ="";
      document.getElementById("diametro").disabled = true;
      document.getElementById("diametro").value ="";	
      document.getElementById("perimetro").disabled = true;
      document.getElementById("perimetro").value ="";	
      document.getElementById("arcoL").disabled = true;
      document.getElementById("arcoL").value ="";		
       document.getElementById("raio_maior").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}
      
      
  /** *************   PerÃ­metro da circunferÃªncia (P = 2.PI.R)   ***********************  **/  
   if (a === "perimetro") {
      document.getElementById("anguloÎ±").disabled = true;
      document.getElementById("anguloÎ±").value ="";
      document.getElementById("raio_menor").disabled = true;
      document.getElementById("raio_menor").value ="";
      document.getElementById("diametro").disabled = true;
      document.getElementById("diametro").value ="";	
      document.getElementById("perimetro").disabled = true;
      document.getElementById("perimetro").value ="";	
      document.getElementById("arcoL").disabled = true;
      document.getElementById("arcoL").value ="";		
       document.getElementById("raio_maior").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}
      
  /** *************   DiÃ¢metro da circunferÃªncia (D = PI.R)   ***********************  **/  
   if (a === "diametro") {
      document.getElementById("anguloÎ±").disabled = true;
      document.getElementById("anguloÎ±").value ="";
      document.getElementById("raio_menor").disabled = true;
      document.getElementById("raio_menor").value ="";
      document.getElementById("diametro").disabled = true;
      document.getElementById("diametro").value ="";	
      document.getElementById("perimetro").disabled = true;
      document.getElementById("perimetro").value ="";	
      document.getElementById("arcoL").disabled = true;
      document.getElementById("arcoL").value ="";		
       document.getElementById("raio_maior").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
          
  /** *************   Raio da circunferÃªncia (R = D/2)   ***********************  **/  
   if (a === "raio") {
      document.getElementById("anguloÎ±").disabled = true;
      document.getElementById("anguloÎ±").value ="";
      document.getElementById("raio_menor").disabled = true;
      document.getElementById("raio_menor").value ="";
      document.getElementById("raio_maior").disabled = true;
      document.getElementById("raio_maior").value ="";	
      document.getElementById("perimetro").disabled = true;
      document.getElementById("perimetro").value ="";	
      document.getElementById("arcoL").disabled = true;
      document.getElementById("arcoL").value ="";		
       document.getElementById("diametro").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /** *************   Ãrea do setor circular (A = (Î±.PI.RÂ²)/360Â°   ***********************  **/  
   if (a === "areasetorCircular") {
      document.getElementById("raio_menor").disabled = true;
      document.getElementById("raio_menor").value ="";
      document.getElementById("diametro").disabled = true;	
      document.getElementById("diametro").value ="";
      document.getElementById("perimetro").disabled = true;
      document.getElementById("perimetro").value ="";	
      document.getElementById("arcoL").disabled = true;
      document.getElementById("arcoL").value ="";	
      
       document.getElementById("anguloÎ±").disabled = false;	
       document.getElementById("raio_maior").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /** *************   Ãrea do setor circular (A = (R.L)/2   ***********************  **/  
   if (a === "areasetorCircular2") {
      document.getElementById("raio_menor").disabled = true;
      document.getElementById("raio_menor").value ="";	
      document.getElementById("diametro").disabled = true;	
      document.getElementById("diametro").value ="";
      document.getElementById("perimetro").disabled = true;
      document.getElementById("perimetro").value ="";	
      document.getElementById("anguloÎ±").disabled = true;
      document.getElementById("anguloÎ±").value ="";		
       document.getElementById("arcoL").disabled = false;	
       document.getElementById("raio_maior").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /** *************   PerÃ­metro do setor circular (P =(PI.R.Î±)/180Â°   ***********************  **/  
   if (a === "arcoCircular") {
      document.getElementById("raio_menor").disabled = true;
      document.getElementById("raio_menor").value ="";	
      document.getElementById("diametro").disabled = true;	
      document.getElementById("diametro").value ="";
      document.getElementById("perimetro").disabled = true;
      document.getElementById("perimetro").value ="";	
      document.getElementById("arcoL").disabled = true;
      document.getElementById("arcoL").value ="";
       document.getElementById("anguloÎ±").disabled = false;	
       document.getElementById("raio_maior").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /** *************   Ãrea da coroa circular (A = PI.(RÂ² - rÂ²)   ***********************  **/  
   if (a === "areaCoroaCircular") {
      document.getElementById("anguloÎ±").disabled = true;
      document.getElementById("anguloÎ±").value ="";	
      document.getElementById("diametro").disabled = true;	
      document.getElementById("diametro").value ="";
      document.getElementById("perimetro").disabled = true;
      document.getElementById("perimetro").value ="";	
      document.getElementById("arcoL").disabled = true;
      document.getElementById("arcoL").value ="";
       document.getElementById("raio_menor").disabled = false;	
       document.getElementById("raio_maior").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
      
  /** *************   Ãrea do segmento circular (A = RÂ²/2 .(PI . Î±/180Â° - sen(Î±))   ***********************  **/  
   if (a === "areaSegmentoCircular") {
      document.getElementById("raio_menor").disabled = true;
      document.getElementById("raio_menor").value ="";	
      document.getElementById("diametro").disabled = true;	
      document.getElementById("diametro").value ="";
      document.getElementById("perimetro").disabled = true;
      document.getElementById("perimetro").value ="";	
      document.getElementById("arcoL").disabled = true;
      document.getElementById("arcoL").value ="";
       document.getElementById("anguloÎ±").disabled = false;	
       document.getElementById("raio_maior").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
      
  /** *************   Corda (C = 2.R.sen(Î±/2))   ***********************  **/  
   if (a === "cordaAB") {
      document.getElementById("raio_menor").disabled = true;
      document.getElementById("raio_menor").value ="";	
      document.getElementById("diametro").disabled = true;	
      document.getElementById("diametro").value ="";
      document.getElementById("perimetro").disabled = true;
      document.getElementById("perimetro").value ="";	
      document.getElementById("arcoL").disabled = true;
      document.getElementById("arcoL").value ="";
       document.getElementById("anguloÎ±").disabled = false;	
       document.getElementById("raio_maior").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
  } 
   
  
  function circular1() {
      
   var ddl = document.getElementById("ops");
   var selectedValue = ddl.options[ddl.selectedIndex].value;
      if (selectedValue == "")
     {
      alert("Escolha uma opÃ§Ã£o para Calcular!");
     } 
     
    var a = document.forms["circular"]["circular_type"].value;
    /** *********************************************  AREA do circulo (A = PI.RÂ²)   ****************************************  **/  
    if (a === "area") { 
      var raio_maior = eval(document.circular.raio_maior.value.replace(",",".").replace(/ /g,"")); 		
      
       if ((raio_maior < 0) || isNaN(raio_maior) || raio_maior == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.circular.raio_maior.focus();
          document.circular.raio_maior.select();  
      return false;
   } 
   
   try {
   var raio_maior = document.getElementById("resposta").value = roundNumber(raio_maior, 2);	 
   var areacircular =  Math.PI * raio_maior * raio_maior ;
   var areacircular = document.getElementById("resposta").value = roundNumber(areacircular, 2); 
   var areacircular1 =  raio_maior * raio_maior ;
   var areacircular1 = document.getElementById("resposta").value = roundNumber(areacircular1, 2); 
   var areacircular2 =  raio_maior * raio_maior ; 
   var areacircular2 = document.getElementById("resposta").value = roundNumber(areacircular2, 2);  
   
     document.getElementById('resposta').innerHTML ="<hr>  A Ã¡rea do cÃ­rculo Ã©: <br> <div style='line-height: 22px;'>  A = Ï€ âˆ™ RÂ² = 3,14 âˆ™ ("+raio_maior+")Â²  <br>  A = 3,14 âˆ™ "+areacircular1+" <br> A = <a1 style='color: #FF0000'> "+areacircular+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>  <br> ou <br>  A = <a1 style='color: #FF0000'> "+areacircular2+" Ï€</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>  </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.circular.raio_maior.focus();
      document.circular.raio_maior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
    /** ************************************   PerÃ­metro da circunferÃªncia (P = 2.PI.R)    ****************************************  **/ 
    if (a === "perimetro") { 
      var raio_maior = eval(document.circular.raio_maior.value.replace(",",".").replace(/ /g,"")); 		
      
       if ((raio_maior < 0) || isNaN(raio_maior) || raio_maior == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.circular.raio_maior.focus();
          document.circular.raio_maior.select();  
      return false;
   }   
  
   try {
   var raio_maior = document.getElementById("resposta").value = roundNumber(raio_maior, 2);		 
   var perimetrocircular =  2 * Math.PI * raio_maior ;
   var perimetrocircular = document.getElementById("resposta").value = roundNumber(perimetrocircular, 2); 
   var perimetrocircular1 =  2 * raio_maior ;
   var perimetrocircular1 = document.getElementById("resposta").value = roundNumber(perimetrocircular1, 2);  
   
     document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 20px;'>O perÃ­metro da circunferÃªncia Ã©: <br>  P = 2 âˆ™ Ï€ âˆ™ R = 2 âˆ™ 3,14 âˆ™ "+raio_maior+" <br>  P = <a1 style='color: #FF0000'> "+perimetrocircular+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  <br> ou <br>  P = <a1 style='color: #FF0000'> "+perimetrocircular1+" Ï€</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.circular.raio_maior.focus();
      document.circular.raio_maior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 
  
   /** ************************************   DiÃ¢metro da circunferÃªncia (D = PI.R)   ****************************************  **/ 
    if (a === "diametro") {
      var raio_maior = eval(document.circular.raio_maior.value.replace(",",".").replace(/ /g,"")); 		
      
       if ((raio_maior < 0) || isNaN(raio_maior) || raio_maior == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.circular.raio_maior.focus();
          document.circular.raio_maior.select();  
      return false;
   } 
  
   try {
   var raio_maior = document.getElementById("resposta").value = roundNumber(raio_maior, 2);		 
   var diametrocircular =  2 * raio_maior ;
   var diametrocircular = document.getElementById("resposta").value = roundNumber(diametrocircular, 2);	
   
     document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 20px;'>O diÃ¢metro da circunferÃªncia Ã©: <br>  D = 2 âˆ™ R = 2 âˆ™ "+raio_maior+" <br>  D = <a1 style='color: #FF0000'> "+diametrocircular+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>   </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.circular.raio_maior.focus();
      document.circular.raio_maior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 
  
  /** *******************************************   DiÃ¢metro da circunferÃªncia (D = PI.R)   ***********************************  **/ 
    if (a === "raio") { 
      var diametro = eval(document.circular.diametro.value.replace(",",".").replace(/ /g,"")); 		
      
       if ((diametro < 0) || isNaN(diametro) || diametro == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.circular.diametro.focus();
          document.circular.diametro.select();  
      return false;
   }   
  
   try {
   var diametro = document.getElementById("resposta").value = roundNumber(diametro, 2);		 
   var diametrocircular =  diametro/2 ;
   var diametrocircular = document.getElementById("resposta").value = roundNumber(diametrocircular, 2);	 
   
     document.getElementById('resposta').innerHTML ="<hr>  O diÃ¢metro da circunferÃªncia Ã©: <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>R &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'>D</td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'>"+diametro+"</td></tr> <tr> <td>2</td><td>2</td> </tr></tbody></table> </div>  D = <a1 style='color: #FF0000'> "+diametrocircular+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  <hr><h1 class='logomarca'> BpW </h1>  " 
     
      document.circular.diametro.focus();
      document.circular.diametro.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 
  
  /** *********************** Ãrea do setor circular (A = (Î±.PI.RÂ²)/360Â°  ***************************************  **/  
    if (a === "areasetorCircular") { 
      var anguloÎ± = eval(document.circular.anguloÎ±.value.replace(",",".").replace(/ /g,"")); 
      var raio_maior = eval(document.circular.raio_maior.value.replace(",",".").replace(/ /g,"")); 	
      
       if ((anguloÎ± < 0) || isNaN(anguloÎ±) || anguloÎ± == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.circular.anguloÎ±.focus();
          document.circular.anguloÎ±.select();  
      return false;
   }  
        if ((raio_maior < 0) || isNaN(raio_maior) || raio_maior == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.circular.raio_maior.focus();
          document.circular.raio_maior.select();  
      return false;
   }  
    
   try {
   var anguloÎ± = document.getElementById("resposta").value = roundNumber(anguloÎ±, 2);	
   var raio_maior = document.getElementById("resposta").value = roundNumber(raio_maior, 2);	 
   var setorCircular =  (anguloÎ± * Math.PI * raio_maior * raio_maior)/360 ;
   var setorCircular = document.getElementById("resposta").value = roundNumber(setorCircular, 2);	 
   var setorCircular1 =  (anguloÎ± * Math.PI) ;
   var setorCircular1 = document.getElementById("resposta").value = roundNumber(setorCircular1, 2);	  
   var setorCircular2 =  (raio_maior * raio_maior) ;
   var setorCircular2 = document.getElementById("resposta").value = roundNumber(setorCircular2, 2);	  
   var setorCircular3 =  (anguloÎ± * Math.PI * raio_maior * raio_maior) ;
   var setorCircular3 = document.getElementById("resposta").value = roundNumber(setorCircular3, 2);	  
   var setorCircular4 =  (anguloÎ± * raio_maior * raio_maior)/360 ; 
   var setorCircular4 = document.getElementById("resposta").value = roundNumber(setorCircular4, 2);	  
   
     document.getElementById('resposta').innerHTML ="<hr>  A Ã¡rea do setor circular Ã©: <br> <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> Î± âˆ™ Ï€ âˆ™ RÂ²  </td></tr><tr><td style='text-align:center;'> 360Â° </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+anguloÎ±+"Â° âˆ™ 3,14 âˆ™ ("+raio_maior+")Â²   </td></tr><tr><td style='text-align:center;'> 360Â° </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+setorCircular1+" âˆ™ "+setorCircular2+" </td></tr><tr><td style='text-align:center;'> 360Â° </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+setorCircular3+" </td></tr><tr><td style='text-align:center;'> 360Â° </td></tr></tbody></table> </div>  A = <a1 style='color: #FF0000'> "+setorCircular+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  <br> ou <br>  A = <a1 style='color: #FF0000'> "+setorCircular4+" Ï€</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1> <hr><h1 class='logomarca'> BpW </h1> " 
     
      document.circular.raio_maior.focus();
      document.circular.raio_maior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 
  
  /** **************************  Ãrea do setor circular (A = (R.L)/2   ******************************************  **/  
    if (a === "areasetorCircular2") { 
      var arcoL = eval(document.circular.arcoL.value.replace(",",".").replace(/ /g,"")); 
      var raio_maior = eval(document.circular.raio_maior.value.replace(",",".").replace(/ /g,"")); 	
      
       if ((arcoL < 0) || isNaN(arcoL) || arcoL == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.circular.arcoL.focus();
          document.circular.arcoL.select();  
      return false;
   }  
        if ((raio_maior < 0) || isNaN(raio_maior) || raio_maior == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.circular.raio_maior.focus();
          document.circular.raio_maior.select();  
      return false;
   }   
  
   try {
   var arcoL = document.getElementById("resposta").value = roundNumber(arcoL, 2);	
   var raio_maior = document.getElementById("resposta").value = roundNumber(raio_maior, 2);		 
   var setorCircular =  (arcoL* raio_maior)/2 ;
   var setorCircular = document.getElementById("resposta").value = roundNumber(setorCircular, 2);	 
  
     document.getElementById('resposta').innerHTML ="<hr>  A Ã¡rea do setor circular Ã©: <br> <div style='line-height: 15px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'>R âˆ™ L </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'>"+raio_maior+" âˆ™ "+arcoL+"</td></tr> <tr> <td>2</td><td>2</td> </tr></tbody></table> </div> A = <a1 style='color: #FF0000'> "+setorCircular+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>Â²  <hr><h1 class='logomarca'> BpW </h1> " 
     
      document.circular.raio_maior.focus();
      document.circular.raio_maior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 
  
  /** ************************ PerÃ­metro do setor circular (P =(PI.R.Î±)/180Â°   ************************************  **/  
    if (a === "arcoCircular") { 
      var anguloÎ± = eval(document.circular.anguloÎ±.value.replace(",",".").replace(/ /g,"")); 
      var raio_maior = eval(document.circular.raio_maior.value.replace(",",".").replace(/ /g,"")); 	
      
       if ((anguloÎ± < 0) || isNaN(anguloÎ±) || anguloÎ± == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.circular.anguloÎ±.focus();
          document.circular.anguloÎ±.select();  
      return false;
   }  
        if ((raio_maior < 0) || isNaN(raio_maior) || raio_maior == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.circular.raio_maior.focus();
          document.circular.raio_maior.select();  
      return false;
   }    
  
   try {
   var anguloÎ± = document.getElementById("resposta").value = roundNumber(anguloÎ±, 2);	
   var raio_maior = document.getElementById("resposta").value = roundNumber(raio_maior, 2);		 
   var arcoLCircular =  (Math.PI * raio_maior * anguloÎ±)/180 ;
   var arcoLCircular = document.getElementById("resposta").value = roundNumber(arcoLCircular, 2); 
   var arcoLCircular1 = (raio_maior * anguloÎ±)/180 ; 
   var arcoLCircular1 = document.getElementById("resposta").value = roundNumber(arcoLCircular1, 2);  
  
     document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 15px;'> O perÃ­metro do setor circular Ã©: <br>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>L &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'>Ï€ âˆ™ R âˆ™ Î± </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'>3,14 âˆ™ "+raio_maior+" âˆ™ "+anguloÎ±+"</td></tr> <tr> <td>180</td><td>180</td> </tr></tbody></table></div> L = <a1 style='color: #FF0000'> "+arcoLCircular+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1> <br> ou <br>  L = <a1 style='color: #FF0000'> "+arcoLCircular1+" Ï€ </a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1> <hr><h1 class='logomarca'> BpW </h1> " 
     
      document.circular.raio_maior.focus();
      document.circular.raio_maior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 
  
  /** ***********************************************   Ãrea da coroa circular (A = PI.(RÂ² - rÂ²)   ***********************  **/ 
    if (a === "areaCoroaCircular") { 
      var raio_menor = eval(document.circular.raio_menor.value.replace(",",".").replace(/ /g,"")); 
      var raio_maior = eval(document.circular.raio_maior.value.replace(",",".").replace(/ /g,"")); 	
      
       if ((raio_menor < 0) || isNaN(raio_menor) || raio_menor == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.circular.raio_menor.focus();
          document.circular.raio_menor.select();  
      return false;
   }  
        if ((raio_maior < 0) || isNaN(raio_maior) || raio_maior == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.circular.raio_maior.focus();
          document.circular.raio_maior.select();  
      return false;
   }    
  
   try {
   var raio_menor = document.getElementById("resposta").value = roundNumber(raio_menor, 2);	
   var raio_maior = document.getElementById("resposta").value = roundNumber(raio_maior, 2);		 
   var areaCoroaCircular =  Math.PI * (raio_maior *raio_maior - raio_menor * raio_menor) ;
   var areaCoroaCircular = document.getElementById("resposta").value = roundNumber(areaCoroaCircular, 2);	 
   var areaCoroaCircular1 = (raio_maior * raio_maior) ; 
   var areaCoroaCircular1 = document.getElementById("resposta").value = roundNumber(areaCoroaCircular1, 2);	  
   var areaCoroaCircular2 = (raio_menor * raio_menor) ;  
   var areaCoroaCircular2 = document.getElementById("resposta").value = roundNumber(areaCoroaCircular2, 2);	  
   var areaCoroaCircular3 = (raio_maior *raio_maior - raio_menor * raio_menor) ;  
   var areaCoroaCircular3 = document.getElementById("resposta").value = roundNumber(areaCoroaCircular3, 2);	  
  
     document.getElementById('resposta').innerHTML ="<hr>  A Ã¡rea da coroa circular Ã©: <br><div style='line-height: 22px;'> A =  Ï€ âˆ™ (RÂ² - <a1 style='font-family: times new roman; font-style:italic;'>r</a1>Â²) <br> A = 3,14 âˆ™ [("+raio_maior+")Â² - ("+raio_menor+")Â²] <br> A =  3,14 âˆ™ ["+areaCoroaCircular1+" - "+areaCoroaCircular2+"] <br> A = 3,14 âˆ™ "+areaCoroaCircular3+"  <br> A = <a1 style='color: #FF0000'>"+areaCoroaCircular+" </a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>Â²<br>  ou <br>  A = <a1 style='color: #FF0000'> "+areaCoroaCircular3+" Ï€ </a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>Â² </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.circular.raio_maior.focus();
      document.circular.raio_maior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 
  
  /****************************************   Ãrea do segmento circular (A = RÂ²/2 .(PI . Î±/180Â° - sen(Î±))   ***********************  **/  
    if (a === "areaSegmentoCircular") { 
      var anguloÎ± = eval(document.circular.anguloÎ±.value.replace(",",".").replace(/ /g,"")); 
      var raio_maior = eval(document.circular.raio_maior.value.replace(",",".").replace(/ /g,"")); 	
      
       if ((anguloÎ± < 0) || isNaN(anguloÎ±) || anguloÎ± == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.circular.anguloÎ±.focus();
          document.circular.anguloÎ±.select();  
      return false;
   }  
        if ((raio_maior < 0) || isNaN(raio_maior) || raio_maior == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.circular.raio_maior.focus();
          document.circular.raio_maior.select();  
      return false;
   }   
  
   try {
   var anguloÎ± = document.getElementById("resposta").value = roundNumber(anguloÎ±, 2);	
   var raio_maior = document.getElementById("resposta").value = roundNumber(raio_maior, 2);		 
   var areaSegmentoCircular = (raio_maior * raio_maior)/2 * ((Math.PI * (anguloÎ±/180)) - (Math.sin((Math.PI*anguloÎ±)/180)));
   var areaSegmentoCircular = document.getElementById("resposta").value = roundNumber(areaSegmentoCircular, 2);	 
   var areaSegmentoCircular1 = raio_maior * raio_maior;
   var areaSegmentoCircular1 = document.getElementById("resposta").value = roundNumber(areaSegmentoCircular1, 2);	 
   var areaSegmentoCircular2 = Math.PI * anguloÎ±;
   var areaSegmentoCircular2 = document.getElementById("resposta").value = roundNumber(areaSegmentoCircular2, 2);	 
   var areaSegmentoCircular3 = (Math.sin((Math.PI*anguloÎ±)/180));
   var areaSegmentoCircular3 = document.getElementById("resposta").value = roundNumber(areaSegmentoCircular3, 2);	 
   var areaSegmentoCircular4 = (raio_maior * raio_maior)/2;
   var areaSegmentoCircular4 = document.getElementById("resposta").value = roundNumber(areaSegmentoCircular4, 2);	 
   var areaSegmentoCircular5 =  180*(Math.sin((Math.PI*anguloÎ±)/180)); 
   var areaSegmentoCircular5 = document.getElementById("resposta").value = roundNumber(areaSegmentoCircular5, 2);	 
   var areaSegmentoCircular6 = Math.PI * anguloÎ± - 180*(Math.sin((Math.PI*anguloÎ±)/180)); 
   var areaSegmentoCircular6 = document.getElementById("resposta").value = roundNumber(areaSegmentoCircular6, 2);	 
   var areaSegmentoCircular7 = (Math.PI * anguloÎ± - 180*(Math.sin((Math.PI*anguloÎ±)/180)))/180;
   var areaSegmentoCircular7 = document.getElementById("resposta").value = roundNumber(areaSegmentoCircular7, 2);	 
   
     document.getElementById('resposta').innerHTML =" <hr>  A Ã¡rea do segmento circular Ã©: <br> <div style='line-height: 15px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> RÂ²</td>  <td rowspan='2'> &nbsp;âˆ™&nbsp; </td> <td style='border-bottom:solid 1.3px'>[Ï€ âˆ™ Î± - 180Â° âˆ™ sen(Î±)]</td></tr> <tr> <td>2</td><td>180</td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> ("+raio_maior+")Â² </td>  <td rowspan='2'> &nbsp;âˆ™&nbsp; </td> <td style='border-bottom:solid 1.3px'> [3,14 âˆ™ "+anguloÎ±+"Â° - 180Â° âˆ™ sen("+anguloÎ±+"Â°)]</td></tr> <tr> <td>2</td><td>180</td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> "+areaSegmentoCircular1+" </td>  <td rowspan='2'> &nbsp;âˆ™&nbsp; </td> <td style='border-bottom:solid 1.3px'> ["+areaSegmentoCircular2+"  - 180Â° âˆ™ ("+areaSegmentoCircular3+")] </td></tr> <tr> <td>2</td><td>180</td> </tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; "+areaSegmentoCircular4+" &nbsp;âˆ™&nbsp;</td><td style='border-bottom:solid 1.3px;text-align:center;'> ["+areaSegmentoCircular2+"  - ("+areaSegmentoCircular5+")]</td></tr><tr><td style='text-align:center;'> 180 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; "+areaSegmentoCircular4+" &nbsp;âˆ™&nbsp;</td><td style='border-bottom:solid 1.3px;text-align:center;'> ["+areaSegmentoCircular6+"] </td></tr><tr><td style='text-align:center;'> 180 </td></tr></tbody></table>  </div> A =  "+areaSegmentoCircular4+" âˆ™ "+areaSegmentoCircular7+" = <a1 style='color: #FF0000'> "+areaSegmentoCircular+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ² </a1>  <hr><h1 class='logomarca'> BpW </h1>  "
  
      document.circular.raio_maior.focus();
      document.circular.raio_maior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 
  
  /** ***********************************************   Corda (C = 2.R.sen(Î±/2))   ***********************  **/  
    if (a === "cordaAB") { 
      var anguloÎ± = eval(document.circular.anguloÎ±.value.replace(",",".").replace(/ /g,"")); 
      var raio_maior = eval(document.circular.raio_maior.value.replace(",",".").replace(/ /g,"")); 	
      
       if ((anguloÎ± < 0) || isNaN(anguloÎ±) || anguloÎ± == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.circular.anguloÎ±.focus();
          document.circular.anguloÎ±.select();  
      return false;
   }  
        if ((raio_maior < 0) || isNaN(raio_maior) || raio_maior == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.circular.raio_maior.focus();
          document.circular.raio_maior.select();  
      return false;
   }   
  
   try {
   var anguloÎ± = document.getElementById("resposta").value = roundNumber(anguloÎ±, 2);	
   var raio_maior = document.getElementById("resposta").value = roundNumber(raio_maior, 2);		 
   var cordaCircular = 2*raio_maior * (Math.sin((Math.PI*anguloÎ±)/180/2)) ;
   var cordaCircular = document.getElementById("resposta").value = roundNumber(cordaCircular, 2);	 
   var cordaCircular1 = 2 * raio_maior ;
   var cordaCircular1 = document.getElementById("resposta").value = roundNumber(cordaCircular1, 2);	  
   var cordaCircular2 =  anguloÎ±/2 ;
   var cordaCircular2 = document.getElementById("resposta").value = roundNumber(cordaCircular2, 2);	  
   var cordaCircular3 = (Math.sin((Math.PI*anguloÎ±)/180/2)) ; 
   var cordaCircular3 = document.getElementById("resposta").value = roundNumber(cordaCircular3, 2);	  
   
     document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 20px;'>O comprimento da corda AB Ã©: <br> AB = 2 âˆ™ R âˆ™ sen(Î±/2) <br> AB = 2 âˆ™ "+raio_maior+" âˆ™ sen("+anguloÎ±+"Â°/2) <br> AB = "+cordaCircular1+" âˆ™ sen("+cordaCircular2+"Â°) <br> AB = "+cordaCircular1+" âˆ™ "+cordaCircular3+" <br> AB = <a1 style='color: #FF0000'> "+cordaCircular+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>  </div><hr><h1 class='logomarca'> BpW </h1>"
  
      document.circular.raio_maior.focus();
      document.circular.raio_maior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 
  }
  
  
  
  /***############################################# HEXÃGONO ############################################################      **/
  
  function hexagono2() {
    var a = document.forms["hexagono"]["hexagono_type"].value;
  /** *************   AREA do hexÃ¡gono (A = 3.aÂ².âˆš3)/2)   ***********************  **/  
   if (a === "area") {
       document.getElementById("ladoa").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}
      
  /** *************   PerÃ­metro do hexÃ¡gono (P = 6.a)   ***********************  **/  
   if (a === "perimetro") {
       document.getElementById("ladoa").disabled = false;
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /** *************   apÃ³tema do hexÃ¡gono (r = (a.âˆš3)/2)   ***********************  **/  
   if (a === "apotema") {
       document.getElementById("ladoa").disabled = false;
   }
   try { 	}
       catch(e) {alert(e)}		
      
  /** *************   NÃºmero de diagonais do hexÃ¡gono (D (n(n-3))/2   ***********************  **/  
   if (a === "apotema") {
       document.getElementById("ladoa").disabled = false;
   }
   try { 	}
       catch(e) {alert(e)}	
      
  } 
   
  
  function hexagono1() {
      
   var ddl = document.getElementById("ops");
   var selectedValue = ddl.options[ddl.selectedIndex].value;
      if (selectedValue == "")
     {
      alert("Escolha uma opÃ§Ã£o para Calcular!");
     } 	
      
    var a = document.forms["hexagono"]["hexagono_type"].value;
    /** ******************************************** AREA do hexÃ¡gono (A = 3.aÂ².âˆš3)/2)   ****************************************  **/  
    if (a === "area") { 
      var ladoa = eval(document.hexagono.ladoa.value.replace(",",".").replace(/ /g,"")); 
      
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.hexagono.ladoa.focus();
          document.hexagono.ladoa.select();  
      return false;
   }  
  
   try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);	 
   var areahexagono = (3*ladoa*ladoa*Math.sqrt(3))/2 ;
   var areahexagono = document.getElementById("resposta").value = roundNumber(areahexagono, 2);	 
   var areahexagono1 =  ladoa * ladoa ;
   var areahexagono1 = document.getElementById("resposta").value = roundNumber(areahexagono1, 2);	  
   var areahexagono2 = (3*ladoa*ladoa*Math.sqrt(3)) ;
   var areahexagono2 = document.getElementById("resposta").value = roundNumber(areahexagono2, 2);	  
   var areahexagono4 = (3*ladoa*ladoa)/2 ;
   var areahexagono4 = document.getElementById("resposta").value = roundNumber(areahexagono4, 2);	   
   
     document.getElementById('resposta').innerHTML ="<hr>  A Ã¡rea do hexÃ¡gono regular Ã©: <br> <div style='line-height: 15px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'>3 âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>a</a1>Â² âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>3</a1></td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'>3 âˆ™ ("+ladoa+")Â² âˆ™ 1,73</td></tr> <tr> <td>2</td><td>2</td> </tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> 3 âˆ™ "+areahexagono1+" âˆ™ 1,73 </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+areahexagono2+" </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table></div> A = <a1 style='color: #FF0000'> "+areahexagono+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1> <br> ou <br>  A = <a1 style='color: #FF0000'> "+areahexagono4+"âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>3</a1></a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>  <hr><h1 class='logomarca'> BpW </h1> " 
     
      document.hexagono.ladoa.focus();
      document.hexagono.ladoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
    /** ************************************* PerÃ­metro do hexÃ¡gono (P = 6.a)  ****************************************  **/  
    if (a === "perimetro") { 
      var ladoa = eval(document.hexagono.ladoa.value.replace(",",".").replace(/ /g,"")); 
      
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.hexagono.ladoa.focus();
          document.hexagono.ladoa.select();  
      return false;
   }  
    
   try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);	 	 
   var perimetrohexagono = (6 * ladoa ) ;
   var perimetrohexagono = document.getElementById("resposta").value = roundNumber(perimetrohexagono, 2);	  
  
     document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>O perÃ­metro do hexÃ¡gono regular Ã©: <br> P = 6 âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>a</a1> &nbsp; =&nbsp;  6 âˆ™ "+ladoa+"    <br> A = <a1 style='color: #FF0000'> "+perimetrohexagono+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.hexagono.ladoa.focus();
      document.hexagono.ladoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 
  
  
    /** *********************************** ApÃ³tema do hexÃ¡gono (r = (a.âˆš3)/2)  ****************************************  **/  
    if (a === "apotema") {
      var ladoa = eval(document.hexagono.ladoa.value.replace(",",".").replace(/ /g,"")); 
      
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.hexagono.ladoa.focus();
          document.hexagono.ladoa.select();  
      return false;
   } 
  
   try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);	 	 
   var apotemahexagono = (ladoa * Math.sqrt(3))/2 ;
   var apotemahexagono = document.getElementById("resposta").value = roundNumber(apotemahexagono, 2);	  
   var apotemahexagono2  = (ladoa * Math.sqrt(3));
   var apotemahexagono2 = document.getElementById("resposta").value = roundNumber(apotemahexagono2, 2);	   
   var apotemahexagono3 = (ladoa )/2 ;
   var apotemahexagono3 = document.getElementById("resposta").value = roundNumber(apotemahexagono3, 2);	   
   
     document.getElementById('resposta').innerHTML ="<hr>  A apÃ³tema <a1 style='font-family: times new roman; font-style:italic;'>r</a1> do hexÃ¡gono regular Ã©: <br> <div style='line-height: 15px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'><a1 style='font-family: times new roman; font-style:italic;'>r</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'><a1 style='font-family: times new roman; font-style:italic;'>a</a1> âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>3</a1></td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'>"+ladoa+" âˆ™ 1,73</td></tr> <tr> <td>2</td><td>2</td> </tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>r</a1> &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+apotemahexagono2+" </td>  <td rowspan='2'> &nbsp;=&nbsp; </td>  <td rowspan='2'> <a1 style='color: #FF0000'> "+apotemahexagono+"</a1>"+"&nbsp; <a1 style='font-size: 16px; font-family: times new roman; font-style:italic;'>uÂ²</a1> </td></tr> <tr> <td> 2 </td> </tr></tbody></table></div>   ou <br>  <a1 style='font-family: times new roman; font-style:italic;'>r</a1> &nbsp;=&nbsp; <a1 style='color: #FF0000'> "+apotemahexagono3+"âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>3</a1></a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>  <hr><h1 class='logomarca'> BpW </h1>" 
     
      document.hexagono.ladoa.focus();
      document.hexagono.ladoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }  
  }
  
  
  
  /***############################################## TRAPÃ‰ZIO  ############################################################      **/
  
  function trapezio2() {
    var a = document.forms["trapezio"]["trapezio_type"].value;
  /** ******************************   AREA (A = (B.b).h/2   *****************************  **/  
   if (a === "area") {
      document.getElementById("ladoc").disabled = true;
      document.getElementById("ladoc").value ="";
      document.getElementById("ladod").disabled = true;
      document.getElementById("ladod").value ="";
      document.getElementById("anguloÎ±").disabled = true;	
      document.getElementById("anguloÎ±").value ="";	
      document.getElementById("anguloÎ²").disabled = true;	
      document.getElementById("anguloÎ²").value ="";	
      document.getElementById("anguloÎ´").disabled = true;	
      document.getElementById("anguloÎ´").value ="";	
      document.getElementById("anguloy").disabled = true;	
      document.getElementById("anguloy").value ="";
      document.getElementById("areaA").disabled = true;	
      document.getElementById("areaA").value ="";		
       document.getElementById("basemaior").disabled = false;		
       document.getElementById("basemenor").disabled = false;		
       document.getElementById("alturah").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}
      
  /** **************************   Base maior B (B = 2.A/h - b )  *************************/  
   if (a === "basemaiorB") {
      document.getElementById("ladoc").disabled = true;
      document.getElementById("ladoc").value ="";
      document.getElementById("ladod").disabled = true;
      document.getElementById("ladod").value ="";
      document.getElementById("anguloÎ±").disabled = true;	
      document.getElementById("anguloÎ±").value ="";	
      document.getElementById("anguloÎ²").disabled = true;	
      document.getElementById("anguloÎ²").value ="";	
      document.getElementById("anguloÎ´").disabled = true;	
      document.getElementById("anguloÎ´").value ="";	
      document.getElementById("anguloy").disabled = true;	
      document.getElementById("anguloy").value ="";
      document.getElementById("basemaior").disabled = true;	
      document.getElementById("basemaior").value ="";	
       document.getElementById("areaA").disabled = false;	
      document.getElementById("areaA").value ="";		
       document.getElementById("basemenor").disabled = false;		
       document.getElementById("alturah").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}
      
  /** **************************   Base menor b (b = (2.A-hb)/h )  *************************/  
   if (a === "basemenorb") {
      document.getElementById("ladoc").disabled = true;
      document.getElementById("ladoc").value ="";
      document.getElementById("ladod").disabled = true;
      document.getElementById("ladod").value ="";
      document.getElementById("anguloÎ±").disabled = true;	
      document.getElementById("anguloÎ±").value ="";	
      document.getElementById("anguloÎ²").disabled = true;	
      document.getElementById("anguloÎ²").value ="";	
      document.getElementById("anguloÎ´").disabled = true;	
      document.getElementById("anguloÎ´").value ="";	
      document.getElementById("anguloy").disabled = true;	
      document.getElementById("anguloy").value ="";
      document.getElementById("basemenor").disabled = true;	
      document.getElementById("basemenor").value ="";	
       document.getElementById("areaA").disabled = false;	
       document.getElementById("basemaior").disabled = false;		
       document.getElementById("alturah").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /** **************************   Altura 1 (h = (2.A/(b+B))  *************************/  
   if (a === "altura1") {
      document.getElementById("ladoc").disabled = true;
      document.getElementById("ladoc").value ="";
      document.getElementById("ladod").disabled = true;
      document.getElementById("ladod").value ="";
      document.getElementById("anguloÎ±").disabled = true;	
      document.getElementById("anguloÎ±").value ="";	
      document.getElementById("anguloÎ²").disabled = true;	
      document.getElementById("anguloÎ²").value ="";	
      document.getElementById("anguloÎ´").disabled = true;	
      document.getElementById("anguloÎ´").value ="";	
      document.getElementById("anguloy").disabled = true;	
      document.getElementById("anguloy").value ="";
      document.getElementById("alturah").disabled = true;	
      document.getElementById("alturah").value ="";	
       document.getElementById("areaA").disabled = false;	
       document.getElementById("basemaior").disabled = false;		
       document.getElementById("basemenor").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
  
  
  /** **************************   Altura 2 (h = d.sen Î´ )  *************************/  
   if (a === "altura2") {
      document.getElementById("ladoc").disabled = true;
      document.getElementById("ladoc").value ="";
      document.getElementById("areaA").disabled = true;
      document.getElementById("areaA").value ="";
      document.getElementById("anguloÎ±").disabled = true;	
      document.getElementById("anguloÎ±").value ="";	
      document.getElementById("anguloÎ²").disabled = true;	
      document.getElementById("anguloÎ²").value ="";	
      document.getElementById("basemaior").disabled = true;	
      document.getElementById("basemaior").value ="";	
      document.getElementById("anguloy").disabled = true;	
      document.getElementById("anguloy").value ="";
      document.getElementById("alturah").disabled = true;	
      document.getElementById("alturah").value ="";	
      document.getElementById("basemenor").disabled = true;	
      document.getElementById("basemenor").value ="";		
       document.getElementById("ladod").disabled = false;	
       document.getElementById("anguloÎ´").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /** **************************   Altura 3 (h = c.sen Î² )  *************************/  
   if (a === "altura3") {
      document.getElementById("ladod").disabled = true;
      document.getElementById("ladod").value ="";
      document.getElementById("areaA").disabled = true;
      document.getElementById("areaA").value ="";
      document.getElementById("anguloÎ±").disabled = true;	
      document.getElementById("anguloÎ±").value ="";	
      document.getElementById("anguloÎ´").disabled = true;	
      document.getElementById("anguloÎ´").value ="";	
      document.getElementById("basemaior").disabled = true;	
      document.getElementById("basemaior").value ="";	
      document.getElementById("anguloy").disabled = true;	
      document.getElementById("anguloy").value ="";
      document.getElementById("alturah").disabled = true;	
      document.getElementById("alturah").value ="";	
      document.getElementById("basemenor").disabled = true;	
      document.getElementById("basemenor").value ="";
       document.getElementById("ladoc").disabled = false;	
       document.getElementById("anguloÎ²").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
      
      
  /** **************************  perimetro (P = B + b + c + d)  *************************/  
   if (a === "perimetro") {
      document.getElementById("areaA").disabled = true;
      document.getElementById("areaA").value ="";
      document.getElementById("anguloÎ±").disabled = true;	
      document.getElementById("anguloÎ±").value ="";	
      document.getElementById("anguloÎ´").disabled = true;	
      document.getElementById("anguloÎ´").value ="";	
      document.getElementById("anguloy").disabled = true;	
      document.getElementById("anguloy").value ="";
      document.getElementById("alturah").disabled = true;	
      document.getElementById("alturah").value ="";
      document.getElementById("anguloÎ²").disabled = true;	
      document.getElementById("anguloÎ²").value ="";	
       document.getElementById("ladoc").disabled = false;	
       document.getElementById("basemaior").disabled = false;	
       document.getElementById("basemenor").disabled = false;	
       document.getElementById("ladod").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /** **************************  Ã¢ngulo (Î± = 180Â° - Î´)  *************************/  
   if (a === "anguloÎ±") {
      document.getElementById("areaA").disabled = true;
      document.getElementById("areaA").value ="";
      document.getElementById("anguloÎ±").disabled = true;	
      document.getElementById("anguloÎ±").value ="";	
      document.getElementById("basemenor").disabled = true;	
      document.getElementById("basemenor").value ="";	
      document.getElementById("anguloy").disabled = true;	
      document.getElementById("anguloy").value ="";
      document.getElementById("alturah").disabled = true;	
      document.getElementById("alturah").value ="";
      document.getElementById("anguloÎ²").disabled = true;	
      document.getElementById("anguloÎ²").value ="";	
      document.getElementById("ladoc").disabled = true;	
      document.getElementById("ladoc").value ="";	
      document.getElementById("basemaior").disabled = true;	
      document.getElementById("basemaior").value ="";	
      document.getElementById("ladod").disabled = true;	
      document.getElementById("ladod").value ="";	
       document.getElementById("anguloÎ´").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
      
  /** **************************  Ã¢ngulo (Î´ = 180Â° - Î±)  *************************/  
   if (a === "anguloÎ´") {
      document.getElementById("areaA").disabled = true;
      document.getElementById("areaA").value ="";
      document.getElementById("anguloÎ´").disabled = true;	
      document.getElementById("anguloÎ´").value ="";	
      document.getElementById("basemenor").disabled = true;	
      document.getElementById("basemenor").value ="";	
      document.getElementById("anguloy").disabled = true;	
      document.getElementById("anguloy").value ="";
      document.getElementById("alturah").disabled = true;	
      document.getElementById("alturah").value ="";
      document.getElementById("anguloÎ²").disabled = true;	
      document.getElementById("anguloÎ²").value ="";	
      document.getElementById("ladoc").disabled = true;	
      document.getElementById("ladoc").value ="";	
      document.getElementById("basemaior").disabled = true;	
      document.getElementById("basemaior").value ="";	
      document.getElementById("ladod").disabled = true;	
      document.getElementById("ladod").value ="";	
       document.getElementById("anguloÎ±").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}			
      
  /** **************************  Ã¢ngulo (Î² = 180Â° - Î³)  *************************/  
   if (a === "anguloÎ²") {
      document.getElementById("areaA").disabled = true;
      document.getElementById("areaA").value ="";
      document.getElementById("anguloÎ´").disabled = true;	
      document.getElementById("anguloÎ´").value ="";	
      document.getElementById("basemenor").disabled = true;	
      document.getElementById("basemenor").value ="";	
      document.getElementById("anguloÎ²").disabled = true;	
      document.getElementById("anguloÎ²").value ="";
      document.getElementById("alturah").disabled = true;	
      document.getElementById("alturah").value ="";
      document.getElementById("anguloÎ±").disabled = true;	
      document.getElementById("anguloÎ±").value ="";	
      document.getElementById("ladoc").disabled = true;	
      document.getElementById("ladoc").value ="";	
      document.getElementById("basemaior").disabled = true;	
      document.getElementById("basemaior").value ="";	
      document.getElementById("ladod").disabled = true;	
      document.getElementById("ladod").value ="";	
       document.getElementById("anguloy").disabled = false;		
   }
   try { 	}
       catch(e) {alert(e)}			
          
  /** **************************  Ã¢ngulo (Î³ = 180Â° - Î²)  *************************/  
   if (a === "anguloy") {
      document.getElementById("areaA").disabled = true;
      document.getElementById("areaA").value ="";
      document.getElementById("anguloÎ´").disabled = true;	
      document.getElementById("anguloÎ´").value ="";	
      document.getElementById("basemenor").disabled = true;	
      document.getElementById("basemenor").value ="";	
      document.getElementById("anguloy").disabled = true;	
      document.getElementById("anguloy").value ="";
      document.getElementById("alturah").disabled = true;	
      document.getElementById("alturah").value ="";
      document.getElementById("anguloÎ±").disabled = true;	
      document.getElementById("anguloÎ±").value ="";	
      document.getElementById("ladoc").disabled = true;	
      document.getElementById("ladoc").value ="";	
      document.getElementById("basemaior").disabled = true;	
      document.getElementById("basemaior").value ="";	
      document.getElementById("ladod").disabled = true;	
      document.getElementById("ladod").value ="";	
       document.getElementById("anguloÎ²").disabled = false;		
   }
   try { 	}
       catch(e) {alert(e)}		
      
  } 
   
  
  function trapezio1() {
      
   var ddl = document.getElementById("ops");
   var selectedValue = ddl.options[ddl.selectedIndex].value;
      if (selectedValue == "")
     {
      alert("Escolha uma opÃ§Ã£o para Calcular!");
     } 	
      
    var a = document.forms["trapezio"]["trapezio_type"].value;
    /** ****************************************  CÃ¡lculdo da Ã¡rea: A = (B.b).h/2  ****************************************  **/  
    if (a === "area") { 
      var basemaior = eval(document.trapezio.basemaior.value.replace(",",".").replace(/ /g,"")); 
      var basemenor = eval(document.trapezio.basemenor.value.replace(",",".").replace(/ /g,"")); 	
      var alturah = eval(document.trapezio.alturah.value.replace(",",".").replace(/ /g,"")); 	
      
       if ((basemaior < 0) || isNaN(basemaior) || basemaior == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trapezio.basemaior.focus();
          document.trapezio.basemaior.select();  
      return false;
   }  
       if ((basemenor < 0) || isNaN(basemenor) || basemenor == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trapezio.basemenor.focus();
          document.trapezio.basemenor.select();  
      return false;
   }  
        if ((alturah < 0) || isNaN(alturah) || alturah == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trapezio.alturah.focus();
          document.trapezio.alturah.select();  
      return false;
   } 
    
   try {
   var basemaior = document.getElementById("resposta").value = roundNumber(basemaior, 2); 
   var basemenor = document.getElementById("resposta").value = roundNumber(basemenor, 2); 
   var alturah = document.getElementById("resposta").value = roundNumber(alturah, 2);  
   var areatrapezio = (basemaior + basemenor)*alturah/2;
   var areatrapezio = document.getElementById("resposta").value = roundNumber(areatrapezio, 2);   
   var areatrapezio2 = basemaior + basemenor;
   var areatrapezio2 = document.getElementById("resposta").value = roundNumber(areatrapezio2, 2);    
   var areatrapezio3 = (basemaior + basemenor)*alturah; 
   var areatrapezio3 = document.getElementById("resposta").value = roundNumber(areatrapezio3, 2);    
    
     document.getElementById('resposta').innerHTML ="<hr> A Ã¡rea do trapÃ©zio Ã©: <br> <div style='line-height: 15px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> (B + <a1 style='font-family: times new roman; font-style:italic;'>b</a1>) âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> ("+basemaior+" + "+basemenor+") âˆ™ "+alturah+" </td></tr> <tr> <td> 2 </td><td> 2 </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> "+areatrapezio2+" âˆ™ "+alturah+"  </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+areatrapezio3+" </td></tr> <tr> <td> 2 </td><td> 2 </td> </tr></tbody></table> </div> A = <a1 style='color: #FF0000'> "+areatrapezio+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1> <hr><h1 class='logomarca'> BpW </h1>  " 
     
      document.trapezio.basemaior.focus();
      document.trapezio.basemaior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
     /** ******************************************* Base maior B  (B = 2.A/h - b )   ****************************************  **/  
    if (a === "basemaiorB") { 
      var areaA = eval(document.trapezio.areaA.value.replace(",",".").replace(/ /g,"")); 
      var basemenor = eval(document.trapezio.basemenor.value.replace(",",".").replace(/ /g,"")); 	
      var alturah = eval(document.trapezio.alturah.value.replace(",",".").replace(/ /g,"")); 	
      
       if ((areaA < 0) || isNaN(areaA) || areaA == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trapezio.areaA.focus();
          document.trapezio.areaA.select();  
      return false;
   }  
       if ((basemenor < 0) || isNaN(basemenor) || basemenor == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trapezio.basemenor.focus();
          document.trapezio.basemenor.select();  
      return false;
   }  
        if ((alturah < 0) || isNaN(alturah) || alturah == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trapezio.alturah.focus();
          document.trapezio.alturah.select();  
      return false;
   } 
  
   try {
   var areaA = document.getElementById("resposta").value = roundNumber(areaA, 2); 
   var basemenor = document.getElementById("resposta").value = roundNumber(basemenor, 2); 
   var alturah = document.getElementById("resposta").value = roundNumber(alturah, 2);    
   var basemaiorB = (2*areaA - basemenor*alturah)/alturah;
   var basemaiorB = document.getElementById("resposta").value = roundNumber(basemaiorB, 2);    
   var basemaiorB2 = 2*areaA ; 
   var basemaiorB2 = document.getElementById("resposta").value = roundNumber(basemaiorB2, 2);   
   var basemaiorB3 = basemaiorB2/alturah;
   var basemaiorB3 = document.getElementById("resposta").value = roundNumber(basemaiorB3, 2);  
    
     document.getElementById('resposta').innerHTML ="<hr>  A base maior B do trapÃ©zio Ã©: <br> <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> (B + <a1 style='font-family: times new roman; font-style:italic;'>b</a1>) âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> "+areaA+" &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> (B + "+basemenor+") âˆ™ "+alturah+" </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>  </div>  2 âˆ™ "+areaA+" = (B + "+basemenor+") âˆ™ "+alturah+" <br>    "+basemaiorB2+" = (B + "+basemenor+") âˆ™ "+alturah+" <br>  <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> "+basemaiorB2+" </td><td rowspan='2'> &nbsp;=&nbsp; B + "+basemenor+" </td></tr><tr><td> "+alturah+" </td> </tr></tbody></table> </div>  "+basemaiorB3+" = B + "+basemenor+"  <br> B = "+basemaiorB3+" - "+basemenor+" <br>  B = <a1 style='color: #FF0000'> "+basemaiorB+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1> <hr><h1 class='logomarca'> BpW </h1> " 
     
      document.trapezio.basemenor.focus();
      document.trapezio.basemenor.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
   
  
     /** ******************************************* Base menor b (b = (2.A-hb)/h )    ****************************************  **/  
    if (a === "basemenorb") { 
      var areaA = eval(document.trapezio.areaA.value.replace(",",".").replace(/ /g,"")); 
      var basemaior = eval(document.trapezio.basemaior.value.replace(",",".").replace(/ /g,"")); 	
      var alturah = eval(document.trapezio.alturah.value.replace(",",".").replace(/ /g,"")); 	
      
       if ((areaA < 0) || isNaN(areaA) || areaA == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trapezio.areaA.focus();
          document.trapezio.areaA.select();  
      return false;
   }  
       if ((basemaior < 0) || isNaN(basemaior) || basemaior == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trapezio.basemaior.focus();
          document.trapezio.basemaior.select();  
      return false;
   }  
        if ((alturah < 0) || isNaN(alturah) || alturah == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trapezio.alturah.focus();
          document.trapezio.alturah.select();  
      return false;
   }   
  
   try {
   var areaA = document.getElementById("resposta").value = roundNumber(areaA, 2); 
   var basemaior = document.getElementById("resposta").value = roundNumber(basemaior, 2); 
   var alturah = document.getElementById("resposta").value = roundNumber(alturah, 2);    
   var basemaiorB = (2*areaA - basemaior*alturah)/alturah;
   var basemaiorB = document.getElementById("resposta").value = roundNumber(basemaiorB, 2);  
   var basemaiorB2 = 2*areaA ; 
   var basemaiorB2 = document.getElementById("resposta").value = roundNumber(basemaiorB2, 2);   
   var basemaiorB3 = basemaiorB2/alturah;
   var basemaiorB3 = document.getElementById("resposta").value = roundNumber(basemaiorB3, 2);   
    
     document.getElementById('resposta').innerHTML ="<hr> A base menor b do trapÃ©zio Ã©: <br> <div style='line-height: 14px;'>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> (B + <a1 style='font-family: times new roman; font-style:italic;'>b</a1>) âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> "+areaA+" &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> ("+basemaior+" + b ) âˆ™ "+alturah+"</td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table> </div>  2 âˆ™ "+areaA+" = ("+basemaior+" + b ) âˆ™ "+alturah+" <br>    "+basemaiorB2+" = ( "+basemaior+" + b ) âˆ™ "+alturah+" <br>  <div style='line-height: 14px;'>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> "+basemaiorB2+" &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+basemaior+" + b</td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>  </div>  "+basemaiorB3+" = "+basemaior+" + b   <br> b = "+basemaiorB3+" - "+basemaior+" <br>  b = <a1 style='color: #FF0000'> "+basemaiorB+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1><hr><h1 class='logomarca'> BpW </h1> " 
     
      document.trapezio.basemaior.focus();
      document.trapezio.basemaior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
   
  
    /** ****************************************** Altura 1 (h = (2.A/(b+B))    ****************************************  **/  
    if (a === "altura1") { 
      var areaA = eval(document.trapezio.areaA.value.replace(",",".").replace(/ /g,"")); 
      var basemaior = eval(document.trapezio.basemaior.value.replace(",",".").replace(/ /g,"")); 	
      var basemenor = eval(document.trapezio.basemenor.value.replace(",",".").replace(/ /g,"")); 	
      
       if ((areaA < 0) || isNaN(areaA) || areaA == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trapezio.areaA.focus();
          document.trapezio.areaA.select();  
      return false;
   }  
       if ((basemaior < 0) || isNaN(basemaior) || basemaior == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trapezio.basemaior.focus();
          document.trapezio.basemaior.select();  
      return false;
   }  
        if ((basemenor < 0) || isNaN(basemenor) || basemenor == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trapezio.basemenor.focus();
          document.trapezio.basemenor.select();  
      return false;
   }   
    
   try {
   var areaA = document.getElementById("resposta").value = roundNumber(areaA, 2); 
   var basemaior = document.getElementById("resposta").value = roundNumber(basemaior, 2); 
   var basemenor = document.getElementById("resposta").value = roundNumber(basemenor, 2);     
   var altura = (2*areaA) /(basemaior + basemenor);
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2);   
   var altura2 = 2*areaA;
   var altura2 = document.getElementById("resposta").value = roundNumber(altura2, 2);   
   var altura3 = (basemaior + basemenor);
   var altura3 = document.getElementById("resposta").value = roundNumber(altura3, 2);   
    
     document.getElementById('resposta').innerHTML ="<hr> A altura <a1 style='font-family: times new roman; font-style:italic;'>h</a1> do trapÃ©zio Ã©: <br> <div style='line-height: 15px;'>  <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> (B + <a1 style='font-family: times new roman; font-style:italic;'>b</a1>) âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> "+areaA+" &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> ("+basemaior+" + "+basemenor+") âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>  </div> 2 âˆ™ "+areaA+" = "+altura3+" âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> <br>   "+altura2+" = "+altura3+" âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> <br> </div>  <div style='line-height: 14px;'>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+altura2+" </td></tr><tr><td style='text-align:center;'> "+altura3+" </td></tr></tbody></table>   <a1 style='font-family: times new roman; font-style:italic;'>h</a1> =  <a1 style='color: #FF0000'> "+altura+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>    </div> <hr><h1 class='logomarca'> BpW </h1> " 
     
      document.trapezio.basemaior.focus();
      document.trapezio.basemaior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
    /** *********************************************    Altura 2 (h = d.sen Î´ )     ****************************************  **/  
    if (a === "altura2") { 
      var ladod = eval(document.trapezio.ladod.value.replace(",",".").replace(/ /g,"")); 
      var anguloÎ´ = eval(document.trapezio.anguloÎ´.value.replace(",",".").replace(/ /g,"")); 	
      
       if ((ladod < 0) || isNaN(ladod) || ladod == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trapezio.ladod.focus();
          document.trapezio.ladod.select();  
      return false;
   }  
       if ((anguloÎ´ < 0) || isNaN(anguloÎ´) || anguloÎ´ == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trapezio.anguloÎ´.focus();
          document.trapezio.anguloÎ´.select();  
      return false;
   }  
   
   try {
   var ladod = document.getElementById("resposta").value = roundNumber(ladod, 2); 
   var anguloÎ´ = document.getElementById("resposta").value = roundNumber(anguloÎ´, 2);    
   var altura1 = ladod * Math.sin((Math.PI*anguloÎ´)/180);
   var altura1 = document.getElementById("resposta").value = roundNumber(altura1, 2);   
   var anguloÎ´2 = Math.sin((Math.PI*anguloÎ´)/180);  
   var anguloÎ´2 = document.getElementById("resposta").value = roundNumber(anguloÎ´2, 3);   
    
     document.getElementById('resposta').innerHTML = "<hr> <div style='line-height: 23px;'> A altura <a1 style='font-family: times new roman; font-style:italic;'>h</a1> do trapÃ©zio Ã©: <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = <a1 style='font-family: times new roman; font-style:italic;'>d</a1> âˆ™ sen(Î´) <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> =  "+ladod+" âˆ™ seno("+anguloÎ´+")Â° <br>    <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = "+ladod+" âˆ™ "+anguloÎ´2+" <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> =  <a1 style='color: #FF0000'> "+altura1+"&nbsp;</a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>  </div> <hr><h1 class='logomarca'> BpW </h1>";
     
      document.trapezio.ladod.focus();
      document.trapezio.ladod.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** *************************************   Altura 3 (h = c.sen Î² )  ****************************************************/  
    if (a === "altura3") { 
      var ladoc = eval(document.trapezio.ladoc.value.replace(",",".").replace(/ /g,"")); 
      var anguloÎ² = eval(document.trapezio.anguloÎ².value.replace(",",".").replace(/ /g,"")); 	
      
       if ((ladoc < 0) || isNaN(ladoc) || ladoc == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trapezio.ladoc.focus();
          document.trapezio.ladoc.select();  
      return false;
   }  
       if ((anguloÎ² < 0) || isNaN(anguloÎ²) || anguloÎ² == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trapezio.anguloÎ².focus();
          document.trapezio.anguloÎ².select();  
      return false;
   }   
    
   try {
   var ladoc = document.getElementById("resposta").value = roundNumber(ladoc, 2); 
   var anguloÎ² = document.getElementById("resposta").value = roundNumber(anguloÎ², 2);    
   var altura1 = ladoc * Math.sin((Math.PI*anguloÎ²)/180);
   var altura1 = document.getElementById("resposta").value = roundNumber(altura1, 2);  
   var anguloÎ²2 = Math.sin((Math.PI*anguloÎ²)/180);
   var anguloÎ²2 = document.getElementById("resposta").value = roundNumber(anguloÎ²2, 3);   
    
     document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 23px;'>A altura <a1 style='font-family: times new roman; font-style:italic;'>h</a1> do trapÃ©zio Ã©: <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = <a1 style='font-family: times new roman; font-style:italic;'>c</a1> âˆ™ sen(Î²) <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = "+ladoc+" âˆ™ seno("+anguloÎ²+")Â° <br>    <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = "+ladoc+" âˆ™ "+anguloÎ²2+" <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = <a1 style='color: #FF0000'> "+altura1+"&nbsp;</a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>  </div><hr><h1 class='logomarca'> BpW </h1> ";
     
      document.trapezio.ladoc.focus();
      document.trapezio.ladoc.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** ******************************************  perimetro (P = B + b + c + d)  ************************************************/  
    if (a === "perimetro") { 
      var ladoc = eval(document.trapezio.ladoc.value.replace(",",".").replace(/ /g,"")); 
      var ladod = eval(document.trapezio.ladod.value.replace(",",".").replace(/ /g,"")); 
      var basemaior = eval(document.trapezio.basemaior.value.replace(",",".").replace(/ /g,"")); 
      var basemenor = eval(document.trapezio.basemenor.value.replace(",",".").replace(/ /g,"")); 	
      
       if ((ladoc < 0) || isNaN(ladoc) || ladoc == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trapezio.ladoc.focus();
          document.trapezio.ladoc.select();  
      return false;
   }  
       if ((ladod < 0) || isNaN(ladod) || ladod == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trapezio.ladod.focus();
          document.trapezio.ladod.select();  
      return false;
   }    
       if ((basemaior < 0) || isNaN(basemaior) || basemaior == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trapezio.basemaior.focus();
          document.trapezio.basemaior.select();  
      return false;
   }   
       if ((basemenor < 0) || isNaN(basemenor) || basemenor == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trapezio.basemenor.focus();
          document.trapezio.basemenor.select();  
      return false;
   }  
    
   try {
   var ladoc = document.getElementById("resposta").value = roundNumber(ladoc, 2); 
   var ladod = document.getElementById("resposta").value = roundNumber(ladod, 2); 
   var basemaior = document.getElementById("resposta").value = roundNumber(basemaior, 2); 
   var basemenor = document.getElementById("resposta").value = roundNumber(basemenor, 2);  
   var Perimetro = ladoc + ladod + basemaior + basemenor ;
   var Perimetro = document.getElementById("resposta").value = roundNumber(Perimetro, 2);  
    
     document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 20px;'>O perÃ­metro do trapÃ©zio Ã©: <br> P = B + <a1 style='font-family: times new roman; font-style:italic;'>b</a1> + <a1 style='font-family: times new roman; font-style:italic;'>c</a1> + <a1 style='font-family: times new roman; font-style:italic;'>d</a1>  <br>  P = "+basemaior+" + "+basemenor+" + "+ladoc+" + "+ladod+" <br>  P = <a1 style='color: #FF0000'> "+Perimetro+"&nbsp;</a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>  </div><hr><h1 class='logomarca'> BpW </h1> ";
     
      document.trapezio.basemaior.focus();
      document.trapezio.basemaior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** *****************************************  Ã¢ngulo (Î± = 180Â° - Î´)  *******************************************/  
  
    if (a === "anguloÎ±") { 
      var anguloÎ´ = eval(document.trapezio.anguloÎ´.value.replace(",",".").replace(/ /g,"")); 	
    
       if ((anguloÎ´ < 0) || isNaN(anguloÎ´) || anguloÎ´ == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trapezio.anguloÎ´.focus();
          document.trapezio.anguloÎ´.select();  
      return false;
   }    
  
   try {
   var anguloÎ´ = document.getElementById("resposta").value = roundNumber(anguloÎ´, 2); 	 
   var anguloÎ± = 180 -  anguloÎ´;
   var anguloÎ± = document.getElementById("resposta").value = roundNumber(anguloÎ±, 2);  
     
     document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 20px;'>O Ã¢ngulo Î± Ã©: <br> Î± = 180Â° âˆ’ Î´ <br>  Î± = 180Â° âˆ’ "+anguloÎ´+"Â° <br>  Î± =  <a1 style='color: #FF0000'> "+anguloÎ±+"</a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>Â° </a1>  </div><hr><h1 class='logomarca'> BpW </h1> ";
     
      document.trapezio.anguloÎ´.focus();
      document.trapezio.anguloÎ´.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** *******************************************  Ã¢ngulo (Î´ = 180Â° - Î±)  *******************************************/  
  
    if (a === "anguloÎ´") { 
      var anguloÎ± = eval(document.trapezio.anguloÎ±.value.replace(",",".").replace(/ /g,"")); 	
    
       if ((anguloÎ± < 0) || isNaN(anguloÎ±) || anguloÎ± == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trapezio.anguloÎ±.focus();
          document.trapezio.anguloÎ±.select();  
      return false;
   }   
    
   try {
   var anguloÎ± = document.getElementById("resposta").value = roundNumber(anguloÎ±, 2);    
   var anguloÎ´ = 180 - anguloÎ±;
   var anguloÎ´ = document.getElementById("resposta").value = roundNumber(anguloÎ´, 2);   
     
     document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 20px;'>O Ã¢ngulo Î´ Ã©: <br> Î´ = 180Â° âˆ’ Î± <br>  Î´ = 180Â° âˆ’ "+anguloÎ±+"Â° <br>  Î´ =  <a1 style='color: #FF0000'> "+anguloÎ´+"</a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>Â° </a1>  </div><hr><h1 class='logomarca'> BpW </h1> ";
     
      document.trapezio.anguloÎ±.focus();
      document.trapezio.anguloÎ±.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** **********************************************  Ã¢ngulo (Î² = 180Â° - Î³)  *******************************************/  
  
    if (a === "anguloy") { 
      var anguloÎ² = eval(document.trapezio.anguloÎ².value.replace(",",".").replace(/ /g,"")); 	
    
       if ((anguloÎ² < 0) || isNaN(anguloÎ²) || anguloÎ² == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trapezio.anguloÎ².focus();
          document.trapezio.anguloÎ².select();  
      return false;
   }   
    
   try {
   var anguloÎ² = document.getElementById("resposta").value = roundNumber(anguloÎ², 2);    
   var anguloy = 180 - anguloÎ²;
   var anguloy = document.getElementById("resposta").value = roundNumber(anguloy, 2);    
     
     document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 20px;'>O Ã¢ngulo Î³ Ã©: <br> Î³ = 180Â° âˆ’ Î² <br>  Î³ = 180Â° âˆ’ "+anguloÎ²+"Â° <br>  Î³ =  <a1 style='color: #FF0000'> "+anguloy+"</a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>Â° </a1>  </div><hr><h1 class='logomarca'> BpW </h1> ";
     
      document.trapezio.anguloÎ².focus();
      document.trapezio.anguloÎ².select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
  /** **********************************************  Ã¢ngulo (Î³ = 180Â° - Î²)  *******************************************/  
    if (a === "anguloÎ²") { 
      var anguloy = eval(document.trapezio.anguloy.value.replace(",",".").replace(/ /g,"")); 	
    
       if ((anguloy < 0) || isNaN(anguloy) || anguloy == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.trapezio.anguloy.focus();
          document.trapezio.anguloy.select();  
      return false;
   }  
    
   try {
   var anguloy = document.getElementById("resposta").value = roundNumber(anguloy, 2);     
   var anguloÎ² = 180 - anguloy;
   var anguloÎ² = document.getElementById("resposta").value = roundNumber(anguloÎ², 2);    
     
     document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 20px;'>O Ã¢ngulo Î² Ã©: <br> Î² = 180Â° âˆ’ Î³ <br>  Î² = 180Â° âˆ’ "+anguloy+"Â° <br>  Î² =  <a1 style='color: #FF0000'> "+anguloÎ²+"</a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>Â° </a1>  </div><hr><h1 class='logomarca'> BpW </h1> ";
     
      document.trapezio.anguloy.focus();
      document.trapezio.anguloy.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  }
  
  
  
  /***######################################     PARALELEPÃPEDO    ################################################      **/
  
  function paralelepipedo2() {
    var a = document.forms["paralelepipedo"]["paralelepipedo_type"].value;
  /** ******************************   Volume:   V = a.b.c   *****************************  **/  
   if (a === "volume") {
      document.getElementById("Diagonald").disabled = true;
      document.getElementById("Diagonald").value ="";
      document.getElementById("area").disabled = true;
      document.getElementById("area").value ="";
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";	
       document.getElementById("comprimentoa").disabled = false;		
       document.getElementById("largurab").disabled = false;		
       document.getElementById("alturac").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}
      
  /** ******************************   Ãrea total:   A = 2.(ab + ac +b.c)   *****************************  **/  
   if (a === "areatotal") {
      document.getElementById("Diagonald").disabled = true;
      document.getElementById("Diagonald").value ="";
      document.getElementById("area").disabled = true;
      document.getElementById("area").value ="";
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";	
       document.getElementById("comprimentoa").disabled = false;		
       document.getElementById("largurab").disabled = false;		
       document.getElementById("alturac").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /** ******************************   Diagonal do PARALELEPÃPEDO:   D = âˆš(aÂ² + bÂ² + cÂ²)   *****************************  **/  
   if (a === "diagonalparalelepipedo") {
      document.getElementById("Diagonald").disabled = true;
      document.getElementById("Diagonald").value ="";
      document.getElementById("area").disabled = true;
      document.getElementById("area").value ="";
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";	
       document.getElementById("comprimentoa").disabled = false;		
       document.getElementById("largurab").disabled = false;		
       document.getElementById("alturac").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /** ******************************   Diagonal do base:   d = âˆš(aÂ² + bÂ²)   *****************************  **/  
   if (a === "diagonalbase") {
      document.getElementById("Diagonald").disabled = true;
      document.getElementById("Diagonald").value ="";
      document.getElementById("area").disabled = true;
      document.getElementById("area").value ="";
      document.getElementById("alturac").disabled = true;
      document.getElementById("alturac").value ="";
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";	
       document.getElementById("comprimentoa").disabled = false;		
       document.getElementById("largurab").disabled = false;		
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /** ******************************   Ã¡rea do base:   a_b = a . b   *****************************  **/  
   if (a === "areabase") {
      document.getElementById("Diagonald").disabled = true;
      document.getElementById("Diagonald").value ="";
      document.getElementById("area").disabled = true;
      document.getElementById("area").value ="";
      document.getElementById("alturac").disabled = true;
      document.getElementById("alturac").value ="";
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";	
       document.getElementById("comprimentoa").disabled = false;		
       document.getElementById("areabase").disabled = false;		
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /** ******************************  comprimento a:   a = V/(b.c)   *****************************  **/  
   if (a === "comprimentoaa") {
      document.getElementById("Diagonald").disabled = true;
      document.getElementById("Diagonald").value ="";
      document.getElementById("alturac").disabled = true;
      document.getElementById("alturac").value ="";	
      document.getElementById("area").disabled = true;
      document.getElementById("area").value ="";	
      document.getElementById("comprimentoa").disabled = true;
      document.getElementById("comprimentoa").value ="";	
      document.getElementById("alturac").disabled = false;	
       document.getElementById("largurab").disabled = false;
      document.getElementById("volume").disabled = false;
   }
   try { 	}
       catch(e) {alert(e)}		
      
  /** ******************************  Largura b:   b = V/(a.c)   *****************************  **/  
   if (a === "largurabb") {
      document.getElementById("Diagonald").disabled = true;
      document.getElementById("Diagonald").value ="";
      document.getElementById("largurab").disabled = true;
      document.getElementById("largurab").value ="";	
      document.getElementById("area").disabled = true;
      document.getElementById("area").value ="";	
      document.getElementById("alturac").disabled = true;
      document.getElementById("alturac").value ="";	
      document.getElementById("comprimentoa").disabled = false;	
       document.getElementById("alturac").disabled = false;
      document.getElementById("volume").disabled = false;
   }
   try { 	}
       catch(e) {alert(e)}	
      
      
  /** ******************************  Altura c:   c = V/(a.b)   *****************************  **/  
   if (a === "alturacc") {
      document.getElementById("Diagonald").disabled = true;
      document.getElementById("Diagonald").value ="";
      document.getElementById("alturac").disabled = true;
      document.getElementById("alturac").value ="";	
      document.getElementById("area").disabled = true;
      document.getElementById("area").value ="";	
      document.getElementById("alturac").disabled = true;
      document.getElementById("alturac").value ="";
      document.getElementById("comprimentoa").disabled = false;	
       document.getElementById("largurab").disabled = false;
      document.getElementById("volume").disabled = false;
   }
   try { 	}
       catch(e) {alert(e)}		
      
  /** ************************  Comprimento em funÃ§Ã£o da Ã¡rea:   a = (A - 2ab)/2(b+c)  *********************  **/  
   if (a === "comprimentoaa2") {
      document.getElementById("Diagonald").disabled = true;
      document.getElementById("Diagonald").value ="";
      document.getElementById("comprimentoa").disabled = true;
      document.getElementById("comprimentoa").value ="";
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";	
       document.getElementById("largurab").disabled = false;		
       document.getElementById("alturac").disabled = false;
      document.getElementById("area").disabled = false;
   }
   try { 	}
       catch(e) {alert(e)}			
              
      
  /** ************************  Largura em funÃ§Ã£o da Ã¡rea:   b = (A - 2ac)/2(a+c)  *********************  **/  
   if (a === "largurabb2") {
      document.getElementById("Diagonald").disabled = true;
      document.getElementById("Diagonald").value ="";
      document.getElementById("comprimentoa").disabled = true;
      document.getElementById("comprimentoa").value ="";
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";
      document.getElementById("largurab").disabled = true;
      document.getElementById("largurab").value ="";	
       document.getElementById("comprimentoa").disabled = false;		
       document.getElementById("alturac").disabled = false;
      document.getElementById("area").disabled = false;
   }
   try { 	}
       catch(e) {alert(e)}			
              
  /** ************************  Altura em funÃ§Ã£o da Ã¡rea:   c = (A - 2ab)/2(a+b)  *********************  **/  
   if (a === "alturacc2") {
      document.getElementById("Diagonald").disabled = true;
      document.getElementById("Diagonald").value ="";
      document.getElementById("comprimentoa").disabled = true;
      document.getElementById("comprimentoa").value ="";
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";
      document.getElementById("alturac").disabled = true;
      document.getElementById("alturac").value ="";		
       document.getElementById("comprimentoa").disabled = false;		
       document.getElementById("largurab").disabled = false;
      document.getElementById("area").disabled = false;
   }
   try { 	}
       catch(e) {alert(e)}			
  
  } 
   
  function paralelepipedo1() {
      
   var ddl = document.getElementById("ops");
   var selectedValue = ddl.options[ddl.selectedIndex].value;
      if (selectedValue == "")
     {
      alert("Escolha uma opÃ§Ã£o para Calcular!");
     } 	
      
    var a = document.forms["paralelepipedo"]["paralelepipedo_type"].value;
    /** ************************************   PARALELEPÃPEDO: Volume:   V = a.b.c  ****************************************  **/  
    if (a === "volume") { 
      var comprimentoa = eval(document.paralelepipedo.comprimentoa.value.replace(",",".").replace(/ /g,"")); 
      var largurab = eval(document.paralelepipedo.largurab.value.replace(",",".").replace(/ /g,"")); 
      var alturac = eval(document.paralelepipedo.alturac.value.replace(",",".").replace(/ /g,"")); 	
    
       if ((comprimentoa < 0) || isNaN(comprimentoa) || comprimentoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.paralelepipedo.comprimentoa.focus();
          document.paralelepipedo.comprimentoa.select();  
      return false;
   }   
       if ((largurab < 0) || isNaN(largurab) || largurab == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.paralelepipedo.largurab.focus();
          document.paralelepipedo.largurab.select();  
      return false;
   }  
       if ((alturac < 0) || isNaN(alturac) || alturac == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.paralelepipedo.alturac.focus();
          document.paralelepipedo.alturac.select();  
      return false;
   }   
    
    
   try {
   var comprimentoa = document.getElementById("resposta").value = roundNumber(comprimentoa, 2);	
   var largurab = document.getElementById("resposta").value = roundNumber(largurab, 2);	 
   var alturac = document.getElementById("resposta").value = roundNumber(alturac, 2);	   
   var Volumeparalelepipedo = comprimentoa * largurab  * alturac;
   var Volumeparalelepipedo = document.getElementById("resposta").value = roundNumber(Volumeparalelepipedo, 2);	 
    
     document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 22px;'>O volume do paralelepÃ­pedo Ã©: <br> V = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>b</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>c</a1>  <br>   V =  "+comprimentoa+" âˆ™ "+largurab+" âˆ™ "+alturac+" <br> V =  <a1 style='color: #FF0000'> "+Volumeparalelepipedo+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ³</a1>  </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.paralelepipedo.comprimentoa.focus();
      document.paralelepipedo.comprimentoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
    /** ************************************  PARALELEPÃPEDO: Ãrea total:   A = 2.(a.b + a.c +b.c) ***************************  **/  
    if (a === "areatotal") {
      var comprimentoa = eval(document.paralelepipedo.comprimentoa.value.replace(",",".").replace(/ /g,"")); 
      var largurab = eval(document.paralelepipedo.largurab.value.replace(",",".").replace(/ /g,"")); 
      var alturac = eval(document.paralelepipedo.alturac.value.replace(",",".").replace(/ /g,"")); 	
    
       if ((comprimentoa < 0) || isNaN(comprimentoa) || comprimentoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.paralelepipedo.comprimentoa.focus();
          document.paralelepipedo.comprimentoa.select();  
      return false;
   }   
       if ((largurab < 0) || isNaN(largurab) || largurab == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.paralelepipedo.largurab.focus();
          document.paralelepipedo.largurab.select();  
      return false;
   }  
       if ((alturac < 0) || isNaN(alturac) || alturac == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.paralelepipedo.alturac.focus();
          document.paralelepipedo.alturac.select();  
      return false;
   }
  
   try {
   var comprimentoa = document.getElementById("resposta").value = roundNumber(comprimentoa, 2);	
   var largurab = document.getElementById("resposta").value = roundNumber(largurab, 2);	 
   var alturac = document.getElementById("resposta").value = roundNumber(alturac, 2);	    
   var Volumeparalelepipedo = 2*(comprimentoa*largurab + comprimentoa*alturac + largurab*alturac);
   var Volumeparalelepipedo = document.getElementById("resposta").value = roundNumber(Volumeparalelepipedo, 2);	 
   
     document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>A Ã¡rea total do paralelepÃ­pedo Ã©: <br> A = 2 âˆ™(<a1 style='font-family: times new roman; font-style:italic;'>aâˆ™b</a1> + <a1 style='font-family: times new roman; font-style:italic;'>aâˆ™c</a1> + <a1 style='font-family: times new roman; font-style:italic;'>bâˆ™c</a1>)  <br>   A = 2âˆ™("+comprimentoa+"âˆ™"+largurab+"  +  "+comprimentoa+"âˆ™"+alturac+"  + "+largurab+"âˆ™"+alturac+")  <br> A =   <a1 style='color: #FF0000'> "+Volumeparalelepipedo+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>  </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.paralelepipedo.comprimentoa.focus();
      document.paralelepipedo.comprimentoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
    /** *****************************  Diagonal do PARALELEPÃPEDO:   D = âˆš(aÂ² + bÂ² + cÂ²)  *********************************  **/  
    if (a === "diagonalparalelepipedo") { 
      var comprimentoa = eval(document.paralelepipedo.comprimentoa.value.replace(",",".").replace(/ /g,"")); 
      var largurab = eval(document.paralelepipedo.largurab.value.replace(",",".").replace(/ /g,"")); 
      var alturac = eval(document.paralelepipedo.alturac.value.replace(",",".").replace(/ /g,"")); 	
    
       if ((comprimentoa < 0) || isNaN(comprimentoa) || comprimentoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.paralelepipedo.comprimentoa.focus();
          document.paralelepipedo.comprimentoa.select();  
      return false;
   }   
       if ((largurab < 0) || isNaN(largurab) || largurab == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.paralelepipedo.largurab.focus();
          document.paralelepipedo.largurab.select();  
      return false;
   }  
       if ((alturac < 0) || isNaN(alturac) || alturac == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.paralelepipedo.alturac.focus();
          document.paralelepipedo.alturac.select();  
      return false;
   }  
  
   try {
   var comprimentoa = document.getElementById("resposta").value = roundNumber(comprimentoa, 2);	
   var largurab = document.getElementById("resposta").value = roundNumber(largurab, 2);	 
   var alturac = document.getElementById("resposta").value = roundNumber(alturac, 2);	   
   var diagonalparalelepipedo = Math.sqrt(comprimentoa*comprimentoa + largurab*largurab + alturac*alturac );
   var diagonalparalelepipedo = document.getElementById("resposta").value = roundNumber(diagonalparalelepipedo, 2);	   
   var diagonalparalelepipedo1 = (comprimentoa*comprimentoa ); 
   var diagonalparalelepipedo1 = document.getElementById("resposta").value = roundNumber(diagonalparalelepipedo1, 2); 
   var diagonalparalelepipedo2 = (largurab*largurab); 
   var diagonalparalelepipedo2 = document.getElementById("resposta").value = roundNumber(diagonalparalelepipedo2, 2); 
   var diagonalparalelepipedo3 = (alturac*alturac);
   var diagonalparalelepipedo3 = document.getElementById("resposta").value = roundNumber(diagonalparalelepipedo3, 2); 
   var diagonalparalelepipedo4 = comprimentoa*comprimentoa + largurab*largurab + alturac*alturac ; 
   var diagonalparalelepipedo4 = document.getElementById("resposta").value = roundNumber(diagonalparalelepipedo4, 2); 
   
     document.getElementById('resposta').innerHTML ="<hr>  A diagonal do paralelepÃ­pedo Ã©: <br><div style='line-height: 24px;'> D =  âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'><a1 style='font-family: times new roman; font-style:italic;'>a</a1>Â² + <a1 style='font-family: times new roman; font-style:italic;'>b</a1>Â² + <a1 style='font-family: times new roman; font-style:italic;'>c</a1>Â²</a1>  <br> D = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>("+comprimentoa+")Â² + ("+largurab+")Â² + ("+alturac+")Â²</a1>  <br>  D = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>"+diagonalparalelepipedo1+" + "+diagonalparalelepipedo2+" + "+diagonalparalelepipedo3+"</a1>  <br>  D = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>"+diagonalparalelepipedo4+" </a1>  <br>  D =   <a1 style='color: #FF0000'> "+diagonalparalelepipedo+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.paralelepipedo.comprimentoa.focus();
      document.paralelepipedo.comprimentoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
    /** ********************************    Diagonal do base:   d = âˆš(aÂ² + bÂ²) ****************************************  **/  
    if (a === "diagonalbase") { 
      var comprimentoa = eval(document.paralelepipedo.comprimentoa.value.replace(",",".").replace(/ /g,"")); 
      var largurab = eval(document.paralelepipedo.largurab.value.replace(",",".").replace(/ /g,"")); 
    
       if ((comprimentoa < 0) || isNaN(comprimentoa) || comprimentoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.paralelepipedo.comprimentoa.focus();
          document.paralelepipedo.comprimentoa.select();  
      return false;
   }   
       if ((largurab < 0) || isNaN(largurab) || largurab == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.paralelepipedo.largurab.focus();
          document.paralelepipedo.largurab.select();  
      return false;
   }  
  
   try {
   var comprimentoa = document.getElementById("resposta").value = roundNumber(comprimentoa, 2);	
   var largurab = document.getElementById("resposta").value = roundNumber(largurab, 2);	 
   var diagonalbase = Math.sqrt(comprimentoa*comprimentoa + largurab*largurab );
   var diagonalbase = document.getElementById("resposta").value = roundNumber(diagonalbase, 2);	    
   var diagonalbase1 = (comprimentoa*comprimentoa ); 
   var diagonalbase1 = document.getElementById("resposta").value = roundNumber(diagonalbase1, 2);	 
   var diagonalbase2 = (largurab*largurab);  
   var diagonalbase2 = document.getElementById("resposta").value = roundNumber(diagonalbase2, 2);	 
   var diagonalbase4 = comprimentoa*comprimentoa + largurab*largurab ; 
   var diagonalbase4 = document.getElementById("resposta").value = roundNumber(diagonalbase4, 2);	 
   
     document.getElementById('resposta').innerHTML ="<hr> A diagonal <a1 style='font-family: times new roman; font-style:italic;'>d</a1> da base Ã©: <br><div style='line-height: 25px;'> <a1 style='font-family: times new roman; font-style:italic;'>d</a1> =  âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'><a1 style='font-family: times new roman; font-style:italic;'>a</a1>Â² + <a1 style='font-family: times new roman; font-style:italic;'>b</a1>Â² </a1>  <br> <a1 style='font-family: times new roman; font-style:italic;'>d</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>("+comprimentoa+")Â² + ("+largurab+")Â² </a1>  <br>  <a1 style='font-family: times new roman; font-style:italic;'>d</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>"+diagonalbase1+" + "+diagonalbase2+" </a1>  <br>  <a1 style='font-family: times new roman; font-style:italic;'>d</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>"+diagonalbase4+" </a1>  <br>  <a1 style='font-family: times new roman; font-style:italic;'>d</a1> =   <a1 style='color: #FF0000'> "+diagonalbase+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.paralelepipedo.comprimentoa.focus();
      document.paralelepipedo.comprimentoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
   /** ***************************************    Ã¡rea do base:   a_b = a . b  ****************************************  **/  
    if (a === "areabase") {
      var comprimentoa = eval(document.paralelepipedo.comprimentoa.value.replace(",",".").replace(/ /g,"")); 
      var largurab = eval(document.paralelepipedo.largurab.value.replace(",",".").replace(/ /g,"")); 
    
       if ((comprimentoa < 0) || isNaN(comprimentoa) || comprimentoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.paralelepipedo.comprimentoa.focus();
          document.paralelepipedo.comprimentoa.select();  
      return false;
   }   
       if ((largurab < 0) || isNaN(largurab) || largurab == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.paralelepipedo.largurab.focus();
          document.paralelepipedo.largurab.select();  
      return false;
   }  
  
   try {
   var comprimentoa = document.getElementById("resposta").value = roundNumber(comprimentoa, 2);	
   var largurab = document.getElementById("resposta").value = roundNumber(largurab, 2);	    
   var areabase = comprimentoa * largurab ;
   var areabase = document.getElementById("resposta").value = roundNumber(areabase, 2);	 
   
     document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>A Ã¡rea da base Ã©: <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>b</a1> <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> = "+comprimentoa+" âˆ™ "+largurab+"  <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1>  =  <a1 style='color: #FF0000'> "+areabase+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>  </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.paralelepipedo.comprimentoa.focus();
      document.paralelepipedo.comprimentoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
  /** *****************************************  comprimento a:   a = V/(b.c)   *************************************  **/  
    if (a === "comprimentoaa") { 
      var volume = eval(document.paralelepipedo.volume.value.replace(",",".").replace(/ /g,"")); 
      var largurab = eval(document.paralelepipedo.largurab.value.replace(",",".").replace(/ /g,"")); 
      var alturac = eval(document.paralelepipedo.alturac.value.replace(",",".").replace(/ /g,"")); 	
    
       if ((volume < 0) || isNaN(volume) || volume == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.paralelepipedo.volume.focus();
          document.paralelepipedo.volume.select();  
      return false;
   }   
       if ((largurab < 0) || isNaN(largurab) || largurab == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.paralelepipedo.largurab.focus();
          document.paralelepipedo.largurab.select();  
      return false;
   }  
       if ((alturac < 0) || isNaN(alturac) || alturac == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.paralelepipedo.alturac.focus();
          document.paralelepipedo.alturac.select();  
      return false;
   }  
    
   try {
   var volume = document.getElementById("resposta").value = roundNumber(volume, 2);	
   var largurab = document.getElementById("resposta").value = roundNumber(largurab, 2);	
   var alturac = document.getElementById("resposta").value = roundNumber(alturac, 2);	 
   var comprimentoa = volume /(alturac * largurab) ;
   var comprimentoa = document.getElementById("resposta").value = roundNumber(comprimentoa, 2);	  
   var comprimentoa1 = alturac * largurab ;
   var comprimentoa1 = document.getElementById("resposta").value = roundNumber(comprimentoa1, 2);	 
    
     document.getElementById('resposta').innerHTML ="<hr> O comprimento <a1 style='font-family: times new roman; font-style:italic;'>a</a1> Ã©: <br> V = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>b</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>c</a1>  <br>   "+volume+" = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> âˆ™ "+largurab+" âˆ™ "+alturac+" <br>  "+volume+" = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> âˆ™ "+comprimentoa1+" <br>    <div style='line-height: 15px;'>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+volume+" </td></tr><tr><td style='text-align:center;'> "+comprimentoa1+" </td></tr></tbody></table> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = <a1 style='color: #FF0000'> "+comprimentoa+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>    </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.paralelepipedo.largurab.focus();
      document.paralelepipedo.largurab.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
  /** *****************************************   Largura b:   b = V/(a.c)  *************************************  **/  
    if (a === "largurabb") { 
      var volume = eval(document.paralelepipedo.volume.value.replace(",",".").replace(/ /g,"")); 
      var comprimentoa = eval(document.paralelepipedo.comprimentoa.value.replace(",",".").replace(/ /g,"")); 
      var alturac = eval(document.paralelepipedo.alturac.value.replace(",",".").replace(/ /g,"")); 	
    
       if ((volume < 0) || isNaN(volume) || volume == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.paralelepipedo.volume.focus();
          document.paralelepipedo.volume.select();  
      return false;
   }   
       if ((comprimentoa < 0) || isNaN(comprimentoa) || comprimentoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.paralelepipedo.comprimentoa.focus();
          document.paralelepipedo.comprimentoa.select();  
      return false;
   }  
       if ((alturac < 0) || isNaN(alturac) || alturac == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.paralelepipedo.alturac.focus();
          document.paralelepipedo.alturac.select();  
      return false;
   }    
    
   try {
   var volume = document.getElementById("resposta").value = roundNumber(volume, 2);	
   var comprimentoa = document.getElementById("resposta").value = roundNumber(comprimentoa, 2);	
   var alturac = document.getElementById("resposta").value = roundNumber(alturac, 2);	    
   var largura = volume /( comprimentoa * alturac) ;
   var largura = document.getElementById("resposta").value = roundNumber(largura, 2);	  
   var largura1 = comprimentoa * alturac;
   var largura1 = document.getElementById("resposta").value = roundNumber(largura1, 2);	   
    
     document.getElementById('resposta').innerHTML ="<hr> A largura <a1 style='font-family: times new roman; font-style:italic;'>b</a1> Ã©: <br> V = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>b</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>c</a1>  <br>  "+volume+" = "+comprimentoa+" âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>b</a1> âˆ™ "+alturac+" <br>  "+volume+" = "+largura1+" âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>b</a1> <br> <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+volume+" </td></tr><tr><td style='text-align:center;'> "+largura1+" </td></tr></tbody></table> </div>  <a1 style='font-family: times new roman; font-style:italic;'>b</a1> = <a1 style='color: #FF0000'> "+largura+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1> <hr><h1 class='logomarca'> BpW </h1>   " 
     
      document.paralelepipedo.comprimentoa.focus();
      document.paralelepipedo.comprimentoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** *****************************************   Altura c:   c = V/(a.b)  *************************************  **/  
    if (a === "alturacc") { 
      var volume = eval(document.paralelepipedo.volume.value.replace(",",".").replace(/ /g,"")); 
      var comprimentoa = eval(document.paralelepipedo.comprimentoa.value.replace(",",".").replace(/ /g,"")); 
      var largurab = eval(document.paralelepipedo.largurab.value.replace(",",".").replace(/ /g,"")); 	
    
       if ((volume < 0) || isNaN(volume) || volume == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.paralelepipedo.volume.focus();
          document.paralelepipedo.volume.select();  
      return false;
   }   
       if ((comprimentoa < 0) || isNaN(comprimentoa) || comprimentoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.paralelepipedo.comprimentoa.focus();
          document.paralelepipedo.comprimentoa.select();  
      return false;
   }  
       if ((largurab < 0) || isNaN(largurab) || largurab == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.paralelepipedo.largurab.focus();
          document.paralelepipedo.largurab.select();  
      return false;
   }   
    
   try {
   var volume = document.getElementById("resposta").value = roundNumber(volume, 2);	
   var comprimentoa = document.getElementById("resposta").value = roundNumber(comprimentoa, 2);	
   var largurab = document.getElementById("resposta").value = roundNumber(largurab, 2);	    
   var altura = volume /( comprimentoa * largurab) ;
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2);	 
   var altura1 = comprimentoa * largurab;
   var altura1 = document.getElementById("resposta").value = roundNumber(altura1, 2);	  
    
     document.getElementById('resposta').innerHTML ="<hr> A altura <a1 style='font-family: times new roman; font-style:italic;'>c</a1> Ã©: <br>   <div style='line-height: 23px;'> V = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>b</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>c</a1>  <br> "+volume+" = "+comprimentoa+" âˆ™ "+largurab+" âˆ™ c <br> "+volume+" = "+altura1+" âˆ™ c <br> <div style='line-height: 16px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>c</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+volume+" </td></tr><tr><td style='text-align:center;'> "+altura1+" </td></tr></tbody></table>  </div> <a1 style='font-family: times new roman; font-style:italic;'>c</a1> = <a1 style='color: #FF0000'> "+altura+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  <hr><h1 class='logomarca'> BpW </h1> " 
     
      document.paralelepipedo.comprimentoa.focus();
      document.paralelepipedo.comprimentoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** ************************  Comprimento em funÃ§Ã£o da Ã¡rea:   a = (A - 2.a.b)/2(b+c)  *********************  **/  
    if (a === "comprimentoaa2") { 
      var area = eval(document.paralelepipedo.area.value.replace(",",".").replace(/ /g,"")); 
      var alturac = eval(document.paralelepipedo.alturac.value.replace(",",".").replace(/ /g,"")); 
      var largurab = eval(document.paralelepipedo.largurab.value.replace(",",".").replace(/ /g,"")); 	
    
       if ((area < 0) || isNaN(area) || area == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.paralelepipedo.area.focus();
          document.paralelepipedo.area.select();  
      return false;
   }   
       if ((alturac < 0) || isNaN(alturac) || alturac == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.paralelepipedo.alturac.focus();
          document.paralelepipedo.alturac.select();  
      return false;
   }  
       if ((largurab < 0) || isNaN(largurab) || largurab == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.paralelepipedo.largurab.focus();
          document.paralelepipedo.largurab.select();  
      return false;
   }    
  
   try {
   var area = document.getElementById("resposta").value = roundNumber(area, 2);	
   var alturac = document.getElementById("resposta").value = roundNumber(alturac, 2);	
   var largurab = document.getElementById("resposta").value = roundNumber(largurab, 2);	   
   var comprimentoa = (area - 2 * largurab * alturac)/(2*(largurab + alturac))  ;
   var comprimentoa = document.getElementById("resposta").value = roundNumber(comprimentoa, 2);	 
   var comprimentoa1 = 2 * largurab * alturac;
   var comprimentoa1 = document.getElementById("resposta").value = roundNumber(comprimentoa1, 2);	 
   var comprimentoa2 = 2*(largurab + alturac)  ; 
   var comprimentoa2 = document.getElementById("resposta").value = roundNumber(comprimentoa2, 2);	 
   var comprimentoa3 = (area - 2 * largurab * alturac)  ; 
   var comprimentoa3 = document.getElementById("resposta").value = roundNumber(comprimentoa3, 2);	 
    
     document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 16px;'>O comprimento <a1 style='font-family: times new roman; font-style:italic;'>a</a1> Ã©: <br> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> âˆ’ 2 âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>b</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>c</a1> </td></tr><tr><td style='text-align:center;'> 2 âˆ™ (<a1 style='font-family: times new roman; font-style:italic;'>b</a1> + <a1 style='font-family: times new roman; font-style:italic;'>c</a1>) </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+area+" âˆ’ 2 âˆ™ "+largurab+" âˆ™ "+alturac+" </td></tr><tr><td style='text-align:center;'> 2 âˆ™ ("+largurab+" + "+alturac+") </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+area+" âˆ’ "+comprimentoa1+" </td></tr><tr><td style='text-align:center;'> "+comprimentoa2+" </td></tr></tbody></table>      <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+comprimentoa3+" </td></tr><tr><td style='text-align:center;'> "+comprimentoa2+" </td></tr></tbody></table>    </div>  <a1 style='font-family: times new roman; font-style:italic;'>a</a1> =  <a1 style='color: #FF0000'> "+comprimentoa+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1><hr><h1 class='logomarca'> BpW </h1> " 
     
      document.paralelepipedo.largurab.focus();
      document.paralelepipedo.largurab.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
      
  /** ************************  Largura em funÃ§Ã£o da Ã¡rea:   b = (A - 2ac)/2(a+c)  *********************  **/  
    if (a === "largurabb2") { 
      var comprimentoa = eval(document.paralelepipedo.comprimentoa.value.replace(",",".").replace(/ /g,"")); 
      var area = eval(document.paralelepipedo.area.value.replace(",",".").replace(/ /g,"")); 
      var alturac = eval(document.paralelepipedo.alturac.value.replace(",",".").replace(/ /g,"")); 	
    
       if ((comprimentoa < 0) || isNaN(comprimentoa) || comprimentoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.paralelepipedo.comprimentoa.focus();
          document.paralelepipedo.comprimentoa.select();  
      return false;
   }   
       if ((area < 0) || isNaN(area) || area == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.paralelepipedo.area.focus();
          document.paralelepipedo.area.select();  
      return false;
   }  
       if ((alturac < 0) || isNaN(alturac) || alturac == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.paralelepipedo.alturac.focus();
          document.paralelepipedo.alturac.select();  
      return false;
   }  
    
   try {
   var area = document.getElementById("resposta").value = roundNumber(area, 2);	
   var alturac = document.getElementById("resposta").value = roundNumber(alturac, 2);	
   var comprimentoa = document.getElementById("resposta").value = roundNumber(comprimentoa, 2);	   
   var comprimentoaa = (area - 2 * comprimentoa * alturac)/(2*(comprimentoa + alturac))  ;
   var comprimentoaa = document.getElementById("resposta").value = roundNumber(comprimentoaa, 2);	 
   var comprimentoa1 = 2 * comprimentoa * alturac;
   var comprimentoa1 = document.getElementById("resposta").value = roundNumber(comprimentoa1, 2);	  
   var comprimentoa2 = 2*(comprimentoa + alturac)  ; 
   var comprimentoa2 = document.getElementById("resposta").value = roundNumber(comprimentoa2, 2);	   
   var comprimentoa3 = (area - 2 * comprimentoa * alturac)  ; 
   var comprimentoa3 = document.getElementById("resposta").value = roundNumber(comprimentoa3, 2);	   
    
     document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 16px;'>O comprimento <a1 style='font-family: times new roman; font-style:italic;'>b</a1> Ã©: <br>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> âˆ’ 2 âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>a</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>c</a1> </td></tr><tr><td style='text-align:center;'> 2 âˆ™ (<a1 style='font-family: times new roman; font-style:italic;'>a</a1> + <a1 style='font-family: times new roman; font-style:italic;'>c</a1>) </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+area+" âˆ’ 2 âˆ™ "+comprimentoa+" âˆ™ "+alturac+" </td></tr><tr><td style='text-align:center;'>  2 âˆ™ ("+comprimentoa+" + "+alturac+")</td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+area+" âˆ’ "+comprimentoa1+" </td></tr><tr><td style='text-align:center;'>  "+comprimentoa1+"</td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+comprimentoa3+" </td></tr><tr><td style='text-align:center;'> "+comprimentoa1+" </td></tr></tbody></table>  </div> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> = <a1 style='color: #FF0000'> "+comprimentoaa+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  <hr><h1 class='logomarca'> BpW </h1> " 
     
      document.paralelepipedo.comprimentoa.focus();
      document.paralelepipedo.comprimentoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** ************************  Altura em funÃ§Ã£o da Ã¡rea:   c = (A - 2ab)/2(a+b)  *********************  **/  
    if (a === "alturacc2") {
      var comprimentoa = eval(document.paralelepipedo.comprimentoa.value.replace(",",".").replace(/ /g,"")); 
      var area = eval(document.paralelepipedo.area.value.replace(",",".").replace(/ /g,"")); 
      var largurab = eval(document.paralelepipedo.largurab.value.replace(",",".").replace(/ /g,"")); 	
    
       if ((comprimentoa < 0) || isNaN(comprimentoa) || comprimentoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.paralelepipedo.comprimentoa.focus();
          document.paralelepipedo.comprimentoa.select();  
      return false;
   }   
       if ((area < 0) || isNaN(area) || area == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.paralelepipedo.area.focus();
          document.paralelepipedo.area.select();  
      return false;
   }  
       if ((largurab < 0) || isNaN(largurab) || largurab == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.paralelepipedo.largurab.focus();
          document.paralelepipedo.largurab.select();  
      return false;
   } 
  
   try {
   var area = document.getElementById("resposta").value = roundNumber(area, 2);	
   var largurab = document.getElementById("resposta").value = roundNumber(largurab, 2);	
   var comprimentoa = document.getElementById("resposta").value = roundNumber(comprimentoa, 2);	   
   var comprimentoaa = (area - 2 * comprimentoa * largurab)/(2*(comprimentoa + largurab))  ;
   var comprimentoaa = document.getElementById("resposta").value = roundNumber(comprimentoaa, 2);	 
   var comprimentoa1 = 2 * comprimentoa * largurab;
   var comprimentoa1 = document.getElementById("resposta").value = roundNumber(comprimentoa1, 2);	 
   var comprimentoa2 = 2*(comprimentoa + largurab)  ; 
   var comprimentoa2 = document.getElementById("resposta").value = roundNumber(comprimentoa2, 2);	 
   var comprimentoa3 = (area - 2 * comprimentoa * largurab)  ; 
   var comprimentoa3 = document.getElementById("resposta").value = roundNumber(comprimentoa3, 2);	 
    
     document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 16px;'>O comprimento <a1 style='font-family: times new roman; font-style:italic;'>c</a1> Ã©: <br>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>c</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> âˆ’ 2 âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>a</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>b</a1> </td></tr><tr><td style='text-align:center;'> 2 âˆ™ (<a1 style='font-family: times new roman; font-style:italic;'>a</a1> + <a1 style='font-family: times new roman; font-style:italic;'>b</a1>) </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>c</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+area+" âˆ’ 2 âˆ™ "+comprimentoa+" âˆ™ "+largurab+" </td></tr><tr><td style='text-align:center;'> 2 âˆ™ ("+comprimentoa+" + "+largurab+") </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>c</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+area+" âˆ’ "+comprimentoa1+" </td></tr><tr><td style='text-align:center;'> "+comprimentoa1+" </td></tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>c</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+comprimentoa3+" </td></tr><tr><td style='text-align:center;'> "+comprimentoa1+" </td></tr></tbody></table>   </div>  <a1 style='font-family: times new roman; font-style:italic;'>c</a1>  = <a1 style='color: #FF0000'> "+comprimentoaa+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1> <hr><h1 class='logomarca'> BpW </h1> " 
     
      document.paralelepipedo.comprimentoa.focus();
      document.paralelepipedo.comprimentoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  }
  
  
  
  /***########################################  CUBO  ############################################################      **/
  
  function cubo2() {
    var a = document.forms["cubo"]["cubo_type"].value;
  /** ******************************  VOLUME (V = aÂ³ )  *****************************  **/  
   if (a === "volume") {
      document.getElementById("area").disabled = true;
      document.getElementById("area").value ="";
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";
      document.getElementById("Diagonald").disabled = true;	
      document.getElementById("Diagonald").value ="";
      document.getElementById("Diagonald1").disabled = true;	
      document.getElementById("Diagonald1").value ="";
      document.getElementById("arestaa").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}
      
  /** ******************************  Ãrea total (A = 6 . aÂ² )  *****************************  **/  
   if (a === "areatotal") {
      document.getElementById("area").disabled = true;
      document.getElementById("area").value ="";
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";
      document.getElementById("Diagonald").disabled = true;	
      document.getElementById("Diagonald").value ="";
      document.getElementById("Diagonald1").disabled = true;	
      document.getElementById("Diagonald1").value ="";
      document.getElementById("arestaa").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
  
      /** ****************************** Diagonal D do cubo (D = a . âˆš3 )  *****************************  **/  
   if (a === "diagonalcubo") {
      document.getElementById("area").disabled = true;
      document.getElementById("area").value ="";
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";
      document.getElementById("Diagonald").disabled = true;	
      document.getElementById("Diagonald").value ="";
      document.getElementById("Diagonald1").disabled = true;	
      document.getElementById("Diagonald1").value ="";
      document.getElementById("arestaa").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
      
  
      /** ****************************** Diagonal d da base (d = a . âˆš2 )  *****************************  **/  
   if (a === "diagonalbase") {
      document.getElementById("area").disabled = true;
      document.getElementById("area").value ="";
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";
      document.getElementById("Diagonald").disabled = true;	
      document.getElementById("Diagonald").value ="";
      document.getElementById("Diagonald1").disabled = true;	
      document.getElementById("Diagonald1").value ="";
      document.getElementById("arestaa").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
          
      /** ****************************** Aresta a em funÃ§Ã£o do volume: (a = âˆšV )  *****************************  **/  
   if (a === "aresta1") {
      document.getElementById("area").disabled = true;
      document.getElementById("area").value ="";
      document.getElementById("arestaa").disabled = true;
      document.getElementById("arestaa").value ="";
      document.getElementById("Diagonald").disabled = true;	
      document.getElementById("Diagonald").value ="";
      document.getElementById("Diagonald1").disabled = true;	
      document.getElementById("Diagonald1").value ="";
      document.getElementById("volume").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /** ****************************** Aresta a em funÃ§Ã£o da Ã¡rea: (a = âˆš(V/6) )  *****************************  **/  
   if (a === "aresta2") {
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";
      document.getElementById("arestaa").disabled = true;
      document.getElementById("arestaa").value ="";
      document.getElementById("Diagonald").disabled = true;	
      document.getElementById("Diagonald").value ="";
      document.getElementById("Diagonald1").disabled = true;	
      document.getElementById("Diagonald1").value ="";
      document.getElementById("area").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}
      
  /** ****************************** Aresta a em funÃ§Ã£o da Diagonal D: (a = (âˆš3.D)/3) )  *****************************  **/  
   if (a === "aresta3") {
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";
      document.getElementById("arestaa").disabled = true;
      document.getElementById("arestaa").value ="";
      document.getElementById("area").disabled = true;	
      document.getElementById("area").value ="";
      document.getElementById("Diagonald1").disabled = true;	
      document.getElementById("Diagonald1").value ="";
      document.getElementById("Diagonald").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
  
  
  /** ****************************** Aresta a em funÃ§Ã£o da Diagonal d: (a = (âˆš2.d)/2) )  *****************************  **/  
   if (a === "aresta4") {
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";
      document.getElementById("arestaa").disabled = true;
      document.getElementById("arestaa").value ="";
      document.getElementById("area").disabled = true;	
      document.getElementById("area").value ="";
      document.getElementById("Diagonald").disabled = true;	
      document.getElementById("Diagonald").value ="";
      document.getElementById("Diagonald1").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
      
  } 
   
  
  function cubo1() {
      
   var ddl = document.getElementById("ops");
   var selectedValue = ddl.options[ddl.selectedIndex].value;
      if (selectedValue == "")
     {
      alert("Escolha uma opÃ§Ã£o para Calcular!");
     }
      
    var a = document.forms["cubo"]["cubo_type"].value;
    /** *****************************************************  VOLUME (V = aÂ³ )    ****************************************  **/  
    if (a === "volume") { 
      var arestaa = eval(document.cubo.arestaa.value.replace(",",".").replace(/ /g,"")); 
    
       if ((arestaa < 0) || isNaN(arestaa) || arestaa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cubo.arestaa.focus();
          document.cubo.arestaa.select();  
      return false;
   }   
   
   try {
   var arestaa = document.getElementById("resposta").value = roundNumber(arestaa, 2);  
   var volume = arestaa * arestaa * arestaa;
   var volume = document.getElementById("resposta").value = roundNumber(volume, 2);  
    
     document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 22px;'>O volume do cubo Ã©: <Br>  V = <a1 style='font-family: times new roman; font-style:italic;'>a</a1>Â³ = ("+arestaa+")Â³ <br>  V = <a1 style='color: #FF0000'> "+volume+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ³</a1>      </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.cubo.arestaa.focus();
      document.cubo.arestaa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   
    /** ********************************************   Ãrea total (A = 6 . aÂ² )    ****************************************  **/  
    if (a === "areatotal") { 
      var arestaa = eval(document.cubo.arestaa.value.replace(",",".").replace(/ /g,"")); 
    
       if ((arestaa < 0) || isNaN(arestaa) || arestaa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cubo.arestaa.focus();
          document.cubo.arestaa.select();  
      return false;
   }   
    
   try {
   var arestaa = document.getElementById("resposta").value = roundNumber(arestaa, 2);    
   var areatotal = 6 * arestaa * arestaa;
   var areatotal = document.getElementById("resposta").value = roundNumber(areatotal, 2);  
   var areatotal2 = arestaa * arestaa;
   var areatotal2 = document.getElementById("resposta").value = roundNumber(areatotal2, 2);   
    
     document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>A Ã¡rea total do cubo Ã©: <Br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = 6 âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>a</a1>Â² = 6 âˆ™ ("+arestaa +")Â² <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> =  6 âˆ™ "+areatotal2+" <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = <a1 style='color: #FF0000'> "+areatotal+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>   </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.cubo.arestaa.focus();
      document.cubo.arestaa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
    /** ********************************************  Diagonal D do cubo (D = a . âˆš3 )    ****************************************  **/  
    if (a === "diagonalcubo") {
      var arestaa = eval(document.cubo.arestaa.value.replace(",",".").replace(/ /g,"")); 
    
       if ((arestaa < 0) || isNaN(arestaa) || arestaa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cubo.arestaa.focus();
          document.cubo.arestaa.select();  
      return false;
   } 
    
   try {
   var arestaa = document.getElementById("resposta").value = roundNumber(arestaa, 2);     
   var diagonalcubo = arestaa * Math.sqrt(3);
   var diagonalcubo = document.getElementById("resposta").value = roundNumber(diagonalcubo, 2);  
    
     document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>A diagonal D do cubo Ã©: <Br>  D = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> &nbsp; = &nbsp;"+arestaa+" âˆ™ 1,73  <br>  D = <a1 style='color: #FF0000'> "+diagonalcubo+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1> <br> ou <br> D = <a1 style='color: #FF0000'> "+arestaa+"âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1></a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>   </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.cubo.arestaa.focus();
      document.cubo.arestaa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }	
      
       
  /** ********************************************  Diagonal d da base (d = a . âˆš2 )    ****************************************  **/  
    if (a === "diagonalbase") { 
      var arestaa = eval(document.cubo.arestaa.value.replace(",",".").replace(/ /g,"")); 
    
       if ((arestaa < 0) || isNaN(arestaa) || arestaa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cubo.arestaa.focus();
          document.cubo.arestaa.select();  
      return false;
   }   
    
   try {
   var arestaa = document.getElementById("resposta").value = roundNumber(arestaa, 2);      
   var diagonalbase = arestaa * Math.sqrt(2);
   var diagonalbase = document.getElementById("resposta").value = roundNumber(diagonalbase, 2);   
    
     document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>A diagonal <a1 style='font-family: times new roman; font-style:italic;'>d</a1> da base do cubo Ã©: <Br>  <a1 style='font-family: times new roman; font-style:italic;'>d</a1> = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> âˆ™ âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>2</a1> &nbsp; = &nbsp;"+arestaa+" âˆ™ 1,41  <br>   <a1 style='font-family: times new roman; font-style:italic;'>d</a1> = <a1 style='color: #FF0000'> "+diagonalbase+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1> <br> ou <br> <a1 style='font-family: times new roman; font-style:italic;'>d</a1> = <a1 style='color: #FF0000'> "+arestaa+"âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>2</a1></a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>   </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.cubo.arestaa.focus();
      document.cubo.arestaa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
  /** ****************************** Aresta a em funÃ§Ã£o do volume: (a = âˆšV )  *****************************  **/  
    if (a === "aresta1") {
      var volume = eval(document.cubo.volume.value.replace(",",".").replace(/ /g,"")); 
    
       if ((volume < 0) || isNaN(volume) || volume == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cubo.volume.focus();
          document.cubo.volume.select();  
      return false;
   } 
  
   try {
   var volume = document.getElementById("resposta").value = roundNumber(volume, 2);    
   var aresta1 =  Math.pow(volume, 1/3);
   var aresta1 = document.getElementById("resposta").value = roundNumber(aresta1, 3);  
   
     document.getElementById('resposta').innerHTML ="<hr>  A aresta <a1 style='font-family: times new roman; font-style:italic;'>a</a1> do cubo Ã©: <Br> <div style='line-height: 22px;'>  V = <a1 style='font-family: times new roman; font-style:italic;'>a</a1>Â³ <br>  "+volume+" = <a1 style='font-family: times new roman; font-style:italic;'>a</a1>Â³ <br>  <a1 style='font-family: times new roman; font-style:italic;'>a</a1>  = Â³âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>"+volume+"</a1>  <br> <a1 style='font-family: times new roman; font-style:italic;'>a</a1>  =  <a1 style='color: #FF0000'> "+aresta1+"</a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>   </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.cubo.volume.focus();
      document.cubo.volume.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** ****************************** Aresta a em funÃ§Ã£o da Ã¡rea: (a = âˆš(V/6) )  *****************************  **/  
    if (a === "aresta2") { 
      var area = eval(document.cubo.area.value.replace(",",".").replace(/ /g,"")); 
    
       if ((area < 0) || isNaN(area) || area == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cubo.area.focus();
          document.cubo.area.select();  
      return false;
   }   
  
   try {
   var area = document.getElementById("resposta").value = roundNumber(area, 2);     
   var aresta2 =  Math.pow(area/6, 1/2);
   var aresta2 = document.getElementById("resposta").value = roundNumber(aresta2, 2);   
   var aresta3 =  area/6;
   var aresta3 = document.getElementById("resposta").value = roundNumber(aresta3, 2);    
    
     document.getElementById('resposta').innerHTML ="<hr> A aresta <a1 style='font-family: times new roman; font-style:italic;'>a</a1> do cubo Ã©: <Br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = 6 âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>a</a1>Â²   <br> "+area+" = 6 âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>a</a1>Â² <br> <div style='line-height: 15px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> "+area+"  </td><td rowspan='2'> &nbsp;=&nbsp; <a1 style='font-family: times new roman; font-style:italic;'>a</a1>Â² </td></tr><tr><td> 6 </td> </tr></tbody></table> </div> "+aresta3+" = <a1 style='font-family: times new roman; font-style:italic;'>a</a1>Â² <br>  <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>"+aresta3+"</a1> <br>  <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = <a1 style='color: #FF0000'> "+aresta2+"</a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  <hr><h1 class='logomarca'> BpW </h1>  " 
     
      document.cubo.area.focus();
      document.cubo.area.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** ****************************** Aresta a em funÃ§Ã£o da Diagonal D: (a = (âˆš3.D)/3) )  *****************************  **/  
    if (a === "aresta3") { 
      var Diagonald = eval(document.cubo.Diagonald.value.replace(",",".").replace(/ /g,"")); 
    
       if ((Diagonald< 0) || isNaN(Diagonald) || Diagonald == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cubo.Diagonald.focus();
          document.cubo.Diagonald.select();  
      return false;
   }   
    
   try {
   var Diagonald = document.getElementById("resposta").value = roundNumber(Diagonald, 2);      
   var aresta3 =  (Diagonald * Math.sqrt(3))/3;
   var aresta3 = document.getElementById("resposta").value = roundNumber(aresta3, 2);  
   var aresta4 =  (Diagonald * Math.sqrt(3)); 
   var aresta4 = document.getElementById("resposta").value = roundNumber(aresta4, 2);   
   var aresta5 =  Diagonald /3;
   var aresta5 = document.getElementById("resposta").value = roundNumber(aresta5, 2);   
    
     document.getElementById('resposta').innerHTML ="<hr>  A aresta <a1 style='font-family: times new roman; font-style:italic;'>a</a1> do cubo Ã©: <Br><div style='line-height: 15px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'><a1 style='font-family: times new roman; font-style:italic;'>a</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'>âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> âˆ™ D </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> 1,73 âˆ™ "+Diagonald+" </td></tr> <tr> <td> 3</td><td> 3 </td> </tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+aresta4+" </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table> </div> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> &nbsp; = &nbsp; <a1 style='color: #FF0000'> "+aresta3+"</a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman; font-style:italic;'>u</a1> <br>     ou <br>  <a1 style='font-family: times new roman; font-style:italic;'>a</a1> &nbsp;=  <a1 style='color: #FF0000'> "+aresta5+"âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1></a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman; font-style:italic;'>u</a1>  <hr><h1 class='logomarca'> BpW </h1> " 
     
      document.cubo.Diagonald.focus();
      document.cubo.Diagonald.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** ****************************** Aresta a em funÃ§Ã£o da Diagonal d: (a = (âˆš2.d)/2) )  *****************************  **/  
    if (a === "aresta4") { 
      var Diagonald1 = eval(document.cubo.Diagonald1.value.replace(",",".").replace(/ /g,"")); 
    
       if ((Diagonald1< 0) || isNaN(Diagonald1) || Diagonald1 == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cubo.Diagonald1.focus();
          document.cubo.Diagonald1.select();  
      return false;
   }   
  
   try {
   var Diagonald1 = document.getElementById("resposta").value = roundNumber(Diagonald1, 2);     
   var aresta3 =  (Diagonald1 * Math.sqrt(2))/2;
   var aresta3 = document.getElementById("resposta").value = roundNumber(aresta3, 2);   
   var aresta4 =  (Diagonald1 * Math.sqrt(2)); 
   var aresta4 = document.getElementById("resposta").value = roundNumber(aresta4, 2);    
   var aresta5 =  Diagonald1 /2;
   var aresta5 = document.getElementById("resposta").value = roundNumber(aresta5, 2);   
    
     document.getElementById('resposta').innerHTML =" <hr> A aresta <a1 style='font-family: times new roman; font-style:italic;'>a</a1> do cubo Ã©: <Br> <div style='line-height: 15px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'><a1 style='font-family: times new roman; font-style:italic;'>a</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'>âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>2</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>d</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'>1,41 âˆ™ "+Diagonald1+"</td></tr> <tr> <td>2</td><td>2</td> </tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+aresta4+" </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>  </div> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = <a1 style='color: #FF0000'> "+aresta3+"</a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman; font-style:italic;'>u</a1> <br>  ou <br>  <a1 style='font-family: times new roman; font-style:italic;'>a</a1> &nbsp;=  <a1 style='color: #FF0000'> "+aresta5+"âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>2</a1></a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman; font-style:italic;'>u</a1> <hr><h1 class='logomarca'> BpW </h1> " 
     
      document.cubo.Diagonald1.focus();
      document.cubo.Diagonald1.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  }
  
  
  
  
  /***######################################  PRISMA REGULAR ###############################################      **/
  
  function prisma2() {
    var a = document.forms["prisma"]["prisma_type"].value;
  
  /** ***************************   AREA da base (A =(n.aÂ².cotg PI/n)/4   ***********************  **/  
   if (a === "areabase") {
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";
      document.getElementById("areabase").disabled = true;
      document.getElementById("areabase").value ="";	
       document.getElementById("ladoa").disabled = false;		
       document.getElementById("ladosn").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}
      
  /** *************************   Ãrea lateral (AL = n . a . h   ***********************  **/  
   if (a === "arealateral") {
      document.getElementById("areabase").disabled = true;
      document.getElementById("areabase").value ="";		 
      document.getElementById("altura").disabled = false;
       document.getElementById("ladoa").disabled = false;		
       document.getElementById("ladosn").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /** *************************   Ãrea Total (At = A(base) . A(lateral)   ***********************  **/  
   if (a === "areatotal") {
      document.getElementById("areabase").disabled = true;
      document.getElementById("areabase").value ="";		 
      document.getElementById("altura").disabled = false;
       document.getElementById("ladoa").disabled = false;		
       document.getElementById("ladosn").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /** ************************   Volume:  (V = A(base) . h )   ***********************  **/  
   if (a === "volume") {
      document.getElementById("areabase").disabled = true;
      document.getElementById("areabase").value ="";		 
      document.getElementById("altura").disabled = false;
       document.getElementById("ladoa").disabled = false;		
       document.getElementById("ladosn").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /** ************************   Ãrea Total Prisma irregular (At = A(base) . A(lateral)   ***********************  **/  
   if (a === "Prismairregularareatotal") {
      document.getElementById("areabase").disabled = false;
      document.getElementById("altura").disabled = false;
       document.getElementById("ladoa").disabled = false;		
       document.getElementById("ladosn").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
      
  /** ************************   Volume Prisma irregular (At = A(base) . h)   ***********************  **/  
   if (a === "Prismairregularvolume") {
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value ="";	
      document.getElementById("ladosn").disabled = true;
      document.getElementById("ladosn").value ="";	
      document.getElementById("areabase").disabled = false;
      document.getElementById("altura").disabled = false;
   }
   try { 	}
       catch(e) {alert(e)}		
  } 
   
    
  
  function prisma1() {
  
   var ddl = document.getElementById("ops");
   var selectedValue = ddl.options[ddl.selectedIndex].value;
      if (selectedValue == "")
     {
      alert("Escolha uma opÃ§Ã£o para Calcular!");
     }	
      
    var a = document.forms["prisma"]["prisma_type"].value;
    /** *******************************  CÃ¡lculdo da Ã¡rea da base: A =(n.aÂ².cotg PI/n)/4  *****************************  **/  
    if (a === "areabase") { 
      var ladoa = eval(document.prisma.ladoa.value.replace(",",".").replace(/ /g,""));
      var ladosn = eval(document.prisma.ladosn.value.replace(",",".").replace(/ /g,""));	
    
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.prisma.ladoa.focus();
          document.prisma.ladoa.select();  
      return false;
   } 
       if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("NÃ£o existe polÃ­gono menor de 3 lados!! e/ou digite um/os valor(es) numÃ©rico(s) maior do que 2!!");
          document.prisma.ladosn.focus();
          document.prisma.ladosn.select();  
      return false;
   }   
  
   try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);
   var ladosn = document.getElementById("resposta").value = roundNumber(ladosn, 0);
   var areadabaseprisma = (ladosn * ladoa * ladoa * (1/(Math.tan((Math.PI*(180/ladosn)/180)))))/4;
   var areadabaseprisma = document.getElementById("resposta").value = roundNumber(areadabaseprisma, 2); 
   var Res1 = ladosn * ladoa * ladoa;
   var Res1 = document.getElementById("resposta").value = roundNumber(Res1, 2);  
   var Res2 = (Math.tan((Math.PI*(180/ladosn)/180)));
   var Res2 = document.getElementById("resposta").value = roundNumber(Res2, 2);   
   var Res3 =  ladoa * ladoa;
   var Res3 = document.getElementById("resposta").value = roundNumber(Res3, 2);   
   var Res4 = (180/ladosn);
   var Res4 = document.getElementById("resposta").value = roundNumber(Res4, 2);   
   
     document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 16px;'>A Ã¡rea da base do prisma regular reto de <a1 style='color: #FF0000'>"+ladosn+"</a1> lados Ã©: <br> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>a</a1><a1 style='font-size: 21px; font-family: times new roman;'>Â²</a1> âˆ™ cotg(180Â°/<a1 style='font-family: times new roman; font-style:italic;'>n</a1>) </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladosn+" âˆ™ ("+ladoa+")<a1 style='font-size: 21px; font-family: times new roman;'>Â²</a1> âˆ™ cotg(180Â°/"+ladosn+") </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladosn+" âˆ™ "+Res3+" âˆ™ cotg("+Res4+")Â° </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>"+Res1+" âˆ™ "+Res2+" </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table> A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> = <a1 style='color: #FF0000'> "+areadabaseprisma+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>  </div><hr><h1 class='logomarca'> BpW </h1>"   
     
      document.prisma.ladosn.focus();
      document.prisma.ladosn.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
    /** **************************************  Ãrea lateral (AL = n . a . h)   ****************************************  **/  
    if (a === "arealateral") { 
      var ladoa = eval(document.prisma.ladoa.value.replace(",",".").replace(/ /g,""));
      var ladosn = eval(document.prisma.ladosn.value.replace(",",".").replace(/ /g,""));	
      var altura = eval(document.prisma.altura.value.replace(",",".").replace(/ /g,""));		
    
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.prisma.ladoa.focus();
          document.prisma.ladoa.select();  
      return false;
   } 
       if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("NÃ£o existe polÃ­gono menor de 3 lados!! e/ou digite um/os valor(es) numÃ©rico(s) maior do que 2!!");
          document.prisma.ladosn.focus();
          document.prisma.ladosn.select();  
      return false;
   }  
       if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.prisma.altura.focus();
          document.prisma.altura.select();  
      return false;
   }   
    
   try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);
   var ladosn = document.getElementById("resposta").value = roundNumber(ladosn, 0);
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2); 
   var arealateralprisma = ladosn * ladoa * altura ;
   var arealateralprisma = document.getElementById("resposta").value = roundNumber(arealateralprisma, 2);  
   
     document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 22px;'>A Ã¡rea lateral do prisma regular reto de <a1 style='color: #FF0000'>"+ladosn.toFixed(0)+"</a1> lados Ã©: <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = <a1 style='font-family: times new roman; font-style:italic;'>n</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>a</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1>  <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = "+ladosn+" âˆ™ "+ladoa+" âˆ™ "+altura+" <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = <a1 style='color: #FF0000'> "+arealateralprisma+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>  </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.prisma.ladosn.focus();
      document.prisma.ladosn.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
    /** **********************************  Ãrea Total (At = A(base) . A(lateral)    ********************************  **/  
    if (a === "areatotal") { 
      var ladoa = eval(document.prisma.ladoa.value.replace(",",".").replace(/ /g,""));
      var ladosn = eval(document.prisma.ladosn.value.replace(",",".").replace(/ /g,""));	
      var altura = eval(document.prisma.altura.value.replace(",",".").replace(/ /g,""));		
    
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.prisma.ladoa.focus();
          document.prisma.ladoa.select();  
      return false;
   } 
       if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("NÃ£o existe polÃ­gono menor de 3 lados!! e/ou digite um/os valor(es) numÃ©rico(s) maior do que 2!!");
          document.prisma.ladosn.focus();
          document.prisma.ladosn.select();  
      return false;
   }  
       if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.prisma.altura.focus();
          document.prisma.altura.select();  
      return false;
   }    
    
   try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);
   var ladosn = document.getElementById("resposta").value = roundNumber(ladosn, 0);
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2); 	 
   var areadabaseprisma = (ladosn * ladoa * ladoa * (1/(Math.tan((Math.PI*(180/ladosn)/180)))))/4;
   var areadabaseprisma = document.getElementById("resposta").value = roundNumber(areadabaseprisma, 2);  
   var Res1 = ladosn * ladoa * ladoa;
   var Res1 = document.getElementById("resposta").value = roundNumber(Res1, 2);   
   var Res2 = (Math.tan((Math.PI*(180/ladosn)/180)));
   var Res2 = document.getElementById("resposta").value = roundNumber(Res2, 2);    
   var Res3 =  ladoa * ladoa;
   var Res3 = document.getElementById("resposta").value = roundNumber(Res3, 2);    
   var Res4 = (180/ladosn);  
   var Res4 = document.getElementById("resposta").value = roundNumber(Res4, 2);    
   var arealateralprisma = ladosn * ladoa * altura ;
   var arealateralprisma = document.getElementById("resposta").value = roundNumber(arealateralprisma, 2);    
   var areatotalprisma = 2*areadabaseprisma + arealateralprisma ;
   var areatotalprisma = document.getElementById("resposta").value = roundNumber(areatotalprisma, 2);   
   var areatotalprisma2 = 2*areadabaseprisma ; 
   var areatotalprisma2 = document.getElementById("resposta").value = roundNumber(areatotalprisma2, 2);   
   
     document.getElementById('resposta').innerHTML ="<hr>  A Ã¡rea da base do prisma regular reto de <a1 style='color: #FF0000'>"+ladosn+"</a1> lados Ã©: <br> <div style='line-height: 15px;'><table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>a</a1><a1 style='font-size: 21px; font-family: times new roman;'>Â²</a1> âˆ™ cotg(180Â°/<a1 style='font-family: times new roman; font-style:italic;'>n</a1>) </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladosn+" âˆ™ ("+ladoa+")<a1 style='font-size: 21px; font-family: times new roman;'>Â²</a1> âˆ™ cotg(180Â°/"+ladosn+") </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladosn+" âˆ™ "+Res3+" âˆ™ cotg("+Res4+")Â° </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+Res1+" âˆ™ "+Res2+"</td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table> A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> = <a1 style='color: #FF0000'> "+areadabaseprisma+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>   <br> <br> </div> A Ã¡rea lateral do prisma regular reto de <a1 style='color: #FF0000'>"+ladosn+"</a1> lados Ã©: <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = <a1 style='font-family: times new roman; font-style:italic;'>n</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>a</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1>  = "+ladosn+" âˆ™ "+ladoa+" âˆ™ "+altura+" <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = <a1 style='color: #FF0000'> "+arealateralprisma+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>   <br> <br> A Ã¡rea total do prisma regular reto de <a1 style='color: #FF0000'>"+ladosn+"</a1> lados Ã©: <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> + 2 âˆ™ A<a1 style='font-size: 10px; font-family: times new roman;'>(Base)</a1>  <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> =  "+arealateralprisma+" + 2 âˆ™ "+areadabaseprisma+" <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> =  "+arealateralprisma+" + "+areatotalprisma2+" <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> =  <a1 style='color: #FF0000'> "+areatotalprisma+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>  <hr><h1 class='logomarca'> BpW </h1> " 
     
      document.prisma.ladosn.focus();
      document.prisma.ladosn.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
    /** ******************************************  Volume:  (V = A(base) . h )   ****************************************  **/  
    if (a === "volume") { 
      var ladoa = eval(document.prisma.ladoa.value.replace(",",".").replace(/ /g,""));
      var ladosn = eval(document.prisma.ladosn.value.replace(",",".").replace(/ /g,""));	
      var altura = eval(document.prisma.altura.value.replace(",",".").replace(/ /g,""));		
    
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.prisma.ladoa.focus();
          document.prisma.ladoa.select();  
      return false;
   } 
       if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("NÃ£o existe polÃ­gono menor de 3 lados!! e/ou digite um/os valor(es) numÃ©rico(s) maior do que 2!!");
          document.prisma.ladosn.focus();
          document.prisma.ladosn.select();  
      return false;
   }  
       if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.prisma.altura.focus();
          document.prisma.altura.select();  
      return false;
   }   
  
   try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);
   var ladosn = document.getElementById("resposta").value = roundNumber(ladosn, 0);
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2); 	
   var areadabaseprisma = altura*(ladosn * ladoa * ladoa * (1/(Math.tan((Math.PI*(180/ladosn)/180)))))/4;
   var areadabaseprisma = document.getElementById("resposta").value = roundNumber(areadabaseprisma, 2);  
   var Res1 = ladosn * ladoa * ladoa;
   var Res1 = document.getElementById("resposta").value = roundNumber(Res1, 2);   
   var Res2 = (Math.tan((Math.PI*(180/ladosn)/180)));
   var Res2 = document.getElementById("resposta").value = roundNumber(Res2, 2);    
   var Res3 =  ladoa * ladoa;
   var Res3 = document.getElementById("resposta").value = roundNumber(Res3, 2);    
   var Res4 = (180/ladosn);
   var Res4 = document.getElementById("resposta").value = roundNumber(Res4, 2);    
   
     document.getElementById('resposta').innerHTML ="<hr>  O volume do prisma regular reto de <a1 style='color: #FF0000'>"+ladosn+"</a1> arestas na base Ã©: <br> <div style='line-height: 14px;'> V = A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> V &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>a</a1><a1 style='font-size: 21px; font-family: times new roman;'>Â²</a1> âˆ™ cotg(180Â°/<a1 style='font-family: times new roman; font-style:italic;'>n</a1>) </td>  <td rowspan='2'> &nbsp;âˆ™&nbsp; </td>  <td rowspan='2'><a1 style='font-family: times new roman; font-style:italic;'>h</a1>  </td></tr> <tr> <td> 4 </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> V &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+ladosn+" âˆ™ ("+ladoa+")<a1 style='font-size: 21px; font-family: times new roman;'>Â²</a1> âˆ™ cotg(180Â°/"+ladosn+") </td>  <td rowspan='2'> &nbsp;âˆ™&nbsp; </td>  <td rowspan='2'>"+altura+" </td></tr> <tr> <td> 4 </td> </tr></tbody></table><table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> V &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+ladosn+" âˆ™ "+Res3+" âˆ™ cotg("+Res4+")Â° </td>  <td rowspan='2'> &nbsp;âˆ™&nbsp; </td>  <td rowspan='2'>"+altura+" </td></tr> <tr> <td> 4 </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> V &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+Res1+" âˆ™ "+Res2+" </td>  <td rowspan='2'> &nbsp;âˆ™&nbsp; </td>  <td rowspan='2'>"+altura+" </td></tr> <tr> <td> 4 </td> </tr></tbody></table> </div> V = <a1 style='color: #FF0000'> "+areadabaseprisma+"</a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ³</a1>  <hr><h1 class='logomarca'> BpW </h1> " 
     
      document.prisma.ladoa.focus();
      document.prisma.ladoa.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** *******************************************   Ãrea Total Prima irregular (At = A(base) . A(lateral)   ***********************  **/  
    if (a === "Prismairregularareatotal") { 
      var ladoa = eval(document.prisma.ladoa.value.replace(",",".").replace(/ /g,""));
      var ladosn = eval(document.prisma.ladosn.value.replace(",",".").replace(/ /g,""));	
      var altura = eval(document.prisma.altura.value.replace(",",".").replace(/ /g,""));		
      var areabase = eval(document.prisma.areabase.value.replace(",",".").replace(/ /g,""));
      
       if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.prisma.ladoa.focus();
          document.prisma.ladoa.select();  
      return false;
   } 
       if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("NÃ£o existe polÃ­gono menor de 3 lados!! e/ou digite um/os valor(es) numÃ©rico(s) maior do que 2!!");
          document.prisma.ladosn.focus();
          document.prisma.ladosn.select();  
      return false;
   }  
       if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.prisma.altura.focus();
          document.prisma.altura.select();  
      return false;
   }   
       if ((areabase < 0) || isNaN(areabase) || areabase == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.prisma.areabase.focus();
          document.prisma.areabase.select();  
      return false;
   }   
  
   try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);
   var ladosn = document.getElementById("resposta").value = roundNumber(ladosn, 0);
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2); 	
   var areabase = document.getElementById("resposta").value = roundNumber(areabase, 2); 
   var areadabaseprisma = 2*areabase + ladosn * ladoa * altura;
   var areadabaseprisma = document.getElementById("resposta").value = roundNumber(areadabaseprisma, 2);  
   var Res1 = 2 * areabase;
   var Res1 = document.getElementById("resposta").value = roundNumber(Res1, 2);  
   var arealateralprisma = ladosn * ladoa * altura ;
   var arealateralprisma = document.getElementById("resposta").value = roundNumber(arealateralprisma, 2);  
   
     document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>A Ã¡rea total do prisma irregular reto de <a1 style='color: #FF0000'>"+ladosn+"</a1> lados na base Ã©: <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1>  = 2 âˆ™ A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> + A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1>  <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1>  = 2 âˆ™ "+areabase+" + <a1 style='font-family: times new roman; font-style:italic;'>n</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>a</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1>  = 2 âˆ™ "+areabase+" + "+ladosn+" âˆ™ "+ladoa+" âˆ™ "+altura+"  <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = "+Res1+" + "+arealateralprisma+" <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1>  = <a1 style='color: #FF0000'> "+areadabaseprisma+"</a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>  </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.prisma.ladosn.focus();
      document.prisma.ladosn.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
  /** *******************************************   Volume Prisma irregular (At = A(base) . h)    ***********************  **/  
    if (a === "Prismairregularvolume") {
      var altura = eval(document.prisma.altura.value.replace(",",".").replace(/ /g,""));		
      var areabase = eval(document.prisma.areabase.value.replace(",",".").replace(/ /g,""));
      
       if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.prisma.altura.focus();
          document.prisma.altura.select();  
      return false;
   }   
       if ((areabase < 0) || isNaN(areabase) || areabase == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.prisma.areabase.focus();
          document.prisma.areabase.select();  
      return false;
   }  
  
   try {
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2); 	
   var areabase = document.getElementById("resposta").value = roundNumber(areabase, 2);    
   var Prismairregularvolume = areabase * altura;
   var Prismairregularvolume = document.getElementById("resposta").value = roundNumber(Prismairregularvolume, 2);  
   
     document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>O volume do prisma irregular reto Ã©: <br> V = A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> <br>  V = "+areabase+" âˆ™ "+altura+" <br>  V =  <a1 style='color: #FF0000'> "+Prismairregularvolume+"</a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ³</a1>      </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.prisma.altura.focus();
      document.prisma.altura.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  }
  
  
  /***#######################################   CILINDRO  ############################################################      **/
  
  function cilindro2() {
    var a = document.forms["cilindro"]["cilindro_type"].value;
  /** ******************************   AREA lateral (AL = 2.Ï€.R.h)   *****************************  **/  
   if (a === "arealateralcilindro") {
      document.getElementById("arealateral").disabled = true;
      document.getElementById("arealateral").value ="";	 
      document.getElementById("raio1").disabled = true;
      document.getElementById("raio1").value ="";
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";	
      document.getElementById("raio2").disabled = true;	
      document.getElementById("raio2").value ="";	
       document.getElementById("raioR").disabled = false;		
       document.getElementById("altura").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}
      
  /** ******************************   AREA da Base (Ab = Ï€.RÂ²)   *****************************  **/  
   if (a === "areabasecilindro") {
      document.getElementById("arealateral").disabled = true;
      document.getElementById("arealateral").value ="";	 
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";		 
      document.getElementById("raio1").disabled = true;
      document.getElementById("raio1").value ="";
      document.getElementById("raio2").disabled = true;	
      document.getElementById("raio2").value ="";
      document.getElementById("altura").disabled = true;	
      document.getElementById("altura").value ="";	
       document.getElementById("raioR").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}
      
  /** ******************************   AREA total  (At = Ab + AL)   *****************************  **/  
   if (a === "areatotalcilindro") {
      document.getElementById("arealateral").disabled = true;
      document.getElementById("arealateral").value ="";	 
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";		 
      document.getElementById("raio1").disabled = true;
      document.getElementById("raio1").value ="";
      document.getElementById("raio2").disabled = true;	
      document.getElementById("raio2").value ="";	
       document.getElementById("raioR").disabled = false;		
       document.getElementById("altura").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /** ******************************   AREA total 2  (At = 2.Ï€.R.(h + r))   *****************************  **/  
   if (a === "areatotalcilindro2") {
      document.getElementById("arealateral").disabled = true;
      document.getElementById("arealateral").value ="";	 
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";		 
      document.getElementById("raio1").disabled = true;
      document.getElementById("raio1").value ="";
      document.getElementById("raio2").disabled = true;	
      document.getElementById("raio2").value ="";	
       document.getElementById("raioR").disabled = false;		
       document.getElementById("altura").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
  
  /** ******************************   VOLUME (V = Ï€.RÂ².h)   *****************************  **/  
   if (a === "volumecilindro") {
      document.getElementById("arealateral").disabled = true;
      document.getElementById("arealateral").value ="";	 
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";		 
      document.getElementById("raio1").disabled = true;
      document.getElementById("raio1").value ="";
      document.getElementById("raio2").disabled = true;	
      document.getElementById("raio2").value ="";	
       document.getElementById("raioR").disabled = false;		
       document.getElementById("altura").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /** ******************************   Area lateral - cilindro oco (AL = 2.Ï€.h(r1 + r2)   *****************************  **/  
   if (a === "cilindroocoarealateral") {
      document.getElementById("arealateral").disabled = true;
      document.getElementById("arealateral").value ="";	 
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";		 
      document.getElementById("raioR").disabled = true;
      document.getElementById("raioR").value ="";	 
       document.getElementById("raio1").disabled = false;		
       document.getElementById("raio2").disabled = false;		
       document.getElementById("altura").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
      
  /** ***************************   Area total - cilindro oco (At = 2.Ï€.h(r1 + r2) + 2.Ï€.(r1Â² - r2Â²)   **********************  **/  
   if (a === "cilindroocoareatotal") {
      document.getElementById("arealateral").disabled = true;
      document.getElementById("arealateral").value ="";	 
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";		 
      document.getElementById("raioR").disabled = true;
      document.getElementById("raioR").value ="";	 
       document.getElementById("raio1").disabled = false;		
       document.getElementById("raio2").disabled = false;		
       document.getElementById("altura").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /** ***************************   Volume - cilindro oco (V = Ï€.h.(r1Â² - r2Â²)   **********************  **/  
   if (a === "volumecilindrooco") {
      document.getElementById("arealateral").disabled = true;
      document.getElementById("arealateral").value ="";	 
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";		 
      document.getElementById("raioR").disabled = true;
      document.getElementById("raioR").value ="";	 
       document.getElementById("raio1").disabled = false;		
       document.getElementById("raio2").disabled = false;		
       document.getElementById("altura").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
      
  /** ***************************   Altura (h = V/(Ï€.RÂ²)   **********************  **/  
   if (a === "alturacilindro") {
      document.getElementById("arealateral").disabled = true;
      document.getElementById("arealateral").value ="";	 
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";	
      document.getElementById("raio1").disabled = true;
      document.getElementById("raio1").value ="";	
      document.getElementById("raio2").disabled = true;
      document.getElementById("raio2").value ="";		
       document.getElementById("raioR").disabled = false;	
      document.getElementById("volume").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
      
  /** ***************************   Raio R em funÃ§Ã£o do volume: (R = (V/âˆš(Ï€.h)   **********************  **/  
   if (a === "raioRcilindro") {
      document.getElementById("arealateral").disabled = true;
      document.getElementById("arealateral").value ="";	 
      document.getElementById("raioR").disabled = true;
      document.getElementById("raioR").value ="";	
      document.getElementById("raio1").disabled = true;
      document.getElementById("raio1").value ="";	
      document.getElementById("raio2").disabled = true;
      document.getElementById("raio2").value ="";		
       document.getElementById("altura").disabled = false;	
      document.getElementById("volume").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /** ***************************   Raio R em funÃ§Ã£o da Ã¡rea lateral: (R = AL/(2.Ï€.h)   **********************  **/  
   if (a === "raioRArealatearalcilindro") {
      document.getElementById("raioR").disabled = true;
      document.getElementById("raioR").value ="";	
      document.getElementById("raio1").disabled = true;
      document.getElementById("raio1").value ="";	
      document.getElementById("raio2").disabled = true;
      document.getElementById("raio2").value ="";		
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";		
       document.getElementById("altura").disabled = false;	
      document.getElementById("arealateral").disabled = false;
  
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /** ***************************   Altura h em funÃ§Ã£o da Ã¡rea lateral: (h = AL/(2.Ï€.R)   **********************  **/  
   if (a === "alturaArealatearalcilindro") {
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";	
      document.getElementById("raio1").disabled = true;
      document.getElementById("raio1").value ="";	
      document.getElementById("raio2").disabled = true;
      document.getElementById("raio2").value ="";		
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";		
       document.getElementById("raioR").disabled = false;	
      document.getElementById("arealateral").disabled = false;
  
   }
   try { 	}
       catch(e) {alert(e)}		
  } 
   
  
  function cilindro1() {
  
   var ddl = document.getElementById("ops");
   var selectedValue = ddl.options[ddl.selectedIndex].value;
      if (selectedValue == "")
     {
      alert("Escolha uma opÃ§Ã£o para Calcular!");
     } 
     
    var a = document.forms["cilindro"]["cilindro_type"].value;
    /** **************************************   AREA lateral (AL = 2.Ï€.R.h)   ****************************************  **/  
    if (a === "arealateralcilindro") {
      var raioR = eval(document.cilindro.raioR.value.replace(",",".").replace(/ /g,""));		
      var altura = eval(document.cilindro.altura.value.replace(",",".").replace(/ /g,""));
      
       if ((raioR < 0) || isNaN(raioR) || raioR == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cilindro.raioR.focus();
          document.cilindro.raioR.select();  
      return false;
   }   
       if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cilindro.altura.focus();
          document.cilindro.altura.select();  
      return false;
   } 
  
   try {
   var raioR = document.getElementById("resposta").value = roundNumber(raioR, 2);
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2);
   var arealateralcilindro =  2 * Math.PI * raioR * altura;
   var arealateralcilindro = document.getElementById("resposta").value = roundNumber(arealateralcilindro, 2); 
   var arealateralcilindro2 =  2 * raioR * altura;
   var arealateralcilindro2 = document.getElementById("resposta").value = roundNumber(arealateralcilindro2, 2);  
    
     document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 22px;'>A Ã¡rea lateral do cilindro Ã©: <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = 2 âˆ™ Ï€ âˆ™ R âˆ™ h  <br>    A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = 2 âˆ™ 3,14 âˆ™ "+raioR+" âˆ™ "+altura+"  <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = <a1 style='color: #FF0000'> "+arealateralcilindro+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>   <br> ou <br>      A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = <a1 style='color: #FF0000'> "+arealateralcilindro2+" Ï€</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>     </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.cilindro.raioR.focus();
      document.cilindro.raioR.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
    /** *****************************************    AREA da Base (Ab = Ï€.RÂ²)    ****************************************  **/  
    if (a === "areabasecilindro") { 
      var raioR = eval(document.cilindro.raioR.value.replace(",",".").replace(/ /g,""));		
      
       if ((raioR < 0) || isNaN(raioR) || raioR == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cilindro.raioR.focus();
          document.cilindro.raioR.select();  
      return false;
   }   
  
   try {
   var raioR = document.getElementById("resposta").value = roundNumber(raioR, 2);  
   var areabasecilindro =  Math.PI * raioR * raioR;
   var areabasecilindro = document.getElementById("resposta").value = roundNumber(areabasecilindro, 2);   
   var areabasecilindro2 = raioR * raioR;
   var areabasecilindro2 = document.getElementById("resposta").value = roundNumber(areabasecilindro2, 2);    
    
     document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>A Ã¡rea da base do cilindro Ã©: <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> =  Ï€ âˆ™ RÂ²  <br>    A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> = 3,14 âˆ™ ("+raioR+")Â² <br>      A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> = 3,14 âˆ™ "+areabasecilindro2+" <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> = <a1 style='color: #FF0000'> "+areabasecilindro+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>   <br> ou <br>      A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> = <a1 style='color: #FF0000'> "+areabasecilindro2+" Ï€</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>     </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.cilindro.raioR.focus();
      document.cilindro.raioR.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
    /** ***********************************   AREA total  (At = Ab + AL)    ****************************************  **/  
    if (a === "areatotalcilindro") { 
      var raioR = eval(document.cilindro.raioR.value.replace(",",".").replace(/ /g,""));		
      var altura = eval(document.cilindro.altura.value.replace(",",".").replace(/ /g,""));
      
       if ((raioR < 0) || isNaN(raioR) || raioR == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cilindro.raioR.focus();
          document.cilindro.raioR.select();  
      return false;
   }   
       if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cilindro.altura.focus();
          document.cilindro.altura.select();  
      return false;
   }   
  
   try {
   var raioR = document.getElementById("resposta").value = roundNumber(raioR, 2);  
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2);  
   var arealateralcilindro =  2 * Math.PI * raioR * altura;
   var arealateralcilindro = document.getElementById("resposta").value = roundNumber(arealateralcilindro, 2);  
   var arealateralcilindro2 =  2 * raioR * altura; 
   var arealateralcilindro2 = document.getElementById("resposta").value = roundNumber(arealateralcilindro2, 2); 
   var areabasecilindro =  Math.PI * raioR * raioR;
   var areabasecilindro = document.getElementById("resposta").value = roundNumber(areabasecilindro, 2);   
   var areabasecilindro2 = raioR * raioR;   
   var areabasecilindro2 = document.getElementById("resposta").value = roundNumber(areabasecilindro2, 2);  
   var areatotalcilindro = 2 * Math.PI * raioR * altura +  2 * Math.PI * raioR * raioR;
   var areatotalcilindro = document.getElementById("resposta").value = roundNumber(areatotalcilindro, 2);   
   var areatotalcilindro2 = 2 * raioR * (altura + raioR); 
   var areatotalcilindro2 = document.getElementById("resposta").value = roundNumber(areatotalcilindro2, 2);    
   var areabasecilindro3 =  2 * Math.PI * raioR * raioR; 
   var areabasecilindro3 = document.getElementById("resposta").value = roundNumber(areabasecilindro3, 2);    
     
     document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>   A Ã¡rea lateral do cilindro Ã©: <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = 2 âˆ™ Ï€ âˆ™ R âˆ™ h  <br>    A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = 2 âˆ™ 3,14 âˆ™ "+raioR+" âˆ™ "+altura+"  <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = <a1 style='color: #FF0000'> "+arealateralcilindro+"</a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1> <br> ou <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = <a1 style='color: #FF0000'> "+arealateralcilindro2+" Ï€</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>  <br> <br>  A Ã¡rea da base do cilindro Ã©: <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> =  Ï€ âˆ™ RÂ²  <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> = 3,14 âˆ™ ("+raioR+")Â² <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> = 3,14 âˆ™ "+areabasecilindro2+" <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> = <a1 style='color: #FF0000'> "+areabasecilindro+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1> <br>  ou <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> = <a1 style='color: #FF0000'> "+areabasecilindro2+" Ï€</a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>  <br><br> Assim, a Ã¡rea total Ã©:  <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = A<a1 style='font-size: 10px; font-family: times new roman;'>(lateral)</a1> + 2 âˆ™ A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = "+arealateralcilindro+" + 2 âˆ™ "+areabasecilindro+" <br>    A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = "+arealateralcilindro+" + "+areabasecilindro3+"  <br>                 A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = <a1 style='color: #FF0000'> "+areatotalcilindro+" </a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1> <br> ou <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = <a1 style='color: #FF0000'> "+areatotalcilindro2+" Ï€ </a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1> </div><hr><h1 class='logomarca'> BpW </h1> " 
     
      document.cilindro.raioR.focus();
      document.cilindro.raioR.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
    /** ******************************    AREA total 2  (At = 2.Ï€.R.(h + r))    ****************************************  **/  
    if (a === "areatotalcilindro2") { 
      var raioR = eval(document.cilindro.raioR.value.replace(",",".").replace(/ /g,""));		
      var altura = eval(document.cilindro.altura.value.replace(",",".").replace(/ /g,""));
      
       if ((raioR < 0) || isNaN(raioR) || raioR == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cilindro.raioR.focus();
          document.cilindro.raioR.select();  
      return false;
   }   
       if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cilindro.altura.focus();
          document.cilindro.altura.select();  
      return false;
   }    
  
   try {
   var raioR = document.getElementById("resposta").value = roundNumber(raioR, 2);  
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2);  
   var areatotalcilindro =  2 * Math.PI * raioR *(altura + raioR);
   var areatotalcilindro = document.getElementById("resposta").value = roundNumber(areatotalcilindro, 2);   
   var areatotalcilindro2 =  (altura + raioR);
   var areatotalcilindro2 = document.getElementById("resposta").value = roundNumber(areatotalcilindro2, 2);  
   var areatotalcilindro3 =  2 * raioR *(altura + raioR); 
   var areatotalcilindro3 = document.getElementById("resposta").value = roundNumber(areatotalcilindro3, 2);  
     
     document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'> A Ã¡rea total do cilindro Ã©: <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = 2 âˆ™ Ï€ âˆ™ R âˆ™ (<a1 style='font-family: times new roman; font-style:italic;'>h</a1> + R) <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = 2 âˆ™ 3,14 âˆ™ "+raioR+" âˆ™ ("+altura+" + "+raioR+") <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = 2 âˆ™ 3,14 âˆ™ "+raioR+" âˆ™ "+areatotalcilindro2+"  <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = <a1 style='color: #FF0000'> "+areatotalcilindro+" </a1>" +"<a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1> <br> ou <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = <a1 style='color: #FF0000'> "+areatotalcilindro3+" Ï€ </a1>" +" <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1> </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.cilindro.raioR.focus();
      document.cilindro.raioR.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
   /** ****************************************   VOLUME (V = Ï€.RÂ².h)    ****************************************  **/  
    if (a === "volumecilindro") { 
      var raioR = eval(document.cilindro.raioR.value.replace(",",".").replace(/ /g,""));		
      var altura = eval(document.cilindro.altura.value.replace(",",".").replace(/ /g,""));
      
       if ((raioR < 0) || isNaN(raioR) || raioR == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cilindro.raioR.focus();
          document.cilindro.raioR.select();  
      return false;
   }   
       if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cilindro.altura.focus();
          document.cilindro.altura.select();  
      return false;
   }   
    
   try {
   var raioR = document.getElementById("resposta").value = roundNumber(raioR, 2);  
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2);    
   var volumecilindro =  Math.PI * raioR *raioR * altura ;
   var volumecilindro = document.getElementById("resposta").value = roundNumber(volumecilindro, 2); 
   var volumecilindro2 =  raioR *raioR;
   var volumecilindro2 = document.getElementById("resposta").value = roundNumber(volumecilindro2, 2);  
   var volumecilindro3 =  raioR *raioR * altura ;   
   var volumecilindro3 = document.getElementById("resposta").value = roundNumber(volumecilindro3, 2);  
     
     document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'> O volume do cilindro reto Ã©: <br> V = A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1>  âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1>  <br> V = Ï€ âˆ™ RÂ² âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> <br> V = 3,14 âˆ™ ("+raioR+")Â² âˆ™ "+altura+" <br>   V = 3,14 âˆ™ "+volumecilindro2+" âˆ™ "+altura+"   <br>  V = <a1 style='color: #FF0000'> "+volumecilindro+"</a1>" +" <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ³</a1> <br> ou  <br> V = <a1 style='color: #FF0000'> "+volumecilindro3+" Ï€ </a1>" +" <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ³</a1>      </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.cilindro.raioR.focus();
      document.cilindro.raioR.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /*********************************************    Altura (h = V/(Ï€.RÂ²)  ****************************************  **/  
    if (a === "alturacilindro") { 
      var raioR = eval(document.cilindro.raioR.value.replace(",",".").replace(/ /g,""));		
      var volume = eval(document.cilindro.volume.value.replace(",",".").replace(/ /g,""));
      
       if ((raioR < 0) || isNaN(raioR) || raioR == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cilindro.raioR.focus();
          document.cilindro.raioR.select();  
      return false;
   }   
       if ((volume < 0) || isNaN(volume) || volume == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cilindro.volume.focus();
          document.cilindro.volume.select();  
      return false;
   }  
    
   try {
   var raioR = document.getElementById("resposta").value = roundNumber(raioR, 2);  
   var volume = document.getElementById("resposta").value = roundNumber(volume, 2);     
   var alturacilindro =  volume/(Math.PI*raioR*raioR);
   var alturacilindro = document.getElementById("resposta").value = roundNumber(alturacilindro, 2);    
   var resul1 = raioR*raioR;
   var resul1 = document.getElementById("resposta").value = roundNumber(resul1, 2); 
   var resul2 = (Math.PI*raioR*raioR); 
   var resul2 = document.getElementById("resposta").value = roundNumber(resul2, 2);  
     
     document.getElementById('resposta').innerHTML ="<hr>  A altura <a1 style='font-family: times new roman; font-style:italic;'>h</a1> do cilindro Ã©: <br>  V = A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1>  <br> V = Ï€ âˆ™ RÂ² âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> <br> "+volume+" = 3,14 âˆ™ ("+raioR+")Â² âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> <br> "+volume+" = 3,14 âˆ™ "+resul1+" âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> <br> "+volume+" =  "+resul2+" âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> <br> <div style='line-height: 15px;'>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px; padding-top:2px; text-align:center;'> "+volume+"  </td></tr><tr><td style='text-align:center;'> "+resul2+" </td></tr></tbody></table> </div> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = <a1 style='color: #FF0000'> "+alturacilindro+"</a1>" +" <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  <hr><h1 class='logomarca'> BpW </h1>  " 
     
      document.cilindro.raioR.focus();
      document.cilindro.raioR.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /*********************************************     Raio R: (R = (V/âˆš(Ï€.h) ****************************************  **/  
    if (a === "raioRcilindro") { 
      var altura = eval(document.cilindro.altura.value.replace(",",".").replace(/ /g,""));		
      var volume = eval(document.cilindro.volume.value.replace(",",".").replace(/ /g,""));
      
       if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cilindro.altura.focus();
          document.cilindro.altura.select();  
      return false;
   }   
       if ((volume < 0) || isNaN(volume) || volume == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cilindro.volume.focus();
          document.cilindro.volume.select();  
      return false;
   }    
    
   try {
   var raioR = document.getElementById("resposta").value = roundNumber(raioR, 2);  
   var volume = document.getElementById("resposta").value = roundNumber(volume, 2);    
   var raioRcilindro =  Math.sqrt((volume/(Math.PI*altura)));
   var raioRcilindro = document.getElementById("resposta").value = roundNumber(raioRcilindro, 2);    
   var resul2 =  Math.PI*altura;
   var resul2 = document.getElementById("resposta").value = roundNumber(resul2, 2);    
   var resul3 =  volume/(Math.PI*altura); 
   var resul3 = document.getElementById("resposta").value = roundNumber(resul3, 2);   
     
     document.getElementById('resposta').innerHTML ="<hr>  O Raio R do cilindro Ã©: <br>  V = A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1>  <br> V = Ï€ âˆ™ RÂ² âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> <br> "+volume+" = 3,14 âˆ™ RÂ² âˆ™ "+altura+" <br> "+volume+" = "+resul2+" âˆ™ RÂ² <br> <div style='line-height: 14px;'>    <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> "+volume+" </td><td rowspan='2'> &nbsp;=&nbsp; R<span class=\'exp\'>2</span> </td></tr><tr><td> "+resul2+" </td> </tr></tbody></table></div> "+resul3+" = RÂ² <br>   R = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+resul3+"</a1> <br>  R = <a1 style='color: #FF0000'> "+raioRcilindro+"</a1>" +" <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>  <hr><h1 class='logomarca'> BpW </h1>  " 
     
      document.cilindro.altura.focus();
      document.cilindro.altura.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /***********************   Raio R em funÃ§Ã£o da Ã¡rea lateral: (R = AL/(2.Ï€.h)    ****************************************  **/  
    if (a === "raioRArealatearalcilindro") { 
      var altura = eval(document.cilindro.altura.value.replace(",",".").replace(/ /g,""));		
      var arealateral = eval(document.cilindro.arealateral.value.replace(",",".").replace(/ /g,""));
      
       if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cilindro.altura.focus();
          document.cilindro.altura.select();  
      return false;
   }   
       if ((arealateral < 0) || isNaN(arealateral) || arealateral == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cilindro.arealateral.focus();
          document.cilindro.arealateral.select();  
      return false;
   }   
    
   try {
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2);  
   var arealateral = document.getElementById("resposta").value = roundNumber(arealateral, 2);
   var raioRcilindro =  (arealateral/(2*Math.PI*altura));
   var raioRcilindro = document.getElementById("resposta").value = roundNumber(raioRcilindro, 2);   
   var resul2 =  2*Math.PI*altura;
   var resul2 = document.getElementById("resposta").value = roundNumber(resul2, 2); 
   var resul3 =  2*Math.PI*altura; 
   var resul3 = document.getElementById("resposta").value = roundNumber(resul3, 2);  
     
     document.getElementById('resposta').innerHTML ="<hr> O Raio R do cilindro Ã©: <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = 2 âˆ™ Ï€ âˆ™ R âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> <br>  "+arealateral+" = 2 âˆ™ 3,14 âˆ™ R âˆ™ "+altura+" <br>  "+arealateral+" = "+resul3+" âˆ™ R<br> <div style='line-height: 15px;'>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> R &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px; padding-top:2px; text-align:center;'> "+arealateral+"  </td></tr><tr><td style='text-align:center;'> "+resul2+" </td></tr></tbody></table> R = <a1 style='color: #FF0000'> "+raioRcilindro+"</a1>" +" <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.cilindro.altura.focus();
      document.cilindro.altura.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /**********************   Altura h em funÃ§Ã£o da Ã¡rea lateral: (h = AL/(2.Ï€.R)  ****************************************  **/  
    if (a === "alturaArealatearalcilindro") { 
      var raioR = eval(document.cilindro.raioR.value.replace(",",".").replace(/ /g,""));		
      var arealateral = eval(document.cilindro.arealateral.value.replace(",",".").replace(/ /g,""));
      
       if ((raioR < 0) || isNaN(raioR) || raioR == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cilindro.raioR.focus();
          document.cilindro.raioR.select();  
      return false;
   }   
       if ((arealateral < 0) || isNaN(arealateral) || arealateral == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cilindro.arealateral.focus();
          document.cilindro.arealateral.select();  
      return false;
   }   
  
   try {
   var raioR = document.getElementById("resposta").value = roundNumber(raioR, 2);  
   var arealateral = document.getElementById("resposta").value = roundNumber(arealateral, 2);  
   var raioRcilindro =  (arealateral/(2*Math.PI*raioR));
   var raioRcilindro = document.getElementById("resposta").value = roundNumber(raioRcilindro, 2);   
   var resul2 =  2*Math.PI*raioR;
   var resul2 = document.getElementById("resposta").value = roundNumber(resul2, 2);   
   var resul3 =  2*Math.PI*raioR; 
   var resul3 = document.getElementById("resposta").value = roundNumber(resul3, 2);    
     
     document.getElementById('resposta').innerHTML ="<hr>  O altura <a1 style='font-family: times new roman; font-style:italic;'>h</a1> do cilindro Ã©: <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = 2 âˆ™ Ï€ âˆ™ R âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> <br>  "+arealateral+" = 2 âˆ™ 3,14 âˆ™ "+raioR+" âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> <br>  "+arealateral+" = "+resul3+" <a1 style='font-family: times new roman; font-style:italic;'>h</a1> <br>  <div style='line-height: 16px;'>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px; padding-top:2px; text-align:center;'> "+arealateral+"  </td></tr><tr><td style='text-align:center;'> "+resul2+" </td></tr></tbody></table>  <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = <a1 style='color: #FF0000'> "+raioRcilindro+"</a1>" +" <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.cilindro.raioR.focus();
      document.cilindro.raioR.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /******************************   Area lateral - cilindro oco (AL = 2.Ï€.h(r1 + r2)    ********************************  **/  
    if (a === "cilindroocoarealateral") { 
      var raio1 = eval(document.cilindro.raio1.value.replace(",",".").replace(/ /g,""));	
      var raio2 = eval(document.cilindro.raio2.value.replace(",",".").replace(/ /g,""));		
      var altura = eval(document.cilindro.altura.value.replace(",",".").replace(/ /g,""));
      
       if ((raio1 < 0) || isNaN(raio1) || raio1 == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cilindro.raio1.focus();
          document.cilindro.raio1.select();  
      return false;
   }   
       if ((raio2 < 0) || isNaN(raio2) || raio2 == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cilindro.raio2.focus();
          document.cilindro.raio2.select();  
      return false;
   } 
       if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cilindro.altura.focus();
          document.cilindro.altura.select();  
      return false;
   }   
  
   try {
   var raio1 = document.getElementById("resposta").value = roundNumber(raio1, 2);  
   var raio2 = document.getElementById("resposta").value = roundNumber(raio2, 2);   
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2);    
   var cilindroocoarealateral =  2* Math.PI * altura * (raio1 + raio2) ;
   var cilindroocoarealateral = document.getElementById("resposta").value = roundNumber(cilindroocoarealateral, 2);  
   var cilindroocoarealateral2 =  raio1 + raio2 ;
   var cilindroocoarealateral2 = document.getElementById("resposta").value = roundNumber(cilindroocoarealateral2, 2);   
   var cilindroocoarealateral3 =  2 * altura * (raio1 + raio2) ; 
   var cilindroocoarealateral3 = document.getElementById("resposta").value = roundNumber(cilindroocoarealateral3, 2);  
     
     document.getElementById('resposta').innerHTML ="<hr>  A Ã¡rea lateral do cilindro oco Ã©: <br> <div style='line-height: 22px;'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1>  = 2 âˆ™ Ï€ âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> âˆ™ (<a1 style='font-family: times new roman; font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1> + <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1>) <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1>  = 2 âˆ™ 3,14 âˆ™ "+altura+" âˆ™ ("+raio1+" + "+raio2+") <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1>  = 2 âˆ™ 3,14 âˆ™ "+altura+" âˆ™ "+cilindroocoarealateral2+"  <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = <a1 style='color: #FF0000'> "+cilindroocoarealateral+"</a1>" +" <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1> <br>  ou <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = <a1 style='color: #FF0000'> "+cilindroocoarealateral3+" Ï€</a1>" +" <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>      </div><hr> <h1 class='logomarca'> BpW </h1> " 
     
      document.cilindro.raio1.focus();
      document.cilindro.raio1.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /**********************   Area total - cilindro oco (At = 2.Ï€.h(r1 + r2) + 2.Ï€.(r1Â² - r2Â²)   *****************************  **/  
    if (a === "cilindroocoareatotal") { 
      var raio1 = eval(document.cilindro.raio1.value.replace(",",".").replace(/ /g,""));	
      var raio2 = eval(document.cilindro.raio2.value.replace(",",".").replace(/ /g,""));		
      var altura = eval(document.cilindro.altura.value.replace(",",".").replace(/ /g,""));
      
       if ((raio1 < 0) || isNaN(raio1) || raio1 == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cilindro.raio1.focus();
          document.cilindro.raio1.select();  
      return false;
   }   
       if ((raio2 < 0) || isNaN(raio2) || raio2 == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cilindro.raio2.focus();
          document.cilindro.raio2.select();  
      return false;
   } 
       if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cilindro.altura.focus();
          document.cilindro.altura.select();  
      return false;
   }   
  
   try {
   var raio1 = document.getElementById("resposta").value = roundNumber(raio1, 2);  
   var raio2 = document.getElementById("resposta").value = roundNumber(raio2, 2); 
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2);  
   var cilindroocoareatotal =  2*Math.PI*altura*(raio1 + raio2) + 2 * Math.PI * (raio1*raio1 - raio2*raio2);
   var cilindroocoareatotal = document.getElementById("resposta").value = roundNumber(cilindroocoareatotal, 2);   
   var Resul2 =  (raio1 + raio2) ;
   var Resul2 = document.getElementById("resposta").value = roundNumber(Resul2, 2);  
   var Resul3 =   raio1*raio1;
   var Resul3 = document.getElementById("resposta").value = roundNumber(Resul3, 2);  
   var Resul4 =  raio2*raio2;
   var Resul4 = document.getElementById("resposta").value = roundNumber(Resul4, 2);  
   var Resul5 =  2*Math.PI*altura*(raio1 + raio2);
   var Resul5 = document.getElementById("resposta").value = roundNumber(Resul5, 2);  
   var Resul6 =   (raio1*raio1 - raio2*raio2); 
   var Resul6 = document.getElementById("resposta").value = roundNumber(Resul6, 2);  
   var Resul7 =   2 * Math.PI * (raio1*raio1 - raio2*raio2); 
   var Resul7 = document.getElementById("resposta").value = roundNumber(Resul7, 2);  
   var cilindroocoareatotal2 =  2*altura*(raio1 + raio2) + 2 * (raio1*raio1 - raio2*raio2); 
   var cilindroocoareatotal2 = document.getElementById("resposta").value = roundNumber(cilindroocoareatotal2, 2);  
     
     document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'> A Ã¡rea total do cilindro oco Ã©: <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1>  = 2Ï€<a1 style='font-family: times new roman; font-style:italic;'>h</a1> (<a1 style='font-family: times new roman; font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1> + <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1>) +  2Ï€(<a1 style='font-family: times new roman; font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1>Â² - <a1 style='font-family: times new roman; font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1>Â²) <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1>  = 2âˆ™3,14âˆ™"+altura+" âˆ™("+raio1+" + "+raio2+") + 2âˆ™3,14âˆ™("+raio1+"Â² - "+raio2+"Â²) <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1>  = 6,28 âˆ™"+altura+" âˆ™ "+Resul2+"  + 6,28âˆ™("+Resul3+" - "+Resul4+") <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = "+Resul5+"  - 6,28 âˆ™ "+Resul6+" <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = "+Resul5+"  + "+Resul7+" <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = <a1 style='color: #FF0000'> "+cilindroocoareatotal+"</a1>" +" <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1> <br> ou <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = <a1 style='color: #FF0000'> "+cilindroocoareatotal2+" Ï€</a1>" +" <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>      </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.cilindro.raio1.focus();
      document.cilindro.raio1.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
  /**********************************   Volume - cilindro oco (V = Ï€.h.(r1Â² - r2Â²)   ****************************************  **/  
    if (a === "volumecilindrooco") { 
      var raio1 = eval(document.cilindro.raio1.value.replace(",",".").replace(/ /g,""));	
      var raio2 = eval(document.cilindro.raio2.value.replace(",",".").replace(/ /g,""));		
      var altura = eval(document.cilindro.altura.value.replace(",",".").replace(/ /g,""));
      
       if ((raio1 < 0) || isNaN(raio1) || raio1 == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cilindro.raio1.focus();
          document.cilindro.raio1.select();  
      return false;
   }   
       if ((raio2 < 0) || isNaN(raio2) || raio2 == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cilindro.raio2.focus();
          document.cilindro.raio2.select();  
      return false;
   } 
       if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cilindro.altura.focus();
          document.cilindro.altura.select();  
      return false;
   }   
    
   try {
   var raio1 = document.getElementById("resposta").value = roundNumber(raio1, 2);  
   var raio2 = document.getElementById("resposta").value = roundNumber(raio2, 2); 
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2);    
   var cilindroocoareatotal =  Math.PI*altura*(raio1*raio1 - raio2*raio2);
   var cilindroocoareatotal = document.getElementById("resposta").value = roundNumber(cilindroocoareatotal, 2);   
   var Resul2 =   Math.PI*altura; 
   var Resul2 = document.getElementById("resposta").value = roundNumber(Resul2, 2);  
   var Resul3 =   raio1*raio1;
   var Resul3 = document.getElementById("resposta").value = roundNumber(Resul3, 2);   
   var Resul4 =  raio2*raio2;
   var Resul4 = document.getElementById("resposta").value = roundNumber(Resul4, 2);   
   var Resul5 =  (raio1*raio1 - raio2*raio2); 
   var Resul5 = document.getElementById("resposta").value = roundNumber(Resul5, 2);   
   var cilindroocoareatotal2 =  altura*(raio1*raio1 - raio2*raio2);
   var cilindroocoareatotal2 = document.getElementById("resposta").value = roundNumber(cilindroocoareatotal2, 2);   
     
     document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'> O Volume do cilindro oco Ã©: <br> V = Ï€ âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> âˆ™ (<a1 style='font-family: times new roman; font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1>Â² - <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1>Â²)         <br>  V = 3,14 âˆ™ "+altura+" âˆ™ ("+raio1+"Â² - "+raio2+"Â²) <br>  V = "+Resul2+" âˆ™ ("+Resul3+" - "+Resul4+") <br>  V = "+Resul2+" âˆ™ "+Resul5+"  <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = <a1 style='color: #FF0000'> "+cilindroocoareatotal+"</a1>" +" <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1> <br> ou  <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = <a1 style='color: #FF0000'> "+cilindroocoareatotal2+" Ï€</a1>" +" <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>   </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.cilindro.raio1.focus();
      document.cilindro.raio1.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  }
  
  
  /***##########################################  CONE  ###################################################      **/
  
  function cone2() {
    var a = document.forms["cone"]["cone_type"].value;
  /** ******************************   geratriz g: (g = âˆšhÂ² + RÂ²)   *****************************  **/  
   if (a === "geratrizcone") {
      document.getElementById("arealateral").disabled = true;
      document.getElementById("arealateral").value ="";	
      document.getElementById("raio1").disabled = true;
      document.getElementById("raio1").value ="";	
      document.getElementById("raio2").disabled = true;
      document.getElementById("raio2").value ="";		
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";	
      document.getElementById("geratriz").disabled = true;
      document.getElementById("geratriz").value ="";		
       document.getElementById("raioR").disabled = false;	
      document.getElementById("altura").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}
          
  /** ******************************   altura h: (h = âˆšgÂ² - RÂ²)   *****************************  **/  
   if (a === "alturacone") {
      document.getElementById("arealateral").disabled = true;
      document.getElementById("arealateral").value ="";	
      document.getElementById("raio1").disabled = true;
      document.getElementById("raio1").value ="";	
      document.getElementById("raio2").disabled = true;
      document.getElementById("raio2").value ="";		
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";	
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";		
       document.getElementById("raioR").disabled = false;	
      document.getElementById("geratriz").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}
      
  /** ******************************   Raio r: (r = âˆšgÂ² - hÂ²)   *****************************  **/  
   if (a === "raiocone") {
      document.getElementById("arealateral").disabled = true;
      document.getElementById("arealateral").value ="";	
      document.getElementById("raio1").disabled = true;
      document.getElementById("raio1").value ="";	
      document.getElementById("raio2").disabled = true;
      document.getElementById("raio2").value ="";		
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";	
      document.getElementById("raioR").disabled = true;
      document.getElementById("raioR").value ="";		
       document.getElementById("altura").disabled = false;	
      document.getElementById("geratriz").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}
      
  /** ******************************   Ãrea Lateral (Al = Ï€.R.g)   *****************************  **/  
   if (a === "arealateralcone") {
      document.getElementById("arealateral").disabled = true;
      document.getElementById("arealateral").value ="";	
      document.getElementById("raio1").disabled = true;
      document.getElementById("raio1").value ="";	
      document.getElementById("raio2").disabled = true;
      document.getElementById("raio2").value ="";		
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";	
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";		
       document.getElementById("raioR").disabled = false;	
      document.getElementById("geratriz").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /** ******************************   Ãrea da base (Ab = Ï€.RÂ²)   *****************************  **/  
   if (a === "areabasecone") {
      document.getElementById("arealateral").disabled = true;
      document.getElementById("arealateral").value ="";	
      document.getElementById("raio1").disabled = true;
      document.getElementById("raio1").value ="";	
      document.getElementById("raio2").disabled = true;
      document.getElementById("raio2").value ="";		
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";	
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";	
      document.getElementById("geratriz").disabled = true;
      document.getElementById("geratriz").value ="";	
       document.getElementById("raioR").disabled = false;	
  }
   try { 	}
       catch(e) {alert(e)}		
      
  /** ******************************   Ãrea total (At = A(base) + A(lateral))   *****************************  **/  
   if (a === "areatotalcone") {
      document.getElementById("arealateral").disabled = true;
      document.getElementById("arealateral").value ="";	
      document.getElementById("raio1").disabled = true;
      document.getElementById("raio1").value ="";	
      document.getElementById("raio2").disabled = true;
      document.getElementById("raio2").value ="";		
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";	
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";
      document.getElementById("geratriz").disabled = false;
       document.getElementById("raioR").disabled = false;	
  }
   try { 	}
       catch(e) {alert(e)}		
      
  /** ******************************   Volume (V = 1/3 . Ï€.RÂ².h )   *****************************  **/  
   if (a === "volumecone") {
      document.getElementById("arealateral").disabled = true;
      document.getElementById("arealateral").value ="";	
      document.getElementById("raio1").disabled = true;
      document.getElementById("raio1").value ="";	
      document.getElementById("raio2").disabled = true;
      document.getElementById("raio2").value ="";		
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";	
      document.getElementById("geratriz").disabled = true;
      document.getElementById("geratriz").value ="";
      document.getElementById("altura").disabled = false;
       document.getElementById("raioR").disabled = false;	
  }
   try { 	}
       catch(e) {alert(e)}	
      
  /** ******************************   Tronco do cone: Ã¡rea lateral (Al = Ï€.g.(r1 + r2))   *****************************  **/  
   if (a === "arealateraltroncodocone") {
      document.getElementById("arealateral").disabled = true;
      document.getElementById("arealateral").value ="";	
      document.getElementById("raioR").disabled = true;
      document.getElementById("raioR").value ="";	
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";		
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";	
      document.getElementById("geratriz").disabled = false;
      document.getElementById("raio2").disabled = false;
       document.getElementById("raio1").disabled = false;	
  }
   try { 	}
       catch(e) {alert(e)}	
      
  /** ******************************   Tronco do cone: Ãrea total(At = A(lateral) + A(baseMaior) + A(basemenor)   *****************************  **/  
   if (a === "areatotaltroncodocone") {
      document.getElementById("arealateral").disabled = true;
      document.getElementById("arealateral").value ="";	
      document.getElementById("raioR").disabled = true;
      document.getElementById("raioR").value ="";	
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";		
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";	
      document.getElementById("geratriz").disabled = false;
      document.getElementById("raio2").disabled = false;
       document.getElementById("raio1").disabled = false;	
  }
   try { 	}
       catch(e) {alert(e)}		
      
      
  /** ******************************   Tronco do cone: Volume (V = (Ï€.h.(r1Â² +r1.r2 + r2Â²)/3))   *****************************  **/  
   if (a === "volumetroncodocone") {
      document.getElementById("arealateral").disabled = true;
      document.getElementById("arealateral").value ="";	
      document.getElementById("raioR").disabled = true;
      document.getElementById("raioR").value ="";	
      document.getElementById("geratriz").disabled = true;
      document.getElementById("geratriz").value ="";		
      document.getElementById("volume").disabled = true;
      document.getElementById("volume").value ="";	
      document.getElementById("altura").disabled = false;
      document.getElementById("raio2").disabled = false;
       document.getElementById("raio1").disabled = false;	
  }
   try { 	}
       catch(e) {alert(e)}		
  } 
   
  
  function cone1() {
      
   var ddl = document.getElementById("ops");
   var selectedValue = ddl.options[ddl.selectedIndex].value;
      if (selectedValue == "")
     {
      alert("Escolha uma opÃ§Ã£o para Calcular!");
     }	
      
    var a = document.forms["cone"]["cone_type"].value;
    /** ****************************   CÃ¡lculdo da geratriz g: (g = âˆšhÂ² + RÂ²)   ****************************************  **/  
    if (a === "geratrizcone") { 
      var raioR = eval(document.cone.raioR.value.replace(",",".").replace(/ /g,""));	
      var altura = eval(document.cone.altura.value.replace(",",".").replace(/ /g,""));		
      
       if ((raioR < 0) || isNaN(raioR) || raioR == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cone.raioR.focus();
          document.cone.raioR.select();  
      return false;
   }   
       if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cone.altura.focus();
          document.cone.altura.select();  
      return false;
   } 
  
   try {
   var raioR = document.getElementById("resposta").value = roundNumber(raioR, 2);  
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2);  
   var geratrizcone = Math.sqrt(altura*altura + raioR*raioR) ;
   var geratrizcone = document.getElementById("resposta").value = roundNumber(geratrizcone, 2);  
   var Resul2 = altura*altura  ;
   var Resul2 = document.getElementById("resposta").value = roundNumber(Resul2, 2);  
   var Resul3 = raioR*raioR ;
   var Resul3 = document.getElementById("resposta").value = roundNumber(Resul3, 2);   
   var Resul4 = (altura*altura + raioR*raioR) ; 
   var Resul4 = document.getElementById("resposta").value = roundNumber(Resul4, 2);   
    
     document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 25px;'>A geratriz <a1 style='font-family: times new roman; font-style:italic;'>g</a1> do cone Ã©: <br> <a1 style='font-family: times new roman; font-style:italic;'>g</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'><a1 style='font-family: times new roman; font-style:italic;'>h</a1>Â² + <a1 style='font-family: times new roman; font-style:italic;'>R</a1>Â²</a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>g</a1> =  âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>("+altura+")Â² + ("+raioR+")Â²</a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>g</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'> "+Resul2+" + "+Resul3+"</a1></a1> <br>   <a1 style='font-family: times new roman; font-style:italic;'>g</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'> "+Resul4+"</a1></a1> <br>  <a1 style='font-family: times new roman; font-style:italic;'>g</a1> = <a1 style='color: #FF0000'> "+geratrizcone+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.cone.raioR.focus();
      document.cone.raioR.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
    /** **************************************    altura h: (h = âˆšgÂ² - RÂ²)   ****************************************  **/  
    if (a === "alturacone") { 
      var raioR = eval(document.cone.raioR.value.replace(",",".").replace(/ /g,""));	
      var geratriz = eval(document.cone.geratriz.value.replace(",",".").replace(/ /g,""));		
      
       if ((raioR < 0) || isNaN(raioR) || raioR == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cone.raioR.focus();
          document.cone.raioR.select();  
      return false;
   }   
       if ((geratriz < 0) || isNaN(geratriz) || geratriz == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cone.geratriz.focus();
          document.cone.geratriz.select();  
      return false;
   }   
  
   try {
   var raioR = document.getElementById("resposta").value = roundNumber(raioR, 2);  
   var geratriz = document.getElementById("resposta").value = roundNumber(geratriz, 2);    
   var geratrizcone = Math.sqrt(geratriz*geratriz - raioR*raioR) ;
   var geratrizcone = document.getElementById("resposta").value = roundNumber(geratrizcone, 2);   
   var Resul2 = geratriz*geratriz  ;
   var Resul2 = document.getElementById("resposta").value = roundNumber(Resul2, 2);   
   var Resul3 = raioR*raioR ;
   var Resul3 = document.getElementById("resposta").value = roundNumber(Resul3, 2);    
   var Resul4 = (geratriz*geratriz - raioR*raioR) ; 
   var Resul4 = document.getElementById("resposta").value = roundNumber(Resul4, 2);    
    
     document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>A altura <a1 style='font-family: times new roman; font-style:italic;'>h</a1> do cone Ã©: <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'><a1 style='font-family: times new roman; font-style:italic;'>g</a1>Â² - <a1 style='font-family: times new roman; font-style:italic;'>R</a1>Â²</a1>  <br><a1 style='font-family: times new roman; font-style:italic;'>h</a1> =  âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>("+geratriz+")Â² - ("+raioR+")Â²</a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'> "+Resul2+" - "+Resul3+"</a1></a1> <br>   <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'> "+Resul4+"</a1></a1> <br>  <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = <a1 style='color: #FF0000'> "+geratrizcone+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.cone.raioR.focus();
      document.cone.raioR.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** *****************************************************     Raio r: (r = âˆšgÂ² - hÂ²)    ****************************************  **/  
    if (a === "raiocone") { 
      var altura = eval(document.cone.altura.value.replace(",",".").replace(/ /g,""));	
      var geratriz = eval(document.cone.geratriz.value.replace(",",".").replace(/ /g,""));		
       if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cone.altura.focus();
          document.cone.altura.select();  
      return false;
   }   
       if ((geratriz < 0) || isNaN(geratriz) || geratriz == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cone.geratriz.focus();
          document.cone.geratriz.select();  
      return false;
   }  
    
   try {
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2);  
   var geratriz = document.getElementById("resposta").value = roundNumber(geratriz, 2);    
   var geratrizcone = Math.sqrt(geratriz*geratriz - altura*altura) ;
   var geratrizcone = document.getElementById("resposta").value = roundNumber(geratrizcone, 2);  
   var Resul2 = geratriz*geratriz  ;
   var Resul2 = document.getElementById("resposta").value = roundNumber(Resul2, 2);   
   var Resul3 = altura*altura ;
   var Resul3 = document.getElementById("resposta").value = roundNumber(Resul3, 2);   
   var Resul4 = (geratriz*geratriz - altura*altura) ; 
   var Resul4 = document.getElementById("resposta").value = roundNumber(Resul4, 2);   
    
     document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>A raio R do cone Ã©: <br> R = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'><a1 style='font-family: times new roman; font-style:italic;'>g</a1>Â² - <a1 style='font-family: times new roman; font-style:italic;'>h</a1>Â²</a1> <br> R =  âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>("+geratriz+")Â² - ("+altura+")Â²</a1> <br> R = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'> "+Resul2+" - "+Resul3+"</a1></a1> <br>   R = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'> "+Resul4+"</a1></a1> <br>  R = <a1 style='color: #FF0000'> "+geratrizcone+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.cone.altura.focus();
      document.cone.altura.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
  /** *****************************************************   Ãrea Lateral (Al = Ï€.R.g)   ****************************************  **/  
    if (a === "arealateralcone") {
      var raioR = eval(document.cone.raioR.value.replace(",",".").replace(/ /g,""));	
      var geratriz = eval(document.cone.geratriz.value.replace(",",".").replace(/ /g,""));		
      
       if ((raioR < 0) || isNaN(raioR) || raioR == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cone.raioR.focus();
          document.cone.raioR.select();  
      return false;
   }   
       if ((geratriz < 0) || isNaN(geratriz) || geratriz == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cone.geratriz.focus();
          document.cone.geratriz.select();  
      return false;
   }  
  
   try {
   var raioR = document.getElementById("resposta").value = roundNumber(raioR, 2);  
   var geratriz = document.getElementById("resposta").value = roundNumber(geratriz, 2);     
   var arealateralcone = Math.PI * raioR *  geratriz;
   var arealateralcone = document.getElementById("resposta").value = roundNumber(arealateralcone, 2);  
   var arealateralcone2 =  raioR *  geratriz; 
   var arealateralcone2 = document.getElementById("resposta").value = roundNumber(arealateralcone2, 2); 
    
     document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 22px;'>A Ã¡rea lateral do cone Ã©: <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(lateral)</a1> = Ï€ âˆ™ R âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>g</a1> <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(lateral)</a1>  = 3,14 âˆ™ "+raioR+" âˆ™ "+geratriz+" <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(lateral)</a1> = <a1 style='color: #FF0000'> "+arealateralcone+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>  <br> ou <br>        A<a1 style='font-size: 10px; font-family: times new roman;'>(lateral)</a1> = <a1 style='color: #FF0000'> "+arealateralcone2+"Ï€</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>      </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.cone.raioR.focus();
      document.cone.raioR.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
       
  /** *****************************************************   Ãrea da base (Ab = Ï€.RÂ²)   ****************************************  **/  
    if (a === "areabasecone") { 
      var raioR = eval(document.cone.raioR.value.replace(",",".").replace(/ /g,""));	
      
       if ((raioR < 0) || isNaN(raioR) || raioR == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cone.raioR.focus();
          document.cone.raioR.select();  
      return false;
   }   
  
   try {
   var raioR = document.getElementById("resposta").value = roundNumber(raioR, 2);  
   var areabasecone = Math.PI * raioR * raioR;
   var areabasecone = document.getElementById("resposta").value = roundNumber(areabasecone, 2);  
   var Resul2 = raioR * raioR; 
   var Resul2 = document.getElementById("resposta").value = roundNumber(Resul2, 2);  
    
     document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>A Ã¡rea da base do cone Ã©: <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> = Ï€ âˆ™ RÂ² <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1>  = 3,14 âˆ™ ("+raioR+")Â² <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> = 3,14 âˆ™ "+Resul2+" <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Base)</a1> = <a1 style='color: #FF0000'> "+areabasecone+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>  </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.cone.raioR.focus();
      document.cone.raioR.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }	 
       
       
  /** ******************************    Ãrea total (At = A(base) + A(lateral))    ****************************************  **/  
    if (a === "areatotalcone") { 
      var raioR = eval(document.cone.raioR.value.replace(",",".").replace(/ /g,""));	
      var geratriz = eval(document.cone.geratriz.value.replace(",",".").replace(/ /g,""));		
      
       if ((raioR < 0) || isNaN(raioR) || raioR == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cone.raioR.focus();
          document.cone.raioR.select();  
      return false;
   }    
       if ((geratriz < 0) || isNaN(geratriz) || geratriz == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cone.geratriz.focus();
          document.cone.geratriz.select();  
      return false;
   }    
  
   try {
   var raioR = document.getElementById("resposta").value = roundNumber(raioR, 2);
   var geratriz = document.getElementById("resposta").value = roundNumber(geratriz, 2);   
   var areatotalcone = Math.PI * raioR * (raioR + geratriz);
   var areatotalcone = document.getElementById("resposta").value = roundNumber(areatotalcone, 2); 
   var Resul2 = (raioR + geratriz); 
   var Resul2 = document.getElementById("resposta").value = roundNumber(Resul2, 2); 
   var Resul3 = raioR * (raioR + geratriz); 
   var Resul3 = document.getElementById("resposta").value = roundNumber(Resul3, 2);  
    
     document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>A Ã¡rea total do cone Ã©: <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> =  A<a1 style='font-size: 10px; font-family: times new roman;'>(Base)</a1>  +  A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = Ï€RÂ²  +  Ï€Rg = Ï€R(g + R) <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = 3,14 âˆ™ "+raioR+" âˆ™ ("+geratriz+" + "+raioR+") <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = 3,14 âˆ™ "+raioR+" âˆ™ "+Resul2+" <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = <a1 style='color: #FF0000'> "+areatotalcone+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1> <br> ou <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = <a1 style='color: #FF0000'> "+Resul3+"Ï€</a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1> </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.cone.raioR.focus();
      document.cone.raioR.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }	 
       
       
  /** ****************************************   Volume (V = 1/3 . Ï€.RÂ².h )   ****************************************  **/  
    if (a === "volumecone") { 
      var raioR = eval(document.cone.raioR.value.replace(",",".").replace(/ /g,""));	
      var altura = eval(document.cone.altura.value.replace(",",".").replace(/ /g,""));		
      
       if ((raioR < 0) || isNaN(raioR) || raioR == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cone.raioR.focus();
          document.cone.raioR.select();  
      return false;
   }    
       if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cone.altura.focus();
          document.cone.altura.select();  
      return false;
   }   
  
   try {
   var raioR = document.getElementById("resposta").value = roundNumber(raioR, 2);
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2);    
   var volumecone =  (Math.PI * raioR * raioR * altura)/3;
   var volumecone = document.getElementById("resposta").value = roundNumber(volumecone, 2); 
   var Resul2 = (raioR * raioR ); 
   var Resul2 = document.getElementById("resposta").value = roundNumber(Resul2, 2); 
   var Resul3 = ( raioR * raioR * altura)/3; 
   var Resul3 = document.getElementById("resposta").value = roundNumber(Resul3, 2);  
   var Resul4 = (Math.PI * raioR * raioR * altura); 
   var Resul4 = document.getElementById("resposta").value = roundNumber(Resul4, 2);  
     
     document.getElementById('resposta').innerHTML ="<hr>  O Volume do cone Ã©: <br> <div style='line-height: 15px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> V &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> Ï€ âˆ™ RÂ² âˆ™ h </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'>  3,14 âˆ™ ("+raioR+")Â² âˆ™ "+altura+" </td></tr> <tr> <td> 3 </td><td> 3 </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'>  V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> 3,14 âˆ™ "+Resul2+" âˆ™ "+altura+" </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'>  V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+Resul4+"  </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>  </div>  V = <a1 style='color: #FF0000'> "+volumecone+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ³</a1> <br> ou <br>   V  = <a1 style='color: #FF0000'> "+Resul3+"Ï€</a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ³</a1> <hr><h1 class='logomarca'> BpW </h1> " 
     
      document.cone.raioR.focus();
      document.cone.raioR.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }	 	 
       
  /** ****************************   Tronco do cone: Ã¡rea lateral (Al = Ï€.g.(r1 + r2))   ****************************************  **/  
    if (a === "arealateraltroncodocone") { 
      var geratriz = eval(document.cone.geratriz.value.replace(",",".").replace(/ /g,""));	
      var raio1 = eval(document.cone.raio1.value.replace(",",".").replace(/ /g,""));
      var raio2 = eval(document.cone.raio2.value.replace(",",".").replace(/ /g,""));	
      
       if ((geratriz < 0) || isNaN(geratriz) || geratriz == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cone.geratriz.focus();
          document.cone.geratriz.select();  
      return false;
   }    
       if ((raio1 < 0) || isNaN(raio1) || raio1 == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cone.raio1.focus();
          document.cone.raio1.select();  
      return false;
   }   
       if ((raio2 < 0) || isNaN(raio2) || raio2 == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cone.raio2.focus();
          document.cone.raio2.select();  
      return false;
   }   
  
   try {
   var geratriz = document.getElementById("resposta").value = roundNumber(geratriz, 2);
   var raio1 = document.getElementById("resposta").value = roundNumber(raio1, 2);   
   var raio2 = document.getElementById("resposta").value = roundNumber(raio2, 2); 
   var arealateraltroncodocone =  Math.PI * geratriz * (raio1 + raio2) ;
   var arealateraltroncodocone = document.getElementById("resposta").value = roundNumber(arealateraltroncodocone, 2);  
   var Resul2 = (raio1 + raio2); 
   var Resul2 = document.getElementById("resposta").value = roundNumber(Resul2, 2);  
   var Resul3 =    geratriz * (raio1 + raio2); 
   var Resul3 = document.getElementById("resposta").value = roundNumber(Resul3, 2);  
    
     document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>A Ã¡rea lateral do tronco do cone Ã©: <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> =  Ï€ âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>g</a1> âˆ™ (<a1 style='font-family: times new roman; font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1> + <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1>) <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> =  3,14 âˆ™ "+geratriz+" âˆ™ ("+raio1+" + "+raio2+") <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> =  3,14 âˆ™ "+geratriz+" âˆ™ "+Resul2+" <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = <a1 style='color: #FF0000'> "+arealateraltroncodocone+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1> <br> ou <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1>  = <a1 style='color: #FF0000'> "+Resul3+"Ï€</a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1> </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.cone.raio1.focus();
      document.cone.raio1.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }	 
       
       
  /** ***********************    Tronco do cone: Ãrea total(At = A(lateral) + A(baseMaior) + A(basemenor)  ****************************************  **/  
    if (a === "areatotaltroncodocone") { 
      var geratriz = eval(document.cone.geratriz.value.replace(",",".").replace(/ /g,""));	
      var raio1 = eval(document.cone.raio1.value.replace(",",".").replace(/ /g,""));
      var raio2 = eval(document.cone.raio2.value.replace(",",".").replace(/ /g,""));	
      
       if ((geratriz < 0) || isNaN(geratriz) || geratriz == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cone.geratriz.focus();
          document.cone.geratriz.select();  
      return false;
   }    
       if ((raio1 < 0) || isNaN(raio1) || raio1 == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cone.raio1.focus();
          document.cone.raio1.select();  
      return false;
   }   
       if ((raio2 < 0) || isNaN(raio2) || raio2 == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cone.raio2.focus();
          document.cone.raio2.select();  
      return false;
   }   
    
   try {
   var geratriz = document.getElementById("resposta").value = roundNumber(geratriz, 2);
   var raio1 = document.getElementById("resposta").value = roundNumber(raio1, 2);   
   var raio2 = document.getElementById("resposta").value = roundNumber(raio2, 2);    
   var areatotaltroncodocone =  Math.PI *[(geratriz *(raio1 + raio2) + raio1*raio1 + raio2*raio2)] ;
   var areatotaltroncodocone = document.getElementById("resposta").value = roundNumber(areatotaltroncodocone, 2);   
   var areatotaltroncodocone2 =  (geratriz *(raio1 + raio2) + raio1*raio1 + raio2*raio2) ; 
   var areatotaltroncodocone2 = document.getElementById("resposta").value = roundNumber(areatotaltroncodocone2, 2); 
   var Resul2 =  raio1 + raio2 ; 
   var Resul2 = document.getElementById("resposta").value = roundNumber(Resul2, 2); 
   var Resul3 =  raio1*raio1 ;  
   var Resul3 = document.getElementById("resposta").value = roundNumber(Resul3, 2);  
   var Resul4 =  raio2*raio2 ;   
   var Resul5 = document.getElementById("resposta").value = roundNumber(Resul5, 2);   
   var Resul5 =  geratriz *(raio1 + raio2); 
   var Resul5 = document.getElementById("resposta").value = roundNumber(Resul5, 2);   
   var Resul6 =  (geratriz *(raio1 + raio2) + raio1*raio1 + raio2*raio2) ; 
   var Resul6 = document.getElementById("resposta").value = roundNumber(Resul6, 2);   
  
     document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'> A Ã¡rea total do tronco do cone Ã©: <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1>  + A<a1 style='font-size: 10px; font-family: times new roman;'>(Base maior )</a1> + A<a1 style='font-size: 10px; font-family: times new roman;'>(Base menor)</a1> </a1> <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = Ï€ âˆ™ [(<a1 style='font-family: times new roman; font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1> + <a1 style='font-family: times new roman; font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1>)<a1 style='font-family: times new roman; font-style:italic;'>g</a1> + (<a1 style='font-family: times new roman; font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1>)Â² + (<a1 style='font-family: times new roman; font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1>)Â²] <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = 3,14âˆ™[("+raio1+" + "+raio2+")âˆ™ "+geratriz+" + ("+raio1+")Â² + ("+raio2+")Â²] <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = 3,14âˆ™["+Resul2+" âˆ™ "+geratriz+" + "+Resul3+" + "+Resul4+"] <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = 3,14 âˆ™ ["+Resul5+" + "+Resul3+" + "+Resul4+"] <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = 3,14 âˆ™ ["+Resul6+" ] <br> V = <a1 style='color: #FF0000'> "+areatotaltroncodocone+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ³</a1> <br> ou <br>   V = <a1 style='color: #FF0000'> "+areatotaltroncodocone2 +"Ï€</a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ³</a1> </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.cone.raio1.focus();
      document.cone.raio1.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }	 
       
  /** ***********************   Tronco do cone: Volume (V = (Ï€.h.(r1Â² +r1.r2 + r2Â²)/3))  ****************************************  **/  
    if (a === "volumetroncodocone") {
      var altura = eval(document.cone.altura.value.replace(",",".").replace(/ /g,""));	
      var raio1 = eval(document.cone.raio1.value.replace(",",".").replace(/ /g,""));
      var raio2 = eval(document.cone.raio2.value.replace(",",".").replace(/ /g,""));	
      
       if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cone.altura.focus();
          document.cone.altura.select();  
      return false;
   }    
       if ((raio1 < 0) || isNaN(raio1) || raio1 == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cone.raio1.focus();
          document.cone.raio1.select();  
      return false;
   }   
       if ((raio2 < 0) || isNaN(raio2) || raio2 == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.cone.raio2.focus();
          document.cone.raio2.select();  
      return false;
   } 
  
   try {
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2);
   var raio1 = document.getElementById("resposta").value = roundNumber(raio1, 2);   
   var raio2 = document.getElementById("resposta").value = roundNumber(raio2, 2);  
   var volumetroncodocone =  (Math.PI * altura * (raio1*raio1 + raio1*raio2 + raio2*raio2))/3 ;
   var volumetroncodocone = document.getElementById("resposta").value = roundNumber(volumetroncodocone, 2);   
   var volumetroncodocone2 =  (altura * (raio1*raio1 + raio1*raio2 + raio2*raio2))/3 ; 
   var volumetroncodocone2 = document.getElementById("resposta").value = roundNumber(volumetroncodocone2, 2);  
   var Resul2 = Math.PI * altura; 
   var Resul2 = document.getElementById("resposta").value = roundNumber(Resul2, 2);  
   var Resul3 = raio1*raio1; 
   var Resul3 = document.getElementById("resposta").value = roundNumber(Resul3, 2);  
   var Resul4 = raio1*raio2;  
   var Resul4 = document.getElementById("resposta").value = roundNumber(Resul4, 2);  
   var Resul5 = raio2*raio2;  
   var Resul5 = document.getElementById("resposta").value = roundNumber(Resul5, 2);  
   var Resul6 = (raio1*raio1 + raio1*raio2 + raio2*raio2);  
   var Resul6 = document.getElementById("resposta").value = roundNumber(Resul6, 2);  
   var Resul7 = (Math.PI * altura * (raio1*raio1 + raio1*raio2 + raio2*raio2));    
   var Resul7 = document.getElementById("resposta").value = roundNumber(Resul7, 2);  
  
     document.getElementById('resposta').innerHTML ="<hr>  O Volume do tronco do cone Ã©: <br> <div style='line-height: 14px;'>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> Ï€ âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> âˆ™ (<a1 style='font-family: times new roman; font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1>Â² + <a1 style='font-family: times new roman; font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1><a1 style='font-family: times new roman; font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1> + <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1>Â²) </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> 3,14 âˆ™ "+altura+" âˆ™ ("+raio1+"Â² + "+raio1+"âˆ™"+raio2+" + "+raio2+"Â²) </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+Resul2+" âˆ™ ("+Resul3+" + "+Resul4+"  + "+Resul5+") </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+Resul2+" âˆ™ "+Resul6+" </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+Resul7+" </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>   </div> V = <a1 style='color: #FF0000'> "+volumetroncodocone+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ³</a1> <br> ou <br>   V = <a1 style='color: #FF0000'> "+volumetroncodocone2+"Ï€</a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ³</a1><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.cone.raio1.focus();
      document.cone.raio1.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
   
  }
  
  
  
  /***#######################################  PIRÃ‚MIDE  ############################################################      **/
  
  function piramide2() {
    var a = document.forms["piramide"]["piramide_type"].value;
  /** ******************************   AREA da base (A =(n.aÂ².cotg PI/n)/4)   *****************************  **/  
   if (a === "areabasepiramide") {
      document.getElementById("arestabaseb").disabled = true;
      document.getElementById("arestabaseb").value ="";
      document.getElementById("arealateral").disabled = true;
      document.getElementById("arealateral").value ="";
      document.getElementById("apotemam").disabled = true;	
      document.getElementById("apotemam").value ="";	
      document.getElementById("apotemar").disabled = true;	
      document.getElementById("apotemar").value ="";		
      document.getElementById("volume").disabled = true;	
      document.getElementById("volume").value ="";
      document.getElementById("altura").disabled = true;		
      document.getElementById("altura").value ="";		
       document.getElementById("arestabasea").disabled = false;		
       document.getElementById("ladosn").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}
          
  /** ******************************   ApÃ³tema da base (Al = n.a.g/2)   *****************************  **/  
   if (a === "apotemabasepiramide") {
      document.getElementById("arestabaseb").disabled = true;
      document.getElementById("arestabaseb").value ="";
      document.getElementById("arealateral").disabled = true;
      document.getElementById("arealateral").value ="";
      document.getElementById("volume").disabled = true;	
      document.getElementById("volume").value ="";	
      document.getElementById("apotemar").disabled = true;	
      document.getElementById("apotemar").value ="";	
      document.getElementById("apotemam").disabled = true;		
      document.getElementById("apotemam").value ="";	
      document.getElementById("altura").disabled = true;		
      document.getElementById("altura").value ="";		
       document.getElementById("arestabasea").disabled = false;		
       document.getElementById("ladosn").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}
  
  /** ******************************  ApÃ³tema lateral (m = âˆš(rÂ² + hÂ²))   *****************************  **/  
   if (a === "apotemalateralpiramide") {
      document.getElementById("arestabaseb").disabled = true;
      document.getElementById("arestabaseb").value ="";
      document.getElementById("arealateral").disabled = true;
      document.getElementById("arealateral").value ="";
      document.getElementById("volume").disabled = true;	
      document.getElementById("volume").value ="";	
      document.getElementById("apotemam").disabled = true;	
      document.getElementById("apotemam").value ="";
      document.getElementById("arestabasea").disabled = true;
      document.getElementById("arestabasea").value ="";
      document.getElementById("ladosn").disabled = false;	
       document.getElementById("altura").disabled = false;		
       document.getElementById("apotemar").disabled = false;		
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /** ******************************   Ãrea lateral (Al = n.a.m/2   *****************************  **/  
   if (a === "arealateralpiramide") {
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";
      document.getElementById("arealateral").disabled = true;
      document.getElementById("arealateral").value ="";
      document.getElementById("volume").disabled = true;	
      document.getElementById("volume").value ="";	
      document.getElementById("apotemar").disabled = true;	
      document.getElementById("apotemar").value ="";	
      document.getElementById("arestabaseb").disabled = true;	
      document.getElementById("arestabaseb").value ="";
      document.getElementById("apotemam").disabled = false;	
       document.getElementById("arestabasea").disabled = false;		
       document.getElementById("ladosn").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /** ******************************   Ãrea totall (At = A(base) . A(lateral)   *****************************  **/  
   if (a === "areatotalpiramide") {
      document.getElementById("altura").disabled = true;
      document.getElementById("altura").value ="";
      document.getElementById("arealateral").disabled = true;
      document.getElementById("arealateral").value ="";
      document.getElementById("volume").disabled = true;	
      document.getElementById("volume").value ="";	
      document.getElementById("apotemar").disabled = true;	
      document.getElementById("apotemar").value ="";	
      document.getElementById("arestabaseb").disabled = true;	
      document.getElementById("arestabaseb").value ="";
      document.getElementById("apotemam").disabled = false;	
       document.getElementById("arestabasea").disabled = false;		
       document.getElementById("ladosn").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
      
  /** ******************************   Volume (V = 1/3 . A(base). h   *****************************  **/  
   if (a === "volumepiramide") {
      document.getElementById("apotemam").disabled = true;
      document.getElementById("apotemam").value ="";
      document.getElementById("arealateral").disabled = true;
      document.getElementById("arealateral").value ="";
      document.getElementById("volume").disabled = true;	
      document.getElementById("volume").value ="";	
      document.getElementById("apotemar").disabled = true;	
      document.getElementById("apotemar").value ="";	
      document.getElementById("arestabaseb").disabled = true;	
      document.getElementById("arestabaseb").value ="";
      document.getElementById("altura").disabled = false;	
       document.getElementById("arestabasea").disabled = false;		
       document.getElementById("ladosn").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /** ******************************   Tronco da pirÃ¢mide: Volume (V = h/3 . (ABÂ² + âˆš(AB.ab) + abÂ²)   *****************************  **/  
   if (a === "volumetroncopiramide") {
      document.getElementById("apotemam").disabled = true;
      document.getElementById("apotemam").value ="";
      document.getElementById("arealateral").disabled = true;
      document.getElementById("arealateral").value ="";
      document.getElementById("volume").disabled = true;	
      document.getElementById("volume").value ="";	
      document.getElementById("apotemar").disabled = true;	
      document.getElementById("apotemar").value ="";	
      document.getElementById("ladosn").disabled = false;	
       document.getElementById("arestabasea").disabled = false;		
       document.getElementById("arestabaseb").disabled = false;
       document.getElementById("altura").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
  } 
   
   
  function piramide1() {
      
   var ddl = document.getElementById("ops");
   var selectedValue = ddl.options[ddl.selectedIndex].value;
      if (selectedValue == "")
     {
      alert("Escolha uma opÃ§Ã£o para Calcular!");
     } 
     
    var a = document.forms["piramide"]["piramide_type"].value;
  /** *************************  Apotema da base (r =(a/(2.tg(180Â°/n))))  ****************************************  **/ 
  if (a === "apotemabasepiramide") { 
      var arestabasea = eval(document.piramide.arestabasea.value.replace(",",".").replace(/ /g,""));	
      var ladosn = eval(document.piramide.ladosn.value.replace(",",".").replace(/ /g,""));
  
      
       if ((arestabasea < 0) || isNaN(arestabasea) || arestabasea == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.piramide.arestabasea.focus();
          document.piramide.arestabasea.select();  
      return false;
   }    
       if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("NÃ£o existe polÃ­gono menor de 3 lados!! e/ou digite um/os valor(es) numÃ©rico(s) maior do que 2!!");
          document.piramide.ladosn.focus();
          document.piramide.ladosn.select();  
      return false;
   }
  
   try {
   var arestabasea = document.getElementById("resposta").value = roundNumber(arestabasea, 2);	 
   var ladosn = document.getElementById("resposta").value = roundNumber(ladosn, 0);	 
   var apotemabasepiramide = arestabasea/(2 * ((Math.tan((Math.PI*(180/ladosn)/180)))));
   var apotemabasepiramide = document.getElementById("resposta").value = roundNumber(apotemabasepiramide, 2);	 
   var Resul2 = (180/ladosn);
   var Resul2 = document.getElementById("resposta").value = roundNumber(Resul2, 2);	  
   var Resul3 = (Math.tan((Math.PI*(180/ladosn)/180)));
   var Resul3 = document.getElementById("resposta").value = roundNumber(Resul3, 2);	  
   var Resul4 = 2*(Math.tan((Math.PI*(180/ladosn)/180))); 
   var Resul4 = document.getElementById("resposta").value = roundNumber(Resul4, 2);	  
   
     document.getElementById('resposta').innerHTML ="<hr>  A apÃ³tema <a1 style='font-family: times new roman; font-style:italic;'>r</a1> da base da pirÃ¢mide Ã©: <br> <div style='line-height: 15px;'> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>r</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman;'> 2 âˆ™ tg(180Â°/<a1 style='font-family: times new roman; font-style:italic;'><a1 style='font-family: times new roman; font-style:italic;'>n</a1></a1>) </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>r</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+arestabasea +" </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman;'> 2 âˆ™ tg(180Â°/"+ladosn+") </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>r</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+arestabasea+" </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman;'> 2 âˆ™ tg("+Resul2+"Â°) </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'><a1 style='font-family: times new roman; font-style:italic;'>r</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'>"+arestabasea+"</td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'>"+arestabasea+"</td></tr> <tr> <td>2 âˆ™ "+Resul3+"</td><td>"+Resul4+"</td> </tr></tbody></table> </div>  <a1 style='font-family: times new roman; font-style:italic;'>r</a1> = <a1 style='color: #FF0000'> "+apotemabasepiramide+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1> <hr><h1 class='logomarca'> BpW </h1> " 
     
      document.piramide.ladosn.focus();
      document.piramide.ladosn.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }  
    
  /** ***********************************  ApÃ³tema lateral (m = âˆš(rÂ² + hÂ²))  ****************************************  **/ 
  if (a === "apotemalateralpiramide") { 
      var altura = eval(document.piramide.altura.value.replace(",",".").replace(/ /g,""));	
      var apotemar = eval(document.piramide.apotemar.value.replace(",",".").replace(/ /g,""));		
      var ladosn = eval(document.piramide.ladosn.value.replace(",",".").replace(/ /g,""));
  
       if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.piramide.altura.focus();
          document.piramide.altura.select();  
      return false;
   }	
       if ((apotemar < 0) || isNaN(apotemar) || apotemar == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.piramide.apotemar.focus();
          document.piramide.apotemar.select();  
      return false;
   }    
       if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("NÃ£o existe polÃ­gono menor de 3 lados!! e/ou digite um/os valor(es) numÃ©rico(s) maior do que 2!!");
          document.piramide.ladosn.focus();
          document.piramide.ladosn.select();  
      return false;
   }
  
   try {
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2);	 
   var ladosn = document.getElementById("resposta").value = roundNumber(ladosn, 0);	 
   var apotemar = document.getElementById("resposta").value = roundNumber(apotemar, 2);	  
   var apotemalateral = Math.sqrt(apotemar*apotemar + altura*altura);
   var apotemalateral = document.getElementById("resposta").value = roundNumber(apotemalateral, 2); 
   var Resul2 = apotemar*apotemar ; 
   var Resul2 = document.getElementById("resposta").value = roundNumber(Resul2, 2);  
   var Resul3 = altura*altura ;  
   var Resul3 = document.getElementById("resposta").value = roundNumber(Resul3, 2);   
   var Resul4 = apotemar*apotemar + altura*altura ;   
   var Resul4 = document.getElementById("resposta").value = roundNumber(Resul4, 2);   
   
     document.getElementById('resposta').innerHTML ="<hr> A apÃ³tema lateral <a1 style='font-family: times new roman; font-style:italic;'>m</a1> da pirÃ¢mide regular Ã© dado por: <br>      <div style='line-height: 25px;'> <a1 style='font-family: times new roman; font-style:italic;'>m</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'><a1 style='font-family: times new roman; font-style:italic;'>r</a1>Â² + <a1 style='font-family: times new roman; font-style:italic;'>h</a1>Â²</a1>   <br>  <a1 style='font-family: times new roman; font-style:italic;'>m</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>("+apotemar+")Â² + ("+apotemar+")Â²</a1> <br>  <a1 style='font-family: times new roman; font-style:italic;'>m</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+Resul2+" + "+Resul3+"</a1> <br>  <a1 style='font-family: times new roman; font-style:italic;'>m</a1> = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+Resul4+" </a1> <br>   <a1 style='font-family: times new roman; font-style:italic;'>m</a1> = <a1 style='color: #FF0000'> "+apotemalateral+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>    </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.piramide.ladosn.focus();
      document.piramide.ladosn.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** ***************************************  AREA da base (A =(n.aÂ².cotg PI/n)/4)  ****************************************  **/ 
  if (a === "areabasepiramide") { 	
      var arestabasea = eval(document.piramide.arestabasea.value.replace(",",".").replace(/ /g,""));	
      var ladosn = eval(document.piramide.ladosn.value.replace(",",".").replace(/ /g,""));
  
      
       if ((arestabasea < 0) || isNaN(arestabasea) || arestabasea == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.piramide.arestabasea.focus();
          document.piramide.arestabasea.select();  
      return false;
   }    
       if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("NÃ£o existe polÃ­gono menor de 3 lados!! e/ou digite um/os valor(es) numÃ©rico(s) maior do que 2!!");
          document.piramide.ladosn.focus();
          document.piramide.ladosn.select();  
      return false;
   }    
  
   try {
   var arestabasea = document.getElementById("resposta").value = roundNumber(arestabasea, 2);	 
   var ladosn = document.getElementById("resposta").value = roundNumber(ladosn, 0);	 
   var piramide = (ladosn * arestabasea * arestabasea * (1/(Math.tan((Math.PI*(180/ladosn)/180)))))/4;
   var piramide = document.getElementById("resposta").value = roundNumber(piramide, 2);	 
   var Res1 = ladosn * arestabasea * arestabasea
   var Res1 = document.getElementById("resposta").value = roundNumber(Res1, 2);	 
   var Res2 = (Math.tan((Math.PI*(180/ladosn)/180)));
   var Res2 = document.getElementById("resposta").value = roundNumber(Res2, 2);	  
   var Res3 =  arestabasea * arestabasea;
   var Res3 = document.getElementById("resposta").value = roundNumber(Res3, 2);	  
   var Res4 = (180/ladosn);
   var Res4 = document.getElementById("resposta").value = roundNumber(Res4, 2);	  
   
     document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 16px;'> A Ã¡rea da base da pirÃ¢mide regular reta de <a1 style='color: #FF0000'>"+ladosn+"</a1> lados Ã©: <br> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>a</a1><a1 style='font-size: 21px; font-family: times new roman;'>Â²</a1> âˆ™ cotg(180Â°/<a1 style='font-family: times new roman; font-style:italic;'>n</a1>) </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladosn+" âˆ™ ("+arestabasea+")<a1 style='font-size: 21px; font-family: times new roman;'>Â²</a1> âˆ™ cotg(180Â°/"+ladosn+") </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladosn+" âˆ™ "+Res3+" âˆ™ cotg("+Res4+")Â° </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+Res1+" âˆ™ "+Res2+" </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>  A = <a1 style='color: #FF0000'> "+piramide+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>  </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.piramide.ladosn.focus();
      document.piramide.ladosn.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
       
  /** **************************************  Ãrea lateral (Al = n.a.m/2  ****************************************  **/ 
  if (a === "arealateralpiramide") { 
      var arestabasea = eval(document.piramide.arestabasea.value.replace(",",".").replace(/ /g,""));	
      var ladosn = eval(document.piramide.ladosn.value.replace(",",".").replace(/ /g,""));
      var apotemam = eval(document.piramide.apotemam.value.replace(",",".").replace(/ /g,""));
      
       if ((arestabasea < 0) || isNaN(arestabasea) || arestabasea == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.piramide.arestabasea.focus();
          document.piramide.arestabasea.select();  
      return false;
   }    
       if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("NÃ£o existe polÃ­gono menor de 3 lados!! e/ou digite um/os valor(es) numÃ©rico(s) maior do que 2!!");
          document.piramide.ladosn.focus();
          document.piramide.ladosn.select();  
      return false;
   } 
       if ((apotemam < 0) || isNaN(apotemam) || apotemam == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!!");
          document.piramide.apotemam.focus();
          document.piramide.apotemam.select();  
      return false;
   } 
  
   try {
   var arestabasea = document.getElementById("resposta").value = roundNumber(arestabasea, 2);	 
   var ladosn = document.getElementById("resposta").value = roundNumber(ladosn, 0);
   var apotemam = document.getElementById("resposta").value = roundNumber(apotemam, 2);	 
   var arealateral = (ladosn * arestabasea * apotemam)/2 ;
   var arealateral = document.getElementById("resposta").value = roundNumber(arealateral, 2);	 
   var arealateral2 = (ladosn * arestabasea * apotemam) ;
   var arealateral2 = document.getElementById("resposta").value = roundNumber(arealateral2, 2);	  
   
     document.getElementById('resposta').innerHTML ="<hr> A Ã¡rea lateral de uma pirÃ¢mide regular de <a1 style='color: #FF0000'>"+ladosn+"</a1> lados Ã©: <br>  <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>a</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>m</a1> </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladosn+" âˆ™ "+arestabasea+" âˆ™ "+apotemam+" </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+arealateral2+" </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table> </div> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1>  = <a1 style='color: #FF0000'> "+arealateral+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>Â² <hr><h1 class='logomarca'> BpW </h1>  " 
     
      document.piramide.ladosn.focus();
      document.piramide.ladosn.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }	 
  
  /** ************************************  Ãrea totall (At = A(base) . A(lateral)  ****************************************  **/ 
  if (a === "areatotalpiramide") { 
      var arestabasea = eval(document.piramide.arestabasea.value.replace(",",".").replace(/ /g,""));	
      var ladosn = eval(document.piramide.ladosn.value.replace(",",".").replace(/ /g,""));
      var apotemam = eval(document.piramide.apotemam.value.replace(",",".").replace(/ /g,""));
      
       if ((arestabasea < 0) || isNaN(arestabasea) || arestabasea == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.piramide.arestabasea.focus();
          document.piramide.arestabasea.select();  
      return false;
   }    
       if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("NÃ£o existe polÃ­gono menor de 3 lados!! e/ou digite um/os valor(es) numÃ©rico(s) maior do que 2!!");
          document.piramide.ladosn.focus();
          document.piramide.ladosn.select();  
      return false;
   } 
       if ((apotemam < 0) || isNaN(apotemam) || apotemam == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!!");
          document.piramide.apotemam.focus();
          document.piramide.apotemam.select();  
      return false;
   } 
  
   try {
   var arestabasea = document.getElementById("resposta").value = roundNumber(arestabasea, 2);	 
   var ladosn = document.getElementById("resposta").value = roundNumber(ladosn, 0);
   var apotemam = document.getElementById("resposta").value = roundNumber(apotemam, 2);		 
   var arealateral = (ladosn * arestabasea * apotemam)/2 ;
   var arealateral = document.getElementById("resposta").value = roundNumber(arealateral, 2);	 
   var arealateral2 = (ladosn * arestabasea * apotemam) ;
   var arealateral2 = document.getElementById("resposta").value = roundNumber(arealateral2, 2);	  
   var areabase = (ladosn * arestabasea * arestabasea * (1/(Math.tan((Math.PI*(180/ladosn)/180)))))/4;
   var areabase = document.getElementById("resposta").value = roundNumber(areabase, 2);	  
   var Res1 = ladosn * arestabasea * arestabasea;
   var Res1 = document.getElementById("resposta").value = roundNumber(Res1, 2);	   
   var Res2 = (Math.tan((Math.PI*(180/ladosn)/180)));
   var Res2 = document.getElementById("resposta").value = roundNumber(Res2, 2); 
   var Res3 =  arestabasea * arestabasea;
   var Res3 = document.getElementById("resposta").value = roundNumber(Res3, 2); 
   var Res4 = (180/ladosn);  
   var Res4 = document.getElementById("resposta").value = roundNumber(Res4, 2); 
   var Res5 =   areabase + arealateral;   
   var Res5 = document.getElementById("resposta").value = roundNumber(Res5, 2); 
   
     document.getElementById('resposta').innerHTML ="<hr>A Ã¡rea total de uma pirÃ¢mide regular de <a1 style='color: #FF0000'>"+ladosn+"</a1> lados Ã© dado por: <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = A<a1 style='font-size: 10px; font-family: times new roman;'>(Base)</a1> + A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> <br> Assim, a Ã¡rea da base Ã©: <br>         <div style='line-height: 15px;'> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Base)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>a</a1><a1 style='font-size: 21px; font-family: times new roman;'>Â²</a1> âˆ™ cotg(180Â°/<a1 style='font-family: times new roman; font-style:italic;'>n</a1>) </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Base)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladosn+" âˆ™ ("+arestabasea+")<a1 style='font-size: 21px; font-family: times new roman;'>Â²</a1> âˆ™ cotg(180Â°/"+ladosn+") </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Base)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>"+ladosn+" âˆ™ "+Res3+" âˆ™ cotg("+Res4+")Â° </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Base)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+Res1+" âˆ™ "+Res2+" </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Base)</a1> = <a1 style='color: #FF0000'> "+areabase+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>  </div>   <br> Agora, a Ã¡rea lateral Ã©: <br>  <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>a</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>m</a1> </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+ladosn+" âˆ™ "+arestabasea+" âˆ™ "+apotemam+" </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>     <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+arealateral2+" </td>  <td rowspan='2'> &nbsp;=&nbsp; </td>  <td rowspan='2'> <a1 style='color: #FF0000'> "+arealateral+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>Â² </td></tr> <tr> <td> 2 </td> </tr></tbody></table> <br> Assim, concluÃ­mos que: <br>    </div>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = "+areabase+" + "+arealateral+"  <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = <a1 style='color: #FF0000'>"+Res5+"</a1>&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>Â²<hr><h1 class='logomarca'> BpW </h1> " 
     
      document.piramide.ladosn.focus();
      document.piramide.ladosn.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }	
  
   
  /** ***********************************  Volume (V = 1/3 . A(base). h   ****************************************  **/ 
  if (a === "volumepiramide") { 
      var arestabasea = eval(document.piramide.arestabasea.value.replace(",",".").replace(/ /g,""));	
      var ladosn = eval(document.piramide.ladosn.value.replace(",",".").replace(/ /g,""));
      var altura = eval(document.piramide.altura.value.replace(",",".").replace(/ /g,""));
      
       if ((arestabasea < 0) || isNaN(arestabasea) || arestabasea == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.piramide.arestabasea.focus();
          document.piramide.arestabasea.select();  
      return false;
   }    
       if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("NÃ£o existe polÃ­gono menor de 3 lados!! e/ou digite um/os valor(es) numÃ©rico(s) maior do que 2!!");
          document.piramide.ladosn.focus();
          document.piramide.ladosn.select();  
      return false;
   } 
       if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!!");
          document.piramide.altura.focus();
          document.piramide.altura.select();  
      return false;
   } 
  
   try {
   var arestabasea = document.getElementById("resposta").value = roundNumber(arestabasea, 2);	 
   var ladosn = document.getElementById("resposta").value = roundNumber(ladosn, 0);
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2);	 
   var areabase = (ladosn * arestabasea * arestabasea * (1/(Math.tan((Math.PI*(180/ladosn)/180)))))/4;
   var areabase = document.getElementById("resposta").value = roundNumber(areabase, 2); 
   var Res1 = ladosn * arestabasea * arestabasea;
   var Res1 = document.getElementById("resposta").value = roundNumber(Res1, 2);  
   var Res2 = (Math.tan((Math.PI*(180/ladosn)/180)));
   var Res2 = document.getElementById("resposta").value = roundNumber(Res2, 2);   
   var Res3 =  arestabasea * arestabasea;
   var Res3 = document.getElementById("resposta").value = roundNumber(Res3, 2);   
   var Res4 = (180/ladosn);  
   var Res4 = document.getElementById("resposta").value = roundNumber(Res4, 2);   
   var volumepiramide = ((ladosn * arestabasea * arestabasea * (1/(Math.tan((Math.PI*(180/ladosn)/180)))))*altura)/12;
   var volumepiramide = document.getElementById("resposta").value = roundNumber(volumepiramide, 2);   
  
     document.getElementById('resposta').innerHTML ="<hr>O volume da pirÃ¢mide regular reta de <a1 style='color: #FF0000'>"+ladosn+"</a1> lados de base Ã© dado por: <br> <div style='line-height: 14px;'>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> A<a1 style='font-size: 10px; font-family: times new roman;'>(base) </a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> V &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>a</a1><a1 style='font-size: 21px; font-family: times new roman;'>Â²</a1> âˆ™ cotg(180Â°/<a1 style='font-family: times new roman; font-style:italic;'>n</a1>) </td>  <td rowspan='2'> &nbsp;âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1>&nbsp; </td>  </td></tr> <tr> <td> 12 </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> V &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+ladosn+" âˆ™ ("+arestabasea+")<a1 style='font-size: 21px; font-family: times new roman;'>Â²</a1> âˆ™ cotg(180Â°/"+ladosn+") </td>  <td rowspan='2'> &nbsp;âˆ™ "+altura+"&nbsp; </td>  </td></tr> <tr> <td> 12 </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> V &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+ladosn+" âˆ™ "+Res3+" âˆ™ cotg("+Res4+")Â° </td>  <td rowspan='2'> &nbsp;âˆ™ "+altura+"&nbsp; </td>  </td></tr> <tr> <td> 12 </td> </tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> V &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+Res1+" âˆ™ "+Res2+" âˆ™ "+altura+" </td>  </td></tr> <tr> <td> 12 </td> </tr></tbody></table></div> V = <a1 style='color: #FF0000'> "+volumepiramide+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ³</a1>  <hr><h1 class='logomarca'> BpW </h1>  " 
     
      document.piramide.ladosn.focus();
      document.piramide.ladosn.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }	 
  
  /** ********************  Tronco da pirÃ¢mide: Volume (V = h/3 . (ABÂ² + âˆš(AB.ab) + abÂ²)  ****************************************  **/ 
  if (a === "volumetroncopiramide") { 
      var arestabasea = eval(document.piramide.arestabasea.value.replace(",",".").replace(/ /g,""));
      var arestabaseb = eval(document.piramide.arestabaseb.value.replace(",",".").replace(/ /g,""));	
      var ladosn = eval(document.piramide.ladosn.value.replace(",",".").replace(/ /g,""));
      var altura = eval(document.piramide.altura.value.replace(",",".").replace(/ /g,""));
      
       if ((arestabasea < 0) || isNaN(arestabasea) || arestabasea == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.piramide.arestabasea.focus();
          document.piramide.arestabasea.select();  
      return false;
   }    
       if ((arestabaseb < 0) || isNaN(arestabaseb) || arestabaseb == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.piramide.arestabaseb.focus();
          document.piramide.arestabaseb.select();  
      return false;
   } 
       if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("NÃ£o existe polÃ­gono menor de 3 lados!! e/ou digite um/os valor(es) numÃ©rico(s) maior do que 2!!");
          document.piramide.ladosn.focus();
          document.piramide.ladosn.select();  
      return false;
   } 
       if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.piramide.altura.focus();
          document.piramide.altura.select();  
      return false;
   } 
  
   try {
   var arestabasea = document.getElementById("resposta").value = roundNumber(arestabasea, 2);	 
   var ladosn = document.getElementById("resposta").value = roundNumber(ladosn, 0);
   var arestabaseb = document.getElementById("resposta").value = roundNumber(arestabaseb, 2);	
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2); 
   var areabasemaior = (ladosn * arestabasea * arestabasea * (1/(Math.tan((Math.PI*(180/ladosn)/180)))))/4;
   var areabasemaior = document.getElementById("resposta").value = roundNumber(areabasemaior, 2);  
   var Res1 = ladosn * arestabasea * arestabasea;
   var Res1 = document.getElementById("resposta").value = roundNumber(Res1, 2);   
   var Res2 = (Math.tan((Math.PI*(180/ladosn)/180)));
   var Res2 = document.getElementById("resposta").value = roundNumber(Res2, 2);   
   var Res3 =  arestabasea * arestabasea;
   var Res3 = document.getElementById("resposta").value = roundNumber(Res3, 2);   
   var Res4 = (180/ladosn);	 
   var Res4 = document.getElementById("resposta").value = roundNumber(Res4, 2);   
   var areabasemenor = (ladosn * arestabaseb * arestabaseb * (1/(Math.tan((Math.PI*(180/ladosn)/180)))))/4;
   var areabasemenor = document.getElementById("resposta").value = roundNumber(areabasemenor, 2);   
   var Res6 = ladosn * arestabaseb * arestabaseb;
   var Res6 = document.getElementById("resposta").value = roundNumber(Res6, 2);    
   var Res7 = (Math.tan((Math.PI*(180/ladosn)/180)));
   var Res7 = document.getElementById("resposta").value = roundNumber(Res7, 2);    
   var Res8 =  arestabaseb * arestabaseb;
   var Res8 = document.getElementById("resposta").value = roundNumber(Res8, 2);    
   var Res9 = (180/ladosn);	
   var Res9 = document.getElementById("resposta").value = roundNumber(Res9, 2);    
   var Res10 = areabasemaior * areabasemenor;	
   var Res10 = document.getElementById("resposta").value = roundNumber(Res10, 2);    
   var Res11 = Math.sqrt(areabasemaior * areabasemenor);	
   var Res11 = document.getElementById("resposta").value = roundNumber(Res11, 2);    
   var Res12 =  areabasemaior +  Math.sqrt(areabasemaior * areabasemenor) + areabasemenor ;	
   var Res12 = document.getElementById("resposta").value = roundNumber(Res12, 2);    
   var Res13 = altura *(areabasemaior +  Math.sqrt(areabasemaior * areabasemenor) + areabasemenor) ;	
   var Res13 = document.getElementById("resposta").value = roundNumber(Res13, 2);    
   var volumetroncopiramide = (altura/3) *(areabasemaior + Math.sqrt(areabasemaior*areabasemenor) +  areabasemenor) ;
   var volumetroncopiramide = document.getElementById("resposta").value = roundNumber(volumetroncopiramide, 2);    
   
   document.getElementById('resposta').innerHTML ="<hr> CÃ¡lculo da Ã¡rea da base maior: <br>  <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Base maior)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  <a1 style='font-family: times new roman; font-style:italic;'>n</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>a</a1><a1 style='font-size: 21px; font-family: times new roman;'>Â²</a1> âˆ™ cotg(180Â°/<a1 style='font-family: times new roman; font-style:italic;'>n</a1>) </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Base maior)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladosn+" âˆ™ ("+arestabasea+")<a1 style='font-size: 21px; font-family: times new roman;'>Â²</a1> âˆ™ cotg(180Â°/"+ladosn+") </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Base maior)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladosn+" âˆ™ "+Res3+" âˆ™ cotg("+Res4+")Â° </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Base maior)</a1> &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+Res1+" âˆ™ "+Res2+" </td>  <td rowspan='2'> &nbsp;=&nbsp; </td>  <td rowspan='2'> <a1 style='color: #FF0000'> "+areabasemaior+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1> </td></tr> <tr> <td> 4 </td> </tr></tbody></table>   </div>  <br> CÃ¡lculo da Ã¡rea da base menor: <br>  <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Base menor)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  <a1 style='font-family: times new roman; font-style:italic;'>n</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>b</a1><a1 style='font-size: 21px; font-family: times new roman;'>Â²</a1> âˆ™ cotg(180Â°/<a1 style='font-family: times new roman; font-style:italic;'>n</a1>) </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Base menor)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladosn+" âˆ™ ("+arestabaseb+")<a1 style='font-size: 21px; font-family: times new roman;'>Â²</a1> âˆ™ cotg(180Â°/"+ladosn+") </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Base menor)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+ladosn+" âˆ™ "+Res8+" âˆ™ cotg("+Res9+")Â° </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Base menor)</a1> &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+Res6+" âˆ™ "+Res7+" </td>  <td rowspan='2'> &nbsp;=&nbsp; </td>  <td rowspan='2'> <a1 style='color: #FF0000'> "+areabasemenor+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1> </td></tr> <tr> <td> 4 </td> </tr></tbody></table>   </div> <br> Logo, o volume do tronco da pirÃ¢mide regular reta Ã© dado por: <div style='line-height: 15px;'> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> hâˆ™(A<a1 style='font-size: 10px; font-family: times new roman;'>(M)</a1>+âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>A<a1 style='font-size: 10px; font-family: times new roman;'>(M)</a1>âˆ™A<a1 style='font-size: 10px; font-family: times new roman;'>(m)</a1>   </a1> + A<a1 style='font-size: 10px; font-family: times new roman;'>(m)</a1>) </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>     <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+altura+" âˆ™ ("+areabasemaior+" +âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+areabasemaior+" âˆ™ "+areabasemenor+" </a1> + "+areabasemenor+") </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>     <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+altura+" âˆ™ ("+areabasemaior+" +âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+Res10+" </a1> + "+areabasemenor+") </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+altura+" âˆ™ ("+areabasemaior+" + "+Res11+" + "+areabasemenor+") </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+altura+" âˆ™ "+Res12+" </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>          <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> V &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+Res13+"  </td>  <td rowspan='2'> &nbsp;=&nbsp; </td>  <td rowspan='2'> <a1 style='color: #FF0000'> "+volumetroncopiramide+"</a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ³</a1> </td></tr> <tr> <td> 3 </td> </tr></tbody></table></div>  <hr><h1 class='logomarca'> BpW </h1> " 
     
      document.piramide.arestabasea.focus();
      document.piramide.arestabasea.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }	 
    
  }
  
  /***#########################################  ESFERA  ############################################################      **/
  
  function esfera2() {
    var a = document.forms["esfera"]["esfera_type"].value;
  /** ******************************   Raio da esfera: R = Â³âˆš(3V)/4Ï€)   *****************************  **/  
   if (a === "raioR1") {
      document.getElementById("raioR").disabled = true;
      document.getElementById("raioR").value ="";
      document.getElementById("alturah").disabled = true;
      document.getElementById("alturah").value ="";
      document.getElementById("superficie").disabled = true;	
      document.getElementById("superficie").value ="";	
      document.getElementById("raioc").disabled = true;	
      document.getElementById("raioc").value ="";	
      document.getElementById("raior").disabled = true;	
      document.getElementById("raior").value ="";		
       document.getElementById("volume").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}
      
  /** ******************************   Raio da esfera: R = âˆš(A/4Ï€)   *****************************  **/  
   if (a === "raioR2") {
      document.getElementById("raioR").disabled = true;
      document.getElementById("raioR").value ="";
      document.getElementById("alturah").disabled = true;
      document.getElementById("alturah").value ="";
      document.getElementById("volume").disabled = true;	
      document.getElementById("volume").value ="";	
      document.getElementById("raioc").disabled = true;	
      document.getElementById("raioc").value ="";	
      document.getElementById("raior").disabled = true;	
      document.getElementById("raior").value ="";		
       document.getElementById("superficie").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
      
  /** ******************************   Superficie da esfera: S = 4.Ï€.rÂ²   *****************************  **/  
   if (a === "Superificieesfera") {
      document.getElementById("superficie").disabled = true;
      document.getElementById("superficie").value ="";
      document.getElementById("alturah").disabled = true;
      document.getElementById("alturah").value ="";
      document.getElementById("volume").disabled = true;	
      document.getElementById("volume").value ="";	
      document.getElementById("raioc").disabled = true;	
      document.getElementById("raioc").value ="";	
      document.getElementById("raior").disabled = true;	
      document.getElementById("raior").value ="";		
       document.getElementById("raioR").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}		
  
  /** ******************************   Volume da esfera: S = 4/3.Ï€.rÂ³   *****************************  **/  
   if (a === "volumeesfera") {
      document.getElementById("superficie").disabled = true;
      document.getElementById("superficie").value ="";
      document.getElementById("alturah").disabled = true;
      document.getElementById("alturah").value ="";
      document.getElementById("volume").disabled = true;	
      document.getElementById("volume").value ="";	
      document.getElementById("raioc").disabled = true;	
      document.getElementById("raioc").value ="";	
      document.getElementById("raior").disabled = true;	
      document.getElementById("raior").value ="";		
       document.getElementById("raioR").disabled = false;	
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /** ******************************   ÃRea da superficÃ­e da Semiesfera: S = 2.Ï€.h.r   *****************************  **/  
   if (a === "arealateralsemiesfera") {
      document.getElementById("superficie").disabled = true;
      document.getElementById("superficie").value ="";
      document.getElementById("volume").disabled = true;	
      document.getElementById("volume").value ="";	
      document.getElementById("raioc").disabled = true;	
      document.getElementById("raioc").value ="";	
      document.getElementById("raioR").disabled = true;	
      document.getElementById("raioR").value ="";		
       document.getElementById("raior").disabled = false;	
       document.getElementById("alturah").disabled = false;		
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /** ******************************   Ãrea total da Semiesfera: S = 2.Ï€.h.r + Ï€(2rÂ² - hÂ²)   *****************************  **/  
   if (a === "areatotalsemiesfera") {
      document.getElementById("superficie").disabled = true;
      document.getElementById("superficie").value ="";
      document.getElementById("volume").disabled = true;	
      document.getElementById("volume").value ="";	
      document.getElementById("raioc").disabled = true;	
      document.getElementById("raioc").value ="";	
      document.getElementById("raioR").disabled = true;	
      document.getElementById("raioR").value ="";		
       document.getElementById("alturah").disabled = false;
       document.getElementById("raior").disabled = false;		
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /** ******************************   Raio c da Semiesfera: c = âˆš(rÂ² - hÂ²)   *****************************  **/  
   if (a === "raiocdasemiesfera") {
      document.getElementById("superficie").disabled = true;
      document.getElementById("superficie").value ="";
      document.getElementById("volume").disabled = true;	
      document.getElementById("volume").value ="";	
      document.getElementById("raioc").disabled = true;	
      document.getElementById("raioc").value ="";	
      document.getElementById("raioR").disabled = true;	
      document.getElementById("raioR").value ="";		
       document.getElementById("alturah").disabled = false;
       document.getElementById("raior").disabled = false;		
   }
   try { 	}
       catch(e) {alert(e)}	
      
  /** ******************************   Ãrea do circulo de raio c da Semiesfera: A = Ï€.(rÂ² - hÂ²)   *****************************  **/  
   if (a === "areaderaiocdasemiesfera") {
      document.getElementById("superficie").disabled = true;
      document.getElementById("superficie").value ="";
      document.getElementById("volume").disabled = true;	
      document.getElementById("volume").value ="";	
      document.getElementById("raioc").disabled = true;	
      document.getElementById("raioc").value ="";	
      document.getElementById("raioR").disabled = true;	
      document.getElementById("raioR").value ="";		
       document.getElementById("alturah").disabled = false;
       document.getElementById("raior").disabled = false;		
   }
   try { 	}
       catch(e) {alert(e)}	
  
  /** ******************************  Volume da Semiesfera: V = 1/3.Ï€.h.(3rÂ² - hÂ²)   *****************************  **/  
   if (a === "volumedasemiesfera") {
      document.getElementById("superficie").disabled = true;
      document.getElementById("superficie").value ="";
      document.getElementById("volume").disabled = true;	
      document.getElementById("volume").value ="";	
      document.getElementById("raioc").disabled = true;	
      document.getElementById("raioc").value ="";	
      document.getElementById("raioR").disabled = true;	
      document.getElementById("raioR").value ="";	
       document.getElementById("alturah").disabled = false;
       document.getElementById("raior").disabled = false;		
   }
   try { 	}
       catch(e) {alert(e)}		
      
  } 
   
  
  function esfera1() {
      
   var ddl = document.getElementById("ops");
   var selectedValue = ddl.options[ddl.selectedIndex].value;
      if (selectedValue == "")
     {
      alert("Escolha uma opÃ§Ã£o para Calcular!");
     } 
     
    var a = document.forms["esfera"]["esfera_type"].value;
    /** ****************************************   Raio da esfera: R = Â³âˆš(3V)/4Ï€)  ****************************************  **/  
    if (a === "raioR1") { 
      var volume = eval(document.esfera.volume.value.replace(",",".").replace(/ /g,""));
      
       if ((volume < 0) || isNaN(volume) || volume == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.esfera.volume.focus();
          document.esfera.volume.select();  
      return false;
   }    
  
   try {
   var volume = document.getElementById("resposta").value = roundNumber(volume, 2);
   var raioR1 =  Math.pow((3*volume)/(4*Math.PI) ,1/3) ;
   var raioR1 = document.getElementById("resposta").value = roundNumber(raioR1, 2); 
   var Resul2 =  3*volume  ;
   var Resul2 = document.getElementById("resposta").value = roundNumber(Resul2, 2);  
   var Resul3 =  4*Math.PI ; 
   var Resul3 = document.getElementById("resposta").value = roundNumber(Resul3, 2);   
   var Resul4 =  (3*volume)/(4*Math.PI) ;
   var Resul4 = document.getElementById("resposta").value = roundNumber(Resul4, 2);    
   var Resul5 =  Resul2/Resul3 ;  
   var Resul5 = document.getElementById("resposta").value = roundNumber(Resul5, 2);   
   
       document.getElementById('resposta').innerHTML ="<hr>  O raio R da esferÃ¡ Ã©: <br><div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  4 âˆ™ Ï€ âˆ™ RÂ³ </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> "+volume+" &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>   4 âˆ™ 3,14 âˆ™ RÂ³ </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table> </div>  3 âˆ™ "+volume+" = "+Resul3+" âˆ™ RÂ³ <br> "+Resul2+" = "+Resul3+" âˆ™ RÂ³ <br>  <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> "+Resul2+" </td><td rowspan='2'> &nbsp;=&nbsp; RÂ³ </td></tr><tr><td> "+Resul3+" </td> </tr></tbody></table> </div>  <div style='line-height: 24px;'>   "+Resul5+" =  RÂ³ <br>  R = Â³âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+Resul4+" </a1> <br> R = <a1 style='color: #FF0000'> "+raioR1+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1> </div> <hr><h1 class='logomarca'> BpW </h1>" 
     
      document.esfera.volume.focus();
      document.esfera.volume.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
  /** ***************************************   Raio da esfera: R = âˆš(A/4Ï€)  ****************************************  **/  
    if (a === "raioR2") { 
      var superficie = eval(document.esfera.superficie.value.replace(",",".").replace(/ /g,""));
      
       if ((superficie < 0) || isNaN(superficie) || superficie == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.esfera.superficie.focus();
          document.esfera.superficie.select();  
      return false;
   }    
    
   try {
   var superficie = document.getElementById("resposta").value = roundNumber(superficie, 2);	 
   var raioR2 =  Math.sqrt(superficie / (4*Math.PI)) ;
   var raioR2 = document.getElementById("resposta").value = roundNumber(raioR2, 2);	  
   var Resul2 =  4*Math.PI ; 
   var Resul2 = document.getElementById("resposta").value = roundNumber(Resul2, 2);	 
   var Resul3 =  superficie/(4*Math.PI) ;  
   var Resul3 = document.getElementById("resposta").value = roundNumber(Resul3, 2);	 
   
       document.getElementById('resposta').innerHTML ="<hr> O raio R da esferÃ¡ Ã©: <br>  S = 4 âˆ™ Ï€ âˆ™ RÂ² <br> "+superficie+" = 4 âˆ™ 3,14 âˆ™ RÂ² <br> "+superficie+" = "+Resul2+" âˆ™ RÂ² <br>  <div style='line-height: 15px;'> <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> "+superficie+" </td><td rowspan='2'> &nbsp;=&nbsp; RÂ²  </td></tr><tr><td> "+Resul2+" </td> </tr></tbody></table> </div>    <div style='line-height: 22px;'>  "+Resul3+" = RÂ² <br>        R = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+Resul3+" </a1> <br>   R = <a1 style='color: #FF0000'> "+raioR2+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1> </div>  <hr><h1 class='logomarca'> BpW </h1> " 
     
      document.esfera.superficie.focus();
      document.esfera.superficie.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }	 
       
  
  /** ****************************************    Superficie da esfera: S = 4.Ï€.rÂ²  ****************************************  **/  
    if (a === "Superificieesfera") { 
      var raioR = eval(document.esfera.raioR.value.replace(",",".").replace(/ /g,""));
      
       if ((raioR < 0) || isNaN(raioR) || raioR == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.esfera.raioR.focus();
          document.esfera.raioR.select();  
      return false;
   }  
  
   try {
   var raioR = document.getElementById("resposta").value = roundNumber(raioR, 2);		 
   var superifice =  4*Math.PI * raioR*raioR ;
   var superifice = document.getElementById("resposta").value = roundNumber(superifice, 2);	 
   var Resul2 =  raioR*raioR; 
   var Resul2 = document.getElementById("resposta").value = roundNumber(Resul2, 2);	 
   var superifice2 =  4*raioR*raioR ; 
   var superifice2 = document.getElementById("resposta").value = roundNumber(superifice2, 2);	 
   
       document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>A Ã¡rea da superfÃ­cie S da esferÃ¡ Ã©: <br> S = 4 âˆ™ Ï€ âˆ™ RÂ² <br> S = 4 âˆ™ 3,14 âˆ™ ("+raioR+")Â² <br>   S = 4 âˆ™ 3,14 âˆ™ "+Resul2+" <br>  S = <a1 style='color: #FF0000'> "+superifice+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>  <br> ou <br>  S = <a1 style='color: #FF0000'> "+superifice2+"Ï€</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>          </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.esfera.raioR.focus();
      document.esfera.raioR.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 
       
  
  /** ********************************************   Volume da esfera: S = 4/3.Ï€.rÂ³   ****************************************  **/  
    if (a === "volumeesfera") { 
      var raioR = eval(document.esfera.raioR.value.replace(",",".").replace(/ /g,""));
      
       if ((raioR < 0) || isNaN(raioR) || raioR == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.esfera.raioR.focus();
          document.esfera.raioR.select();  
      return false;
   }   
    
   try {
   var raioR = document.getElementById("resposta").value = roundNumber(raioR, 2);		 
   var superifice =  (4*Math.PI * raioR*raioR*raioR)/3 ;
   var superifice = document.getElementById("resposta").value = roundNumber(superifice, 2);	 
   var Resul2 =  raioR*raioR*raioR;
   var Resul2 = document.getElementById("resposta").value = roundNumber(Resul2, 2);	 
   var Resul3 =  (4*Math.PI * raioR*raioR*raioR); 
   var Resul3 = document.getElementById("resposta").value = roundNumber(Resul3, 2);	 
   var superifice2 =  (4*raioR*raioR*raioR)/3 ; 
   var superifice2 = document.getElementById("resposta").value = roundNumber(superifice2, 2);	 
   
       document.getElementById('resposta').innerHTML ="<hr>  O volume V da esfera Ã©: <br> <div style='line-height: 15px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>V &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'>4 âˆ™ Ï€ âˆ™ RÂ³</td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'>4 âˆ™ 3,14 âˆ™ ("+raioR+")Â³</td></tr> <tr> <td>3</td><td>3</td> </tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> 4 âˆ™ 3,14 âˆ™ "+Resul2+" </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+Resul3+" </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table></div>  V = <a1 style='color: #FF0000'> "+superifice+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ³</a1>  <br> ou <br>  V = <a1 style='color: #FF0000'> "+superifice2+"Ï€</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ³</a1>  <hr><h1 class='logomarca'> BpW </h1> " 
     
      document.esfera.raioR.focus();
      document.esfera.raioR.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 
  
  
  /** ****************************   ÃRea da superficÃ­e da Semiesfera: S = 2.Ï€.h.r    **********************************  **/  
    if (a === "arealateralsemiesfera") { 
      var raior = eval(document.esfera.raior.value.replace(",",".").replace(/ /g,""));
      var alturah = eval(document.esfera.alturah.value.replace(",",".").replace(/ /g,""));	
      
       if ((raior < 0) || isNaN(raior) || raior == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.esfera.raior.focus();
          document.esfera.raior.select();  
      return false;
   }    
       if ((alturah < 0) || isNaN(alturah) || alturah == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.esfera.alturah.focus();
          document.esfera.alturah.select();  
      return false;
   }  
  
   try {
   var raior = document.getElementById("resposta").value = roundNumber(raior, 2);		 
   var alturah = document.getElementById("resposta").value = roundNumber(alturah, 2);		 
   var superifice =  2*Math.PI *alturah* raior ;
   var superifice = document.getElementById("resposta").value = roundNumber(superifice, 2);	 
   var superifice2 =  2 *alturah * raior ; 
   var superifice2 = document.getElementById("resposta").value = roundNumber(superifice2, 2);	
   
       document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 20px;'>A Ã¡rea da superfÃ­cie da semiesfera parcial Ã©: <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(superfÃ­cie)</a1> = 2 âˆ™ Ï€ âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>r</a1>  <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(superfÃ­cie)</a1> = 2 âˆ™ 3,14 âˆ™ "+alturah+" âˆ™ "+raior+"  <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(superfÃ­cie)</a1> = <a1 style='color: #FF0000'> "+superifice+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ³</a1>  <br> ou <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(superfÃ­cie)</a1> = <a1 style='color: #FF0000'> "+superifice2+"Ï€</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ³</a1>          </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.esfera.raior.focus();
      document.esfera.raior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 
   
  
  /** *****************************************   Ãrea total da Semiesfera: S = 2.Ï€.h.r + Ï€(2rÂ² - hÂ²)    ****************************************  **/  
    if (a === "areatotalsemiesfera") { 
      var raior = eval(document.esfera.raior.value.replace(",",".").replace(/ /g,""));
      var alturah = eval(document.esfera.alturah.value.replace(",",".").replace(/ /g,""));	
      
       if ((raior < 0) || isNaN(raior) || raior == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.esfera.raior.focus();
          document.esfera.raior.select();  
      return false;
   }    
       if ((alturah < 0) || isNaN(alturah) || alturah == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.esfera.alturah.focus();
          document.esfera.alturah.select();  
      return false;
   }  
  
   try {
   var raior = document.getElementById("resposta").value = roundNumber(raior, 2);		 
   var alturah = document.getElementById("resposta").value = roundNumber(alturah, 2);		 
   var superifice =  2*Math.PI *alturah* raior  + Math.PI *(2*raior*raior  - alturah*alturah ) ;
   var superifice = document.getElementById("resposta").value = roundNumber(superifice, 2);	 
   var resul1 =  2*Math.PI *alturah* raior  ;
   var resul1 = document.getElementById("resposta").value = roundNumber(resul1, 2);	 
   var resul2 =   raior*raior ;  
   var resul2 = document.getElementById("resposta").value = roundNumber(resul2, 2);	 
   var resul3 =   alturah*alturah ; 
   var resul3 = document.getElementById("resposta").value = roundNumber(resul3, 2);	 
   var resul4 =   2*raior*raior ;  
   var resul4 = document.getElementById("resposta").value = roundNumber(resul4, 2);	
   var resul5 =   (2*raior*raior  - alturah*alturah ) ; 
   var resul5 = document.getElementById("resposta").value = roundNumber(resul5, 2);	 
   var resul6 =    Math.PI *(2*raior*raior  - alturah*alturah ) ; 
   var resul6 = document.getElementById("resposta").value = roundNumber(resul6, 2);	 
   var superifice2 =  2*alturah* raior  + (2*raior*raior  - alturah*alturah); 
   var superifice2 = document.getElementById("resposta").value = roundNumber(superifice2, 2);	 
  
       document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>A Ã¡rea total da superfÃ­cie da semiesfera parcial Ã©: <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = 2âˆ™Ï€âˆ™<a1 style='font-family: times new roman; font-style:italic;'>h</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>r</a1>  +  Ï€âˆ™(2âˆ™<a1 style='font-family: times new roman; font-style:italic;'>r</a1>Â² âˆ’ <a1 style='font-family: times new roman; font-style:italic;'>h</a1>Â²) <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = 2âˆ™3,14âˆ™"+alturah+"âˆ™"+raior+" + 3,14âˆ™ [2âˆ™("+raior+")Â² âˆ’ ("+alturah+")Â²]<br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = "+resul1+" + 3,14 âˆ™ [2âˆ™("+resul2+") âˆ’ "+resul3+"] <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = "+resul1+" + 3,14 âˆ™ ("+resul4+" âˆ’ "+resul3+") <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = "+resul1+" + 3,14 âˆ™ "+resul5+"  <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = "+resul1+" + "+resul6+"  <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = <a1 style='color: #FF0000'> "+superifice+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>  <br> ou <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = <a1 style='color: #FF0000'> "+superifice2+"Ï€</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1> </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.esfera.raior.focus();
      document.esfera.raior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 
  
      
  /** ********************************    Raio c da Semiesfera: c = âˆš(rÂ² - hÂ²)    ********************************  **/  
    if (a === "raiocdasemiesfera") { 
      var raior = eval(document.esfera.raior.value.replace(",",".").replace(/ /g,""));
      var alturah = eval(document.esfera.alturah.value.replace(",",".").replace(/ /g,""));	
      
       if ((raior < 0) || isNaN(raior) || raior == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.esfera.raior.focus();
          document.esfera.raior.select();  
      return false;
   }    
       if ((alturah < 0) || isNaN(alturah) || alturah == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.esfera.alturah.focus();
          document.esfera.alturah.select();  
      return false;
   }   
  
   try {
   var raior = document.getElementById("resposta").value = roundNumber(raior, 2);	
   var alturah = document.getElementById("resposta").value = roundNumber(alturah, 2);	 
   var raioc =  Math.sqrt(raior*raior - alturah*alturah) ;
   var raioc = document.getElementById("resposta").value = roundNumber(raioc, 2);	 
   var result1 =  raior*raior  ;
   var result1 = document.getElementById("resposta").value = roundNumber(result1, 2);	  
   var result2 =  alturah*alturah ; 
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 2);	  
   var result3 =  raior*raior - alturah*alturah ;  
   var result3 = document.getElementById("resposta").value = roundNumber(result3, 2);	   
  
       document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 24px;'>O raio c da semiesfera parcial Ã©: <br>  c = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'><a1 style='font-family: times new roman; font-style:italic;'>r</a1>Â² - <a1 style='font-family: times new roman; font-style:italic;'>h</a1>Â²</a1> <br>   c = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>("+raior+")Â² âˆ’ ("+alturah+")</a1>Â²</a1> <br>   c = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+result1+" âˆ’ "+result2+"</a1> <br>    c = âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+result3+" </a1> <br>  c = <a1 style='color: #FF0000'> "+raioc+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.esfera.raior.focus();
      document.esfera.raior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 	
      
      
  /** ********************    Ãrea do circulo de raio c da Semiesfera: A = Ï€.(rÂ² - hÂ²)    ****************************************  **/  
    if (a === "areaderaiocdasemiesfera") { 
      var raior = eval(document.esfera.raior.value.replace(",",".").replace(/ /g,""));
      var alturah = eval(document.esfera.alturah.value.replace(",",".").replace(/ /g,""));	
      
       if ((raior < 0) || isNaN(raior) || raior == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.esfera.raior.focus();
          document.esfera.raior.select();  
      return false;
   }    
       if ((alturah < 0) || isNaN(alturah) || alturah == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.esfera.alturah.focus();
          document.esfera.alturah.select();  
      return false;
   }   
    
   try {
   var raior = document.getElementById("resposta").value = roundNumber(raior, 2);	
   var alturah = document.getElementById("resposta").value = roundNumber(alturah, 2);	 
   var arearaioc =  Math.PI*(raior*raior - alturah*alturah) ;
   var arearaioc = document.getElementById("resposta").value = roundNumber(arearaioc, 2);	 
   var resul2 =  raior*raior ; 
   var resul2 = document.getElementById("resposta").value = roundNumber(resul2, 2);	 
   var resul3 =  alturah*alturah ;  
   var resul3 = document.getElementById("resposta").value = roundNumber(resul3, 2);	 
   var resul4 =  raior*raior - alturah*alturah ;
   var resul4 = document.getElementById("resposta").value = roundNumber(resul4, 2);	 
   var arearaioc2 =  (raior*raior - alturah*alturah) ; 
   var arearaioc2 = document.getElementById("resposta").value = roundNumber(arearaioc2, 2); 
  
       document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>A Ã¡rea do cÃ­rculo de raio c da semiesfera parcial Ã©: <br> A = Ï€(<a1 style='font-family: times new roman; font-style:italic;'>r</a1>Â² âˆ’ <a1 style='font-family: times new roman; font-style:italic;'>h</a1>Â²)  <br> A = 3,14 âˆ™ [("+raior+")Â² âˆ’ ("+alturah+")Â²]  <br>  A = 3,14 âˆ™ ["+resul2+" - "+resul3+"] <br> A = 3,14 âˆ™ "+resul4+" <br>  A = <a1 style='color: #FF0000'> "+arearaioc+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>  <br> ou <br>   A = <a1 style='color: #FF0000'> "+arearaioc2+"Ï€</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>        </div><hr><h1 class='logomarca'> BpW </h1>" 
     
      document.esfera.raior.focus();
      document.esfera.raior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 	
      
  
   /** ******************************    Volume da Semiesfera: V = 1/3.Ï€.h.(3rÂ² - hÂ²)   ****************************************  **/  
    if (a === "volumedasemiesfera") {
      var raior = eval(document.esfera.raior.value.replace(",",".").replace(/ /g,""));
      var alturah = eval(document.esfera.alturah.value.replace(",",".").replace(/ /g,""));	
      
       if ((raior < 0) || isNaN(raior) || raior == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.esfera.raior.focus();
          document.esfera.raior.select();  
      return false;
   }    
       if ((alturah < 0) || isNaN(alturah) || alturah == "" ) { alert("Digite um/os valor(es) numÃ©rico(s) e/ou nÃ£o negativo(s)!");
          document.esfera.alturah.focus();
          document.esfera.alturah.select();  
      return false;
   }  
  
   try {
   var raior = document.getElementById("resposta").value = roundNumber(raior, 2);	
   var alturah = document.getElementById("resposta").value = roundNumber(alturah, 2);	 	 
   var Volumesemiesfera = 1/3 * Math.PI * alturah * (3*raior*raior - alturah*alturah) ;
   var Volumesemiesfera = document.getElementById("resposta").value = roundNumber(Volumesemiesfera, 2);	 
   var resul2 =  raior*raior ; 
   var resul2 = document.getElementById("resposta").value = roundNumber(resul2, 2);	 
   var resul3 =  alturah*alturah ; 
   var resul3 = document.getElementById("resposta").value = roundNumber(resul3, 2);	 
   var resul4 =  3*raior*raior ; 
   var resul4 = document.getElementById("resposta").value = roundNumber(resul4, 2); 
   var resul5 =  Math.PI * alturah  ;  
   var resul5 = document.getElementById("resposta").value = roundNumber(resul5, 2); 
   var resul6 =  3*raior*raior - alturah*alturah ; 
   var resul6 = document.getElementById("resposta").value = roundNumber(resul6, 2); 
   var resul7 =   Math.PI * alturah * (3*raior*raior - alturah*alturah);   
   var resul7 = document.getElementById("resposta").value = roundNumber(resul7, 2); 
   var Volumesemiesfera2 =  (raior*raior - alturah*alturah) ; 
   var Volumesemiesfera2 = document.getElementById("resposta").value = roundNumber(Volumesemiesfera2, 2);  
  
       document.getElementById('resposta').innerHTML ="<hr> O Volume da semiesfera parcial Ã©: <br> <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> Ï€ âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> âˆ™ (3âˆ™<a1 style='font-family: times new roman; font-style:italic;'>r</a1>Â² âˆ’ <a1 style='font-family: times new roman; font-style:italic;'>h</a1>Â²) </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> 3,14 âˆ™ "+alturah+" âˆ™ [3âˆ™("+raior+")Â² âˆ’ ("+alturah+")Â²] </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> 3,14 âˆ™ "+alturah+" âˆ™ [3âˆ™"+resul2+" âˆ’ "+resul3+"] </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+resul5+" âˆ™ ["+resul4+" âˆ’ "+resul3+"] </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+resul5+" âˆ™ "+resul6+" </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+resul7+" </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>   </div>  V = <a1 style='color: #FF0000'> "+Volumesemiesfera+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>  <br> ou <br>  V = <a1 style='color: #FF0000'> "+Volumesemiesfera2+"Ï€</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>uÂ²</a1>   <hr><h1 class='logomarca'> BpW </h1> " 
     
      document.esfera.raior.focus();
      document.esfera.raior.select();     
      document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 	
  }
  
  