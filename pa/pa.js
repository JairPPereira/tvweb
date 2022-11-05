function roundNumber(num, scale) {
	if(!("" + num).includes("e")) {
	  return +(Math.round(num + "e+" + scale)  + "e-" + scale);  
	} else {
	  var arr = ("" + num).split("e");
	  var sig = ""
	  if(+arr[1] + scale > 0) {
		sig = "+";
	  }
	  var i = +arr[0] + "e" + sig + (+arr[1] + scale);
	  var j = Math.round(i);
	  var k = +(j + "e-" + scale);
	  return k;  
	}
  }
  
  function roundNumber2(num, scale) {
	if (Math.round(num) != num) {
	  if (Math.pow(0.1, scale) > num) {
		return 0;
	  }
	  var sign = Math.sign(num);
	  var arr = ("" + Math.abs(num)).split(".");
	  if (arr.length > 1) {
		if (arr[1].length > scale) {
		  var integ = +arr[0] * Math.pow(10, scale);
		  var dec = integ + (+arr[1].slice(0, scale) + Math.pow(10, scale));
		  var proc = +arr[1].slice(scale, scale + 1)
		  if (proc >= 5) {
			dec = dec + 1;
		  }
		  dec = sign * (dec - Math.pow(10, scale)) / Math.pow(10, scale);
		  return dec;
		}
	  }
	}
	return num;
  }
  
  
  
  /***############################################            ####################################################     **/
  /***############################################ RETÂNGULO  ####################################################     **/
  
  function retangulo2() {
	var a = document.forms["retang"]["retang_type"].value;
  /** *************   AREA   ***********************  **/  
   if (a === "area") {
	  document.getElementById("area").disabled = true;
	  document.getElementById("area").value = "";
	  document.getElementById("anguloα").disabled = true;
	  document.getElementById("anguloα").value = "";	
	  document.getElementById("anguloβ").disabled = true;
	  document.getElementById("anguloβ").value = "";		
	  document.getElementById("diagonal").disabled = true;
	  document.getElementById("diagonal").value = "";		
	   document.getElementById("ladoa").disabled = false;
	  document.getElementById("ladob").disabled = false;
   }
  try { 	}
	   catch(e) {alert(e)}
	  
  /** *************  Perímetro  ***********************  **/  
   if (a === "perimetro") {
	  document.getElementById("area").disabled = true;
	  document.getElementById("area").value = "";
	  document.getElementById("anguloα").disabled = true;
	  document.getElementById("anguloα").value = "";	
	  document.getElementById("anguloβ").disabled = true;
	  document.getElementById("anguloβ").value = "";		
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
	  document.getElementById("anguloα").disabled = true;
	  document.getElementById("anguloα").value = "";	
	  document.getElementById("anguloβ").disabled = true;
	  document.getElementById("anguloβ").value = "";		
	  document.getElementById("diagonal").disabled = true;
	  document.getElementById("diagonal").value = "";		
	   document.getElementById("ladoa").disabled = false;
	  document.getElementById("ladob").disabled = false;
   }
  try { 	}
	   catch(e) {alert(e)} 	
	  
   /** *********** ângulo α  *******************  **/  	   
   if (a === "anguloα") {
	  document.getElementById("area").disabled = true;
	  document.getElementById("area").value = "";
	  document.getElementById("ladob").disabled = true;
	  document.getElementById("ladob").value = "";	
	  document.getElementById("anguloα").disabled = true;
	  document.getElementById("anguloα").value = "";		
	  document.getElementById("diagonal").disabled = true;
	  document.getElementById("diagonal").value = "";		
	  document.getElementById("ladoa").disabled = true;
	  document.getElementById("ladoa").value = "";	
	  document.getElementById("anguloβ").disabled = false;	
  }
  try { 	}
	   catch(e) {alert(e)} 	
	  
   /** *********** ângulo β  *******************  **/  	   
   if (a === "anguloβ") {
	  document.getElementById("area").disabled = true;
	  document.getElementById("area").value = "";
	  document.getElementById("ladob").disabled = true;
	  document.getElementById("ladob").value = "";	
	  document.getElementById("anguloβ").disabled = true;
	  document.getElementById("anguloβ").value = "";		
	  document.getElementById("diagonal").disabled = true;
	  document.getElementById("diagonal").value = "";		
	  document.getElementById("ladoa").disabled = true;
	  document.getElementById("ladoa").value = "";	
	  document.getElementById("anguloα").disabled = false;	
  }
  try { 	}
	   catch(e) {alert(e)} 
  
   /** *********** Lado a  *******************  **/  	   
   if (a === "ladoa") {
	  document.getElementById("area").disabled = true;
	  document.getElementById("area").value = "";
	  document.getElementById("anguloβ").disabled = true;
	  document.getElementById("anguloβ").value = "";	
	  document.getElementById("anguloα").disabled = true;
	  document.getElementById("anguloα").value = "";		
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
	  document.getElementById("anguloβ").disabled = true;
	  document.getElementById("anguloβ").value = "";	
	  document.getElementById("anguloα").disabled = true;
	  document.getElementById("anguloα").value = "";		
	  document.getElementById("ladob").disabled = true;
	  document.getElementById("ladob").value = "";	
	  document.getElementById("diagonal").disabled = false;	
	  document.getElementById("ladoa").disabled = false;	
  }
  try { 	}
	   catch(e) {alert(e)} 
  
   /** *********** ângulo α/2  *******************  **/  	   
   if (a === "anguloα/2") {
	  document.getElementById("area").disabled = true;
	  document.getElementById("area").value = "";
	  document.getElementById("ladob").disabled = true;
	  document.getElementById("ladob").value = "";	
	  document.getElementById("anguloα").disabled = true;
	  document.getElementById("anguloα").value = "";		
	  document.getElementById("anguloβ").disabled = true;
	  document.getElementById("anguloβ").value = "";		
	  document.getElementById("ladoa").disabled = false;	
	  document.getElementById("diagonal").disabled = false;	
  }
  try { 	}
	   catch(e) {alert(e)} 	
  
   /** *********** ângulo β/2  *******************  **/  	   
   if (a === "anguloβ/2") {
	  document.getElementById("area").disabled = true;
	  document.getElementById("area").value = "";
	  document.getElementById("ladoa").disabled = true;
	  document.getElementById("ladoa").value = "";	
	  document.getElementById("anguloα").disabled = true;
	  document.getElementById("anguloα").value = "";		
	  document.getElementById("anguloβ").disabled = true;
	  document.getElementById("anguloβ").value = "";		
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
	  alert("Escolha uma opção para Calcular!");
	 } 
	 
	var a = document.forms["retang"]["retang_type"].value;
	/** ************************************************  Cálculdo da área  *************************************/  
	if (a === "area") { 
	 var ladoa = eval(document.retang.ladoa.value.replace(",",".").replace(/ /g,""));
	 var ladob = eval(document.retang.ladob.value.replace(",",".").replace(/ /g,""));   
	 
	  if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.retang.ladoa.focus();
		  document.retang.ladoa.select();  
	  return false;
   }
   
	  if ((ladob < 0) || (isNaN(ladob )) || ladob == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.retang.ladob.focus();
		  document.retang.ladob.select();  
	  return false;
  }
	
  try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);
   var ladob = document.getElementById("resposta").value = roundNumber(ladob, 2);
   
	  var areaRetangulo = ladoa * ladob;
		  document.getElementById('resposta').innerHTML = "<hr> <div style='line-height: 25px;'>  A área do retângulo é: <br>    A = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>b</a1>  = "+ladoa +" ∙ "+ladob +" <br>  A = <a1 style='color: #FF0000'> "+areaRetangulo +"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> u² </a1> </div> <hr><h1 class='logomarca'> JPP </h1>";
	  
	  document.retang.ladoa.focus();
	  document.retang.ladoa.select(); 
  }
	   catch(e) {alert(e)}
  }
  
   /** ************************************************ Cálculo do perímetro   ************************************  **/  	 
   if (a === "perimetro") { 
	 var ladoa = eval(document.retang.ladoa.value.replace(",",".").replace(/ /g,""));
	 var ladob = eval(document.retang.ladob.value.replace(",",".").replace(/ /g,""));   
	 
	  if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.retang.ladoa.focus();
		  document.retang.ladoa.select();  
	  return false;
	  }
   
	  if ((ladob < 0) || (isNaN(ladob )) || ladob == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	  
		  document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 25px;'>  O perímetro do retângulo é: <br> P = 2<a1 style='font-family: times new roman; font-style:italic;'>a</a1> + 2<a1 style='font-family: times new roman; font-style:italic;'>b</a1> = 2 ∙ <a1 style='font-size: 16px; font-family: times new roman;'> "+ladoa+"</a1>  + 2 ∙ <a1 style='font-size: 16px; font-family: times new roman;'> "+ladob+"</a1>  <br> P = <a1 style='font-size: 16px; font-family: times new roman;'> "+perimetro1+"</a1>  + <a1 style='font-size: 16px; font-family: times new roman;'> "+perimetro2+"</a1> = <a1 style='color: #FF0000'> "+perimetro+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> u </a1> </div><hr><h1 class='logomarca'> JPP </h1>";
	  
	  document.retang.ladoa.focus();
	  document.retang.ladoa.select(); 
  }
	   catch(e) {alert(e)}
  }
  
  /** **********************************************   Cálculo da diagonal    ***********************************  **/  	
  if (a === "diagonal") { 
	 var ladoa = eval(document.retang.ladoa.value.replace(",",".").replace(/ /g,""));
	 var ladob = eval(document.retang.ladob.value.replace(",",".").replace(/ /g,""));   
	 
	  if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.retang.ladoa.focus();
		  document.retang.ladoa.select();  
	  return false;
   }
   
	  if ((ladob < 0) || (isNaN(ladob )) || ladob == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	  
	  document.getElementById('resposta').innerHTML = "<hr>A diagonal do retângulo é: <br>  <div style='line-height: 30px; '> D = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.3px;'>  <a1 style='font-size: 16px; font-family: times new roman;'><a1 style='font-family: times new roman; font-style:italic;'>a</a1><a1 style='font-size: 16px; font-family: times new roman;'>² </a1> </a1>  + <a1 style='font-size: 16px; font-family: times new roman;'> <a1 style='font-family: times new roman; font-style:italic;'>b</a1>² </a1> </a1>  <br> D = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.3px;'> <a1 style='font-size: 16px; font-family: times new roman;'> "+ladoa+"<a1 style='font-size: 16px; font-family: times new roman;'>² </a1>  </a1>  + <a1 style='font-size: 16px; font-family: times new roman;'> "+ladob+"<a1 style='font-size: 16px; font-family: times new roman;'>² </a1> </a1> </a1> &nbsp; <br> D =   √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.3px;'>  <a1 style='font-size: 16px; font-family: times new roman;'> "+diagonal2+" </a1>  + <a1 style='font-size: 16px; font-family: times new roman;'> "+diagonal3+"</a1> </a1><br> D =  √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.3px;'> <a1 style='font-size: 16px; font-family: times new roman;'> "+diagonal4+" </a1> </a1> =  <a1 style='color: #FF0000'> "+diagonal+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> u </a1> </div><hr><h1 class='logomarca'> JPP </h1>";
	  
	  document.retang.ladoa.focus();
	  document.retang.ladoa.select(); 
  }
	   catch(e) {alert(e)}
  }
  
   /** **********************************************  Ângulo α   ***********************************  **/  	
  if (a === "anguloα") { 	
	var anguloβ = eval(document.retang.anguloβ.value.replace(",",".").replace(/ /g,""));
	
	 
	  if ((anguloβ < 0) || isNaN(anguloβ) || anguloβ == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.retang.anguloβ.focus();
		  document.retang.anguloβ.select();  
	  return false;
   }
   
  try {
   var anguloβ = document.getElementById("resposta").value = roundNumber(anguloβ, 2);
   var anguloα =  180 - anguloβ ;
   var anguloα = document.getElementById("resposta").value = roundNumber(anguloα, 2); 
	  
		  document.getElementById('resposta').innerHTML = "<hr> O ângulo α é: <br> <div style='line-height: 25px;'> α = 180º − β = 180º − "+anguloβ+"º <br> α = <a1 style='color: #FF0000'> "+anguloα+"º  </div><hr><h1 class='logomarca'> JPP </h1>" ;
	 
	  document.retang.anguloβ.focus();
	  document.retang.anguloβ.select(); 
  }
	   catch(e) {alert(e)}
  } 
  
   /** ***********************************************  Ângulo β   ****************************************  **/  	
  if (a === "anguloβ") { 	
	var anguloα = eval(document.retang.anguloα.value.replace(",",".").replace(/ /g,""));
	
	  if ((anguloα < 0) || isNaN(anguloα) || anguloα == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.retang.anguloα.focus();
		  document.retang.anguloα.select();  
	  return false;
   }
   
  try {
   var anguloα = document.getElementById("resposta").value = roundNumber(anguloα, 2);	
   var anguloβ =  180 - anguloα ;
   var anguloβ = document.getElementById("resposta").value = roundNumber(anguloβ, 2);	
   
		  document.getElementById('resposta').innerHTML = "<hr> O ângulo β é: <br> <div style='line-height: 25px;'>  β = 180º − α = 180º − "+anguloα+"º <br> β = <a1 style='color: #FF0000'> "+anguloβ+"º  </div><hr><h1 class='logomarca'> JPP </h1>" ;
	 
	  document.retang.anguloα.focus();
	  document.retang.anguloα.select(); 
  }
	   catch(e) {alert(e)}
  } 
  
  /** *****************************************************   Lado a    ****************************************  **/  	
	if (a === "ladoa") { 
	 var ladob = eval(document.retang.ladob.value.replace(",",".").replace(/ /g,""));
	 var diagonal = eval(document.retang.diagonal.value.replace(",",".").replace(/ /g,""));   
	 
	  if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.retang.ladob.focus();
		  document.retang.ladob.select();  
	  return false;
   }
   
	  if ((diagonal < 0) || (isNaN(diagonal )) || diagonal == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	  
		  document.getElementById('resposta').innerHTML = "<hr> O lado <a1 style='font-family: times new roman; font-style:italic;'>a</a1> do retângulo é: <br> <div style='line-height: 27px;'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>  <a1 style='font-size: 16px; font-family: times new roman;'>D<a1 style='font-size: 16px; font-family: times new roman;'>² </a1> </a1> − <a1 style='font-size: 16px; font-family: times new roman;'> <a1 style='font-family: times new roman; font-style:italic;'>b</a1>² </a1> </a1> &nbsp; = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'> <a1 style='font-size: 16px; font-family: times new roman;'> "+diagonal+"<a1 style='font-size: 16px; font-family: times new roman;'>² </a1>  </a1> − <a1 style='font-size: 16px; font-family: times new roman;'> "+ladob+"<a1 style='font-size: 16px; font-family: times new roman;'>² </a1> </a1> </a1> &nbsp; <br> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> =   √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>  <a1 style='font-size: 16px; font-family: times new roman;'> "+ladoa2+" </a1> − <a1 style='font-size: 16px; font-family: times new roman;'> "+ladoa3+"</a1> </a1><br> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> =  √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'> <a1 style='font-size: 16px; font-family: times new roman;'> "+ladoa4+" </a1> </a1> =  <a1 style='color: #FF0000'> "+ladoa+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> u </a1> </div><hr><h1 class='logomarca'> JPP </h1>";
	  
	  document.retang.ladoa.focus();
	  document.retang.ladoa.select(); 
  }
	   catch(e) {alert(e)}
  }
  
  /** *************************************************  Lado b    ****************************************  **/  	
	if (a === "ladob") { 
	 var ladoa = eval(document.retang.ladoa.value.replace(",",".").replace(/ /g,""));
	 var diagonal = eval(document.retang.diagonal.value.replace(",",".").replace(/ /g,""));   
	 
	  if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.retang.ladoa.focus();
		  document.retang.ladoa.select();  
	  return false;
   }
   
	  if ((diagonal < 0) || (isNaN(diagonal )) || diagonal == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	  
	  document.getElementById('resposta').innerHTML = "<hr> O lado <a1 style='font-family: times new roman; font-style:italic;'>b</a1> do retângulo é: <br> <div style='line-height: 27px;'> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>  <a1 style='font-size: 16px; font-family: times new roman;'>D<a1 style='font-size: 16px; font-family: times new roman;'>² </a1> </a1>  − <a1 style='font-size: 16px; font-family: times new roman;'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1>² </a1> </a1> &nbsp; = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'> <a1 style='font-size: 16px; font-family: times new roman;'> "+diagonal+"<a1 style='font-size: 16px; font-family: times new roman;'>² </a1>  </a1>  − <a1 style='font-size: 16px; font-family: times new roman;'> "+ladob+"<a1 style='font-size: 16px; font-family: times new roman;'>² </a1> </a1> </a1> &nbsp; <br> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> =   √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>  <a1 style='font-size: 16px; font-family: times new roman;'> "+ladob2+" </a1> − <a1 style='font-size: 16px; font-family: times new roman;'> "+ladob3+"</a1> </a1><br> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> =  √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'> <a1 style='font-size: 16px; font-family: times new roman;'> "+ladob4+" </a1> </a1> =  <a1 style='color: #FF0000'> "+ladob+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> u </a1> </div><hr><h1 class='logomarca'> JPP </h1>";
	  
	  document.retang.ladoa.focus();
	  document.retang.ladoa.select(); 
  }
	   catch(e) {alert(e)}
  }
  
   /*******************************************************  Ãngulo α/2  ****************************************  **/  	
   if (a === "anguloα/2") {
	 var ladoa = eval(document.retang.ladoa.value.replace(",",".").replace(/ /g,""));
	 var diagonal = eval(document.retang.diagonal.value.replace(",",".").replace(/ /g,""));   
	 
	  if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.retang.ladoa.focus();
		  document.retang.ladoa.select();  
	  return false;
   }
   
	  if ((diagonal < 0) || (isNaN(diagonal )) || diagonal == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.retang.diagonal.focus();
		  document.retang.diagonal.select();  
	  return false;
  } 
	
  try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);		
   var diagonal = document.getElementById("resposta").value = roundNumber(diagonal, 2);		
   var anguloα2 =  (ladoa/diagonal);
   var anguloα2 = document.getElementById("resposta").value = roundNumber(anguloα2, 3);	
   var senoα2 = Math.asin(anguloα2)*180/Math.PI; 
   var senoα2 = document.getElementById("resposta").value = roundNumber(senoα2, 2);	 
  
	  document.getElementById('resposta').innerHTML = "<hr> O ângulo α/2 do retângulo é: <br> <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> sen(α/2) &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladoa+" </td></tr> <tr> <td> D </td><td> "+diagonal+" </td> </tr></tbody></table> </div>  sen(α/2) =&nbsp;  <a1 style='color: #FF0000'> "+anguloα2+"</a1>" +" &nbsp; &nbsp; <br> Logo: <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> α </td><td rowspan='2'> &nbsp;=&nbsp; <a1 style='color: #FF0000'> "+senoα2+"° </td></tr><tr><td> 2 </td> </tr></tbody></table>  <hr><h1 class='logomarca'> JPP </h1>" ;
	 
	  document.retang.ladoa.focus();
	  document.retang.ladoa.select(); 
	  document.getElementById('resposta').style.display = "block"; 
  }
	   catch(e) {alert(e)}
  } 
  
  /*******************************************************  Ãngulo β/2  ****************************************  **/  	
   if (a === "anguloβ/2") {	
	 var ladob = eval(document.retang.ladob.value.replace(",",".").replace(/ /g,""));
	 var diagonal = eval(document.retang.diagonal.value.replace(",",".").replace(/ /g,""));   
	 
	  if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.retang.ladob.focus();
		  document.retang.ladob.select();  
	  return false;
   }
   
	  if ((diagonal < 0) || (isNaN(diagonal )) || diagonal == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.retang.diagonal.focus();
		  document.retang.diagonal.select();  
	  return false;
  }  
   
  try {
   var ladob = document.getElementById("resposta").value = roundNumber(ladob, 2);		
   var diagonal = document.getElementById("resposta").value = roundNumber(diagonal, 2);	
   var anguloβ2 =  (ladob/diagonal);
   var anguloβ2 = document.getElementById("resposta").value = roundNumber(anguloβ2, 3);	 
   var cosβ2 = Math.acos(anguloβ2)*180/Math.PI; 
   var cosβ2 = document.getElementById("resposta").value = roundNumber(cosβ2, 2);	 
  
	  document.getElementById('resposta').innerHTML = "<hr> O ângulo β/2 do retângulo é: <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> cos(β/2) &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladob+" </td></tr> <tr> <td> D </td><td> "+diagonal+" </td> </tr></tbody></table>  </div> cos(β/2) =&nbsp;  <a1 style='color: #FF0000'> "+anguloβ2+"</a1>" +"  <br> Logo: <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> β </td><td rowspan='2'> &nbsp;=&nbsp; <a1 style='color: #FF0000'> "+cosβ2+"° </td></tr><tr><td> 2 </td> </tr></tbody></table>   <hr><h1 class='logomarca'> JPP </h1>" ;
	 
	  document.retang.ladob.focus();
	  document.retang.ladob.select(); 
	  document.getElementById('resposta').style.display = "block"; 
  }
	   catch(e) {alert(e)}
  } 
  }
  
  
  /***#########################################                         #############################################      **/
  /***#########################################  TRIÂNGULO  ISÓSCELES   ##############################################      **/
   /** ************   Área 1 (b.h)  ********************  **/  	
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
	  
   /** ************   Área 2 (a.h)  ********************  **/ 	
   if (a === "area2") {
	  document.getElementById("base").disabled = true;
	  document.getElementById("base").value ="";	
	   document.getElementById("lado").disabled = false;
	  document.getElementById("altura").disabled = false;
   }
  try { 	}
	   catch(e) {alert(e)}
   
   
   /** ***********  Perímetro 1  *******************  **/  	
   if (a === "perimetro1") {
	  document.getElementById("altura").disabled = true;
	  document.getElementById("altura").value ="";	
	   document.getElementById("base").disabled = false;
	  document.getElementById("lado").disabled = false;
   }
  try { 	}
	   catch(e) {alert(e)}
	  
   /** ***********  Perímetro 2  *******************  **/  	   
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
	  alert("Escolha uma opção para Calcular!");
	 }	
	  
	var a = document.forms["trian_isosc"]["trian_isosc_type"].value;
	/** ***********************************************  Cálculdo da área 1: b . h   ****************************************  **/  
	if (a === "area1") { 
	 var base = eval(document.trian_isosc.base.value.replace(",",".").replace(/ /g,""));
	 var altura = eval(document.trian_isosc.altura.value.replace(",",".").replace(/ /g,""));   
	 
	  if ((base < 0) || isNaN(base) || base == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_isosc.base.focus();
		  document.trian_isosc.base.select();  
	  return false;
   }
   
	  if ((altura < 0) || (isNaN(altura)) || altura == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
   
	  
		  document.getElementById('resposta').innerHTML = "<hr> A área do triângulo isósceles é: <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+base+" ∙ "+altura+" </td></tr> <tr> <td> 2 </td><td> 2 </td> </tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+areatrian_isosc1+" </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table> </div> A = <a1 style='color: #FF0000'> "+areatrian_isosc+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> u² </a1>  <hr><h1 class='logomarca'> JPP </h1>  ";
	  
	  document.trian_isosc.base.focus();
	  document.trian_isosc.base.select(); 
  }
	   catch(e) {alert(e)}
  }
	  
   /** ************************************  Cálculo da área 2: A = h .√a² - h²   *********************************  **/  	
	 if (a === "area2") { 
	 var lado = eval(document.trian_isosc.lado.value.replace(",",".").replace(/ /g,""));
	 var altura = eval(document.trian_isosc.altura.value.replace(",",".").replace(/ /g,""));   
	 
	  if ((lado < 0) || isNaN(lado) || lado == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_isosc.lado.focus();
		  document.trian_isosc.lado.select();  
	  return false;
   }
   
	  if ((altura < 0) || (isNaN(altura)) || altura == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
   
	  document.getElementById('resposta').innerHTML = "<hr>  A área do triângulo isósceles é: <br> <div style='line-height: 24px;'> A = <a1 style='font-family: times new roman; font-style:italic;'>h</a1> ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '><a1 style='font-family: times new roman; font-style:italic;'>a</a1><a1 style='font-size: 20px; font-family: times new roman;'>² </a1> − <a1 style='font-family: times new roman; font-style:italic;'>h</a1><a1 style='font-size: 20px; font-family: times new roman;'>² </a1>  </a1> <br> A = "+altura+" ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+lado+"<a1 style='font-size: 20px; font-family: times new roman;'>²</a1> − "+altura+"<a1 style='font-size: 20px; font-family: times new roman;'>² </a1> </a1> <br> A = "+altura+" ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+lado1+" − "+altura1+"</a1> <br> A = "+altura+" ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+areatrian_isosc1+" </a1> <br> A = "+altura+" ∙ "+areatrian_isosc2+"  <br> A =   <a1 style='color: #FF0000'> "+areatrian_isosc+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> u² </a1> <br>  </div><hr><h1 class='logomarca'> JPP </h1>";
	  
	  document.trian_isosc.lado.focus();
	  document.trian_isosc.lado.select(); 
  }
	   catch(e) {alert(e)}
  } 
  
  
   /*********************************************   Cálculdo do Perímetro 1 (P = 2a+b)  ****************************************  **/  	
   if (a === "perimetro1") { 
	 var base = eval(document.trian_isosc.base.value.replace(",",".").replace(/ /g,""));
	 var lado = eval(document.trian_isosc.lado.value.replace(",",".").replace(/ /g,""));   
	 
	  if ((base < 0) || isNaN(base) || base == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_isosc.base.focus();
		  document.trian_isosc.base.select();  
	  return false;
   }
   
	  if ((lado < 0) || (isNaN(lado)) || lado == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	  
	  document.getElementById('resposta').innerHTML = "<hr>  O perímetro do triângulo isósceles é: <br> <div style='line-height: 22px;'> P = <a1 style='font-family: times new roman; font-style:italic;'>b</a1> + 2∙<a1 style='font-family: times new roman; font-style:italic;'>a</a1> <br> P = "+base+" + 2 ∙ "+lado+" <br> P =  "+base+" + "+lado1+" <br> P =  <a1 style='color: #FF0000'> "+perimetro1+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1> <br>  </div><hr><h1 class='logomarca'> JPP </h1>";
	  
	  document.trian_isosc.base.focus();
	  document.trian_isosc.base.select(); 
  }
	   catch(e) {alert(e)}
  } 
  
   /** ***********************************  Cálculdo do Perímetro 2 (P = 4a²+b²)    ****************************************  **/  	
   if (a === "perimetro2") { 
	 var base = eval(document.trian_isosc.base.value.replace(",",".").replace(/ /g,""));
	 var altura = eval(document.trian_isosc.altura.value.replace(",",".").replace(/ /g,""));   
	 
	  if ((base < 0) || isNaN(base) || base == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_isosc.base.focus();
		  document.trian_isosc.base.select();  
	  return false;
   }
   
	  if ((altura < 0) || (isNaN(altura)) || altura == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	  
	  document.getElementById('resposta').innerHTML = "<hr>  O perímetro do triângulo isósceles é: <br> <div style='line-height: 24px;'> P = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>4∙<a1 style='font-family: times new roman; font-style:italic;'>h</a1><a1 style='font-size: 20px; font-family: times new roman;'>²</a1> + <a1 style='font-family: times new roman; font-style:italic;'>b</a1><a1 style='font-size: 20px; font-family: times new roman;'>²</a1> </a1>+ <a1 style='font-family: times new roman; font-style:italic;'>b</a1> <br> P = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>4∙("+altura+")<a1 style='font-size: 20px; font-family: times new roman;'>²</a1> + "+base+"<a1 style='font-size: 20px; font-family: times new roman;'>²</a1> </a1>+ "+base+"  <br> P = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>4∙("+perim2+") + "+perim3+" </a1>+ "+base+" <br> P = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+perim4+" + "+perim3+" </a1>+ "+base+" <br> P = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+perim5+" </a1> + "+base+" <br> P = "+perim6+" </a1> + "+base+" <br> P =   <a1 style='color: #FF0000'> "+perimetro2+" "+"&nbsp</a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1> <br>  </div><hr><h1 class='logomarca'> JPP </h1>";
	  
	  document.trian_isosc.base.focus();
	  document.trian_isosc.base.select(); 
  }
	   catch(e) {alert(e)}
  } 
  
	  
   /** ************************************* Cálculo do lado (a): a = √h² + b²/4       ****************************************  **/  	 
   if (a === "lado") { 
	 var base = eval(document.trian_isosc.base.value.replace(",",".").replace(/ /g,""));
	 var altura = eval(document.trian_isosc.altura.value.replace(",",".").replace(/ /g,""));   
	 
	  if ((base < 0) || isNaN(base) || base == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_isosc.base.focus();
		  document.trian_isosc.base.select();  
	  return false;
   }
   
	  if ((altura < 0) || (isNaN(altura)) || altura == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	  
	  document.getElementById('resposta').innerHTML = "<hr>  O lado do triângulo isósceles é: <br> <div style='line-height: 25px;'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '><a1 style='font-family: times new roman; font-style:italic;'>h</a1><a1 style='font-size: 20px; font-family: times new roman;'>²</a1> + <a1 style='font-family: times new roman; font-style:italic;'>b</a1><a1 style='font-size: 20px; font-family: times new roman;'>²</a1>/4 </a1> <br>   <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+altura+"<a1 style='font-size: 20px; font-family: times new roman;'>²</a1>+ ("+base+")<a1 style='font-size: 20px; font-family: times new roman;'>²</a1>/4 </a1>  <br> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+lado1+" + ("+lado2+")/4 </a1>&nbsp <br> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+lado1+" + "+lado3+"</a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+lado4+" </a1>&nbsp <br> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> =  <a1 style='color: #FF0000'> "+lado+" " +"&nbsp;</a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1> <br> </div><hr><h1 class='logomarca'> JPP </h1>";
	  
	  document.trian_isosc.base.focus();
	  document.trian_isosc.base.select(); 
  }
	   catch(e) {alert(e)}
  }  
	
	
   /** ***********************************  Cálculo da base (b): b = 2∙√a² - h²   ****************************************  **/  	 
   if (a === "base") { 
	 var lado = eval(document.trian_isosc.lado.value.replace(",",".").replace(/ /g,""));
	 var altura = eval(document.trian_isosc.altura.value.replace(",",".").replace(/ /g,""));   
	 
	  if ((lado < 0) || isNaN(lado) || lado == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_isosc.lado.focus();
		  document.trian_isosc.lado.select();  
	  return false;
   }
   
	  if ((altura < 0) || (isNaN(altura)) || altura == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	  
	  document.getElementById('resposta').innerHTML = "<hr>  A base do triângulo isósceles é: <br> <div style='line-height: 24px;'> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> = 2∙√<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '><a1 style='font-family: times new roman; font-style:italic;'>a</a1><a1 style='font-size: 20px; font-family: times new roman;'>²</a1> − <a1 style='font-family: times new roman; font-style:italic;'>h</a1><a1 style='font-size: 20px; font-family: times new roman;'>²</a1> </a1> <br><a1 style='font-family: times new roman; font-style:italic;'>b</a1> =  2∙√<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+lado+"<a1 style='font-size: 20px; font-family: times new roman;'>²</a1> − "+altura+"<a1 style='font-size: 20px; font-family: times new roman;'>²</a1> </a1>  <br> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> =  2∙√<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+lado2+" − "+altura1+" </a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> = 2∙√<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+lado4+" </a1>  <br>  <a1 style='font-family: times new roman; font-style:italic;'>b</a1> = 2 ∙ "+lado5+" &nbsp <br> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> =  <a1 style='color: #FF0000'> "+lado1+" " +"&nbsp;</a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1> <br>  </div><hr><h1 class='logomarca'> JPP </h1>";
	  
	  document.trian_isosc.lado.focus();
	  document.trian_isosc.lado.select(); 
  }
	   catch(e) {alert(e)}
  }   
  
   /** ********************************** Cálculo da altura (h): h = √a² - b²/4  ****************************************  **/    
  if (a === "altura") { 
	 var base = eval(document.trian_isosc.base.value.replace(",",".").replace(/ /g,""));
	 var lado = eval(document.trian_isosc.lado.value.replace(",",".").replace(/ /g,""));   
	 
	  if ((base < 0) || isNaN(base) || base == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_isosc.base.focus();
		  document.trian_isosc.base.select();  
	  return false;
   }
   
	  if ((lado < 0) || (isNaN(lado)) || lado == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	  
	  document.getElementById('resposta').innerHTML = "<hr>  A altura do triângulo isósceles é: <br> <div style='line-height: 24px;'> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '><a1 style='font-family: times new roman; font-style:italic;'>a</a1><a1 style='font-size: 20px; font-family: times new roman;'>²</a1> − <a1 style='font-family: times new roman; font-style:italic;'>b</a1><a1 style='font-size: 20px; font-family: times new roman;'>²</a1>/4 </a1><br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+lado+"<a1 style='font-size: 20px; font-family: times new roman;'>²</a1> − ("+base+")<a1 style='font-size: 20px; font-family: times new roman;'>²</a1>/4 </a1>  <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+altura1+" − ("+altura2+")/4 </a1>&nbsp <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+altura1+" − "+altura3+"</a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+altura4+" </a1>&nbsp <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> =   <a1 style='color: #FF0000'> "+altura+" " +"&nbsp;</a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1> <br>  </div><hr><h1 class='logomarca'> JPP </h1>";
	  
	  document.trian_isosc.base.focus();
	  document.trian_isosc.base.select(); 
  }
	   catch(e) {alert(e)}
  }
  }
  
  
  
  /***###########################################                        ###############################################      **/
  /***###########################################  TRIÂNGULO  RETÂNGULO  ###############################################      **/
  
  function triangulo_retangulo2() {
	var a = document.forms["trian_retangulo"]["trian_retangulo_type"].value;
  /** *************   AREA 1 (c.b)   ***********************  **/  
   if (a === "area1") {
	  document.getElementById("ladoa").disabled = true;
	  document.getElementById("ladoa").value ="";
	  document.getElementById("altura").disabled = true;
	  document.getElementById("altura").value ="";
	  document.getElementById("projeçaom").disabled = true;
	  document.getElementById("projeçaom").value ="";
	  document.getElementById("projeçaon").disabled = true;
	  document.getElementById("projeçaon").value ="";
	   document.getElementById("ladob").disabled = false;
	  document.getElementById("ladoc").disabled = false;
   }
  try { 	}
	   catch(e) {alert(e)}
	  
   /** ************   Área 2 (a.h)  ********************  **/ 	
   if (a === "area2") {
	  document.getElementById("ladob").disabled = true;
	  document.getElementById("ladob").value ="";
	  document.getElementById("ladoc").disabled = true;
	  document.getElementById("ladoc").value ="";	
	  document.getElementById("projeçaom").disabled = true;
	  document.getElementById("projeçaom").value ="";
	  document.getElementById("projeçaon").disabled = true;
	  document.getElementById("projeçaon").value ="";	
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
	  document.getElementById("projeçaom").disabled = true;
	  document.getElementById("projeçaom").value ="";
	  document.getElementById("projeçaon").disabled = true;
	  document.getElementById("projeçaon").value ="";	
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
	  document.getElementById("projeçaom").disabled = true;
	  document.getElementById("projeçaom").value ="";
	  document.getElementById("projeçaon").disabled = true;
	  document.getElementById("projeçaon").value ="";	
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
	  document.getElementById("projeçaom").disabled = false;
	  document.getElementById("projeçaon").disabled = false;
   }
  try { 	}
	   catch(e) {alert(e)}	   
  
	/** ***********  Cateto b (1) (b = (a² - c²)^(1/2))  *********************/  	   
   if (a === "ladob") {
	  document.getElementById("ladob").disabled = true;
	  document.getElementById("ladob").value ="";
	  document.getElementById("altura").disabled = true;
	  document.getElementById("altura").value ="";
	  document.getElementById("projeçaom").disabled = true;
	  document.getElementById("projeçaom").value ="";	
	  document.getElementById("projeçaon").disabled = true;
	  document.getElementById("projeçaon").value ="";
	  document.getElementById("ladoa").disabled = false;	
	  document.getElementById("ladoc").disabled = false;
   }
  try { 	}
	   catch(e) {alert(e)}	 
	
   /** ***********  Cateto c (1) (c = (a² - b²)^(1/2))  *********************/  	   
   if (a === "ladoc") {
	  document.getElementById("ladoc").disabled = true;
	  document.getElementById("ladoc").value ="";
	  document.getElementById("altura").disabled = true;
	  document.getElementById("altura").value ="";
	  document.getElementById("projeçaom").disabled = true;
	  document.getElementById("projeçaom").value ="";	
	  document.getElementById("projeçaon").disabled = true;
	  document.getElementById("projeçaon").value ="";
	  document.getElementById("ladoa").disabled = false;	
	  document.getElementById("ladob").disabled = false;
   }
  try { 	}
	   catch(e) {alert(e)}	 	
  
	/** ***********  Projeção m (1) (m = (h²/n)  *********************/  	   
   if (a === "projeçaom") {
	  document.getElementById("projeçaom").disabled = true;
	  document.getElementById("projeçaom").value ="";
	  document.getElementById("ladoc").disabled = true;
	  document.getElementById("ladoc").value ="";
	  document.getElementById("ladoa").disabled = true;
	  document.getElementById("ladoa").value ="";	
	  document.getElementById("ladob").disabled = true;	
	  document.getElementById("ladob").value ="";	
	  document.getElementById("projeçaon").disabled = false;
	  document.getElementById("altura").disabled = false;
   }
  try { 	}
	   catch(e) {alert(e)}	 
	
   /** ***********  Projeção n (1) (n = (h²/m)  *********************/  	   
   if (a === "projeçaon") {
	  document.getElementById("projeçaon").disabled = true;
	  document.getElementById("projeçaon").value ="";
	  document.getElementById("ladoc").disabled = true;
	  document.getElementById("ladoc").value ="";
	  document.getElementById("ladoa").disabled = true;
	  document.getElementById("ladoa").value ="";	
	  document.getElementById("ladob").disabled = true;	
	  document.getElementById("ladob").value ="";	
	  document.getElementById("projeçaom").disabled = false;
	  document.getElementById("altura").disabled = false;
   }
  try { 	}
	   catch(e) {alert(e)}	   
	
   /** ***********  Perímetro (P = a + b + c)  *********************/  	   
   if (a === "perimetro") {
	  document.getElementById("projeçaon").disabled = true;
	  document.getElementById("projeçaon").value ="";
	  document.getElementById("projeçaom").disabled = true;
	  document.getElementById("projeçaom").value ="";	
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
	  alert("Escolha uma opção para Calcular!");
	 } 
	  
	  
	var a = document.forms["trian_retangulo"]["trian_retangulo_type"].value;
	/** ********************************************   Cálculdo da área 1: A = (b.c)/2   ****************************************  **/  
	if (a === "area1") { 
	 var ladob = eval(document.trian_retangulo.ladob.value.replace(",",".").replace(/ /g,""));
	 var ladoc = eval(document.trian_retangulo.ladoc.value.replace(",",".").replace(/ /g,""));   
	 
	  if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_retangulo.ladob.focus();
		  document.trian_retangulo.ladob.select();  
	  return false;
   }
   
	  if ((ladoc < 0) || (isNaN(ladoc)) || ladoc == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	   
	  document.getElementById('resposta').innerHTML = "<hr>  A área do triângulo retângulo é: <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>c</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladob+" ∙ "+ladoc+" </td></tr> <tr> <td> 2 </td><td> 2 </td> </tr></tbody></table>     <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+trian_retang1+" </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>  A = <a1 style='color: #FF0000'> "+areatrian_retangulo+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> u² </a1>&nbsp; </div><hr><h1 class='logomarca'> JPP </h1>";
	  
	  document.trian_retangulo.ladoa.focus();
	  document.trian_retangulo.ladoa.select(); 
  }
	   catch(e) {alert(e)}
  }
	  
   /** ********************************************  Cálculo da área 2: A = (a.h)/2   ****************************************  **/  	
	if (a === "area2") { 
	 var ladoa = eval(document.trian_retangulo.ladoa.value.replace(",",".").replace(/ /g,""));
	 var altura = eval(document.trian_retangulo.altura.value.replace(",",".").replace(/ /g,""));   
	 
	  if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_retangulo.ladoa.focus();
		  document.trian_retangulo.ladoa.select();  
	  return false;
   }
   
	  if ((altura < 0) || (isNaN(altura)) || altura == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	   
	  document.getElementById('resposta').innerHTML = "<hr>  A área do triângulo retângulo é: <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladoa+" ∙ "+altura+" </td></tr> <tr> <td> 2 </td><td> 2 </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+trian_retang2+" </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table> </div>  A = &nbsp;<a1 style='color: #FF0000'> "+areatrian_retangulo+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> u² </a1>   <hr><h1 class='logomarca'> JPP </h1>   ";
	  
	  document.trian_retangulo.ladoa.focus();
	  document.trian_retangulo.ladoa.select(); 
  }
	   catch(e) {alert(e)}
  }
  
  /***************************************  Cálculdo do lado "a":  a = √(b² + c²)    ****************************************  **/  	
	if (a === "ladoa") { 
	 var ladob = eval(document.trian_retangulo.ladob.value.replace(",",".").replace(/ /g,""));
	 var ladoc = eval(document.trian_retangulo.ladoc.value.replace(",",".").replace(/ /g,""));   
	 
	  if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_retangulo.ladob.focus();
		  document.trian_retangulo.ladob.select();  
	  return false;
   }
   
	  if ((ladoc < 0) || (isNaN(ladoc)) || ladoc == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	  
	  document.getElementById('resposta').innerHTML = "<hr> A hipotenusa do triângulo ABC é: <br> <div style='line-height: 25px;'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>b<a1 style='font-size: 18px; font-family: times new roman;'>²</a1> + c<a1 style='font-size: 18px; font-family: times new roman;'>²</a1> </a1>&nbsp; =  √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+ladob+"<a1 style='font-size: 18px; font-family: times new roman;'>²</a1> + "+ladoc+"<a1 style='font-size: 18px; font-family: times new roman;'>²</a1></a1>  <br> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> =  √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+hipot1+" + "+hipot2+" </a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>a</a1>&nbsp;= √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+hipot3+" </a1>    </div>  <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = <a1 style='color: #FF0000'> "+hipotenusa+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1> <hr><h1 class='logomarca'> JPP </h1>  ";
	  
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
	 
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_retangulo.ladoa.focus();
		  document.trian_retangulo.ladoa.select();  
	  return false;
   }
   
	  if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_retangulo.ladob.focus();
		  document.trian_retangulo.ladob.select();  
	  return false;
   }
   
	  if ((ladoc < 0) || (isNaN(ladoc)) || ladoc == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	  
	  document.getElementById('resposta').innerHTML = "<hr>  A altura do triângulo ABC é: <br> <div style='line-height: 13px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-size:18px; font-style:italic;'>h</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>c</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladob+" ∙ "+ladoc+" </td></tr> <tr> <td> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> </td><td> "+ladoa+" </td> </tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-size:18px; font-style:italic;'>h</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+altura1+" </td></tr><tr><td style='text-align:center;'> "+ladoa+" </td></tr></tbody></table>   <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = <a1 style='color: #FF0000'> "+altura+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1> &nbsp;  </div><hr><h1 class='logomarca'> JPP </h1>";
	  
	  document.trian_retangulo.ladoa.focus();
	  document.trian_retangulo.ladoa.select(); 
  }
	   catch(e) {alert(e)}
  }
   
  /** *********************************************   (h = (m.n)^(1/2))   ****************************************  **/  	
	if (a === "altura2") {
	 var projeçaom = eval(document.trian_retangulo.projeçaom.value.replace(",",".").replace(/ /g,"")); 	  
	 var projeçaon = eval(document.trian_retangulo.projeçaon.value.replace(",",".").replace(/ /g,""));
	 
	   if ((projeçaom < 0) || isNaN(projeçaom) || projeçaom == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_retangulo.projeçaom.focus();
		  document.trian_retangulo.projeçaom.select();  
	  return false;
   }
   
	  if ((projeçaon < 0) || isNaN(projeçaon) || projeçaon == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_retangulo.projeçaon.focus();
		  document.trian_retangulo.projeçaon.select();  
	  return false;
   }
   
  try {
   var projeçaom = document.getElementById("resposta").value = roundNumber(projeçaom, 2);	
   var projeçaon = document.getElementById("resposta").value = roundNumber(projeçaon, 2);		
   var altura = Math.sqrt(projeçaom * projeçaon);
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2);	 
   var altura1 = (projeçaom * projeçaon);
   var altura1 = document.getElementById("resposta").value = roundNumber(altura1, 2); 
	  
	  document.getElementById('resposta').innerHTML = "<hr>  A altura do triângulo ABC é: <br> <div style='line-height: 24px;'> <a1 style='font-family: times new roman; font-style:italic;'>h</a1>² =  <a1 style='font-family: times new roman; font-style:italic;'>m</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>n</a1> </a1> <br>  <a1 style='font-family: times new roman; font-style:italic;'>h</a1> =  √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '> <a1 style='font-family: times new roman; font-style:italic;'>m</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>n</a1> </a1>  </a1> <br><a1 style='font-family: times new roman; font-style:italic;'>h</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '> "+projeçaom+" ∙ "+projeçaon+" </a1>  </a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> =  √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '> "+altura1+" </a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = <a1 style='color: #FF0000'> "+altura+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>    </div><hr><h1 class='logomarca'> JPP </h1>";
	  
	  document.trian_retangulo.projeçaom.focus();
	  document.trian_retangulo.projeçaom.select(); 
  }
	   catch(e) {alert(e)}
  }
  
  /** *************************************  Cálculo do cateto (b): b = √(a² - c²)     ****************************************  **/  	 
   if (a === "ladob") { 
	 var ladoa = eval(document.trian_retangulo.ladoa.value.replace(",",".").replace(/ /g,"")); 	  
	 var ladoc = eval(document.trian_retangulo.ladoc.value.replace(",",".").replace(/ /g,"")); 
	 
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_retangulo.ladoa.focus();
		  document.trian_retangulo.ladoa.select();  
	  return false;
   }
   
	  if ((ladoc < 0) || (isNaN(ladoc)) || ladoc == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	  
	  document.getElementById('resposta').innerHTML = "<hr> O cateto <a1 style='font-family: times new roman; font-style:italic;'>b</a1> do triângulo ABC é: <br> <div style='line-height: 22px;'><a1 style='font-family: times new roman; font-style:italic;'>b</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '><a1 style='font-family: times new roman; font-style:italic;'>a</a1><a1 style='font-size: 18px; font-family: times new roman;'>²</a1> − <a1 style='font-family: times new roman; font-style:italic;'>c</a1><a1 style='font-size: 18px; font-family: times new roman;'>²</a1> </a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+ladoa+"<a1 style='font-size: 18px; font-family: times new roman;'>²</a1> − "+ladoc+"<a1 style='font-size: 18px; font-family: times new roman;'>²</a1></a1>  <br> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> =  √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+catetob2+" − "+catetob3+" </a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> =  √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+catetob4+" </a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> = <a1 style='color: #FF0000'> "+catetob+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>    </div><hr><h1 class='logomarca'> JPP </h1>";
	  
	  document.trian_retangulo.ladoa.focus();
	  document.trian_retangulo.ladoa.select(); 
  }
	   catch(e) {alert(e)}
  }
	
  /** ***********************************  Cálculo do cateto (c): c = √(a² - b²)      ****************************************  **/  	 
   if (a === "ladoc") { 
	 var ladoa = eval(document.trian_retangulo.ladoa.value.replace(",",".").replace(/ /g,"")); 	  
	 var ladob = eval(document.trian_retangulo.ladob.value.replace(",",".").replace(/ /g,"")); 
	 
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_retangulo.ladoa.focus();
		  document.trian_retangulo.ladoa.select();  
	  return false;
   }
   
	  if ((ladob < 0) || (isNaN(ladob)) || ladob == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	  
	  document.getElementById('resposta').innerHTML = "<hr>  O cateto <a1 style='font-family: times new roman; font-style:italic;'>c</a1> do triângulo ABC é: <br> <div style='line-height: 25px;'><a1 style='font-family: times new roman; font-style:italic;'>c</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '><a1 style='font-family: times new roman; font-style:italic;'>a</a1><a1 style='font-size: 18px; font-family: times new roman;'>²</a1> − <a1 style='font-family: times new roman; font-style:italic;'>b</a1><a1 style='font-size: 18px; font-family: times new roman;'>²</a1> </a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>c</a1> =  √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+ladoa+"<a1 style='font-size: 18px; font-family: times new roman;'>²</a1> − "+ladob+"<a1 style='font-size: 18px; font-family: times new roman;'>²</a1></a1>  <br> <a1 style='font-family: times new roman; font-style:italic;'>c</a1> =  √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+catetoc2+" − "+catetoc3+" </a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>c</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px; '>"+catetoc4+" </a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>c</a1> = <a1 style='color: #FF0000'> "+catetoc+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>    </div><hr><h1 class='logomarca'> JPP </h1>";
	  
	  document.trian_retangulo.ladoa.focus();
	  document.trian_retangulo.ladoa.select(); 
  }
	   catch(e) {alert(e)}
  }  
	
  /** ****************************************   Cálculo da projeção m:   m = h²/n    ****************************************  **/   
  if (a === "projeçaom") { 
	 var altura = eval(document.trian_retangulo.altura.value.replace(",",".").replace(/ /g,"")); 	  
	 var projeçaon = eval(document.trian_retangulo.projeçaon.value.replace(",",".").replace(/ /g,"")); 
	 
	   if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_retangulo.altura.focus();
		  document.trian_retangulo.altura.select();  
	  return false;
   }
   
	  if ((projeçaon < 0) || (isNaN(projeçaon)) || projeçaon == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_retangulo.projeçaon.focus();
		  document.trian_retangulo.projeçaon.select();  
	  return false;
  } 
  
  try {
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2);	
   var projeçaon = document.getElementById("resposta").value = roundNumber(projeçaon, 2);	
   var projecaom = (altura*altura)/projeçaon ;
   var projecaom = document.getElementById("resposta").value = roundNumber(projecaom, 2);		
   var projeçaom2 = altura*altura;	
   var projeçaom2 = document.getElementById("resposta").value = roundNumber(projeçaom2, 2);		
	   
	  document.getElementById('resposta').innerHTML = "<hr>  A projeção ortogonal <a1 style='font-family: times new roman; font-style:italic;'>m</a1> do cateto sobre a hipotenusa é: <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>m</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>h</a1><a1 style='font-size: 18px; font-family: times new roman;'>²</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> ("+altura+"<a1 style='font-size: 18px; font-family: times new roman;'>)²</a1> </td></tr> <tr> <td> <a1 style='font-family: times new roman; font-style:italic;'>n</a1> </td><td> "+projeçaon+" </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>m</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+projeçaom2+" </td></tr><tr><td style='text-align:center;'> "+projeçaon+" </td></tr></tbody></table>  </div> <a1 style='font-family: times new roman; font-style:italic;'>m</a1> =  <a1 style='color: #FF0000'> "+projecaom+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1> <hr><h1 class='logomarca'> JPP </h1> ";
	  
	  document.trian_retangulo.altura.focus();
	  document.trian_retangulo.altura.select(); 
  }
	   catch(e) {alert(e)}
  } 
  
  /** **************************************  Cálculo da projeção n: n = h²/m    ****************************************  **/   
  if (a === "projeçaon") { 
	 var altura = eval(document.trian_retangulo.altura.value.replace(",",".").replace(/ /g,"")); 	  
	 var projeçaom = eval(document.trian_retangulo.projeçaom.value.replace(",",".").replace(/ /g,"")); 
	 
	   if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_retangulo.altura.focus();
		  document.trian_retangulo.altura.select();  
	  return false;
   }
   
	  if ((projeçaom < 0) || (isNaN(projeçaom)) ||projeçaom == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_retangulo.projeçaom.focus();
		  document.trian_retangulo.projeçaom.select();  
	  return false;
  } 
  
  try {
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2);	
   var projeçaom = document.getElementById("resposta").value = roundNumber(projeçaom, 2);		
   var projeçaon = (altura*altura)/projeçaom ;
   var projeçaon = document.getElementById("resposta").value = roundNumber(projeçaon, 2);		
   var projeçaon2 = altura*altura;	
   var projeçaon2 = document.getElementById("resposta").value = roundNumber(projeçaon2, 2);		
	   
	  document.getElementById('resposta').innerHTML = "<hr>  A projeção ortogonal <a1 style='font-family: times new roman; font-style:italic;'>n</a1> do cateto sobre a hipotenusa é: <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>h</a1><a1 style='font-size: 18px; font-family: times new roman;'>²</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> ("+altura+"<a1 style='font-size: 18px; font-family: times new roman;'>)²</a1> </td></tr> <tr> <td> <a1 style='font-family: times new roman; font-style:italic;'>m</a1> </td><td> "+projeçaom+" </td> </tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+projeçaon2+" </td></tr><tr><td style='text-align:center;'> "+projeçaom+" </td></tr></tbody></table>  <a1 style='font-family: times new roman; font-style:italic;'>n</a1> =  <a1 style='color: #FF0000'> "+projeçaon+"</a1> &nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1> </div><hr><h1 class='logomarca'> JPP </h1>";
	  
	  document.trian_retangulo.altura.focus();
	  document.trian_retangulo.altura.select(); 
  }
	   catch(e) {alert(e)}
  }
														 
  /** ************************************  Cálculo do Perímetro (P = a + b + c)    ****************************  **/   
  if (a === "perimetro") { 
	 var ladoa = eval(document.trian_retangulo.ladoa.value.replace(",",".").replace(/ /g,"")); 	  
	 var ladob = eval(document.trian_retangulo.ladob.value.replace(",",".").replace(/ /g,""));
	 var ladoc = eval(document.trian_retangulo.ladoc.value.replace(",",".").replace(/ /g,"")); 
	 
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_retangulo.ladoa.focus();
		  document.trian_retangulo.ladoa.select();  
	  return false;
   }
   
	  if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_retangulo.ladob.focus();
		  document.trian_retangulo.ladob.select();  
	  return false;
   }
   
	  if ((ladoc < 0) || (isNaN(ladoc)) || ladoc == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	   
	  document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 23px;'>O perímetro do triângulo retângulo ABC é: <br> P = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> + <a1 style='font-family: times new roman; font-style:italic;'>b</a1> + <a1 style='font-family: times new roman; font-style:italic;'>c</a1> <br> P =  "+ladoa+"  + "+ladob+" + "+ladoc+" <br> P =  <a1 style='color: #FF0000'> "+perimetro +"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>    </div><hr><h1 class='logomarca'> JPP </h1>";
	  
	  document.trian_retangulo.altura.focus();
	  document.trian_retangulo.altura.select(); 
  }
	   catch(e) {alert(e)}
  }
  }
  
  
  
  
  /***#######################################                       ##############################################      **/
  /***#######################################  TRIÂNGULO  Escaleno  ##############################################      **/
  
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
	  
   /** ************   Área 1 (c.h)/2  ********************  **/ 	
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
   
  
   /** ************   Área 2: (a.b.c)/4r  ********************  **/ 	
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
  
   /** ************   Área 2: r.(a+b+c)/2  ********************  **/ 	
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
   /** ************   Perímetro: P= a+b+c  ********************  **/ 	
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
	  alert("Escolha uma opção para Calcular!");
	} 	
	  
	var a = document.forms["trian_escaleno"]["trian_escaleno_type"].value;
	/** ************************************  Cálculdo da área: Fórmula de Heron   ****************************************  **/  
	if (a === "areaheron") { 
	 var ladoa = eval(document.trian_escaleno.ladoa.value.replace(",",".").replace(/ /g,"")); 	  
	 var ladob = eval(document.trian_escaleno.ladob.value.replace(",",".").replace(/ /g,""));
	 var ladoc = eval(document.trian_escaleno.ladoc.value.replace(",",".").replace(/ /g,"")); 
	 
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_escaleno.ladoa.focus();
		  document.trian_escaleno.ladoa.select();  
	  return false;
   }
   
	  if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_escaleno.ladob.focus();
		  document.trian_escaleno.ladob.select();  
	  return false;
   }
   
	  if ((ladoc < 0) || (isNaN(ladoc)) || ladoc == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
   
  document.getElementById('resposta').innerHTML = "<hr> O semiperímetro do triângulo ABC é: <br> <div style='line-height: 17px;'>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> P &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+ladoa+" + "+ladob+" + "+ladoc+" </td>  <td rowspan='2'> &nbsp;=&nbsp; </td>  <td rowspan='2'> <a1 style='color: #FF0000'> "+SemiPerimetro+"</a1> </td></tr> <tr> <td> 2 </td> </tr></tbody></table>  <div style='line-height: 27px;'> A área do triângulo ABC é: <br>  A = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'> <a1 style='font-family: times new roman; font-style:italic;'>p</a1>∙(<a1 style='font-family: times new roman; font-style:italic;'>p</a1> − <a1 style='font-family: times new roman; font-style:italic;'>a</a1>)∙(<a1 style='font-family: times new roman; font-style:italic;'>p</a1> − <a1 style='font-family: times new roman; font-style:italic;'>b</a1>)∙(<a1 style='font-family: times new roman; font-style:italic;'>p</a1> − <a1 style='font-family: times new roman; font-style:italic;'>c</a1>) </a1> <br> A = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>("+SemiPerimetro+"∙("+SemiPerimetro+" − "+ladoa+")∙("+SemiPerimetro+" − "+ladob+")∙("+SemiPerimetro+" − "+ladoc+")</a1> <br>  A = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>("+SemiPerimetro+"∙("+escaleno2+")∙("+escaleno3+")∙("+escaleno4+")</a1> <br>  A = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>"+escaleno5+"</a1> <br>  A = <a1 style='color: #FF0000'> "+AreaTrianguloHeron+" </a1>" +"&nbsp <a1 style='font-size: 17px; font-family: times new roman;font-style:italic;'>u² </a1>  </div><hr><h1 class='logomarca'> JPP </h1> " ;
	 
	  document.trian_escaleno.ladoa.focus();
	  document.trian_escaleno.ladoa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** *********************************************   Cálculdo da área (c.h)/2   ****************************************  **/  
   if (a === "area1") { 
	 var ladoc = eval(document.trian_escaleno.ladoc.value.replace(",",".").replace(/ /g,""));  
	 var altura = eval(document.trian_escaleno.altura.value.replace(",",".").replace(/ /g,"")); 	  
	 
	  if ((ladoc < 0) || (isNaN(ladoc)) || ladoc == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_escaleno.ladoc.focus();
		  document.trian_escaleno.ladoc.select();  
	  return false;
  } 
	   if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	   
	  document.getElementById('resposta').innerHTML = "<hr> A área do triângulo escaleno ABC é: <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>c</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladoc+" ∙ "+altura+" </td></tr> <tr> <td> 2 </td><td> 2 </td> </tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+trian_escaleno2+" </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>  </div>  A =  <a1 style='color: #FF0000'> "+areatrian_escaleno+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> u² </a1> <hr><h1 class='logomarca'> JPP </h1>";
	  
	  document.trian_escaleno.ladoc.focus();
	  document.trian_escaleno.ladoc.select(); 
  }
	   catch(e) {alert(e)}
  }
  
   /** ************************************************ Cálculdo da área (a.b.c)/4R   ****************************************  **/  
   if (a === "area2") { 
	 var ladoa = eval(document.trian_escaleno.ladoa.value.replace(",",".").replace(/ /g,"")); 	  
	 var ladob = eval(document.trian_escaleno.ladob.value.replace(",",".").replace(/ /g,""));
	 var ladoc = eval(document.trian_escaleno.ladoc.value.replace(",",".").replace(/ /g,"")); 
	 var raio_maior = eval(document.trian_escaleno.raio_maior.value.replace(",",".").replace(/ /g,""));    
	 
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_escaleno.ladoa.focus();
		  document.trian_escaleno.ladoa.select();  
	  return false;
   }
   
	  if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_escaleno.ladob.focus();
		  document.trian_escaleno.ladob.select();  
	  return false;
   }
   
	  if ((ladoc < 0) || (isNaN(ladoc)) || ladoc == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_escaleno.ladoc.focus();
		  document.trian_escaleno.ladoc.select();  
	  return false;
  }   
	  if ((raio_maior < 0) || (isNaN(raio_maior)) || raio_maior == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	   
	  document.getElementById('resposta').innerHTML = "<hr> A área do triângulo escaleno ABC é: <br>  <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>b</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>c</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladoa+" ∙ "+ladob+" ∙ "+ladoc+" </td></tr> <tr> <td> 4∙R </td><td> 4 ∙ "+raio_maior+" </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+trian_escaleno2+" </td></tr><tr><td style='text-align:center;'> "+trian_escaleno3+" </td></tr></tbody></table>  A =  <a1 style='color: #FF0000'> "+areatrian_escaleno+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> u² </a1> </div><hr><h1 class='logomarca'> JPP </h1>";
	  
	  document.trian_escaleno.ladoa.focus();
	  document.trian_escaleno.ladoa.select(); 
  }
	   catch(e) {alert(e)}
  }
  
   /** ********************************** Cálculdo da área 3: A = r∙(a + b + c)/2  ****************************************  **/  
   if (a === "area3") { 
	 var ladoa = eval(document.trian_escaleno.ladoa.value.replace(",",".").replace(/ /g,"")); 	  
	 var ladob = eval(document.trian_escaleno.ladob.value.replace(",",".").replace(/ /g,""));
	 var ladoc = eval(document.trian_escaleno.ladoc.value.replace(",",".").replace(/ /g,"")); 
	 var raio_menor = eval(document.trian_escaleno.raio_menor.value.replace(",",".").replace(/ /g,""));    
	 
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_escaleno.ladoa.focus();
		  document.trian_escaleno.ladoa.select();  
	  return false;
   }
   
	  if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_escaleno.ladob.focus();
		  document.trian_escaleno.ladob.select();  
	  return false;
   }
   
	  if ((ladoc < 0) || (isNaN(ladoc)) || ladoc == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_escaleno.ladoc.focus();
		  document.trian_escaleno.ladoc.select();  
	  return false;
  }   
	  if ((raio_menor < 0) || (isNaN(raio_menor)) || raio_menor == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	  
	  document.getElementById('resposta').innerHTML = "<hr>  A área do triângulo escaleno ABC é: <br> <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman; font-style:italic;'>r</a1> ∙ (<a1 style='font-family: times new roman; font-style:italic;'>a</a1> + <a1 style='font-family: times new roman; font-style:italic;'>b</a1> + <a1 style='font-family: times new roman; font-style:italic;'>c</a1>) </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+raio_menor+" ∙ ("+ladoa+" + "+ladob+" + "+ladoc+") </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> "+raio_menor+" ∙ "+trian_escaleno2+" </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+trian_escaleno3+" </td></tr> <tr> <td> 2 </td><td> 2 </td> </tr></tbody></table></div>  A = <a1 style='color: #FF0000'> "+areatrian_escaleno+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u² </a1>  <hr><h1 class='logomarca'> JPP </h1>  ";
	  
	  document.trian_escaleno.ladoa.focus();
	  document.trian_escaleno.ladoa.select(); 
  }
	   catch(e) {alert(e)}
  }
  
  
   /** *************************************  Perímetro: P = a + b +c   ****************************************  **/  
   if (a === "perimetro") { 
	 var ladoa = eval(document.trian_escaleno.ladoa.value.replace(",",".").replace(/ /g,"")); 	  
	 var ladob = eval(document.trian_escaleno.ladob.value.replace(",",".").replace(/ /g,""));
	 var ladoc = eval(document.trian_escaleno.ladoc.value.replace(",",".").replace(/ /g,"")); 
	 var raio_menor = eval(document.trian_escaleno.raio_menor.value.replace(",",".").replace(/ /g,""));    
	 
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_escaleno.ladoa.focus();
		  document.trian_escaleno.ladoa.select();  
	  return false;
   }
   
	  if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_escaleno.ladob.focus();
		  document.trian_escaleno.ladob.select();  
	  return false;
   }
   
	  if ((ladoc < 0) || (isNaN(ladoc)) || ladoc == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	   
	  document.getElementById('resposta').innerHTML = "<hr>  O perímetro do triângulo ABC é: <br> <div style='line-height: 20px;'> P = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> + <a1 style='font-family: times new roman; font-style:italic;'>b</a1> + <a1 style='font-family: times new roman; font-style:italic;'>c</a1> </a1>&nbsp; <br> P = "+ladoa+" + "+ladob+" + "+ladoc+" </a1>&nbsp;  <br> P = <a1 style='color: #FF0000'> "+perimetro+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> u </a1>  </div><hr><h1 class='logomarca'> JPP </h1>";
	  
	  document.trian_escaleno.ladoa.focus();
	  document.trian_escaleno.ladoa.select(); 
  }
	   catch(e) {alert(e)}
  }
  
   /** ***************************************   Cálculdo o Raio R: (a.b.c)/4R   ****************************************  **/  
   if (a === "raio_maior") { 
	 var ladoa = eval(document.trian_escaleno.ladoa.value.replace(",",".").replace(/ /g,"")); 	  
	 var ladob = eval(document.trian_escaleno.ladob.value.replace(",",".").replace(/ /g,""));
	 var ladoc = eval(document.trian_escaleno.ladoc.value.replace(",",".").replace(/ /g,"")); 
	 var area = eval(document.trian_escaleno.area.value.replace(",",".").replace(/ /g,"")); 
	 
	 
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_escaleno.ladoa.focus();
		  document.trian_escaleno.ladoa.select();  
	  return false;
   }
   
	  if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_escaleno.ladob.focus();
		  document.trian_escaleno.ladob.select();  
	  return false;
   }
   
	  if ((ladoc < 0) || (isNaN(ladoc)) || ladoc == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_escaleno.ladoc.focus();
		  document.trian_escaleno.ladoc.select();  
	  return false;
  }  
	  if ((area < 0) || (isNaN(area)) || area == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	  
	  document.getElementById('resposta').innerHTML = "<hr> O raio R da circunferência maior é: <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> R &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>b</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>c</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladoa+" ∙ "+ladob+" ∙ "+ladoc+" </td></tr> <tr> <td> 4∙A </td><td> 4 ∙ "+area+" </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> R &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+raio2+" </td></tr><tr><td style='text-align:center;'> "+raio3+" </td></tr></tbody></table></div>  R = <a1 style='color: #FF0000'> "+raio+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1> <hr><h1 class='logomarca'> JPP </h1> ";
	  
	  document.trian_escaleno.ladoa.focus();
	  document.trian_escaleno.ladoa.select(); 
  }
	   catch(e) {alert(e)}
  }
  
   /** *************************************  Cálculdo do raio r: r = 2∙A/(a+b+c)   ****************************************  **/  
   if (a === "raio_menor") { 
	 var ladoa = eval(document.trian_escaleno.ladoa.value.replace(",",".").replace(/ /g,"")); 	  
	 var ladob = eval(document.trian_escaleno.ladob.value.replace(",",".").replace(/ /g,""));
	 var ladoc = eval(document.trian_escaleno.ladoc.value.replace(",",".").replace(/ /g,"")); 
	 var area = eval(document.trian_escaleno.area.value.replace(",",".").replace(/ /g,"")); 
	 
	 
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_escaleno.ladoa.focus();
		  document.trian_escaleno.ladoa.select();  
	  return false;
   }
   
	  if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_escaleno.ladob.focus();
		  document.trian_escaleno.ladob.select();  
	  return false;
   }
   
	  if ((ladoc < 0) || (isNaN(ladoc)) || ladoc == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_escaleno.ladoc.focus();
		  document.trian_escaleno.ladoc.select();  
	  return false;
  }  
	  if ((area < 0) || (isNaN(area)) || area == "") { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	  
	   document.getElementById('resposta').innerHTML = "<hr>  O raio <a1 style='font-family: times new roman; font-style:italic;'>r</a1> da circunferência menor é: <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-size: 18px; font-style:italic;'>r</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> 2 ∙ A </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'>2 ∙ "+area+" </td></tr> <tr> <td> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> + <a1 style='font-family: times new roman; font-style:italic;'>b</a1> + <a1 style='font-family: times new roman; font-style:italic;'>c</a1> </td><td> "+ladoa+" + "+ladob+" + "+ladoc+" </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-size: 18px; font-style:italic;'>r</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+raio3+" </td></tr><tr><td style='text-align:center;'> "+raio2+" </td></tr></tbody></table>  </div>  <a1 style='font-family: times new roman; font-style:italic;'>r</a1> = <a1 style='color: #FF0000'> "+raio+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1> <hr><h1 class='logomarca'> JPP </h1>  ";
	  
	  document.trian_escaleno.ladoa.focus();
	  document.trian_escaleno.ladoa.select(); 
  }
	   catch(e) {alert(e)}
  }
  }
  
  
  /***#######################################                        #######################################################      **/
  /***#######################################  TRIÂNGULO  Equilátero  ######################################################      **/
  
  function triangulo_equilatero2() {
	var a = document.forms["trian_equilatero"]["trian_equilatero_type"].value;
  /** *************   AREA 1 (A = L².√3/4)   ***********************  **/  
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
	  
   /** ************   Perímetro: P = 3.L  ********************  **/ 	
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
  
   /** ************   altura: h = L.√3/2  ********************  **/ 	
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
	  
   /** ************   Raio: R = L.√3/2  ********************  **/ 	
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
	
	
   /** ************   Raio (r): r = L.√3/6  ********************  **/ 	
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
	
   /** ************   Lado 1 (L): L = h.2.√3/3  ********************  **/ 	
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
	  
   /** ************   Lado 2 (L): L = R.√3  ********************  **/ 	
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
	  
   /** ************   Área 2 (A): A = 3.R².√3/4  ********************  **/ 	
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
	  alert("Escolha uma opção para Calcular!");
	 }	
	  
	var a = document.forms["trian_equilatero"]["trian_equilatero_type"].value;
	/** *******************************************  Cálculdo da área: A = L².√3/4  ****************************************  **/  
	if (a === "area") { 
	 var ladoa = eval(document.trian_equilatero.ladoa.value.replace(",",".").replace(/ /g,"")); 	  
	  
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
   
	 document.getElementById('resposta').innerHTML = "<hr>  A área do triângulo equilátero é: <br> <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'>  L<a1 style='font-size:20px' >²</a1> ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> ("+ladoa+") <a1 style='font-size: 21px; font-family: times new roman;'>² </a1> ∙ 1,73  </a1> </td></tr> <tr> <td> 4 </td><td> 4 </td> </tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'>  "+ladolado+" ∙ 1,73 </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladolado1+" </a1> </a1> </td></tr> <tr> <td> 4 </td><td> 4 </td> </tr></tbody></table>  </div>  A &nbsp;= <a1 style='color: #FF0000'> "+areaTrianguloEquilatero+"&nbsp; </a1><a1 style='font-size: 16px; font-family: times new roman;'> u² </a1>  <br>  ou <br> "+"A = <a1 style='color: #FF0000'> "+areaTrianguloEquilatero1+"</a>√<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>3</a1></a1>  " +"&nbsp <a1 style='font-size: 17px; font-family: times new roman;font-style:italic;'> u² </a1> <hr><h1 class='logomarca'> JPP </h1> ";
	 
	  document.trian_equilatero.ladoa.focus();
	  document.trian_equilatero.ladoa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** ********************************************** Perímetro: P = 3.L  ****************************************  **/  
   if (a === "perimetro") { 
	 var ladoa = eval(document.trian_equilatero.ladoa.value.replace(",",".").replace(/ /g,"")); 	  
	  
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_equilatero.ladoa.focus();
		  document.trian_equilatero.ladoa.select();  
	  return false;
   }  
	
   try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);		 
   var perim1 = 3*ladoa ;
   var perim1 = document.getElementById("resposta").value = roundNumber(perim1, 2);	
   
	 document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 18px;'>O perímetro do triângulo equilátero ABC é: <br> P = 3 ∙ L <br> P =  3 ∙ "+ladoa+" <br> P =  <a1 style='color: #FF0000'> "+perim1+"</a1> "+" <a1 style='font-size: 17px; font-family: times new roman;font-style:italic;'>u </a1>  <hr><h1 class='logomarca'> JPP </h1> </div> ";
	 
	  document.trian_equilatero.ladoa.focus();
	  document.trian_equilatero.ladoa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** ********************************************  altura: h = L.√3/2  ****************************************  **/  
	if (a === "altura") { 
	  var ladoa = eval(document.trian_equilatero.ladoa.value.replace(",",".").replace(/ /g,"")); 	  
	  
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	 
	 document.getElementById('resposta').innerHTML = "<hr>  A altura do triângulo equilátero ABC é: <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>  <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>h</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> L ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladoa+" ∙ 1,73 </a1> </a1> </td></tr> <tr> <td> 2 </td><td> 2 </td> </tr></tbody></table>  </div> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>h</a1> = <a1 style='color: #FF0000'> "+altura1+"</a1> "+" <a1 style='font-size: 17px; font-family: times new roman;font-style:italic;'>u </a1>  <br>  ou  <br>  <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>  <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>h</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> L ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladoa+" ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> </a1> </a1> </td></tr> <tr> <td> 2 </td><td> 2 </td> </tr></tbody></table> </div>   <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>h</a1> = <a1 style='color: #FF0000'> "+altura3+"√<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> "+" </a1><a1 style='font-size: 17px; font-family: times new roman;font-style:italic;'>u </a1>  <hr><h1 class='logomarca'> JPP </h1> ";
	 
	  document.trian_equilatero.ladoa.focus();
	  document.trian_equilatero.ladoa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** ********************************************* Raio (R): R = L.√3/3  ****************************************  **/  
	if (a === "raio_maior") { 
	  var ladoa = eval(document.trian_equilatero.ladoa.value.replace(",",".").replace(/ /g,"")); 	  
	  
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	 
	 document.getElementById('resposta').innerHTML = "<hr>  A altura do triângulo equilátero ABC é: <br>  <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>  R &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> L ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladoa+" ∙ 1,73 </td></tr> <tr> <td> 3 </td><td> 3 </td> </tr></tbody></table> </div> R = <a1 style='color: #FF0000'> "+raio_maior+"</a1> "+" <a1 style='font-size: 17px; font-family: times new roman;font-style:italic;'>u </a1> <br> ou <br>  <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>  R &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> L ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladoa+" ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> </td></tr> <tr> <td> 3 </td><td> 3 </td> </tr></tbody></table> </div> R =  <a1 style='color: #FF0000'> "+altura3+"√<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> "+" </a1><a1 style='font-size: 17px; font-family: times new roman;font-style:italic;'>u </a1> <hr><h1 class='logomarca'> JPP </h1>";
	 
	  document.trian_equilatero.ladoa.focus();
	  document.trian_equilatero.ladoa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** ***********************************************  Raio (r): r = L.√3/6  ****************************************  **/  
	if (a === "raio_menor") { 
	  var ladoa = eval(document.trian_equilatero.ladoa.value.replace(",",".").replace(/ /g,"")); 	  
	  
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	 
	 document.getElementById('resposta').innerHTML = "<hr>  A altura do triângulo equilátero ABC é: <br> <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>  <a1 style='font-family: times new roman; font-size: 18px; font-style:italic;'>r</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> L ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladoa+" ∙ 1,73 </td></tr> <tr> <td> 6 </td><td> 6 </td> </tr></tbody></table> <a1 style='font-family: times new roman; font-size: 18px; font-style:italic;'>r</a1> =  <a1 style='color: #FF0000'> "+raio_maior+"</a1> "+" <a1 style='font-size: 17px; font-family: times new roman;font-style:italic;'>u </div></a1>  ou  <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>  <a1 style='font-family: times new roman; font-size: 18px; font-style:italic;'>r</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> L ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladoa+" ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> </td></tr> <tr> <td> 6 </td><td> 6 </td> </tr></tbody></table> </div>  <a1 style='font-family: times new roman; font-size: 18px; font-style:italic;'>r</a1> &nbsp; =&nbsp; <a1 style='color: #FF0000'> "+altura3+"√<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> "+" </a1><a1 style='font-size: 17px; font-family: times new roman;font-style:italic;'>u </a1>  <hr><h1 class='logomarca'> JPP </h1>   "  ;
	 
	  document.trian_equilatero.ladoa.focus();
	  document.trian_equilatero.ladoa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** *********************************************  Lado 1 (L): L = h.2.√3/3  ****************************************  **/  
	if (a === "lado1") { 
	  var altura = eval(document.trian_equilatero.altura.value.replace(",",".").replace(/ /g,"")); 	  
	  
	   if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
   
	 
	 document.getElementById('resposta').innerHTML = "<hr> O lado do triângulo equilátero ABC é: <br> <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>  L &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>h</a1> ∙ 2√<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+altura+" ∙ 2 ∙ 1,73 </td></tr> <tr> <td> 3 </td><td> 3 </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> L &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+result+" </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>  L =&nbsp; <a1 style='color: #FF0000'> "+lado1+"</a1> "+" <a1 style='font-size: 17px; font-family: times new roman;'>u </a1></div> <br>  ou <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>  L &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>h</a1> ∙ 2√<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+altura+" ∙ 2 ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> </td></tr> <tr> <td> 3 </td><td> 3 </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> L &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+result2+"√<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table> </div>  L =&nbsp; <a1 style='color: #FF0000'> "+lado2+"√<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> "+" </a1><a1 style='font-size: 17px; font-family: times new roman;'>u </a1>   <hr><h1 class='logomarca'> JPP </h1> ";
	 
	  document.trian_equilatero.altura.focus();
	  document.trian_equilatero.altura.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** *********************************************  Lado 2 (L): L = R.√3  ****************************************  **/  
	if (a === "lado2") { 
	  var raio_maior = eval(document.trian_equilatero.raio_maior.value.replace(",",".").replace(/ /g,"")); 	  
	  
	   if ((raio_maior < 0) || isNaN(raio_maior) || raio_maior == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trian_equilatero.raio_maior.focus();
		  document.trian_equilatero.raio_maior.select();  
	  return false;
   }    
	
   try {
   var raio_maior = document.getElementById("resposta").value = roundNumber(raio_maior, 2);		 
   var raio1 = raio_maior * Math.sqrt(3);
   var raio1 = document.getElementById("resposta").value = roundNumber(raio1, 2);
	 
	 document.getElementById('resposta').innerHTML = "<hr>  O lado do triângulo equilátero ABC é:  <br> <div style='line-height: 25px;'>   L = <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>h</a1> ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> = "+raio_maior+" ∙ 1,73 =&nbsp; <a1 style='color: #FF0000'> "+raio1+" </a1><a1 style='font-size: 17px; font-family: times new roman;'>u </a1>   <br> ou <br>  L = <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>h</a1> ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> = "+raio_maior+" ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> =&nbsp; <a1 style='color: #FF0000'> "+raio_maior+"√<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1></a1>   <a1 style='font-size: 17px; font-family: times new roman;font-style:italic;'>u </a1>   </div> <hr><h1 class='logomarca'> JPP </h1>";
	 
	  document.trian_equilatero.raio_maior.focus();
	  document.trian_equilatero.raio_maior.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** *****************************************************  Raio (r): r = L/2  ****************************************  **/  
	if (a === "raio_menor2") { 
	  var raio_maior = eval(document.trian_equilatero.raio_maior.value.replace(",",".").replace(/ /g,"")); 	  
	  
	   if ((raio_maior < 0) || isNaN(raio_maior) || raio_maior == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	 
	 document.getElementById('resposta').innerHTML = "<hr>  O Raio R triângulo equilátero ABC é: <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-size: 18px; font-style:italic;'>r</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> R </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+raio_maior+" </td><td rowspan='2'> &nbsp;=&nbsp;  <a1 style='color: #FF0000'> "+raio_menor+"</a1> "+" <a1 style='font-size: 17px; font-family: times new roman;font-style:italic;'> u </a1> </td></tr> <tr> <td> 2 </td><td> 2 </td> </tr></tbody></table>  </div><hr><h1 class='logomarca'> JPP </h1> ";
	 
	  document.trian_equilatero.raio_maior.focus();
	  document.trian_equilatero.raio_maior.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** *****************************************************  Lado 3 (L): L = 2.r.√3  ****************************************  **/  
	if (a === "lado3") { 
	  var raio_menor = eval(document.trian_equilatero.raio_menor.value.replace(",",".").replace(/ /g,"")); 	  
	  
	   if ((raio_menor < 0) || isNaN(raio_menor) || raio_menor == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	 
	 document.getElementById('resposta').innerHTML = "<hr> O lado do triângulo equilátero ABC é:   <br> <div style='line-height: 20px;'> L = 2 ∙ <a1 style='font-family: times new roman; font-style:italic;'>r</a1> ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> = 2 ∙ "+raio_menor+" ∙ 1,73 =&nbsp; <a1 style='color: #FF0000'> "+raio1+" </a1><a1 style='font-size: 17px; font-family: times new roman;'>u </a1>   <br> ou <br>  L = 2 ∙ r ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> = 2 ∙ "+raio_menor+" ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> =&nbsp; <a1 style='color: #FF0000'> "+raio2+"√<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1></a1>   <a1 style='font-size: 17px; font-family: times new roman;font-style:italic;'>u </a1>     </div> <hr><h1 class='logomarca'> JPP </h1>";
	 
	  document.trian_equilatero.raio_menor.focus();
	  document.trian_equilatero.raio_menor.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
	/** ***************************************   Cálculdo da área 2: Área 2 (A): A = 3.R².√3/4  ****************************************  **/  
	if (a === "area2") { 
	  var raio_maior = eval(document.trian_equilatero.raio_maior.value.replace(",",".").replace(/ /g,"")); 	  
	  
	   if ((raio_maior < 0) || isNaN(raio_maior) || raio_maior == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
   
	 document.getElementById('resposta').innerHTML = "<hr> A área do triângulo equilátero ABC é: <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> 3 ∙ R<a1 style='font-size:20px' >²</a1> ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> 3 ∙ ("+raio_maior+") <a1 style='font-size: 21px; font-family: times new roman;'>² </a1> ∙ 1,73  </a1> </td></tr> <tr> <td> 4 </td><td> 4 </td> </tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> 3 ∙ "+ladolado+" ∙ 1,73 </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladolado1+" </td></tr> <tr> <td> 4 </td><td> 4 </td> </tr></tbody></table> </div> A &nbsp;= <a1 style='color: #FF0000'> "+areaTrianguloEquilatero+"&nbsp; </a1><a1 style='font-size: 16px; font-family: times new roman;'> u² </a1>  <br>  ou <br> "+"A = <a1 style='color: #FF0000'> "+areaTrianguloEquilatero1+"</a>√<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>3</a1></a1>  " +"&nbsp <a1 style='font-size: 17px; font-family: times new roman;font-style:italic;'> u² </a1><hr><h1 class='logomarca'> JPP </h1>  ";
	 
	  document.trian_equilatero.raio_maior.focus();
	  document.trian_equilatero.raio_maior.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  }
  
  
  
  
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
  
  /** *************   Perímetro (P = 2(a + b))   ***********************  **/  
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
  
  /** *************   Altura (h(a) = b. sen α1)   ***********************  **/  
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
  
  /** *************   Altura (h(b) = a. sen α1)   ***********************  **/  
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
	  
  /** *************   Ângulo α1:   α1 = 180° - α2    ***********************  **/  
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
  
  /** *************   Ângulo α2:   α2 = 180° - α1    ***********************  **/  
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
  
  /** *************   diagonal 1: D1 = √a² + b² - 2.a.b.cos α1    ***********************  **/  
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
	  
  /** *************   diagonal 2: D2 = √a² + b² - 2.a.b.cos α2    ***********************  **/  
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
	  alert("Escolha uma opção para Calcular!");
	 } 
	  
	var a = document.forms["Paralelogramo"]["Paralelogramo_type"].value;
	/** *****************************************************   Cálculdo da AREA (A = a.h_a)  ****************************************  **/  
	if (a === "area") { 
	  var ladoa = eval(document.Paralelogramo.ladoa.value.replace(",",".").replace(/ /g,"")); 	 
	  var alturaa = eval(document.Paralelogramo.alturaa.value.replace(",",".").replace(/ /g,"")); 		
	  
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.Paralelogramo.ladoa.focus();
		  document.Paralelogramo.ladoa.select();  
	  return false;
   }  
	   if ((alturaa < 0) || isNaN(alturaa) || alturaa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.Paralelogramo.alturaa.focus();
		  document.Paralelogramo.alturaa.select();  
	  return false;
   }    
   
   try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);
   var alturaa = document.getElementById("resposta").value = roundNumber(alturaa, 2); 
   var areaParalelogramo = ladoa * alturaa;
   var areaParalelogramo = document.getElementById("resposta").value = roundNumber(areaParalelogramo, 2);  
   
	 document.getElementById('resposta').innerHTML = "<hr> <div style='line-height: 23px;'>A área do paralelogramo é: <br> A = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1><a1 style='font-size: 10px; font-family: times new roman; font-style:italic;'>a</a1> = "+ladoa+" ∙ "+alturaa+" <br>  A &nbsp;= <a1 style='color: #FF0000'> "+areaParalelogramo+"&nbsp; </a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> u² </a1>  </div><hr><h1 class='logomarca'> JPP </h1> ";
	 
	  document.Paralelogramo.ladoa.focus();
	  document.Paralelogramo.ladoa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
	/** **************************************  Cálculdo da AREA 2 (A = b.h_b)  ****************************************  **/  
	if (a === "area2") { 
	  var ladob = eval(document.Paralelogramo.ladob.value.replace(",",".").replace(/ /g,"")); 	 
	  var alturab = eval(document.Paralelogramo.alturab.value.replace(",",".").replace(/ /g,"")); 		
	  
	   if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.Paralelogramo.ladob.focus();
		  document.Paralelogramo.ladob.select();  
	  return false;
   }  
	   if ((alturab < 0) || isNaN(alturab) || alturab == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.Paralelogramo.alturab.focus();
		  document.Paralelogramo.alturab.select();  
	  return false;
   }  
  
   try {
   var ladob = document.getElementById("resposta").value = roundNumber(ladob, 2);
   var alturab = document.getElementById("resposta").value = roundNumber(alturab, 2); 	 
   var areaParalelogramo1 = ladob * alturab;
   var areaParalelogramo1 = document.getElementById("resposta").value = roundNumber(areaParalelogramo1, 2);   
   
	 document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 23px;'>A área do paralelogramo é: <br> A = <a1 style='font-family: times new roman; font-style:italic;'>b</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1><a1 style='font-size: 10px; font-family: times new roman; font-style:italic;'>b</a1> = "+ladob+" ∙ "+alturab+" <br>  A &nbsp;= <a1 style='color: #FF0000'> "+areaParalelogramo1+"&nbsp; </a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> u² </a1>  </div> <hr><h1 class='logomarca'> JPP </h1>";
	 
	  document.Paralelogramo.ladob.focus();
	  document.Paralelogramo.ladob.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
	/** ******************************************  Perímetro (P = 2(a + b)  ****************************************  **/  
	if (a === "perimetro1") { 
	  var ladoa = eval(document.Paralelogramo.ladoa.value.replace(",",".").replace(/ /g,""));  
	  var ladob = eval(document.Paralelogramo.ladob.value.replace(",",".").replace(/ /g,"")); 	 
		  
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.Paralelogramo.ladoa.focus();
		  document.Paralelogramo.ladoa.select();  
	  return false;
   }
		if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
   
	 document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 23px;'>O perímetro do paralelogramo é: <br> P = 2(<a1 style='font-family: times new roman; font-style:italic;'>a</a1> + <a1 style='font-family: times new roman; font-style:italic;'>b</a1>) = 2 ∙ ("+ladoa+" + "+ladob+") <br>  P &nbsp;=  2 ∙ "+perimetro2+" <br> P = <a1 style='color: #FF0000'> "+perimetro+"&nbsp;</a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>  </div> <hr><h1 class='logomarca'> JPP </h1>";
	 
	  document.Paralelogramo.ladoa.focus();
	  document.Paralelogramo.ladoa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
	/** *****************************************  Altura: h(a) = b. sen α1   ****************************************  **/  
	if (a === "alturaA") {
	  var ladob = eval(document.Paralelogramo.ladob.value.replace(",",".").replace(/ /g,"")); 	  
	  var angulo1 = eval(document.Paralelogramo.angulo1.value.replace(",",".").replace(/ /g,""));  
	   
		if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.Paralelogramo.ladob.focus();
		  document.Paralelogramo.ladob.select();  
	  return false;
   }   
			
	   if ((angulo1 < 0) || isNaN(angulo1) || angulo1 == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	
	 document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 22px;'>A altura <a1 style='font-family: times new roman; font-style:italic;'>h</a1><a1 style='font-size: 10px; font-family: times new roman; font-style:italic;'>a</a1> do paralelogramo é: <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1><a1 style='font-size: 10px; font-family: times new roman; font-style:italic;'>a</a1> = <a1 style='font-family: times new roman; font-style:italic;'>b</a1> ∙ sen α<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> =  "+ladob+" ∙ seno "+angulo1+"° <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1><a1 style='font-size: 10px; font-family: times new roman; font-style:italic;'>a</a1> = "+ladob+" ∙ "+angulo2+" <br>  <a1 style='font-family: times new roman; font-style:italic;'>h</a1><a1 style='font-size: 10px; font-family: times new roman; font-style:italic;'>a</a1> &nbsp;=  <a1 style='color: #FF0000'> "+altura1+"&nbsp;</a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>  </div><hr><h1 class='logomarca'> JPP </h1> ";
	 
	  document.Paralelogramo.ladob.focus();
	  document.Paralelogramo.ladob.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
   /** *******************************************  Altura: h(b) = a. sen α1   ****************************************  **/  
	if (a === "alturaB") { 
	  var ladoa = eval(document.Paralelogramo.ladoa.value.replace(",",".").replace(/ /g,"")); 	  
	  var angulo1 = eval(document.Paralelogramo.angulo1.value.replace(",",".").replace(/ /g,""));  
	   
		if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.Paralelogramo.ladoa.focus();
		  document.Paralelogramo.ladoa.select();  
	  return false;
   }   
	   if ((angulo1 < 0) || isNaN(angulo1) || angulo1 == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	 
	 document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 20px;'>A altura <a1 style='font-family: times new roman; font-style:italic;'>h</a1><a1 style='font-size: 10px; font-family: times new roman; font-style:italic;'>b</a1> do paralelogramo é: <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1><a1 style='font-size: 10px; font-family: times new roman; font-style:italic;'>b</a1> = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> ∙ sen α<sub>1</sub> =  "+ladoa+" ∙ seno "+angulo1+"° <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1><a1 style='font-size: 10px; font-family: times new roman; font-style:italic;'>b</a1> = "+ladoa+" ∙ "+angulo2+" &nbsp;=  <a1 style='color: #FF0000'> "+altura1+"&nbsp;</a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>  </div><hr><h1 class='logomarca'> JPP </h1> ";
	 
	  document.Paralelogramo.ladob.focus();
	  document.Paralelogramo.ladob.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
  
   /** ********************************************  ângulo:  α1 = 180° - α2   ****************************************  **/  
	if (a === "angulo5") { 
	  var angulo2 = eval(document.Paralelogramo.angulo2.value.replace(",",".").replace(/ /g,""));  
		
	   if ((angulo2 < 0) || isNaN(angulo2) || angulo2 == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.Paralelogramo.angulo2.focus();
		  document.Paralelogramo.angulo2.select();  
	  return false;
   }  
  
   try {
   var angulo2 = document.getElementById("resposta").value = roundNumber(angulo2, 3); 	 
   var angulo3 = 180 - angulo2;  
   var angulo3 = document.getElementById("resposta").value = roundNumber(angulo3, 3); 	
	
	 document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 20px;'>O ângulo  α<sub>1</sub> do paralelogramo é: <br> α<sub>1</sub> = 180° - α<sub>2</sub> =  180° - "+angulo2+"° <br> α<sub>1</sub> =  <a1 style='color: #FF0000'>"+angulo3+"</a1><a1 style='font-size: 13px; font-family: times new roman;'>° </a1>    </div> <hr><h1 class='logomarca'> JPP </h1>";
	 
	  document.Paralelogramo.angulo2.focus();
	  document.Paralelogramo.angulo2.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   
	/** *****************************************************  ângulo:  α2 = 180° - α1   ****************************************  **/  
	if (a === "angulo6") { 
	  var angulo1 = eval(document.Paralelogramo.angulo1.value.replace(",",".").replace(/ /g,""));  
		
	   if ((angulo1 < 0) || isNaN(angulo1) || angulo1 == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.Paralelogramo.angulo1.focus();
		  document.Paralelogramo.angulo1.select();  
	  return false;
   }  
  
   try {
   var angulo1 = document.getElementById("resposta").value = roundNumber(angulo1, 3); 	 
   var angulo3 = 180 - angulo1;  
   var angulo3 = document.getElementById("resposta").value = roundNumber(angulo3, 2);   
	
	 document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 20px;'>O ângulo  α<sub>2</sub> do paralelogramo é: <br> α<sub>2</sub> = 180° - α<sub>1</sub> =  180° - "+angulo1+"° <br> α<sub>2</sub> =  <a1 style='color: #FF0000'>"+angulo3+"</a1><a1 style='font-size: 13px; font-family: times new roman;'>° </a1>  </div> <hr><h1 class='logomarca'> JPP </h1>";
	 
	  document.Paralelogramo.angulo1.focus();
	  document.Paralelogramo.angulo1.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
	/** ************************************** diagonal 1: D1 = √a² + b² - 2.a.b.cos α1   ****************************************  **/  
	if (a === "diagonal1") { 
	  var ladoa = eval(document.Paralelogramo.ladoa.value.replace(",",".").replace(/ /g,"")); 	 
	  var ladob = eval(document.Paralelogramo.ladob.value.replace(",",".").replace(/ /g,"")); 	
	  var angulo1 = eval(document.Paralelogramo.angulo1.value.replace(",",".").replace(/ /g,"")); 	
	  
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.Paralelogramo.ladoa.focus();
		  document.Paralelogramo.ladoa.select();  
	  return false;
   }  
	   if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.Paralelogramo.ladob.focus();
		  document.Paralelogramo.ladob.select();  
	  return false;
   }  
	   if ((angulo1 < 0) || isNaN(angulo1) || angulo1 == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	
	 document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 24px;'>A diagonal <a1 style='font-family: times new roman; font-style:italic;'>d</a1><sub>1</sub> do paralelogramo é: <br> <a1 style='font-family: times new roman; font-style:italic;'>d</a1><sub>1</sub> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'><a1 style='font-family: times new roman; font-style:italic;'>a</a1>² + <a1 style='font-family: times new roman; font-style:italic;'>b</a1>² − 2 ∙ <a1 style='font-family: times new roman; font-style:italic;'>a</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>b</a1> ∙ cos α<sub>1</sub> </a1><br> <a1 style='font-family: times new roman; font-style:italic;'>d</a1><sub>1</sub> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>("+ladoa+")² + ("+ladob+")² − 2 ∙ "+ladoa+" ∙ "+ladob+" ∙ cos("+angulo1+") </a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>d</a1><sub>1</sub> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>"+lado2+" + "+lado3+" − "+lado4+" ∙ ("+cos2+") </a1> <br>   <a1 style='font-family: times new roman; font-style:italic;'>d</a1><sub>1</sub> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>"+lado5+" − ("+lado6+") </a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>"+lado7+" </a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>d</a1><sub>1</sub> =  <a1 style='color: #FF0000'>"+diagonal1+"</a1> <a1 style='font-size: 17px; font-family: times new roman;font-style:italic;'> u </a1>  </div><hr><h1 class='logomarca'> JPP </h1> ";
	 
	  document.Paralelogramo.ladoa.focus();
	  document.Paralelogramo.ladoa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
	/** *************************************  diagonal 2: D2 = √a² + b² - 2.a.b.cos α2   ****************************************  **/  
	if (a === "diagonal2") { 
	  var ladoa = eval(document.Paralelogramo.ladoa.value.replace(",",".").replace(/ /g,"")); 	 
	  var ladob = eval(document.Paralelogramo.ladob.value.replace(",",".").replace(/ /g,"")); 	
	  var angulo2 = eval(document.Paralelogramo.angulo2.value.replace(",",".").replace(/ /g,"")); 	
	  
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.Paralelogramo.ladoa.focus();
		  document.Paralelogramo.ladoa.select();  
	  return false;
   }  
	   if ((ladob < 0) || isNaN(ladob) || ladob == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.Paralelogramo.ladob.focus();
		  document.Paralelogramo.ladob.select();  
	  return false;
   }  
	   if ((angulo2 < 0) || isNaN(angulo2) || angulo2 == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
   
	 document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 23px;'>A diagonal <a1 style='font-family: times new roman; font-style:italic;'>d</a1><sub>2</sub> do paralelogramo é: <br> <a1 style='font-family: times new roman; font-style:italic;'>d</a1><sub>2</sub> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'><a1 style='font-family: times new roman; font-style:italic;'>a</a1>² + <a1 style='font-family: times new roman; font-style:italic;'>b</a1>² − 2 ∙ <a1 style='font-family: times new roman; font-style:italic;'>a</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>b</a1> ∙ cos α<sub>2</sub> </a1><br> <a1 style='font-family: times new roman; font-style:italic;'>d</a1><sub>2</sub> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>("+ladoa+")² + ("+ladob+")² − 2 ∙ "+ladoa+" ∙ "+ladob+" ∙ cos("+angulo2+") </a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>d</a1><sub>2</sub> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>"+lado2+" + "+lado3+" − "+lado4+" ∙ ("+cos2+") </a1> <br>   <a1 style='font-family: times new roman; font-style:italic;'>d</a1><sub>2</sub> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>"+lado5+" − ("+lado6+") </a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.7px;'>"+lado7+" </a1> &nbsp;=  <a1 style='color: #FF0000'>"+diagonal2+"</a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> u </a1>  </div><hr><h1 class='logomarca'> JPP </h1> ";
	 
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
	  document.getElementById("anguloα").disabled = true;
	  document.getElementById("anguloα").value ="";	
	  document.getElementById("anguloβ").disabled = true;
	  document.getElementById("anguloβ").value ="";
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
	  document.getElementById("anguloα").disabled = true;
	  document.getElementById("anguloα").value ="";	
	  document.getElementById("anguloβ").disabled = true;
	  document.getElementById("anguloβ").value ="";
	  document.getElementById("diagonald2").disabled = true;
	  document.getElementById("diagonald2").value ="";
	   document.getElementById("ladoa").disabled = false;	
	   document.getElementById("altura").disabled = false;		
   }
   try { 	}
	   catch(e) {alert(e)}	
	  
  /** *************   Perímetro: (P = 4.a)   ***********************  **/  
   if (a === "perimetro") {
	  document.getElementById("diagonald1").disabled = true;
	  document.getElementById("diagonald1").value ="";
	  document.getElementById("anguloα").disabled = true;
	  document.getElementById("anguloα").value ="";	
	  document.getElementById("anguloβ").disabled = true;
	  document.getElementById("anguloβ").value ="";
	  document.getElementById("diagonald2").disabled = true;
	  document.getElementById("diagonald2").value ="";
	   document.getElementById("altura").disabled = true;		
	  document.getElementById("altura").value ="";	
	   document.getElementById("ladoa").disabled = false;	
   }
   try { 	}
	   catch(e) {alert(e)}	
  
  /** *************   Lado a: (a = √((d1/2)² + (d2/2)²)   ***********************  **/  
   if (a === "ladoa") {
	  document.getElementById("ladoa").disabled = true;
	  document.getElementById("ladoa").value ="";
	  document.getElementById("anguloα").disabled = true;
	  document.getElementById("anguloα").value ="";	
	  document.getElementById("anguloβ").disabled = true;
	  document.getElementById("anguloβ").value ="";
	   document.getElementById("altura").disabled = true;		
	  document.getElementById("altura").value ="";	
	   document.getElementById("diagonald1").disabled = false;	
	   document.getElementById("diagonald2").disabled = false;		
   }
   try { 	}
	   catch(e) {alert(e)}	
  
	  
  /** *************   altura: (h1 = a . sen α)   ***********************  **/  
   if (a === "altura1") {
	  document.getElementById("diagonald1").disabled = true;
	  document.getElementById("diagonald1").value ="";
	  document.getElementById("anguloβ").disabled = true;
	  document.getElementById("anguloβ").value ="";
	  document.getElementById("diagonald2").disabled = true;
	  document.getElementById("diagonald2").value ="";
	   document.getElementById("altura").disabled = true;		
	  document.getElementById("altura").value ="";
	  document.getElementById("anguloα").disabled = false;	
	   document.getElementById("ladoa").disabled = false;	
   }
   try { 	}
	   catch(e) {alert(e)}		
	  
  /** *************   altura: (h2 = a . sen β)   ***********************  **/  
   if (a === "altura2") {
	  document.getElementById("diagonald1").disabled = true;
	  document.getElementById("diagonald1").value ="";
	  document.getElementById("anguloα").disabled = true;
	  document.getElementById("anguloα").value ="";
	  document.getElementById("diagonald2").disabled = true;
	  document.getElementById("diagonald2").value ="";
	   document.getElementById("altura").disabled = true;		
	  document.getElementById("altura").value ="";
	  document.getElementById("anguloβ").disabled = false;	
	   document.getElementById("ladoa").disabled = false;	
   }
   try { 	}
	   catch(e) {alert(e)}		
	  
  /** *************   ângulo α: (α = 180° - β)   ***********************  **/  
   if (a === "anguloα") {
	  document.getElementById("diagonald1").disabled = true;
	  document.getElementById("diagonald1").value ="";
	  document.getElementById("ladoa").disabled = true;
	  document.getElementById("ladoa").value ="";
	  document.getElementById("diagonald2").disabled = true;
	  document.getElementById("diagonald2").value ="";
	   document.getElementById("altura").disabled = true;		
	  document.getElementById("altura").value ="";
	  document.getElementById("anguloα").disabled = true;
	  document.getElementById("anguloα").value ="";	
	  document.getElementById("anguloβ").disabled = false;	
   }
   try { 	}
	   catch(e) {alert(e)}		
	  
  /** *************   ângulo β: (β = 180° - α)   ***********************  **/  
   if (a === "anguloβ") {
	  document.getElementById("diagonald1").disabled = true;
	  document.getElementById("diagonald1").value ="";
	  document.getElementById("ladoa").disabled = true;
	  document.getElementById("ladoa").value ="";
	  document.getElementById("diagonald2").disabled = true;
	  document.getElementById("diagonald2").value ="";
	   document.getElementById("altura").disabled = true;		
	  document.getElementById("altura").value ="";
	  document.getElementById("anguloβ").disabled = true;
	  document.getElementById("anguloβ").value ="";	
	  document.getElementById("anguloα").disabled = false;	
   }
   try { 	}
	   catch(e) {alert(e)}	
	  
  /** *************  Diagonal d1: (d1 = a . √(2 - 2 . cos α))   ***********************  **/  
   if (a === "diagonald1") {
	  document.getElementById("diagonald1").disabled = true;
	  document.getElementById("diagonald1").value ="";
	  document.getElementById("diagonald2").disabled = true;
	  document.getElementById("diagonald2").value ="";
	   document.getElementById("altura").disabled = true;		
	  document.getElementById("altura").value ="";
	  document.getElementById("anguloβ").disabled = true;
	  document.getElementById("anguloβ").value ="";
	  document.getElementById("ladoa").disabled = false;	
	  document.getElementById("anguloα").disabled = false;	
   }
   try { 	}
	   catch(e) {alert(e)}	
		  
  /** *************  Diagonal d2: (d2 = a . √(2 - 2 . cos β))   ***********************  **/  
   if (a === "diagonald2") {
	  document.getElementById("diagonald1").disabled = true;
	  document.getElementById("diagonald1").value ="";
	  document.getElementById("diagonald2").disabled = true;
	  document.getElementById("diagonald2").value ="";
	   document.getElementById("altura").disabled = true;		
	  document.getElementById("altura").value ="";
	  document.getElementById("anguloα").disabled = true;
	  document.getElementById("anguloα").value ="";
	  document.getElementById("ladoa").disabled = false;	
	  document.getElementById("anguloβ").disabled = false;	
   }
   try { 	}
	   catch(e) {alert(e)}		
  } 
   
	
  function losango1() {
	  
   var ddl = document.getElementById("ops");
   var selectedValue = ddl.options[ddl.selectedIndex].value;
	  if (selectedValue == "")
	 {
	  alert("Escolha uma opção para Calcular!");
	 } 
	 
	var a = document.forms["losango"]["losango_type"].value;
	/** *****************************************************   Cálculdo da AREA 1 (A = (d1 . d2)/2)  ****************************************  **/  
	if (a === "area") { 
	  var diagonald1 = eval(document.losango.diagonald1.value.replace(",",".").replace(/ /g,"")); 	 
	  var diagonald2 = eval(document.losango.diagonald2.value.replace(",",".").replace(/ /g,"")); 		
	  
	   if ((diagonald1 < 0) || isNaN(diagonald1) || diagonald1 == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.losango.diagonald1.focus();
		  document.losango.diagonald1.select();  
	  return false;
   }  
	   if ((diagonald2 < 0) || isNaN(diagonald2) || diagonald2 == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
   
	 document.getElementById('resposta').innerHTML = "<hr> A área do losango é: <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'><a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1></td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'>"+diagonald1+" ∙ "+diagonald2+"</td></tr> <tr> <td>2</td><td>2</td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+areaLosango2+" </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>  </div> A = <a1 style='color: #FF0000'> "+areaLosango+"&nbsp; </a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> u² </a1> <hr><h1 class='logomarca'> JPP </h1> ";
	 
	  document.losango.diagonald1.focus();
	  document.losango.diagonald1.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
	/** *****************************************************   Cálculdo da AREA 2 (A = a.h)   ****************************************  **/  
	if (a === "area2") { 
	  var ladoa = eval(document.losango.ladoa.value.replace(",",".").replace(/ /g,"")); 	 
	  var altura = eval(document.losango.altura.value.replace(",",".").replace(/ /g,"")); 		
	  
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.losango.ladoa.focus();
		  document.losango.ladoa.select();  
	  return false;
   }  
	   if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.losango.altura.focus();
		  document.losango.altura.select();  
	  return false;
   }  
	
   try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);	 
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2); 	 
   var areaLosango = (ladoa * altura);
   var areaLosango = document.getElementById("resposta").value = roundNumber(areaLosango, 2);   
   
	 document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 22px;'>A área do losango é: <br> A = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = "+ladoa+" ∙ "+altura+"  <br> A =  <a1 style='color: #FF0000'> "+areaLosango+"&nbsp; </a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'> u² </a1>     </div><hr><h1 class='logomarca'> JPP </h1> ";
	 
	  document.losango.ladoa.focus();
	  document.losango.ladoa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
	/** *****************************************************   Cálculdo do Perímetro (P = 4.a)   ****************************************  **/  
	if (a === "perimetro") {
	  var ladoa = eval(document.losango.ladoa.value.replace(",",".").replace(/ /g,"")); 	 		
	  
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.losango.ladoa.focus();
		  document.losango.ladoa.select();  
	  return false;
   }  
  
   try {
	var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);	 	 
	var perimetroLosango = (4*ladoa);
	var perimetroLosango = document.getElementById("resposta").value = roundNumber(perimetroLosango, 2);	 
   
	 document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 22px;'>O perímetro do losango é: <br> P = 4 ∙ <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = 4 ∙ "+ladoa+" <br> P = <a1 style='color: #FF0000'> "+perimetroLosango+"&nbsp; </a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>  </div><hr><h1 class='logomarca'> JPP </h1> ";
	 
	  document.losango.ladoa.focus();
	  document.losango.ladoa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
	/** **********************************  Cálculdo lado a: (a = √((d1/2)² + (d2/2)²))   ****************************************  **/  
	if (a === "ladoa") { 
	  var diagonald1 = eval(document.losango.diagonald1.value.replace(",",".").replace(/ /g,"")); 	 
	  var diagonald2 = eval(document.losango.diagonald2.value.replace(",",".").replace(/ /g,"")); 		
	  
	   if ((diagonald1 < 0) || isNaN(diagonald1) || diagonald1 == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.losango.diagonald1.focus();
		  document.losango.diagonald1.select();  
	  return false;
   }  
	   if ((diagonald2 < 0) || isNaN(diagonald2) || diagonald2 == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	 
	 document.getElementById('resposta').innerHTML = "<hr> O lado <a1 style='font-family: times new roman; font-style:italic;'>a</a1> do losango é: <br> <div style='line-height: 25px;'>  <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>(<a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1>/2)² + <a1 style='width:100%; height:100%; border-top:solid 1.1px;'>(<a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1>/2)²</a1></a1> <br>  <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>("+diagonald1+"/2)² + <a1 style='width:100%; height:100%; border-top:solid 1.1px;'>("+diagonald2+"/2)²</a1></a1>  <br>  <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>("+ladoaLosango2+")² + <a1 style='width:100%; height:100%; border-top:solid 1.1px;'>("+ladoaLosango3+")²</a1></a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>"+ladoaLosango4+" + <a1 style='width:100%; height:100%; border-top:solid 1.1px;'>"+ladoaLosango5+"</a1></a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>"+ladoaLosango6+" </a1></a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = <a1 style='color: #FF0000'> "+ladoaLosango+"&nbsp; </a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>  </div><hr><h1 class='logomarca'> JPP </h1> ";
	 
	  document.losango.diagonald1.focus();
	  document.losango.diagonald1.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** ************************************  Cálculo da altura: (h1 = a . sen α)  ****************************************  **/  
	if (a === "altura1") { 
	  var ladoa = eval(document.losango.ladoa.value.replace(",",".").replace(/ /g,"")); 	 
	  var anguloα = eval(document.losango.anguloα.value.replace(",",".").replace(/ /g,"")); 		
	  
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.losango.ladoa.focus();
		  document.losango.ladoa.select();  
	  return false;
   }  
	   if ((anguloα < 0) || isNaN(anguloα) || anguloα == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.losango.anguloα.focus();
		  document.losango.anguloα.select();  
	  return false;
   }   
	
   try {
	var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);
	var anguloα = document.getElementById("resposta").value = roundNumber(anguloα, 3);  	 
	var alturah1 = ladoa * Math.sin((Math.PI*anguloα)/180);
	var alturah1 = document.getElementById("resposta").value = roundNumber(alturah1, 2);  
	var alturah2 =  Math.sin((Math.PI*anguloα)/180);
	var alturah2 = document.getElementById("resposta").value = roundNumber(alturah2, 3);   
   
	 document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 22px;'>A altura do losango é: <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> ∙ sen(α) = "+ladoa+" ∙ sen("+anguloα+"°) <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = "+ladoa+" ∙ "+alturah2+" <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = <a1 style='color: #FF0000'> "+alturah1+"&nbsp; </a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>  </div><hr><h1 class='logomarca'> JPP </h1> ";
	 
	  document.losango.ladoa.focus();
	  document.losango.ladoa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** ***********************************  Cálculo da altura: (h2 = a . sen β)  ****************************************  **/  
	if (a === "altura2") {
	  var ladoa = eval(document.losango.ladoa.value.replace(",",".").replace(/ /g,"")); 	 
	  var anguloβ = eval(document.losango.anguloβ.value.replace(",",".").replace(/ /g,"")); 		
	  
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.losango.ladoa.focus();
		  document.losango.ladoa.select();  
	  return false;
   }  
	   if ((anguloβ < 0) || isNaN(anguloβ) || anguloβ == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.losango.anguloβ.focus();
		  document.losango.anguloβ.select();  
	  return false;
   }
  
   try {
	var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);
	var anguloβ = document.getElementById("resposta").value = roundNumber(anguloβ, 3);  	 
	var alturah1 = ladoa * Math.sin((Math.PI*anguloβ)/180);
	var alturah1 = document.getElementById("resposta").value = roundNumber(alturah1, 2);   
	var alturah2 =  Math.sin((Math.PI*anguloβ)/180);
	var alturah2 = document.getElementById("resposta").value = roundNumber(alturah2, 3);    
   
	 document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 22px;'>A altura do losango é: <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> ∙ sen(β) = "+ladoa+" ∙ sen("+anguloβ+"°) <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = "+ladoa+" ∙ "+alturah2+" <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = <a1 style='color: #FF0000'> "+alturah1+"&nbsp; </a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>  </div> <hr><h1 class='logomarca'> JPP </h1>";
	 
	  document.losango.ladoa.focus();
	  document.losango.ladoa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** *****************************************************   ângulo: (α = 180° - β)  ****************************************  **/  
	if (a === "anguloα") {
	  var anguloβ = eval(document.losango.anguloβ.value.replace(",",".").replace(/ /g,"")); 		
	   
	   if ((anguloβ < 0) || isNaN(anguloβ) || anguloβ == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.losango.anguloβ.focus();
		  document.losango.anguloβ.select();  
	  return false;
   }
  
   try {
	var anguloβ = document.getElementById("resposta").value = roundNumber(anguloβ, 3); 	 
	var anguloα =  180 - anguloβ ;
	var anguloα = document.getElementById("resposta").value = roundNumber(anguloα, 3);   
   
	 document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 22px;'>O ângulo α do losango é: <br> α = 180° −  β =  180° − "+anguloβ+"° <br> α = <a1 style='color: #FF0000'>"+anguloα+"° </a1> </div><hr><h1 class='logomarca'> JPP </h1> ";
	 
	  document.losango.anguloβ.focus();
	  document.losango.anguloβ.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /*******************************************************   ângulo β: (β = 180° - α)  ****************************************  **/  
	if (a === "anguloβ") { 
	  var anguloα = eval(document.losango.anguloα.value.replace(",",".").replace(/ /g,"")); 		
	   
	   if ((anguloα < 0) || isNaN(anguloα) || anguloα == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.losango.anguloα.focus();
		  document.losango.anguloα.select();  
	  return false;
   }  
  
   try {
	var anguloα = document.getElementById("resposta").value = roundNumber(anguloα, 3); 	 
	var anguloβ =  180 - anguloα ;
	var anguloβ = document.getElementById("resposta").value = roundNumber(anguloβ, 3); 
   
	 document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 22px;'>O ângulo β do losango é: <br> β = 180° −  α =  180° − "+anguloα+"° <br> β = <a1 style='color: #FF0000'>"+anguloβ+"° </a1> </div><hr><h1 class='logomarca'> JPP </h1> ";
	 
	  document.losango.anguloα.focus();
	  document.losango.anguloα.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** *********************************** Diagonal d1: (d1 = a . √(2 - 2 . cos α))  ****************************************  **/  
	if (a === "diagonald1") { 
	  var ladoa = eval(document.losango.ladoa.value.replace(",",".").replace(/ /g,"")); 	 
	  var anguloα = eval(document.losango.anguloα.value.replace(",",".").replace(/ /g,"")); 		
	  
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.losango.ladoa.focus();
		  document.losango.ladoa.select();  
	  return false;
   }  
	   if ((anguloα < 0) || isNaN(anguloα) || anguloα == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.losango.anguloα.focus();
		  document.losango.anguloα.select();  
	  return false;
   }  
	
   try {
	var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2); 	 
	var anguloα = document.getElementById("resposta").value = roundNumber(anguloα, 3); 	 
	var diagonald1 = ladoa * Math.sqrt(2 - 2*(Math.cos((Math.PI*anguloα)/180))); 
	var diagonald1 = document.getElementById("resposta").value = roundNumber(diagonald1, 2); 	  
	var diagonald2 =  Math.cos((Math.PI*anguloα)/180);
	var diagonald2 = document.getElementById("resposta").value = roundNumber(diagonald2, 3);   
	var diagonald3 =  2*(Math.cos((Math.PI*anguloα)/180)); 
	var diagonald3 = document.getElementById("resposta").value = roundNumber(diagonald3, 3);   
	var diagonald4 =  2 - 2*(Math.cos((Math.PI*anguloα)/180));  
	var diagonald4 = document.getElementById("resposta").value = roundNumber(diagonald4, 3);   
	var diagonald5 =  Math.sqrt(2 - 2*(Math.cos((Math.PI*anguloα)/180))); 
	var diagonald5 = document.getElementById("resposta").value = roundNumber(diagonald5, 3);   
   
	 document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 22px;'>A diagonal <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1> do losango é: <br> <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>2 − 2 ∙ cos(α)</a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1> =  "+ladoa+" ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>2 − 2 ∙ cos("+anguloα+"°)</a1> <br>  <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1> =  "+ladoa+" ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>2 − 2 ∙ "+diagonald2+"</a1> <br>   <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1> =  "+ladoa+" ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>2 − "+diagonald3+"</a1> <br>  <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1> =  "+ladoa+" ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>"+diagonald4+"</a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1> =  "+ladoa+" ∙ "+diagonald5+" <br>  <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = <a1 style='color: #FF0000'> "+diagonald1+"&nbsp; </a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>  </div> <hr><h1 class='logomarca'> JPP </h1>";
	 
	  document.losango.ladoa.focus();
	  document.losango.ladoa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** ********************************* Diagonal d2: (d2 = a . √(2 - 2 . cos α))  ****************************************  **/  
	if (a === "diagonald2") { 
	  var ladoa = eval(document.losango.ladoa.value.replace(",",".").replace(/ /g,"")); 	 
	  var anguloβ = eval(document.losango.anguloβ.value.replace(",",".").replace(/ /g,"")); 		
	  
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.losango.ladoa.focus();
		  document.losango.ladoa.select();  
	  return false;
   }  
	   if ((anguloβ < 0) || isNaN(anguloβ) || anguloβ == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.losango.anguloβ.focus();
		  document.losango.anguloβ.select();  
	  return false;
   }     
	
   try {
	var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2); 	 
	var anguloβ = document.getElementById("resposta").value = roundNumber(anguloβ, 3); 	 
	var diagonald1 = ladoa * Math.sqrt(2 - 2*(Math.cos((Math.PI*anguloβ)/180))); 
	var diagonald1 = document.getElementById("resposta").value = roundNumber(diagonald1, 2); 	   
	var diagonald2 =  Math.cos((Math.PI*anguloβ)/180);
	var diagonald2 = document.getElementById("resposta").value = roundNumber(diagonald2, 3); 	   
	var diagonald3 =  2*(Math.cos((Math.PI*anguloβ)/180)); 
	var diagonald3 = document.getElementById("resposta").value = roundNumber(diagonald3, 3); 	   
	var diagonald4 =  2 - 2*(Math.cos((Math.PI*anguloβ)/180)); 
	var diagonald4 = document.getElementById("resposta").value = roundNumber(diagonald4, 3); 	   
	var diagonald5 =  Math.sqrt(2 - 2*(Math.cos((Math.PI*anguloβ)/180))); 
	var diagonald5 = document.getElementById("resposta").value = roundNumber(diagonald5, 3); 	   
   
	 document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 22px;'>A diagonal <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1> do losango é: <br> <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1> = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>2 − 2 ∙ cos(α)</a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1> =  "+ladoa+" ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>2 − 2 ∙ cos("+anguloβ+"°)</a1> <br>  <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1> =  "+ladoa+" ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>2 − 2 ∙ "+diagonald2+"</a1> <br>   <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1> =  "+ladoa+" ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>2 − "+diagonald3+"</a1> <br>  <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1> =  "+ladoa+" ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>"+diagonald4+"</a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1> =  "+ladoa+" ∙ "+diagonald5+" <br>  <a1 style='font-family: times new roman; font-style:italic;'>d</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1> = <a1 style='color: #FF0000'> "+diagonald1+"&nbsp; </a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>  </div><hr><h1 class='logomarca'> JPP </h1>";
	 
	  document.losango.ladoa.focus();
	  document.losango.ladoa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  }
  
  
  
  /***###########################################  POLÍGONO REGULAR  ###########################################      **/
  
  function poligonoRegular2() {
	var a = document.forms["poligonoRegular"]["poligonoRegular_type"].value;
  /** *************   AREA (A =(n.a².cotg PI/n)/4   ***********************  **/  
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
	  
  /** *************   Perímetro: P = n.a  ***********************  **/  
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
  
  /** *************   apótema r: r = a/(2.sen(PI/n)  ***********************  **/  
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
  
  /** *************   Cálculo do número de diagonais: D = n(n-3)/2   ***********************  **/  
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
	  
  /** *************   N° de diagonais que partem de um vértice: D = n-3   ***********************  **/  
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
		  
  /** *************   N° de lados em função das diagonais: a:   a² - 3a - 2D = 0   ***********************  **/  
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
	  
  /** *************   Soma dos ângulos internos: S= (n - 2).180   ***********************  **/  
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
	  
  /** *************   ângulo interno de um polígono regular: ai= ((n - 2).180)/n   ***********************  **/  
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
	  alert("Escolha uma opção para Calcular!");
	 } 	
	  
	var a = document.forms["poligonoRegular"]["poligonoRegular_type"].value;
	/** ***********************************   Cálculdo da área: A =(n.a².cotg PI/n)/4  ****************************************  **/  
	if (a === "area") { 
	  var ladoa = eval(document.poligonoRegular.ladoa.value.replace(",",".").replace(/ /g,"")); 	 
	  var ladosn = eval(document.poligonoRegular.ladosn.value.replace(",",".").replace(/ /g,"")); 		
	  
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.poligonoRegular.ladoa.focus();
		  document.poligonoRegular.ladoa.select();  
	  return false;
   }  
   
	   if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("Não existe polígono menor de 3 lados!! Então, digite um valor numérico maior do que 2!!");
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
   
	 document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 16px;'> A área do polígono regular de <a1 style='color: #FF0000'>"+ladosn+"</a1> lados é: <br>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>a</a1><a1 style='font-size: 21px; font-family: times new roman;'>²</a1> ∙ cotg(180°/<a1 style='font-family: times new roman; font-style:italic;'>n</a1>) </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladosn+" ∙ ("+ladoa+")<a1 style='font-size: 21px; font-family: times new roman;'>²</a1> ∙ cotg(180°/"+ladosn+") </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladosn+" ∙ "+Res3+" ∙ cotg("+Res4+")° </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+Res1+" ∙ "+Res2+" </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table> A = <a1 style='color: #FF0000'> "+PoligonoRegular+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>  </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.poligonoRegular.ladoa.focus();
	  document.poligonoRegular.ladoa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** ********************************************  Perímetro: P = a.n  ****************************************  **/  
  
	if (a === "perimetro") { 
	  var ladoa = eval(document.poligonoRegular.ladoa.value.replace(",",".").replace(/ /g,"")); 	 
	  var ladosn = eval(document.poligonoRegular.ladosn.value.replace(",",".").replace(/ /g,"")); 		
	  
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.poligonoRegular.ladoa.focus();
		  document.poligonoRegular.ladoa.select();  
	  return false;
   }  
	   if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("Não existe polígono menor de 3 lados!! Então, digite um valor numérico maior do que 2!!");
		  document.poligonoRegular.ladosn.focus();
		  document.poligonoRegular.ladosn.select();  
	  return false;
   }  
   
   try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);	 
   var ladosn = document.getElementById("resposta").value = roundNumber(ladosn, 0);    
   var perimetro = ladosn * ladoa ;
   var perimetro = document.getElementById("resposta").value = roundNumber(perimetro, 2);	 
   
	 document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>O perímetro do polígono regular de <a1 style='color: #FF0000'>"+ladosn+"</a1> lados é: <br> P = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>n</a1> = "+ladoa+" ∙ "+ladosn+" <br> P = <a1 style='color: #FF0000'> "+perimetro+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.poligonoRegular.ladoa.focus();
	  document.poligonoRegular.ladoa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
	/** *************************************   Cálculdo do Raio R: R =(a/(2.sen(PI/n)  ****************************************  **/  
	if (a === "raio_maior") {
	  var ladoa = eval(document.poligonoRegular.ladoa.value.replace(",",".").replace(/ /g,"")); 	 
	  var ladosn = eval(document.poligonoRegular.ladosn.value.replace(",",".").replace(/ /g,"")); 		
	  
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.poligonoRegular.ladoa.focus();
		  document.poligonoRegular.ladoa.select();  
	  return false;
   }  
	   if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("Não existe polígono menor de 3 lados!! Então, digite um valor numérico maior do que 2!!");
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
   
	 document.getElementById('resposta').innerHTML ="<hr> O raio R do polígono regular inscrito numa circunferência é: <br> <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> R &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman;'> 2 ∙ sen(180°/<a1 style='font-family: times new roman; font-style:italic;'>n</a1>) </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> R &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladoa+" </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman;'> 2 ∙ sen(180°/"+ladosn+") </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> R &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladoa+" </td></tr><tr><td style='text-align:center;'> 2 ∙ sen("+raio_maior2+"°) </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> R &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> "+ladoa+" </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'>  "+ladoa+" </td></tr> <tr> <td> 2 ∙ "+raio_maior3+" </td><td> "+raio_maior4+" </td> </tr></tbody></table></div>   R = <a1 style='color: #FF0000'> "+raio_maior+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1> <hr><h1 class='logomarca'> JPP </h1> " 
	 
	  document.poligonoRegular.ladoa.focus();
	  document.poligonoRegular.ladoa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
	/** **************************************   Cálculo da apótema r:   r =(a/(2.tg(PI/n)  ****************************************  **/  
	if (a === "raio_menor") { 
	  var ladoa = eval(document.poligonoRegular.ladoa.value.replace(",",".").replace(/ /g,"")); 	 
	  var ladosn = eval(document.poligonoRegular.ladosn.value.replace(",",".").replace(/ /g,"")); 		
	  
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.poligonoRegular.ladoa.focus();
		  document.poligonoRegular.ladoa.select();  
	  return false;
   }  
	   if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("Não existe polígono menor de 3 lados!! Então, digite um valor numérico maior do que 2!!");
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
   
	 document.getElementById('resposta').innerHTML ="<hr> A apótema <a1 style='font-family: times new roman; font-style:italic;'>r</a1> do polígono regular é: <br> <div style='line-height: 15px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>r</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman;'> 2 ∙ tg(180°/<a1 style='font-family: times new roman; font-style:italic;'><a1 style='font-family: times new roman; font-style:italic;'>n</a1></a1>) </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>r</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladoa+" </td></tr><tr><td style='text-align:center;'> 2 ∙ tg(180°/"+ladosn+") </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>r</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladoa+" </td></tr><tr><td style='text-align:center;'> 2 ∙ tg("+raio_menor2+"°) </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>r</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> "+ladoa+" </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladoa+" </td></tr> <tr> <td> 2 ∙ "+raio_menor3+" </td><td> "+raio_menor4+" </td> </tr></tbody></table>  </div> <a1 style='font-family: times new roman; font-style:italic;'>r</a1> = <a1 style='color: #FF0000'> "+raio_menor+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1> <hr><h1 class='logomarca'> JPP </h1> " 
	 
	  document.poligonoRegular.ladoa.focus();
	  document.poligonoRegular.ladoa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
	/** ***********************************   Cálculdo do Lado a: a = R.2.sen(PI/n)  ****************************************  **/  
	if (a === "ladoa") { 
	  var raio_maior = eval(document.poligonoRegular.raio_maior.value.replace(",",".").replace(/ /g,"")); 	 
	  var ladosn = eval(document.poligonoRegular.ladosn.value.replace(",",".").replace(/ /g,"")); 		
	  
	   if ((raio_maior < 0) || isNaN(raio_maior) || raio_maior == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.poligonoRegular.raio_maior.focus();
		  document.poligonoRegular.raio_maior.select();  
	  return false;
   }  
	   if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("Não existe polígono menor de 3 lados!! Então, digite um valor numérico maior do que 2!!");
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
   
	 document.getElementById('resposta').innerHTML ="<hr>  O lado <a1 style='font-family: times new roman; font-style:italic;'>a</a1> do polígono regular  é: <br> <div style='line-height: 24px;'><a1 style='font-family: times new roman; font-style:italic;'> a </a1> = 2 ∙ R ∙ sen(180°/<a1 style='font-family: times new roman; font-style:italic;'>n</a1>) <br> <a1 style='font-family: times new roman; font-style:italic;'> a </a1> = 2 ∙ "+raio_maior+" ∙ sen(180°/"+ladosn+") <br> <a1 style='font-family: times new roman; font-style:italic;'> a </a1> = "+ladoa3+" ∙ sen("+ladoa2+"°) <br> <a1 style='font-family: times new roman; font-style:italic;'> a </a1> = "+ladoa3+" ∙ "+ladoa4+" <br>  <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = <a1 style='color: #FF0000'> "+ladoa+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.poligonoRegular.ladosn.focus();
	  document.poligonoRegular.ladosn.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
	/** **************************************   Cálculo do Lado a: a = R.2.sen(PI/n)  ****************************************  **/  
	if (a === "ladoa1") { 
	  var raio_menor = eval(document.poligonoRegular.raio_menor.value.replace(",",".").replace(/ /g,"")); 	 
	  var ladosn = eval(document.poligonoRegular.ladosn.value.replace(",",".").replace(/ /g,"")); 		
	  
	   if ((raio_menor < 0) || isNaN(raio_menor) || raio_menor == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.poligonoRegular.raio_menor.focus();
		  document.poligonoRegular.raio_menor.select();  
	  return false;
   }  
	   if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("Não existe polígono menor de 3 lados!! Então, digite um valor numérico maior do que 2!!");
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
   
	 document.getElementById('resposta').innerHTML ="<hr> O lado <a1 style='font-family: times new roman; font-style:italic;'>a</a1> do polígono regular  é: <br> <div style='line-height: 24px;'> <a1 style='font-family: times new roman; font-style:italic;'> a </a1> = 2 ∙ <a1 style='font-family: times new roman; font-style:italic;'>r</a1> ∙ tg(180°/<a1 style='font-family: times new roman; font-style:italic;'>n</a1>) <br> <a1 style='font-family: times new roman; font-style:italic;'> a </a1> = 2 ∙ "+raio_menor+" ∙ tg(180°/"+ladosn+") <br> <a1 style='font-family: times new roman; font-style:italic;'> a </a1> = "+ladoa3+" ∙ tg("+ladoa2+"°) <br> <a1 style='font-family: times new roman; font-style:italic;'> a </a1> = "+ladoa3+" ∙ "+ladoa4+" <br>  <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = <a1 style='color: #FF0000'> "+ladoa+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.poligonoRegular.ladosn.focus();
	  document.poligonoRegular.ladosn.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
	/** ***********************************  Cálculo do número de diagonais: D = n(n-3)/2  ****************************************  **/  
	if (a === "diagonais") { 
	  var ladosn = eval(document.poligonoRegular.ladosn.value.replace(",",".").replace(/ /g,"")); 		
	  
	   if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("Não existe polígono menor de 3 lados!! Então, digite um valor numérico maior do que 2!!");
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
   
	 document.getElementById('resposta').innerHTML ="<hr> O número de diagonais D de um polígono regular de <a1 style='color: #FF0000'>"+ladosn.toFixed(0)+"</a1> lados é: <br>  <div style='line-height: 16px;'>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> D &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1>(<a1 style='font-family: times new roman; font-style:italic;'>n</a1> - 3) </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+ladosn+"("+ladosn+" - 3) </td></tr> <tr> <td> 2 </td><td> 2 </td> </tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> D &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladosn+" ∙ "+diagonais1+" </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> D &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>"+diagonais2+" </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table> D = <a1 style='color: #FF0000'> "+diagonais+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>diagonais</a1>  </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.poligonoRegular.ladosn.focus();
	  document.poligonoRegular.ladosn.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** *************   N° de diagonais que partem de um vértice: D = n-3   ***********************  **/  
	if (a === "diagonaisVertice") { 
	  var ladosn = eval(document.poligonoRegular.ladosn.value.replace(",",".").replace(/ /g,"")); 		
	  
	   if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("Não existe polígono menor de 3 lados!! Então, digite um valor numérico maior do que 2!!");
		  document.poligonoRegular.ladosn.focus();
		  document.poligonoRegular.ladosn.select();  
	  return false;
   } 
	 
   try {
   var ladosn = document.getElementById("resposta").value = roundNumber(ladosn, 0);     
   var diagonaisVertice = ladosn-3;
   var diagonaisVertice = document.getElementById("resposta").value = roundNumber(diagonaisVertice, 2);  
	
	 document.getElementById('resposta').innerHTML ="<hr>  O número de diagonais D que partem de um vértice polígono regular de <a1 style='color: #FF0000'>"+ladosn+"</a1> lados é: <br> <div style='line-height: 22px;'> D = <a1 style='font-family: times new roman; font-style:italic;'>n</a1> − 3 = "+ladosn+" − 3  <br>    D = <a1 style='color: #FF0000'> "+diagonaisVertice+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>diagonais</a1>  </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.poligonoRegular.ladosn.focus();
	  document.poligonoRegular.ladosn.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** *************   N° de lados em função das diagonais: a:   n² - 3n - 2D = 0   ***********************  **/  
	if (a === "diagonaisLado") { 
	  var diagonais = eval(document.poligonoRegular.diagonais.value.replace(",",".").replace(/ /g,"")); 		
	  
	   if ((diagonais < 0) || isNaN(diagonais) || diagonais == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
   
	 document.getElementById('resposta').innerHTML ="<hr>  O número de lados <a1 style='font-family: times new roman; font-style:italic;'>n</a1> do polígono regular é: <br> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> D &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1>(<a1 style='font-family: times new roman; font-style:italic;'>n</a1> − 3) </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>  <div style='line-height: 14px;'><a1 style='font-family: times new roman; font-style:italic;'>n</a1>² − 3<a1 style='font-family: times new roman; font-style:italic;'>n</a1> − 2D = 0. <br><br>  Δ = <a1 style='font-family: times new roman; font-style:italic;'>b</a1>² - 4<a1 style='font-family: times new roman; font-style:italic;'>ac</a1> = (−3)² − 4∙1∙(−2∙"+diagonais+") = "+delta+" <br><br>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> −b ± √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>Δ</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> −(−3) ± √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+delta+"</a1> </td></tr> <tr> <td> 2 ∙ 1 </td><td> 2 </td> </tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> 3 ± "+delta2+" </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>   <br>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>n'</a1> &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> 3 + "+delta2+" </td>  <td rowspan='2'> &nbsp;=&nbsp; </td>  <td rowspan='2'> <a1 style='color: #FF0000'> "+diagonaisLado+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>lados</a1> </td></tr> <tr> <td> 2 </td> </tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>n'</a1> &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> 3 − "+delta2+" </td>  <td rowspan='2'> &nbsp;=&nbsp; </td>  <td rowspan='2'> <a1 style='color: #FF0000'> "+diagonaisLado2+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>(Não convém)</a1>&nbsp; </td></tr> <tr> <td> 2 </td> </tr></tbody></table> </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.poligonoRegular.diagonais.focus();
	  document.poligonoRegular.diagonais.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** ********************************   Soma dos ângulos internos: S= (n - 2).180   ************************************  **/  
	if (a === "somaangulos") { 
	  var ladosn = eval(document.poligonoRegular.ladosn.value.replace(",",".").replace(/ /g,"")); 		
	  
	   if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("Não existe polígono menor de 3 lados!! Então, digite um valor numérico maior do que 2!!");
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
   
	 document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 22px;'> A soma dos ângulos internos de um polígono convexo é: <br>  S<a1 style='font-size: 10px; font-family: times new roman;'>i</a1> = (<a1 style='font-family: times new roman; font-style:italic;'>n</a1> − 2) ∙ 180°  <br>  S<a1 style='font-size: 10px; font-family: times new roman;'>i</a1> =  ("+ladosn+" − 2) ∙ 180°  <br>  S<a1 style='font-size: 10px; font-family: times new roman;'>i</a1> = "+ladosn+" ∙ 180° <br>  S<a1 style='font-size: 10px; font-family: times new roman;'>i</a1> =  <a1 style='color: #FF0000'> "+somaangulos+"</a1>"+"<a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>°</a1>  </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.poligonoRegular.ladosn.focus();
	  document.poligonoRegular.ladosn.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** *************   ângulo interno de um polígono regular: ai= ((n - 2).180)/n   ***********************  **/  
	if (a === "Angulointerno") { 
	  var ladosn = eval(document.poligonoRegular.ladosn.value.replace(",",".").replace(/ /g,"")); 		
	  
	   if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("Não existe polígono menor de 3 lados!! Então, digite um valor numérico maior do que 2!!");
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
   
	 document.getElementById('resposta').innerHTML ="<hr> O ângulo interno <a1 style='font-family: times new roman; font-size: 21px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman;'>i</a1> de um polígono regular é: <br> <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;font-size: 21px;'>a</a1><a1 style='font-size: 10px; font-family: times new roman;'>i</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> (<a1 style='font-family: times new roman; font-style:italic;'>n</a1> - 2) ∙ 180° </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> ("+ladosn+" - 2) ∙ 180° </td></tr> <tr> <td> <a1 style='font-family: times new roman; font-style:italic;'>n</a1> </td><td> "+ladosn+" </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;font-size: 21px;'>a</a1><a1 style='font-size: 10px; font-family: times new roman;'>i</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> "+anguloInterno2+" ∙ 180° </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+anguloInterno3+" </td></tr> <tr> <td> "+ladosn+" </td><td> "+ladosn+" </td> </tr></tbody></table>  </div> <a1 style='font-family: times new roman; font-style:italic;font-size: 21px;'>a</a1><a1 style='font-size: 10px; font-family: times new roman;'>i</a1> =  <a1 style='color: #FF0000'> "+anguloInterno+"</a1>"+"<a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>°</a1>   <hr><h1 class='logomarca'> JPP </h1>  " 
	 
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
  /** *************   AREA do circulo (A = PI.R²)   ***********************  **/  
   if (a === "area") {
	  document.getElementById("anguloα").disabled = true;
	  document.getElementById("anguloα").value ="";
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
	  
	  
  /** *************   Perímetro da circunferência (P = 2.PI.R)   ***********************  **/  
   if (a === "perimetro") {
	  document.getElementById("anguloα").disabled = true;
	  document.getElementById("anguloα").value ="";
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
	  
  /** *************   Diâmetro da circunferência (D = PI.R)   ***********************  **/  
   if (a === "diametro") {
	  document.getElementById("anguloα").disabled = true;
	  document.getElementById("anguloα").value ="";
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
		  
  /** *************   Raio da circunferência (R = D/2)   ***********************  **/  
   if (a === "raio") {
	  document.getElementById("anguloα").disabled = true;
	  document.getElementById("anguloα").value ="";
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
  
  /** *************   Área do setor circular (A = (α.PI.R²)/360°   ***********************  **/  
   if (a === "areasetorCircular") {
	  document.getElementById("raio_menor").disabled = true;
	  document.getElementById("raio_menor").value ="";
	  document.getElementById("diametro").disabled = true;	
	  document.getElementById("diametro").value ="";
	  document.getElementById("perimetro").disabled = true;
	  document.getElementById("perimetro").value ="";	
	  document.getElementById("arcoL").disabled = true;
	  document.getElementById("arcoL").value ="";	
	  
	   document.getElementById("anguloα").disabled = false;	
	   document.getElementById("raio_maior").disabled = false;	
   }
   try { 	}
	   catch(e) {alert(e)}	
	  
  /** *************   Área do setor circular (A = (R.L)/2   ***********************  **/  
   if (a === "areasetorCircular2") {
	  document.getElementById("raio_menor").disabled = true;
	  document.getElementById("raio_menor").value ="";	
	  document.getElementById("diametro").disabled = true;	
	  document.getElementById("diametro").value ="";
	  document.getElementById("perimetro").disabled = true;
	  document.getElementById("perimetro").value ="";	
	  document.getElementById("anguloα").disabled = true;
	  document.getElementById("anguloα").value ="";		
	   document.getElementById("arcoL").disabled = false;	
	   document.getElementById("raio_maior").disabled = false;	
   }
   try { 	}
	   catch(e) {alert(e)}	
  
  /** *************   Perímetro do setor circular (P =(PI.R.α)/180°   ***********************  **/  
   if (a === "arcoCircular") {
	  document.getElementById("raio_menor").disabled = true;
	  document.getElementById("raio_menor").value ="";	
	  document.getElementById("diametro").disabled = true;	
	  document.getElementById("diametro").value ="";
	  document.getElementById("perimetro").disabled = true;
	  document.getElementById("perimetro").value ="";	
	  document.getElementById("arcoL").disabled = true;
	  document.getElementById("arcoL").value ="";
	   document.getElementById("anguloα").disabled = false;	
	   document.getElementById("raio_maior").disabled = false;	
   }
   try { 	}
	   catch(e) {alert(e)}	
	  
  /** *************   Área da coroa circular (A = PI.(R² - r²)   ***********************  **/  
   if (a === "areaCoroaCircular") {
	  document.getElementById("anguloα").disabled = true;
	  document.getElementById("anguloα").value ="";	
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
	  
  /** *************   Área do segmento circular (A = R²/2 .(PI . α/180° - sen(α))   ***********************  **/  
   if (a === "areaSegmentoCircular") {
	  document.getElementById("raio_menor").disabled = true;
	  document.getElementById("raio_menor").value ="";	
	  document.getElementById("diametro").disabled = true;	
	  document.getElementById("diametro").value ="";
	  document.getElementById("perimetro").disabled = true;
	  document.getElementById("perimetro").value ="";	
	  document.getElementById("arcoL").disabled = true;
	  document.getElementById("arcoL").value ="";
	   document.getElementById("anguloα").disabled = false;	
	   document.getElementById("raio_maior").disabled = false;	
   }
   try { 	}
	   catch(e) {alert(e)}		
	  
  /** *************   Corda (C = 2.R.sen(α/2))   ***********************  **/  
   if (a === "cordaAB") {
	  document.getElementById("raio_menor").disabled = true;
	  document.getElementById("raio_menor").value ="";	
	  document.getElementById("diametro").disabled = true;	
	  document.getElementById("diametro").value ="";
	  document.getElementById("perimetro").disabled = true;
	  document.getElementById("perimetro").value ="";	
	  document.getElementById("arcoL").disabled = true;
	  document.getElementById("arcoL").value ="";
	   document.getElementById("anguloα").disabled = false;	
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
	  alert("Escolha uma opção para Calcular!");
	 } 
	 
	var a = document.forms["circular"]["circular_type"].value;
	/** *********************************************  AREA do circulo (A = PI.R²)   ****************************************  **/  
	if (a === "area") { 
	  var raio_maior = eval(document.circular.raio_maior.value.replace(",",".").replace(/ /g,"")); 		
	  
	   if ((raio_maior < 0) || isNaN(raio_maior) || raio_maior == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
   
	 document.getElementById('resposta').innerHTML ="<hr>  A área do círculo é: <br> <div style='line-height: 22px;'>  A = π ∙ R² = 3,14 ∙ ("+raio_maior+")²  <br>  A = 3,14 ∙ "+areacircular1+" <br> A = <a1 style='color: #FF0000'> "+areacircular+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>  <br> ou <br>  A = <a1 style='color: #FF0000'> "+areacircular2+" π</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>  </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.circular.raio_maior.focus();
	  document.circular.raio_maior.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
	/** ************************************   Perímetro da circunferência (P = 2.PI.R)    ****************************************  **/ 
	if (a === "perimetro") { 
	  var raio_maior = eval(document.circular.raio_maior.value.replace(",",".").replace(/ /g,"")); 		
	  
	   if ((raio_maior < 0) || isNaN(raio_maior) || raio_maior == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
   
	 document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 20px;'>O perímetro da circunferência é: <br>  P = 2 ∙ π ∙ R = 2 ∙ 3,14 ∙ "+raio_maior+" <br>  P = <a1 style='color: #FF0000'> "+perimetrocircular+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  <br> ou <br>  P = <a1 style='color: #FF0000'> "+perimetrocircular1+" π</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.circular.raio_maior.focus();
	  document.circular.raio_maior.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 
  
   /** ************************************   Diâmetro da circunferência (D = PI.R)   ****************************************  **/ 
	if (a === "diametro") {
	  var raio_maior = eval(document.circular.raio_maior.value.replace(",",".").replace(/ /g,"")); 		
	  
	   if ((raio_maior < 0) || isNaN(raio_maior) || raio_maior == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.circular.raio_maior.focus();
		  document.circular.raio_maior.select();  
	  return false;
   } 
  
   try {
   var raio_maior = document.getElementById("resposta").value = roundNumber(raio_maior, 2);		 
   var diametrocircular =  2 * raio_maior ;
   var diametrocircular = document.getElementById("resposta").value = roundNumber(diametrocircular, 2);	
   
	 document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 20px;'>O diâmetro da circunferência é: <br>  D = 2 ∙ R = 2 ∙ "+raio_maior+" <br>  D = <a1 style='color: #FF0000'> "+diametrocircular+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>   </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.circular.raio_maior.focus();
	  document.circular.raio_maior.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 
  
  /** *******************************************   Diâmetro da circunferência (D = PI.R)   ***********************************  **/ 
	if (a === "raio") { 
	  var diametro = eval(document.circular.diametro.value.replace(",",".").replace(/ /g,"")); 		
	  
	   if ((diametro < 0) || isNaN(diametro) || diametro == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.circular.diametro.focus();
		  document.circular.diametro.select();  
	  return false;
   }   
  
   try {
   var diametro = document.getElementById("resposta").value = roundNumber(diametro, 2);		 
   var diametrocircular =  diametro/2 ;
   var diametrocircular = document.getElementById("resposta").value = roundNumber(diametrocircular, 2);	 
   
	 document.getElementById('resposta').innerHTML ="<hr>  O diâmetro da circunferência é: <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>R &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'>D</td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'>"+diametro+"</td></tr> <tr> <td>2</td><td>2</td> </tr></tbody></table> </div>  D = <a1 style='color: #FF0000'> "+diametrocircular+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  <hr><h1 class='logomarca'> JPP </h1>  " 
	 
	  document.circular.diametro.focus();
	  document.circular.diametro.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 
  
  /** *********************** Área do setor circular (A = (α.PI.R²)/360°  ***************************************  **/  
	if (a === "areasetorCircular") { 
	  var anguloα = eval(document.circular.anguloα.value.replace(",",".").replace(/ /g,"")); 
	  var raio_maior = eval(document.circular.raio_maior.value.replace(",",".").replace(/ /g,"")); 	
	  
	   if ((anguloα < 0) || isNaN(anguloα) || anguloα == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.circular.anguloα.focus();
		  document.circular.anguloα.select();  
	  return false;
   }  
		if ((raio_maior < 0) || isNaN(raio_maior) || raio_maior == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.circular.raio_maior.focus();
		  document.circular.raio_maior.select();  
	  return false;
   }  
	
   try {
   var anguloα = document.getElementById("resposta").value = roundNumber(anguloα, 2);	
   var raio_maior = document.getElementById("resposta").value = roundNumber(raio_maior, 2);	 
   var setorCircular =  (anguloα * Math.PI * raio_maior * raio_maior)/360 ;
   var setorCircular = document.getElementById("resposta").value = roundNumber(setorCircular, 2);	 
   var setorCircular1 =  (anguloα * Math.PI) ;
   var setorCircular1 = document.getElementById("resposta").value = roundNumber(setorCircular1, 2);	  
   var setorCircular2 =  (raio_maior * raio_maior) ;
   var setorCircular2 = document.getElementById("resposta").value = roundNumber(setorCircular2, 2);	  
   var setorCircular3 =  (anguloα * Math.PI * raio_maior * raio_maior) ;
   var setorCircular3 = document.getElementById("resposta").value = roundNumber(setorCircular3, 2);	  
   var setorCircular4 =  (anguloα * raio_maior * raio_maior)/360 ; 
   var setorCircular4 = document.getElementById("resposta").value = roundNumber(setorCircular4, 2);	  
   
	 document.getElementById('resposta').innerHTML ="<hr>  A área do setor circular é: <br> <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> α ∙ π ∙ R²  </td></tr><tr><td style='text-align:center;'> 360° </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+anguloα+"° ∙ 3,14 ∙ ("+raio_maior+")²   </td></tr><tr><td style='text-align:center;'> 360° </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+setorCircular1+" ∙ "+setorCircular2+" </td></tr><tr><td style='text-align:center;'> 360° </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+setorCircular3+" </td></tr><tr><td style='text-align:center;'> 360° </td></tr></tbody></table> </div>  A = <a1 style='color: #FF0000'> "+setorCircular+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  <br> ou <br>  A = <a1 style='color: #FF0000'> "+setorCircular4+" π</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1> <hr><h1 class='logomarca'> JPP </h1> " 
	 
	  document.circular.raio_maior.focus();
	  document.circular.raio_maior.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 
  
  /** **************************  Área do setor circular (A = (R.L)/2   ******************************************  **/  
	if (a === "areasetorCircular2") { 
	  var arcoL = eval(document.circular.arcoL.value.replace(",",".").replace(/ /g,"")); 
	  var raio_maior = eval(document.circular.raio_maior.value.replace(",",".").replace(/ /g,"")); 	
	  
	   if ((arcoL < 0) || isNaN(arcoL) || arcoL == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.circular.arcoL.focus();
		  document.circular.arcoL.select();  
	  return false;
   }  
		if ((raio_maior < 0) || isNaN(raio_maior) || raio_maior == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.circular.raio_maior.focus();
		  document.circular.raio_maior.select();  
	  return false;
   }   
  
   try {
   var arcoL = document.getElementById("resposta").value = roundNumber(arcoL, 2);	
   var raio_maior = document.getElementById("resposta").value = roundNumber(raio_maior, 2);		 
   var setorCircular =  (arcoL* raio_maior)/2 ;
   var setorCircular = document.getElementById("resposta").value = roundNumber(setorCircular, 2);	 
  
	 document.getElementById('resposta').innerHTML ="<hr>  A área do setor circular é: <br> <div style='line-height: 15px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'>R ∙ L </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'>"+raio_maior+" ∙ "+arcoL+"</td></tr> <tr> <td>2</td><td>2</td> </tr></tbody></table> </div> A = <a1 style='color: #FF0000'> "+setorCircular+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>²  <hr><h1 class='logomarca'> JPP </h1> " 
	 
	  document.circular.raio_maior.focus();
	  document.circular.raio_maior.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 
  
  /** ************************ Perímetro do setor circular (P =(PI.R.α)/180°   ************************************  **/  
	if (a === "arcoCircular") { 
	  var anguloα = eval(document.circular.anguloα.value.replace(",",".").replace(/ /g,"")); 
	  var raio_maior = eval(document.circular.raio_maior.value.replace(",",".").replace(/ /g,"")); 	
	  
	   if ((anguloα < 0) || isNaN(anguloα) || anguloα == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.circular.anguloα.focus();
		  document.circular.anguloα.select();  
	  return false;
   }  
		if ((raio_maior < 0) || isNaN(raio_maior) || raio_maior == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.circular.raio_maior.focus();
		  document.circular.raio_maior.select();  
	  return false;
   }    
  
   try {
   var anguloα = document.getElementById("resposta").value = roundNumber(anguloα, 2);	
   var raio_maior = document.getElementById("resposta").value = roundNumber(raio_maior, 2);		 
   var arcoLCircular =  (Math.PI * raio_maior * anguloα)/180 ;
   var arcoLCircular = document.getElementById("resposta").value = roundNumber(arcoLCircular, 2); 
   var arcoLCircular1 = (raio_maior * anguloα)/180 ; 
   var arcoLCircular1 = document.getElementById("resposta").value = roundNumber(arcoLCircular1, 2);  
  
	 document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 15px;'> O perímetro do setor circular é: <br>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>L &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'>π ∙ R ∙ α </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'>3,14 ∙ "+raio_maior+" ∙ "+anguloα+"</td></tr> <tr> <td>180</td><td>180</td> </tr></tbody></table></div> L = <a1 style='color: #FF0000'> "+arcoLCircular+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1> <br> ou <br>  L = <a1 style='color: #FF0000'> "+arcoLCircular1+" π </a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1> <hr><h1 class='logomarca'> JPP </h1> " 
	 
	  document.circular.raio_maior.focus();
	  document.circular.raio_maior.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 
  
  /** ***********************************************   Área da coroa circular (A = PI.(R² - r²)   ***********************  **/ 
	if (a === "areaCoroaCircular") { 
	  var raio_menor = eval(document.circular.raio_menor.value.replace(",",".").replace(/ /g,"")); 
	  var raio_maior = eval(document.circular.raio_maior.value.replace(",",".").replace(/ /g,"")); 	
	  
	   if ((raio_menor < 0) || isNaN(raio_menor) || raio_menor == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.circular.raio_menor.focus();
		  document.circular.raio_menor.select();  
	  return false;
   }  
		if ((raio_maior < 0) || isNaN(raio_maior) || raio_maior == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
  
	 document.getElementById('resposta').innerHTML ="<hr>  A área da coroa circular é: <br><div style='line-height: 22px;'> A =  π ∙ (R² - <a1 style='font-family: times new roman; font-style:italic;'>r</a1>²) <br> A = 3,14 ∙ [("+raio_maior+")² - ("+raio_menor+")²] <br> A =  3,14 ∙ ["+areaCoroaCircular1+" - "+areaCoroaCircular2+"] <br> A = 3,14 ∙ "+areaCoroaCircular3+"  <br> A = <a1 style='color: #FF0000'>"+areaCoroaCircular+" </a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>²<br>  ou <br>  A = <a1 style='color: #FF0000'> "+areaCoroaCircular3+" π </a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>² </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.circular.raio_maior.focus();
	  document.circular.raio_maior.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 
  
  /****************************************   Área do segmento circular (A = R²/2 .(PI . α/180° - sen(α))   ***********************  **/  
	if (a === "areaSegmentoCircular") { 
	  var anguloα = eval(document.circular.anguloα.value.replace(",",".").replace(/ /g,"")); 
	  var raio_maior = eval(document.circular.raio_maior.value.replace(",",".").replace(/ /g,"")); 	
	  
	   if ((anguloα < 0) || isNaN(anguloα) || anguloα == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.circular.anguloα.focus();
		  document.circular.anguloα.select();  
	  return false;
   }  
		if ((raio_maior < 0) || isNaN(raio_maior) || raio_maior == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.circular.raio_maior.focus();
		  document.circular.raio_maior.select();  
	  return false;
   }   
  
   try {
   var anguloα = document.getElementById("resposta").value = roundNumber(anguloα, 2);	
   var raio_maior = document.getElementById("resposta").value = roundNumber(raio_maior, 2);		 
   var areaSegmentoCircular = (raio_maior * raio_maior)/2 * ((Math.PI * (anguloα/180)) - (Math.sin((Math.PI*anguloα)/180)));
   var areaSegmentoCircular = document.getElementById("resposta").value = roundNumber(areaSegmentoCircular, 2);	 
   var areaSegmentoCircular1 = raio_maior * raio_maior;
   var areaSegmentoCircular1 = document.getElementById("resposta").value = roundNumber(areaSegmentoCircular1, 2);	 
   var areaSegmentoCircular2 = Math.PI * anguloα;
   var areaSegmentoCircular2 = document.getElementById("resposta").value = roundNumber(areaSegmentoCircular2, 2);	 
   var areaSegmentoCircular3 = (Math.sin((Math.PI*anguloα)/180));
   var areaSegmentoCircular3 = document.getElementById("resposta").value = roundNumber(areaSegmentoCircular3, 2);	 
   var areaSegmentoCircular4 = (raio_maior * raio_maior)/2;
   var areaSegmentoCircular4 = document.getElementById("resposta").value = roundNumber(areaSegmentoCircular4, 2);	 
   var areaSegmentoCircular5 =  180*(Math.sin((Math.PI*anguloα)/180)); 
   var areaSegmentoCircular5 = document.getElementById("resposta").value = roundNumber(areaSegmentoCircular5, 2);	 
   var areaSegmentoCircular6 = Math.PI * anguloα - 180*(Math.sin((Math.PI*anguloα)/180)); 
   var areaSegmentoCircular6 = document.getElementById("resposta").value = roundNumber(areaSegmentoCircular6, 2);	 
   var areaSegmentoCircular7 = (Math.PI * anguloα - 180*(Math.sin((Math.PI*anguloα)/180)))/180;
   var areaSegmentoCircular7 = document.getElementById("resposta").value = roundNumber(areaSegmentoCircular7, 2);	 
   
	 document.getElementById('resposta').innerHTML =" <hr>  A área do segmento circular é: <br> <div style='line-height: 15px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> R²</td>  <td rowspan='2'> &nbsp;∙&nbsp; </td> <td style='border-bottom:solid 1.3px'>[π ∙ α - 180° ∙ sen(α)]</td></tr> <tr> <td>2</td><td>180</td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> ("+raio_maior+")² </td>  <td rowspan='2'> &nbsp;∙&nbsp; </td> <td style='border-bottom:solid 1.3px'> [3,14 ∙ "+anguloα+"° - 180° ∙ sen("+anguloα+"°)]</td></tr> <tr> <td>2</td><td>180</td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> "+areaSegmentoCircular1+" </td>  <td rowspan='2'> &nbsp;∙&nbsp; </td> <td style='border-bottom:solid 1.3px'> ["+areaSegmentoCircular2+"  - 180° ∙ ("+areaSegmentoCircular3+")] </td></tr> <tr> <td>2</td><td>180</td> </tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; "+areaSegmentoCircular4+" &nbsp;∙&nbsp;</td><td style='border-bottom:solid 1.3px;text-align:center;'> ["+areaSegmentoCircular2+"  - ("+areaSegmentoCircular5+")]</td></tr><tr><td style='text-align:center;'> 180 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; "+areaSegmentoCircular4+" &nbsp;∙&nbsp;</td><td style='border-bottom:solid 1.3px;text-align:center;'> ["+areaSegmentoCircular6+"] </td></tr><tr><td style='text-align:center;'> 180 </td></tr></tbody></table>  </div> A =  "+areaSegmentoCircular4+" ∙ "+areaSegmentoCircular7+" = <a1 style='color: #FF0000'> "+areaSegmentoCircular+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u² </a1>  <hr><h1 class='logomarca'> JPP </h1>  "
  
	  document.circular.raio_maior.focus();
	  document.circular.raio_maior.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 
  
  /** ***********************************************   Corda (C = 2.R.sen(α/2))   ***********************  **/  
	if (a === "cordaAB") { 
	  var anguloα = eval(document.circular.anguloα.value.replace(",",".").replace(/ /g,"")); 
	  var raio_maior = eval(document.circular.raio_maior.value.replace(",",".").replace(/ /g,"")); 	
	  
	   if ((anguloα < 0) || isNaN(anguloα) || anguloα == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.circular.anguloα.focus();
		  document.circular.anguloα.select();  
	  return false;
   }  
		if ((raio_maior < 0) || isNaN(raio_maior) || raio_maior == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.circular.raio_maior.focus();
		  document.circular.raio_maior.select();  
	  return false;
   }   
  
   try {
   var anguloα = document.getElementById("resposta").value = roundNumber(anguloα, 2);	
   var raio_maior = document.getElementById("resposta").value = roundNumber(raio_maior, 2);		 
   var cordaCircular = 2*raio_maior * (Math.sin((Math.PI*anguloα)/180/2)) ;
   var cordaCircular = document.getElementById("resposta").value = roundNumber(cordaCircular, 2);	 
   var cordaCircular1 = 2 * raio_maior ;
   var cordaCircular1 = document.getElementById("resposta").value = roundNumber(cordaCircular1, 2);	  
   var cordaCircular2 =  anguloα/2 ;
   var cordaCircular2 = document.getElementById("resposta").value = roundNumber(cordaCircular2, 2);	  
   var cordaCircular3 = (Math.sin((Math.PI*anguloα)/180/2)) ; 
   var cordaCircular3 = document.getElementById("resposta").value = roundNumber(cordaCircular3, 2);	  
   
	 document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 20px;'>O comprimento da corda AB é: <br> AB = 2 ∙ R ∙ sen(α/2) <br> AB = 2 ∙ "+raio_maior+" ∙ sen("+anguloα+"°/2) <br> AB = "+cordaCircular1+" ∙ sen("+cordaCircular2+"°) <br> AB = "+cordaCircular1+" ∙ "+cordaCircular3+" <br> AB = <a1 style='color: #FF0000'> "+cordaCircular+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>  </div><hr><h1 class='logomarca'> JPP </h1>"
  
	  document.circular.raio_maior.focus();
	  document.circular.raio_maior.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 
  }
  
  
  
  /***############################################# HEXÁGONO ############################################################      **/
  
  function hexagono2() {
	var a = document.forms["hexagono"]["hexagono_type"].value;
  /** *************   AREA do hexágono (A = 3.a².√3)/2)   ***********************  **/  
   if (a === "area") {
	   document.getElementById("ladoa").disabled = false;	
   }
   try { 	}
	   catch(e) {alert(e)}
	  
  /** *************   Perímetro do hexágono (P = 6.a)   ***********************  **/  
   if (a === "perimetro") {
	   document.getElementById("ladoa").disabled = false;
   }
   try { 	}
	   catch(e) {alert(e)}	
	  
  /** *************   apótema do hexágono (r = (a.√3)/2)   ***********************  **/  
   if (a === "apotema") {
	   document.getElementById("ladoa").disabled = false;
   }
   try { 	}
	   catch(e) {alert(e)}		
	  
  /** *************   Número de diagonais do hexágono (D (n(n-3))/2   ***********************  **/  
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
	  alert("Escolha uma opção para Calcular!");
	 } 	
	  
	var a = document.forms["hexagono"]["hexagono_type"].value;
	/** ******************************************** AREA do hexágono (A = 3.a².√3)/2)   ****************************************  **/  
	if (a === "area") { 
	  var ladoa = eval(document.hexagono.ladoa.value.replace(",",".").replace(/ /g,"")); 
	  
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
   
	 document.getElementById('resposta').innerHTML ="<hr>  A área do hexágono regular é: <br> <div style='line-height: 15px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'>3 ∙ <a1 style='font-family: times new roman; font-style:italic;'>a</a1>² ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>3</a1></td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'>3 ∙ ("+ladoa+")² ∙ 1,73</td></tr> <tr> <td>2</td><td>2</td> </tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> 3 ∙ "+areahexagono1+" ∙ 1,73 </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+areahexagono2+" </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table></div> A = <a1 style='color: #FF0000'> "+areahexagono+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1> <br> ou <br>  A = <a1 style='color: #FF0000'> "+areahexagono4+"√<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>3</a1></a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>  <hr><h1 class='logomarca'> JPP </h1> " 
	 
	  document.hexagono.ladoa.focus();
	  document.hexagono.ladoa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
	/** ************************************* Perímetro do hexágono (P = 6.a)  ****************************************  **/  
	if (a === "perimetro") { 
	  var ladoa = eval(document.hexagono.ladoa.value.replace(",",".").replace(/ /g,"")); 
	  
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.hexagono.ladoa.focus();
		  document.hexagono.ladoa.select();  
	  return false;
   }  
	
   try {
   var ladoa = document.getElementById("resposta").value = roundNumber(ladoa, 2);	 	 
   var perimetrohexagono = (6 * ladoa ) ;
   var perimetrohexagono = document.getElementById("resposta").value = roundNumber(perimetrohexagono, 2);	  
  
	 document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>O perímetro do hexágono regular é: <br> P = 6 ∙ <a1 style='font-family: times new roman; font-style:italic;'>a</a1> &nbsp; =&nbsp;  6 ∙ "+ladoa+"    <br> A = <a1 style='color: #FF0000'> "+perimetrohexagono+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.hexagono.ladoa.focus();
	  document.hexagono.ladoa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 
  
  
	/** *********************************** Apótema do hexágono (r = (a.√3)/2)  ****************************************  **/  
	if (a === "apotema") {
	  var ladoa = eval(document.hexagono.ladoa.value.replace(",",".").replace(/ /g,"")); 
	  
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
   
	 document.getElementById('resposta').innerHTML ="<hr>  A apótema <a1 style='font-family: times new roman; font-style:italic;'>r</a1> do hexágono regular é: <br> <div style='line-height: 15px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'><a1 style='font-family: times new roman; font-style:italic;'>r</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'><a1 style='font-family: times new roman; font-style:italic;'>a</a1> ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>3</a1></td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'>"+ladoa+" ∙ 1,73</td></tr> <tr> <td>2</td><td>2</td> </tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>r</a1> &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+apotemahexagono2+" </td>  <td rowspan='2'> &nbsp;=&nbsp; </td>  <td rowspan='2'> <a1 style='color: #FF0000'> "+apotemahexagono+"</a1>"+"&nbsp; <a1 style='font-size: 16px; font-family: times new roman; font-style:italic;'>u²</a1> </td></tr> <tr> <td> 2 </td> </tr></tbody></table></div>   ou <br>  <a1 style='font-family: times new roman; font-style:italic;'>r</a1> &nbsp;=&nbsp; <a1 style='color: #FF0000'> "+apotemahexagono3+"√<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>3</a1></a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>  <hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.hexagono.ladoa.focus();
	  document.hexagono.ladoa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }  
  }
  
  
  
  /***############################################## TRAPÉZIO  ############################################################      **/
  
  function trapezio2() {
	var a = document.forms["trapezio"]["trapezio_type"].value;
  /** ******************************   AREA (A = (B.b).h/2   *****************************  **/  
   if (a === "area") {
	  document.getElementById("ladoc").disabled = true;
	  document.getElementById("ladoc").value ="";
	  document.getElementById("ladod").disabled = true;
	  document.getElementById("ladod").value ="";
	  document.getElementById("anguloα").disabled = true;	
	  document.getElementById("anguloα").value ="";	
	  document.getElementById("anguloβ").disabled = true;	
	  document.getElementById("anguloβ").value ="";	
	  document.getElementById("anguloδ").disabled = true;	
	  document.getElementById("anguloδ").value ="";	
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
	  document.getElementById("anguloα").disabled = true;	
	  document.getElementById("anguloα").value ="";	
	  document.getElementById("anguloβ").disabled = true;	
	  document.getElementById("anguloβ").value ="";	
	  document.getElementById("anguloδ").disabled = true;	
	  document.getElementById("anguloδ").value ="";	
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
	  document.getElementById("anguloα").disabled = true;	
	  document.getElementById("anguloα").value ="";	
	  document.getElementById("anguloβ").disabled = true;	
	  document.getElementById("anguloβ").value ="";	
	  document.getElementById("anguloδ").disabled = true;	
	  document.getElementById("anguloδ").value ="";	
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
	  document.getElementById("anguloα").disabled = true;	
	  document.getElementById("anguloα").value ="";	
	  document.getElementById("anguloβ").disabled = true;	
	  document.getElementById("anguloβ").value ="";	
	  document.getElementById("anguloδ").disabled = true;	
	  document.getElementById("anguloδ").value ="";	
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
  
  
  /** **************************   Altura 2 (h = d.sen δ )  *************************/  
   if (a === "altura2") {
	  document.getElementById("ladoc").disabled = true;
	  document.getElementById("ladoc").value ="";
	  document.getElementById("areaA").disabled = true;
	  document.getElementById("areaA").value ="";
	  document.getElementById("anguloα").disabled = true;	
	  document.getElementById("anguloα").value ="";	
	  document.getElementById("anguloβ").disabled = true;	
	  document.getElementById("anguloβ").value ="";	
	  document.getElementById("basemaior").disabled = true;	
	  document.getElementById("basemaior").value ="";	
	  document.getElementById("anguloy").disabled = true;	
	  document.getElementById("anguloy").value ="";
	  document.getElementById("alturah").disabled = true;	
	  document.getElementById("alturah").value ="";	
	  document.getElementById("basemenor").disabled = true;	
	  document.getElementById("basemenor").value ="";		
	   document.getElementById("ladod").disabled = false;	
	   document.getElementById("anguloδ").disabled = false;	
   }
   try { 	}
	   catch(e) {alert(e)}	
	  
  /** **************************   Altura 3 (h = c.sen β )  *************************/  
   if (a === "altura3") {
	  document.getElementById("ladod").disabled = true;
	  document.getElementById("ladod").value ="";
	  document.getElementById("areaA").disabled = true;
	  document.getElementById("areaA").value ="";
	  document.getElementById("anguloα").disabled = true;	
	  document.getElementById("anguloα").value ="";	
	  document.getElementById("anguloδ").disabled = true;	
	  document.getElementById("anguloδ").value ="";	
	  document.getElementById("basemaior").disabled = true;	
	  document.getElementById("basemaior").value ="";	
	  document.getElementById("anguloy").disabled = true;	
	  document.getElementById("anguloy").value ="";
	  document.getElementById("alturah").disabled = true;	
	  document.getElementById("alturah").value ="";	
	  document.getElementById("basemenor").disabled = true;	
	  document.getElementById("basemenor").value ="";
	   document.getElementById("ladoc").disabled = false;	
	   document.getElementById("anguloβ").disabled = false;	
   }
   try { 	}
	   catch(e) {alert(e)}		
	  
	  
  /** **************************  perimetro (P = B + b + c + d)  *************************/  
   if (a === "perimetro") {
	  document.getElementById("areaA").disabled = true;
	  document.getElementById("areaA").value ="";
	  document.getElementById("anguloα").disabled = true;	
	  document.getElementById("anguloα").value ="";	
	  document.getElementById("anguloδ").disabled = true;	
	  document.getElementById("anguloδ").value ="";	
	  document.getElementById("anguloy").disabled = true;	
	  document.getElementById("anguloy").value ="";
	  document.getElementById("alturah").disabled = true;	
	  document.getElementById("alturah").value ="";
	  document.getElementById("anguloβ").disabled = true;	
	  document.getElementById("anguloβ").value ="";	
	   document.getElementById("ladoc").disabled = false;	
	   document.getElementById("basemaior").disabled = false;	
	   document.getElementById("basemenor").disabled = false;	
	   document.getElementById("ladod").disabled = false;	
   }
   try { 	}
	   catch(e) {alert(e)}	
  
  /** **************************  ângulo (α = 180° - δ)  *************************/  
   if (a === "anguloα") {
	  document.getElementById("areaA").disabled = true;
	  document.getElementById("areaA").value ="";
	  document.getElementById("anguloα").disabled = true;	
	  document.getElementById("anguloα").value ="";	
	  document.getElementById("basemenor").disabled = true;	
	  document.getElementById("basemenor").value ="";	
	  document.getElementById("anguloy").disabled = true;	
	  document.getElementById("anguloy").value ="";
	  document.getElementById("alturah").disabled = true;	
	  document.getElementById("alturah").value ="";
	  document.getElementById("anguloβ").disabled = true;	
	  document.getElementById("anguloβ").value ="";	
	  document.getElementById("ladoc").disabled = true;	
	  document.getElementById("ladoc").value ="";	
	  document.getElementById("basemaior").disabled = true;	
	  document.getElementById("basemaior").value ="";	
	  document.getElementById("ladod").disabled = true;	
	  document.getElementById("ladod").value ="";	
	   document.getElementById("anguloδ").disabled = false;	
   }
   try { 	}
	   catch(e) {alert(e)}		
	  
  /** **************************  ângulo (δ = 180° - α)  *************************/  
   if (a === "anguloδ") {
	  document.getElementById("areaA").disabled = true;
	  document.getElementById("areaA").value ="";
	  document.getElementById("anguloδ").disabled = true;	
	  document.getElementById("anguloδ").value ="";	
	  document.getElementById("basemenor").disabled = true;	
	  document.getElementById("basemenor").value ="";	
	  document.getElementById("anguloy").disabled = true;	
	  document.getElementById("anguloy").value ="";
	  document.getElementById("alturah").disabled = true;	
	  document.getElementById("alturah").value ="";
	  document.getElementById("anguloβ").disabled = true;	
	  document.getElementById("anguloβ").value ="";	
	  document.getElementById("ladoc").disabled = true;	
	  document.getElementById("ladoc").value ="";	
	  document.getElementById("basemaior").disabled = true;	
	  document.getElementById("basemaior").value ="";	
	  document.getElementById("ladod").disabled = true;	
	  document.getElementById("ladod").value ="";	
	   document.getElementById("anguloα").disabled = false;	
   }
   try { 	}
	   catch(e) {alert(e)}			
	  
  /** **************************  ângulo (β = 180° - γ)  *************************/  
   if (a === "anguloβ") {
	  document.getElementById("areaA").disabled = true;
	  document.getElementById("areaA").value ="";
	  document.getElementById("anguloδ").disabled = true;	
	  document.getElementById("anguloδ").value ="";	
	  document.getElementById("basemenor").disabled = true;	
	  document.getElementById("basemenor").value ="";	
	  document.getElementById("anguloβ").disabled = true;	
	  document.getElementById("anguloβ").value ="";
	  document.getElementById("alturah").disabled = true;	
	  document.getElementById("alturah").value ="";
	  document.getElementById("anguloα").disabled = true;	
	  document.getElementById("anguloα").value ="";	
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
		  
  /** **************************  ângulo (γ = 180° - β)  *************************/  
   if (a === "anguloy") {
	  document.getElementById("areaA").disabled = true;
	  document.getElementById("areaA").value ="";
	  document.getElementById("anguloδ").disabled = true;	
	  document.getElementById("anguloδ").value ="";	
	  document.getElementById("basemenor").disabled = true;	
	  document.getElementById("basemenor").value ="";	
	  document.getElementById("anguloy").disabled = true;	
	  document.getElementById("anguloy").value ="";
	  document.getElementById("alturah").disabled = true;	
	  document.getElementById("alturah").value ="";
	  document.getElementById("anguloα").disabled = true;	
	  document.getElementById("anguloα").value ="";	
	  document.getElementById("ladoc").disabled = true;	
	  document.getElementById("ladoc").value ="";	
	  document.getElementById("basemaior").disabled = true;	
	  document.getElementById("basemaior").value ="";	
	  document.getElementById("ladod").disabled = true;	
	  document.getElementById("ladod").value ="";	
	   document.getElementById("anguloβ").disabled = false;		
   }
   try { 	}
	   catch(e) {alert(e)}		
	  
  } 
   
  
  function trapezio1() {
	  
   var ddl = document.getElementById("ops");
   var selectedValue = ddl.options[ddl.selectedIndex].value;
	  if (selectedValue == "")
	 {
	  alert("Escolha uma opção para Calcular!");
	 } 	
	  
	var a = document.forms["trapezio"]["trapezio_type"].value;
	/** ****************************************  Cálculdo da área: A = (B.b).h/2  ****************************************  **/  
	if (a === "area") { 
	  var basemaior = eval(document.trapezio.basemaior.value.replace(",",".").replace(/ /g,"")); 
	  var basemenor = eval(document.trapezio.basemenor.value.replace(",",".").replace(/ /g,"")); 	
	  var alturah = eval(document.trapezio.alturah.value.replace(",",".").replace(/ /g,"")); 	
	  
	   if ((basemaior < 0) || isNaN(basemaior) || basemaior == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trapezio.basemaior.focus();
		  document.trapezio.basemaior.select();  
	  return false;
   }  
	   if ((basemenor < 0) || isNaN(basemenor) || basemenor == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trapezio.basemenor.focus();
		  document.trapezio.basemenor.select();  
	  return false;
   }  
		if ((alturah < 0) || isNaN(alturah) || alturah == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	
	 document.getElementById('resposta').innerHTML ="<hr> A área do trapézio é: <br> <div style='line-height: 15px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> (B + <a1 style='font-family: times new roman; font-style:italic;'>b</a1>) ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> ("+basemaior+" + "+basemenor+") ∙ "+alturah+" </td></tr> <tr> <td> 2 </td><td> 2 </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> A &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> "+areatrapezio2+" ∙ "+alturah+"  </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+areatrapezio3+" </td></tr> <tr> <td> 2 </td><td> 2 </td> </tr></tbody></table> </div> A = <a1 style='color: #FF0000'> "+areatrapezio+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1> <hr><h1 class='logomarca'> JPP </h1>  " 
	 
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
	  
	   if ((areaA < 0) || isNaN(areaA) || areaA == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trapezio.areaA.focus();
		  document.trapezio.areaA.select();  
	  return false;
   }  
	   if ((basemenor < 0) || isNaN(basemenor) || basemenor == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trapezio.basemenor.focus();
		  document.trapezio.basemenor.select();  
	  return false;
   }  
		if ((alturah < 0) || isNaN(alturah) || alturah == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	
	 document.getElementById('resposta').innerHTML ="<hr>  A base maior B do trapézio é: <br> <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> (B + <a1 style='font-family: times new roman; font-style:italic;'>b</a1>) ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> "+areaA+" &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> (B + "+basemenor+") ∙ "+alturah+" </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>  </div>  2 ∙ "+areaA+" = (B + "+basemenor+") ∙ "+alturah+" <br>    "+basemaiorB2+" = (B + "+basemenor+") ∙ "+alturah+" <br>  <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> "+basemaiorB2+" </td><td rowspan='2'> &nbsp;=&nbsp; B + "+basemenor+" </td></tr><tr><td> "+alturah+" </td> </tr></tbody></table> </div>  "+basemaiorB3+" = B + "+basemenor+"  <br> B = "+basemaiorB3+" - "+basemenor+" <br>  B = <a1 style='color: #FF0000'> "+basemaiorB+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1> <hr><h1 class='logomarca'> JPP </h1> " 
	 
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
	  
	   if ((areaA < 0) || isNaN(areaA) || areaA == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trapezio.areaA.focus();
		  document.trapezio.areaA.select();  
	  return false;
   }  
	   if ((basemaior < 0) || isNaN(basemaior) || basemaior == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trapezio.basemaior.focus();
		  document.trapezio.basemaior.select();  
	  return false;
   }  
		if ((alturah < 0) || isNaN(alturah) || alturah == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	
	 document.getElementById('resposta').innerHTML ="<hr> A base menor b do trapézio é: <br> <div style='line-height: 14px;'>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> (B + <a1 style='font-family: times new roman; font-style:italic;'>b</a1>) ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> "+areaA+" &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> ("+basemaior+" + b ) ∙ "+alturah+"</td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table> </div>  2 ∙ "+areaA+" = ("+basemaior+" + b ) ∙ "+alturah+" <br>    "+basemaiorB2+" = ( "+basemaior+" + b ) ∙ "+alturah+" <br>  <div style='line-height: 14px;'>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> "+basemaiorB2+" &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+basemaior+" + b</td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>  </div>  "+basemaiorB3+" = "+basemaior+" + b   <br> b = "+basemaiorB3+" - "+basemaior+" <br>  b = <a1 style='color: #FF0000'> "+basemaiorB+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1><hr><h1 class='logomarca'> JPP </h1> " 
	 
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
	  
	   if ((areaA < 0) || isNaN(areaA) || areaA == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trapezio.areaA.focus();
		  document.trapezio.areaA.select();  
	  return false;
   }  
	   if ((basemaior < 0) || isNaN(basemaior) || basemaior == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trapezio.basemaior.focus();
		  document.trapezio.basemaior.select();  
	  return false;
   }  
		if ((basemenor < 0) || isNaN(basemenor) || basemenor == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	
	 document.getElementById('resposta').innerHTML ="<hr> A altura <a1 style='font-family: times new roman; font-style:italic;'>h</a1> do trapézio é: <br> <div style='line-height: 15px;'>  <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> (B + <a1 style='font-family: times new roman; font-style:italic;'>b</a1>) ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> "+areaA+" &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> ("+basemaior+" + "+basemenor+") ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>  </div> 2 ∙ "+areaA+" = "+altura3+" ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> <br>   "+altura2+" = "+altura3+" ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> <br> </div>  <div style='line-height: 14px;'>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+altura2+" </td></tr><tr><td style='text-align:center;'> "+altura3+" </td></tr></tbody></table>   <a1 style='font-family: times new roman; font-style:italic;'>h</a1> =  <a1 style='color: #FF0000'> "+altura+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>    </div> <hr><h1 class='logomarca'> JPP </h1> " 
	 
	  document.trapezio.basemaior.focus();
	  document.trapezio.basemaior.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
	/** *********************************************    Altura 2 (h = d.sen δ )     ****************************************  **/  
	if (a === "altura2") { 
	  var ladod = eval(document.trapezio.ladod.value.replace(",",".").replace(/ /g,"")); 
	  var anguloδ = eval(document.trapezio.anguloδ.value.replace(",",".").replace(/ /g,"")); 	
	  
	   if ((ladod < 0) || isNaN(ladod) || ladod == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trapezio.ladod.focus();
		  document.trapezio.ladod.select();  
	  return false;
   }  
	   if ((anguloδ < 0) || isNaN(anguloδ) || anguloδ == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trapezio.anguloδ.focus();
		  document.trapezio.anguloδ.select();  
	  return false;
   }  
   
   try {
   var ladod = document.getElementById("resposta").value = roundNumber(ladod, 2); 
   var anguloδ = document.getElementById("resposta").value = roundNumber(anguloδ, 2);    
   var altura1 = ladod * Math.sin((Math.PI*anguloδ)/180);
   var altura1 = document.getElementById("resposta").value = roundNumber(altura1, 2);   
   var anguloδ2 = Math.sin((Math.PI*anguloδ)/180);  
   var anguloδ2 = document.getElementById("resposta").value = roundNumber(anguloδ2, 3);   
	
	 document.getElementById('resposta').innerHTML = "<hr> <div style='line-height: 23px;'> A altura <a1 style='font-family: times new roman; font-style:italic;'>h</a1> do trapézio é: <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = <a1 style='font-family: times new roman; font-style:italic;'>d</a1> ∙ sen(δ) <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> =  "+ladod+" ∙ seno("+anguloδ+")° <br>    <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = "+ladod+" ∙ "+anguloδ2+" <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> =  <a1 style='color: #FF0000'> "+altura1+"&nbsp;</a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>  </div> <hr><h1 class='logomarca'> JPP </h1>";
	 
	  document.trapezio.ladod.focus();
	  document.trapezio.ladod.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** *************************************   Altura 3 (h = c.sen β )  ****************************************************/  
	if (a === "altura3") { 
	  var ladoc = eval(document.trapezio.ladoc.value.replace(",",".").replace(/ /g,"")); 
	  var anguloβ = eval(document.trapezio.anguloβ.value.replace(",",".").replace(/ /g,"")); 	
	  
	   if ((ladoc < 0) || isNaN(ladoc) || ladoc == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trapezio.ladoc.focus();
		  document.trapezio.ladoc.select();  
	  return false;
   }  
	   if ((anguloβ < 0) || isNaN(anguloβ) || anguloβ == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trapezio.anguloβ.focus();
		  document.trapezio.anguloβ.select();  
	  return false;
   }   
	
   try {
   var ladoc = document.getElementById("resposta").value = roundNumber(ladoc, 2); 
   var anguloβ = document.getElementById("resposta").value = roundNumber(anguloβ, 2);    
   var altura1 = ladoc * Math.sin((Math.PI*anguloβ)/180);
   var altura1 = document.getElementById("resposta").value = roundNumber(altura1, 2);  
   var anguloβ2 = Math.sin((Math.PI*anguloβ)/180);
   var anguloβ2 = document.getElementById("resposta").value = roundNumber(anguloβ2, 3);   
	
	 document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 23px;'>A altura <a1 style='font-family: times new roman; font-style:italic;'>h</a1> do trapézio é: <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = <a1 style='font-family: times new roman; font-style:italic;'>c</a1> ∙ sen(β) <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = "+ladoc+" ∙ seno("+anguloβ+")° <br>    <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = "+ladoc+" ∙ "+anguloβ2+" <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = <a1 style='color: #FF0000'> "+altura1+"&nbsp;</a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>  </div><hr><h1 class='logomarca'> JPP </h1> ";
	 
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
	  
	   if ((ladoc < 0) || isNaN(ladoc) || ladoc == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trapezio.ladoc.focus();
		  document.trapezio.ladoc.select();  
	  return false;
   }  
	   if ((ladod < 0) || isNaN(ladod) || ladod == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trapezio.ladod.focus();
		  document.trapezio.ladod.select();  
	  return false;
   }    
	   if ((basemaior < 0) || isNaN(basemaior) || basemaior == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trapezio.basemaior.focus();
		  document.trapezio.basemaior.select();  
	  return false;
   }   
	   if ((basemenor < 0) || isNaN(basemenor) || basemenor == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	
	 document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 20px;'>O perímetro do trapézio é: <br> P = B + <a1 style='font-family: times new roman; font-style:italic;'>b</a1> + <a1 style='font-family: times new roman; font-style:italic;'>c</a1> + <a1 style='font-family: times new roman; font-style:italic;'>d</a1>  <br>  P = "+basemaior+" + "+basemenor+" + "+ladoc+" + "+ladod+" <br>  P = <a1 style='color: #FF0000'> "+Perimetro+"&nbsp;</a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u </a1>  </div><hr><h1 class='logomarca'> JPP </h1> ";
	 
	  document.trapezio.basemaior.focus();
	  document.trapezio.basemaior.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** *****************************************  ângulo (α = 180° - δ)  *******************************************/  
  
	if (a === "anguloα") { 
	  var anguloδ = eval(document.trapezio.anguloδ.value.replace(",",".").replace(/ /g,"")); 	
	
	   if ((anguloδ < 0) || isNaN(anguloδ) || anguloδ == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trapezio.anguloδ.focus();
		  document.trapezio.anguloδ.select();  
	  return false;
   }    
  
   try {
   var anguloδ = document.getElementById("resposta").value = roundNumber(anguloδ, 2); 	 
   var anguloα = 180 -  anguloδ;
   var anguloα = document.getElementById("resposta").value = roundNumber(anguloα, 2);  
	 
	 document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 20px;'>O ângulo α é: <br> α = 180° − δ <br>  α = 180° − "+anguloδ+"° <br>  α =  <a1 style='color: #FF0000'> "+anguloα+"</a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>° </a1>  </div><hr><h1 class='logomarca'> JPP </h1> ";
	 
	  document.trapezio.anguloδ.focus();
	  document.trapezio.anguloδ.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** *******************************************  ângulo (δ = 180° - α)  *******************************************/  
  
	if (a === "anguloδ") { 
	  var anguloα = eval(document.trapezio.anguloα.value.replace(",",".").replace(/ /g,"")); 	
	
	   if ((anguloα < 0) || isNaN(anguloα) || anguloα == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trapezio.anguloα.focus();
		  document.trapezio.anguloα.select();  
	  return false;
   }   
	
   try {
   var anguloα = document.getElementById("resposta").value = roundNumber(anguloα, 2);    
   var anguloδ = 180 - anguloα;
   var anguloδ = document.getElementById("resposta").value = roundNumber(anguloδ, 2);   
	 
	 document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 20px;'>O ângulo δ é: <br> δ = 180° − α <br>  δ = 180° − "+anguloα+"° <br>  δ =  <a1 style='color: #FF0000'> "+anguloδ+"</a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>° </a1>  </div><hr><h1 class='logomarca'> JPP </h1> ";
	 
	  document.trapezio.anguloα.focus();
	  document.trapezio.anguloα.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** **********************************************  ângulo (β = 180° - γ)  *******************************************/  
  
	if (a === "anguloy") { 
	  var anguloβ = eval(document.trapezio.anguloβ.value.replace(",",".").replace(/ /g,"")); 	
	
	   if ((anguloβ < 0) || isNaN(anguloβ) || anguloβ == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trapezio.anguloβ.focus();
		  document.trapezio.anguloβ.select();  
	  return false;
   }   
	
   try {
   var anguloβ = document.getElementById("resposta").value = roundNumber(anguloβ, 2);    
   var anguloy = 180 - anguloβ;
   var anguloy = document.getElementById("resposta").value = roundNumber(anguloy, 2);    
	 
	 document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 20px;'>O ângulo γ é: <br> γ = 180° − β <br>  γ = 180° − "+anguloβ+"° <br>  γ =  <a1 style='color: #FF0000'> "+anguloy+"</a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>° </a1>  </div><hr><h1 class='logomarca'> JPP </h1> ";
	 
	  document.trapezio.anguloβ.focus();
	  document.trapezio.anguloβ.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
  /** **********************************************  ângulo (γ = 180° - β)  *******************************************/  
	if (a === "anguloβ") { 
	  var anguloy = eval(document.trapezio.anguloy.value.replace(",",".").replace(/ /g,"")); 	
	
	   if ((anguloy < 0) || isNaN(anguloy) || anguloy == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.trapezio.anguloy.focus();
		  document.trapezio.anguloy.select();  
	  return false;
   }  
	
   try {
   var anguloy = document.getElementById("resposta").value = roundNumber(anguloy, 2);     
   var anguloβ = 180 - anguloy;
   var anguloβ = document.getElementById("resposta").value = roundNumber(anguloβ, 2);    
	 
	 document.getElementById('resposta').innerHTML = "<hr><div style='line-height: 20px;'>O ângulo β é: <br> β = 180° − γ <br>  β = 180° − "+anguloy+"° <br>  β =  <a1 style='color: #FF0000'> "+anguloβ+"</a1><a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>° </a1>  </div><hr><h1 class='logomarca'> JPP </h1> ";
	 
	  document.trapezio.anguloy.focus();
	  document.trapezio.anguloy.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  }
  
  
  
  /***######################################     PARALELEPÍPEDO    ################################################      **/
  
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
	  
  /** ******************************   Área total:   A = 2.(ab + ac +b.c)   *****************************  **/  
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
  
  /** ******************************   Diagonal do PARALELEPÍPEDO:   D = √(a² + b² + c²)   *****************************  **/  
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
  
  /** ******************************   Diagonal do base:   d = √(a² + b²)   *****************************  **/  
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
  
  /** ******************************   área do base:   a_b = a . b   *****************************  **/  
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
	  
  /** ************************  Comprimento em função da área:   a = (A - 2ab)/2(b+c)  *********************  **/  
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
			  
	  
  /** ************************  Largura em função da área:   b = (A - 2ac)/2(a+c)  *********************  **/  
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
			  
  /** ************************  Altura em função da área:   c = (A - 2ab)/2(a+b)  *********************  **/  
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
	  alert("Escolha uma opção para Calcular!");
	 } 	
	  
	var a = document.forms["paralelepipedo"]["paralelepipedo_type"].value;
	/** ************************************   PARALELEPÍPEDO: Volume:   V = a.b.c  ****************************************  **/  
	if (a === "volume") { 
	  var comprimentoa = eval(document.paralelepipedo.comprimentoa.value.replace(",",".").replace(/ /g,"")); 
	  var largurab = eval(document.paralelepipedo.largurab.value.replace(",",".").replace(/ /g,"")); 
	  var alturac = eval(document.paralelepipedo.alturac.value.replace(",",".").replace(/ /g,"")); 	
	
	   if ((comprimentoa < 0) || isNaN(comprimentoa) || comprimentoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.paralelepipedo.comprimentoa.focus();
		  document.paralelepipedo.comprimentoa.select();  
	  return false;
   }   
	   if ((largurab < 0) || isNaN(largurab) || largurab == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.paralelepipedo.largurab.focus();
		  document.paralelepipedo.largurab.select();  
	  return false;
   }  
	   if ((alturac < 0) || isNaN(alturac) || alturac == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	
	 document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 22px;'>O volume do paralelepípedo é: <br> V = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>b</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>c</a1>  <br>   V =  "+comprimentoa+" ∙ "+largurab+" ∙ "+alturac+" <br> V =  <a1 style='color: #FF0000'> "+Volumeparalelepipedo+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u³</a1>  </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.paralelepipedo.comprimentoa.focus();
	  document.paralelepipedo.comprimentoa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
	/** ************************************  PARALELEPÍPEDO: Área total:   A = 2.(a.b + a.c +b.c) ***************************  **/  
	if (a === "areatotal") {
	  var comprimentoa = eval(document.paralelepipedo.comprimentoa.value.replace(",",".").replace(/ /g,"")); 
	  var largurab = eval(document.paralelepipedo.largurab.value.replace(",",".").replace(/ /g,"")); 
	  var alturac = eval(document.paralelepipedo.alturac.value.replace(",",".").replace(/ /g,"")); 	
	
	   if ((comprimentoa < 0) || isNaN(comprimentoa) || comprimentoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.paralelepipedo.comprimentoa.focus();
		  document.paralelepipedo.comprimentoa.select();  
	  return false;
   }   
	   if ((largurab < 0) || isNaN(largurab) || largurab == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.paralelepipedo.largurab.focus();
		  document.paralelepipedo.largurab.select();  
	  return false;
   }  
	   if ((alturac < 0) || isNaN(alturac) || alturac == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
   
	 document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>A área total do paralelepípedo é: <br> A = 2 ∙(<a1 style='font-family: times new roman; font-style:italic;'>a∙b</a1> + <a1 style='font-family: times new roman; font-style:italic;'>a∙c</a1> + <a1 style='font-family: times new roman; font-style:italic;'>b∙c</a1>)  <br>   A = 2∙("+comprimentoa+"∙"+largurab+"  +  "+comprimentoa+"∙"+alturac+"  + "+largurab+"∙"+alturac+")  <br> A =   <a1 style='color: #FF0000'> "+Volumeparalelepipedo+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>  </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.paralelepipedo.comprimentoa.focus();
	  document.paralelepipedo.comprimentoa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
	/** *****************************  Diagonal do PARALELEPÍPEDO:   D = √(a² + b² + c²)  *********************************  **/  
	if (a === "diagonalparalelepipedo") { 
	  var comprimentoa = eval(document.paralelepipedo.comprimentoa.value.replace(",",".").replace(/ /g,"")); 
	  var largurab = eval(document.paralelepipedo.largurab.value.replace(",",".").replace(/ /g,"")); 
	  var alturac = eval(document.paralelepipedo.alturac.value.replace(",",".").replace(/ /g,"")); 	
	
	   if ((comprimentoa < 0) || isNaN(comprimentoa) || comprimentoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.paralelepipedo.comprimentoa.focus();
		  document.paralelepipedo.comprimentoa.select();  
	  return false;
   }   
	   if ((largurab < 0) || isNaN(largurab) || largurab == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.paralelepipedo.largurab.focus();
		  document.paralelepipedo.largurab.select();  
	  return false;
   }  
	   if ((alturac < 0) || isNaN(alturac) || alturac == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
   
	 document.getElementById('resposta').innerHTML ="<hr>  A diagonal do paralelepípedo é: <br><div style='line-height: 24px;'> D =  √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'><a1 style='font-family: times new roman; font-style:italic;'>a</a1>² + <a1 style='font-family: times new roman; font-style:italic;'>b</a1>² + <a1 style='font-family: times new roman; font-style:italic;'>c</a1>²</a1>  <br> D = √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>("+comprimentoa+")² + ("+largurab+")² + ("+alturac+")²</a1>  <br>  D = √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>"+diagonalparalelepipedo1+" + "+diagonalparalelepipedo2+" + "+diagonalparalelepipedo3+"</a1>  <br>  D = √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>"+diagonalparalelepipedo4+" </a1>  <br>  D =   <a1 style='color: #FF0000'> "+diagonalparalelepipedo+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.paralelepipedo.comprimentoa.focus();
	  document.paralelepipedo.comprimentoa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
	/** ********************************    Diagonal do base:   d = √(a² + b²) ****************************************  **/  
	if (a === "diagonalbase") { 
	  var comprimentoa = eval(document.paralelepipedo.comprimentoa.value.replace(",",".").replace(/ /g,"")); 
	  var largurab = eval(document.paralelepipedo.largurab.value.replace(",",".").replace(/ /g,"")); 
	
	   if ((comprimentoa < 0) || isNaN(comprimentoa) || comprimentoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.paralelepipedo.comprimentoa.focus();
		  document.paralelepipedo.comprimentoa.select();  
	  return false;
   }   
	   if ((largurab < 0) || isNaN(largurab) || largurab == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
   
	 document.getElementById('resposta').innerHTML ="<hr> A diagonal <a1 style='font-family: times new roman; font-style:italic;'>d</a1> da base é: <br><div style='line-height: 25px;'> <a1 style='font-family: times new roman; font-style:italic;'>d</a1> =  √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'><a1 style='font-family: times new roman; font-style:italic;'>a</a1>² + <a1 style='font-family: times new roman; font-style:italic;'>b</a1>² </a1>  <br> <a1 style='font-family: times new roman; font-style:italic;'>d</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>("+comprimentoa+")² + ("+largurab+")² </a1>  <br>  <a1 style='font-family: times new roman; font-style:italic;'>d</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>"+diagonalbase1+" + "+diagonalbase2+" </a1>  <br>  <a1 style='font-family: times new roman; font-style:italic;'>d</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>"+diagonalbase4+" </a1>  <br>  <a1 style='font-family: times new roman; font-style:italic;'>d</a1> =   <a1 style='color: #FF0000'> "+diagonalbase+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.paralelepipedo.comprimentoa.focus();
	  document.paralelepipedo.comprimentoa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
   /** ***************************************    área do base:   a_b = a . b  ****************************************  **/  
	if (a === "areabase") {
	  var comprimentoa = eval(document.paralelepipedo.comprimentoa.value.replace(",",".").replace(/ /g,"")); 
	  var largurab = eval(document.paralelepipedo.largurab.value.replace(",",".").replace(/ /g,"")); 
	
	   if ((comprimentoa < 0) || isNaN(comprimentoa) || comprimentoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.paralelepipedo.comprimentoa.focus();
		  document.paralelepipedo.comprimentoa.select();  
	  return false;
   }   
	   if ((largurab < 0) || isNaN(largurab) || largurab == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.paralelepipedo.largurab.focus();
		  document.paralelepipedo.largurab.select();  
	  return false;
   }  
  
   try {
   var comprimentoa = document.getElementById("resposta").value = roundNumber(comprimentoa, 2);	
   var largurab = document.getElementById("resposta").value = roundNumber(largurab, 2);	    
   var areabase = comprimentoa * largurab ;
   var areabase = document.getElementById("resposta").value = roundNumber(areabase, 2);	 
   
	 document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>A área da base é: <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>b</a1> <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> = "+comprimentoa+" ∙ "+largurab+"  <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1>  =  <a1 style='color: #FF0000'> "+areabase+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>  </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
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
	
	   if ((volume < 0) || isNaN(volume) || volume == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.paralelepipedo.volume.focus();
		  document.paralelepipedo.volume.select();  
	  return false;
   }   
	   if ((largurab < 0) || isNaN(largurab) || largurab == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.paralelepipedo.largurab.focus();
		  document.paralelepipedo.largurab.select();  
	  return false;
   }  
	   if ((alturac < 0) || isNaN(alturac) || alturac == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	
	 document.getElementById('resposta').innerHTML ="<hr> O comprimento <a1 style='font-family: times new roman; font-style:italic;'>a</a1> é: <br> V = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>b</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>c</a1>  <br>   "+volume+" = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> ∙ "+largurab+" ∙ "+alturac+" <br>  "+volume+" = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> ∙ "+comprimentoa1+" <br>    <div style='line-height: 15px;'>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+volume+" </td></tr><tr><td style='text-align:center;'> "+comprimentoa1+" </td></tr></tbody></table> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = <a1 style='color: #FF0000'> "+comprimentoa+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>    </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
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
	
	   if ((volume < 0) || isNaN(volume) || volume == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.paralelepipedo.volume.focus();
		  document.paralelepipedo.volume.select();  
	  return false;
   }   
	   if ((comprimentoa < 0) || isNaN(comprimentoa) || comprimentoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.paralelepipedo.comprimentoa.focus();
		  document.paralelepipedo.comprimentoa.select();  
	  return false;
   }  
	   if ((alturac < 0) || isNaN(alturac) || alturac == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	
	 document.getElementById('resposta').innerHTML ="<hr> A largura <a1 style='font-family: times new roman; font-style:italic;'>b</a1> é: <br> V = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>b</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>c</a1>  <br>  "+volume+" = "+comprimentoa+" ∙ <a1 style='font-family: times new roman; font-style:italic;'>b</a1> ∙ "+alturac+" <br>  "+volume+" = "+largura1+" ∙ <a1 style='font-family: times new roman; font-style:italic;'>b</a1> <br> <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+volume+" </td></tr><tr><td style='text-align:center;'> "+largura1+" </td></tr></tbody></table> </div>  <a1 style='font-family: times new roman; font-style:italic;'>b</a1> = <a1 style='color: #FF0000'> "+largura+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1> <hr><h1 class='logomarca'> JPP </h1>   " 
	 
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
	
	   if ((volume < 0) || isNaN(volume) || volume == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.paralelepipedo.volume.focus();
		  document.paralelepipedo.volume.select();  
	  return false;
   }   
	   if ((comprimentoa < 0) || isNaN(comprimentoa) || comprimentoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.paralelepipedo.comprimentoa.focus();
		  document.paralelepipedo.comprimentoa.select();  
	  return false;
   }  
	   if ((largurab < 0) || isNaN(largurab) || largurab == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	
	 document.getElementById('resposta').innerHTML ="<hr> A altura <a1 style='font-family: times new roman; font-style:italic;'>c</a1> é: <br>   <div style='line-height: 23px;'> V = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>b</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>c</a1>  <br> "+volume+" = "+comprimentoa+" ∙ "+largurab+" ∙ c <br> "+volume+" = "+altura1+" ∙ c <br> <div style='line-height: 16px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>c</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+volume+" </td></tr><tr><td style='text-align:center;'> "+altura1+" </td></tr></tbody></table>  </div> <a1 style='font-family: times new roman; font-style:italic;'>c</a1> = <a1 style='color: #FF0000'> "+altura+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  <hr><h1 class='logomarca'> JPP </h1> " 
	 
	  document.paralelepipedo.comprimentoa.focus();
	  document.paralelepipedo.comprimentoa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** ************************  Comprimento em função da área:   a = (A - 2.a.b)/2(b+c)  *********************  **/  
	if (a === "comprimentoaa2") { 
	  var area = eval(document.paralelepipedo.area.value.replace(",",".").replace(/ /g,"")); 
	  var alturac = eval(document.paralelepipedo.alturac.value.replace(",",".").replace(/ /g,"")); 
	  var largurab = eval(document.paralelepipedo.largurab.value.replace(",",".").replace(/ /g,"")); 	
	
	   if ((area < 0) || isNaN(area) || area == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.paralelepipedo.area.focus();
		  document.paralelepipedo.area.select();  
	  return false;
   }   
	   if ((alturac < 0) || isNaN(alturac) || alturac == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.paralelepipedo.alturac.focus();
		  document.paralelepipedo.alturac.select();  
	  return false;
   }  
	   if ((largurab < 0) || isNaN(largurab) || largurab == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	
	 document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 16px;'>O comprimento <a1 style='font-family: times new roman; font-style:italic;'>a</a1> é: <br> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> − 2 ∙ <a1 style='font-family: times new roman; font-style:italic;'>b</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>c</a1> </td></tr><tr><td style='text-align:center;'> 2 ∙ (<a1 style='font-family: times new roman; font-style:italic;'>b</a1> + <a1 style='font-family: times new roman; font-style:italic;'>c</a1>) </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+area+" − 2 ∙ "+largurab+" ∙ "+alturac+" </td></tr><tr><td style='text-align:center;'> 2 ∙ ("+largurab+" + "+alturac+") </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+area+" − "+comprimentoa1+" </td></tr><tr><td style='text-align:center;'> "+comprimentoa2+" </td></tr></tbody></table>      <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+comprimentoa3+" </td></tr><tr><td style='text-align:center;'> "+comprimentoa2+" </td></tr></tbody></table>    </div>  <a1 style='font-family: times new roman; font-style:italic;'>a</a1> =  <a1 style='color: #FF0000'> "+comprimentoa+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1><hr><h1 class='logomarca'> JPP </h1> " 
	 
	  document.paralelepipedo.largurab.focus();
	  document.paralelepipedo.largurab.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
	  
  /** ************************  Largura em função da área:   b = (A - 2ac)/2(a+c)  *********************  **/  
	if (a === "largurabb2") { 
	  var comprimentoa = eval(document.paralelepipedo.comprimentoa.value.replace(",",".").replace(/ /g,"")); 
	  var area = eval(document.paralelepipedo.area.value.replace(",",".").replace(/ /g,"")); 
	  var alturac = eval(document.paralelepipedo.alturac.value.replace(",",".").replace(/ /g,"")); 	
	
	   if ((comprimentoa < 0) || isNaN(comprimentoa) || comprimentoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.paralelepipedo.comprimentoa.focus();
		  document.paralelepipedo.comprimentoa.select();  
	  return false;
   }   
	   if ((area < 0) || isNaN(area) || area == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.paralelepipedo.area.focus();
		  document.paralelepipedo.area.select();  
	  return false;
   }  
	   if ((alturac < 0) || isNaN(alturac) || alturac == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	
	 document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 16px;'>O comprimento <a1 style='font-family: times new roman; font-style:italic;'>b</a1> é: <br>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> − 2 ∙ <a1 style='font-family: times new roman; font-style:italic;'>a</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>c</a1> </td></tr><tr><td style='text-align:center;'> 2 ∙ (<a1 style='font-family: times new roman; font-style:italic;'>a</a1> + <a1 style='font-family: times new roman; font-style:italic;'>c</a1>) </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+area+" − 2 ∙ "+comprimentoa+" ∙ "+alturac+" </td></tr><tr><td style='text-align:center;'>  2 ∙ ("+comprimentoa+" + "+alturac+")</td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+area+" − "+comprimentoa1+" </td></tr><tr><td style='text-align:center;'>  "+comprimentoa1+"</td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+comprimentoa3+" </td></tr><tr><td style='text-align:center;'> "+comprimentoa1+" </td></tr></tbody></table>  </div> <a1 style='font-family: times new roman; font-style:italic;'>b</a1> = <a1 style='color: #FF0000'> "+comprimentoaa+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  <hr><h1 class='logomarca'> JPP </h1> " 
	 
	  document.paralelepipedo.comprimentoa.focus();
	  document.paralelepipedo.comprimentoa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** ************************  Altura em função da área:   c = (A - 2ab)/2(a+b)  *********************  **/  
	if (a === "alturacc2") {
	  var comprimentoa = eval(document.paralelepipedo.comprimentoa.value.replace(",",".").replace(/ /g,"")); 
	  var area = eval(document.paralelepipedo.area.value.replace(",",".").replace(/ /g,"")); 
	  var largurab = eval(document.paralelepipedo.largurab.value.replace(",",".").replace(/ /g,"")); 	
	
	   if ((comprimentoa < 0) || isNaN(comprimentoa) || comprimentoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.paralelepipedo.comprimentoa.focus();
		  document.paralelepipedo.comprimentoa.select();  
	  return false;
   }   
	   if ((area < 0) || isNaN(area) || area == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.paralelepipedo.area.focus();
		  document.paralelepipedo.area.select();  
	  return false;
   }  
	   if ((largurab < 0) || isNaN(largurab) || largurab == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	
	 document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 16px;'>O comprimento <a1 style='font-family: times new roman; font-style:italic;'>c</a1> é: <br>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>c</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> − 2 ∙ <a1 style='font-family: times new roman; font-style:italic;'>a</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>b</a1> </td></tr><tr><td style='text-align:center;'> 2 ∙ (<a1 style='font-family: times new roman; font-style:italic;'>a</a1> + <a1 style='font-family: times new roman; font-style:italic;'>b</a1>) </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>c</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+area+" − 2 ∙ "+comprimentoa+" ∙ "+largurab+" </td></tr><tr><td style='text-align:center;'> 2 ∙ ("+comprimentoa+" + "+largurab+") </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>c</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+area+" − "+comprimentoa1+" </td></tr><tr><td style='text-align:center;'> "+comprimentoa1+" </td></tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>c</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+comprimentoa3+" </td></tr><tr><td style='text-align:center;'> "+comprimentoa1+" </td></tr></tbody></table>   </div>  <a1 style='font-family: times new roman; font-style:italic;'>c</a1>  = <a1 style='color: #FF0000'> "+comprimentoaa+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1> <hr><h1 class='logomarca'> JPP </h1> " 
	 
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
  /** ******************************  VOLUME (V = a³ )  *****************************  **/  
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
	  
  /** ******************************  Área total (A = 6 . a² )  *****************************  **/  
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
  
	  /** ****************************** Diagonal D do cubo (D = a . √3 )  *****************************  **/  
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
	  
  
	  /** ****************************** Diagonal d da base (d = a . √2 )  *****************************  **/  
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
		  
	  /** ****************************** Aresta a em função do volume: (a = √V )  *****************************  **/  
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
	  
  /** ****************************** Aresta a em função da área: (a = √(V/6) )  *****************************  **/  
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
	  
  /** ****************************** Aresta a em função da Diagonal D: (a = (√3.D)/3) )  *****************************  **/  
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
  
  
  /** ****************************** Aresta a em função da Diagonal d: (a = (√2.d)/2) )  *****************************  **/  
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
	  alert("Escolha uma opção para Calcular!");
	 }
	  
	var a = document.forms["cubo"]["cubo_type"].value;
	/** *****************************************************  VOLUME (V = a³ )    ****************************************  **/  
	if (a === "volume") { 
	  var arestaa = eval(document.cubo.arestaa.value.replace(",",".").replace(/ /g,"")); 
	
	   if ((arestaa < 0) || isNaN(arestaa) || arestaa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.cubo.arestaa.focus();
		  document.cubo.arestaa.select();  
	  return false;
   }   
   
   try {
   var arestaa = document.getElementById("resposta").value = roundNumber(arestaa, 2);  
   var volume = arestaa * arestaa * arestaa;
   var volume = document.getElementById("resposta").value = roundNumber(volume, 2);  
	
	 document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 22px;'>O volume do cubo é: <Br>  V = <a1 style='font-family: times new roman; font-style:italic;'>a</a1>³ = ("+arestaa+")³ <br>  V = <a1 style='color: #FF0000'> "+volume+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u³</a1>      </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.cubo.arestaa.focus();
	  document.cubo.arestaa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   
	/** ********************************************   Área total (A = 6 . a² )    ****************************************  **/  
	if (a === "areatotal") { 
	  var arestaa = eval(document.cubo.arestaa.value.replace(",",".").replace(/ /g,"")); 
	
	   if ((arestaa < 0) || isNaN(arestaa) || arestaa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	
	 document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>A área total do cubo é: <Br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = 6 ∙ <a1 style='font-family: times new roman; font-style:italic;'>a</a1>² = 6 ∙ ("+arestaa +")² <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> =  6 ∙ "+areatotal2+" <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = <a1 style='color: #FF0000'> "+areatotal+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>   </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.cubo.arestaa.focus();
	  document.cubo.arestaa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
	/** ********************************************  Diagonal D do cubo (D = a . √3 )    ****************************************  **/  
	if (a === "diagonalcubo") {
	  var arestaa = eval(document.cubo.arestaa.value.replace(",",".").replace(/ /g,"")); 
	
	   if ((arestaa < 0) || isNaN(arestaa) || arestaa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.cubo.arestaa.focus();
		  document.cubo.arestaa.select();  
	  return false;
   } 
	
   try {
   var arestaa = document.getElementById("resposta").value = roundNumber(arestaa, 2);     
   var diagonalcubo = arestaa * Math.sqrt(3);
   var diagonalcubo = document.getElementById("resposta").value = roundNumber(diagonalcubo, 2);  
	
	 document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>A diagonal D do cubo é: <Br>  D = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> &nbsp; = &nbsp;"+arestaa+" ∙ 1,73  <br>  D = <a1 style='color: #FF0000'> "+diagonalcubo+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1> <br> ou <br> D = <a1 style='color: #FF0000'> "+arestaa+"√<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1></a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>   </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.cubo.arestaa.focus();
	  document.cubo.arestaa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }	
	  
	   
  /** ********************************************  Diagonal d da base (d = a . √2 )    ****************************************  **/  
	if (a === "diagonalbase") { 
	  var arestaa = eval(document.cubo.arestaa.value.replace(",",".").replace(/ /g,"")); 
	
	   if ((arestaa < 0) || isNaN(arestaa) || arestaa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.cubo.arestaa.focus();
		  document.cubo.arestaa.select();  
	  return false;
   }   
	
   try {
   var arestaa = document.getElementById("resposta").value = roundNumber(arestaa, 2);      
   var diagonalbase = arestaa * Math.sqrt(2);
   var diagonalbase = document.getElementById("resposta").value = roundNumber(diagonalbase, 2);   
	
	 document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>A diagonal <a1 style='font-family: times new roman; font-style:italic;'>d</a1> da base do cubo é: <Br>  <a1 style='font-family: times new roman; font-style:italic;'>d</a1> = <a1 style='font-family: times new roman; font-style:italic;'>a</a1> ∙ √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>2</a1> &nbsp; = &nbsp;"+arestaa+" ∙ 1,41  <br>   <a1 style='font-family: times new roman; font-style:italic;'>d</a1> = <a1 style='color: #FF0000'> "+diagonalbase+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1> <br> ou <br> <a1 style='font-family: times new roman; font-style:italic;'>d</a1> = <a1 style='color: #FF0000'> "+arestaa+"√<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>2</a1></a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>   </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.cubo.arestaa.focus();
	  document.cubo.arestaa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
  /** ****************************** Aresta a em função do volume: (a = √V )  *****************************  **/  
	if (a === "aresta1") {
	  var volume = eval(document.cubo.volume.value.replace(",",".").replace(/ /g,"")); 
	
	   if ((volume < 0) || isNaN(volume) || volume == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.cubo.volume.focus();
		  document.cubo.volume.select();  
	  return false;
   } 
  
   try {
   var volume = document.getElementById("resposta").value = roundNumber(volume, 2);    
   var aresta1 =  Math.pow(volume, 1/3);
   var aresta1 = document.getElementById("resposta").value = roundNumber(aresta1, 3);  
   
	 document.getElementById('resposta').innerHTML ="<hr>  A aresta <a1 style='font-family: times new roman; font-style:italic;'>a</a1> do cubo é: <Br> <div style='line-height: 22px;'>  V = <a1 style='font-family: times new roman; font-style:italic;'>a</a1>³ <br>  "+volume+" = <a1 style='font-family: times new roman; font-style:italic;'>a</a1>³ <br>  <a1 style='font-family: times new roman; font-style:italic;'>a</a1>  = ³√<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>"+volume+"</a1>  <br> <a1 style='font-family: times new roman; font-style:italic;'>a</a1>  =  <a1 style='color: #FF0000'> "+aresta1+"</a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>   </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.cubo.volume.focus();
	  document.cubo.volume.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** ****************************** Aresta a em função da área: (a = √(V/6) )  *****************************  **/  
	if (a === "aresta2") { 
	  var area = eval(document.cubo.area.value.replace(",",".").replace(/ /g,"")); 
	
	   if ((area < 0) || isNaN(area) || area == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	
	 document.getElementById('resposta').innerHTML ="<hr> A aresta <a1 style='font-family: times new roman; font-style:italic;'>a</a1> do cubo é: <Br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = 6 ∙ <a1 style='font-family: times new roman; font-style:italic;'>a</a1>²   <br> "+area+" = 6 ∙ <a1 style='font-family: times new roman; font-style:italic;'>a</a1>² <br> <div style='line-height: 15px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> "+area+"  </td><td rowspan='2'> &nbsp;=&nbsp; <a1 style='font-family: times new roman; font-style:italic;'>a</a1>² </td></tr><tr><td> 6 </td> </tr></tbody></table> </div> "+aresta3+" = <a1 style='font-family: times new roman; font-style:italic;'>a</a1>² <br>  <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>"+aresta3+"</a1> <br>  <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = <a1 style='color: #FF0000'> "+aresta2+"</a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  <hr><h1 class='logomarca'> JPP </h1>  " 
	 
	  document.cubo.area.focus();
	  document.cubo.area.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** ****************************** Aresta a em função da Diagonal D: (a = (√3.D)/3) )  *****************************  **/  
	if (a === "aresta3") { 
	  var Diagonald = eval(document.cubo.Diagonald.value.replace(",",".").replace(/ /g,"")); 
	
	   if ((Diagonald< 0) || isNaN(Diagonald) || Diagonald == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	
	 document.getElementById('resposta').innerHTML ="<hr>  A aresta <a1 style='font-family: times new roman; font-style:italic;'>a</a1> do cubo é: <Br><div style='line-height: 15px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'><a1 style='font-family: times new roman; font-style:italic;'>a</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'>√<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1> ∙ D </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> 1,73 ∙ "+Diagonald+" </td></tr> <tr> <td> 3</td><td> 3 </td> </tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+aresta4+" </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table> </div> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> &nbsp; = &nbsp; <a1 style='color: #FF0000'> "+aresta3+"</a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman; font-style:italic;'>u</a1> <br>     ou <br>  <a1 style='font-family: times new roman; font-style:italic;'>a</a1> &nbsp;=  <a1 style='color: #FF0000'> "+aresta5+"√<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>3</a1></a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman; font-style:italic;'>u</a1>  <hr><h1 class='logomarca'> JPP </h1> " 
	 
	  document.cubo.Diagonald.focus();
	  document.cubo.Diagonald.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** ****************************** Aresta a em função da Diagonal d: (a = (√2.d)/2) )  *****************************  **/  
	if (a === "aresta4") { 
	  var Diagonald1 = eval(document.cubo.Diagonald1.value.replace(",",".").replace(/ /g,"")); 
	
	   if ((Diagonald1< 0) || isNaN(Diagonald1) || Diagonald1 == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	
	 document.getElementById('resposta').innerHTML =" <hr> A aresta <a1 style='font-family: times new roman; font-style:italic;'>a</a1> do cubo é: <Br> <div style='line-height: 15px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'><a1 style='font-family: times new roman; font-style:italic;'>a</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'>√<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>2</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>d</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'>1,41 ∙ "+Diagonald1+"</td></tr> <tr> <td>2</td><td>2</td> </tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+aresta4+" </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>  </div> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> = <a1 style='color: #FF0000'> "+aresta3+"</a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman; font-style:italic;'>u</a1> <br>  ou <br>  <a1 style='font-family: times new roman; font-style:italic;'>a</a1> &nbsp;=  <a1 style='color: #FF0000'> "+aresta5+"√<a1 style='width:100%; height:100%; border-top:solid 1.1px;'>2</a1></a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman; font-style:italic;'>u</a1> <hr><h1 class='logomarca'> JPP </h1> " 
	 
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
  
  /** ***************************   AREA da base (A =(n.a².cotg PI/n)/4   ***********************  **/  
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
	  
  /** *************************   Área lateral (AL = n . a . h   ***********************  **/  
   if (a === "arealateral") {
	  document.getElementById("areabase").disabled = true;
	  document.getElementById("areabase").value ="";		 
	  document.getElementById("altura").disabled = false;
	   document.getElementById("ladoa").disabled = false;		
	   document.getElementById("ladosn").disabled = false;	
   }
   try { 	}
	   catch(e) {alert(e)}	
	  
  /** *************************   Área Total (At = A(base) . A(lateral)   ***********************  **/  
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
  
  /** ************************   Área Total Prisma irregular (At = A(base) . A(lateral)   ***********************  **/  
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
	  alert("Escolha uma opção para Calcular!");
	 }	
	  
	var a = document.forms["prisma"]["prisma_type"].value;
	/** *******************************  Cálculdo da área da base: A =(n.a².cotg PI/n)/4  *****************************  **/  
	if (a === "areabase") { 
	  var ladoa = eval(document.prisma.ladoa.value.replace(",",".").replace(/ /g,""));
	  var ladosn = eval(document.prisma.ladosn.value.replace(",",".").replace(/ /g,""));	
	
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.prisma.ladoa.focus();
		  document.prisma.ladoa.select();  
	  return false;
   } 
	   if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("Não existe polígono menor de 3 lados!! e/ou digite um/os valor(es) numérico(s) maior do que 2!!");
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
   
	 document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 16px;'>A área da base do prisma regular reto de <a1 style='color: #FF0000'>"+ladosn+"</a1> lados é: <br> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>a</a1><a1 style='font-size: 21px; font-family: times new roman;'>²</a1> ∙ cotg(180°/<a1 style='font-family: times new roman; font-style:italic;'>n</a1>) </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladosn+" ∙ ("+ladoa+")<a1 style='font-size: 21px; font-family: times new roman;'>²</a1> ∙ cotg(180°/"+ladosn+") </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladosn+" ∙ "+Res3+" ∙ cotg("+Res4+")° </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>"+Res1+" ∙ "+Res2+" </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table> A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> = <a1 style='color: #FF0000'> "+areadabaseprisma+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>  </div><hr><h1 class='logomarca'> JPP </h1>"   
	 
	  document.prisma.ladosn.focus();
	  document.prisma.ladosn.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
	/** **************************************  Área lateral (AL = n . a . h)   ****************************************  **/  
	if (a === "arealateral") { 
	  var ladoa = eval(document.prisma.ladoa.value.replace(",",".").replace(/ /g,""));
	  var ladosn = eval(document.prisma.ladosn.value.replace(",",".").replace(/ /g,""));	
	  var altura = eval(document.prisma.altura.value.replace(",",".").replace(/ /g,""));		
	
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.prisma.ladoa.focus();
		  document.prisma.ladoa.select();  
	  return false;
   } 
	   if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("Não existe polígono menor de 3 lados!! e/ou digite um/os valor(es) numérico(s) maior do que 2!!");
		  document.prisma.ladosn.focus();
		  document.prisma.ladosn.select();  
	  return false;
   }  
	   if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
   
	 document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 22px;'>A área lateral do prisma regular reto de <a1 style='color: #FF0000'>"+ladosn.toFixed(0)+"</a1> lados é: <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = <a1 style='font-family: times new roman; font-style:italic;'>n</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>a</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1>  <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = "+ladosn+" ∙ "+ladoa+" ∙ "+altura+" <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = <a1 style='color: #FF0000'> "+arealateralprisma+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>  </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.prisma.ladosn.focus();
	  document.prisma.ladosn.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
	/** **********************************  Área Total (At = A(base) . A(lateral)    ********************************  **/  
	if (a === "areatotal") { 
	  var ladoa = eval(document.prisma.ladoa.value.replace(",",".").replace(/ /g,""));
	  var ladosn = eval(document.prisma.ladosn.value.replace(",",".").replace(/ /g,""));	
	  var altura = eval(document.prisma.altura.value.replace(",",".").replace(/ /g,""));		
	
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.prisma.ladoa.focus();
		  document.prisma.ladoa.select();  
	  return false;
   } 
	   if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("Não existe polígono menor de 3 lados!! e/ou digite um/os valor(es) numérico(s) maior do que 2!!");
		  document.prisma.ladosn.focus();
		  document.prisma.ladosn.select();  
	  return false;
   }  
	   if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
   
	 document.getElementById('resposta').innerHTML ="<hr>  A área da base do prisma regular reto de <a1 style='color: #FF0000'>"+ladosn+"</a1> lados é: <br> <div style='line-height: 15px;'><table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>a</a1><a1 style='font-size: 21px; font-family: times new roman;'>²</a1> ∙ cotg(180°/<a1 style='font-family: times new roman; font-style:italic;'>n</a1>) </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladosn+" ∙ ("+ladoa+")<a1 style='font-size: 21px; font-family: times new roman;'>²</a1> ∙ cotg(180°/"+ladosn+") </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladosn+" ∙ "+Res3+" ∙ cotg("+Res4+")° </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+Res1+" ∙ "+Res2+"</td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table> A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> = <a1 style='color: #FF0000'> "+areadabaseprisma+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>   <br> <br> </div> A área lateral do prisma regular reto de <a1 style='color: #FF0000'>"+ladosn+"</a1> lados é: <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = <a1 style='font-family: times new roman; font-style:italic;'>n</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>a</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1>  = "+ladosn+" ∙ "+ladoa+" ∙ "+altura+" <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = <a1 style='color: #FF0000'> "+arealateralprisma+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>   <br> <br> A área total do prisma regular reto de <a1 style='color: #FF0000'>"+ladosn+"</a1> lados é: <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> + 2 ∙ A<a1 style='font-size: 10px; font-family: times new roman;'>(Base)</a1>  <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> =  "+arealateralprisma+" + 2 ∙ "+areadabaseprisma+" <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> =  "+arealateralprisma+" + "+areatotalprisma2+" <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> =  <a1 style='color: #FF0000'> "+areatotalprisma+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>  <hr><h1 class='logomarca'> JPP </h1> " 
	 
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
	
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.prisma.ladoa.focus();
		  document.prisma.ladoa.select();  
	  return false;
   } 
	   if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("Não existe polígono menor de 3 lados!! e/ou digite um/os valor(es) numérico(s) maior do que 2!!");
		  document.prisma.ladosn.focus();
		  document.prisma.ladosn.select();  
	  return false;
   }  
	   if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
   
	 document.getElementById('resposta').innerHTML ="<hr>  O volume do prisma regular reto de <a1 style='color: #FF0000'>"+ladosn+"</a1> arestas na base é: <br> <div style='line-height: 14px;'> V = A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> V &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>a</a1><a1 style='font-size: 21px; font-family: times new roman;'>²</a1> ∙ cotg(180°/<a1 style='font-family: times new roman; font-style:italic;'>n</a1>) </td>  <td rowspan='2'> &nbsp;∙&nbsp; </td>  <td rowspan='2'><a1 style='font-family: times new roman; font-style:italic;'>h</a1>  </td></tr> <tr> <td> 4 </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> V &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+ladosn+" ∙ ("+ladoa+")<a1 style='font-size: 21px; font-family: times new roman;'>²</a1> ∙ cotg(180°/"+ladosn+") </td>  <td rowspan='2'> &nbsp;∙&nbsp; </td>  <td rowspan='2'>"+altura+" </td></tr> <tr> <td> 4 </td> </tr></tbody></table><table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> V &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+ladosn+" ∙ "+Res3+" ∙ cotg("+Res4+")° </td>  <td rowspan='2'> &nbsp;∙&nbsp; </td>  <td rowspan='2'>"+altura+" </td></tr> <tr> <td> 4 </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> V &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+Res1+" ∙ "+Res2+" </td>  <td rowspan='2'> &nbsp;∙&nbsp; </td>  <td rowspan='2'>"+altura+" </td></tr> <tr> <td> 4 </td> </tr></tbody></table> </div> V = <a1 style='color: #FF0000'> "+areadabaseprisma+"</a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u³</a1>  <hr><h1 class='logomarca'> JPP </h1> " 
	 
	  document.prisma.ladoa.focus();
	  document.prisma.ladoa.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** *******************************************   Área Total Prima irregular (At = A(base) . A(lateral)   ***********************  **/  
	if (a === "Prismairregularareatotal") { 
	  var ladoa = eval(document.prisma.ladoa.value.replace(",",".").replace(/ /g,""));
	  var ladosn = eval(document.prisma.ladosn.value.replace(",",".").replace(/ /g,""));	
	  var altura = eval(document.prisma.altura.value.replace(",",".").replace(/ /g,""));		
	  var areabase = eval(document.prisma.areabase.value.replace(",",".").replace(/ /g,""));
	  
	   if ((ladoa < 0) || isNaN(ladoa) || ladoa == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.prisma.ladoa.focus();
		  document.prisma.ladoa.select();  
	  return false;
   } 
	   if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("Não existe polígono menor de 3 lados!! e/ou digite um/os valor(es) numérico(s) maior do que 2!!");
		  document.prisma.ladosn.focus();
		  document.prisma.ladosn.select();  
	  return false;
   }  
	   if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.prisma.altura.focus();
		  document.prisma.altura.select();  
	  return false;
   }   
	   if ((areabase < 0) || isNaN(areabase) || areabase == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
   
	 document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>A área total do prisma irregular reto de <a1 style='color: #FF0000'>"+ladosn+"</a1> lados na base é: <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1>  = 2 ∙ A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> + A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1>  <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1>  = 2 ∙ "+areabase+" + <a1 style='font-family: times new roman; font-style:italic;'>n</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>a</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1>  = 2 ∙ "+areabase+" + "+ladosn+" ∙ "+ladoa+" ∙ "+altura+"  <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = "+Res1+" + "+arealateralprisma+" <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1>  = <a1 style='color: #FF0000'> "+areadabaseprisma+"</a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>  </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
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
	  
	   if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.prisma.altura.focus();
		  document.prisma.altura.select();  
	  return false;
   }   
	   if ((areabase < 0) || isNaN(areabase) || areabase == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.prisma.areabase.focus();
		  document.prisma.areabase.select();  
	  return false;
   }  
  
   try {
   var altura = document.getElementById("resposta").value = roundNumber(altura, 2); 	
   var areabase = document.getElementById("resposta").value = roundNumber(areabase, 2);    
   var Prismairregularvolume = areabase * altura;
   var Prismairregularvolume = document.getElementById("resposta").value = roundNumber(Prismairregularvolume, 2);  
   
	 document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>O volume do prisma irregular reto é: <br> V = A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> <br>  V = "+areabase+" ∙ "+altura+" <br>  V =  <a1 style='color: #FF0000'> "+Prismairregularvolume+"</a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u³</a1>      </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
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
  /** ******************************   AREA lateral (AL = 2.π.R.h)   *****************************  **/  
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
	  
  /** ******************************   AREA da Base (Ab = π.R²)   *****************************  **/  
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
	  
  /** ******************************   AREA total 2  (At = 2.π.R.(h + r))   *****************************  **/  
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
  
  /** ******************************   VOLUME (V = π.R².h)   *****************************  **/  
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
	  
  /** ******************************   Area lateral - cilindro oco (AL = 2.π.h(r1 + r2)   *****************************  **/  
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
	  
  /** ***************************   Area total - cilindro oco (At = 2.π.h(r1 + r2) + 2.π.(r1² - r2²)   **********************  **/  
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
	  
  /** ***************************   Volume - cilindro oco (V = π.h.(r1² - r2²)   **********************  **/  
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
	  
  /** ***************************   Altura (h = V/(π.R²)   **********************  **/  
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
	  
  /** ***************************   Raio R em função do volume: (R = (V/√(π.h)   **********************  **/  
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
	  
  /** ***************************   Raio R em função da área lateral: (R = AL/(2.π.h)   **********************  **/  
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
	  
  /** ***************************   Altura h em função da área lateral: (h = AL/(2.π.R)   **********************  **/  
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
	  alert("Escolha uma opção para Calcular!");
	 } 
	 
	var a = document.forms["cilindro"]["cilindro_type"].value;
	/** **************************************   AREA lateral (AL = 2.π.R.h)   ****************************************  **/  
	if (a === "arealateralcilindro") {
	  var raioR = eval(document.cilindro.raioR.value.replace(",",".").replace(/ /g,""));		
	  var altura = eval(document.cilindro.altura.value.replace(",",".").replace(/ /g,""));
	  
	   if ((raioR < 0) || isNaN(raioR) || raioR == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.cilindro.raioR.focus();
		  document.cilindro.raioR.select();  
	  return false;
   }   
	   if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	
	 document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 22px;'>A área lateral do cilindro é: <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = 2 ∙ π ∙ R ∙ h  <br>    A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = 2 ∙ 3,14 ∙ "+raioR+" ∙ "+altura+"  <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = <a1 style='color: #FF0000'> "+arealateralcilindro+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>   <br> ou <br>      A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = <a1 style='color: #FF0000'> "+arealateralcilindro2+" π</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>     </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.cilindro.raioR.focus();
	  document.cilindro.raioR.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
	/** *****************************************    AREA da Base (Ab = π.R²)    ****************************************  **/  
	if (a === "areabasecilindro") { 
	  var raioR = eval(document.cilindro.raioR.value.replace(",",".").replace(/ /g,""));		
	  
	   if ((raioR < 0) || isNaN(raioR) || raioR == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	
	 document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>A área da base do cilindro é: <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> =  π ∙ R²  <br>    A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> = 3,14 ∙ ("+raioR+")² <br>      A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> = 3,14 ∙ "+areabasecilindro2+" <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> = <a1 style='color: #FF0000'> "+areabasecilindro+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>   <br> ou <br>      A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> = <a1 style='color: #FF0000'> "+areabasecilindro2+" π</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>     </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
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
	  
	   if ((raioR < 0) || isNaN(raioR) || raioR == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.cilindro.raioR.focus();
		  document.cilindro.raioR.select();  
	  return false;
   }   
	   if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	 
	 document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>   A área lateral do cilindro é: <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = 2 ∙ π ∙ R ∙ h  <br>    A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = 2 ∙ 3,14 ∙ "+raioR+" ∙ "+altura+"  <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = <a1 style='color: #FF0000'> "+arealateralcilindro+"</a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1> <br> ou <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = <a1 style='color: #FF0000'> "+arealateralcilindro2+" π</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>  <br> <br>  A área da base do cilindro é: <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> =  π ∙ R²  <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> = 3,14 ∙ ("+raioR+")² <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> = 3,14 ∙ "+areabasecilindro2+" <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> = <a1 style='color: #FF0000'> "+areabasecilindro+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1> <br>  ou <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> = <a1 style='color: #FF0000'> "+areabasecilindro2+" π</a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>  <br><br> Assim, a área total é:  <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = A<a1 style='font-size: 10px; font-family: times new roman;'>(lateral)</a1> + 2 ∙ A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = "+arealateralcilindro+" + 2 ∙ "+areabasecilindro+" <br>    A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = "+arealateralcilindro+" + "+areabasecilindro3+"  <br>                 A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = <a1 style='color: #FF0000'> "+areatotalcilindro+" </a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1> <br> ou <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = <a1 style='color: #FF0000'> "+areatotalcilindro2+" π </a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1> </div><hr><h1 class='logomarca'> JPP </h1> " 
	 
	  document.cilindro.raioR.focus();
	  document.cilindro.raioR.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
	/** ******************************    AREA total 2  (At = 2.π.R.(h + r))    ****************************************  **/  
	if (a === "areatotalcilindro2") { 
	  var raioR = eval(document.cilindro.raioR.value.replace(",",".").replace(/ /g,""));		
	  var altura = eval(document.cilindro.altura.value.replace(",",".").replace(/ /g,""));
	  
	   if ((raioR < 0) || isNaN(raioR) || raioR == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.cilindro.raioR.focus();
		  document.cilindro.raioR.select();  
	  return false;
   }   
	   if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	 
	 document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'> A área total do cilindro é: <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = 2 ∙ π ∙ R ∙ (<a1 style='font-family: times new roman; font-style:italic;'>h</a1> + R) <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = 2 ∙ 3,14 ∙ "+raioR+" ∙ ("+altura+" + "+raioR+") <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = 2 ∙ 3,14 ∙ "+raioR+" ∙ "+areatotalcilindro2+"  <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = <a1 style='color: #FF0000'> "+areatotalcilindro+" </a1>" +"<a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1> <br> ou <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = <a1 style='color: #FF0000'> "+areatotalcilindro3+" π </a1>" +" <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1> </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.cilindro.raioR.focus();
	  document.cilindro.raioR.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
   /** ****************************************   VOLUME (V = π.R².h)    ****************************************  **/  
	if (a === "volumecilindro") { 
	  var raioR = eval(document.cilindro.raioR.value.replace(",",".").replace(/ /g,""));		
	  var altura = eval(document.cilindro.altura.value.replace(",",".").replace(/ /g,""));
	  
	   if ((raioR < 0) || isNaN(raioR) || raioR == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.cilindro.raioR.focus();
		  document.cilindro.raioR.select();  
	  return false;
   }   
	   if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	 
	 document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'> O volume do cilindro reto é: <br> V = A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1>  ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1>  <br> V = π ∙ R² ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> <br> V = 3,14 ∙ ("+raioR+")² ∙ "+altura+" <br>   V = 3,14 ∙ "+volumecilindro2+" ∙ "+altura+"   <br>  V = <a1 style='color: #FF0000'> "+volumecilindro+"</a1>" +" <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u³</a1> <br> ou  <br> V = <a1 style='color: #FF0000'> "+volumecilindro3+" π </a1>" +" <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u³</a1>      </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.cilindro.raioR.focus();
	  document.cilindro.raioR.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /*********************************************    Altura (h = V/(π.R²)  ****************************************  **/  
	if (a === "alturacilindro") { 
	  var raioR = eval(document.cilindro.raioR.value.replace(",",".").replace(/ /g,""));		
	  var volume = eval(document.cilindro.volume.value.replace(",",".").replace(/ /g,""));
	  
	   if ((raioR < 0) || isNaN(raioR) || raioR == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.cilindro.raioR.focus();
		  document.cilindro.raioR.select();  
	  return false;
   }   
	   if ((volume < 0) || isNaN(volume) || volume == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	 
	 document.getElementById('resposta').innerHTML ="<hr>  A altura <a1 style='font-family: times new roman; font-style:italic;'>h</a1> do cilindro é: <br>  V = A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1>  <br> V = π ∙ R² ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> <br> "+volume+" = 3,14 ∙ ("+raioR+")² ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> <br> "+volume+" = 3,14 ∙ "+resul1+" ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> <br> "+volume+" =  "+resul2+" ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> <br> <div style='line-height: 15px;'>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px; padding-top:2px; text-align:center;'> "+volume+"  </td></tr><tr><td style='text-align:center;'> "+resul2+" </td></tr></tbody></table> </div> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = <a1 style='color: #FF0000'> "+alturacilindro+"</a1>" +" <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  <hr><h1 class='logomarca'> JPP </h1>  " 
	 
	  document.cilindro.raioR.focus();
	  document.cilindro.raioR.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /*********************************************     Raio R: (R = (V/√(π.h) ****************************************  **/  
	if (a === "raioRcilindro") { 
	  var altura = eval(document.cilindro.altura.value.replace(",",".").replace(/ /g,""));		
	  var volume = eval(document.cilindro.volume.value.replace(",",".").replace(/ /g,""));
	  
	   if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.cilindro.altura.focus();
		  document.cilindro.altura.select();  
	  return false;
   }   
	   if ((volume < 0) || isNaN(volume) || volume == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	 
	 document.getElementById('resposta').innerHTML ="<hr>  O Raio R do cilindro é: <br>  V = A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1>  <br> V = π ∙ R² ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> <br> "+volume+" = 3,14 ∙ R² ∙ "+altura+" <br> "+volume+" = "+resul2+" ∙ R² <br> <div style='line-height: 14px;'>    <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> "+volume+" </td><td rowspan='2'> &nbsp;=&nbsp; R<span class=\'exp\'>2</span> </td></tr><tr><td> "+resul2+" </td> </tr></tbody></table></div> "+resul3+" = R² <br>   R = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+resul3+"</a1> <br>  R = <a1 style='color: #FF0000'> "+raioRcilindro+"</a1>" +" <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>  <hr><h1 class='logomarca'> JPP </h1>  " 
	 
	  document.cilindro.altura.focus();
	  document.cilindro.altura.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /***********************   Raio R em função da área lateral: (R = AL/(2.π.h)    ****************************************  **/  
	if (a === "raioRArealatearalcilindro") { 
	  var altura = eval(document.cilindro.altura.value.replace(",",".").replace(/ /g,""));		
	  var arealateral = eval(document.cilindro.arealateral.value.replace(",",".").replace(/ /g,""));
	  
	   if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.cilindro.altura.focus();
		  document.cilindro.altura.select();  
	  return false;
   }   
	   if ((arealateral < 0) || isNaN(arealateral) || arealateral == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	 
	 document.getElementById('resposta').innerHTML ="<hr> O Raio R do cilindro é: <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = 2 ∙ π ∙ R ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> <br>  "+arealateral+" = 2 ∙ 3,14 ∙ R ∙ "+altura+" <br>  "+arealateral+" = "+resul3+" ∙ R<br> <div style='line-height: 15px;'>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> R &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px; padding-top:2px; text-align:center;'> "+arealateral+"  </td></tr><tr><td style='text-align:center;'> "+resul2+" </td></tr></tbody></table> R = <a1 style='color: #FF0000'> "+raioRcilindro+"</a1>" +" <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.cilindro.altura.focus();
	  document.cilindro.altura.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /**********************   Altura h em função da área lateral: (h = AL/(2.π.R)  ****************************************  **/  
	if (a === "alturaArealatearalcilindro") { 
	  var raioR = eval(document.cilindro.raioR.value.replace(",",".").replace(/ /g,""));		
	  var arealateral = eval(document.cilindro.arealateral.value.replace(",",".").replace(/ /g,""));
	  
	   if ((raioR < 0) || isNaN(raioR) || raioR == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.cilindro.raioR.focus();
		  document.cilindro.raioR.select();  
	  return false;
   }   
	   if ((arealateral < 0) || isNaN(arealateral) || arealateral == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	 
	 document.getElementById('resposta').innerHTML ="<hr>  O altura <a1 style='font-family: times new roman; font-style:italic;'>h</a1> do cilindro é: <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = 2 ∙ π ∙ R ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> <br>  "+arealateral+" = 2 ∙ 3,14 ∙ "+raioR+" ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> <br>  "+arealateral+" = "+resul3+" <a1 style='font-family: times new roman; font-style:italic;'>h</a1> <br>  <div style='line-height: 16px;'>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px; padding-top:2px; text-align:center;'> "+arealateral+"  </td></tr><tr><td style='text-align:center;'> "+resul2+" </td></tr></tbody></table>  <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = <a1 style='color: #FF0000'> "+raioRcilindro+"</a1>" +" <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.cilindro.raioR.focus();
	  document.cilindro.raioR.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /******************************   Area lateral - cilindro oco (AL = 2.π.h(r1 + r2)    ********************************  **/  
	if (a === "cilindroocoarealateral") { 
	  var raio1 = eval(document.cilindro.raio1.value.replace(",",".").replace(/ /g,""));	
	  var raio2 = eval(document.cilindro.raio2.value.replace(",",".").replace(/ /g,""));		
	  var altura = eval(document.cilindro.altura.value.replace(",",".").replace(/ /g,""));
	  
	   if ((raio1 < 0) || isNaN(raio1) || raio1 == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.cilindro.raio1.focus();
		  document.cilindro.raio1.select();  
	  return false;
   }   
	   if ((raio2 < 0) || isNaN(raio2) || raio2 == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.cilindro.raio2.focus();
		  document.cilindro.raio2.select();  
	  return false;
   } 
	   if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	 
	 document.getElementById('resposta').innerHTML ="<hr>  A área lateral do cilindro oco é: <br> <div style='line-height: 22px;'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1>  = 2 ∙ π ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> ∙ (<a1 style='font-family: times new roman; font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1> + <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1>) <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1>  = 2 ∙ 3,14 ∙ "+altura+" ∙ ("+raio1+" + "+raio2+") <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1>  = 2 ∙ 3,14 ∙ "+altura+" ∙ "+cilindroocoarealateral2+"  <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = <a1 style='color: #FF0000'> "+cilindroocoarealateral+"</a1>" +" <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1> <br>  ou <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = <a1 style='color: #FF0000'> "+cilindroocoarealateral3+" π</a1>" +" <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>      </div><hr> <h1 class='logomarca'> JPP </h1> " 
	 
	  document.cilindro.raio1.focus();
	  document.cilindro.raio1.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /**********************   Area total - cilindro oco (At = 2.π.h(r1 + r2) + 2.π.(r1² - r2²)   *****************************  **/  
	if (a === "cilindroocoareatotal") { 
	  var raio1 = eval(document.cilindro.raio1.value.replace(",",".").replace(/ /g,""));	
	  var raio2 = eval(document.cilindro.raio2.value.replace(",",".").replace(/ /g,""));		
	  var altura = eval(document.cilindro.altura.value.replace(",",".").replace(/ /g,""));
	  
	   if ((raio1 < 0) || isNaN(raio1) || raio1 == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.cilindro.raio1.focus();
		  document.cilindro.raio1.select();  
	  return false;
   }   
	   if ((raio2 < 0) || isNaN(raio2) || raio2 == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.cilindro.raio2.focus();
		  document.cilindro.raio2.select();  
	  return false;
   } 
	   if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	 
	 document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'> A área total do cilindro oco é: <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1>  = 2π<a1 style='font-family: times new roman; font-style:italic;'>h</a1> (<a1 style='font-family: times new roman; font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1> + <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1>) +  2π(<a1 style='font-family: times new roman; font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1>² - <a1 style='font-family: times new roman; font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1>²) <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1>  = 2∙3,14∙"+altura+" ∙("+raio1+" + "+raio2+") + 2∙3,14∙("+raio1+"² - "+raio2+"²) <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1>  = 6,28 ∙"+altura+" ∙ "+Resul2+"  + 6,28∙("+Resul3+" - "+Resul4+") <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = "+Resul5+"  - 6,28 ∙ "+Resul6+" <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = "+Resul5+"  + "+Resul7+" <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = <a1 style='color: #FF0000'> "+cilindroocoareatotal+"</a1>" +" <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1> <br> ou <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = <a1 style='color: #FF0000'> "+cilindroocoareatotal2+" π</a1>" +" <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>      </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.cilindro.raio1.focus();
	  document.cilindro.raio1.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
  /**********************************   Volume - cilindro oco (V = π.h.(r1² - r2²)   ****************************************  **/  
	if (a === "volumecilindrooco") { 
	  var raio1 = eval(document.cilindro.raio1.value.replace(",",".").replace(/ /g,""));	
	  var raio2 = eval(document.cilindro.raio2.value.replace(",",".").replace(/ /g,""));		
	  var altura = eval(document.cilindro.altura.value.replace(",",".").replace(/ /g,""));
	  
	   if ((raio1 < 0) || isNaN(raio1) || raio1 == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.cilindro.raio1.focus();
		  document.cilindro.raio1.select();  
	  return false;
   }   
	   if ((raio2 < 0) || isNaN(raio2) || raio2 == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.cilindro.raio2.focus();
		  document.cilindro.raio2.select();  
	  return false;
   } 
	   if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	 
	 document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'> O Volume do cilindro oco é: <br> V = π ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> ∙ (<a1 style='font-family: times new roman; font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1>² - <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1>²)         <br>  V = 3,14 ∙ "+altura+" ∙ ("+raio1+"² - "+raio2+"²) <br>  V = "+Resul2+" ∙ ("+Resul3+" - "+Resul4+") <br>  V = "+Resul2+" ∙ "+Resul5+"  <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = <a1 style='color: #FF0000'> "+cilindroocoareatotal+"</a1>" +" <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1> <br> ou  <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = <a1 style='color: #FF0000'> "+cilindroocoareatotal2+" π</a1>" +" <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>   </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
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
  /** ******************************   geratriz g: (g = √h² + R²)   *****************************  **/  
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
		  
  /** ******************************   altura h: (h = √g² - R²)   *****************************  **/  
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
	  
  /** ******************************   Raio r: (r = √g² - h²)   *****************************  **/  
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
	  
  /** ******************************   Área Lateral (Al = π.R.g)   *****************************  **/  
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
	  
  /** ******************************   Área da base (Ab = π.R²)   *****************************  **/  
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
	  
  /** ******************************   Área total (At = A(base) + A(lateral))   *****************************  **/  
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
	  
  /** ******************************   Volume (V = 1/3 . π.R².h )   *****************************  **/  
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
	  
  /** ******************************   Tronco do cone: área lateral (Al = π.g.(r1 + r2))   *****************************  **/  
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
	  
  /** ******************************   Tronco do cone: Área total(At = A(lateral) + A(baseMaior) + A(basemenor)   *****************************  **/  
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
	  
	  
  /** ******************************   Tronco do cone: Volume (V = (π.h.(r1² +r1.r2 + r2²)/3))   *****************************  **/  
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
	  alert("Escolha uma opção para Calcular!");
	 }	
	  
	var a = document.forms["cone"]["cone_type"].value;
	/** ****************************   Cálculdo da geratriz g: (g = √h² + R²)   ****************************************  **/  
	if (a === "geratrizcone") { 
	  var raioR = eval(document.cone.raioR.value.replace(",",".").replace(/ /g,""));	
	  var altura = eval(document.cone.altura.value.replace(",",".").replace(/ /g,""));		
	  
	   if ((raioR < 0) || isNaN(raioR) || raioR == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.cone.raioR.focus();
		  document.cone.raioR.select();  
	  return false;
   }   
	   if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	
	 document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 25px;'>A geratriz <a1 style='font-family: times new roman; font-style:italic;'>g</a1> do cone é: <br> <a1 style='font-family: times new roman; font-style:italic;'>g</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'><a1 style='font-family: times new roman; font-style:italic;'>h</a1>² + <a1 style='font-family: times new roman; font-style:italic;'>R</a1>²</a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>g</a1> =  √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>("+altura+")² + ("+raioR+")²</a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>g</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'> "+Resul2+" + "+Resul3+"</a1></a1> <br>   <a1 style='font-family: times new roman; font-style:italic;'>g</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'> "+Resul4+"</a1></a1> <br>  <a1 style='font-family: times new roman; font-style:italic;'>g</a1> = <a1 style='color: #FF0000'> "+geratrizcone+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.cone.raioR.focus();
	  document.cone.raioR.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
	/** **************************************    altura h: (h = √g² - R²)   ****************************************  **/  
	if (a === "alturacone") { 
	  var raioR = eval(document.cone.raioR.value.replace(",",".").replace(/ /g,""));	
	  var geratriz = eval(document.cone.geratriz.value.replace(",",".").replace(/ /g,""));		
	  
	   if ((raioR < 0) || isNaN(raioR) || raioR == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.cone.raioR.focus();
		  document.cone.raioR.select();  
	  return false;
   }   
	   if ((geratriz < 0) || isNaN(geratriz) || geratriz == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	
	 document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>A altura <a1 style='font-family: times new roman; font-style:italic;'>h</a1> do cone é: <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'><a1 style='font-family: times new roman; font-style:italic;'>g</a1>² - <a1 style='font-family: times new roman; font-style:italic;'>R</a1>²</a1>  <br><a1 style='font-family: times new roman; font-style:italic;'>h</a1> =  √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>("+geratriz+")² - ("+raioR+")²</a1> <br> <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'> "+Resul2+" - "+Resul3+"</a1></a1> <br>   <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'> "+Resul4+"</a1></a1> <br>  <a1 style='font-family: times new roman; font-style:italic;'>h</a1> = <a1 style='color: #FF0000'> "+geratrizcone+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.cone.raioR.focus();
	  document.cone.raioR.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** *****************************************************     Raio r: (r = √g² - h²)    ****************************************  **/  
	if (a === "raiocone") { 
	  var altura = eval(document.cone.altura.value.replace(",",".").replace(/ /g,""));	
	  var geratriz = eval(document.cone.geratriz.value.replace(",",".").replace(/ /g,""));		
	   if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.cone.altura.focus();
		  document.cone.altura.select();  
	  return false;
   }   
	   if ((geratriz < 0) || isNaN(geratriz) || geratriz == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	
	 document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>A raio R do cone é: <br> R = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'><a1 style='font-family: times new roman; font-style:italic;'>g</a1>² - <a1 style='font-family: times new roman; font-style:italic;'>h</a1>²</a1> <br> R =  √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>("+geratriz+")² - ("+altura+")²</a1> <br> R = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'> "+Resul2+" - "+Resul3+"</a1></a1> <br>   R = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'> "+Resul4+"</a1></a1> <br>  R = <a1 style='color: #FF0000'> "+geratrizcone+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.cone.altura.focus();
	  document.cone.altura.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
  /** *****************************************************   Área Lateral (Al = π.R.g)   ****************************************  **/  
	if (a === "arealateralcone") {
	  var raioR = eval(document.cone.raioR.value.replace(",",".").replace(/ /g,""));	
	  var geratriz = eval(document.cone.geratriz.value.replace(",",".").replace(/ /g,""));		
	  
	   if ((raioR < 0) || isNaN(raioR) || raioR == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.cone.raioR.focus();
		  document.cone.raioR.select();  
	  return false;
   }   
	   if ((geratriz < 0) || isNaN(geratriz) || geratriz == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	
	 document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 22px;'>A área lateral do cone é: <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(lateral)</a1> = π ∙ R ∙ <a1 style='font-family: times new roman; font-style:italic;'>g</a1> <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(lateral)</a1>  = 3,14 ∙ "+raioR+" ∙ "+geratriz+" <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(lateral)</a1> = <a1 style='color: #FF0000'> "+arealateralcone+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>  <br> ou <br>        A<a1 style='font-size: 10px; font-family: times new roman;'>(lateral)</a1> = <a1 style='color: #FF0000'> "+arealateralcone2+"π</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>      </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.cone.raioR.focus();
	  document.cone.raioR.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
	   
  /** *****************************************************   Área da base (Ab = π.R²)   ****************************************  **/  
	if (a === "areabasecone") { 
	  var raioR = eval(document.cone.raioR.value.replace(",",".").replace(/ /g,""));	
	  
	   if ((raioR < 0) || isNaN(raioR) || raioR == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	
	 document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>A área da base do cone é: <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> = π ∙ R² <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1>  = 3,14 ∙ ("+raioR+")² <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(base)</a1> = 3,14 ∙ "+Resul2+" <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Base)</a1> = <a1 style='color: #FF0000'> "+areabasecone+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>  </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.cone.raioR.focus();
	  document.cone.raioR.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }	 
	   
	   
  /** ******************************    Área total (At = A(base) + A(lateral))    ****************************************  **/  
	if (a === "areatotalcone") { 
	  var raioR = eval(document.cone.raioR.value.replace(",",".").replace(/ /g,""));	
	  var geratriz = eval(document.cone.geratriz.value.replace(",",".").replace(/ /g,""));		
	  
	   if ((raioR < 0) || isNaN(raioR) || raioR == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.cone.raioR.focus();
		  document.cone.raioR.select();  
	  return false;
   }    
	   if ((geratriz < 0) || isNaN(geratriz) || geratriz == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	
	 document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>A área total do cone é: <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> =  A<a1 style='font-size: 10px; font-family: times new roman;'>(Base)</a1>  +  A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = πR²  +  πRg = πR(g + R) <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = 3,14 ∙ "+raioR+" ∙ ("+geratriz+" + "+raioR+") <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = 3,14 ∙ "+raioR+" ∙ "+Resul2+" <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = <a1 style='color: #FF0000'> "+areatotalcone+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1> <br> ou <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = <a1 style='color: #FF0000'> "+Resul3+"π</a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1> </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.cone.raioR.focus();
	  document.cone.raioR.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }	 
	   
	   
  /** ****************************************   Volume (V = 1/3 . π.R².h )   ****************************************  **/  
	if (a === "volumecone") { 
	  var raioR = eval(document.cone.raioR.value.replace(",",".").replace(/ /g,""));	
	  var altura = eval(document.cone.altura.value.replace(",",".").replace(/ /g,""));		
	  
	   if ((raioR < 0) || isNaN(raioR) || raioR == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.cone.raioR.focus();
		  document.cone.raioR.select();  
	  return false;
   }    
	   if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	 
	 document.getElementById('resposta').innerHTML ="<hr>  O Volume do cone é: <br> <div style='line-height: 15px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> V &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> π ∙ R² ∙ h </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'>  3,14 ∙ ("+raioR+")² ∙ "+altura+" </td></tr> <tr> <td> 3 </td><td> 3 </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'>  V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> 3,14 ∙ "+Resul2+" ∙ "+altura+" </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'>  V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+Resul4+"  </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>  </div>  V = <a1 style='color: #FF0000'> "+volumecone+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u³</a1> <br> ou <br>   V  = <a1 style='color: #FF0000'> "+Resul3+"π</a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u³</a1> <hr><h1 class='logomarca'> JPP </h1> " 
	 
	  document.cone.raioR.focus();
	  document.cone.raioR.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }	 	 
	   
  /** ****************************   Tronco do cone: área lateral (Al = π.g.(r1 + r2))   ****************************************  **/  
	if (a === "arealateraltroncodocone") { 
	  var geratriz = eval(document.cone.geratriz.value.replace(",",".").replace(/ /g,""));	
	  var raio1 = eval(document.cone.raio1.value.replace(",",".").replace(/ /g,""));
	  var raio2 = eval(document.cone.raio2.value.replace(",",".").replace(/ /g,""));	
	  
	   if ((geratriz < 0) || isNaN(geratriz) || geratriz == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.cone.geratriz.focus();
		  document.cone.geratriz.select();  
	  return false;
   }    
	   if ((raio1 < 0) || isNaN(raio1) || raio1 == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.cone.raio1.focus();
		  document.cone.raio1.select();  
	  return false;
   }   
	   if ((raio2 < 0) || isNaN(raio2) || raio2 == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
	
	 document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>A área lateral do tronco do cone é: <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> =  π ∙ <a1 style='font-family: times new roman; font-style:italic;'>g</a1> ∙ (<a1 style='font-family: times new roman; font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1> + <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1>) <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> =  3,14 ∙ "+geratriz+" ∙ ("+raio1+" + "+raio2+") <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> =  3,14 ∙ "+geratriz+" ∙ "+Resul2+" <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> = <a1 style='color: #FF0000'> "+arealateraltroncodocone+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1> <br> ou <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1>  = <a1 style='color: #FF0000'> "+Resul3+"π</a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1> </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.cone.raio1.focus();
	  document.cone.raio1.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }	 
	   
	   
  /** ***********************    Tronco do cone: Área total(At = A(lateral) + A(baseMaior) + A(basemenor)  ****************************************  **/  
	if (a === "areatotaltroncodocone") { 
	  var geratriz = eval(document.cone.geratriz.value.replace(",",".").replace(/ /g,""));	
	  var raio1 = eval(document.cone.raio1.value.replace(",",".").replace(/ /g,""));
	  var raio2 = eval(document.cone.raio2.value.replace(",",".").replace(/ /g,""));	
	  
	   if ((geratriz < 0) || isNaN(geratriz) || geratriz == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.cone.geratriz.focus();
		  document.cone.geratriz.select();  
	  return false;
   }    
	   if ((raio1 < 0) || isNaN(raio1) || raio1 == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.cone.raio1.focus();
		  document.cone.raio1.select();  
	  return false;
   }   
	   if ((raio2 < 0) || isNaN(raio2) || raio2 == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
  
	 document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'> A área total do tronco do cone é: <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1>  + A<a1 style='font-size: 10px; font-family: times new roman;'>(Base maior )</a1> + A<a1 style='font-size: 10px; font-family: times new roman;'>(Base menor)</a1> </a1> <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = π ∙ [(<a1 style='font-family: times new roman; font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1> + <a1 style='font-family: times new roman; font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1>)<a1 style='font-family: times new roman; font-style:italic;'>g</a1> + (<a1 style='font-family: times new roman; font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1>)² + (<a1 style='font-family: times new roman; font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1>)²] <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = 3,14∙[("+raio1+" + "+raio2+")∙ "+geratriz+" + ("+raio1+")² + ("+raio2+")²] <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = 3,14∙["+Resul2+" ∙ "+geratriz+" + "+Resul3+" + "+Resul4+"] <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = 3,14 ∙ ["+Resul5+" + "+Resul3+" + "+Resul4+"] <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = 3,14 ∙ ["+Resul6+" ] <br> V = <a1 style='color: #FF0000'> "+areatotaltroncodocone+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u³</a1> <br> ou <br>   V = <a1 style='color: #FF0000'> "+areatotaltroncodocone2 +"π</a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u³</a1> </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.cone.raio1.focus();
	  document.cone.raio1.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }	 
	   
  /** ***********************   Tronco do cone: Volume (V = (π.h.(r1² +r1.r2 + r2²)/3))  ****************************************  **/  
	if (a === "volumetroncodocone") {
	  var altura = eval(document.cone.altura.value.replace(",",".").replace(/ /g,""));	
	  var raio1 = eval(document.cone.raio1.value.replace(",",".").replace(/ /g,""));
	  var raio2 = eval(document.cone.raio2.value.replace(",",".").replace(/ /g,""));	
	  
	   if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.cone.altura.focus();
		  document.cone.altura.select();  
	  return false;
   }    
	   if ((raio1 < 0) || isNaN(raio1) || raio1 == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.cone.raio1.focus();
		  document.cone.raio1.select();  
	  return false;
   }   
	   if ((raio2 < 0) || isNaN(raio2) || raio2 == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
  
	 document.getElementById('resposta').innerHTML ="<hr>  O Volume do tronco do cone é: <br> <div style='line-height: 14px;'>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> π ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> ∙ (<a1 style='font-family: times new roman; font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1>² + <a1 style='font-family: times new roman; font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1><a1 style='font-family: times new roman; font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1> + <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1><a1 style='font-size: 10px; font-family: times new roman;'>2</a1>²) </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> 3,14 ∙ "+altura+" ∙ ("+raio1+"² + "+raio1+"∙"+raio2+" + "+raio2+"²) </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+Resul2+" ∙ ("+Resul3+" + "+Resul4+"  + "+Resul5+") </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+Resul2+" ∙ "+Resul6+" </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+Resul7+" </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>   </div> V = <a1 style='color: #FF0000'> "+volumetroncodocone+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u³</a1> <br> ou <br>   V = <a1 style='color: #FF0000'> "+volumetroncodocone2+"π</a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u³</a1><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.cone.raio1.focus();
	  document.cone.raio1.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
   
  }
  
  
  
  /***#######################################  PIRÂMIDE  ############################################################      **/
  
  function piramide2() {
	var a = document.forms["piramide"]["piramide_type"].value;
  /** ******************************   AREA da base (A =(n.a².cotg PI/n)/4)   *****************************  **/  
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
		  
  /** ******************************   Apótema da base (Al = n.a.g/2)   *****************************  **/  
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
  
  /** ******************************  Apótema lateral (m = √(r² + h²))   *****************************  **/  
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
	  
  /** ******************************   Área lateral (Al = n.a.m/2   *****************************  **/  
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
	  
  /** ******************************   Área totall (At = A(base) . A(lateral)   *****************************  **/  
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
  
  /** ******************************   Tronco da pirâmide: Volume (V = h/3 . (AB² + √(AB.ab) + ab²)   *****************************  **/  
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
	  alert("Escolha uma opção para Calcular!");
	 } 
	 
	var a = document.forms["piramide"]["piramide_type"].value;
  /** *************************  Apotema da base (r =(a/(2.tg(180°/n))))  ****************************************  **/ 
  if (a === "apotemabasepiramide") { 
	  var arestabasea = eval(document.piramide.arestabasea.value.replace(",",".").replace(/ /g,""));	
	  var ladosn = eval(document.piramide.ladosn.value.replace(",",".").replace(/ /g,""));
  
	  
	   if ((arestabasea < 0) || isNaN(arestabasea) || arestabasea == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.piramide.arestabasea.focus();
		  document.piramide.arestabasea.select();  
	  return false;
   }    
	   if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("Não existe polígono menor de 3 lados!! e/ou digite um/os valor(es) numérico(s) maior do que 2!!");
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
   
	 document.getElementById('resposta').innerHTML ="<hr>  A apótema <a1 style='font-family: times new roman; font-style:italic;'>r</a1> da base da pirâmide é: <br> <div style='line-height: 15px;'> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>r</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman; font-style:italic;'>a</a1> </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman;'> 2 ∙ tg(180°/<a1 style='font-family: times new roman; font-style:italic;'><a1 style='font-family: times new roman; font-style:italic;'>n</a1></a1>) </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>r</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+arestabasea +" </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman;'> 2 ∙ tg(180°/"+ladosn+") </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;'>r</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+arestabasea+" </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman;'> 2 ∙ tg("+Resul2+"°) </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'><a1 style='font-family: times new roman; font-style:italic;'>r</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'>"+arestabasea+"</td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'>"+arestabasea+"</td></tr> <tr> <td>2 ∙ "+Resul3+"</td><td>"+Resul4+"</td> </tr></tbody></table> </div>  <a1 style='font-family: times new roman; font-style:italic;'>r</a1> = <a1 style='color: #FF0000'> "+apotemabasepiramide+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1> <hr><h1 class='logomarca'> JPP </h1> " 
	 
	  document.piramide.ladosn.focus();
	  document.piramide.ladosn.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }  
	
  /** ***********************************  Apótema lateral (m = √(r² + h²))  ****************************************  **/ 
  if (a === "apotemalateralpiramide") { 
	  var altura = eval(document.piramide.altura.value.replace(",",".").replace(/ /g,""));	
	  var apotemar = eval(document.piramide.apotemar.value.replace(",",".").replace(/ /g,""));		
	  var ladosn = eval(document.piramide.ladosn.value.replace(",",".").replace(/ /g,""));
  
	   if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.piramide.altura.focus();
		  document.piramide.altura.select();  
	  return false;
   }	
	   if ((apotemar < 0) || isNaN(apotemar) || apotemar == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.piramide.apotemar.focus();
		  document.piramide.apotemar.select();  
	  return false;
   }    
	   if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("Não existe polígono menor de 3 lados!! e/ou digite um/os valor(es) numérico(s) maior do que 2!!");
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
   
	 document.getElementById('resposta').innerHTML ="<hr> A apótema lateral <a1 style='font-family: times new roman; font-style:italic;'>m</a1> da pirâmide regular é dado por: <br>      <div style='line-height: 25px;'> <a1 style='font-family: times new roman; font-style:italic;'>m</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'><a1 style='font-family: times new roman; font-style:italic;'>r</a1>² + <a1 style='font-family: times new roman; font-style:italic;'>h</a1>²</a1>   <br>  <a1 style='font-family: times new roman; font-style:italic;'>m</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>("+apotemar+")² + ("+apotemar+")²</a1> <br>  <a1 style='font-family: times new roman; font-style:italic;'>m</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+Resul2+" + "+Resul3+"</a1> <br>  <a1 style='font-family: times new roman; font-style:italic;'>m</a1> = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+Resul4+" </a1> <br>   <a1 style='font-family: times new roman; font-style:italic;'>m</a1> = <a1 style='color: #FF0000'> "+apotemalateral+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>    </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.piramide.ladosn.focus();
	  document.piramide.ladosn.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** ***************************************  AREA da base (A =(n.a².cotg PI/n)/4)  ****************************************  **/ 
  if (a === "areabasepiramide") { 	
	  var arestabasea = eval(document.piramide.arestabasea.value.replace(",",".").replace(/ /g,""));	
	  var ladosn = eval(document.piramide.ladosn.value.replace(",",".").replace(/ /g,""));
  
	  
	   if ((arestabasea < 0) || isNaN(arestabasea) || arestabasea == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.piramide.arestabasea.focus();
		  document.piramide.arestabasea.select();  
	  return false;
   }    
	   if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("Não existe polígono menor de 3 lados!! e/ou digite um/os valor(es) numérico(s) maior do que 2!!");
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
   
	 document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 16px;'> A área da base da pirâmide regular reta de <a1 style='color: #FF0000'>"+ladosn+"</a1> lados é: <br> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>a</a1><a1 style='font-size: 21px; font-family: times new roman;'>²</a1> ∙ cotg(180°/<a1 style='font-family: times new roman; font-style:italic;'>n</a1>) </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladosn+" ∙ ("+arestabasea+")<a1 style='font-size: 21px; font-family: times new roman;'>²</a1> ∙ cotg(180°/"+ladosn+") </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladosn+" ∙ "+Res3+" ∙ cotg("+Res4+")° </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+Res1+" ∙ "+Res2+" </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>  A = <a1 style='color: #FF0000'> "+piramide+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>  </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.piramide.ladosn.focus();
	  document.piramide.ladosn.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
	   
  /** **************************************  Área lateral (Al = n.a.m/2  ****************************************  **/ 
  if (a === "arealateralpiramide") { 
	  var arestabasea = eval(document.piramide.arestabasea.value.replace(",",".").replace(/ /g,""));	
	  var ladosn = eval(document.piramide.ladosn.value.replace(",",".").replace(/ /g,""));
	  var apotemam = eval(document.piramide.apotemam.value.replace(",",".").replace(/ /g,""));
	  
	   if ((arestabasea < 0) || isNaN(arestabasea) || arestabasea == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.piramide.arestabasea.focus();
		  document.piramide.arestabasea.select();  
	  return false;
   }    
	   if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("Não existe polígono menor de 3 lados!! e/ou digite um/os valor(es) numérico(s) maior do que 2!!");
		  document.piramide.ladosn.focus();
		  document.piramide.ladosn.select();  
	  return false;
   } 
	   if ((apotemam < 0) || isNaN(apotemam) || apotemam == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!!");
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
   
	 document.getElementById('resposta').innerHTML ="<hr> A área lateral de uma pirâmide regular de <a1 style='color: #FF0000'>"+ladosn+"</a1> lados é: <br>  <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>a</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>m</a1> </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladosn+" ∙ "+arestabasea+" ∙ "+apotemam+" </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+arealateral2+" </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table> </div> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1>  = <a1 style='color: #FF0000'> "+arealateral+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>² <hr><h1 class='logomarca'> JPP </h1>  " 
	 
	  document.piramide.ladosn.focus();
	  document.piramide.ladosn.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }	 
  
  /** ************************************  Área totall (At = A(base) . A(lateral)  ****************************************  **/ 
  if (a === "areatotalpiramide") { 
	  var arestabasea = eval(document.piramide.arestabasea.value.replace(",",".").replace(/ /g,""));	
	  var ladosn = eval(document.piramide.ladosn.value.replace(",",".").replace(/ /g,""));
	  var apotemam = eval(document.piramide.apotemam.value.replace(",",".").replace(/ /g,""));
	  
	   if ((arestabasea < 0) || isNaN(arestabasea) || arestabasea == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.piramide.arestabasea.focus();
		  document.piramide.arestabasea.select();  
	  return false;
   }    
	   if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("Não existe polígono menor de 3 lados!! e/ou digite um/os valor(es) numérico(s) maior do que 2!!");
		  document.piramide.ladosn.focus();
		  document.piramide.ladosn.select();  
	  return false;
   } 
	   if ((apotemam < 0) || isNaN(apotemam) || apotemam == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!!");
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
   
	 document.getElementById('resposta').innerHTML ="<hr>A área total de uma pirâmide regular de <a1 style='color: #FF0000'>"+ladosn+"</a1> lados é dado por: <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = A<a1 style='font-size: 10px; font-family: times new roman;'>(Base)</a1> + A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> <br> Assim, a área da base é: <br>         <div style='line-height: 15px;'> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Base)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>a</a1><a1 style='font-size: 21px; font-family: times new roman;'>²</a1> ∙ cotg(180°/<a1 style='font-family: times new roman; font-style:italic;'>n</a1>) </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Base)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladosn+" ∙ ("+arestabasea+")<a1 style='font-size: 21px; font-family: times new roman;'>²</a1> ∙ cotg(180°/"+ladosn+") </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Base)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>"+ladosn+" ∙ "+Res3+" ∙ cotg("+Res4+")° </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Base)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+Res1+" ∙ "+Res2+" </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Base)</a1> = <a1 style='color: #FF0000'> "+areabase+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>  </div>   <br> Agora, a área lateral é: <br>  <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>a</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>m</a1> </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+ladosn+" ∙ "+arestabasea+" ∙ "+apotemam+" </td></tr><tr><td style='text-align:center;'> 2 </td></tr></tbody></table>     <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Lateral)</a1> &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+arealateral2+" </td>  <td rowspan='2'> &nbsp;=&nbsp; </td>  <td rowspan='2'> <a1 style='color: #FF0000'> "+arealateral+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>² </td></tr> <tr> <td> 2 </td> </tr></tbody></table> <br> Assim, concluímos que: <br>    </div>  A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = "+areabase+" + "+arealateral+"  <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(Total)</a1> = <a1 style='color: #FF0000'>"+Res5+"</a1>&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>²<hr><h1 class='logomarca'> JPP </h1> " 
	 
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
	  
	   if ((arestabasea < 0) || isNaN(arestabasea) || arestabasea == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.piramide.arestabasea.focus();
		  document.piramide.arestabasea.select();  
	  return false;
   }    
	   if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("Não existe polígono menor de 3 lados!! e/ou digite um/os valor(es) numérico(s) maior do que 2!!");
		  document.piramide.ladosn.focus();
		  document.piramide.ladosn.select();  
	  return false;
   } 
	   if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!!");
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
  
	 document.getElementById('resposta').innerHTML ="<hr>O volume da pirâmide regular reta de <a1 style='color: #FF0000'>"+ladosn+"</a1> lados de base é dado por: <br> <div style='line-height: 14px;'>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> A<a1 style='font-size: 10px; font-family: times new roman;'>(base) </a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> V &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>a</a1><a1 style='font-size: 21px; font-family: times new roman;'>²</a1> ∙ cotg(180°/<a1 style='font-family: times new roman; font-style:italic;'>n</a1>) </td>  <td rowspan='2'> &nbsp;∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1>&nbsp; </td>  </td></tr> <tr> <td> 12 </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> V &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+ladosn+" ∙ ("+arestabasea+")<a1 style='font-size: 21px; font-family: times new roman;'>²</a1> ∙ cotg(180°/"+ladosn+") </td>  <td rowspan='2'> &nbsp;∙ "+altura+"&nbsp; </td>  </td></tr> <tr> <td> 12 </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> V &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+ladosn+" ∙ "+Res3+" ∙ cotg("+Res4+")° </td>  <td rowspan='2'> &nbsp;∙ "+altura+"&nbsp; </td>  </td></tr> <tr> <td> 12 </td> </tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> V &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+Res1+" ∙ "+Res2+" ∙ "+altura+" </td>  </td></tr> <tr> <td> 12 </td> </tr></tbody></table></div> V = <a1 style='color: #FF0000'> "+volumepiramide+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u³</a1>  <hr><h1 class='logomarca'> JPP </h1>  " 
	 
	  document.piramide.ladosn.focus();
	  document.piramide.ladosn.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }	 
  
  /** ********************  Tronco da pirâmide: Volume (V = h/3 . (AB² + √(AB.ab) + ab²)  ****************************************  **/ 
  if (a === "volumetroncopiramide") { 
	  var arestabasea = eval(document.piramide.arestabasea.value.replace(",",".").replace(/ /g,""));
	  var arestabaseb = eval(document.piramide.arestabaseb.value.replace(",",".").replace(/ /g,""));	
	  var ladosn = eval(document.piramide.ladosn.value.replace(",",".").replace(/ /g,""));
	  var altura = eval(document.piramide.altura.value.replace(",",".").replace(/ /g,""));
	  
	   if ((arestabasea < 0) || isNaN(arestabasea) || arestabasea == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.piramide.arestabasea.focus();
		  document.piramide.arestabasea.select();  
	  return false;
   }    
	   if ((arestabaseb < 0) || isNaN(arestabaseb) || arestabaseb == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.piramide.arestabaseb.focus();
		  document.piramide.arestabaseb.select();  
	  return false;
   } 
	   if ((ladosn < 3) || isNaN(ladosn) || ladosn == "" ) { alert("Não existe polígono menor de 3 lados!! e/ou digite um/os valor(es) numérico(s) maior do que 2!!");
		  document.piramide.ladosn.focus();
		  document.piramide.ladosn.select();  
	  return false;
   } 
	   if ((altura < 0) || isNaN(altura) || altura == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
   
   document.getElementById('resposta').innerHTML ="<hr> Cálculo da área da base maior: <br>  <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Base maior)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  <a1 style='font-family: times new roman; font-style:italic;'>n</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>a</a1><a1 style='font-size: 21px; font-family: times new roman;'>²</a1> ∙ cotg(180°/<a1 style='font-family: times new roman; font-style:italic;'>n</a1>) </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Base maior)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladosn+" ∙ ("+arestabasea+")<a1 style='font-size: 21px; font-family: times new roman;'>²</a1> ∙ cotg(180°/"+ladosn+") </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Base maior)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladosn+" ∙ "+Res3+" ∙ cotg("+Res4+")° </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Base maior)</a1> &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+Res1+" ∙ "+Res2+" </td>  <td rowspan='2'> &nbsp;=&nbsp; </td>  <td rowspan='2'> <a1 style='color: #FF0000'> "+areabasemaior+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1> </td></tr> <tr> <td> 4 </td> </tr></tbody></table>   </div>  <br> Cálculo da área da base menor: <br>  <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Base menor)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  <a1 style='font-family: times new roman; font-style:italic;'>n</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>b</a1><a1 style='font-size: 21px; font-family: times new roman;'>²</a1> ∙ cotg(180°/<a1 style='font-family: times new roman; font-style:italic;'>n</a1>) </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Base menor)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+ladosn+" ∙ ("+arestabaseb+")<a1 style='font-size: 21px; font-family: times new roman;'>²</a1> ∙ cotg(180°/"+ladosn+") </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Base menor)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+ladosn+" ∙ "+Res8+" ∙ cotg("+Res9+")° </td></tr><tr><td style='text-align:center;'> 4 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>(Base menor)</a1> &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+Res6+" ∙ "+Res7+" </td>  <td rowspan='2'> &nbsp;=&nbsp; </td>  <td rowspan='2'> <a1 style='color: #FF0000'> "+areabasemenor+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1> </td></tr> <tr> <td> 4 </td> </tr></tbody></table>   </div> <br> Logo, o volume do tronco da pirâmide regular reta é dado por: <div style='line-height: 15px;'> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> h∙(A<a1 style='font-size: 10px; font-family: times new roman;'>(M)</a1>+√<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>A<a1 style='font-size: 10px; font-family: times new roman;'>(M)</a1>∙A<a1 style='font-size: 10px; font-family: times new roman;'>(m)</a1>   </a1> + A<a1 style='font-size: 10px; font-family: times new roman;'>(m)</a1>) </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>     <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+altura+" ∙ ("+areabasemaior+" +√<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+areabasemaior+" ∙ "+areabasemenor+" </a1> + "+areabasemenor+") </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>     <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+altura+" ∙ ("+areabasemaior+" +√<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+Res10+" </a1> + "+areabasemenor+") </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+altura+" ∙ ("+areabasemaior+" + "+Res11+" + "+areabasemenor+") </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+altura+" ∙ "+Res12+" </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>          <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> V &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+Res13+"  </td>  <td rowspan='2'> &nbsp;=&nbsp; </td>  <td rowspan='2'> <a1 style='color: #FF0000'> "+volumetroncopiramide+"</a1>" +"&nbsp; <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u³</a1> </td></tr> <tr> <td> 3 </td> </tr></tbody></table></div>  <hr><h1 class='logomarca'> JPP </h1> " 
	 
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
  /** ******************************   Raio da esfera: R = ³√(3V)/4π)   *****************************  **/  
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
	  
  /** ******************************   Raio da esfera: R = √(A/4π)   *****************************  **/  
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
	  
  /** ******************************   Superficie da esfera: S = 4.π.r²   *****************************  **/  
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
  
  /** ******************************   Volume da esfera: S = 4/3.π.r³   *****************************  **/  
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
  
  /** ******************************   ÁRea da superficíe da Semiesfera: S = 2.π.h.r   *****************************  **/  
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
	  
  /** ******************************   Área total da Semiesfera: S = 2.π.h.r + π(2r² - h²)   *****************************  **/  
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
  
  /** ******************************   Raio c da Semiesfera: c = √(r² - h²)   *****************************  **/  
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
	  
  /** ******************************   Área do circulo de raio c da Semiesfera: A = π.(r² - h²)   *****************************  **/  
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
  
  /** ******************************  Volume da Semiesfera: V = 1/3.π.h.(3r² - h²)   *****************************  **/  
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
	  alert("Escolha uma opção para Calcular!");
	 } 
	 
	var a = document.forms["esfera"]["esfera_type"].value;
	/** ****************************************   Raio da esfera: R = ³√(3V)/4π)  ****************************************  **/  
	if (a === "raioR1") { 
	  var volume = eval(document.esfera.volume.value.replace(",",".").replace(/ /g,""));
	  
	   if ((volume < 0) || isNaN(volume) || volume == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
   
	   document.getElementById('resposta').innerHTML ="<hr>  O raio R da esferá é: <br><div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  4 ∙ π ∙ R³ </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> "+volume+" &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>   4 ∙ 3,14 ∙ R³ </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table> </div>  3 ∙ "+volume+" = "+Resul3+" ∙ R³ <br> "+Resul2+" = "+Resul3+" ∙ R³ <br>  <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> "+Resul2+" </td><td rowspan='2'> &nbsp;=&nbsp; R³ </td></tr><tr><td> "+Resul3+" </td> </tr></tbody></table> </div>  <div style='line-height: 24px;'>   "+Resul5+" =  R³ <br>  R = ³√<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+Resul4+" </a1> <br> R = <a1 style='color: #FF0000'> "+raioR1+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1> </div> <hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.esfera.volume.focus();
	  document.esfera.volume.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
  /** ***************************************   Raio da esfera: R = √(A/4π)  ****************************************  **/  
	if (a === "raioR2") { 
	  var superficie = eval(document.esfera.superficie.value.replace(",",".").replace(/ /g,""));
	  
	   if ((superficie < 0) || isNaN(superficie) || superficie == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
   
	   document.getElementById('resposta').innerHTML ="<hr> O raio R da esferá é: <br>  S = 4 ∙ π ∙ R² <br> "+superficie+" = 4 ∙ 3,14 ∙ R² <br> "+superficie+" = "+Resul2+" ∙ R² <br>  <div style='line-height: 15px;'> <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> "+superficie+" </td><td rowspan='2'> &nbsp;=&nbsp; R²  </td></tr><tr><td> "+Resul2+" </td> </tr></tbody></table> </div>    <div style='line-height: 22px;'>  "+Resul3+" = R² <br>        R = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+Resul3+" </a1> <br>   R = <a1 style='color: #FF0000'> "+raioR2+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1> </div>  <hr><h1 class='logomarca'> JPP </h1> " 
	 
	  document.esfera.superficie.focus();
	  document.esfera.superficie.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }	 
	   
  
  /** ****************************************    Superficie da esfera: S = 4.π.r²  ****************************************  **/  
	if (a === "Superificieesfera") { 
	  var raioR = eval(document.esfera.raioR.value.replace(",",".").replace(/ /g,""));
	  
	   if ((raioR < 0) || isNaN(raioR) || raioR == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
   
	   document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>A área da superfície S da esferá é: <br> S = 4 ∙ π ∙ R² <br> S = 4 ∙ 3,14 ∙ ("+raioR+")² <br>   S = 4 ∙ 3,14 ∙ "+Resul2+" <br>  S = <a1 style='color: #FF0000'> "+superifice+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>  <br> ou <br>  S = <a1 style='color: #FF0000'> "+superifice2+"π</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>          </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.esfera.raioR.focus();
	  document.esfera.raioR.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 
	   
  
  /** ********************************************   Volume da esfera: S = 4/3.π.r³   ****************************************  **/  
	if (a === "volumeesfera") { 
	  var raioR = eval(document.esfera.raioR.value.replace(",",".").replace(/ /g,""));
	  
	   if ((raioR < 0) || isNaN(raioR) || raioR == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
   
	   document.getElementById('resposta').innerHTML ="<hr>  O volume V da esfera é: <br> <div style='line-height: 15px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>V &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'>4 ∙ π ∙ R³</td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'>4 ∙ 3,14 ∙ ("+raioR+")³</td></tr> <tr> <td>3</td><td>3</td> </tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> 4 ∙ 3,14 ∙ "+Resul2+" </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+Resul3+" </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table></div>  V = <a1 style='color: #FF0000'> "+superifice+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u³</a1>  <br> ou <br>  V = <a1 style='color: #FF0000'> "+superifice2+"π</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u³</a1>  <hr><h1 class='logomarca'> JPP </h1> " 
	 
	  document.esfera.raioR.focus();
	  document.esfera.raioR.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 
  
  
  /** ****************************   ÁRea da superficíe da Semiesfera: S = 2.π.h.r    **********************************  **/  
	if (a === "arealateralsemiesfera") { 
	  var raior = eval(document.esfera.raior.value.replace(",",".").replace(/ /g,""));
	  var alturah = eval(document.esfera.alturah.value.replace(",",".").replace(/ /g,""));	
	  
	   if ((raior < 0) || isNaN(raior) || raior == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.esfera.raior.focus();
		  document.esfera.raior.select();  
	  return false;
   }    
	   if ((alturah < 0) || isNaN(alturah) || alturah == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
   
	   document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 20px;'>A área da superfície da semiesfera parcial é: <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(superfície)</a1> = 2 ∙ π ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>r</a1>  <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(superfície)</a1> = 2 ∙ 3,14 ∙ "+alturah+" ∙ "+raior+"  <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(superfície)</a1> = <a1 style='color: #FF0000'> "+superifice+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u³</a1>  <br> ou <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(superfície)</a1> = <a1 style='color: #FF0000'> "+superifice2+"π</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u³</a1>          </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.esfera.raior.focus();
	  document.esfera.raior.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 
   
  
  /** *****************************************   Área total da Semiesfera: S = 2.π.h.r + π(2r² - h²)    ****************************************  **/  
	if (a === "areatotalsemiesfera") { 
	  var raior = eval(document.esfera.raior.value.replace(",",".").replace(/ /g,""));
	  var alturah = eval(document.esfera.alturah.value.replace(",",".").replace(/ /g,""));	
	  
	   if ((raior < 0) || isNaN(raior) || raior == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.esfera.raior.focus();
		  document.esfera.raior.select();  
	  return false;
   }    
	   if ((alturah < 0) || isNaN(alturah) || alturah == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
  
	   document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>A área total da superfície da semiesfera parcial é: <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = 2∙π∙<a1 style='font-family: times new roman; font-style:italic;'>h</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>r</a1>  +  π∙(2∙<a1 style='font-family: times new roman; font-style:italic;'>r</a1>² − <a1 style='font-family: times new roman; font-style:italic;'>h</a1>²) <br>   A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = 2∙3,14∙"+alturah+"∙"+raior+" + 3,14∙ [2∙("+raior+")² − ("+alturah+")²]<br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = "+resul1+" + 3,14 ∙ [2∙("+resul2+") − "+resul3+"] <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = "+resul1+" + 3,14 ∙ ("+resul4+" − "+resul3+") <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = "+resul1+" + 3,14 ∙ "+resul5+"  <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = "+resul1+" + "+resul6+"  <br> A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = <a1 style='color: #FF0000'> "+superifice+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>  <br> ou <br>  A<a1 style='font-size: 10px; font-family: times new roman;'>(total)</a1> = <a1 style='color: #FF0000'> "+superifice2+"π</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1> </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.esfera.raior.focus();
	  document.esfera.raior.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 
  
	  
  /** ********************************    Raio c da Semiesfera: c = √(r² - h²)    ********************************  **/  
	if (a === "raiocdasemiesfera") { 
	  var raior = eval(document.esfera.raior.value.replace(",",".").replace(/ /g,""));
	  var alturah = eval(document.esfera.alturah.value.replace(",",".").replace(/ /g,""));	
	  
	   if ((raior < 0) || isNaN(raior) || raior == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.esfera.raior.focus();
		  document.esfera.raior.select();  
	  return false;
   }    
	   if ((alturah < 0) || isNaN(alturah) || alturah == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
  
	   document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 24px;'>O raio c da semiesfera parcial é: <br>  c = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'><a1 style='font-family: times new roman; font-style:italic;'>r</a1>² - <a1 style='font-family: times new roman; font-style:italic;'>h</a1>²</a1> <br>   c = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>("+raior+")² − ("+alturah+")</a1>²</a1> <br>   c = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+result1+" − "+result2+"</a1> <br>    c = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+result3+" </a1> <br>  c = <a1 style='color: #FF0000'> "+raioc+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u</a1>  </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.esfera.raior.focus();
	  document.esfera.raior.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 	
	  
	  
  /** ********************    Área do circulo de raio c da Semiesfera: A = π.(r² - h²)    ****************************************  **/  
	if (a === "areaderaiocdasemiesfera") { 
	  var raior = eval(document.esfera.raior.value.replace(",",".").replace(/ /g,""));
	  var alturah = eval(document.esfera.alturah.value.replace(",",".").replace(/ /g,""));	
	  
	   if ((raior < 0) || isNaN(raior) || raior == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.esfera.raior.focus();
		  document.esfera.raior.select();  
	  return false;
   }    
	   if ((alturah < 0) || isNaN(alturah) || alturah == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
  
	   document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 22px;'>A área do círculo de raio c da semiesfera parcial é: <br> A = π(<a1 style='font-family: times new roman; font-style:italic;'>r</a1>² − <a1 style='font-family: times new roman; font-style:italic;'>h</a1>²)  <br> A = 3,14 ∙ [("+raior+")² − ("+alturah+")²]  <br>  A = 3,14 ∙ ["+resul2+" - "+resul3+"] <br> A = 3,14 ∙ "+resul4+" <br>  A = <a1 style='color: #FF0000'> "+arearaioc+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>  <br> ou <br>   A = <a1 style='color: #FF0000'> "+arearaioc2+"π</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>        </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.esfera.raior.focus();
	  document.esfera.raior.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 	
	  
  
   /** ******************************    Volume da Semiesfera: V = 1/3.π.h.(3r² - h²)   ****************************************  **/  
	if (a === "volumedasemiesfera") {
	  var raior = eval(document.esfera.raior.value.replace(",",".").replace(/ /g,""));
	  var alturah = eval(document.esfera.alturah.value.replace(",",".").replace(/ /g,""));	
	  
	   if ((raior < 0) || isNaN(raior) || raior == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
		  document.esfera.raior.focus();
		  document.esfera.raior.select();  
	  return false;
   }    
	   if ((alturah < 0) || isNaN(alturah) || alturah == "" ) { alert("Digite um/os valor(es) numérico(s) e/ou não negativo(s)!");
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
  
	   document.getElementById('resposta').innerHTML ="<hr> O Volume da semiesfera parcial é: <br> <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> π ∙ <a1 style='font-family: times new roman; font-style:italic;'>h</a1> ∙ (3∙<a1 style='font-family: times new roman; font-style:italic;'>r</a1>² − <a1 style='font-family: times new roman; font-style:italic;'>h</a1>²) </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> 3,14 ∙ "+alturah+" ∙ [3∙("+raior+")² − ("+alturah+")²] </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> 3,14 ∙ "+alturah+" ∙ [3∙"+resul2+" − "+resul3+"] </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+resul5+" ∙ ["+resul4+" − "+resul3+"] </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+resul5+" ∙ "+resul6+" </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> V &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+resul7+" </td></tr><tr><td style='text-align:center;'> 3 </td></tr></tbody></table>   </div>  V = <a1 style='color: #FF0000'> "+Volumesemiesfera+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>  <br> ou <br>  V = <a1 style='color: #FF0000'> "+Volumesemiesfera2+"π</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>   <hr><h1 class='logomarca'> JPP </h1> " 
	 
	  document.esfera.raior.focus();
	  document.esfera.raior.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  } 	
  }
  
  
  /***######################################### CONTAGEM  ############################################################      **/
  
  function contagem2() {
	var a = document.forms["contagem"]["contagem_type"].value;
  
  /** *****************************************************   contagem: Fatorial: = n!    ****************************************  **/     
   if (a === "fatorial") {
	  document.getElementById("elementosp").disabled = true;	
	  document.getElementById("elementosp").value ="";	
	   document.getElementById("elementosn").disabled = false;	
   }
   try { 	}
	   catch(e) {alert(e)}	  
	
	
  /** ******************************   contagem: Permutação simples: (P_(n) = n!   *****************************  **/  
   if (a === "permutaçãosimples") {
	  document.getElementById("elementosp").disabled = true;	
	  document.getElementById("elementosp").value ="";
	   document.getElementById("elementosn").disabled = false;	
	  
   }
   try { 	}
	   catch(e) {alert(e)}	  
	  
	  
  /** ******************************   contagem: arranjo simples: (A_(n,p) = n!/(n - p)!   *****************************  **/  
   if (a === "arranjosimples") {
	   document.getElementById("elementosn").disabled = false;		
	   document.getElementById("elementosp").disabled = false;	
   }
   try { 	}
	   catch(e) {alert(e)}
	  
		  
  /** ******************************   contagem: combinação simples: (C_(n,p) = n!/p!.(n - p)!   *****************************  **/  
   if (a === "combinaçãosimples") {
	   document.getElementById("elementosn").disabled = false;		
	   document.getElementById("elementosp").disabled = false;	
  
   }
   try { 	}
	   catch(e) {alert(e)}
  } 
   
   
  function contagem1() {
   var ddl = document.getElementById("ops");
   var selectedValue = ddl.options[ddl.selectedIndex].value;
	  if (selectedValue == "")
	 {
	  alert("Escolha uma opção para Calcular!");
	 } 	
	  
	var a = document.forms["contagem"]["contagem_type"].value;
	
   /** ************************************   contagem: Fatorial: = n!    ****************************************  **/   
  
	if (a === "fatorial") { 
	 var elementosn = parseFloat(document.contagem.elementosn.value.replace(",", "."));  
		  
   if ((elementosn < 0) || isNaN(elementosn) ) { alert("O valor deve ser um número não negativo!");
	  document.contagem.elementosn.focus();
	  document.contagem.elementosn.select(); 	
	 return false;
  }
  
   try {
   var elementosn = document.getElementById("resposta").value = roundNumber(elementosn, 0);	 
		  a11 = 1;
		  b11 = 1;
		  c11 = 1;		
	  for(x = 1; x <= elementosn; x++)
		{
		  c11 = a11 * b11;
		  a11 = c11;
		  b11 = b11 + 1;
		}
		  f11 = c11
				   {
					   resultado= elementosn+"! ";
					   if( elementosn>1 )
					   {
					   resultado= elementosn+"! = ";
						   for(var i=elementosn; i>0; i--)
						   {
							   if( i!= i+1 )
								   resultado+= i+ ' · ';
							   else
								   resultado+ "=";
						  }
					  resultado = resultado.substring(i-2, resultado.length - 2);  // elimina o último ponto							
					  }
					   resultado+=  " = <a1 style='color: #FF0000'>" +f11 ;
		  }
  
		document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 25px;'> O valor do fatorial <a1 style='color: #FF0000'>"+elementosn.toFixed(0)+"</a1>! é: <br> "+resultado+" </div>  <hr><h1 class='logomarca'> JPP </h1> " 
  
	  document.contagem.elementosn.focus();
	  document.contagem.elementosn.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }	
  
	  
  /** ************************    contagem: Permutação simples: (P_(n) = n!    ****************************************  **/  
	if (a === "permutaçãosimples") { 
	 var elementosn = parseFloat(document.contagem.elementosn.value.replace(",", "."));  
  
   if ((elementosn < 0)) { alert("O(s) valor(es) deve(m) ser(em) positivo(s)!");
	return false;
   }
   
   try {
   var elementosn = document.getElementById("resposta").value = roundNumber(elementosn, 0);	 
	   //////////////////////////////////////////////////
		  a11 = 1;
		  b11 = 1;
		  c11 = 1;
	  for(x=1; x<= elementosn; x++)
		{
		  c11 = a11 * b11;
		  a11 = c11;
		  b11 = b11 + 1;
		}
		  f11 = c11
	  /////////////////////////////////////////////////////		
   
	   document.getElementById('resposta').innerHTML ="<hr> O valor da permutação simples <a1 style='color: #FF0000'>"+elementosn.toFixed(0)+"</a1>! é: <br> <div style='line-height: 16px;'>   P<a1 style='font-size: 10px; font-family: times new roman;'>n</a1> =&nbsp; <a1 style='font-family: times new roman; font-style:italic;'>n</a1>!  <br>     P<a1 style='font-size: 10px; font-family: times new roman;'>"+elementosn.toFixed(0)+"</a1> =&nbsp; <a1 style='font-family: times new roman;  '>"+elementosn.toFixed(0)+"</a1>!  <br> P<a1 style='font-size: 10px; font-family: times new roman;'>"+elementosn.toFixed(0)+"</a1> =&nbsp;  <a1 style='color: #FF0000'> "+f11.toFixed(0)+"</a1>" +"&nbsp  </div>   <hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.contagem.elementosn.focus();
	  document.contagem.elementosn.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }	  
	
  /** **********************   contagem: arranjo simples: (A_(n,p) = n!/(n - p)!    ****************************************  **/  
	if (a === "arranjosimples") { 
	 var elementosn = parseFloat(document.contagem.elementosn.value.replace(",", "."));  
	 var elementosp = parseFloat(document.contagem.elementosp.value.replace(",", ".")); 
  
   if ((elementosn < 0) || (elementosp < 0)) { alert("O(s) valor(es) deve(m) ser(em) positivo(s)!");
	return false;
   }
   
   if ((elementosn < elementosp)) { alert("n deve ser maior que p!!!");
	return false;
   }
   
   try {
   var elementosn = document.getElementById("resposta").value = roundNumber(elementosn, 0);
   var elementosp = document.getElementById("resposta").value = roundNumber(elementosp, 0); 
	   //////////////////////////////////////////////////
		  a11 = 1;
		  b11 = 1;
		  c11 = 1;		
	  for(x=1; x<= elementosn; x++)
		{
		  c11 = a11 * b11;
		  a11 = c11;
		  b11 = b11+1;
		}
		  f11 = c11
	  /////////////////////////////////////////////////////		
   var resul2 =  elementosn - elementosp ;
  
	  //////////////////////////////////////////////////// 
	  g11= elementosn - elementosp
		  a911 = 1;
		  b911 = 1;
	  for(z=1; z<=g11; z++)
		  {
			  c911 = a911 * b911;
			  a911 = c911;
			  b911 = b911+1;
		  }
			  f911= c911
		  
   var arranjosimples =  f11 / f911;
   
	   document.getElementById('resposta').innerHTML ="<hr> O Arranjo simples é: <br> <div style='line-height: 16px;'>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>  A<a1 style='font-size: 10px; font-family: times new roman;'>n,p</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1>! </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+elementosn+"! </td></tr> <tr> <td> (<a1 style='font-family: times new roman; font-style:italic;'>n</a1> - <a1 style='font-family: times new roman; font-style:italic;'>p</a1>)! </td><td> ("+elementosn+" - "+elementosp+")! </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>"+elementosn+","+elementosp+"</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+f11+" </td></tr><tr><td style='text-align:center;'> "+resul2+"! </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>"+elementosn+","+elementosp+"</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+f11+" </td></tr><tr><td style='text-align:center;'> "+f911+" </td></tr></tbody></table>    A<a1 style='font-size: 10px; font-family: times new roman;'>"+elementosn+","+elementosp+"</a1> =&nbsp; <a1 style='color: #FF0000'> "+arranjosimples+"</a1>" +"&nbsp    </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.contagem.elementosn.focus();
	  document.contagem.elementosn.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** ***************   contagem: combinação simples: (C_(n,p) = n!/p!.(n - p)!    ****************************************  **/  
	if (a === "combinaçãosimples") { 
	 var elementosn = parseFloat(document.contagem.elementosn.value.replace(",", "."));  
	 var elementosp = parseFloat(document.contagem.elementosp.value.replace(",", ".")); 
  
   if ((elementosn < 0) || (elementosp < 0)) { alert("O(s) valor(es) deve(m) ser(em) positivo(s)!");
	return false;
   }
   
   if ((elementosn < elementosp)) { alert("n deve ser maior que p!!!");
	return false;
   }
   
   try {
   var elementosn = document.getElementById("resposta").value = roundNumber(elementosn, 0);
   var elementosp = document.getElementById("resposta").value = roundNumber(elementosp, 0); 	 
   //////////////////////////////////////////////////
		  a11 = 1;
		  b11 = 1;
		  c11 = 1;		
	  for(x=1; x<= elementosn; x++)
		{
		  c11 = a11 * b11;
		  a11 = c11;
		  b11 = b11+1;
		}
		  f11 = c11
		  
	/////////////////////////////////////////////////////	
		  k11 = 1;
		  g11 = 1;
	  for(x=1; x<= elementosp; x++)
		{
		  h11 = k11 * g11;
		  k11 = h11;
		  g11 = g11+1;
		}
		  m11 = h11
	  
	  //////////////////////////////////////////////////// 	
   var resul2 =  elementosn - elementosp ;
  
	  //////////////////////////////////////////////////// 
	  g11= elementosn - elementosp
		  a911 = 1;
		  b911 = 1;
	  for(z=1; z<=g11; z++)
		  {
			  c911 = a911 * b911;
			  a911 = c911;
			  b911 = b911+1;
		  }
			  f911= c911
  
   var resul3 =  m11 * f911;			
   var combinaçãosimples =  f11 / resul3;
   
   
	   document.getElementById('resposta').innerHTML ="<hr> A combinação simples é: <br> <div style='line-height: 17px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> C<a1 style='font-size: 10px; font-family: times new roman;'>n,p</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1>! </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+elementosn+"! </td></tr> <tr> <td> <a1 style='font-family: times new roman; font-style:italic;'>p</a1>! ∙ (<a1 style='font-family: times new roman; font-style:italic;'>n</a1> - <a1 style='font-family: times new roman; font-style:italic;'>p</a1>)! </td><td>"+elementosp+"! ∙ ("+elementosn+" - "+elementosp+")!</td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> C<a1 style='font-size: 10px; font-family: times new roman;'>"+elementosn.toFixed(0)+","+elementosp+"</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+elementosn+"!  </td></tr><tr><td style='text-align:center;'> "+elementosp+"! ∙ "+resul2+"! </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> C<a1 style='font-size: 10px; font-family: times new roman;'>"+elementosn+","+elementosp+"</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+f11.toFixed(0)+" </td></tr><tr><td style='text-align:center;'> "+m11+" ∙ "+f911+" </td></tr></tbody></table>     <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> C<a1 style='font-size: 10px; font-family: times new roman;'>"+elementosn+","+elementosp+"</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+f11+" </td></tr><tr><td style='text-align:center;'> "+resul3+" </td></tr></tbody></table>    C<a1 style='font-size: 10px; font-family: times new roman;'>"+elementosn+","+elementosp+"</a1> =&nbsp; <a1 style='color: #FF0000'> "+combinaçãosimples+"</a1>" +"&nbsp    </div> <hr> <h1 class='logomarca'> JPP </h1>" 
	 
	  document.contagem.elementosn.focus();
	  document.contagem.elementosn.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
	}
  
  
  /***#############################  PROGRESSÃO ARITMÉTICA  P.A.  ##############################################      **/
  
  function PA2() {
	var a = document.forms["PA"]["PA_type"].value;
  /** ******************************   razão: (r = an - a_(n-1)   *****************************  **/  
   if (a === "razãoPA") {
	  document.getElementById("razaor").disabled = true;
	  document.getElementById("razaor").value ="";
	  document.getElementById("a_1").disabled = true;
	  document.getElementById("a_1").value ="";
	  document.getElementById("n").disabled = true;	
	  document.getElementById("n").value ="";	
	  document.getElementById("S_n").disabled = true;	
	  document.getElementById("S_n").value ="";
	   document.getElementById("a_n").disabled = false;	
	   document.getElementById("a_n1").disabled = false;	
   }
   try { 	}
	   catch(e) {alert(e)}
  
  /** ******************************   Último termo a_n: (a_n = a_1 + (n - 1).r)   *****************************  **/  
   if (a === "an") {
	  document.getElementById("a_n1").disabled = true;
	  document.getElementById("a_n1").value ="";
	  document.getElementById("a_n").disabled = true;	
	  document.getElementById("a_n").value ="";	
	  document.getElementById("S_n").disabled = true;	
	  document.getElementById("S_n").value ="";
	   document.getElementById("razaor").disabled = false;	
	   document.getElementById("n").disabled = false;	
	   document.getElementById("a_1").disabled = false;		
   }
   try { 	}
	   catch(e) {alert(e)}
	  
	  
  /** ******************************   Gerar sequência da P.A.   *****************************  **/  
   if (a === "gerarsequencia") {
	  document.getElementById("a_n1").disabled = true;
	  document.getElementById("a_n1").value ="";
	  document.getElementById("a_n").disabled = true;	
	  document.getElementById("a_n").value ="";	
	  document.getElementById("S_n").disabled = true;	
	  document.getElementById("S_n").value ="";
	   document.getElementById("razaor").disabled = false;	
	   document.getElementById("n").disabled = false;	
	   document.getElementById("a_1").disabled = false;		
   }
   try { 	}
	   catch(e) {alert(e)}	
	  
	  
  /** ******************************   Primeiro termo a_1: (a_1 = a_n - (n - 1).r)   *****************************  **/  
   if (a === "a_1") {
	  document.getElementById("a_n1").disabled = true;
	  document.getElementById("a_n1").value ="";
	  document.getElementById("a_1").disabled = true;	
	  document.getElementById("a_1").value ="";	
	  document.getElementById("S_n").disabled = true;	
	  document.getElementById("S_n").value ="";
	   document.getElementById("razaor").disabled = false;	
	   document.getElementById("n").disabled = false;	
	   document.getElementById("a_n").disabled = false;		
   }
   try { 	}
	   catch(e) {alert(e)}	
	  
  /** ******************************   razão: (r = a_n - a_1)/(n-1))   *****************************  **/  
   if (a === "razao") {
	  document.getElementById("a_n1").disabled = true;
	  document.getElementById("a_n1").value ="";
	  document.getElementById("razaor").disabled = true;	
	  document.getElementById("razaor").value ="";	
	  document.getElementById("S_n").disabled = true;	
	  document.getElementById("S_n").value ="";
	   document.getElementById("a_1").disabled = false;	
	   document.getElementById("a_n").disabled = false;
	  document.getElementById("n").disabled = false;		
   }
   try { 	}
	   catch(e) {alert(e)}
  
  /** ******************************   número de terrmos n: (n = (a_n - a_1)/r) + 1   *****************************  **/  
   if (a === "ntermos") {
	  document.getElementById("a_n1").disabled = true;
	  document.getElementById("a_n1").value ="";
	  document.getElementById("n").disabled = true;	
	  document.getElementById("n").value ="";	
	  document.getElementById("S_n").disabled = true;	
	  document.getElementById("S_n").value ="";
	   document.getElementById("a_1").disabled = false;	
	   document.getElementById("a_n").disabled = false;
	  document.getElementById("razaor").disabled = false;	
	  
   }
   try { 	}
	   catch(e) {alert(e)}
  
  /** ******************************   Soma dos termos S_n: (S_n = (a_n - a_1)*n/   *****************************  **/  
   if (a === "somatermos") {
	  document.getElementById("a_n1").disabled = true;
	  document.getElementById("a_n1").value ="";
	  document.getElementById("razaor").disabled = true;	
	  document.getElementById("razaor").value ="";	
	  document.getElementById("S_n").disabled = true;	
	  document.getElementById("S_n").value ="";
	   document.getElementById("a_1").disabled = false;	
	   document.getElementById("a_n").disabled = false;
	  document.getElementById("n").disabled = false;	
   }
   try { 	}
	   catch(e) {alert(e)}
	  
  /** ******************************  Número de termos n em função da soma: (S_n = (a_n - a_1)*n/   *****************************  **/  
   if (a === "númerotermosSoma") {
	  document.getElementById("a_n1").disabled = true;
	  document.getElementById("a_n1").value ="";
	  document.getElementById("razaor").disabled = true;	
	  document.getElementById("razaor").value ="";	
	  document.getElementById("n").disabled = true;	
	  document.getElementById("n").value ="";
	   document.getElementById("a_1").disabled = false;	
	   document.getElementById("a_n").disabled = false;
	  document.getElementById("S_n").disabled = false;	
   }
   try { 	}
	   catch(e) {alert(e)}
  
  /** ****************************** Último termo a_n em função da soma: (S_n = (a_n - a_1)*n/   *****************************  **/  
   if (a === "ultimotermoSoma") {
	  document.getElementById("a_n1").disabled = true;
	  document.getElementById("a_n1").value ="";
	  document.getElementById("razaor").disabled = true;	
	  document.getElementById("razaor").value ="";	
	  document.getElementById("a_n").disabled = true;	
	  document.getElementById("a_n").value ="";
	   document.getElementById("a_1").disabled = false;	
	   document.getElementById("n").disabled = false;
	  document.getElementById("S_n").disabled = false;	
   }
   try { 	}
	   catch(e) {alert(e)}
	  
  /** ****************************** Primeiro termo a_1 em função da soma: (S_n = (a_n - a_1)*n/   *****************************  **/  
   if (a === "primeirotermoSoma") {
	  document.getElementById("a_n1").disabled = true;
	  document.getElementById("a_n1").value ="";
	  document.getElementById("razaor").disabled = true;	
	  document.getElementById("razaor").value ="";	
	  document.getElementById("a_1").disabled = true;	
	  document.getElementById("a_1").value ="";
	   document.getElementById("a_n").disabled = false;	
	   document.getElementById("n").disabled = false;
	  document.getElementById("S_n").disabled = false;	
   }
   try { 	}
	   catch(e) {alert(e)}	
  } 
	
  function GerarPA() {
		  var a_1 = eval(document.PA.a_1.value.replace(",",".").replace(/ /g,""));
		  var n = parseFloat(document.PA.n.value.replace(",", "."));  
		  var razaor = eval(document.PA.razaor.value.replace(",",".").replace(/ /g,""));		
	  
		  document.PA.resultado.value = "";
		  resultado = "";
  
		  if (isNaN(a_1) ) {alert("Digite o primeiro termo da progressão aritmética (P.A.)!");
			document.PA.a_1.focus();
			document.PA.a_1.select();
			return false;         
		  }
		  if (isNaN(razaor) ) {alert("Digite a razão da progressão aritmética (P.A.)!");
			document.PA.razaor.focus();
			document.PA.razaor.select();
			return false;         
		  }
		  if (isNaN(n) ||  n <= 0) {alert("Digite a quantidade de termos da progressão aritmética (P.A.) e/ou somente números positivos!");
			document.PA.n.focus();
			document.PA.n.select();			  
			return false;         
		  }
  
		  termo = new Array();
		  resultado = a_1 + ", ";
  
			for (i = 2; i <= n; i++) {
			  termo[i] = a_1 * 1 + ((i - 1) * razaor);
			  resultado += termo[i] + ", ";
			}          
		 
		  resultado = resultado.substring(0, resultado.length - 2);  // elimina a última vírgula
		  document.PA.resultado.value = resultado;
		  return false;
  } 
   
   
  function PA1() {
  
   var ddl = document.getElementById("ops");
   var selectedValue = ddl.options[ddl.selectedIndex].value;
	  if (selectedValue == "")
	 {
	  alert("Escolha uma opção para Calcular!");
	 } 	
	  
	var a = document.forms["PA"]["PA_type"].value;
	/** *****************************************************  razão: (r = an - a_(n-1)  ****************************************  **/  
	if (a === "razãoPA") {
	  var a_n = eval(document.PA.a_n.value.replace(",",".").replace(/ /g,""));
	  var a_n1 = eval(document.PA.a_n1.value.replace(",",".").replace(/ /g,""));	
   
   try {
		   if (isNaN(a_n) ) {alert("Digite o segundo termo da progressão aritmética (P.A.)!");
			document.PA.a_n.focus();
			document.PA.a_n.select();		  
			return false;         
		  }
		  if (isNaN(a_n1) ) {alert("Digite o primeiro de termo da progressão aritmética (P.A.)!");
			document.PA.a_n1.focus();
			document.PA.a_n1.select();			  
			return false;         
		  }  
		  
	
   var a_n = document.getElementById("resposta").value = roundNumber(a_n, 2);
   var a_n1 = document.getElementById("resposta").value = roundNumber(a_n1, 2);	
   var razao =  a_n - a_n1;
   var razao = document.getElementById("resposta").value = roundNumber(razao, 2); 
   
	  if(razao > 0) {
		descr = 'crescente';
	   }
	  else  { 
	  if(razao < 0) {
		descr = 'decrescente';
	   }
	  else  { 	
		descr = 'constante';	
	  }	 
	  }	 
	  
	 document.getElementById('resposta').innerHTML =" <hr> <div style='line-height: 22px;'> A razão <a1 style='color: #FF0000'><a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1></a1> da P.A. é: <br>   <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1> = <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>n</a1> - <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>n-1</a1> <br> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1> =  "+a_n+" - ("+a_n1+")  <br>  <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1> = <a1 style='color: #FF0000'> "+razao+"</a1>  </div>  <hr>  Logo, a progressão aritmética é  <a1 style='color: #FF0000; text-decoration: underline;'> "+descr+"</a1>!  <br><br> <h1 class='logomarca'> JPP </h1> " 
	 
	  document.PA.a_n.focus();
	  document.PA.a_n.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
	/** *************************   Último termo a_n: (a_n = a_1 + (n - 1).r)   ****************************************  **/  
	if (a === "an") { 
	  var a_1 = eval(document.PA.a_1.value.replace(",",".").replace(/ /g,""));
	  var n = parseFloat(document.PA.n.value.replace(",", "."));  
	  var razaor = eval(document.PA.razaor.value.replace(",",".").replace(/ /g,""));	  
	
   try {
		  if (isNaN(a_1) ) {alert("Digite o primeiro termo da progressão aritmética (P.A.)!");
			document.PA.a_1.focus();
			document.PA.a_1.select();		  
			return false;         
		  }
		  if (isNaN(razaor) ) {alert("Digite a razão da progressão aritmética (P.A.)!");
			document.PA.razaor.focus();
			document.PA.razaor.select();			  
			return false;         
		  }
		  if (isNaN(n) ||  n <= 0) {alert("Digite a quantidade de termos da progressão aritmética (P.A.) e/ou somente números positivos!");
			document.PA.n.focus();
			document.PA.n.select();			  
			return false;         
		  }	 
   var a_1 = document.getElementById("resposta").value = roundNumber(a_1, 2);
   var razaor = document.getElementById("resposta").value = roundNumber(razaor, 2);	
   var n = document.getElementById("resposta").value = roundNumber(n, 0); 
   var a_n =  a_1 + (n - 1)  * razaor;
   var a_n = document.getElementById("resposta").value = roundNumber(a_n, 2); 
   var result2 =  (n - 1) ;
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 2);  
   var result3 =  (n - 1)  * razaor ;
   var result3 = document.getElementById("resposta").value = roundNumber(result3, 2);   
	 
	 document.getElementById('resposta').innerHTML =" <hr><div style='line-height: 22px;'> O <a1 style='color: #FF0000'><a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman;'>"+n+"</a1></a1> termo da P.A. finita é: <br>  <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>n</a1> = <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>1</a1> + (<a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>n</a1> - 1) ∙ <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>r</a1>  <br>  <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman;'>"+n+"</a1> =  "+a_1+" + ("+n+" - 1) . ("+razaor+")  <br> <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman;'>"+n+"</a1> =  "+a_1+" + "+result2+" . ("+razaor+")  <br> <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman;'>"+n+"</a1> =  "+a_1+" + ("+result3+")  <br>    <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman;'>"+n+"</a1> =<a1 style='color: #FF0000'> "+a_n+"</a1>  <br> <hr> </div>  <input  onclick='GerarPA()' type='button' class='form-control' value='Gerar Sequência' class='btn2' />  <br>	<textarea name='resultado'   rows='3'   style='background-color: #DFDFDF; border: solid 1px #122561; width: 100% ; color: #225651; font: 14px Tahoma' readonly='readonly'></textarea>  <br>    <h1 class='logomarca'> JPP </h1>   " 
	 
	  document.PA.a_1.focus();
	  document.PA.a_1.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
  /** ******************************   Primeiro termo a_1: (a_1 = a_n - (n - 1).r)   *****************************  **/  
   if (a === "a_1") {
	  var a_n = eval(document.PA.a_n.value.replace(",",".").replace(/ /g,""));
	  var n = parseFloat(document.PA.n.value.replace(",", "."));  
	  var razaor = eval(document.PA.razaor.value.replace(",",".").replace(/ /g,"")); 
	
   try {
		  if (isNaN(a_n) ) {alert("Digite o último termo da progressão aritmética (P.A.)!");
			document.PA.a_n.focus();
			document.PA.a_n.select();		  
			return false;         
		  }
		  if (isNaN(razaor) ) {alert("Digite a razão da progressão aritmética (P.A.)!");
			document.PA.razaor.focus();
			document.PA.razaor.select();			  
			return false;         
		  }
		  if (isNaN(n) ||  n <= 0) {alert("Digite a quantidade de termos da progressão aritmética (P.A.) e/ou somente números positivos!");
			document.PA.n.focus();
			document.PA.n.select();			  
			return false;         
		  }	 
   var a_n = document.getElementById("resposta").value = roundNumber(a_n, 2);
   var razaor = document.getElementById("resposta").value = roundNumber(razaor, 2);	
   var n = document.getElementById("resposta").value = roundNumber(n, 0); 
   var a_1 =  a_n - (n - 1) * razaor;
   var a_1 = document.getElementById("resposta").value = roundNumber(a_1, 2); 
   var result2 =  (n - 1) ;
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 2); 
   var result3 =  (n - 1) * razaor ;
   var result3 = document.getElementById("resposta").value = roundNumber(result3, 2);  
	 
	 document.getElementById('resposta').innerHTML =" <hr><div style='line-height: 22px;'> O primeiro termo <a1 style='color: #FF0000'><a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1></a1> da P.A. finita é: <br> <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>n</a1> = <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>1</a1> + (<a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>n</a1> - 1) ∙ <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>r</a1> <br> <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>1</a1> = <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>n</a1> - (<a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>n</a1> - 1) ∙ <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>r</a1>  <br>  <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman;'>1</a1> =  "+a_n+" - ("+n+" - 1) ∙ ("+razaor+")  <br> <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman;'>1</a1> =  "+a_n+" - "+result2+" ∙ ("+razaor+")  <br> <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman;'>1</a1> =  "+a_n+" - ("+result3+")  <br>    <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman;'>1</a1> =<a1 style='color: #FF0000'> "+a_1+"</a1>  <hr>  <h1 class='logomarca'> JPP </h1>  </div>" 
	 
	  document.PA.a_n.focus();
	  document.PA.a_n.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
  /** ******************************   razão: (r = a_n - a_1)/(n-1))   *****************************  **/  
   if (a === "razao") {
	  var a_n = eval(document.PA.a_n.value.replace(",",".").replace(/ /g,""));
	  var n = parseFloat(document.PA.n.value.replace(",", "."));  
	  var a_1 = eval(document.PA.a_1.value.replace(",",".").replace(/ /g,"")); 	 
  
   try {
		  if (isNaN(a_1) ) {alert("Digite o primeiro termo da progressão aritmética (P.A.)!");
			document.PA.a_1.focus();
			document.PA.a_1.select();			  
			return false;         
		  }
		  if (isNaN(n) ||  n <= 0) {alert("Digite a quantidade de termos da progressão aritmética (P.A.) e/ou somente números positivos!");
			document.PA.n.focus();
			document.PA.n.select();			  
			return false;         
		  }
		  if (isNaN(a_n) ) {alert("Digite o último o termo da progressão aritmética (P.A.)!");
			document.PA.a_n.focus();
			document.PA.a_n.select();		  
			return false;         
		  }   
   var a_n = document.getElementById("resposta").value = roundNumber(a_n, 2);
   var a_1 = document.getElementById("resposta").value = roundNumber(a_1, 2);	
   var n = document.getElementById("resposta").value = roundNumber(n, 0); 
   var razaor =  (a_n - a_1)/(n - 1);
   var razaor = document.getElementById("resposta").value = roundNumber(razaor, 2);	 
   var result2 =  a_n - a_1 ;
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 2);	 
   var result3 =  (n - 1) ;
   var result3 = document.getElementById("resposta").value = roundNumber(result3, 2)
	 
	 document.getElementById('resposta').innerHTML =  "<hr> A razão <a1 style='color: #FF0000'><a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1></a1> da P.A. finita é: <br> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>n</a1> = <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>1</a1> + (<a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>n</a1> - 1) ∙ <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1> <br>  "+a_n+" = "+a_1+" + ("+n+" - 1) ∙ <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1> <br> "+a_n+" - ("+a_1+") = "+result3+"<a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1> <br> "+result2+" = "+result3+"<a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1> <br>  <div style='line-height: 16px;'>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1>  &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+result2+" </td></tr><tr><td style='text-align:center;'> "+result3+"  </td></tr></tbody></table>  <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1> =<a1 style='color: #FF0000'> "+razaor+"</a1> </div>   <hr> <h1 class='logomarca'> JPP </h1>" 
	 
	  document.PA.a_n.focus();
	  document.PA.a_n.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** ******************************   número de termos n: (n = (a_n - a_1)/r) + 1   *****************************  **/  
   if (a === "ntermos") {
	  var a_n = eval(document.PA.a_n.value.replace(",",".").replace(/ /g,""));
	  var razaor = eval(document.PA.razaor.value.replace(",",".").replace(/ /g,""));
	  var a_1 = eval(document.PA.a_1.value.replace(",",".").replace(/ /g,"")); 	 
	
   try {
		  if (isNaN(a_1) ) {alert("Digite o primeiro termo da progressão aritmética (P.A.)!");
			document.PA.a_1.focus();
			document.PA.a_1.select();			  
			return false;         
		  }
		  if (isNaN(razaor) ) {alert("Digite a razão da progressão aritmética (P.A.)!");
			document.PA.razaor.focus();
			document.PA.razaor.select();			  
			return false;         
		  }
		  if (isNaN(a_n) ) {alert("Digite o último o termo da progressão aritmética (P.A.)!");
			document.PA.a_n.focus();
			document.PA.a_n.select();			  
			return false;         
		  }    
   var a_n = document.getElementById("resposta").value = roundNumber(a_n, 2);
   var a_1 = document.getElementById("resposta").value = roundNumber(a_1, 2);	
   var razaor = document.getElementById("resposta").value = roundNumber(razaor, 2); 
   var n =  ((a_n - a_1)/(razaor)) + 1;
   var n = document.getElementById("resposta").value = roundNumber(n, 2); 
   var result2 =  a_n - a_1 ;
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 2); 
   var result3 =  (a_n - a_1)/(razaor) ;
   var result3 = document.getElementById("resposta").value = roundNumber(result3, 2);  
	 
	 document.getElementById('resposta').innerHTML ="<hr> O número de termos <a1 style='color: #FF0000'><a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>n</a1></a1> da P.A. finita é: <br> <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>n</a1> = <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>1</a1> + (<a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>n</a1> - 1) ∙ <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>r</a1> <br> "+a_n+" = "+a_1+" + (<a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>n</a1> - 1) ∙ ("+razaor+") <br> "+a_n+" - ("+a_1+") = (<a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>n</a1> - 1) ∙ ("+razaor+") <br> "+result2+" = (<a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>n</a1> - 1) ∙ ("+razaor+") <br> <div style='line-height: 17px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>n</a1> - 1 &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+result2+"  </td></tr><tr><td style='text-align:center;'> "+razaor+" </td></tr></tbody></table>   </div>  <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>n</a1> - 1 =&nbsp; "+result3+" <br>  <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>n</a1> =&nbsp; "+result3+" + 1  <br>  <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>n</a1> =<a1 style='color: #FF0000'> "+n+"</a1> <hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.PA.a_n.focus();
	  document.PA.a_n.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** ******************************   Soma dos termos S_n: (S_n = (a_n - a_1)*n/2   *****************************  **/  
   if (a === "somatermos") {
	  var a_n = eval(document.PA.a_n.value.replace(",",".").replace(/ /g,""));
	  var n = parseFloat(document.PA.n.value.replace(",", "."));  
	  var a_1 = eval(document.PA.a_1.value.replace(",",".").replace(/ /g,"")); 	 
	
   try {
		  if (isNaN(a_1) ) {alert("Digite o primeiro termo da progressão aritmética (P.A.)!");
			document.PA.a_1.focus();
			document.PA.a_1.select(); 		  
			return false;         
		  }
		  if (isNaN(n) ||  n <= 0) {alert("Digite a quantidade de termos da progressão aritmética (P.A.) e/ou somente números positivos!");
			document.PA.n.focus();
			document.PA.n.select();			  
			return false;         
		  }
		  if (isNaN(a_n) ) {alert("Digite o último o termo da progressão aritmética (P.A.)!");
			document.PA.a_n.focus();
			document.PA.a_n.select(); 		  
			return false;         
		  } 
   var a_n = document.getElementById("resposta").value = roundNumber(a_n, 2);
   var a_1 = document.getElementById("resposta").value = roundNumber(a_1, 2);	
   var n = document.getElementById("resposta").value = roundNumber(n, 0); 
   var S_n =  ((a_1 + a_n)*n)/2;
   var S_n = document.getElementById("resposta").value = roundNumber(S_n, 2); 
   var result2 =  (a_1 + a_n) ;
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 2);  
   var result3 =  ((a_1 + a_n)*n) ;
   var result3 = document.getElementById("resposta").value = roundNumber(result3, 2); 
	 
	 document.getElementById('resposta').innerHTML =" <hr> A soma dos <a1 style='color: #FF0000'>"+n+"</a1> primeiros termos da P.A. finita é:  <br> <div style='line-height: 15px;'><table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  [<a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>1</a1> + <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>n</a1>] ∙ <a1 style='font-family: times new roman; font-style:italic;'>n</a1> </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman; '>2</a1> </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> ["+a_1+" + ("+a_n+")] ∙ "+n+" </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman; '>2</a1> </td></tr></tbody></table>      <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+result2+" ∙ "+n+" </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman; '>2</a1> </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+result3+" </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman; '>2</a1> </td></tr></tbody></table>  </div> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1> =<a1 style='color: #FF0000'> "+S_n+"</a1> <hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.PA.a_1.focus();
	  document.PA.a_1.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }	 
	   
  /** ******************************  Número de termos n em função da soma: (S_n = (a_n - a_1)*n/2   *****************************  **/  
   if (a === "númerotermosSoma") {	
	  var a_n = eval(document.PA.a_n.value.replace(",",".").replace(/ /g,""));
	  var S_n = eval(document.PA.S_n.value.replace(",",".").replace(/ /g,""));	
	  var a_1 = eval(document.PA.a_1.value.replace(",",".").replace(/ /g,""));  
	
   try {
		  if (isNaN(a_1) ) {alert("Digite o primeiro termo da progressão aritmética (P.A.)!");
			document.PA.a_1.focus();
			document.PA.a_1.select(); 		  
			return false;         
		  }
		  if (isNaN(S_n) ) {alert("Digite a soma do termos da progressão aritmética (P.A.)!");
			document.PA.S_n.focus();
			document.PA.S_n.select(); 		  
			return false;         
		  }
		  if (isNaN(a_n)) {alert("Digite o último o termo da progressão aritmética (P.A.)!");
			document.PA.a_n.focus();
			document.PA.a_n.select(); 		  
			return false;         
		  } 
   var a_n = document.getElementById("resposta").value = roundNumber(a_n, 2);
   var a_1 = document.getElementById("resposta").value = roundNumber(a_1, 2);	
   var S_n = document.getElementById("resposta").value = roundNumber(S_n, 2); 
   var n =  (2*S_n)/(a_1 + a_n);
   var n = document.getElementById("resposta").value = roundNumber(n, 2);  
   var result2 =  (a_1 + a_n) ;
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 2);  
   var result3 =  2*S_n ; 
   var result3 = document.getElementById("resposta").value = roundNumber(result3, 2);   
   
	 document.getElementById('resposta').innerHTML ="<hr>  A quantidade de termos <a1 style='font-family: times new roman; font-style:italic;'>n</a1> da P.A. finita é: <br> <div style='line-height: 15px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>n</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  [<a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>1</a1> + <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>n</a1>] ∙ <a1 style='font-family: times new roman; font-style:italic;'>n</a1> </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman;'>2</a1> </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> "+S_n+" &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> ["+a_1+" + ("+a_n+")] ∙ <a1 style='font-size: 16px; font-style:italic; font-family: times new roman; '>n</a1> </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman; '>2</a1> </td></tr></tbody></table>    </div> 2 ∙ ("+S_n+") =&nbsp; "+result2+" ∙ <a1 style='font-size: 16px; font-style:italic; font-family: times new roman; '>n</a1> <br> "+result3+" =&nbsp;  "+result2+"<a1 style='font-size: 16px; font-style:italic; font-family: times new roman; '>n</a1> <div style='line-height: 16px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 16px; font-style:italic;'>n</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+result3+" </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman; '>"+result2+"</a1> </td></tr></tbody></table>   </div>  <a1 style='font-family: times new roman; font-style:italic;'>n</a1> =<a1 style='color: #FF0000'> "+n+"</a1> <hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.PA.a_1.focus();
	  document.PA.a_1.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** ****************************** Último termo a_n em função da soma: (S_n = (a_n - a_1)*n/   *****************************  **/  
   if (a === "ultimotermoSoma") {
	  var S_n = eval(document.PA.S_n.value.replace(",",".").replace(/ /g,""));
	  var n = parseFloat(document.PA.n.value.replace(",", "."));  
	  var a_1 = eval(document.PA.a_1.value.replace(",",".").replace(/ /g,""));  	 
	
   try {
		  if (isNaN(a_1) ) {alert("Digite o primeiro termo da progressão aritmética (P.A.)!");
			document.PA.a_1.focus();
			   document.PA.a_1.select(); 		  
			return false;         
		  }
		  if (isNaN(S_n) ) {alert("Digite a soma do termos da progressão aritmética (P.A.)!");
			document.PA.S_n.focus();
			   document.PA.S_n.select(); 		  
			return false;         
		  }
		  if (isNaN(n) ||  n <= 0) {alert("Digite a quantidade de termos da progressão aritmética (P.A.) e/ou somente números positivos!");
			document.PA.n.focus();
			document.PA.n.select();			  
			return false;         
		  }
   var n = document.getElementById("resposta").value = roundNumber(n, 0);
   var a_1 = document.getElementById("resposta").value = roundNumber(a_1, 2);	
   var S_n = document.getElementById("resposta").value = roundNumber(S_n, 2); 
   var a_n =  (2*S_n)/n - a_1;
   var a_n = document.getElementById("resposta").value = roundNumber(a_n, 2);  
   var result2 =  2*S_n ;  
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 2);  
   var result3 =  2*S_n / n;
   var result3 = document.getElementById("resposta").value = roundNumber(result3, 2);  
  
	  document.getElementById('resposta').innerHTML ="<hr>  O valor do termo <a1 style='color: #FF0000'><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1></a1> da P.A. finita é: <br> <div style='line-height: 15px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>n</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> (<a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>1</a1> + <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>n</a1>) ∙ <a1 style='font-family: times new roman; font-style:italic;'>n</a1> </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman;'>2</a1> </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> "+S_n+"   &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> ("+a_1+" + <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>n</a1>) ∙ "+n+" </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman; '>2</a1> </td></tr></tbody></table>  </div> 2 ∙ ("+S_n+") =&nbsp;  ("+a_1+" + <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>n</a1>) ∙ "+n+" <br>    "+result2+" =&nbsp;  ("+a_1+" + <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>n</a1>) ∙ "+n+" <br>  <div style='line-height: 15px;'>     <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> "+result2+" </td><td rowspan='2'> &nbsp;=&nbsp; "+a_1+" + <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>n</a1>  </td></tr><tr><td>  "+n+" </td> </tr></tbody></table>  </div>   "+result3+" = "+a_1+" + <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>n</a1>  <br>   <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>n</a1> =  "+result3+" - ("+a_1+") <br>  <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>n</a1> = <a1 style='color: #FF0000'> "+a_n+"</a1> <hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.PA.a_1.focus();
	  document.PA.a_1.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }	
  
  /** ****************************** Primeiro termo a_1 em função da soma: (S_n = (a_n - a_1)*n/   *****************************  **/  
   if (a === "primeirotermoSoma") {
	  var S_n = eval(document.PA.S_n.value.replace(",",".").replace(/ /g,""));
	  var n = parseFloat(document.PA.n.value.replace(",", "."));  
	  var a_n = eval(document.PA.a_n.value.replace(",",".").replace(/ /g,""));  	 
	
   try {
		  if (isNaN(a_n) ) {alert("Digite o último termo da progressão aritmética (P.A.)!");
			document.PA.a_n.focus();
			return false;         
		  }
		  if (isNaN(S_n) ) {alert("Digite a soma do termos da progressão aritmética (P.A.)!");
			document.PA.S_n.focus();
			return false;         
		  }
		  if (isNaN(n) ||  n <= 0) {alert("Digite a quantidade de termos da progressão aritmética (P.A.) e/ou somente números positivos!");
			document.PA.n.focus();
			document.PA.n.select();			  
			return false;         
		  }
   var n = document.getElementById("resposta").value = roundNumber(n, 0);
   var a_n = document.getElementById("resposta").value = roundNumber(a_n, 2);	
   var S_n = document.getElementById("resposta").value = roundNumber(S_n, 2); 
   var a_1 =  (2*S_n)/n - a_n;
   var a_1 = document.getElementById("resposta").value = roundNumber(a_1, 2);  
   var result2 =  2*S_n ;  
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 2);  
   var result3 =  2*S_n / n;
   var result3 = document.getElementById("resposta").value = roundNumber(result3, 2);   
  
	 document.getElementById('resposta').innerHTML =" <hr> <div style='line-height: 15px;'>O valor do termo <a1 style='color: #FF0000'><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1></a1> da P.A. finita é: <br>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>n</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> (<a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>1</a1> + <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>n</a1>) ∙ <a1 style='font-family: times new roman; font-style:italic;'>n</a1> </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman;'>2</a1> </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> "+S_n+" &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> [<a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> + ("+a_n+")] ∙ "+n+" </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman; '>2</a1> </td></tr></tbody></table>  </div>  2 ∙ ("+S_n+") =&nbsp; [<a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> + ("+a_n+")] ∙ "+n+" <br>  "+result2+" =&nbsp; [<a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> + ("+a_n+")] ∙ "+n+" <br>  <div style='line-height: 15px;'>     <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> "+result2+" </td><td rowspan='2'> &nbsp;=&nbsp;  <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> + ("+a_n+") </td></tr><tr><td> "+n+"  </td> </tr></tbody></table>  </div>   "+result3+" = <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> + ("+a_n+")  <br>   <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> =  "+result3+" - ("+a_n+") <br>  <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> = <a1 style='color: #FF0000'> "+a_1+"</a1> <hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.PA.a_n.focus();
	  document.PA.a_n.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  }
  
  /***##############################  PROGRESSÃO GEOMÉTRICA  P.G.  ###############################################      **/
  
  function PG2() {
	var a = document.forms["PG"]["PG_type"].value;
  /** ******************************   Razão q: (q = a_n / a_n-1)   *****************************  **/  
   if (a === "razaoPG") {
	  document.getElementById("n").disabled = true;
	  document.getElementById("n").value ="";
	  document.getElementById("S_n").disabled = true;	
	  document.getElementById("S_n").value ="";
	  document.getElementById("razaoq").disabled = true;	
	  document.getElementById("razaoq").value ="";
	  document.getElementById("a_1").disabled = true;	
	  document.getElementById("a_1").value ="";	
	   document.getElementById("a_n").disabled = false;
	  document.getElementById("a_n1").disabled = false;	
   }
   try { 	}
	   catch(e) {alert(e)}
	  
  /** ******************************   a_n : (a_n = a1 . q^(n-1)   *****************************  **/  
   if (a === "anPG") {
	  document.getElementById("S_n").disabled = true;	
	  document.getElementById("S_n").value ="";
	  document.getElementById("a_n1").disabled = true;	
	  document.getElementById("a_n1").value ="";	
	  document.getElementById("a_n").disabled = true;	
	  document.getElementById("a_n").value ="";		
	   document.getElementById("n").disabled = false;	
	   document.getElementById("razaoq").disabled = false;
	  document.getElementById("a_1").disabled = false;
   }
   try { 	}
	   catch(e) {alert(e)}	
  
	  
  /** ******************************   a_1 : (a_1 = a_n / q^(n-1)   *****************************  **/  
   if (a === "a_1PG") {
	  document.getElementById("S_n").disabled = true;	
	  document.getElementById("S_n").value ="";
	  document.getElementById("razaoq").disabled = true;	
	  document.getElementById("razaoq").value ="";
	  document.getElementById("a_n1").disabled = true;	
	  document.getElementById("a_n1").value ="";	
	  document.getElementById("a_1").disabled = true;	
	  document.getElementById("a_1").value ="";	
	   document.getElementById("n").disabled = false;	
	   document.getElementById("razaoq").disabled = false;
	  document.getElementById("a_n").disabled = false;
   }
   try { 	}
	   catch(e) {alert(e)}		
	  
  
  /** ******************************   q : (q = (n-1)√(a_n/a_1))   *****************************  **/  
   if (a === "razaoPG2") {
	  document.getElementById("S_n").disabled = true;	
	  document.getElementById("S_n").value ="";
	  document.getElementById("a_n1").disabled = true;	
	  document.getElementById("a_n1").value ="";	
	  document.getElementById("razaoq").disabled = true;	
	  document.getElementById("razaoq").value ="";	
	   document.getElementById("n").disabled = false;	
	   document.getElementById("a_1").disabled = false;
	  document.getElementById("a_n").disabled = false;
   }
   try { 	}
	   catch(e) {alert(e)}		
		  
  
  /** ******************************   S_n finita : (S_n = a_1*(1 - q^n)/(1-q)   *****************************  **/  
   if (a === "somatermosPG") {
	  document.getElementById("S_n").disabled = true;	
	  document.getElementById("S_n").value ="";
	  document.getElementById("razaoq").disabled = true;	
	  document.getElementById("razaoq").value ="";
	  document.getElementById("a_n1").disabled = true;	
	  document.getElementById("a_n1").value ="";	
	  document.getElementById("a_n").disabled = true;	
	  document.getElementById("a_n").value ="";	
	   document.getElementById("n").disabled = false;	
	   document.getElementById("razaoq").disabled = false;
	  document.getElementById("a_1").disabled = false;
   }
   try { 	}
	   catch(e) {alert(e)}	
  
  /** ******************************   S_n infinita : (S_n = a_1 /(1 - q)/   *****************************  **/  
   if (a === "somainfinitatermosPG") {
	  document.getElementById("S_n").disabled = true;	
	  document.getElementById("S_n").value ="";
	  document.getElementById("razaoq").disabled = true;	
	  document.getElementById("razaoq").value ="";
	  document.getElementById("a_n1").disabled = true;	
	  document.getElementById("a_n1").value ="";	
	  document.getElementById("a_n").disabled = true;	
	  document.getElementById("a_n").value ="";
	  document.getElementById("n").disabled = true;	
	  document.getElementById("n").value ="";	
	   document.getElementById("razaoq").disabled = false;
	  document.getElementById("a_1").disabled = false;
   }
   try { 	}
	   catch(e) {alert(e)}	
  
  /** ******************************   n : (n = (n-1)√(a_n/a_1))   *****************************  **/  
   if (a === "numerotermosPG") {
	  document.getElementById("S_n").disabled = true;	
	  document.getElementById("S_n").value ="";
	  document.getElementById("a_n1").disabled = true;	
	  document.getElementById("a_n1").value ="";	
	  document.getElementById("n").disabled = true;	
	  document.getElementById("n").value ="";	
	   document.getElementById("razaoq").disabled = false;	
	   document.getElementById("a_1").disabled = false;
	  document.getElementById("a_n").disabled = false;
   }
   try { 	}
	   catch(e) {alert(e)}	
	  
  } 
  
  function GerarPG() {
		  var a_1 = eval(document.PG.a_1.value.replace(",",".").replace(/ /g,""));
		  var n = parseFloat(document.PG.n.value.replace(",", "."));  
		  var razaoq = eval(document.PG.razaoq.value.replace(",",".").replace(/ /g,""));  	
  
		  document.PG.resultado.value = "";
		  resultado = "";
  
		  if (isNaN(a_1) || a_1 == "") {alert("Digite o primeiro termo da progressão geométrica (P.G.) ou digite um número não nulo!");
			document.PG.a_1.focus();
			document.PG.a_1.select();			  
			return false;         
		  }
		  if (isNaN(razaoq)  ) {
			alert("Digite a razão da progressão");
			document.PG.razaoq.focus();
			document.PG.razaoq.select(); 			  
			return false;         
		  }
		  if (isNaN(n) ||  n <= 0) {alert("Digite a quantidade de termos da progressão aritmética (P.A.) e/ou somente números positivos!");
			document.PG.n.focus();
			document.PG.n.select();			  
			return false;         
		  }		
		  
		  termo = new Array();
		  resultado = a_1 + ", ";
			for (i = 2; i <= n; i++) {
			  termo[i] = a_1 * Math.pow(razaoq, i - 1);
			  resultado += termo[i] + ", ";
			}        
	   
		  resultado = resultado.substring(0, resultado.length - 2);  // elimina a última vírgula
		  document.PG.resultado.value = resultado;
		  return false;
		}
  
  function PG1() {
  
   var ddl = document.getElementById("ops");
   var selectedValue = ddl.options[ddl.selectedIndex].value;
	  if (selectedValue == "")
	 {
	  alert("Escolha uma opção para Calcular!");
	 } 
	 
	var a = document.forms["PG"]["PG_type"].value;
	/** ****************************************  razão: (r = an / a_(n-1)  ****************************************  **/  
	if (a === "razaoPG") {
		  var a_n = eval(document.PG.a_n.value.replace(",",".").replace(/ /g,""));
		  var a_n1 = eval(document.PG.a_n1.value.replace(",",".").replace(/ /g,""));  	  
	
   try {
		  if (isNaN(a_n) ) {alert("Digite o segundo termo da progressão geométrica (P.G.)!");
			document.PG.a_n.focus();
			document.PG.a_n.select(); 		  
			return false;         
		  }
		  if (isNaN(a_n1) ) {alert("Digite o primeiro de termo da progressão geométrica (P.G.)!");
			document.PG.a_n1.focus();
			document.PG.a_n1.select(); 		  
			return false;         
		  }  
   var a_n = document.getElementById("resposta").value = roundNumber(a_n, 2);
   var a_n1 = document.getElementById("resposta").value = roundNumber(a_n1, 2);
   var razao =  a_n / a_n1;
   var razao = document.getElementById("resposta").value = roundNumber(razao, 2); 
   
	 document.getElementById('resposta').innerHTML ="<hr> A razão <a1 style='color: #FF0000'><a1 style='font-family: times new roman;font-size: 18px; font-style:italic;'>q</a1></a1> da progressão geométrica é: <br>   <div style='line-height: 15px;'>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'>  <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>q</a1>  &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman; font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>n</a1> </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman; font-style:italic; font-size: 20px;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>n-1</a1> </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'>  <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>q</a1>  &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+a_n+" </td></tr><tr><td style='text-align:center;'> "+a_n1+" </td></tr></tbody></table></div>    <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>q</a1> = <a1 style='color: #FF0000'> "+razao+"</a1>    <hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.PG.a_n.focus();
	  document.PG.a_n.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** ******************************   a_n : (a_n = a1 . q^(n-1)   *****************************  **/  
   if (a === "anPG") {
		  var a_1 = eval(document.PG.a_1.value.replace(",",".").replace(/ /g,""));
		  var n = parseFloat(document.PG.n.value.replace(",", "."));  
		  var razaoq = eval(document.PG.razaoq.value.replace(",",".").replace(/ /g,""));  	 
	
   try {
		  if (isNaN(a_1) || a_1 == "") {alert("Digite o primeiro termo da progressão geométrica (P.G.) ou digite um número não nulo!");
			document.PG.a_1.focus();
			document.PG.a_1.select();			  
			return false;         
		  } 	 
		  if (isNaN(n) ||  n <= 0) {alert("Digite a quantidade de termos da progressão aritmética (P.A.) e/ou somente números positivos!");
			document.PG.n.focus();
			document.PG.n.select();			  
			return false;         
		  }		
		  if (isNaN(razaoq) ) {alert("Digite a razão da progressão geométrica (P.G.)!");
			document.PG.razaoq.focus();
			document.PG.razaoq.select();		  
			return false;         
		  }		
   var a_1 = document.getElementById("resposta").value = roundNumber(a_1, 2);
   var n = document.getElementById("resposta").value = roundNumber(n, 0);
   var razaoq = document.getElementById("resposta").value = roundNumber(razaoq, 2);
   var a_n =  a_1 * Math.pow(razaoq,n-1);
   var a_n = document.getElementById("resposta").value = roundNumber(a_n, 2); 
   var result2 =  n-1; 
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 2);  
   var result3 =  Math.pow(razaoq,n-1); 
   var result3 = document.getElementById("resposta").value = roundNumber(result3, 2);   
	 
	 document.getElementById('resposta').innerHTML =" <hr> <div style='line-height: 20px;'>O termo geral <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;' >a</a1><a1 style='font-size: 10px; font-family: times new roman; color:#ff0000; '>"+n+"</a1> da progressão geométrica finita é: <br>   <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>n</a1> = <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>q</a1><span class='exp'>(<a1 style='font-family: times new roman; font-style:italic;'>n</a1> - 1)</span> <br>  <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1> = "+a_1+" ∙ ("+razaoq+")<span class='exp'>("+n+" - 1)</span> <br>  <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1> = "+a_1+" ∙ ("+razaoq+")<span class='exp'>"+result2+" </span> <br>   <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1> = "+a_1+" ∙ ("+result3+") <br>  <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1> =<a1 style='color: #FF0000'> "+a_n+"</a1></div>     <hr>   <input onclick='GerarPG()' type='button' class='form-control' value='Gerar Sequência' class='btn2' />  <br>	<textarea name='resultado'   rows='3'   style='background-color: #DFDFDF; border: solid 1px #122561; width: 100% ; color: #225651; font: 14px Tahoma' readonly='readonly'></textarea>  <br>   <hr><h1 class='logomarca'> JPP </h1>  " 
	 
	  document.PG.a_1.focus();
	  document.PG.a_1.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }		 
  
  /** ******************************   a_1 : (a_1 = a_n / q^(n-1)   *****************************  **/  
   if (a === "a_1PG") {
		  var a_n = eval(document.PG.a_n.value.replace(",",".").replace(/ /g,""));
		  var n = parseFloat(document.PG.n.value.replace(",", "."));  
		  var razaoq = eval(document.PG.razaoq.value.replace(",",".").replace(/ /g,""));  
	
   try {
		  if (isNaN(n) ||  n <= 0) {alert("Digite a quantidade de termos da progressão aritmética (P.A.) e/ou somente números positivos!");
			document.PG.n.focus();
			document.PG.n.select();			  
			return false;         
		  }	
		  if (isNaN(a_n) ) {alert("Digite o termo geral da progressão geométrica (P.G.)!");
			document.PG.a_n.focus();
			document.PG.a_n.select();			  
			return false;         
		  }  
		  if (isNaN(razaoq) ) {alert("Digite a razão da progressão geométrica (P.G.)!");
			document.PG.razaoq.focus();
			document.PG.razaoq.select();			  
			return false;         
		  }
   var a_n = document.getElementById("resposta").value = roundNumber(a_n, 2);
   var n = document.getElementById("resposta").value = roundNumber(n, 0);
   var razaoq = document.getElementById("resposta").value = roundNumber(razaoq, 2);
   var a_1 =  a_n / Math.pow(razaoq,n-1);
   var a_1 = document.getElementById("resposta").value = roundNumber(a_1, 2); 
   var result2 =  n-1; 
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 2); 
   var result3 =  Math.pow(razaoq,n-1); 
   var result3 = document.getElementById("resposta").value = roundNumber(result3, 2);  
	 
	 document.getElementById('resposta').innerHTML ="<hr> O primeiro termo <a1 style='color: #FF0000'><a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1></a1> da progressão geométrica finita é: <br> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>n</a1> = <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>q</a1><span class='exp'>(<a1 style='font-family: times new roman; font-style:italic;'>n</a1> - 1)</span>  <br> "+a_n+" = <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> ∙ ("+razaoq+")<span class='exp'>("+n+" - 1)</span>  <br>  <div style='line-height: 15px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+a_n+" </td></tr><tr><td style='text-align:center;'> ("+razaoq+")<span class='exp'>"+result2+" </td></tr></tbody></table>     <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;   text-align:center;'> "+a_n+"  </td></tr><tr><td style='text-align:center;'> "+result3+" </td></tr></tbody></table>   <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> =<a1 style='color: #FF0000'> "+a_1+"</a1> </div><hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.PG.a_1.focus();
	  document.PG.a_1.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }	
  
  /** ******************************   q : (q = (n-1)√(a_n/a_1))   *****************************  **/  
   if (a === "razaoPG2") {
		  var a_n = eval(document.PG.a_n.value.replace(",",".").replace(/ /g,""));
		  var n = parseFloat(document.PG.n.value.replace(",", "."));  
		  var a_1 = eval(document.PG.a_1.value.replace(",",".").replace(/ /g,""));  	 
	
   try {
		  if (isNaN(a_1) || a_1 == "") {alert("Digite o primeiro termo da progressão geométrica (P.G.) ou digite um número não nulo!");
			document.PG.a_1.focus();
			document.PG.a_1.select();			  
			return false;         
		  } 
			
		  if (isNaN(a_n) ) {alert("Digite o termo geral da progressão geométrica (P.G.)!");
			document.PG.a_n.focus();
			document.PG.a_n.select();		  
			return false;         
		  }  
		  if (isNaN(n) ||  n <= 0) {alert("Digite a quantidade de termos da progressão aritmética (P.A.) e/ou somente números positivos!");
			document.PG.n.focus();
			document.PG.n.select();			  
			return false;         
		  }
		  
   var a_n = document.getElementById("resposta").value = roundNumber(a_n, 2);
   var n = document.getElementById("resposta").value = roundNumber(n, 0);
   var a_1 = document.getElementById("resposta").value = roundNumber(a_1, 2);
   var q =  Math.pow(a_n/a_1,1/(n-1));
   var q = document.getElementById("resposta").value = roundNumber(q, 2); 
   var result2 =  n-1; 
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 2);
   var result3 =  a_n / a_1; 
   var result3 = document.getElementById("resposta").value = roundNumber(result3, 2); 
  
	 document.getElementById('resposta').innerHTML ="<hr> A razão <a1 style='font-family: times new roman;font-size: 17px; font-style:italic;'><a1 style='color: #FF0000'>q</a1></a1> da progressão geométrica finita é: <br>  <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>n</a1> = <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>q</a1><span class='exp'>(<a1 style='font-family: times new roman; font-style:italic;'>n</a1> - 1)</span> <br> "+a_n+" = "+a_1+" ∙ <a1 style='font-family: times new roman; font-style:italic;'>q</a1><span class='exp'>("+n+" - 1)</span> <br> <div style='line-height: 14px;'>   <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> "+a_n+" </td><td rowspan='2'> &nbsp;=&nbsp; <a1 style='font-family: times new roman; font-style:italic;'>q</a1><span class='exp'>"+result2+"</span>  </td></tr><tr><td> "+a_1+" </td> </tr></tbody></table>  "+result3+" =  <a1 style='font-family: times new roman; '>q</a1><span class='exp'>"+result2+"</span> <br>  <br>  <a1 style='font-family: times new roman; font-size: 18px; font-style:italic;'>q</a1> =&nbsp;<span class='exp'><a1 style='font-family: times new roman; '>"+result2+"</a1></span>√<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+result3+" </a1> <br>  </div>   <a1 style='font-family: times new roman;font-size: 18px; font-style:italic;'>q</a1> =&nbsp; <a1 style='color: #FF0000'> "+q+"</a1> <hr><h1 class='logomarca'> JPP </h1>" 
	 
	  document.PG.a_1.focus();
	  document.PG.a_1.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }	
  
  /** ******************************   n : (n = (n-1)√(a_n/a_1))   *****************************  **/  
   if (a === "numerotermosPG") {
		  var a_n = eval(document.PG.a_n.value.replace(",",".").replace(/ /g,""));
		  var razaoq = eval(document.PG.razaoq.value.replace(",",".").replace(/ /g,""));		
		  var a_1 = eval(document.PG.a_1.value.replace(",",".").replace(/ /g,"")); 	 
	   
   try {
		  if (isNaN(a_1) || a_1 == "") {alert("Digite o primeiro termo da progressão geométrica (P.G.) ou digite um número não nulo!");
			document.PG.a_1.focus();
			document.PG.a_1.select();			  
			return false;         
		  }	 
		  if (isNaN(razaoq)) {alert("Digite o número de termos da progressão geométrica (P.G.)!");
			document.PG.razaoq.focus();
			document.PG.razaoq.select();		  
			return false;         
		  }
		  if (isNaN(a_n) ) {alert("Digite o termo geral da progressão geométrica (P.G.)!");
			document.PG.a_n.focus();
			document.PG.a_n.select();			  
			return false;         
		  }  
   var a_n = document.getElementById("resposta").value = roundNumber(a_n, 2);
   var razaoq = document.getElementById("resposta").value = roundNumber(razaoq, 2);
   var a_1 = document.getElementById("resposta").value = roundNumber(a_1, 2);
   var result2 =  razaoq-1; 
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 2);  
   var result3 =  a_n / a_1; 
   var result3 = document.getElementById("resposta").value = roundNumber(result3, 2);  
   var log = Math.log10(result3) / Math.log10(razaoq);
   var log = document.getElementById("resposta").value = roundNumber(log, 2); 
   var n = (Math.log10(result3) / Math.log10(razaoq)) + 1;
   var n = document.getElementById("resposta").value = roundNumber(n, 2);   
  
	 document.getElementById('resposta').innerHTML ="<hr> O número de termos da progressão geométrica finita é: <br>   <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>n</a1> = <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;'>q</a1><span class='exp'>(<a1 style='font-family: times new roman; font-style:italic;'>n</a1> - 1)</span> <br> "+a_n+" = "+a_1+" ∙ "+razaoq+"<span class='exp'>(<a1 style='font-family: times new roman; font-style:italic;'>n</a1> - 1)</span>  <br> <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> "+a_n+" </td><td rowspan='2'> &nbsp;=&nbsp; "+razaoq+"<span class='exp'>(<a1 style='font-family: times new roman; font-style:italic;'>n</a1> - 1)</span>   </td></tr><tr><td> "+a_1+" </td> </tr></tbody></table>   </div> "+result3+" =  "+razaoq+"<span class='exp'>(<a1 style='font-family: times new roman; font-style:italic;'>n</a1> - 1)</span> <br> log("+result3+") =  log("+razaoq+"<span class='exp'>(<a1 style='font-family: times new roman; font-style:italic;'>n</a1> - 1)</span> ) <br>  log("+result3+") = (<a1 style='font-family: times new roman; font-style:italic;'>n</a1> - 1) ∙ log("+razaoq+")<br>   <div style='line-height: 16px;'>      <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> log("+result3+") </td><td rowspan='2'> &nbsp;=&nbsp; <a1 style='font-family: times new roman; font-style:italic;'>n</a1> - 1   </td></tr><tr><td> log("+razaoq+") </td> </tr></tbody></table>       </div>  "+log+" =  <a1 style='font-family: times new roman; font-style:italic;'>n</a1> - 1 <br>  <a1 style='font-family: times new roman; font-style:italic;'>n</a1> = "+log+" + 1        <br>   <a1 style='font-family: times new roman;font-size: 18px; font-style:italic;'>n</a1> =&nbsp; <a1 style='color: #FF0000'> "+n+"</a1> <hr><h1 class='logomarca'> JPP </h1> " 
	 
	  document.PG.a_1.focus();
	  document.PG.a_1.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }	
  
  /** ******************************   S_n finita : (S_n = a_1*(1 - q^n)/(1-q)   *****************************  **/  
   if (a === "somatermosPG") {
		  var n = parseFloat(document.PG.n.value.replace(",", "."));  
		  var razaoq = eval(document.PG.razaoq.value.replace(",",".").replace(/ /g,"")); 		
		  var a_1 = eval(document.PG.a_1.value.replace(",",".").replace(/ /g,"")); 	 
	
   try {
		  if (isNaN(a_1) || a_1 == "") {alert("Digite o primeiro termo da progressão geométrica (P.G.) ou digite um número não nulo!");
			document.PG.a_1.focus();
			document.PG.a_1.select();			  
			return false;         
		  }	 
		  if (isNaN(n) ||  n <= 0) {alert("Digite a quantidade de termos da progressão aritmética (P.A.) e/ou somente números positivos!");
			document.PG.n.focus();
			document.PG.n.select();			  
			return false;         
		  }		
		  if (isNaN(razaoq)) {alert("Digite a razão da progressão geométrica (P.G.)!");
			document.PG.razaoq.focus();
			document.PG.razaoq.select();			  
			return false;         
		  }  
   var n = document.getElementById("resposta").value = roundNumber(n, 0);
   var razaoq = document.getElementById("resposta").value = roundNumber(razaoq, 2);
   var a_1 = document.getElementById("resposta").value = roundNumber(a_1, 2);
   var S_n =  (a_1 * (1 - Math.pow(razaoq,n)))/ (1 - razaoq);
   var S_n = document.getElementById("resposta").value = roundNumber(S_n, 2); 
   var result2 =  Math.pow(razaoq,n); 
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 2);  
   var result3 =  (1 - Math.pow(razaoq,n));
   var result3 = document.getElementById("resposta").value = roundNumber(result3, 2);  
   var result4 =  (1 - razaoq);
   var result4 = document.getElementById("resposta").value = roundNumber(result4, 2);  
   var result5 =  (a_1 * (1 - Math.pow(razaoq,n))); 
   var result5 = document.getElementById("resposta").value = roundNumber(result5, 2);    
	 
	 document.getElementById('resposta').innerHTML =" <hr>  A soma dos <a1 style='color: #FF0000'>"+n+"</a1> primeiros termos da progressão geométrica finita, para <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>q</a1> ≠ 1, é: <br> <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> ∙ (1 - <a1 style='font-family: times new roman; font-style:italic;'>q</a1><span class='exp'><a1 style='font-family: times new roman; font-style:italic;'>n</a1></span>) </td></tr><tr><td style='text-align:center;'> 1 - <a1 style='font-family: times new roman; font-style:italic;'>q</a1> </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+a_1+" ∙ (1 - ("+razaoq+")<span class='exp'>"+n+"</span>) </td></tr><tr><td style='text-align:center;'> 1 - ("+razaoq+") </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+a_1+" ∙ (1 - ("+result2+")) </td></tr><tr><td style='text-align:center;'> "+result4+" </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+a_1+" ∙ ("+result3+") </td></tr><tr><td style='text-align:center;'> "+result4+" </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+result5+" </td></tr><tr><td style='text-align:center;'> "+result4+" </td></tr></tbody></table>  </div>   <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1> =<a1 style='color: #FF0000'> "+S_n+"</a1> <hr><h1 class='logomarca'> JPP </h1> " 
	 
	  document.PG.a_1.focus();
	  document.PG.a_1.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }	
  
  /** ******************************   S_n infinita : (S_n = a_1 /(1 - q)/   *****************************  **/  
   if (a === "somainfinitatermosPG") {
		  var razaoq = eval(document.PG.razaoq.value.replace(",",".").replace(/ /g,"")); 		
		  var a_1 = eval(document.PG.a_1.value.replace(",",".").replace(/ /g,"")); 
  
	  try {
		  if (isNaN(a_1) || a_1 == "") {alert("Digite o primeiro termo da progressão geométrica (P.G.) ou digite um número não nulo!");
			document.PG.a_1.focus();
			document.PG.a_1.select();			  
			return false;         
		  }	 
		  if (isNaN(razaoq) || razaoq == "") {alert("Digite a razão da progressão geométrica (P.G.)!");
			document.PG.razaoq.focus();
			document.PG.razaoq.select();			  
			return false;         
		  }  
   var razaoq = document.getElementById("resposta").value = roundNumber(razaoq, 6);
   var a_1 = document.getElementById("resposta").value = roundNumber(a_1, 6);
   var S_n =  a_1 / (1 - razaoq);
   var S_n = document.getElementById("resposta").value = roundNumber(S_n, 6); 
   var result2 =  (1 - razaoq); 
   var result2 = document.getElementById("resposta").value = roundNumber(result2, 6);  
  
	 document.getElementById('resposta').innerHTML ="  A soma dos infinitos termos da Progressão geométrica para (-1 < <a1 style='font-family: times new roman; font-style:italic;'>q</a1> < 1) é: <br>  <div style='line-height: 15px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>∞</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> </td></tr><tr><td style='text-align:center;'> 1 - <a1 style='font-family: times new roman; font-style:italic;'>q</a1> </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>∞</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+a_1+" </td></tr><tr><td style='text-align:center;'> 1 - ("+razaoq+") </td></tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>∞</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+a_1+" </td></tr><tr><td style='text-align:center;'> "+result2+" </td></tr></tbody></table>    <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>∞</a1> =<a1 style='color: #FF0000'> "+S_n+"</a1> </div><hr><h1 class='logomarca'> JPP </h1>" 
	  document.PG.a_1.focus();
	  document.PG.a_1.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }		 
  
  }
  
  
  
  
  /***#################################                          #########################################      **/
  /***###############################    ÁLGEBRA: QUADRÁTICA    #########################################      **/
  
  
  function quadratica2() {
	var a = document.forms["quadratica"]["quadratica_type"].value;
  /** ******************************   valor numérico: 2° grau   *****************************  **/  
   if (a === "valornumericoequaçao2grau") {
	  document.getElementById("variável_x").disabled = false;		
	   document.getElementById("coef_a").disabled = false;		
	   document.getElementById("coef_b").disabled = false;		
	   document.getElementById("coef_c").disabled = false;	
   }
   try { 	}
	   catch(e) {alert(e)}		
	
  /** ******************************   Equação do 2° grau   *****************************  **/  
   if (a === "equaçao2grau") {
	  document.getElementById("variável_x").disabled = true;	
	  document.getElementById("variável_x").value ="";	
	   document.getElementById("coef_a").disabled = false;		
	   document.getElementById("coef_b").disabled = false;		
	   document.getElementById("coef_c").disabled = false;	
   }
   try { 	}
	   catch(e) {alert(e)}
	  
  /** ******************************   Valor máximo: função quadrática   ***********************  **/  
   if (a === "valormaximoequaçao2grau") {
	  document.getElementById("variável_x").disabled = true;	
	  document.getElementById("variável_x").value ="";	
	   document.getElementById("coef_a").disabled = false;		
	   document.getElementById("coef_b").disabled = false;		
	   document.getElementById("coef_c").disabled = false;	
   }
   try { 	}
	   catch(e) {alert(e)}		
	  
  /** ******************************  Vértice: função quadrática   *****************************  **/  
   if (a === "verticeequaçao2grau") {
	  document.getElementById("variável_x").disabled = true;	
	  document.getElementById("variável_x").value ="";	
	   document.getElementById("coef_a").disabled = false;		
	   document.getElementById("coef_b").disabled = false;		
	   document.getElementById("coef_c").disabled = false;	
   }
   try { 	}
	   catch(e) {alert(e)}		
	  
  /** ******************************  concavidade: função quadrática   *****************************  **/  
   if (a === "concavidadeequaçao2grau") {
	  document.getElementById("variável_x").disabled = true;	
	  document.getElementById("variável_x").value ="";	
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
	  alert("Escolha uma opção para Calcular!");
	 } 
	 
	var a = document.forms["quadratica"]["quadratica_type"].value;
	/** ***************************** Valor numérico:  Equação do 2° grau    ****************************************  **/  
	if (a === "valornumericoequaçao2grau") { 
	  var coef_a = eval(document.quadratica.coef_a.value.replace(",",".").replace(/ /g,""));
	  var coef_b = eval(document.quadratica.coef_b.value.replace(",",".").replace(/ /g,"")); 
	  var coef_c = eval(document.quadratica.coef_c.value.replace(",",".").replace(/ /g,""));  
	  var variável_x = eval(document.quadratica.variável_x.value.replace(",",".").replace(/ /g,""));  	
	
	  if (isNaN(coef_a) ) { alert("Digite um valor numérico não nulo, ou seja, o coeficiente a ≠ 0!");
		  document.quadratica.coef_a.focus();
		  document.quadratica.coef_a.select();  
	  return false;
	}
	  if (isNaN(coef_b)) { alert("Digite um valor numérico para o coeficiente b!");
		  document.quadratica.coef_b.focus();
		  document.quadratica.coef_b.select();  
	  return false;
	}
	  if (isNaN(coef_c) ) { alert("Digite um valor numérico para o coeficiente c!");
		  document.quadratica.coef_c.focus();
		  document.quadratica.coef_c.select();  
	  return false;
	}
	  if (isNaN(variável_x) ) { alert("Digite um valor numérico para a incógnita x!");
		  document.quadratica.variável_x.focus();
		  document.quadratica.variável_x.select();  
	  return false;
	}
	
  try {
	  var coef_a = document.getElementById("resposta").value = roundNumber(coef_a, 2);
	  var coef_b = document.getElementById("resposta").value = roundNumber(coef_b, 2);
	  var coef_c = document.getElementById("resposta").value = roundNumber(coef_c, 2);	
	  var variável_x = document.getElementById("resposta").value = roundNumber(variável_x, 2);	
	  
	  var xx = variável_x * variável_x;
	  var xx = document.getElementById("resposta").value = roundNumber(xx, 2);	
	  var bx = coef_b * variável_x;
	  var bx = document.getElementById("resposta").value = roundNumber(bx, 2);		
	  var axx = coef_a * xx;
	  var axx = document.getElementById("resposta").value = roundNumber(axx, 2);		
	  var resul = axx + bx + coef_c;
	  var resul = document.getElementById("resposta").value = roundNumber(resul, 2);		
	  
			document.getElementById('resposta').innerHTML = " <hr>  <div style='font-size:18px;'>  &emsp;   <a1 style='color: #FF0000'>"+coef_a+"</a1>x² + (<a1 style='color: #FF0000'>"+coef_b+"</a1>)x + (<a1 style='color: #FF0000'>"+coef_c+"</a1>) = 0  </div>   <br> O valor numérico da função quadrática é: <br><br> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>f</a1>(<a1 style='font-family: times new roman; font-size: 12px; font-style:italic;'>x</a1>) = <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1><a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1>² + <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>b</a1><a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> + <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>c</a1>  <br> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>f</a1>(<a1 style='font-family: times new roman; font-size: 12px; '>"+variável_x+"</a1>) =  "+coef_a+"∙("+variável_x+")² + ("+coef_b+")∙("+variável_x+") + ("+coef_c+") <br> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>f</a1>(<a1 style='font-family: times new roman; font-size: 12px; '>"+variável_x+"</a1>) =  "+coef_a+" ∙ "+xx+" + ("+bx+") + ("+coef_c+") <br> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>f</a1>(<a1 style='font-family: times new roman; font-size: 12px; '>"+variável_x+"</a1>) =  "+axx+" + ("+bx+") + ("+coef_c+") <br> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>f</a1>(<a1 style='font-family: times new roman; font-size: 12px; '>"+variável_x+"</a1>) =  <a1 style='color: #FF0000'>"+resul+"</a1> <br>   <hr>  <h1 class='logomarca'> JPP </h1> ";
  
			document.quadratica.coef_a.focus();
			   document.quadratica.coef_a.select(); 		 
  
	  }
	   catch(e) {alert(e)}
	}  
	
   
	/** *****************************************   valor máximo: quadrática    **********************************  **/  
	if (a === "valormaximoequaçao2grau") { 
	  var coef_a = eval(document.quadratica.coef_a.value.replace(",",".").replace(/ /g,""));
	  var coef_b = eval(document.quadratica.coef_b.value.replace(",",".").replace(/ /g,"")); 
	  var coef_c = eval(document.quadratica.coef_c.value.replace(",",".").replace(/ /g,""));    
	
	  if (isNaN(coef_a) || (coef_a == 0)) { alert("Digite um valor numérico não nulo, ou seja, o coeficiente a ≠ 0!");
		  document.quadratica.coef_a.focus();
		  document.quadratica.coef_a.select();  
	  return false;
	}
	  if (isNaN(coef_b)) { alert("Digite um valor numérico para o coeficiente b!");
		  document.quadratica.coef_b.focus();
		  document.quadratica.coef_b.select();  
	  return false;
	}
	  if (isNaN(coef_c) ) { alert("Digite um valor numérico para o coeficiente c!");
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
   
			 document.getElementById('resposta').innerHTML = " <hr>  <div style='font-size:18px;'>  &emsp;  <a1 style='color: #FF0000'>"+coef_a+"</a1>x² + (<a1 style='color: #FF0000'>"+coef_b+"</a1>)x + (<a1 style='color: #FF0000'>"+coef_c+"</a1>) = 0  </div>   <br> Os coeficientes são: <br> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1> = "+coef_a+" &emsp;  <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>b</a1> =  "+coef_b+" &emsp;  <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>c</a1> =  "+coef_c+"  <br><br> Como <a1 style='color: #FF0000'><a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1> = "+coef_a+" > 0</a1>. Logo, a função tem gráfico com concavidade voltada para cima. Portanto, a função tem <a1 style='color: #FF0000'>VALOR MÍNIMO</a1>. <br><br>   Agora, o cálculo do discriminante (Delta): <br>   Δ = b² - 4<a1 style='font-family: times new roman; font-size: 16px; emsp; font-style:italic;'>a</a1><a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>c</a1> <br>  Δ = ("+coef_b+")² - 4 ∙ ("+coef_a+") ∙ ("+coef_c+") <br>  Δ = "+delta1+" - ("+delta2+") <br> Δ = "+delta+" <br><br><div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> y<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  - Δ </td></tr><tr><td style='text-align:center;'> 4 ∙ <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1> </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> y<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  - ("+delta+") </td></tr><tr><td style='text-align:center;'> 4 ∙ "+coef_a+" </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> y<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+yv1+" </td></tr><tr><td style='text-align:center;'> "+yv2+" </td></tr></tbody></table>  </div>   y<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> =&nbsp; <a1 style='color: #FF0000'> "+yv+"   </a1> <hr> <h1 class='logomarca'> JPP </h1> ";
  
			document.quadratica.coef_a.focus();
			   document.quadratica.coef_a.select(); 
	  return false;		  
		 }
		 else {
			document.getElementById('resposta').innerHTML = "<hr>  <div style='font-size:18px;'>  &emsp;   <a1 style='color: #FF0000'>"+coef_a+"</a1>x² + (<a1 style='color: #FF0000'>"+coef_b+"</a1>)x + (<a1 style='color: #FF0000'>"+coef_c+"</a1>) = 0  </div>   <br> Os coeficientes são: <br> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1> = "+coef_a+" &emsp;  <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>b</a1> =  "+coef_b+" &emsp;  <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>c</a1> =  "+coef_c+"  <br><br> Como <a1 style='color: #FF0000'><a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1> = "+coef_a+" < 0</a1>. Logo, a função tem gráfico com concavidade voltada para baixo. Portanto, a função tem <a1 style='color: #FF0000'>VALOR MÁXIMO.</a1> <br><br>   </h3> Agora, o cálculo do discriminante (Delta): <br> Δ = b² - 4<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1><a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>c</a1> <br>  Δ = ("+coef_b+")² - 4 ∙ ("+coef_a+") ∙ ("+coef_c+") <br>  Δ = "+delta1+" - ("+delta2+") <br> Δ = "+delta+" <br><br><div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'>  y<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> - Δ  </td></tr><tr><td style='text-align:center;'> 4 ∙ <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1> </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'>  y<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  - ("+delta+") </td></tr><tr><td style='text-align:center;'> 4 ∙ ("+coef_a+") </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'>  y<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+yv1+" </td></tr><tr><td style='text-align:center;'> "+yv2+" </td></tr></tbody></table> </div>   y<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> =&nbsp; <a1 style='color: #FF0000'> "+yv+"   </a1>    <hr>    <h1 class='logomarca'> JPP </h1> ";
  
		   document.quadratica.coef_a.focus();
		   document.quadratica.coef_a.select();
	  }
	  }
	  catch(e) {alert(e)}
	}
  
  /** ******************************  Vértice: função quadrática   *****************************  **/  
   if (a === "verticeequaçao2grau") {
	  var coef_a = eval(document.quadratica.coef_a.value.replace(",",".").replace(/ /g,""));
	  var coef_b = eval(document.quadratica.coef_b.value.replace(",",".").replace(/ /g,"")); 
	  var coef_c = eval(document.quadratica.coef_c.value.replace(",",".").replace(/ /g,""));    
	
	  if (isNaN(coef_a) || (coef_a == 0)) { alert("Digite um valor numérico não nulo, ou seja, o coeficiente a ≠ 0!");
		  document.quadratica.coef_a.focus();
		  document.quadratica.coef_a.select();  
	  return false;
	}
	  if (isNaN(coef_b)) { alert("Digite um valor numérico para o coeficiente b!");
		  document.quadratica.coef_b.focus();
		  document.quadratica.coef_b.select();  
	  return false;
	}
	  if (isNaN(coef_c) ) { alert("Digite um valor numérico para o coeficiente c!");
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
   
			 document.getElementById('resposta').innerHTML = " <hr>  <div style='font-size:18px;'>  &emsp;   <a1 style='color: #FF0000'>"+coef_a+"</a1>x² + (<a1 style='color: #FF0000'>"+coef_b+"</a1>)x + (<a1 style='color: #FF0000'>"+coef_c+"</a1>) = 0  </div>  <br>   Os coeficientes são: <br> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1> = "+coef_a+" &emsp;  <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>b</a1> =  "+coef_b+" &emsp;  <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>c</a1> =  "+coef_c+"  <br><br>  Agora, o cálculo do discriminante (Delta): <br> Δ = b² - 4<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1><a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>c</a1> <br>  Δ = ("+coef_b+")² - 4 ∙ ("+coef_a+") ∙ ("+coef_c+") <br>  Δ = "+delta1+" - ("+delta2+") <br> Δ = "+delta+" <br><br> O vértice da parábola é:  <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> x<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>   - <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>b</a1> </td></tr><tr><td style='text-align:center;'> 2 ∙ <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1> </td></tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> x<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>   - ("+coef_b+") </td></tr><tr><td style='text-align:center;'> 2 ∙ ("+coef_a+")  </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> x<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+vertice2+" </td></tr><tr><td style='text-align:center;'> "+vertice3+"  </td></tr></tbody></table> </div> x<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> =&nbsp; <a1 style='color: #FF0000'>"+vertice1+"</a1><hr> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> y<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> - Δ </td></tr><tr><td style='text-align:center;'> 4 ∙ <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1>  </td></tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> y<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> - ("+delta+") </td></tr><tr><td style='text-align:center;'> 4 ∙ ("+coef_a+")  </td></tr></tbody></table><table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> y<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+yv1+" </td></tr><tr><td style='text-align:center;'> "+yv2+"  </td></tr></tbody></table> </div> y<a1 style='font-size: 10px; font-family: times new roman; '>v</a1> =&nbsp; <a1 style='color: #FF0000'> "+yv+" </a1> <br><br>  Logo, as coordenadas do vértice da parábola é: <br> V = (<a1 style='color: #FF0000'>"+vertice1+"</a1>; <a1 style='color: #FF0000'>"+yv+"</a1>) <hr> <h1 class='logomarca'> JPP </h1> ";
  
		   document.quadratica.coef_a.focus();
		   document.quadratica.coef_a.select(); 
	  }
	  catch(e) {alert(e)}
	}
  
	
   /** ***************************************   Raízes: Equação do 2° grau    ****************************************  **/  
	if (a === "equaçao2grau") { 
	  var coef_a = eval(document.quadratica.coef_a.value.replace(",",".").replace(/ /g,""));
	  var coef_b = eval(document.quadratica.coef_b.value.replace(",",".").replace(/ /g,"")); 
	  var coef_c = eval(document.quadratica.coef_c.value.replace(",",".").replace(/ /g,""));    
	
	  if (isNaN(coef_a) || (coef_a == 0)) { alert("Digite um valor numérico não nulo, ou seja, o coeficiente a ≠ 0!");
		  document.quadratica.coef_a.focus();
		  document.quadratica.coef_a.select();  
	  return false;
	}
	  if (isNaN(coef_b)) { alert("Digite um valor numérico para o coeficiente b!");
		  document.quadratica.coef_b.focus();
		  document.quadratica.coef_b.select();  
	  return false;
	}
	  if (isNaN(coef_c) ) { alert("Digite um valor numérico para o coeficiente c!");
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
			document.getElementById('resposta').innerHTML = " <hr>  <div style='font-size:18px;'>  &emsp;   <a1 style='color: #FF0000'>"+coef_a+"</a1>x² + (<a1 style='color: #FF0000'>"+coef_b+"</a1>)x + (<a1 style='color: #FF0000'>"+coef_c+"</a1>) = 0  </div>        <br> Os coeficientes são: <br> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1> = "+coef_a+" &emsp; <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>b</a1> =  "+coef_b+" &emsp; <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>c</a1> =  "+coef_c+"  <br><br> Agora, o cálculo do discriminante (delta): <br>   Δ = b² - 4ac <br>  Δ = ("+coef_b+")² - 4 ∙ ("+coef_a+") ∙ ("+coef_c+") <br>  Δ = "+delta1+" - ("+delta2+") <br> Δ = "+delta+" <br> <br> Como Δ = <a1 style='color: #FF0000'>"+delta+"</a1> < 0, logo a equação não possui raiz real. <br>    <hr> <h1 class='logomarca'> JPP </h1> ";
			document.quadratica.coef_a.focus();
			   document.quadratica.coef_a.select(); 
	  return false;		  
		 }
		 else { 
			document.getElementById('resposta').innerHTML = " <hr>  <div style='font-size:18px;'>  &emsp;   <a1 style='color: #FF0000'>"+coef_a+"</a1>x² + (<a1 style='color: #FF0000'>"+coef_b+"</a1>)x + (<a1 style='color: #FF0000'>"+coef_c+"</a1>) = 0  </div>  <br>  Os coeficientes são: <br> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1> = "+coef_a+" &emsp; <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>b</a1> =  "+coef_b+" &emsp; <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>c</a1> =  "+coef_c+"  <br><br> Agora, o cálculo do discriminante (delta): <br>   Δ = b² - 4<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1><a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>c</a1> <br>  Δ = ("+coef_b+")² - 4 ∙ ("+coef_a+") ∙ ("+coef_c+") <br>  Δ = "+delta1+" - ("+delta2+") <br> Δ = "+delta+" <br>    <br> Agora, as raízes da equação do 2° grau são: <br>  <div style='line-height: 15px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'><a1 style='font-family: times new roman; font-style:italic;'>x</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'>-b ± √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>Δ</a1></td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'>-("+coef_b+") ± √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+delta+"</a1></td></tr> <tr> <td>2 ∙ <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1></td><td>2 ∙("+coef_a+")</td> </tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'><a1 style='font-family: times new roman; font-style:italic;'>x</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+delta5+" ± "+delta4+" </td></tr><tr><td style='text-align:center;'>"+delta6+"  </td></tr></tbody></table>  <br> Sendo assim,  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'><a1 style='font-family: times new roman; font-style:italic;'>x'</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'>"+delta5+" + "+delta4+"</td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'>"+delta7+"</td><td rowspan='2'> &nbsp;=&nbsp;  <a1 style='color: #FF0000'> "+x1+"</a1> </td></tr> <tr> <td>"+delta6+"</td><td>"+delta6+"</td> </tr></tbody></table>  <br>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'><a1 style='font-family: times new roman; font-style:italic;'>x''</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'>"+delta5+" - "+delta4+"</td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'>"+delta8+"</td><td rowspan='2'> &nbsp;=&nbsp; <a1 style='color: #FF0000'> "+x2+"</a1> </td></tr> <tr> <td>"+delta6+"</td><td>"+delta6+"</td> </tr></tbody></table>   </div>  Logo, S = {<a1 style='color: #FF0000'>"+x2+"</a1>,&nbsp; <a1 style='color: #FF0000'>"+x1+"</a1>}  <hr>   <h1 class='logomarca'> JPP </h1> ";
  
		   document.quadratica.coef_a.focus();
		   document.quadratica.coef_a.select(); 
	   } 
	  }
	   catch(e) {alert(e)}
	}
	
	
  /** ******************************  concavidade: função quadrática   *****************************  **/  
	if (a === "concavidadeequaçao2grau") { 
	  var coef_a = eval(document.quadratica.coef_a.value.replace(",",".").replace(/ /g,""));
	
   
	
	  if (isNaN(coef_a) || (coef_a == 0)) { alert("Digite um valor numérico não nulo, ou seja, o coeficiente a ≠ 0!");
		  document.quadratica.coef_a.focus();
		  document.quadratica.coef_a.select();  
	  return false;
	}
	
  try {
   var coef_a = document.getElementById("resposta").value = roundNumber(coef_a, 2);	
	   if (coef_a > 0) { 
			document.getElementById('resposta').innerHTML = " <hr> Como o coeficiente <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1> = <a1 style='color: #FF0000'>"+coef_a+" > 0</a1>. Logo, a função tem gráfico com concavidade voltada para cima. <br> <br> <style>#box{width:150px; height:80px; background-color:#d9d9d9; border-radius: 0px 0px 90px 90px;border: 2px solid #ff0000;border-top-color: #d9d9d9; margin-left: 90px;} </style><div id='box'></div>      <hr><h1 class='logomarca'> JPP </h1> ";
  
			document.quadratica.coef_a.focus();
			   document.quadratica.coef_a.select(); 
	  return false;		  
		 }
		 else { 
			document.getElementById('resposta').innerHTML = " <hr> Como coeficiente <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>a</a1> = <a1 style='color: #FF0000'>"+coef_a+" < 0</a1>. Logo, a função tem gráfico com concavidade voltada para baixo. <br> <br>  <style>#box1{width:150px; height:80px; background-color:#d9d9d9; border-radius: 90px 90px 0px 0px;border: 2px solid #ff0000; border-bottom-color: #d9d9d9; margin-left: 90px;} </style><div id='box1'></div>   <hr>   <h1 class='logomarca'> JPP </h1> ";
  
		   document.quadratica.coef_a.focus();
		   document.quadratica.coef_a.select(); 
	   } 
	  }
	   catch(e) {alert(e)}
	}
   
	 
   }   
   
	
  /***####################################                               #################################     **/
  /***####################################  ÁLGEBRA: FUNÇÃO DE 1° GRAU   #################################     **/
  
  
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
	  document.getElementById("variável_x").disabled = false;		
   }
   try { 	}
	   catch(e) {alert(e)}	  
	
  /** ******************************  raiz ou zero   *****************************  **/  
   if (a === "raiz_zero") {
	  document.getElementById("variável_x").disabled = true;	
	  document.getElementById("variável_x").value ="";	 
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
	
  /** ******************************   Sistema de equações de 1° grau   *****************************  **/  
   if (a === "Sistemaequaçao1grau") {
	  document.getElementById("variável_x").disabled = true;	
	  document.getElementById("variável_x").value ="";
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
	  
  /** ******************************   Sistema de equações de 1° grau   *****************************  **/  
   if (a === "Sistemaequaçao1grauadicao") {
	  document.getElementById("variável_x").disabled = true;	
	  document.getElementById("variável_x").value ="";
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
	  alert("Escolha uma opção para Calcular!");
	 } 	
	  
	var a = document.forms["primeirograu"]["primeirograu_type"].value;
  /************************************  (fx)   ********************************************/  
	if (a === "f(x)") { 
	  var coef_a = eval(document.primeirograu.coef_a.value.replace(",",".").replace(/ /g,""));
	  var coef_b = eval(document.primeirograu.coef_b.value.replace(",",".").replace(/ /g,"")); 
	  var variável_x = eval(document.primeirograu.variável_x.value.replace(",",".").replace(/ /g,"")); 
	
	  if (isNaN(coef_a)) { alert("Digite um valor numérico para o coeficiente a!");
		  document.primeirograu.coef_a.focus();
		  document.primeirograu.coef_a.select();  
	  return false;
		  }
	  if (isNaN(coef_b)) { alert("Digite um valor numérico para o coeficiente b!");
		  document.primeirograu.coef_b.focus();
		  document.primeirograu.coef_b.select();  
	  return false;
	  }
	  if (isNaN(variável_x)) { alert("Digite um valor numérico para o incógnita x!");
		  document.primeirograu.variável_x.focus();
		  document.primeirograu.variável_x.select();  
	  return false;
	  }
	  
  try {
	  var coef_a = document.getElementById("resposta").value = roundNumber(coef_a, 2);
	  var coef_b = document.getElementById("resposta").value = roundNumber(coef_b, 2);
	  var variável_x = document.getElementById("resposta").value = roundNumber(variável_x, 2);	
	  var result1 = coef_a * variável_x + coef_b;
	  var result1 = document.getElementById("resposta").value = roundNumber(result1, 2); 
	  var result2 = coef_a * variável_x;	
	  var result2 = document.getElementById("resposta").value = roundNumber(result2, 2); 	
	  
		  document.getElementById('resposta').innerHTML = " <hr>  <div style='line-height: 25px;'>  O valor de <a style='font-family: times,helvica, sans-serif; font-style: italic; font-size: 17px; '>f</a>(x) é: <br>  <a style='font-family: times,helvica, sans-serif; font-style: italic; font-size: 17px; '>f</a>(x) = ax + b <br>  <a style='font-family: times,helvica, sans-serif; font-style: italic; font-size: 17px; '>f</a>(<a1 style='color: #FF0000'>"+variável_x+"</a1>) =  "+coef_a+" ∙ ("+variável_x+") + ("+coef_b+") <br>  <a style='font-family: times,helvica, sans-serif; font-style: italic; font-size: 17px; '>f</a>(<a1 style='color: #FF0000'>"+variável_x+"</a1>) = "+result2+" + ("+coef_b+") <br>    <a style='font-family: times,helvica, sans-serif; font-style: italic; font-size: 17px; '>f</a>(<a1 style='color: #FF0000'>"+variável_x+"</a1>) = <a1 style='color: #FF0000'>"+result1+"</a1>" +"&nbsp </div> <hr><h1 class='logomarca'> JPP </h1>";
	  
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
	
	  if (isNaN(coef_a)) { alert("Digite um valor numérico para o coeficiente a!");
		  document.primeirograu.coef_a.focus();
		  document.primeirograu.coef_a.select();  
	  return false;
		  }
	  if (isNaN(coef_b)) { alert("Digite um valor numérico para o coeficiente b!");
		  document.primeirograu.coef_b.focus();
		  document.primeirograu.coef_b.select();  
	  return false;
	  }
	  if (isNaN(fx)) { alert("Digite um valor numérico para f(x)!");
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
	  
		  document.getElementById('resposta').innerHTML = " <hr> <div style='line-height: 25px;'>  O valor de <a style='font-family: times,helvica, sans-serif; font-style: italic; font-size: 17px; '>x</a> é: <br>  <a style='font-family: times,helvica, sans-serif; font-style: italic; font-size: 17px; '>f</a>(x) = ax + b <br>  "+fx+" = "+coef_a+" ∙ x + ("+coef_b+") <br>  "+fx+" - ("+coef_b+") = "+coef_a+" x <br>  "+fx+" + ("+result3+") = "+coef_a+" x <br>  "+result2+" = "+coef_a+" x  &emsp;  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> x &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+result2+" </td></tr><tr><td style='text-align:center;'> "+coef_a+" </td></tr></tbody></table>   <a style='font-family: times,helvica, sans-serif; font-style: italic; font-size: 17px; '>x</a>  = <a1 style='color: #FF0000'>"+result1+"</a1>" +"&nbsp </div> <hr><h1 class='logomarca'> JPP </h1>";
	  
			document.primeirograu.coef_a.focus();
			   document.primeirograu.coef_a.select(); 
  }
   catch(e) {alert(e)}
	}
  
   
  /*************************  Sistema de equação de 1° grau - método da substituição   ***********************/  
	if (a === "Sistemaequaçao1grau") { 
	  var coef_a = eval(document.primeirograu.coef_a.value.replace(",",".").replace(/ /g,""));
	  var coef_b = eval(document.primeirograu.coef_b.value.replace(",",".").replace(/ /g,"")); 
	  var coef_c = eval(document.primeirograu.coef_c.value.replace(",",".").replace(/ /g,""));   
	  var coef_d = eval(document.primeirograu.coef_d.value.replace(",",".").replace(/ /g,"")); 
	  var coef_e = eval(document.primeirograu.coef_e.value.replace(",",".").replace(/ /g,"")); 
	  var coef_f = eval(document.primeirograu.coef_f.value.replace(",",".").replace(/ /g,"")); 	
	
	  if (isNaN(coef_a) ) { alert("Digite um valor numérico para o coeficiente a!");
		  document.primeirograu.coef_a.focus();
		  document.primeirograu.coef_a.select();  
	  return false;
	}
	  if (isNaN(coef_b)) { alert("Digite um valor numérico para o coeficiente b!");
		  document.primeirograu.coef_b.focus();
		  document.primeirograu.coef_b.select();  
	  return false;
	}
	  if (isNaN(coef_c) ) { alert("Digite um valor numérico para o coeficiente c!");
		  document.primeirograu.coef_c.focus();
		  document.primeirograu.coef_c.select();  
	  return false;
	}
	  if (isNaN(coef_d) ) { alert("Digite um valor numérico para o coeficiente d!");
		  document.primeirograu.coef_d.focus();
		  document.primeirograu.coef_d.select();  
	  return false;
	}  
	  if (isNaN(coef_e) ) { alert("Digite um valor numérico para o coeficiente e!");
		  document.primeirograu.coef_e.focus();
		  document.primeirograu.coef_e.select();  
	  return false;
	}  
	  if (isNaN(coef_f) ) { alert("Digite um valor numérico para o coeficiente f!");
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
			document.getElementById('resposta').innerHTML = " <hr>  Resolvendo o sistema pelo método da substituição: <br> <table> <td style='  border-left: 1.8px solid ; border-radius: 5px 0px 0px 5px;   width: 300px; '><a1> "+coef_a+"<a1 style='font-family: times new roman; font-size: 15px; font-style:italic;'>x</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 15px; font-style:italic;'>y</a1> = "+coef_c+" &nbsp;<a style='color:#0000ff'> (I) </a></a1> <br>  <a1 style=' font-size: 14px;>  <a1> "+coef_d+"<a1 style='font-family: times new roman; font-size: 14px; font-style:italic;'>x</a1> + ("+coef_e+")<a1 style='font-family: times new roman; font-size: 14px; font-style:italic;'>y</a1> = "+coef_f+" &ensp; →&ensp;  "+coef_d+"<a1 style='font-family: times new roman; font-size: 14px; font-style:italic;'>x</a1> = "+coef_f+" - ("+coef_e+")<a1 style='font-family: times new roman; font-size: 14px; font-style:italic;'>y</a1> </a1> </a1> </td></table> <div style='line-height: 14px; margin-left: 145px;'>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-size: 14px; font-style:italic;'>x</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+coef_f+" - ("+coef_e+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> </td> <td style='color:#0000ff'>  &nbsp;&nbsp; (II)</td></tr><tr><td style='text-align:center;'> "+coef_d+" </td></tr></tbody></table> </div> Agora, substituindo a equação (II) na (I), temos: <br> "+coef_a+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" <br> <div style='line-height: 14px; '>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>"+coef_a+" ∙   </td>  <td style='border-bottom:solid 1.3px'> ("+coef_f+" - ("+coef_e+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1>) </td>  <td rowspan='2'>  </td>  <td rowspan='2'> &nbsp; + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" </td></tr> <tr> <td> "+coef_d+" </td> </tr></tbody></table> </div>  "+result1+" ∙ ("+coef_f+" - ("+coef_e+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1>)) + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+"  <br>  "+result2+" - ("+result3+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+"  <br>  "+result4+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1>  = "+coef_c+"  - ("+result2+") <br>  "+result4+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1>  = "+result5+" <br> <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> =&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+result7+" </td>  <td rowspan='2'> &nbsp;=&nbsp; </td>  <td rowspan='2'>  <a1 style='color: #FF0000'> "+result8+"</a1> </td></tr> <tr> <td> "+result4+" </td> </tr></tbody></table> </div> <br> Agora, para encontrar o valor de <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1>, devemos substituir <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> na equação (II): <br>  <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> =&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+coef_f+" - ("+coef_e+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> </td></tr><tr><td style='text-align:center;'> "+coef_d+" </td></tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+coef_f+" - ("+coef_e+") ∙ ("+result8+") </td></tr><tr><td style='text-align:center;'> "+coef_d+" </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+coef_f+" - ("+result9+") </td></tr><tr><td style='text-align:center;'> "+coef_d+" </td></tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+result10+" </td>  <td rowspan='2'> &nbsp;=&nbsp; </td>  <td rowspan='2'> <a1 style='color: #FF0000'> "+result11+" </a1> </td></tr> <tr> <td> "+coef_d+" </td> </tr></tbody></table>   </div>  <br> Logo, a solução do sistema é: <br> S = {(<a1 style='color: #FF0000'>"+result11+"</a1>, <a1 style='color: #FF0000'>"+result8+"</a1>)}.   <hr><h1 class='logomarca'> JPP </h1> ";
  
			document.primeirograu.coef_a.focus();
			   document.primeirograu.coef_a.select(); 
		  return false;	  
		 }
		 
	if ( (deter2 != deter3)) { 
			document.getElementById('resposta').innerHTML = " <hr> Resolvendo o sistema pelo método da substituição:  <br><table> <td style='  border-left: 1.8px solid ; border-radius: 5px 0px 0px 5px;   width: 300px; '><a1> "+coef_a+"<a1 style='font-family: times new roman; font-size: 15px; font-style:italic;'>x</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 15px; font-style:italic;'>y</a1> = "+coef_c+" &nbsp; <a style='color:#0000ff'> (I) </a></a1> <br> <a1> "+coef_d+"<a1 style='font-family: times new roman; font-size: 15px; font-style:italic;'>x</a1> + ("+coef_e+")<a1 style='font-family: times new roman; font-size: 15px; font-style:italic;'>y</a1> = "+coef_f+" &ensp; → &ensp; "+coef_d+"<a1 style='font-family: times new roman; font-size: 15px; font-style:italic;'>x</a1> = "+coef_f+" - ("+coef_e+")<a1 style='font-family: times new roman; font-size: 15px; font-style:italic;'>y</a1> </a1> </td></table> <div style='line-height: 14px; margin-left: 145px;'><table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1>  &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+coef_f+" - ("+coef_e+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td>  <td style='color:#0000ff' rowspan='2'> &nbsp; (II) </td></tr> <tr> <td> "+coef_d+" </td> </tr></tbody></table> </div>  Agora, substituindo a equação (II) na (I), temos: <br> "+coef_a+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" <br>   <div style='line-height: 14px; '>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> "+coef_a+" ∙  </td>  <td style='border-bottom:solid 1.3px'> ("+coef_f+" - ("+coef_e+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1>) </td>  <td rowspan='2'>  </td>  <td rowspan='2'> &nbsp; + "+coef_b+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" </td></tr> <tr> <td> "+coef_d+" </td> </tr></tbody></table>  </div>  "+result1+" ∙ ("+coef_f+" - ("+coef_e+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1>)) + "+coef_b+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+"  <br>  "+result2+" - ("+result3+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+"  <br>  "+result4+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1>  = "+coef_c+"  - ("+result2+") <br> "+result4+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1>  = "+result5+" <br><br>  Logo, o <a1 style='color: #FF0000'>sistema é impossível</a1> (S.I).<br> Ou seja, NÃO tem solução.  <hr><h1 class='logomarca'> JPP </h1> ";
  
			document.primeirograu.coef_a.focus();
		   document.primeirograu.coef_a.select(); 
		  return false;		 
		  }
  
	if ( (deter2 == deter3)) {  
			document.getElementById('resposta').innerHTML = "<hr> Resolvendo o sistema pelo método da substituição:  <br>  <table> <td style='  border-left: 1.8px solid ; border-radius: 5px 0px 0px 5px;   width: 300px; '><a1> "+coef_a+"<a1 style='font-family: times new roman; font-size: 15px; font-style:italic;'>x</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 15px; font-style:italic;'>y</a1> = "+coef_c+" &nbsp;<a style='color:#0000ff'> (I) </a></a1> <br> <a1> "+coef_d+"<a1 style='font-family: times new roman; font-size: 15px; font-style:italic;'>x</a1> +("+coef_e+")<a1 style='font-family: times new roman; font-size: 15px; font-style:italic;'>y</a1> ="+coef_f+" &ensp; →&ensp; "+coef_d+"<a1 style='font-family: times new roman; font-size: 15px; font-style:italic;'>x</a1> = "+coef_f+" - ("+coef_e+")<a1 style='font-family: times new roman; font-size: 15px; font-style:italic;'>y</a1> </a1> </td></table> <div style='line-height: 14px; margin-left: 145px;'>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+coef_f+" - ("+coef_e+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td>  <td style='color:#0000ff' rowspan='2'> &nbsp; (II) </td></tr> <tr> <td> "+coef_d+" </td> </tr></tbody></table> </div>  Agora, substituindo a equação (II) na (I), temos: <br> "+coef_a+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" <br>   <div style='line-height: 14px; '>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> "+coef_a+" ∙  </td>  <td style='border-bottom:solid 1.3px'> ("+coef_f+" - ("+coef_e+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1>) </td>  <td rowspan='2'>   </td>  <td rowspan='2'> &nbsp; + "+coef_b+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" </td></tr> <tr> <td> "+coef_d+"  </td> </tr></tbody></table>  </div>  "+result1+" ∙ ("+coef_f+" - ("+coef_e+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1>)) + "+coef_b+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+"  <br>  "+result2+" - ("+result3+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+"  <br>  "+result4+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1>  = "+coef_c+"  - ("+result2+") <br>  "+result4+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1>  = "+result5+" <br><br>  Logo, o sistema é<a1 style='color: #FF0000'> possível e indeterminado</a1> (S.P.I). Ou seja, tem <a1 style='color: #FF0000'>infinitas</a1> soluções.  <hr><h1 class='logomarca'> JPP </h1> ";
	  
		   document.primeirograu.coef_a.focus();
		   document.primeirograu.coef_a.select(); 
		  }
	   } 
	   catch(e) {alert(e)}
	}  
  
	
   /** *********************  Sistema de equação de 1° grau - método da adição   ******************************  **/  
	if (a === "Sistemaequaçao1grauadicao") { 
	  var coef_a = eval(document.primeirograu.coef_a.value.replace(",",".").replace(/ /g,""));
	  var coef_b = eval(document.primeirograu.coef_b.value.replace(",",".").replace(/ /g,"")); 
	  var coef_c = eval(document.primeirograu.coef_c.value.replace(",",".").replace(/ /g,""));   
	  var coef_d = eval(document.primeirograu.coef_d.value.replace(",",".").replace(/ /g,"")); 
	  var coef_e = eval(document.primeirograu.coef_e.value.replace(",",".").replace(/ /g,"")); 
	  var coef_f = eval(document.primeirograu.coef_f.value.replace(",",".").replace(/ /g,"")); 	
	
	  if (isNaN(coef_a) ) { alert("Digite um valor numérico para o coeficiente a!");
		  document.primeirograu.coef_a.focus();
		  document.primeirograu.coef_a.select();  
	  return false;
	}
	  if (isNaN(coef_b)) { alert("Digite um valor numérico para o coeficiente b!");
		  document.primeirograu.coef_b.focus();
		  document.primeirograu.coef_b.select();  
	  return false;
	}
	  if (isNaN(coef_c) ) { alert("Digite um valor numérico para o coeficiente c!");
		  document.primeirograu.coef_c.focus();
		  document.primeirograu.coef_c.select();  
	  return false;
	}
	  if (isNaN(coef_d) ) { alert("Digite um valor numérico para o coeficiente d!");
		  document.primeirograu.coef_d.focus();
		  document.primeirograu.coef_d.select();  
	  return false;
	}  
	  if (isNaN(coef_e) ) { alert("Digite um valor numérico para o coeficiente e!");
		  document.primeirograu.coef_e.focus();
		  document.primeirograu.coef_e.select();  
	  return false;
	}  
	  if (isNaN(coef_f) ) { alert("Digite um valor numérico para o coeficiente f!");
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
   
		  document.getElementById('resposta').innerHTML = " <hr> Resolvendo o sistema pelo método da adição:  <br> <table>  <td style='  border-left: 1.8px solid ; border-radius: 5px 0px 0px 5px;   width: 300px; '><a1> "+coef_a+"<a1 style='font-family: times new roman;  font-size: 16px; font-style:italic; '>x</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+"  </a1> <br> <a1> "+coef_d+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> + ("+coef_e+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_f+" </td>  </table>   <hr style='height:1.4px; border:none; width: 180px; color:#000; background-color:#000; margin: 0 0 0 5px;'/> &ensp; "+result1+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> &emsp;= &ensp; "+result2+"  <br> <div style='line-height: 14px; '>         <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+result2+" </td></tr><tr><td style='text-align:center;'> "+result1+" </td></tr></tbody></table>  </div> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> = <a1 style='color: #FF0000'>"+result3+"</a1> </div> <br><br>  Agora, encontrar o valor de y. <br>   <a1> "+coef_a+"<a1 style='font-family: times new roman;  font-size: 16px; font-style:italic; '>x</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" </a1> <br>  <a1> "+coef_a+" ∙ "+result3+" + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+"  </a1> <br>  <a1> "+result4+" + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+"  </a1> <br>   <a1>  "+coef_b+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" - ("+result4+")  </a1> <br>  <a1>  "+coef_b+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+result5+"  </a1> <br>   <div style='line-height: 14px;'> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> y &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+result5+" </td></tr><tr><td style='text-align:center;'> "+coef_b+" </td></tr></tbody></table>     </div> y = <a1 style='color: #FF0000'>"+result6+"</a1> <br><br> Logo, S = {(<a1 style='color: #FF0000'>"+result3+"</a1>,&nbsp; <a1 style='color: #FF0000'>"+result6+"</a1>)}      <hr><h1 class='logomarca'> JPP </h1> ";
  
			document.primeirograu.coef_a.focus();
			   document.primeirograu.coef_a.select(); 
			  return false;					  
		  } 
   
	   if ( (deter1 != deter2) && (cond1 != -1)  ) { 
	  
			document.getElementById('resposta').innerHTML = "<hr> Resolvendo o sistema pelo método da adição:  <br> <table>  <td style='  border-left: 1.8px solid ; border-radius: 5px 0px 0px 5px;   width: 300px; '><a1> "+coef_a+"<a1 style='font-family: times new roman;  font-size: 16px; font-style:italic; '>x</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" &emsp; (I)  </a1> <br> <a1> "+coef_d+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> + ("+coef_e+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_f+" &emsp; (II)</td> </table> <br> Multiplicando a equação (I) por <a1 style='color: #FF0000'>"+mult13+"</a1> e a equação (II) por <a1 style='color: #FF0000'>"+coef_b+"</a1>. <br>  <table>  <td style='  border-left: 1.8px solid ; border-radius: 5px 0px 0px 5px;   width: 300px; '><a1> "+coef_a+"<a1 style='font-family: times new roman;  font-size: 16px; font-style:italic; '>x</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" &emsp; × (<a1 style='color: #FF0000'>"+mult13+"</a1>)  </a1> <br> <a1> "+coef_d+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> + ("+coef_e+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_f+" &emsp; × (<a1 style='color: #FF0000'>"+coef_b+")</td> </table>  <br> <table>  <td style='  border-left: 1.8px solid ; border-radius: 5px 0px 0px 5px;  width: 300px; '><a1> "+mult1+"<a1 style='font-family: times new roman;  font-size: 16px; font-style:italic; '>x</a1> + ("+mult2+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+mult3+"  </a1>  </a1> <br> <a1> "+mult4+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> + ("+mult5+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+mult6+"  </td> </table>  <hr style='height:1.4px; border:none; width: 180px; color:#000; background-color:#000; text-align: left; margin: 0 0 0 5px;'/> &ensp; "+mult7+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> &emsp;= &ensp; "+mult8+" <br> <div style='line-height: 14px; '> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+mult8+" </td></tr><tr><td style='text-align:center;'> "+mult7+" </td></tr></tbody></table> </div> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> = <a1 style='color: #FF0000'>"+mult9+"</a1> </div> <br><br>  Agora, encontrar o valor de <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1>. <br>   <a1> "+coef_a+"<a1 style='font-family: times new roman;  font-size: 16px; font-style:italic; '>x</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" </a1> <br>  <a1> "+coef_a+" ∙ ("+mult9+") + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+"  </a1> <br> <a1> "+mult10+" + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" </a1> <br> <a1>  "+coef_b+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" - ("+mult10+")  </a1> <br> <a1>  "+coef_b+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+mult11+"  </a1> <br>  <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+mult11+" </td></tr><tr><td style='text-align:center;'> "+coef_b+" </td></tr></tbody></table>   </div>  <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = <a1 style='color: #FF0000'>"+mult12+"</a1> <br><br> Logo, a solução é: <br>  S = {(<a1 style='color: #FF0000'>"+mult9+"</a1>,&nbsp; <a1 style='color: #FF0000'>"+mult12+"</a1>)}   <hr><h1 class='logomarca'> JPP </h1> ";
  
			document.primeirograu.coef_a.focus();
			   document.primeirograu.coef_a.select(); 
			   return false; 
		   }	 
	   
		   if  ((deter2 != deter3)   ) { 
			document.getElementById('resposta').innerHTML = " <hr> Resolvendo o sistema pelo método da adição:  <br> <table>  <td style='  border-left: 1.8px solid ; border-radius: 5px 0px 0px 5px;   width: 300px; '><a1> "+coef_a+"<a1 style='font-family: times new roman;  font-size: 16px; font-style:italic; '>x</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" &emsp; (I)  </a1> <br> <a1> "+coef_d+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> + ("+coef_e+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_f+" &emsp; (II)</td> </table>  Multiplicando a equação (I) por <a1 style='color: #FF0000'>"+mult13+"</a1> e a equação (II) por <a1 style='color: #FF0000'>"+coef_b+"</a1>. <br>  <table>  <td style='  border-left: 1.8px solid ; border-radius: 5px 0px 0px 5px;   width: 300px; '><a1> "+coef_a+"<a1 style='font-family: times new roman;  font-size: 16px; font-style:italic; '>x</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" &emsp; × (<a1 style='color: #FF0000'>"+mult13+"</a1>)  </a1> <br> <a1> "+coef_d+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> + ("+coef_e+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_f+" &emsp; × (<a1 style='color: #FF0000'>"+coef_b+")</td> </table>  <br> <table>  <td style='  border-left: 1.8px solid ; border-radius: 5px 0px 0px 5px;   width: 300px; '><a1> "+mult1+"<a1 style='font-family: times new roman;  font-size: 16px; font-style:italic; '>x</a1> + ("+mult2+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+mult3+"  </a1>  </a1> <br> <a1> "+mult4+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> + ("+mult5+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+mult6+"  </td> </table>  <hr style='height:1.4px; text-align: left; border:none; width: 180px; color:#000; background-color:#000; margin: 0 0 0 5px;'/> &ensp; "+mult7+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> &emsp;= &ensp; "+mult8+"  <br><br>   Logo, o <a1 style='color: #FF0000'>sistema é impossível</a1> (S.I).<br> Ou seja, NÃO tem solução.  <hr><h1 class='logomarca'> JPP </h1> ";
  
		   document.primeirograu.coef_a.focus();
		   document.primeirograu.coef_a.select(); 
			  return false;		 
		  } 
	   
		   if (  (deter2 == deter3) ) { 
			document.getElementById('resposta').innerHTML = "<hr> Resolvendo o sistema pelo método da adição:  <br> <table>  <td style='  border-left: 1.8px solid ; border-radius: 5px 0px 0px 5px;   width: 300px; '><a1> "+coef_a+"<a1 style='font-family: times new roman;  font-size: 16px; font-style:italic; '>x</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" &emsp; (I)  </a1> <br> <a1> "+coef_d+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> + ("+coef_e+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_f+" &emsp; (II)</td> </table>  Multiplicando a equação (I) por <a1 style='color: #FF0000'>"+mult13+"</a1> e a equação (II) por <a1 style='color: #FF0000'>"+coef_b+"</a1>. <br>  <table>  <td style='  border-left: 1.8px solid ; border-radius: 5px 0px 0px 5px;   width: 300px; '><a1> "+coef_a+"<a1 style='font-family: times new roman;  font-size: 16px; font-style:italic; '>x</a1> + ("+coef_b+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_c+" &emsp; × (<a1 style='color: #FF0000'>"+mult13+"</a1>)  </a1> <br> <a1> "+coef_d+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> + ("+coef_e+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+coef_f+" &emsp; × (<a1 style='color: #FF0000'>"+coef_b+")</td> </table>  <br> <table>  <td style='  border-left: 1.8px solid ; border-radius: 5px 0px 0px 5px;   width: 300px; '><a1> "+mult1+"<a1 style='font-family: times new roman;  font-size: 16px; font-style:italic; '>x</a1> + ("+mult2+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+mult3+"  </a1>  </a1> <br> <a1> "+mult4+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> + ("+mult5+")<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>y</a1> = "+mult6+"  </td> </table>  <hr style='height:1.4px; border:none; text-align: left; width: 180px; color:#000; background-color:#000; margin: 0 0 0 5px;'/> &ensp; "+mult7+"<a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>x</a1> &emsp;= &ensp; "+mult8+"  <br><br>  Logo, o sistema é<a1 style='color: #FF0000'> possível e indeterminado</a1> (S.P.I). Ou seja, tem <a1 style='color: #FF0000'>infinitas</a1> soluções.  <hr><h1 class='logomarca'> JPP </h1> ";
	  
		   document.primeirograu.coef_a.focus();
		   document.primeirograu.coef_a.select(); 
			  return false;		 
		  }
	   }
	   catch(e) {alert(e)}
	}
	
   }   
	
  
  
  /***#############################################              ######################################################      **/
  /***#############################################   FATORAÇÃO  #####################################################      **/
  
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
		  str_prm += ' '+ key +'<sup>'+ ar_prm[key] +'</sup> ∙';
	  }
	str_prm = str_prm.substring(0, str_prm.length - 1);  // elimina o último ponto 
   return str_prm.replace(/x$/,'');
  }
  function execute(){
	 var str = '';
	 var lst_quoc = lstQuoc( getNumero() );
	 var lst_fat = lstFatPrm( getNumero() );
	 str += 'Decomposição:'+ exibFat( getNumero(), lst_quoc, lst_fat ) + '<h1 class="logomarca"> JPP </h1>';
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
  /***#########################################  GEOMETRIA ANALÍTICA  ####################################     **/
  
  function Geom_Analit2() {
	var a = document.forms["Geom_Analit"]["Geom_Analit_type"].value;
  /** ******************************   Distância entre 2 pontos   *****************************  **/  
   if (a === "Dist_2_pontos") {
	  document.getElementById("x_c").disabled = true;	
	  document.getElementById("x_c").value ="";
	  document.getElementById("y_c").disabled = true;	
	  document.getElementById("y_c").value ="";
	  document.getElementById("coefangular_m").disabled = true;	
	  document.getElementById("coefangular_m").value ="";	
	  document.getElementById("angulo_α").disabled = true;	
	  document.getElementById("angulo_α").value ="";		
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
	  
  /** ******************************  Ponto Médio   *****************************  **/  
   if (a === "ponto_medio") {
	  document.getElementById("x_c").disabled = true;	
	  document.getElementById("x_c").value ="";
	  document.getElementById("y_c").disabled = true;	
	  document.getElementById("y_c").value ="";
	  document.getElementById("coefangular_m").disabled = true;	
	  document.getElementById("coefangular_m").value ="";	
	  document.getElementById("angulo_α").disabled = true;	
	  document.getElementById("angulo_α").value ="";		
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
	  
  /** ******************************  condição de alinhamento de 3 pontos   *****************************  **/  
   if (a === "condicao_alinhamento") {
	  document.getElementById("coefangular_m").disabled = true;	
	  document.getElementById("coefangular_m").value ="";	
	  document.getElementById("angulo_α").disabled = true;	
	  document.getElementById("angulo_α").value ="";		
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
  
  /** ******************************  Equação da reta (2 pontos)   *****************************  **/  
   if (a === "equac_da_reta_2_pontos") {
	  document.getElementById("coefangular_m").disabled = true;	
	  document.getElementById("coefangular_m").value ="";
	  document.getElementById("x_c").disabled = true;	
	  document.getElementById("x_c").value ="";	
	  document.getElementById("y_c").disabled = true;	
	  document.getElementById("y_c").value ="";
	  document.getElementById("angulo_α").disabled = true;	
	  document.getElementById("angulo_α").value ="";		
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
	  
  /** ******************************  Equação da reta (1 ponto e coef. angular)   *****************************  **/  
   if (a === "equac_da_reta_1ponto_coef_angular") {
	  document.getElementById("x_b").disabled = true;	
	  document.getElementById("x_b").value ="";
	  document.getElementById("y_b").disabled = true;	
	  document.getElementById("y_b").value ="";	
	  document.getElementById("x_c").disabled = true;	
	  document.getElementById("x_c").value ="";	
	  document.getElementById("y_c").disabled = true;	
	  document.getElementById("y_c").value ="";
	  document.getElementById("angulo_α").disabled = true;	
	  document.getElementById("angulo_α").value ="";		
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
	  document.getElementById("angulo_α").disabled = true;	
	  document.getElementById("angulo_α").value ="";		
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
	  document.getElementById("angulo_α").disabled = false;	
   }
   try { 	}
	   catch(e) {alert(e)}	
  
  /** ******************************  Distância entre um ponto e uma reta   ****************************  **/  
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
	  document.getElementById("angulo_α").disabled = true;	
	  document.getElementById("angulo_α").value ="";		
	  document.getElementById("coef_a").disabled = false;	
	  document.getElementById("coef_b").disabled = false;	
	  document.getElementById("coef_c").disabled = false;	
	   document.getElementById("x_a").disabled = false;		
	   document.getElementById("y_a").disabled = false;
   }
   try { 	}
	   catch(e) {alert(e)}	
  
  /** ******************************  Área de triângulos dados 3 pontos   ****************************  **/  
   if (a === "area_triangulo") {
	  document.getElementById("coefangular_m").disabled = true;	
	  document.getElementById("coefangular_m").value ="";	
	  document.getElementById("angulo_α").disabled = true;	
	  document.getElementById("angulo_α").value ="";		
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
	  
  /** ******************************  equação da circunferência   ****************************  **/  
   if (a === "equac_circunferencia") {
	  document.getElementById("coefangular_m").disabled = true;	
	  document.getElementById("coefangular_m").value ="";	
	  document.getElementById("angulo_α").disabled = true;	
	  document.getElementById("angulo_α").value ="";		
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
	  alert("Escolha uma opção para Calcular!");
	 } 	
	  
	var a = document.forms["Geom_Analit"]["Geom_Analit_type"].value;
	/** *****************************************************  Distância entre 2 pontos  ****************************************  **/  
	if (a === "Dist_2_pontos") { 
	  var x_a = eval(document.Geom_Analit.x_a.value.replace(",",".").replace(/ /g,""));
	  var y_a = eval(document.Geom_Analit.y_a.value.replace(",",".").replace(/ /g,"")); 	
	  var x_b = eval(document.Geom_Analit.x_b.value.replace(",",".").replace(/ /g,""));   
	  var y_b = eval(document.Geom_Analit.y_b.value.replace(",",".").replace(/ /g,""));  
  
	  if (isNaN(x_a)   ) { alert("Digite um valor numérico!");
		  document.Geom_Analit.x_a.focus();
		  document.Geom_Analit.x_a.select();  
	  return false;
   }
  
	  if (isNaN(x_b)   ) { alert("Digite um valor numérico!");
		  document.Geom_Analit.x_b.focus();
		  document.Geom_Analit.x_b.select();  
	  return false;
   }
  
	  if (isNaN(y_a)   ) { alert("Digite um valor numérico!");
		  document.Geom_Analit.y_a.focus();
		  document.Geom_Analit.y_a.select();  
	  return false;
   }
   
	  if (isNaN(y_b)   ) { alert("Digite um valor numérico!");
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
	
	  document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 20px; padding: 5px; '>A distância entre os pontos A e B é: <br>  <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>D</a1><a1 style='font-size: 10px; font-family: times new roman;'>AB</a1> =  √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>(<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1>)² + (<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1>)²</a1> <br>  <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>D</a1><a1 style='font-size: 10px; font-family: times new roman;'>AB</a1> =  √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>("+x_a+" - ("+x_b+"))² + ("+y_a+" - ("+y_b+"))²</a1> <br>  <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>D</a1><a1 style='font-size: 10px; font-family: times new roman;'>AB</a1> =  √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>("+Dab1+")² + ("+Dab2+")²</a1> <br>  <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>D</a1><a1 style='font-size: 10px; font-family: times new roman;'>AB</a1> =  √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+Dab3+" + "+Dab4+"</a1> <br>   <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>D</a1><a1 style='font-size: 10px; font-family: times new roman;'>AB</a1> =  √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+Dab5+" </a1> <br>   <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>D</a1><a1 style='font-size: 10px; font-family: times new roman;'>AB</a1> ≈ <a1 style='color: #FF0000'> "+Dab+"</a1>" +" <hr> <h1 class='logomarca'> JPP </h1> </div>" 
	 
	  document.Geom_Analit.x_a.focus();
	  document.Geom_Analit.x_a.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
   /** *******************************************  Distância entre 2 pontos  ****************************************  **/  
	if (a === "ponto_medio") { 
	  var x_a = eval(document.Geom_Analit.x_a.value.replace(",",".").replace(/ /g,""));
	  var y_a = eval(document.Geom_Analit.y_a.value.replace(",",".").replace(/ /g,"")); 	
	  var x_b = eval(document.Geom_Analit.x_b.value.replace(",",".").replace(/ /g,""));   
	  var y_b = eval(document.Geom_Analit.y_b.value.replace(",",".").replace(/ /g,""));  
	 
	  if (isNaN(x_a)   ) { alert("Digite um valor numérico!");
		  document.Geom_Analit.x_a.focus();
		  document.Geom_Analit.x_a.select();  
	  return false;
   }
  
	  if (isNaN(x_b)   ) { alert("Digite um valor numérico!");
		  document.Geom_Analit.x_b.focus();
		  document.Geom_Analit.x_b.select();  
	  return false;
   }
	  if (isNaN(y_a)   ) { alert("Digite um valor numérico!");
		  document.Geom_Analit.y_a.focus();
		  document.Geom_Analit.y_a.select();  
	  return false;
   }
	  if (isNaN(y_b)   ) { alert("Digite um valor numérico!");
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
   
	  document.getElementById('resposta').innerHTML =" <hr> <div style='line-height: 20px; padding: 5px; '>O ponto médio entre os pontos A e B é: <br>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman;  font-size: 20px;'>M</a1><a1 style='font-size: 15px; font-family: times new roman;'>(x)</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+x_a+" + ("+x_b+") </td></tr> <tr> <td> 2 </td><td> 2 </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman;  font-size: 20px;'>M</a1><a1 style='font-size: 15px; font-family: times new roman;'>(x)</a1> &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> "+Pont_med_x1+" </td>  <td rowspan='2'> &nbsp;=&nbsp; </td>  <td rowspan='2'> <a1 style='color: #FF0000'> "+Pont_med_x+"</a1> </td></tr> <tr> <td> 2 </td> </tr></tbody></table> e <br>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman;  font-size: 20px;'>M</a1><a1 style='font-size: 15px; font-family: times new roman;'>(y)</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+y_a+" + ("+y_b+") </td></tr> <tr> <td> 2 </td><td> 2 </td> </tr></tbody></table>      <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman;  font-size: 20px;'>M</a1><a1 style='font-size: 15px; font-family: times new roman;'>(y)</a1> &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'>  "+Pont_med_y1+"  </td>  <td rowspan='2'> &nbsp;=&nbsp; </td>  <td rowspan='2'> <a1 style='color: #FF0000'> "+Pont_med_y+"</a1> </td></tr> <tr> <td> 2 </td> </tr></tbody></table>  Logo, o ponto Médio é M (<a1 style='color: #FF0000'> "+Pont_med_x+"</a1>; <a1 style='color: #FF0000'> "+Pont_med_y+"</a1>)  <hr>   <h1 class='logomarca'> JPP </h1> </div>" 
	 
	  document.Geom_Analit.x_a.focus();
	  document.Geom_Analit.x_a.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** ********************************  Condição de alinhamento de 3 pontos   ************************************  **/  
	if (a === "condicao_alinhamento") { 
	  var x_a = eval(document.Geom_Analit.x_a.value.replace(",",".").replace(/ /g,"")); 
	  var y_a = eval(document.Geom_Analit.y_a.value.replace(",",".").replace(/ /g,"")); 
	  var x_b = eval(document.Geom_Analit.x_b.value.replace(",",".").replace(/ /g,""));   
		var y_b = eval(document.Geom_Analit.y_b.value.replace(",",".").replace(/ /g,"")); 
	  var x_c = eval(document.Geom_Analit.x_c.value.replace(",",".").replace(/ /g,""));    
	  var y_c = eval(document.Geom_Analit.y_c.value.replace(",",".").replace(/ /g,""));
	
	  if (isNaN(x_a)   ) { alert("Digite um valor numérico!");
		  document.Geom_Analit.x_a.focus();
		  document.Geom_Analit.x_a.select();  
	  return false;
   }
  
	  if (isNaN(x_b)   ) { alert("Digite um valor numérico!");
		  document.Geom_Analit.x_b.focus();
		  document.Geom_Analit.x_b.select();  
	  return false;
   }
  
	  if (isNaN(y_a)   ) { alert("Digite um valor numérico!");
		  document.Geom_Analit.y_a.focus();
		  document.Geom_Analit.y_a.select();  
	  return false;
   }
   
	  if (isNaN(y_b)   ) { alert("Digite um valor numérico!");
		  document.Geom_Analit.y_b.focus();
		  document.Geom_Analit.y_b.select();  
	  return false;
   } 
   
	  if (isNaN(y_c)   ) { alert("Digite um valor numérico!");
		  document.Geom_Analit.y_c.focus();
		  document.Geom_Analit.y_c.select();  
	  return false;
   } 
  
	  if (isNaN(x_c)   ) { alert("Digite um valor numérico!");
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
  
	if (Cond_alinham == 0) { document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 20px; padding: 5px; '>Calculando o determinante pela regra de Sarrus: <br>   <table style='border-left: solid 1.5px; width:150px;  '> <tbody> <tr>  <td><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td>  <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> <td>&ensp;1</td> <td style='border-left: solid 1.5px'> <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> </tr>  <tr> <td><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td> <td>&ensp;1</td> <td style='border-left: solid 1.5px'><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td>  <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td>   </tr> <tr> <td><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td>  <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td>  <td>&ensp;1</td> <td style='border-left: solid 1.5px'><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td> <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td> </tr>  </tbody> </table>       <br>         Det =  1 ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1> + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> ∙ 1 ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1> + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> ∙ 1 - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> ∙ 1 - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> ∙ 1 ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1> - 1 ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1> <BR><br>  Det =  1 ∙ ("+x_b+") ∙ ("+y_c+") + ("+y_a+") ∙ 1 ∙ ("+x_c+") + ("+x_a+") ∙ ("+y_b+") ∙ 1 - ("+y_a+") ∙ ("+x_b+") ∙ 1 – ("+x_a+") ∙ 1 ∙ ("+y_c+") - 1 ∙ ("+y_b+") ∙ ("+x_c+") <BR><br>      Det =  ("+Cond_alinham1+") + ("+Cond_alinham2+") + ("+Cond_alinham3+") + ("+Cond_alinham4+") + ("+Cond_alinham5+") + ("+Cond_alinham6+") <BR><br>  Det = <a1 style='color: #FF0000'> "+Cond_alinham+"</a1>" +"  <BR>    Como o Det = 0, logo, os pontos A, B e C são colineares, ou seja, pertenca a uma mesma reta. <hr> <h1 class='logomarca'> JPP </h1> </div>" 
	
	  return false;		  
		 }
		 else { 
			 document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 20px; padding: 5px; '>Calculando o determinate pela regra de Sarrus: <br><table style='border-left: solid 1.5px; width:150px;  '> <tbody> <tr>  <td><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td>  <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> <td>&ensp;1</td> <td style='border-left: solid 1.5px'> <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> </tr>  <tr> <td><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td> <td>&ensp;1</td> <td style='border-left: solid 1.5px'><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td>  <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td>   </tr> <tr> <td><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td>  <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td>  <td>&ensp;1</td> <td style='border-left: solid 1.5px'><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td> <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td> </tr>  </tbody> </table> <br> Det =  1 ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1> + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> ∙ 1 ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1> + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> ∙ 1 - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> ∙ 1 - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> ∙ 1 ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1> - 1 ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1> <BR><BR>  Det =  1 ∙ ("+x_b+") ∙ ("+y_c+") + ("+y_a+") ∙ 1 ∙ ("+x_c+") + ("+x_a+") ∙ ("+y_b+") ∙ 1 - ("+y_a+") ∙ ("+x_b+") ∙ 1 - ("+x_a+") ∙ 1 ∙ ("+y_c+") - 1 ∙ ("+y_b+") ∙ ("+x_c+") <BR><BR>      Det =  "+Cond_alinham1+" + ("+Cond_alinham2+") + ("+Cond_alinham3+") + ("+Cond_alinham4+") + ("+Cond_alinham5+") + ("+Cond_alinham6+") <BR><BR>  Det = <a1 style='color: #FF0000'> "+Cond_alinham+"</a1>" +"   <br> Como o Det = "+Cond_alinham+" ≠ 0, logo, os pontos A, B e C NÃO são colineares, ou seja, não pertence a uma mesma reta. <hr>  <h1 class='logomarca'> JPP </h1> </div>" 
	  document.Geom_Analit.x_a.focus();
	  document.Geom_Analit.x_a.select();     
	  document.getElementById('resposta').style.display = "block";
   } 
  }	
  catch(e) {alert(e)}
  }
  
  
   /** *****************************************  Equação da reta (2 pontos)   ************************************  **/  
	if (a === "equac_da_reta_2_pontos") {
	  var x_a = eval(document.Geom_Analit.x_a.value.replace(",",".").replace(/ /g,"")); 
	  var x_b = eval(document.Geom_Analit.x_b.value.replace(",",".").replace(/ /g,"")); 	
	  var y_a = eval(document.Geom_Analit.y_a.value.replace(",",".").replace(/ /g,"")); 	
	  var y_b = eval(document.Geom_Analit.y_b.value.replace(",",".").replace(/ /g,""));   
	
	  if (isNaN(x_a)   ) { alert("Digite um valor numérico!");
		  document.Geom_Analit.x_a.focus();
		  document.Geom_Analit.x_a.select();  
	  return false;
   }
	  if (isNaN(x_b)   ) { alert("Digite um valor numérico!");
		  document.Geom_Analit.x_b.focus();
		  document.Geom_Analit.x_b.select();  
	  return false;
   }
  
	  if (isNaN(y_a)   ) { alert("Digite um valor numérico!");
		  document.Geom_Analit.y_a.focus();
		  document.Geom_Analit.y_a.select();  
	  return false;
   }
   
	  if (isNaN(y_b)   ) { alert("Digite um valor numérico!");
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
	
	 document.getElementById('resposta').innerHTML =" <hr> <div style='line-height: 20px; padding: 5px; '>A equação da reta é <br><table style='border-left: solid 1.5px; width:150px;  '> <tbody> <tr>  <td><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> </td>  <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> </td> <td>&ensp;1</td> <td style='border-left: solid 1.5px'> <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> </td> <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> </td> </tr>  <tr> <td><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> <td>&ensp;1</td> <td style='border-left: solid 1.5px'><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td>  <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td>   </tr> <tr> <td><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td>  <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td>  <td>&ensp;1</td> <td style='border-left: solid 1.5px'><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td> <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td> </tr>  </tbody> </table> <BR>    1 ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> ∙ 1 ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> ∙ 1 - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> ∙ 1 - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> ∙ 1 ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> - 1 ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> = 0 <BR><BR>          1 ∙ ("+x_a+") ∙ ("+y_b+") + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> ∙ 1 ∙ ("+x_b+") + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> ∙ ("+y_a+") ∙ 1 - ("+y_a+") ∙ ("+x_b+") ∙ 1 - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> ∙ 1 ∙ ("+y_b+") - 1 ∙ ("+x_a+") ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> = 0 <BR><BR>     "+eq_reta1+" + ("+x_b+")<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> + ("+y_a+")<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1>  - ("+x_a+")<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> - ("+y_b+")<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1>  - ("+eq_reta2+") = 0 <BR><BR>  <a1 style='color: #FF0000'>Equação geral</a1> <BR>   ("+eq_reta4+")<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> + ("+eq_reta5+")<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1>  + ("+eq_reta3+") = 0 &emsp;  <BR>  <BR>  <a1 style='color: #FF0000'>Equação reduzida</a1> <BR>  "+eq_reta5+"<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> = "+eq_reta8+"<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1>  + ("+eq_reta9+")  <BR>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> y &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> "+eq_reta8+"x </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> ("+eq_reta9+") </td></tr> <tr> <td> "+eq_reta5+" </td><td> "+eq_reta5+" </td> </tr></tbody></table> ou <br> y =  "+eq_reta10+"x + ("+eq_reta11+")    <hr><h1 class='logomarca'> JPP </h1> </div>" 
	
	  document.Geom_Analit.x_a.focus();
	  document.Geom_Analit.x_a.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }  
	
	
	/** ****************************** equação da reta (1 ponto e coeficiente angular) *********************************/  
	if (a === "equac_da_reta_1ponto_coef_angular") { 
	  var x_a = eval(document.Geom_Analit.x_a.value.replace(",",".").replace(/ /g,"")); 
	  var y_a = eval(document.Geom_Analit.y_a.value.replace(",",".").replace(/ /g,""));   
	  var coefangular_m = eval(document.Geom_Analit.coefangular_m.value.replace(",",".").replace(/ /g,""));   
  
	  if (isNaN(x_a)   ) { alert("Digite um valor numérico!");
		  document.Geom_Analit.x_a.focus();
		  document.Geom_Analit.x_a.select();  
	  return false;
   }
  
	  if (isNaN(y_a)   ) { alert("Digite um valor numérico!");
		  document.Geom_Analit.y_a.focus();
		  document.Geom_Analit.y_a.select();  
	  return false;
   }
  
	  if (isNaN(coefangular_m)) { alert("Digite um valor numérico!");
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
	
	  document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 20px; padding: 5px; '>A equação geral da reta é: <br>  <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> = <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>m</a1> ∙ (<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1>) <br>  <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> - ("+y_a+") = "+coefangular_m+" ∙ (<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> - ("+x_a+")) <br>  <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> + ("+eq_ret+") = "+coefangular_m+" ∙ (<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> + ("+eq_ret1+")) <br>  <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> + ("+eq_ret+") = "+coefangular_m+"<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> + ("+eq_ret2+") <br>   "+eq_ret3+"<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> + ("+eq_ret+") + ("+eq_ret4+") = 0 <br>  "+eq_ret3+"<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> + ("+eq_ret5+")  = 0 <br>  <hr>        <h1 class='logomarca'> JPP </h1> </div>" 
	 
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
	  
	  if (isNaN(x_a)   ) { alert("Digite um valor numérico!");
		  document.Geom_Analit.x_a.focus();
		  document.Geom_Analit.x_a.select();  
	  return false;
   }
  
	  if (isNaN(y_a)   ) { alert("Digite um valor numérico!");
		  document.Geom_Analit.y_a.focus();
		  document.Geom_Analit.y_a.select();  
	  return false;
   }
  
	  if (isNaN(x_b)   ) { alert("Digite um valor numérico!");
		  document.Geom_Analit.x_b.focus();
		  document.Geom_Analit.x_b.select();  
	  return false;
   }
  
	  if (isNaN(y_b)   ) { alert("Digite um valor numérico!");
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
  
	  document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 20px; padding: 5px; '>O coeficiente angular é: <br>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>m</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1>  </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>m</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+y_a+" - ("+y_b+") </td></tr><tr><td style='text-align:center;'> "+x_a+" - ("+x_b+") </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>m</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+coefic_angular1+" </td></tr><tr><td style='text-align:center;'> "+coefic_angular2+"  </td></tr></tbody></table>   ou <br> <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>m</a1> =  <a1 style='color: #FF0000'>"+coefic_angular3+"</a1>    <br>  <hr>   <h1 class='logomarca'> JPP </h1> </div>" 
	 
	  document.Geom_Analit.x_a.focus();
	  document.Geom_Analit.x_a.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }    
	
	
   /** *****************************************  coeficiente angular   ****************************************  **/  
	if (a === "coef_angular2") { 
	  var angulo_α = eval(document.Geom_Analit.angulo_α.value.replace(",",".").replace(/ /g,"")); 
  
	  if (isNaN(angulo_α)   ) { alert("Digite um valor numérico!");
		  document.Geom_Analit.angulo_α.focus();
		  document.Geom_Analit.angulo_α.select();  
	  return false;
   }
	   
   try {
   var angulo_α = document.getElementById("resposta").value = roundNumber(angulo_α, 3);	 
   var tgα = Math.tan((angulo_α)*Math.PI/180); 	    
   var tgα= document.getElementById("resposta").value = roundNumber(tgα, 3);	
   
	  document.getElementById('resposta').innerHTML =" <hr> <div style='line-height: 20px; padding: 5px; '>O coeficiente angular é: <br> <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>m</a1> = tg α <br>  <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>m</a1> = tg "+angulo_α+"º <br>  <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>m</a1> =  <a1 style='color: #FF0000'>"+tgα+"</a1>  <br> <hr>  <h1 class='logomarca'> JPP </h1> </div>" 
	  document.Geom_Analit.angulo_α.focus();
	  document.Geom_Analit.angulo_α.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }    
  
  
  /** *****************************************  Distância entre um ponto e uma reta   ***************************  **/  
	if (a === "dist_ponto_reta") { 
	  var coef_a = eval(document.Geom_Analit.coef_a.value.replace(",",".").replace(/ /g,""));
	  var coef_b = eval(document.Geom_Analit.coef_b.value.replace(",",".").replace(/ /g,""));	
	  var coef_c = eval(document.Geom_Analit.coef_c.value.replace(",",".").replace(/ /g,""));		
	  var x_a = eval(document.Geom_Analit.x_a.value.replace(",",".").replace(/ /g,""));	
	  var y_a = eval(document.Geom_Analit.y_a.value.replace(",",".").replace(/ /g,""));		
  
	if (isNaN(coef_a)   ) { alert("Digite um valor numérico!");
		  document.Geom_Analit.coef_a.focus();
		  document.Geom_Analit.coef_a.select();  
	  return false;
   }
   
	if (isNaN(coef_b)   ) { alert("Digite um valor numérico!");
		  document.Geom_Analit.coef_b.focus();
		  document.Geom_Analit.coef_b.select();  
	  return false;
   } 
   
	if (isNaN(coef_c)   ) { alert("Digite um valor numérico!");
		  document.Geom_Analit.coef_c.focus();
		  document.Geom_Analit.coef_c.select();  
	  return false;
   } 
  
	if (isNaN(x_a)   ) { alert("Digite um valor numérico!");
		  document.Geom_Analit.x_a.focus();
		  document.Geom_Analit.x_a.select();  
	  return false;
   } 
   
	if (isNaN(y_a)   ) { alert("Digite um valor numérico!");
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
  
	  document.getElementById('resposta').innerHTML =" <hr> <div style='line-height: 20px; padding: 1px; '>A distância entre um ponto A e uma reta (r) é: <br> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;  font-size: 20px;'>D</a1><a1 style='font-size: 12px; font-family: times new roman;'>(A, r)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> |<a1 style='font-family: times new roman; font-style:italic;font-size: 25px;'>a</a1><a1 style='font-family: times new roman; font-style:italic;font-size: 25px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> + <a1 style='font-family: times new roman; font-style:italic;font-size: 25px;'>b</a1><a1 style='font-family: times new roman; font-style:italic;font-size: 23px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> + <a1 style='font-family: times new roman; font-style:italic;font-size: 25px;'>c</a1>|  </td></tr><tr><td style='text-align:center;'> √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1px;'><a1 style='font-family: times new roman; font-style:italic;font-size: 18px;'>a²</a1> + <a1 style='font-family: times new roman; font-style:italic;font-size: 18px;'>b²</a1></a1>  </td></tr></tbody></table>     <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;  font-size: 20px;'>D</a1><a1 style='font-size: 12px; font-family: times new roman;'>(A, r)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  |"+coef_a+" ∙ ("+x_a+") + ("+coef_b+") ∙ ("+y_a+") + ("+coef_c+")|  </td></tr><tr><td style='text-align:center;'> √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1px;'><a1 style='font-family: times new roman;  font-size: 18px;'>("+coef_a+")²</a1> + <a1 style='font-family: times new roman;  font-size: 18px;'>("+coef_b+")²</a1></a1>  </td></tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;  font-size: 20px;'>D</a1><a1 style='font-size: 12px; font-family: times new roman;'>(A, r)</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> |"+d_p_r1+" + ("+d_p_r2+") + ("+coef_c+")| </td></tr><tr><td style='text-align:center;'> √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1px;'><a1 style='font-family: times new roman;  font-size: 18px;'>"+d_p_r3+"</a1> + <a1 style='font-family: times new roman;  font-size: 18px;'>"+d_p_r4+"</a1></a1>  </td></tr></tbody></table>                 <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> <a1 style='font-family: times new roman;  font-size: 18px;'>D</a1><a1 style='font-size: 13px; font-family: times new roman;'>(A, r)</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> |"+d_p_r5+"| </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+d_p_r7+" </td></tr> <tr> <td> √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1px;'><a1 style='font-family: times new roman;  font-size: 18px;'>"+d_p_r6+"</a1> </a1> </td><td> "+d_p_r8+" </td> </tr></tbody></table>  <br>  <a1 style='font-family: times new roman;  font-size: 18px;'>D</a1><a1 style='font-size: 13px; font-family: times new roman;'>(A, r)</a1> =  <a1 style='color: #FF0000'>"+dist_pont_reta+"</a1>  <br>   <hr>   <h1 class='logomarca'> JPP </h1> </div>" 
	  
	  document.Geom_Analit.coef_a.focus();
	  document.Geom_Analit.coef_a.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }    
  
  /** ***************************************** Área de triângulo   *****************************  **/  
	if (a === "area_triangulo") { 
	  var x_a = eval(document.Geom_Analit.x_a.value.replace(",",".").replace(/ /g,"")); 
	  var y_a = eval(document.Geom_Analit.y_a.value.replace(",",".").replace(/ /g,"")); 
	  var x_b = eval(document.Geom_Analit.x_b.value.replace(",",".").replace(/ /g,""));   
		var y_b = eval(document.Geom_Analit.y_b.value.replace(",",".").replace(/ /g,"")); 
	  var x_c = eval(document.Geom_Analit.x_c.value.replace(",",".").replace(/ /g,""));    
	  var y_c = eval(document.Geom_Analit.y_c.value.replace(",",".").replace(/ /g,""));
	
	  if (isNaN(x_a)   ) { alert("Digite um valor numérico!");
		  document.Geom_Analit.x_a.focus();
		  document.Geom_Analit.x_a.select();  
	  return false;
   }
  
	  if (isNaN(x_b)   ) { alert("Digite um valor numérico!");
		  document.Geom_Analit.x_b.focus();
		  document.Geom_Analit.x_b.select();  
	  return false;
   }
  
	  if (isNaN(y_a)   ) { alert("Digite um valor numérico!");
		  document.Geom_Analit.y_a.focus();
		  document.Geom_Analit.y_a.select();  
	  return false;
   }
   
	  if (isNaN(y_b)   ) { alert("Digite um valor numérico!");
		  document.Geom_Analit.y_b.focus();
		  document.Geom_Analit.y_b.select();  
	  return false;
   } 
   
	  if (isNaN(y_c)   ) { alert("Digite um valor numérico!");
		  document.Geom_Analit.y_c.focus();
		  document.Geom_Analit.y_c.select();  
	  return false;
   } 
  
	  if (isNaN(x_c)   ) { alert("Digite um valor numérico!");
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
	  
   document.getElementById('resposta').innerHTML ="<hr>  <div style='line-height: 20px; padding: 5px; '>Primeiro calcular o determinante pela regra de Sarrus: <br>   <table style='border-left: solid 1.5px; width:150px;  '> <tbody> <tr>  <td><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td>  <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> <td>&ensp;1</td> <td style='border-left: solid 1.5px'> <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> </tr>  <tr> <td><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td> <td>&ensp;1</td> <td style='border-left: solid 1.5px'><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td>  <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td>   </tr> <tr> <td><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td>  <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td>  <td>&ensp;1</td> <td style='border-left: solid 1.5px'><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td> <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td> </tr>  </tbody> </table> <br> Det =  1 ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1> + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> ∙ 1 ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1> + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> ∙ 1 - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> ∙ 1 - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1> ∙ 1 ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1> - 1 ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1> ∙ <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1> <BR><br>  Det =  1 ∙ ("+x_b+") ∙ ("+y_c+") + ("+y_a+") ∙ 1 ∙ ("+x_c+") + ("+x_a+") ∙ ("+y_b+") ∙ 1 - ("+y_a+") ∙ ("+x_b+") ∙ 1 – ("+x_a+") ∙ 1 ∙ ("+y_c+") - 1 ∙ ("+y_b+") ∙ ("+x_c+") <BR><br>      Det =  ("+area_triang1+") + ("+area_triang2+") + ("+area_triang3+") + ("+area_triang4+") + ("+area_triang5+") + ("+area_triang6+") <BR><br>  Det =   "+area_triang+" " +"  <BR>  Logo, a área do triângulo de coordenadas A("+x_a+"; "+y_a+"), B("+x_b+"; "+y_b+") e C("+x_c+"; "+y_c+") é: <BR>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>  Área &nbsp;=&nbsp;  </td>  <td style='border-bottom:solid 1.3px'> 1 </td>  <td rowspan='2'> &nbsp;∙&nbsp; </td>  <td rowspan='2'> |D| </td></tr> <tr> <td> 2 </td> </tr></tbody></table>  Área =&nbsp; 0,5 ∙ "+area_triang7+" =  <a1 style='color: #FF0000'> "+area_triang8+"</a1> <hr> <h1 class='logomarca'> JPP </h1> </div>" 
	
	  document.Geom_Analit.x_a.focus();
	  document.Geom_Analit.x_a.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
  /** *****************************************  equação da circunferência   ************************************  **/  
	if (a === "equac_circunferencia") { 
	  var x_a = eval(document.Geom_Analit.x_a.value.replace(",",".").replace(/ /g,"")); 
	  var y_a = eval(document.Geom_Analit.y_a.value.replace(",",".").replace(/ /g,"")); 
	  var raio = eval(document.Geom_Analit.raio.value.replace(",",".").replace(/ /g,""));    
	
	  if (isNaN(x_a)   ) { alert("Digite um valor numérico!");
		  document.Geom_Analit.x_a.focus();
		  document.Geom_Analit.x_a.select();  
	  return false;
   }
  
	  if (isNaN(y_a)   ) { alert("Digite um valor numérico!");
		  document.Geom_Analit.y_a.focus();
		  document.Geom_Analit.y_a.select();  
	  return false;
   }
  
	  if (isNaN(raio) ||  (raio < 0)    ) { alert("Digite um valor numérico não negativo!");
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
	
   document.getElementById('resposta').innerHTML =" <hr> <div style='line-height: 20px; padding: 5px; '>A equação reduzida da circunferência de centro C("+x_a+"; "+y_a+") e raio R = "+raio+" é: <br> (<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>a</a1>)² + (<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> - <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>b</a1>)² = <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>R</a1>²  <br>  (<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> - ("+x_a+"))² + (<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> - ("+y_a+"))² = ("+raio+")²  <br>  (<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> + ("+equac_circunf1+"))² + (<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> + ("+equac_circunf2+"))² = "+equac_circunf3+"   <br> <br> Agora, a equação geral da circunferência:  <br>   <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1>² - 2∙("+x_a+")∙<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1>  + ("+x_a+")²  +  <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1>² - 2∙("+y_a+")∙<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> + ("+y_a+")² = 0 <br>   <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1>² - ("+equac_circunf4+")<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1>  +  "+equac_circunf6+"  +  <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1>² - ("+equac_circunf5+")<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> + "+equac_circunf7+" = "+equac_circunf3+"   <br>  <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1>² + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1>² - ("+equac_circunf4+")<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> - ("+equac_circunf5+")<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> + "+equac_circunf6+" + "+equac_circunf7+" + ("+equac_circunf3+") = 0 <br>   <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1>² + <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1>² + ("+equac_circunf9+")<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1> + ("+equac_circunf10+")<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1> + ("+equac_circunf11+")  = 0 <br>  <hr>           <h1 class='logomarca'> JPP </h1> </div>" 
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
	  alert("Escolha uma opção para Calcular!");
	 }	
	  
	var a = document.forms["jurosimples"]["jurosimples_type"].value;
	
	/** ***********************    JUROS SIMPLES  ************************  **/  
	if (a === "juros") { 
	  var capit = eval(document.jurosimples.capit.value.replace(",",".").replace(/ /g,""));
	  var taxa = eval(document.jurosimples.taxa.value.replace(",",".").replace(/ /g,"")); 
	  var tempo = eval(document.jurosimples.tempo.value.replace(",",".").replace(/ /g,""));   
	
	  if (isNaN(capit) ) { alert("Digite um valor numérico para o capital!");
		  document.jurosimples.capit.focus();
		  document.jurosimples.capit.select();  
	  return false;
	}
	  if (isNaN(taxa)) { alert("Digite um valor numérico para a taxa!");
		  document.jurosimples.taxa.focus();
		  document.jurosimples.taxa.select();  
	  return false;
	}
	  if (isNaN(tempo) ) { alert("Digite um valor numérico para o tempo!");
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
   
	  document.getElementById('resposta').innerHTML = "<hr> O valor do Juros (J) é: <br>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> J  &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> C ∙ i ∙ t  </td></tr><tr><td style='text-align:center;'> 100 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> J &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+capit+" ∙ "+taxa+" ∙ "+tempo+"  </td></tr><tr><td style='text-align:center;'> 100 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> J &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px; text-align:center;'> "+result2+"</td></tr><tr><td style='text-align:center;'> 100 </td></tr></tbody></table>  J =  "+result1.toFixed(2)+"  <br><br> Logo, o juros (J) é: <br> J = <a1 style='color: #FF0000'>$ "+result1.toFixed(2)+"</a1>      <hr>   <h1 class='logomarca'> JPP </h1> ";
  
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
	
	  if (isNaN(juro) ) { alert("Digite um valor numérico para o juros!");
		  document.jurosimples.juro.focus();
		  document.jurosimples.juro.select();  
	  return false;
	}
	  if (isNaN(taxa)) { alert("Digite um valor numérico para a taxa!");
		  document.jurosimples.taxa.focus();
		  document.jurosimples.taxa.select();  
	  return false;
	}
	  if (isNaN(tempo) ) { alert("Digite um valor numérico para o tempo!");
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
  
	  document.getElementById('resposta').innerHTML = "<hr> O valor do Capital (C) é: <br>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> J &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> C ∙ i ∙ t </td></tr><tr><td style='text-align:center;'> 100 </td></tr></tbody></table>     <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> "+juro+" &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  C ∙ "+taxa+" ∙ "+tempo+" </td></tr><tr><td style='text-align:center;'> 100 </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> C &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+juro+" ∙ 100 </td></tr><tr><td style='text-align:center;'> "+taxa+" ∙ "+tempo+" </td></tr></tbody></table>     <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> C &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+result2+" </td></tr><tr><td style='text-align:center;'> "+result3+" </td></tr></tbody></table>    C = "+result1.toFixed(2)+"  <br><br> Logo, o Capital (C) é: <br> C = <a1 style='color: #FF0000'>$ "+result1.toFixed(2)+"</a1>       <hr>  <h1 class='logomarca'> JPP </h1> ";
  
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
	
	  if (isNaN(capit)) { alert("Digite um valor numérico para o capital!");
		  document.jurosimples.capit.focus();
		  document.jurosimples.capit.select();  
	  return false;
	}  
	  if (isNaN(juro) ) { alert("Digite um valor numérico para o juros!");
		  document.jurosimples.juro.focus();
		  document.jurosimples.juro.select();  
	  return false;
	}
	  if (isNaN(tempo) ) { alert("Digite um valor numérico para o tempo!");
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
  
	  document.getElementById('resposta').innerHTML = "<hr> O valor da taxa (i) é: <br> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> J &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> C ∙ i ∙ t </td></tr><tr><td style='text-align:center;'> 100 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> "+juro+" &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+capit+" ∙ i ∙ "+tempo+"</td></tr><tr><td style='text-align:center;'> 100 </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> i &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+juro+" ∙ 100 </td></tr><tr><td style='text-align:center;'> "+capit+" ∙ "+tempo+" </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> i &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+result2+"</td></tr><tr><td style='text-align:center;'> "+result3+" </td></tr></tbody></table>   i = "+result1+"  <br><br> Logo, a taxa (i) é: <br> i = <a1 style='color: #FF0000'> "+result1+" %</a1>       <hr>  <h1 class='logomarca'> JPP </h1> ";
  
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
	
	  if (isNaN(capit)) { alert("Digite um valor numérico para o capital!");
		  document.jurosimples.capit.focus();
		  document.jurosimples.capit.select();  
	  return false;
	}  
	  if (isNaN(juro) ) { alert("Digite um valor numérico para o juro!");
		  document.jurosimples.juro.focus();
		  document.jurosimples.juro.select();  
	  return false;
	}
	  if (isNaN(taxa) ) { alert("Digite um valor numérico para a taxa!");
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
  
	  document.getElementById('resposta').innerHTML = "<hr> O valor do tempo (t) é: <br>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> J &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  C ∙ i ∙ t</td></tr><tr><td style='text-align:center;'> 100 </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> "+juro+" &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+capit+" ∙ "+taxa+" ∙ t </td></tr><tr><td style='text-align:center;'> 100 </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> t &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+juro+" ∙ 100</td></tr><tr><td style='text-align:center;'> "+capit+" ∙ "+taxa+" </td></tr></tbody></table>     <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> t &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+result2+"</td></tr><tr><td style='text-align:center;'> "+result3+" </td></tr></tbody></table>  t = "+result1+"  <br><br> Logo, o tempo (t) é: <br> t = <a1 style='color: #FF0000'> "+result1+" </a1>   <hr>   <h1 class='logomarca'> JPP </h1> ";
  
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
	
	  if (isNaN(capit)) { alert("Digite um valor numérico para o capital!");
		  document.jurosimples.capit.focus();
		  document.jurosimples.capit.select();  
	  return false;
	}  
	  if (isNaN(tempo) ) { alert("Digite um valor numérico para o tempo!");
		  document.jurosimples.tempo.focus();
		  document.jurosimples.tempo.select();  
	  return false;
	}
	  if (isNaN(taxa) ) { alert("Digite um valor numérico para a taxa!");
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
  
   
	  document.getElementById('resposta').innerHTML = "<hr> O valor do montante (M) é: <br> M = C ∙ (1 + i ∙ t) <br>    M = "+capit+" ∙ (1 + "+result4+" ∙ "+tempo+") <br>  M = "+capit+" ∙ (1 + "+result2+") <br> M = "+capit+" ∙ ("+result3+") <br>   M = "+result1.toFixed(2)+"  <br><br> Logo, o Montante (M) é: <br> M = <a1 style='color: #FF0000'> $ "+result1.toFixed(2)+" </a1>     <hr>  <h1 class='logomarca'> JPP </h1> ";
  
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
	
	  if (isNaN(montant)) { alert("Digite um valor numérico para o montante!");
		  document.jurosimples.montant.focus();
		  document.jurosimples.montant.select();  
	  return false;
	}  
	  if (isNaN(tempo) ) { alert("Digite um valor numérico para o tempo!");
		  document.jurosimples.tempo.focus();
		  document.jurosimples.tempo.select();  
	  return false;
	}
	  if (isNaN(taxa) ) { alert("Digite um valor numérico para a taxa!");
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
  
	  document.getElementById('resposta').innerHTML = "<hr> O valor do capital (C) é: <br> M = C ∙ (1 + i ∙ t) <br>  "+montant+" = C ∙ (1 + "+result4+" ∙ "+tempo+") <br>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> C &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+montant+"</td></tr><tr><td style='text-align:center;'> 1 + "+result4+" ∙ "+tempo+" </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> C &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+montant+"</td></tr><tr><td style='text-align:center;'> 1 + "+result2+" </td></tr></tbody></table>     <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> C &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+montant+"</td></tr><tr><td style='text-align:center;'> "+result3+" </td></tr></tbody></table>    C = "+result1.toFixed(2)+"  <br><br> Logo, o capital (C) é: <br> C = <a1 style='color: #FF0000'> $ "+result1.toFixed(2)+" </a1>     <hr>  <h1 class='logomarca'> JPP </h1> ";
  
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
	
	  if (isNaN(montant)) { alert("Digite um valor numérico para o montante!");
		  document.jurosimples.montant.focus();
		  document.jurosimples.montant.select();  
	  return false;
	}  
	  if (isNaN(tempo) ) { alert("Digite um valor numérico para o tempo!");
		  document.jurosimples.tempo.focus();
		  document.jurosimples.tempo.select();  
	  return false;
	}
	  if (isNaN(capit) ) { alert("Digite um valor numérico para o capital!");
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
   
	  document.getElementById('resposta').innerHTML = "<hr> O valor da taxa (i) é: <br> M = C ∙ (1 + i ∙ t) <br>  "+montant+" = "+capit+" ∙ (1 + i ∙ "+tempo+") <br>  <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> "+montant+" </td><td rowspan='2'> &nbsp;=&nbsp; 1 + "+tempo+"i   </td></tr><tr><td> "+capit+" </td> </tr></tbody></table>  "+result2+" - 1 = "+tempo+"i  <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> "+result3+" </td><td rowspan='2'> &nbsp;=&nbsp; i  </td></tr><tr><td> "+tempo+" </td> </tr></tbody></table> i = "+result1+"  <br> ou <br>  i = "+result1+" × 100 = "+result4+"% <br><br> Logo, a taxa (i) é: <br> i = <a1 style='color: #FF0000'> "+result4+"% </a1>  <hr>  <h1 class='logomarca'> JPP </h1> ";
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
	
	  if (isNaN(montant)) { alert("Digite um valor numérico para o montante!");
		  document.jurosimples.montant.focus();
		  document.jurosimples.montant.select();  
	  return false;
	}  
	  if (isNaN(taxa) ) { alert("Digite um valor numérico para a taxa!");
		  document.jurosimples.taxa.focus();
		  document.jurosimples.taxa.select();  
	  return false;
	}
	  if (isNaN(capit) ) { alert("Digite um valor numérico para o capital!");
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
   
	  document.getElementById('resposta').innerHTML = "<hr> O valor do tempo (t) é: <br> M = C ∙ (1 + i ∙ t) <br>  "+montant+" = "+capit+" ∙ (1 + "+result4+" ∙ t) <br>   <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> "+montant+"  </td><td rowspan='2'> &nbsp;=&nbsp; 1 + "+result4+"t  </td></tr><tr><td> "+capit+" </td> </tr></tbody></table>  "+result2+" - 1 = "+result4+"t   <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> "+result3+" </td><td rowspan='2'> &nbsp;=&nbsp; t  </td></tr><tr><td>  "+result4+" </td> </tr></tbody></table> t = "+result1+"   <br><br> Logo, a tempo (t) é: <br> t = <a1 style='color: #FF0000'> "+result1+" </a1>  <hr>  <h1 class='logomarca'> JPP </h1> ";
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
	  alert("Escolha uma opção para Calcular!");
	 } 
	 
	var a = document.forms["jurocomposto"]["jurocomposto_type"].value;
	
	/** ***********************   MONTANTE     ************************  **/  
	if (a === "montante") { 
	  var capit = eval(document.jurocomposto.capit.value.replace(",",".").replace(/ /g,""));
	  var taxa = eval(document.jurocomposto.taxa.value.replace(",",".").replace(/ /g,"")); 
	  var tempo = eval(document.jurocomposto.tempo.value.replace(",",".").replace(/ /g,""));   
	  
	  if (isNaN(capit) ) { alert("Digite um valor numérico para o capital!");
		  document.jurocomposto.capit.focus();
		  document.jurocomposto.capit.select();  
	  return false;
	}
	  if (isNaN(taxa)) { alert("Digite um valor numérico para a taxa!");
		  document.jurocomposto.taxa.focus();
		  document.jurocomposto.taxa.select();  
	  return false;
	}
	  if (isNaN(tempo) ) { alert("Digite um valor numérico para o tempo!");
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
   
	document.getElementById('resposta').innerHTML = "<hr> O valor do Montante (M) é: <br>  M = C × (1 + i)<span class=\'exp\'>t</span>  <br>  M = "+capit+" × (1 + "+result2+")<span class=\'exp\'>"+tempo+" </span> <br>  M = "+capit+" × ("+result3+")<span class=\'exp\'>"+tempo+" </span>  <br>  M = "+capit+" × "+result4+" <br>  M = "+result1.toFixed(2)+" <br><br>  Logo, o montante (M) é: <br> M = <a1 style='color: #FF0000'>$ "+result1.toFixed(2)+"</a1>   <hr><h1 class='logomarca'> JPP </h1> ";
  
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
	  
	  if (isNaN(montant) ) { alert("Digite um valor numérico para o montante!");
		  document.jurocomposto.montant.focus();
		  document.jurocomposto.montant.select();  
	  return false;
	}
	  if (isNaN(taxa)) { alert("Digite um valor numérico para a taxa!");
		  document.jurocomposto.taxa.focus();
		  document.jurocomposto.taxa.select();  
	  return false;
	}
	  if (isNaN(tempo) ) { alert("Digite um valor numérico para o tempo!");
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
  
	  document.getElementById('resposta').innerHTML = "<hr> O valor do capital (C) é: <br>  M = C × (1 + i)<span class=\'exp\'>t</span>  <br>  "+montant+" = C × (1 + "+result2+")<span class=\'exp\'>"+tempo+" </span> <br> "+montant+" = C × ("+result3+")<span class=\'exp\'>"+tempo+" </span>  <br>  "+montant+" = C × "+result4+" <br>  <table id='fracao'><tbody><tr><td  rowspan='2'>C  &nbsp;=&nbsp;  </td><td style='border-bottom:solid 1.3px;text-align:center; '>  "+montant+"  </td></tr><tr><td style='text-align:center;'> "+result4+" </td></tr></tbody></table>    <br>  Logo, o capital (C) é: <br> C = <a1 style='color: #FF0000'>$ "+result1.toFixed(2)+"</a1>   <hr><h1 class='logomarca'> JPP </h1> ";
  
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
	  
	  if (isNaN(montant) ) { alert("Digite um valor numérico para o montante!");
		  document.jurocomposto.montant.focus();
		  document.jurocomposto.montant.select();  
	  return false;
	}
	  if (isNaN(capit)) { alert("Digite um valor numérico para o capital!");
		  document.jurocomposto.capit.focus();
		  document.jurocomposto.capit.select();  
	  return false;
	}
	  if (isNaN(tempo) ) { alert("Digite um valor numérico para o tempo!");
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
   
	  document.getElementById('resposta').innerHTML = "<hr> O valor da taxa (i) é: <br>  M = C × (1 + i)<span class=\'exp\'>t</span>  <br>  "+montant+" = "+capit+" × (1 + i)<span class=\'exp\'>"+tempo+" </span> <br> <table id='fracao'><tbody><tr><td style='border-bottom:solid 1px'> "+montant+" </td><td rowspan='2'> &nbsp;=&nbsp; (1 + i)<span class=\'exp\'>"+tempo+" </span> </td></tr><tr><td> "+capit+" </td> </tr></tbody></table>   "+result3+" = (1 + i)<span class=\'exp\'>"+tempo+" </span> <br><br>  <span class=\'exp\'>"+tempo+"</span>√<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px;'>"+result3+"</a1> &nbsp;=&nbsp;   <span class=\'exp\'>"+tempo+"</span>√<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.1px;'>(1 + i)<span class=\'exp\'>"+tempo+" </span></a1>  <br>  "+result5+" = 1 + i <br>   "+result5+" - 1 =  i <br>    "+result6+" =  i <br>    i =  "+result6+" <br> ou  <br>  i =  "+result6+" × 100 = "+result7+"% <br><br>     Logo, a taxa (i) é: <br> i = <a1 style='color: #FF0000'>"+result7+"%</a1>   <hr><h1 class='logomarca'> JPP </h1> ";
  
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
	  
	  if (isNaN(montant) ) { alert("Digite um valor numérico para o montante!");
		  document.jurocomposto.montant.focus();
		  document.jurocomposto.montant.select();  
	  return false;
	}
	  if (isNaN(capit)) { alert("Digite um valor numérico para o capital!");
		  document.jurocomposto.capit.focus();
		  document.jurocomposto.capit.select();  
	  return false;
	}
	  if (isNaN(taxa) ) { alert("Digite um valor numérico para o taxa!");
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
   
	   document.getElementById('resposta').innerHTML = "<hr> O valor do tempo (t) é: <br>  M = C × (1 + i)<span class=\'exp\'>t</span>  <br>  "+montant+" = "+capit+" × (1 + "+result2+")<span class=\'exp\'>t</span> <br>  <table id='fracao'><tbody><tr><td style='border-bottom:solid 1px'> "+montant+" </td><td rowspan='2'> &nbsp;=&nbsp; (1 + "+result2+")<span class=\'exp\'>t</span> </td></tr><tr><td> "+capit+" </td> </tr></tbody></table>   "+result3+" = "+result4+"<span class=\'exp\'>t</span> <br> Agora, aplicando o log em ambos lados da equação: <br>   log("+result3+") = log("+result4+"<span class=\'exp\'>t</span>) <br>   log("+result3+") = t × log("+result4+")  <table id='fracao'><tbody><tr> <td rowspan='2'>t &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1px'>log("+result3+")</td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1px'>"+result5+"</td></tr> <tr> <td>log("+result4+")</td><td>"+result6+"</td> </tr></tbody></table>    t =  "+result7+"  <br> Logo, o tempo (t) é: <br> t = <a1 style='color: #FF0000'>"+result7+" u.t</a1>   <hr><h1 class='logomarca'> JPP </h1> ";
  
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
	  alert("Escolha uma opção para Calcular!");
	 } 	
	  
	var a = document.forms["porcentagem"]["porcentagem_type"].value;
	
	/** ***********************  Valor fornecendo a porcentagem    ************************  **/  
	if (a === "valor_1") { 
	  var valor1 = eval(document.porcentagem.valor1.value.replace(",",".").replace(/ /g,""));
	  var taxa = eval(document.porcentagem.taxa.value.replace(",",".").replace(/ /g,"")); 
	  
	  if (isNaN(valor1) ) { alert("Digite um valor numérico!");
		  document.porcentagem.valor1.focus();
		  document.porcentagem.valor1.select();  
	  return false;
	}
	  if (isNaN(taxa)) { alert("Digite um valor numérico para a taxa!");
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
  
	  document.getElementById('resposta').innerHTML = " <hr> Quanto é <a1 style='color: #FF0000'>"+taxa+"%</a1> de <a1 style='color: #FF0000'>"+valor1+"</a1>? <br><br>  Observe que: "+taxa+" ÷ 100 = "+result1+" <br> Logo, <br>&emsp;  "+valor1+" × "+result1+" = "+result2+" <br>   Portanto, o valor é: <br> &emsp;  <a1 style='color: #FF0000'> "+result2+"</a1>   <hr><h1 class='logomarca'> JPP </h1> ";
  
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
	  
	  if (isNaN(valor1) ) { alert("Digite um valor numérico!");
		  document.porcentagem.valor1.focus();
		  document.porcentagem.valor1.select();  
	  return false;
	}
	  if (isNaN(valor2)) { alert("Digite um valor numérico!");
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
   
	  document.getElementById('resposta').innerHTML = "<hr>O valor <a1 style='color: #FF0000'>"+valor1+"</a1> corresponde a qual porcentagem de <a1 style='color: #FF0000'>"+valor2+"</a1>?  <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> "+valor1+" </td><td rowspan='2'> &nbsp; = &nbsp; "+result1+" </td></tr><tr><td> "+valor2+" </td> </tr></tbody></table>   <br> Logo,<br>&emsp;  "+result1+" × 100 =  "+result2+" <br> Portanto, o valor é de: <br>&emsp;    <a1 style='color: #FF0000'> "+result2+" %</a1> <hr>  <h1 class='logomarca'> JPP </h1> ";
  
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
	  
	  if (isNaN(valor1)) { alert("Digite um valor numérico!");
		  document.porcentagem.valor1.focus();
		  document.porcentagem.valor1.select();  
	  return false;
	}
	  if (isNaN(taxa)) { alert("Digite um valor numérico!");
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
   
	  document.getElementById('resposta').innerHTML = "<hr>Tenho <a1 style='color: #FF0000'>"+valor1+"</a1> e quero reajustar <a1 style='color: #FF0000'>"+taxa+"%</a1>. Qual é o resultado? <br> Observe que: <br>&emsp; "+taxa+" ÷ 100 = "+result1+" <br> Portanto, basta multiplicar por: <br>&emsp; = 1 + "+result1+" = "+result2+" <br>   Logo,<br>&emsp;  "+valor1+" × "+result2+" =  "+result3+" <br> Portanto, o valor é: <br>&emsp;    <a1 style='color: #FF0000'> "+result3+" </a1>   <hr><h1 class='logomarca'> JPP </h1> ";
  
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
	  
	  if (isNaN(valor1) ) { alert("Digite um valor numérico!");
		  document.porcentagem.valor1.focus();
		  document.porcentagem.valor1.select();  
	  return false;
	}
	  if (isNaN(taxa)) { alert("Digite um valor numérico!");
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
   
	  document.getElementById('resposta').innerHTML = "<hr>Tenho <a1 style='color: #FF0000'>"+valor1+"</a1> e quero descontar <a1 style='color: #FF0000'>"+taxa+"%</a1>. Qual é o resultado? <br> Observe que:<br>&emsp; 100% − "+taxa+"% = "+result1+"% <br> Logo, <br> &emsp; "+result1+"% ÷ 100 = "+result2+" <br>  Portanto, basta multiplicar por: "+result2+" <br>     Logo,<br>&emsp;  "+valor1+" × "+result2+" =  "+result3+" <br> Portanto, o valor é: <br>&emsp;    <a1 style='color: #FF0000'> "+result3+" </a1>  <hr> <h1 class='logomarca'> JPP </h1> ";
  
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
	  
	  if (isNaN(valor1) || (valor1 < valor2) ) { alert("Digite um valor numérico e/ou o valor 1 deve ser menor do que valor 2!!");
		  document.porcentagem.valor1.focus();
		  document.porcentagem.valor1.select();  
	  return false;
	}
	  if (isNaN(valor2)) { alert("Digite um valor numérico!");
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
   
	   document.getElementById('resposta').innerHTML = "<hr>Tenho <a1 style='color: #FF0000'>"+valor1+"</a1> e diminuiu para <a1 style='color: #FF0000'>"+valor2+"</a1>. Qual foi a diminuição percentual? <br> Observe que:<br>&emsp; "+valor1+" − "+valor2+" = "+result1+" <br> Como <br> &emsp; "+result1+" ÷ "+valor1+" = "+result2+" <br> Portanto, basta multiplicar por 100: <br> &emsp; "+result2+" × 100 = "+result3+" <br> Portanto, o valor é: <br>&emsp; <a1 style='color: #FF0000'> "+result3+"% </a1>  <hr><h1 class='logomarca'> JPP </h1> ";
  
	  document.porcentagem.valor1.focus();
	  document.porcentagem.valor1.select(); 
	  return false;	  
	  } 
	   catch(e) {alert(e)}
	} 	
   }
  
  
   /** =============================  Área do Triângulo: Determinante (G.A).  ============================= **/
  function calcularAreaTrianguloDeterminante() {
   var x1 = parseFloat(document.areas.campoX1.value.replace(",", "."));
   var y1 = parseFloat(document.areas.campoY1.value.replace(",", ".")); 
   var x2 = parseFloat(document.areas.campoX2.value.replace(",", ".")); 
   var y2 = parseFloat(document.areas.campoY2.value.replace(",", "."));
   var x3 = parseFloat(document.areas.campoX3.value.replace(",", ".")); 
   var y3 = parseFloat(document.areas.campoY3.value.replace(",", ".")); 
   
   if (isNaN(x1) || isNaN(y1) || isNaN(x2)  || isNaN(y2)  || isNaN(x3)  || isNaN(y3)) { alert("Preencher todos os campos e/ou informar apenas números!");
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
   
	  document.getElementById('resposta').innerHTML = "<hr>   <table style='border-left: solid 1.5px; width:150px;  '> <tbody> <tr>  <td><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td>  <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> <td>&ensp;1</td> <td style='border-left: solid 1.5px'> <a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> </tr>  <tr> <td><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>A</a1></td> <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td> <td>&ensp;1</td> <td style='border-left: solid 1.5px'><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td>  <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>B</a1></td>   </tr> <tr> <td><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td>  <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td>  <td>&ensp;1</td> <td style='border-left: solid 1.5px'><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>x</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td> <td>&ensp;<a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>y</a1><a1 style='font-size: 10px; font-family: times new roman;'>C</a1></td> </tr>  </tbody> </table> <br>  <div style='line-height: 22px;'>  O determinante é: <br>  D = xA∙yB + yA∙xC + xB∙yC - <br> &emsp;&emsp; - xC∙yB - yC∙xA - xB∙yA = <a1 style='color: #FF0000'> "+Determinante+"</a1><br><br> A área do triângulo é:<br>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> Área &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> 1 ∙ |D| </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> |"+Determinante+"| </td><td rowspan='2'> &nbsp;=&nbsp; <a1 style='color: #FF0000'> "+areatdeter+" </a1></td></tr> <tr> <td> 2 </td><td> 2 </td> </tr></tbody></table> <hr><h1 class='logomarca'> JPP </h1> </div>" ;
  
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
  /** **************************  AREA (A = Pi ∙ a ∙ b)  *************************/  
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
	  
  /** ********************  Perímetro (P = 2Pi (√(a² + b²)/2))   ******************/  
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
	  
  /************   Equação (eixo maior horizontal) ((x-xo)²/a² + (y-yo)²/b² = 1)   ***************/  
   if (a === "equaçãoHoriz") {
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
  
  /** ************  Semidistância focal (c = √(a² - b²))   ***************/  
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
	  
  /** ************  Excentricidade (e = c/a = √(a² - b²) / a)   ***************/  
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
	  
  /** ************  Vértice (A1 = (xo - a, yo))   ***************/  
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
	  
  /** ************  Vértice (A2 = (xo + a, yo))   ***************/  
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
  
  /** ************  Vértice (B1 = (xo, yo - b))   ***************/  
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
	  
  /** ************  Vértice (B1 = (xo, yo + b))   ***************/  
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
	  
  /********** Equação (eixo maior vertical) ((x-xo)²/a² + (y-yo)²/b² = 1) ***************/  
   if (a === "equaçãoVert") {
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
	   
  /** ************  Semidistância focal (c = √(b² - a²))   ***************/  
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
	  
  /** ************  Excentricidade (e = c/a = √(b² - a²) / b)   ***************/  
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
	  
  /**************  Vértice (A1 = (xo - a, yo))   ***************/  
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
  
  /**************  Vértice (A2 = (xo + a, yo))   ***************/  
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
  
  /** ************  Vértice (B1 = (xo, yo - a))   ***************/  
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
	  
  /** ************  Vértice (B2 = (xo, yo + a))   ***************/  
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
	  alert("Escolha uma opção para Calcular!");
	 } 	
	  
	var a = document.forms["Elipse"]["Elipse_type"].value;
  /************************  Cálculdo da área: A = (B.b).h/2  *************************/  
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
	
	 document.getElementById('resposta').innerHTML ="  <hr> <div style='line-height: 16px;'>A área da Elipse é: <br> Área = π ∙ a ∙ b <br>  Área = π ∙ "+semieixo_maior+" ∙ "+semieixo_menor+" <br> Área = <a1 style='color: #FF0000'> "+areaElipse.toFixed(2)+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u²</a1>  <hr><h1 class='logomarca'> JPP </h1></div>" 
	 
	  document.Elipse.semieixo_maior.focus();
	  document.Elipse.semieixo_maior.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
	/******************  perímetro da elipse: P =  = 2π √(a² + b²)/2   ******************/  
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
  
	 document.getElementById('resposta').innerHTML ="<hr><div style='line-height: 16px;'>O perímetro da Elipse é: <br><br>  P = 2π √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>(a² + b²)/2</a1> <br><br>  P = 2π √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>[("+semieixo_maior+")² + ("+semieixo_menor+")²]/2</a1> <br><br>  P = 2π √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>["+aa+" + "+bb+"]/2</a1> <br><br> P = 2π √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+soma_ab+"/2</a1> <br><br>  P = 2π √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+h.toFixed(2)+"</a1> <br>  P ≈ 2π ∙ "+k.toFixed(2)+" <br>  P ≈ <a1 style='color: #FF0000'> "+y.toFixed(2)+"π</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u.m</a1> <br> &emsp;ou <br> P ≈ <a1 style='color: #FF0000'> "+Peri_Elipse.toFixed(2)+"</a1>" +"&nbsp <a1 style='font-size: 16px; font-family: times new roman;font-style:italic;'>u.m</a1>  <hr><h1 class='logomarca'> JPP </h1></div>" 
	  document.Elipse.semieixo_maior.focus();
	  document.Elipse.semieixo_maior.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** ******************   Equação: (x - xo)²/a² + (y - yo)²/b² = 1)  *********************/  
	if (a === "equaçãoHoriz") { 
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
	  document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div> <hr><div style='line-height: 16px;'>Como temos o semieixo maior a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1>, o semieixo menor b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equação da elipse com eixo maior na horizontal é: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> a² </td><td> b² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"² </td><td> "+semieixo_menor+"² </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> x² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> y² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>     <hr><h1 class='logomarca'> JPP </h1></div>" 
	  document.Elipse.semieixo_maior.focus();
	  document.Elipse.semieixo_maior.select();     
	  document.getElementById('resposta').style.display = "block";
	  return false;		  
		 }
		 
   if ((x_o < 0) && (y_o < 0)) {
	  document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1>, o semieixo menor b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equação da elipse com eixo maior na horizontal é: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> a² </td><td> b² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - ("+x_o+"))² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - ("+y_o+"))² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"² </td><td> "+semieixo_menor+"² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x + "+k+")² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y + "+h+")² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>    <hr><h1 class='logomarca'> JPP </h1></div>" 
	  document.Elipse.semieixo_maior.focus();
	  document.Elipse.semieixo_maior.select();     
	  document.getElementById('resposta').style.display = "block";
	  return false;		  
		 }
		 
   if ((x_o < 0) && (y_o > 0)) {
	  document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1>, o semieixo menor b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equação da elipse com eixo maior na horizontal é: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> a² </td><td> b² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - ("+x_o+"))² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"² </td><td> "+semieixo_menor+"² </td> </tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x + "+k+")² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>    <hr><h1 class='logomarca'> JPP </h1></div>" 
	  document.Elipse.semieixo_maior.focus();
	  document.Elipse.semieixo_maior.select();     
	  document.getElementById('resposta').style.display = "block";
	  return false;		  
		 }	   
  
   if ((x_o > 0) && (y_o < 0)) {
	  document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1>, o semieixo menor b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equação da elipse com eixo maior na horizontal é: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> a² </td><td> b² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - ("+y_o+"))² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"² </td><td> "+semieixo_menor+"² </td> </tr></tbody></table>        <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y + "+h+")² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>    <hr><h1 class='logomarca'> JPP </h1></div>" 
	  document.Elipse.semieixo_maior.focus();
	  document.Elipse.semieixo_maior.select();     
	  document.getElementById('resposta').style.display = "block";
	  return false;		  
		 }		   
		 
   if ((x_o > 0) && (y_o == 0)) {
	  document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1>, o semieixo menor b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equação da elipse com eixo maior na horizontal é: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> a² </td><td> b² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"² </td><td> "+semieixo_menor+"² </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> y² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>    <hr><h1 class='logomarca'> JPP </h1></div>" 
	  document.Elipse.semieixo_maior.focus();
	  document.Elipse.semieixo_maior.select();     
	  document.getElementById('resposta').style.display = "block";
	  return false;		  
		 }	   
		 
   if ((x_o < 0) && (y_o == 0)) {
	  document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1>, o semieixo menor b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equação da elipse com eixo maior na horizontal é: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> a² </td><td> b² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - ("+x_o+"))² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"² </td><td> "+semieixo_menor+"² </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x + "+k+")² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> y² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>    <hr><h1 class='logomarca'> JPP </h1></div>" 
	  document.Elipse.semieixo_maior.focus();
	  document.Elipse.semieixo_maior.select();     
	  document.getElementById('resposta').style.display = "block";
	  return false;		  
		 }
  
   if ((x_o == 0) && (y_o > 0)) {
	  document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1>, o semieixo menor b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equação da elipse com eixo maior na horizontal é: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> a² </td><td> b² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"² </td><td> "+semieixo_menor+"² </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> x² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>    <hr><h1 class='logomarca'> JPP </h1></div>" 
	  document.Elipse.semieixo_maior.focus();
	  document.Elipse.semieixo_maior.select();     
	  document.getElementById('resposta').style.display = "block";
	  return false;		  
		 }
		 
   if ((x_o == 0) && (y_o < 0)) {
	  document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1>, o semieixo menor b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equação da elipse com eixo maior na horizontal é: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> a² </td><td> b² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - ("+y_o+"))² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"² </td><td> "+semieixo_menor+"² </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> x² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y + "+h+")² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>    <hr><h1 class='logomarca'> JPP </h1></div>" 
	  document.Elipse.semieixo_maior.focus();
	  document.Elipse.semieixo_maior.select();     
	  document.getElementById('resposta').style.display = "block";
	  return false;		  
		 }	   
		 
	  else {
	 document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1>, o semieixo menor b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equação da elipse com eixo maior na horizontal é: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> a² </td><td> b² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"² </td><td> "+semieixo_menor+"² </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>      <hr><h1 class='logomarca'> JPP </h1></div>" 
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
  
	 document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>O foco 1 (F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1>) da elipse é: <br> F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> (x<a1 style='font-family: times new roman;font-size: 11px;'>o</a1> - c,&nbsp; y<a1 style='font-family: times new roman;font-size: 11px;'>o</a1>)  <br><br>    F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> (x<a1 style='font-family: times new roman;font-size: 11px;'>o</a1> - √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>a² - b²</a1>,&nbsp; y<a1 style='font-family: times new roman;font-size: 11px;'>o</a1>) <br><br>  F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> ("+x_o+" - √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>("+semieixo_maior+")² - ("+semieixo_menor+")²</a1>, "+y_o+")  <br><br>  F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> ("+x_o+" - √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+k+" - "+h+"</a1>, "+y_o+")  <br><br>   F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> ("+x_o+" - √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+aa+"</a1>, "+y_o+")  <br> F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> ("+x_o+" - "+bb+", "+y_o+") <br> F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> (<a1 style='color: #FF0000'> "+cc+"</a1>, <a1 style='color: #FF0000'>"+y_o+"</a1>)    <hr><h1 class='logomarca'> JPP </h1></div>" 
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
  
	 document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>O foco 2 (F<a1 style='font-family: times new roman;font-size: 11px;'>2</a1>) da elipse é: <br> F<a1 style='font-family: times new roman;font-size: 11px;'>2</a1> (x<a1 style='font-family: times new roman;font-size: 11px;'>o</a1> + c,&nbsp; y<a1 style='font-family: times new roman;font-size: 11px;'>o</a1>)  <br><br>    F<a1 style='font-family: times new roman;font-size: 11px;'>2</a1> (x<a1 style='font-family: times new roman;font-size: 11px;'>o</a1> + √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>a² - b²</a1>,&nbsp; y<a1 style='font-family: times new roman;font-size: 11px;'>o</a1>) <br><br>  F<a1 style='font-family: times new roman;font-size: 11px;'>2</a1> ("+x_o+" + √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>("+semieixo_maior+")² - ("+semieixo_menor+")²</a1>, "+y_o+")  <br><br>  F<a1 style='font-family: times new roman;font-size: 11px;'>2</a1> ("+x_o+" + √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+k+" - "+h+"</a1>, "+y_o+")  <br><br>   F<a1 style='font-family: times new roman;font-size: 11px;'>2</a1> ("+x_o+" + √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+aa+"</a1>, "+y_o+")  <br> F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> ("+x_o+" + "+bb+", "+y_o+") <br> F<a1 style='font-family: times new roman;font-size: 11px;'>2</a1> (<a1 style='color: #FF0000'> "+cc+"</a1>, <a1 style='color: #FF0000'>"+y_o+"</a1>)    <hr><h1 class='logomarca'> JPP </h1></div>" 
	  document.Elipse.semieixo_maior.focus();
	  document.Elipse.semieixo_maior.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** ********************   Semidistância focal (c = √(a² - b²))  *********************/  
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
  
	 document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>O comprimentro da semidistância focal (c) da elipse é:<br><br>  c = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>("+semieixo_maior+")² - ("+semieixo_menor+")²</a1>  <br><br>  c = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+k+" - "+h+"</a1>  <br><br>  c = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+aa+"</a1> <br>  c = <a1 style='color: #FF0000'> "+bb+"</a1> u.c   <hr><h1 class='logomarca'> JPP </h1></div>" 
	  document.Elipse.semieixo_maior.focus();
	  document.Elipse.semieixo_maior.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
   /** ********************   excentricidade (e = c/a = √(a² - b²)/a)  *********************/  
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
  
	 document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>Excentricidade da elipse á a razão entre a semi-distância focal e o semieixo maior. <br> Também, é a medida de quanto a elipse se afasta de um círculo. <br>Sendo assim, a excentricidade (e) da elipse é:<br><br>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> e &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> c </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>a² - b²</a1> </td></tr> <tr> <td> a </td><td> a </td> </tr></tbody></table> <br>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> e &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>("+semieixo_maior+")² - ("+semieixo_menor+")²</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+k+" - "+h+"</a1> </td></tr> <tr> <td> "+semieixo_maior+" </td><td> "+semieixo_maior+" </td> </tr></tbody></table> <br>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> e &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+aa+"</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+bb+"</td></tr> <tr> <td> "+semieixo_maior+" </td><td> "+semieixo_maior+" </td> </tr></tbody></table>  <br>   c = <a1 style='color: #FF0000'> "+cc+"</a1>   <hr><h1 class='logomarca'> JPP </h1></div>" 
	  document.Elipse.semieixo_maior.focus();
	  document.Elipse.semieixo_maior.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /**********************   Vértice 1 (A1 = (xo - a, yo)  *********************/  
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
  
	 document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>As coordenadas do vértice (A<a1 style='font-size: 10px; font-family: times new roman;'>1</a1>) é:<br> A<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = (x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1> - a,&ensp; y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)<br> A<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = ("+x_o+" - "+semieixo_maior+",&ensp; "+y_o+")<br> A<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = (<a1 style='color: #FF0000'> "+k+"</a1>,&ensp; <a1 style='color: #FF0000'> "+y_o+"</a1>)<br>  <hr><h1 class='logomarca'> JPP </h1></div>" 
	  document.Elipse.semieixo_maior.focus();
	  document.Elipse.semieixo_maior.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** ********************   Vértice 2 (A1 = (xo + a, yo)  *********************/  
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
  
	 document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>As coordenadas do vértice (A<a1 style='font-size: 10px; font-family: times new roman;'>2</a1>) é:<br> A<a1 style='font-size: 10px; font-family: times new roman;'>2</a1> = (x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1> - a,&ensp; y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)<br> A<a1 style='font-size: 10px; font-family: times new roman;'>2</a1> = ("+x_o+" + "+semieixo_maior+",&ensp; "+y_o+")<br>  A<a1 style='font-size: 10px; font-family: times new roman;'>2</a1> = (<a1 style='color: #FF0000'> "+k+"</a1>,&ensp; <a1 style='color: #FF0000'> "+y_o+"</a1>)<br>  <hr><h1 class='logomarca'> JPP </h1></div>" 
	  document.Elipse.semieixo_maior.focus();
	  document.Elipse.semieixo_maior.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /*********************   Vértice (B1 = (xo, yo - a)  *********************/  
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
  
	 document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>As coordenadas do vértice (B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1>) é:<br> B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = (x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>,&ensp; y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1> - b)<br> B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = ("+x_o+",&ensp; "+y_o+" - "+semieixo_menor+")<br> B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = (<a1 style='color: #FF0000'> "+x_o+"</a1>,&ensp; <a1 style='color: #FF0000'> "+k+"</a1>)<br> <hr><h1 class='logomarca'> JPP </h1></div>" 
	  document.Elipse.semieixo_menor.focus();
	  document.Elipse.semieixo_menor.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
  
  /** ********************   Vértice (B2 = (xo, yo + a)  *********************/  
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
  
	 document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseHorin.png'></div><hr><div style='line-height: 16px;'>As coordenadas do vértice (B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1>) é:<br> B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = (x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>,&ensp; y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1> + b)<br> B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = ("+x_o+",&ensp; "+y_o+" + "+semieixo_menor+")<br>   B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = (<a1 style='color: #FF0000'> "+x_o+"</a1>,&ensp; <a1 style='color: #FF0000'> "+k+"</a1>)<br>  <hr><h1 class='logomarca'> JPP </h1></div>" 
	  document.Elipse.semieixo_menor.focus();
	  document.Elipse.semieixo_menor.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /** ******************   Equação: (x - xo)²/a² + (y - yo)²/b² = 1)  *********************/  
	if (a === "equaçãoVert") { 
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
	  document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1>, o semieixo menor a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equação da elipse com eixo maior na vertical é: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> a² </td><td> b² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"² </td><td> "+semieixo_menor+"² </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> x² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> y² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>     <hr><h1 class='logomarca'> JPP </h1></div>" 
	  document.Elipse.semieixo_maior.focus();
	  document.Elipse.semieixo_maior.select();     
	  document.getElementById('resposta').style.display = "block";
	  return false;		  
		 }
		 
   if ((x_o < 0) && (y_o < 0)) {
	  document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1>, o semieixo menor a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equação da elipse com eixo maior na vertical é: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> a² </td><td> b² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - ("+x_o+"))² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - ("+y_o+"))² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"² </td><td> "+semieixo_menor+"² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x + "+k+")² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y + "+h+")² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>    <hr><h1 class='logomarca'> JPP </h1></div>" 
	  document.Elipse.semieixo_maior.focus();
	  document.Elipse.semieixo_maior.select();     
	  document.getElementById('resposta').style.display = "block";
	  return false;		  
		 }
		 
   if ((x_o < 0) && (y_o > 0)) {
	  document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1>, o semieixo menor a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equação da elipse com eixo maior na vertical é: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> a² </td><td> b² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - ("+x_o+"))² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"² </td><td> "+semieixo_menor+"² </td> </tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x + "+k+")² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>    <hr><h1 class='logomarca'> JPP </h1></div>" 
	  document.Elipse.semieixo_maior.focus();
	  document.Elipse.semieixo_maior.select();     
	  document.getElementById('resposta').style.display = "block";
	  return false;		  
		 }	   
  
   if ((x_o > 0) && (y_o < 0)) {
	  document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1>, o semieixo menor a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equação da elipse com eixo maior na vertical é: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td> <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> a² </td><td> b² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - ("+y_o+"))² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"² </td><td> "+semieixo_menor+"² </td> </tr></tbody></table>        <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y + "+h+")² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>    <hr><h1 class='logomarca'> JPP </h1></div>" 
	  document.Elipse.semieixo_maior.focus();
	  document.Elipse.semieixo_maior.select();     
	  document.getElementById('resposta').style.display = "block";
	  return false;		  
		 }		   
		 
   if ((x_o > 0) && (y_o == 0)) {
	  document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1>, o semieixo menor a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equação da elipse com eixo maior na vertical é: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> a² </td><td> b² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"² </td><td> "+semieixo_menor+"² </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> y² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>    <hr><h1 class='logomarca'> JPP </h1></div>" 
	  document.Elipse.semieixo_maior.focus();
	  document.Elipse.semieixo_maior.select();     
	  document.getElementById('resposta').style.display = "block";
	  return false;		  
		 }	   
		 
   if ((x_o < 0) && (y_o == 0)) {
	  document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1>, o semieixo menor a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equação da elipse com eixo maior na vertical é: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> a² </td><td> b² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - ("+x_o+"))² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"² </td><td> "+semieixo_menor+"² </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x + "+k+")² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> y² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>    <hr><h1 class='logomarca'> JPP </h1></div>" 
	  document.Elipse.semieixo_maior.focus();
	  document.Elipse.semieixo_maior.select();     
	  document.getElementById('resposta').style.display = "block";
	  return false;		  
		 }
  
   if ((x_o == 0) && (y_o > 0)) {
	  document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1>, o semieixo menor a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equação da elipse com eixo maior na vertical é: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> a² </td><td> b² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"² </td><td> "+semieixo_menor+"² </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> x² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>    <hr><h1 class='logomarca'> JPP </h1></div>" 
	  document.Elipse.semieixo_maior.focus();
	  document.Elipse.semieixo_maior.select();     
	  document.getElementById('resposta').style.display = "block";
	  return false;		  
		 }
		 
   if ((x_o == 0) && (y_o < 0)) {
	  document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1>, o semieixo menor a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equação da elipse com eixo maior na vertical é: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> a² </td><td> b² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - ("+y_o+"))² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"² </td><td> "+semieixo_menor+"² </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> x² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y + "+h+")² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>    <hr><h1 class='logomarca'> JPP </h1></div>" 
	  document.Elipse.semieixo_maior.focus();
	  document.Elipse.semieixo_maior.select();     
	  document.getElementById('resposta').style.display = "block";
	  return false;		  
		 }	   
		 
	  else {
	 document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>Como temos o semieixo maior b = <a1 style='color: #FF0000'> "+semieixo_menor+"</a1>, o semieixo menor a = <a1 style='color: #FF0000'> "+semieixo_maior+"</a1> e as coordenadas do centro = (<a1 style='color: #FF0000'> "+x_o+"</a1>, <a1 style='color: #FF0000'> "+y_o+"</a1>). Logo, a equação da elipse com eixo maior na vertical é: <br> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>)² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> a² </td><td> b² </td> </tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+semieixo_maior+"² </td><td> "+semieixo_menor+"² </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'></td>  <td style='border-bottom:solid 1.3px'> (x - "+x_o+")² </td>  <td rowspan='2'> &nbsp;+&nbsp; </td> <td style='border-bottom:solid 1.3px'> (y - "+y_o+")² </td><td rowspan='2'> &nbsp;=&nbsp;  1 </td></tr> <tr> <td> "+aa+" </td><td> "+bb+" </td> </tr></tbody></table>      <hr><h1 class='logomarca'> JPP </h1></div>" 
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
  
	 document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>O foco 1 (F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1>) da elipse com eixo maior na vertical é: <br> F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> (x<a1 style='font-family: times new roman;font-size: 11px;'>o</a1>,&nbsp; y<a1 style='font-family: times new roman;font-size: 11px;'>o</a1> - c) <br><br> F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> (x<a1 style='font-family: times new roman;font-size: 11px;'>o</a1>,&nbsp; y<a1 style='font-family: times new roman;font-size: 11px;'>o</a1> - √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>b² - a²</a1>) <br><br> F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> ("+x_o+",&nbsp; "+y_o+" - √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>("+semieixo_menor+")² - ("+semieixo_maior+")²</a1>)<br><br> F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> ("+x_o+",&nbsp; "+y_o+" - √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+h+" - "+k+"</a1>) <br><br>F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> ("+x_o+",&nbsp; "+y_o+" - √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+aa+"</a1>) <br> F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> ("+x_o+",&nbsp; "+y_o+" - "+bb+") <br>              F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> (<a1 style='color: #FF0000'>"+x_o+"</a1>,&nbsp; <a1 style='color: #FF0000'>"+cc+"</a1>)    <hr><h1 class='logomarca'> JPP </h1></div>" 
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
  
	 document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>O foco 1 (F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1>) da elipse com eixo maior na vertical é: <br> F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> (x<a1 style='font-family: times new roman;font-size: 11px;'>o</a1>,&nbsp; y<a1 style='font-family: times new roman;font-size: 11px;'>o</a1> + c) <br><br> F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> (x<a1 style='font-family: times new roman;font-size: 11px;'>o</a1>,&nbsp; y<a1 style='font-family: times new roman;font-size: 11px;'>o</a1> + √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>b² - a²</a1>) <br><br> F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> ("+x_o+",&nbsp; "+y_o+" + √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>("+semieixo_menor+")² - ("+semieixo_maior+")²</a1>)<br><br> F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> ("+x_o+",&nbsp; "+y_o+" + √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+h+" - "+k+"</a1>) <br><br>F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> ("+x_o+",&nbsp; "+y_o+" + √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+aa+"</a1>) <br> F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> ("+x_o+",&nbsp; "+y_o+" + "+bb+") <br>              F<a1 style='font-family: times new roman;font-size: 11px;'>1</a1> (<a1 style='color: #FF0000'>"+x_o+"</a1>,&nbsp; <a1 style='color: #FF0000'>"+cc+"</a1>)    <hr><h1 class='logomarca'> JPP </h1></div>" 
	  document.Elipse.semieixo_maior.focus();
	  document.Elipse.semieixo_maior.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /***************** eixo maior na vertical: Semidistância focal (c = √(b² - a²))  *****************/  
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
  
	 document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>O comprimentro da semidistância focal (c) da elipse com eixo maior na vertical é:<br><br>  c = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>("+semieixo_menor+")² - ("+semieixo_maior+")²</a1>  <br><br>  c = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+h+" - "+k+"</a1>  <br><br>  c = √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+aa+"</a1> <br>  c = <a1 style='color: #FF0000'> "+bb+"</a1> u.c   <hr><h1 class='logomarca'> JPP </h1></div>" 
	  document.Elipse.semieixo_maior.focus();
	  document.Elipse.semieixo_maior.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /****************** Eixo maior na vertical - excentricidade (e = c/a = √(b² - a²)/b)  ******************/  
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
  
	 document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>Excentricidade da elipse á a razão entre a semi-distância focal e o semieixo maior. <br> Também, é a medida de quanto a elipse se afasta de um círculo. <br>Sendo assim, a excentricidade (e) da elipse com eixo maior na vertical é:<br><br>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> e &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> c </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>b² - a²</a1> </td></tr> <tr> <td> b </td><td> b </td> </tr></tbody></table> <br>  <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> e &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>("+semieixo_menor+")² - ("+semieixo_maior+")²</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+h+" - "+k+"</a1> </td></tr> <tr> <td> "+semieixo_menor+" </td><td> "+semieixo_menor+" </td> </tr></tbody></table> <br>          <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> e &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> √<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+aa+"</a1> </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+bb+"</td></tr> <tr> <td> "+semieixo_maior+" </td><td> "+semieixo_maior+" </td> </tr></tbody></table>  <br>   c = <a1 style='color: #FF0000'> "+cc+"</a1>   <hr><h1 class='logomarca'> JPP </h1></div>" 
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
  
	 document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>As coordenadas do vértice (A<a1 style='font-size: 10px; font-family: times new roman;'>1</a1>) com eixo maior na vertical é:<br> A<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = (x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>,&ensp; y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1> - b)<br>  A<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = ("+x_o+",&ensp; "+y_o+" - "+semieixo_menor+")<br>         A<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = (<a1 style='color: #FF0000'>"+x_o+"</a1>,&ensp; <a1 style='color: #FF0000'> "+k+"</a1>)<br>  <hr><h1 class='logomarca'> JPP </h1></div>" 
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
  
	 document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>As coordenadas do vértice (A<a1 style='font-size: 10px; font-family: times new roman;'>2</a1>) com eixo maior na vertical é:<br> A<a1 style='font-size: 10px; font-family: times new roman;'>2</a1> = (x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>,&ensp; y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1> + b)<br>  A<a1 style='font-size: 10px; font-family: times new roman;'>2</a1> = ("+x_o+",&ensp; "+y_o+" + "+semieixo_menor+")<br>         A<a1 style='font-size: 10px; font-family: times new roman;'>2</a1> = (<a1 style='color: #FF0000'>"+x_o+"</a1>,&ensp; <a1 style='color: #FF0000'> "+k+"</a1>)<br>  <hr><h1 class='logomarca'> JPP </h1></div>" 
	  document.Elipse.semieixo_menor.focus();
	  document.Elipse.semieixo_menor.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  /*********************   Vértice (B1 = (xo, yo - a)  *********************/  
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
  
	 document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>As coordenadas do vértice (B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1>) da elipse com eixo maior na vertical é:<br> B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = (x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>,&ensp; y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1> - a)<br> B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = ("+x_o+",&ensp; "+y_o+" - "+semieixo_maior+")<br> B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = (<a1 style='color: #FF0000'>"+x_o+"</a1>,&ensp; <a1 style='color: #FF0000'> "+k+"</a1>)<br> <hr><h1 class='logomarca'> JPP </h1></div>" 
	  document.Elipse.semieixo_maior.focus();
	  document.Elipse.semieixo_maior.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  
  
  /*********************   Vértice (B2 = (xo, yo + a)  *********************/  
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
  
	 document.getElementById('resposta').innerHTML ="<hr> <div align='center'><img src='https://blogdoprofwarles.com/Cal/elipseVert.png'></div><hr><div style='line-height: 16px;'>As coordenadas do vértice (B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1>) da elipse com eixo maior na vertical é:<br>    B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = (x<a1 style='font-size: 10px; font-family: times new roman;'>o</a1>,&ensp; y<a1 style='font-size: 10px; font-family: times new roman;'>o</a1> + a)<br> B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = ("+x_o+",&ensp; "+y_o+" + "+semieixo_maior+")<br> B<a1 style='font-size: 10px; font-family: times new roman;'>1</a1> = (<a1 style='color: #FF0000'>"+x_o+"</a1>,&ensp; <a1 style='color: #FF0000'> "+k+"</a1>)<br> <hr><h1 class='logomarca'> JPP </h1></div>" 
	  document.Elipse.semieixo_maior.focus();
	  document.Elipse.semieixo_maior.select();     
	  document.getElementById('resposta').style.display = "block";
  }	
  catch(e) {alert(e)}
  }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  