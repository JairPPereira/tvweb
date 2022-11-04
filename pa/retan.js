function retangulo2() {
    var a = document.forms["retang"]["retang_type"].value;
  /** *************   AREA   ***********************  **/  
   if (a === "area") {
      document.getElementById("area").disabled = true;
      document.getElementById("area").value = "";
      document.getElementById("anguloÎ±").disabled = true;
      document.getElementById("anguloÎ±").value = "";	
      document.getElementById("anguloÎ²").disabled = true;
      document.getElementById("anguloÎ²").value = "";		
      document.getElementById("diagonal").disabled = true;
      document.getElementById("diagonal").value = "";		
       document.getElementById("ladoa").disabled = false;
      document.getElementById("ladob").disabled = false;
   }
  try { 	}
       catch(e) {alert(e)}
      
  /** *************  PerÃ­metro  ***********************  **/  
   if (a === "perimetro") {
      document.getElementById("area").disabled = true;
      document.getElementById("area").value = "";
      document.getElementById("anguloÎ±").disabled = true;
      document.getElementById("anguloÎ±").value = "";	
      document.getElementById("anguloÎ²").disabled = true;
      document.getElementById("anguloÎ²").value = "";		
      document.getElementById("diagonal").disabled = true;
      document.getElementById("diagonal").value = "";		
       document.getElementById("ladoa").disabled = false;
      document.getElementById("ladob").disabled = false;
   }
  try { 	}
       catch(e) {alert(e)}	
      
   /** *********** Diagonal  *******************  **/  	   
   if (a === "diagonal") {
      document.getElementById("area").disabled = true;
      document.getElementById("area").value = "";
      document.getElementById("anguloÎ±").disabled = true;
      document.getElementById("anguloÎ±").value = "";	
      document.getElementById("anguloÎ²").disabled = true;
      document.getElementById("anguloÎ²").value = "";		
      document.getElementById("diagonal").disabled = true;
      document.getElementById("diagonal").value = "";		
       document.getElementById("ladoa").disabled = false;
      document.getElementById("ladob").disabled = false;
   }
  try { 	}
       catch(e) {alert(e)} 	
      
   /** *********** Ã¢ngulo Î±  *******************  **/  	   
   if (a === "anguloÎ±") {
      document.getElementById("area").disabled = true;
      document.getElementById("area").value = "";
      document.getElementById("ladob").disabled = true;
      document.getElementById("ladob").value = "";	
      document.getElementById("anguloÎ±").disabled = true;
      document.getElementById("anguloÎ±").value = "";		
      document.getElementById("diagonal").disabled = true;
      document.getElementById("diagonal").value = "";		
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value = "";	
      document.getElementById("anguloÎ²").disabled = false;	
  }
  try { 	}
       catch(e) {alert(e)} 	
      
   /** *********** Ã¢ngulo Î²  *******************  **/  	   
   if (a === "anguloÎ²") {
      document.getElementById("area").disabled = true;
      document.getElementById("area").value = "";
      document.getElementById("ladob").disabled = true;
      document.getElementById("ladob").value = "";	
      document.getElementById("anguloÎ²").disabled = true;
      document.getElementById("anguloÎ²").value = "";		
      document.getElementById("diagonal").disabled = true;
      document.getElementById("diagonal").value = "";		
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value = "";	
      document.getElementById("anguloÎ±").disabled = false;	
  }
  try { 	}
       catch(e) {alert(e)} 
  
   /** *********** Lado a  *******************  **/  	   
   if (a === "ladoa") {
      document.getElementById("area").disabled = true;
      document.getElementById("area").value = "";
      document.getElementById("anguloÎ²").disabled = true;
      document.getElementById("anguloÎ²").value = "";	
      document.getElementById("anguloÎ±").disabled = true;
      document.getElementById("anguloÎ±").value = "";		
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value = "";	
      
      document.getElementById("diagonal").disabled = false;	
      document.getElementById("ladob").disabled = false;	
  }
  try { 	}
       catch(e) {alert(e)} 
  
  
   /** *********** Lado b  *******************  **/  	   
   if (a === "ladob") {
      document.getElementById("area").disabled = true;
      document.getElementById("area").value = "";
      document.getElementById("anguloÎ²").disabled = true;
      document.getElementById("anguloÎ²").value = "";	
      document.getElementById("anguloÎ±").disabled = true;
      document.getElementById("anguloÎ±").value = "";		
      document.getElementById("ladob").disabled = true;
      document.getElementById("ladob").value = "";	
      document.getElementById("diagonal").disabled = false;	
      document.getElementById("ladoa").disabled = false;	
  }
  try { 	}
       catch(e) {alert(e)} 
  
   /** *********** Ã¢ngulo Î±/2  *******************  **/  	   
   if (a === "anguloÎ±/2") {
      document.getElementById("area").disabled = true;
      document.getElementById("area").value = "";
      document.getElementById("ladob").disabled = true;
      document.getElementById("ladob").value = "";	
      document.getElementById("anguloÎ±").disabled = true;
      document.getElementById("anguloÎ±").value = "";		
      document.getElementById("anguloÎ²").disabled = true;
      document.getElementById("anguloÎ²").value = "";		
      document.getElementById("ladoa").disabled = false;	
      document.getElementById("diagonal").disabled = false;	
  }
  try { 	}
       catch(e) {alert(e)} 	
  
   /** *********** Ã¢ngulo Î²/2  *******************  **/  	   
   if (a === "anguloÎ²/2") {
      document.getElementById("area").disabled = true;
      document.getElementById("area").value = "";
      document.getElementById("ladoa").disabled = true;
      document.getElementById("ladoa").value = "";	
      document.getElementById("anguloÎ±").disabled = true;
      document.getElementById("anguloÎ±").value = "";		
      document.getElementById("anguloÎ²").disabled = true;
      document.getElementById("anguloÎ²").value = "";		
      document.getElementById("ladob").disabled = false;	
      document.getElementById("diagonal").disabled = false;	
  }
  try { 	}
       catch(e) {alert(e)} 
  }
  
  
  function retangulo1() {
      
   var ddl = document.getElementById("ops");
   var selectedValue = ddl.options[ddl.selectedIndex].value;
      if (selectedValue == "")
     {
      alert("Escolha uma opÃ§Ã£o para Calcular!");
     } 
     
    var a = document.forms["retang"]["retang_type"].value;
    /** ************************************************  CÃ¡lculdo da Ã¡rea  *************************************/  
    if (a === "area") { 
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
   
      var areaRetangulo = ladoa * ladob;
          document.getElementById('resposta').innerHTML = "<hr> <div style='line-height: 25px;'>  A Ã¡rea do retÃ¢ngulo Ã©: <br>    A = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>b</a1>  = "+ladoa +" âˆ™ "+ladob +" <br>  A = <a1 style='color: #FF0000'> "+areaRetangulo +"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> uÂ² </a1> </div> <hr><h1 class='logomarca'> BpW </h1>";
      
      document.retang.ladoa.focus();
      document.retang.ladoa.select(); 
  }
       catch(e) {alert(e)}
  }}