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
/***###########################################################################**/

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
  
  
/** ******************************   contagem: PermutaÃ§Ã£o simples: (P_(n) = n!   *****************************  **/  
 if (a === "permutaÃ§Ã£osimples") {
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
	
		
/** ******************************   contagem: combinaÃ§Ã£o simples: (C_(n,p) = n!/p!.(n - p)!   *****************************  **/  
 if (a === "combinaÃ§Ã£osimples") {
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
    alert("Escolha uma opÃ§Ã£o para Calcular!");
   } 	
	
  var a = document.forms["contagem"]["contagem_type"].value;
  
 /** ************************************   contagem: Fatorial: = n!    ****************************************  **/   

  if (a === "fatorial") { 
   var elementosn = parseFloat(document.contagem.elementosn.value.replace(",", "."));  
		
 if ((elementosn < 0) || isNaN(elementosn) ) { alert("O valor deve ser um nÃºmero nÃ£o negativo!");
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
						 		resultado+= i+ ' Â· ';
						 	else
						 		resultado+ "=";
						}
			        resultado = resultado.substring(i-2, resultado.length - 2);  // elimina o Ãºltimo ponto							
					}
			 		resultado+=  " = <a1 style='color: #FF0000'>" +f11 ;
		}

      document.getElementById('resposta').innerHTML ="<hr> <div style='line-height: 25px;'> O valor do fatorial <a1 style='color: #FF0000'>"+elementosn.toFixed(0)+"</a1>! Ã©: <br> "+resultado+" </div>  <hr><h1 class='logomarca'> BpW </h1> " 

    document.contagem.elementosn.focus();
	document.contagem.elementosn.select();     
	document.getElementById('resposta').style.display = "block";
}	
catch(e) {alert(e)}
}	

	
/** ************************    contagem: PermutaÃ§Ã£o simples: (P_(n) = n!    ****************************************  **/  
  if (a === "permutaÃ§Ã£osimples") { 
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
 
     document.getElementById('resposta').innerHTML ="<hr> O valor da permutaÃ§Ã£o simples <a1 style='color: #FF0000'>"+elementosn.toFixed(0)+"</a1>! Ã©: <br> <div style='line-height: 16px;'>   P<a1 style='font-size: 10px; font-family: times new roman;'>n</a1> =&nbsp; <a1 style='font-family: times new roman; font-style:italic;'>n</a1>!  <br>     P<a1 style='font-size: 10px; font-family: times new roman;'>"+elementosn.toFixed(0)+"</a1> =&nbsp; <a1 style='font-family: times new roman;  '>"+elementosn.toFixed(0)+"</a1>!  <br> P<a1 style='font-size: 10px; font-family: times new roman;'>"+elementosn.toFixed(0)+"</a1> =&nbsp;  <a1 style='color: #FF0000'> "+f11.toFixed(0)+"</a1>" +"&nbsp  </div>   <hr><h1 class='logomarca'> BpW </h1>" 
   
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
 
     document.getElementById('resposta').innerHTML ="<hr> O Arranjo simples Ã©: <br> <div style='line-height: 16px;'>   <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'>  A<a1 style='font-size: 10px; font-family: times new roman;'>n,p</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1>! </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+elementosn+"! </td></tr> <tr> <td> (<a1 style='font-family: times new roman; font-style:italic;'>n</a1> - <a1 style='font-family: times new roman; font-style:italic;'>p</a1>)! </td><td> ("+elementosn+" - "+elementosp+")! </td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>"+elementosn+","+elementosp+"</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+f11+" </td></tr><tr><td style='text-align:center;'> "+resul2+"! </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> A<a1 style='font-size: 10px; font-family: times new roman;'>"+elementosn+","+elementosp+"</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+f11+" </td></tr><tr><td style='text-align:center;'> "+f911+" </td></tr></tbody></table>    A<a1 style='font-size: 10px; font-family: times new roman;'>"+elementosn+","+elementosp+"</a1> =&nbsp; <a1 style='color: #FF0000'> "+arranjosimples+"</a1>" +"&nbsp    </div><hr><h1 class='logomarca'> BpW </h1>" 
   
    document.contagem.elementosn.focus();
	document.contagem.elementosn.select();     
	document.getElementById('resposta').style.display = "block";
}	
catch(e) {alert(e)}
}

 /** ***************   contagem: combinaÃ§Ã£o simples: (C_(n,p) = n!/p!.(n - p)!    ****************************************  **/  
  if (a === "combinaÃ§Ã£osimples") { 
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
 var combinaÃ§Ã£osimples =  f11 / resul3;
 
 
     document.getElementById('resposta').innerHTML ="<hr> A combinaÃ§Ã£o simples Ã©: <br> <div style='line-height: 17px;'> <table id='fracao'><tbody style='text-align:center;'><tr> <td rowspan='2'> C<a1 style='font-size: 10px; font-family: times new roman;'>n,p</a1> &nbsp;=&nbsp; </td>  <td style='border-bottom:solid 1.3px'> <a1 style='font-family: times new roman; font-style:italic;'>n</a1>! </td>  <td rowspan='2'> &nbsp;=&nbsp; </td> <td style='border-bottom:solid 1.3px'> "+elementosn+"! </td></tr> <tr> <td> <a1 style='font-family: times new roman; font-style:italic;'>p</a1>! âˆ™ (<a1 style='font-family: times new roman; font-style:italic;'>n</a1> - <a1 style='font-family: times new roman; font-style:italic;'>p</a1>)! </td><td>"+elementosp+"! âˆ™ ("+elementosn+" - "+elementosp+")!</td> </tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> C<a1 style='font-size: 10px; font-family: times new roman;'>"+elementosn.toFixed(0)+","+elementosp+"</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+elementosn+"!  </td></tr><tr><td style='text-align:center;'> "+elementosp+"! âˆ™ "+resul2+"! </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> C<a1 style='font-size: 10px; font-family: times new roman;'>"+elementosn+","+elementosp+"</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+f11.toFixed(0)+" </td></tr><tr><td style='text-align:center;'> "+m11+" âˆ™ "+f911+" </td></tr></tbody></table>     <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> C<a1 style='font-size: 10px; font-family: times new roman;'>"+elementosn+","+elementosp+"</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+f11+" </td></tr><tr><td style='text-align:center;'> "+resul3+" </td></tr></tbody></table>    C<a1 style='font-size: 10px; font-family: times new roman;'>"+elementosn+","+elementosp+"</a1> =&nbsp; <a1 style='color: #FF0000'> "+combinaÃ§Ã£osimples+"</a1>" +"&nbsp    </div> <hr> <h1 class='logomarca'> BpW </h1>" 
   
    document.contagem.elementosn.focus();
	document.contagem.elementosn.select();     
	document.getElementById('resposta').style.display = "block";
}	
catch(e) {alert(e)}
}

  }


/***#############################  PROGRESSÃƒO ARITMÃ‰TICA  P.A.  ##############################################      **/

function PA2() {
  var a = document.forms["PA"]["PA_type"].value;
/** ******************************   razÃ£o: (r = an - a_(n-1)   *****************************  **/  
 if (a === "razÃ£oPA") {
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

/** ******************************   Ãšltimo termo a_n: (a_n = a_1 + (n - 1).r)   *****************************  **/  
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
	
	
/** ******************************   Gerar sequÃªncia da P.A.   *****************************  **/  
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
	
/** ******************************   razÃ£o: (r = a_n - a_1)/(n-1))   *****************************  **/  
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

/** ******************************   nÃºmero de terrmos n: (n = (a_n - a_1)/r) + 1   *****************************  **/  
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
	
/** ******************************  NÃºmero de termos n em funÃ§Ã£o da soma: (S_n = (a_n - a_1)*n/   *****************************  **/  
 if (a === "nÃºmerotermosSoma") {
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

/** ****************************** Ãšltimo termo a_n em funÃ§Ã£o da soma: (S_n = (a_n - a_1)*n/   *****************************  **/  
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
	
/** ****************************** Primeiro termo a_1 em funÃ§Ã£o da soma: (S_n = (a_n - a_1)*n/   *****************************  **/  
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

        if (isNaN(a_1) ) {alert("Digite o primeiro termo da progressÃ£o aritmÃ©tica (P.A.)!");
          document.PA.a_1.focus();
          document.PA.a_1.select();
          return false;         
        }
        if (isNaN(razaor) ) {alert("Digite a razÃ£o da progressÃ£o aritmÃ©tica (P.A.)!");
		  document.PA.razaor.focus();
          document.PA.razaor.select();
          return false;         
        }
        if (isNaN(n) ||  n <= 0) {alert("Digite a quantidade de termos da progressÃ£o aritmÃ©tica (P.A.) e/ou somente nÃºmeros positivos!");
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
       
        resultado = resultado.substring(0, resultado.length - 2);  // elimina a Ãºltima vÃ­rgula
        document.PA.resultado.value = resultado;
        return false;
} 
 
 
function PA1() {

 var ddl = document.getElementById("ops");
 var selectedValue = ddl.options[ddl.selectedIndex].value;
    if (selectedValue == "")
   {
    alert("Escolha uma opÃ§Ã£o para Calcular!");
   } 	
	
  var a = document.forms["PA"]["PA_type"].value;
  /** *****************************************************  razÃ£o: (r = an - a_(n-1)  ****************************************  **/  
  if (a === "razÃ£oPA") {
    var a_n = eval(document.PA.a_n.value.replace(",",".").replace(/ /g,""));
    var a_n1 = eval(document.PA.a_n1.value.replace(",",".").replace(/ /g,""));	
 
 try {
         if (isNaN(a_n) ) {alert("Digite o segundo termo da progressÃ£o aritmÃ©tica (P.A.)!");
		  document.PA.a_n.focus();
          document.PA.a_n.select();		  
          return false;         
        }
        if (isNaN(a_n1) ) {alert("Digite o primeiro de termo da progressÃ£o aritmÃ©tica (P.A.)!");
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
	
   document.getElementById('resposta').innerHTML =" <hr> <div style='line-height: 22px;'> A razÃ£o <a1 style='color: #FF0000'><a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1></a1> da P.A. Ã©: <br>   <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1> = <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>n</a1> - <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>n-1</a1> <br> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1> =  "+a_n+" - ("+a_n1+")  <br>  <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1> = <a1 style='color: #FF0000'> "+razao+"</a1>  </div>  <hr>  Logo, a progressÃ£o aritmÃ©tica Ã©  <a1 style='color: #FF0000; text-decoration: underline;'> "+descr+"</a1>!  <br><br> <h1 class='logomarca'> BpW </h1> " 
   
    document.PA.a_n.focus();
	document.PA.a_n.select();     
	document.getElementById('resposta').style.display = "block";
}	
catch(e) {alert(e)}
}

  /** *************************   Ãšltimo termo a_n: (a_n = a_1 + (n - 1).r)   ****************************************  **/  
  if (a === "an") { 
    var a_1 = eval(document.PA.a_1.value.replace(",",".").replace(/ /g,""));
    var n = parseFloat(document.PA.n.value.replace(",", "."));  
    var razaor = eval(document.PA.razaor.value.replace(",",".").replace(/ /g,""));	  
  
 try {
        if (isNaN(a_1) ) {alert("Digite o primeiro termo da progressÃ£o aritmÃ©tica (P.A.)!");
		  document.PA.a_1.focus();
          document.PA.a_1.select();		  
          return false;         
        }
        if (isNaN(razaor) ) {alert("Digite a razÃ£o da progressÃ£o aritmÃ©tica (P.A.)!");
		  document.PA.razaor.focus();
          document.PA.razaor.select();			  
          return false;         
        }
        if (isNaN(n) ||  n <= 0) {alert("Digite a quantidade de termos da progressÃ£o aritmÃ©tica (P.A.) e/ou somente nÃºmeros positivos!");
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
   
   document.getElementById('resposta').innerHTML =" <hr><div style='line-height: 22px;'> O <a1 style='color: #FF0000'><a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman;'>"+n+"</a1></a1> termo da P.A. finita Ã©: <br>  <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>n</a1> = <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>1</a1> + (<a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>n</a1> - 1) âˆ™ <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>r</a1>  <br>  <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman;'>"+n+"</a1> =  "+a_1+" + ("+n+" - 1) . ("+razaor+")  <br> <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman;'>"+n+"</a1> =  "+a_1+" + "+result2+" . ("+razaor+")  <br> <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman;'>"+n+"</a1> =  "+a_1+" + ("+result3+")  <br>    <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman;'>"+n+"</a1> =<a1 style='color: #FF0000'> "+a_n+"</a1>  <br> <hr> </div>  <input  onclick='GerarPA()' type='button' class='form-control' value='Gerar SequÃªncia' class='btn2' />  <br>	<textarea name='resultado'   rows='3'   style='background-color: #DFDFDF; border: solid 1px #122561; width: 100% ; color: #225651; font: 14px Tahoma' readonly='readonly'></textarea>  <br>    <h1 class='logomarca'> BpW </h1>   " 
   
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
        if (isNaN(a_n) ) {alert("Digite o Ãºltimo termo da progressÃ£o aritmÃ©tica (P.A.)!");
		  document.PA.a_n.focus();
          document.PA.a_n.select();		  
          return false;         
        }
        if (isNaN(razaor) ) {alert("Digite a razÃ£o da progressÃ£o aritmÃ©tica (P.A.)!");
		  document.PA.razaor.focus();
          document.PA.razaor.select();			  
          return false;         
        }
        if (isNaN(n) ||  n <= 0) {alert("Digite a quantidade de termos da progressÃ£o aritmÃ©tica (P.A.) e/ou somente nÃºmeros positivos!");
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
   
   document.getElementById('resposta').innerHTML =" <hr><div style='line-height: 22px;'> O primeiro termo <a1 style='color: #FF0000'><a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman;'>1</a1></a1> da P.A. finita Ã©: <br> <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>n</a1> = <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>1</a1> + (<a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>n</a1> - 1) âˆ™ <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>r</a1> <br> <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>1</a1> = <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>n</a1> - (<a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>n</a1> - 1) âˆ™ <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>r</a1>  <br>  <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman;'>1</a1> =  "+a_n+" - ("+n+" - 1) âˆ™ ("+razaor+")  <br> <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman;'>1</a1> =  "+a_n+" - "+result2+" âˆ™ ("+razaor+")  <br> <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman;'>1</a1> =  "+a_n+" - ("+result3+")  <br>    <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman;'>1</a1> =<a1 style='color: #FF0000'> "+a_1+"</a1>  <hr>  <h1 class='logomarca'> BpW </h1>  </div>" 
   
    document.PA.a_n.focus();
	document.PA.a_n.select();     
	document.getElementById('resposta').style.display = "block";
}	
catch(e) {alert(e)}
}


/** ******************************   razÃ£o: (r = a_n - a_1)/(n-1))   *****************************  **/  
 if (a === "razao") {
	var a_n = eval(document.PA.a_n.value.replace(",",".").replace(/ /g,""));
    var n = parseFloat(document.PA.n.value.replace(",", "."));  
    var a_1 = eval(document.PA.a_1.value.replace(",",".").replace(/ /g,"")); 	 

 try {
        if (isNaN(a_1) ) {alert("Digite o primeiro termo da progressÃ£o aritmÃ©tica (P.A.)!");
		  document.PA.a_1.focus();
          document.PA.a_1.select();			  
          return false;         
        }
        if (isNaN(n) ||  n <= 0) {alert("Digite a quantidade de termos da progressÃ£o aritmÃ©tica (P.A.) e/ou somente nÃºmeros positivos!");
		  document.PA.n.focus();
          document.PA.n.select();			  
          return false;         
        }
        if (isNaN(a_n) ) {alert("Digite o Ãºltimo o termo da progressÃ£o aritmÃ©tica (P.A.)!");
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
   
   document.getElementById('resposta').innerHTML =  "<hr> A razÃ£o <a1 style='color: #FF0000'><a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1></a1> da P.A. finita Ã©: <br> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>n</a1> = <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>1</a1> + (<a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>n</a1> - 1) âˆ™ <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1> <br>  "+a_n+" = "+a_1+" + ("+n+" - 1) âˆ™ <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1> <br> "+a_n+" - ("+a_1+") = "+result3+"<a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1> <br> "+result2+" = "+result3+"<a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1> <br>  <div style='line-height: 16px;'>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1>  &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+result2+" </td></tr><tr><td style='text-align:center;'> "+result3+"  </td></tr></tbody></table>  <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>r</a1> =<a1 style='color: #FF0000'> "+razaor+"</a1> </div>   <hr> <h1 class='logomarca'> BpW </h1>" 
   
    document.PA.a_n.focus();
	document.PA.a_n.select();     
	document.getElementById('resposta').style.display = "block";
}	
catch(e) {alert(e)}
}

/** ******************************   nÃºmero de termos n: (n = (a_n - a_1)/r) + 1   *****************************  **/  
 if (a === "ntermos") {
	var a_n = eval(document.PA.a_n.value.replace(",",".").replace(/ /g,""));
	var razaor = eval(document.PA.razaor.value.replace(",",".").replace(/ /g,""));
    var a_1 = eval(document.PA.a_1.value.replace(",",".").replace(/ /g,"")); 	 
  
 try {
        if (isNaN(a_1) ) {alert("Digite o primeiro termo da progressÃ£o aritmÃ©tica (P.A.)!");
		  document.PA.a_1.focus();
          document.PA.a_1.select();			  
          return false;         
        }
        if (isNaN(razaor) ) {alert("Digite a razÃ£o da progressÃ£o aritmÃ©tica (P.A.)!");
		  document.PA.razaor.focus();
          document.PA.razaor.select();			  
          return false;         
        }
        if (isNaN(a_n) ) {alert("Digite o Ãºltimo o termo da progressÃ£o aritmÃ©tica (P.A.)!");
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
   
   document.getElementById('resposta').innerHTML ="<hr> O nÃºmero de termos <a1 style='color: #FF0000'><a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>n</a1></a1> da P.A. finita Ã©: <br> <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>n</a1> = <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>1</a1> + (<a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>n</a1> - 1) âˆ™ <a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>r</a1> <br> "+a_n+" = "+a_1+" + (<a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>n</a1> - 1) âˆ™ ("+razaor+") <br> "+a_n+" - ("+a_1+") = (<a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>n</a1> - 1) âˆ™ ("+razaor+") <br> "+result2+" = (<a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>n</a1> - 1) âˆ™ ("+razaor+") <br> <div style='line-height: 17px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>n</a1> - 1 &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+result2+"  </td></tr><tr><td style='text-align:center;'> "+razaor+" </td></tr></tbody></table>   </div>  <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>n</a1> - 1 =&nbsp; "+result3+" <br>  <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>n</a1> =&nbsp; "+result3+" + 1  <br>  <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>n</a1> =<a1 style='color: #FF0000'> "+n+"</a1> <hr><h1 class='logomarca'> BpW </h1>" 
   
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
        if (isNaN(a_1) ) {alert("Digite o primeiro termo da progressÃ£o aritmÃ©tica (P.A.)!");
          document.PA.a_1.focus();
	      document.PA.a_1.select(); 		  
          return false;         
        }
        if (isNaN(n) ||  n <= 0) {alert("Digite a quantidade de termos da progressÃ£o aritmÃ©tica (P.A.) e/ou somente nÃºmeros positivos!");
		  document.PA.n.focus();
          document.PA.n.select();			  
          return false;         
        }
        if (isNaN(a_n) ) {alert("Digite o Ãºltimo o termo da progressÃ£o aritmÃ©tica (P.A.)!");
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
   
   document.getElementById('resposta').innerHTML =" <hr> A soma dos <a1 style='color: #FF0000'>"+n+"</a1> primeiros termos da P.A. finita Ã©:  <br> <div style='line-height: 15px;'><table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  [<a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>1</a1> + <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>n</a1>] âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>n</a1> </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman; '>2</a1> </td></tr></tbody></table>    <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> ["+a_1+" + ("+a_n+")] âˆ™ "+n+" </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman; '>2</a1> </td></tr></tbody></table>      <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+result2+" âˆ™ "+n+" </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman; '>2</a1> </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+result3+" </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman; '>2</a1> </td></tr></tbody></table>  </div> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1> =<a1 style='color: #FF0000'> "+S_n+"</a1> <hr><h1 class='logomarca'> BpW </h1>" 
   
    document.PA.a_1.focus();
	document.PA.a_1.select();     
	document.getElementById('resposta').style.display = "block";
}	
catch(e) {alert(e)}
}	 
	 
/** ******************************  NÃºmero de termos n em funÃ§Ã£o da soma: (S_n = (a_n - a_1)*n/2   *****************************  **/  
 if (a === "nÃºmerotermosSoma") {	
	var a_n = eval(document.PA.a_n.value.replace(",",".").replace(/ /g,""));
	var S_n = eval(document.PA.S_n.value.replace(",",".").replace(/ /g,""));	
    var a_1 = eval(document.PA.a_1.value.replace(",",".").replace(/ /g,""));  
  
 try {
        if (isNaN(a_1) ) {alert("Digite o primeiro termo da progressÃ£o aritmÃ©tica (P.A.)!");
          document.PA.a_1.focus();
		  document.PA.a_1.select(); 		  
          return false;         
        }
        if (isNaN(S_n) ) {alert("Digite a soma do termos da progressÃ£o aritmÃ©tica (P.A.)!");
          document.PA.S_n.focus();
		  document.PA.S_n.select(); 		  
          return false;         
        }
        if (isNaN(a_n)) {alert("Digite o Ãºltimo o termo da progressÃ£o aritmÃ©tica (P.A.)!");
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
 
   document.getElementById('resposta').innerHTML ="<hr>  A quantidade de termos <a1 style='font-family: times new roman; font-style:italic;'>n</a1> da P.A. finita Ã©: <br> <div style='line-height: 15px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>n</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  [<a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>1</a1> + <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>n</a1>] âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>n</a1> </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman;'>2</a1> </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> "+S_n+" &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> ["+a_1+" + ("+a_n+")] âˆ™ <a1 style='font-size: 16px; font-style:italic; font-family: times new roman; '>n</a1> </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman; '>2</a1> </td></tr></tbody></table>    </div> 2 âˆ™ ("+S_n+") =&nbsp; "+result2+" âˆ™ <a1 style='font-size: 16px; font-style:italic; font-family: times new roman; '>n</a1> <br> "+result3+" =&nbsp;  "+result2+"<a1 style='font-size: 16px; font-style:italic; font-family: times new roman; '>n</a1> <div style='line-height: 16px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 16px; font-style:italic;'>n</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'>  "+result3+" </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman; '>"+result2+"</a1> </td></tr></tbody></table>   </div>  <a1 style='font-family: times new roman; font-style:italic;'>n</a1> =<a1 style='color: #FF0000'> "+n+"</a1> <hr><h1 class='logomarca'> BpW </h1>" 
   
    document.PA.a_1.focus();
	document.PA.a_1.select();     
	document.getElementById('resposta').style.display = "block";
}	
catch(e) {alert(e)}
}

/** ****************************** Ãšltimo termo a_n em funÃ§Ã£o da soma: (S_n = (a_n - a_1)*n/   *****************************  **/  
 if (a === "ultimotermoSoma") {
	var S_n = eval(document.PA.S_n.value.replace(",",".").replace(/ /g,""));
    var n = parseFloat(document.PA.n.value.replace(",", "."));  
    var a_1 = eval(document.PA.a_1.value.replace(",",".").replace(/ /g,""));  	 
  
 try {
        if (isNaN(a_1) ) {alert("Digite o primeiro termo da progressÃ£o aritmÃ©tica (P.A.)!");
          document.PA.a_1.focus();
       	  document.PA.a_1.select(); 		  
          return false;         
        }
        if (isNaN(S_n) ) {alert("Digite a soma do termos da progressÃ£o aritmÃ©tica (P.A.)!");
          document.PA.S_n.focus();
       	  document.PA.S_n.select(); 		  
          return false;         
        }
        if (isNaN(n) ||  n <= 0) {alert("Digite a quantidade de termos da progressÃ£o aritmÃ©tica (P.A.) e/ou somente nÃºmeros positivos!");
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

    document.getElementById('resposta').innerHTML ="<hr>  O valor do termo <a1 style='color: #FF0000'><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1></a1> da P.A. finita Ã©: <br> <div style='line-height: 15px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>n</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> (<a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>1</a1> + <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>n</a1>) âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>n</a1> </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman;'>2</a1> </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> "+S_n+"   &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> ("+a_1+" + <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>n</a1>) âˆ™ "+n+" </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman; '>2</a1> </td></tr></tbody></table>  </div> 2 âˆ™ ("+S_n+") =&nbsp;  ("+a_1+" + <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>n</a1>) âˆ™ "+n+" <br>    "+result2+" =&nbsp;  ("+a_1+" + <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>n</a1>) âˆ™ "+n+" <br>  <div style='line-height: 15px;'>     <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> "+result2+" </td><td rowspan='2'> &nbsp;=&nbsp; "+a_1+" + <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>n</a1>  </td></tr><tr><td>  "+n+" </td> </tr></tbody></table>  </div>   "+result3+" = "+a_1+" + <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>n</a1>  <br>   <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>n</a1> =  "+result3+" - ("+a_1+") <br>  <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>n</a1> = <a1 style='color: #FF0000'> "+a_n+"</a1> <hr><h1 class='logomarca'> BpW </h1>" 
   
    document.PA.a_1.focus();
	document.PA.a_1.select();     
	document.getElementById('resposta').style.display = "block";
}	
catch(e) {alert(e)}
}	

/** ****************************** Primeiro termo a_1 em funÃ§Ã£o da soma: (S_n = (a_n - a_1)*n/   *****************************  **/  
 if (a === "primeirotermoSoma") {
	var S_n = eval(document.PA.S_n.value.replace(",",".").replace(/ /g,""));
    var n = parseFloat(document.PA.n.value.replace(",", "."));  
    var a_n = eval(document.PA.a_n.value.replace(",",".").replace(/ /g,""));  	 
  
 try {
        if (isNaN(a_n) ) {alert("Digite o Ãºltimo termo da progressÃ£o aritmÃ©tica (P.A.)!");
          document.PA.a_n.focus();
          return false;         
        }
        if (isNaN(S_n) ) {alert("Digite a soma do termos da progressÃ£o aritmÃ©tica (P.A.)!");
          document.PA.S_n.focus();
          return false;         
        }
        if (isNaN(n) ||  n <= 0) {alert("Digite a quantidade de termos da progressÃ£o aritmÃ©tica (P.A.) e/ou somente nÃºmeros positivos!");
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

   document.getElementById('resposta').innerHTML =" <hr> <div style='line-height: 15px;'>O valor do termo <a1 style='color: #FF0000'><a1 style='font-family: times new roman; font-style:italic;font-size: 20px;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1></a1> da P.A. finita Ã©: <br>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>n</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> (<a1 style='font-family: times new roman;font-size: 23px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>1</a1> + <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 11px; font-family: times new roman; '>n</a1>) âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>n</a1> </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman;'>2</a1> </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> "+S_n+" &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> [<a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> + ("+a_n+")] âˆ™ "+n+" </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman; '>2</a1> </td></tr></tbody></table>  </div>  2 âˆ™ ("+S_n+") =&nbsp; [<a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> + ("+a_n+")] âˆ™ "+n+" <br>  "+result2+" =&nbsp; [<a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> + ("+a_n+")] âˆ™ "+n+" <br>  <div style='line-height: 15px;'>     <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> "+result2+" </td><td rowspan='2'> &nbsp;=&nbsp;  <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> + ("+a_n+") </td></tr><tr><td> "+n+"  </td> </tr></tbody></table>  </div>   "+result3+" = <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> + ("+a_n+")  <br>   <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> =  "+result3+" - ("+a_n+") <br>  <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> = <a1 style='color: #FF0000'> "+a_1+"</a1> <hr><h1 class='logomarca'> BpW </h1>" 
   
    document.PA.a_n.focus();
	document.PA.a_n.select();     
	document.getElementById('resposta').style.display = "block";
}	
catch(e) {alert(e)}
}

}

/***##############################  PROGRESSÃƒO GEOMÃ‰TRICA  P.G.  ###############################################      **/

function PG2() {
  var a = document.forms["PG"]["PG_type"].value;
/** ******************************   RazÃ£o q: (q = a_n / a_n-1)   *****************************  **/  
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
	

/** ******************************   q : (q = (n-1)âˆš(a_n/a_1))   *****************************  **/  
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

/** ******************************   n : (n = (n-1)âˆš(a_n/a_1))   *****************************  **/  
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

        if (isNaN(a_1) || a_1 == "") {alert("Digite o primeiro termo da progressÃ£o geomÃ©trica (P.G.) ou digite um nÃºmero nÃ£o nulo!");
          document.PG.a_1.focus();
          document.PG.a_1.select();			  
          return false;         
        }
        if (isNaN(razaoq)  ) {
          alert("Digite a razÃ£o da progressÃ£o");
          document.PG.razaoq.focus();
	      document.PG.razaoq.select(); 			  
          return false;         
        }
        if (isNaN(n) ||  n <= 0) {alert("Digite a quantidade de termos da progressÃ£o aritmÃ©tica (P.A.) e/ou somente nÃºmeros positivos!");
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
     
        resultado = resultado.substring(0, resultado.length - 2);  // elimina a Ãºltima vÃ­rgula
        document.PG.resultado.value = resultado;
        return false;
      }

function PG1() {

 var ddl = document.getElementById("ops");
 var selectedValue = ddl.options[ddl.selectedIndex].value;
    if (selectedValue == "")
   {
    alert("Escolha uma opÃ§Ã£o para Calcular!");
   } 
   
  var a = document.forms["PG"]["PG_type"].value;
  /** ****************************************  razÃ£o: (r = an / a_(n-1)  ****************************************  **/  
  if (a === "razaoPG") {
		var a_n = eval(document.PG.a_n.value.replace(",",".").replace(/ /g,""));
		var a_n1 = eval(document.PG.a_n1.value.replace(",",".").replace(/ /g,""));  	  
  
 try {
        if (isNaN(a_n) ) {alert("Digite o segundo termo da progressÃ£o geomÃ©trica (P.G.)!");
          document.PG.a_n.focus();
		  document.PG.a_n.select(); 		  
          return false;         
        }
        if (isNaN(a_n1) ) {alert("Digite o primeiro de termo da progressÃ£o geomÃ©trica (P.G.)!");
          document.PG.a_n1.focus();
	      document.PG.a_n1.select(); 		  
          return false;         
        }  
 var a_n = document.getElementById("resposta").value = roundNumber(a_n, 2);
 var a_n1 = document.getElementById("resposta").value = roundNumber(a_n1, 2);
 var razao =  a_n / a_n1;
 var razao = document.getElementById("resposta").value = roundNumber(razao, 2); 
 
   document.getElementById('resposta').innerHTML ="<hr> A razÃ£o <a1 style='color: #FF0000'><a1 style='font-family: times new roman;font-size: 18px; font-style:italic;'>q</a1></a1> da progressÃ£o geomÃ©trica Ã©: <br>   <div style='line-height: 15px;'>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'>  <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>q</a1>  &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman; font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>n</a1> </td></tr><tr><td style='text-align:center;'> <a1 style='font-family: times new roman; font-style:italic; font-size: 20px;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>n-1</a1> </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'>  <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>q</a1>  &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+a_n+" </td></tr><tr><td style='text-align:center;'> "+a_n1+" </td></tr></tbody></table></div>    <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>q</a1> = <a1 style='color: #FF0000'> "+razao+"</a1>    <hr><h1 class='logomarca'> BpW </h1>" 
   
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
        if (isNaN(a_1) || a_1 == "") {alert("Digite o primeiro termo da progressÃ£o geomÃ©trica (P.G.) ou digite um nÃºmero nÃ£o nulo!");
          document.PG.a_1.focus();
          document.PG.a_1.select();			  
          return false;         
        } 	 
        if (isNaN(n) ||  n <= 0) {alert("Digite a quantidade de termos da progressÃ£o aritmÃ©tica (P.A.) e/ou somente nÃºmeros positivos!");
		  document.PG.n.focus();
          document.PG.n.select();			  
          return false;         
        }		
        if (isNaN(razaoq) ) {alert("Digite a razÃ£o da progressÃ£o geomÃ©trica (P.G.)!");
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
   
   document.getElementById('resposta').innerHTML =" <hr> <div style='line-height: 20px;'>O termo geral <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;' >a</a1><a1 style='font-size: 10px; font-family: times new roman; color:#ff0000; '>"+n+"</a1> da progressÃ£o geomÃ©trica finita Ã©: <br>   <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>n</a1> = <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>q</a1><span class='exp'>(<a1 style='font-family: times new roman; font-style:italic;'>n</a1> - 1)</span> <br>  <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1> = "+a_1+" âˆ™ ("+razaoq+")<span class='exp'>("+n+" - 1)</span> <br>  <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1> = "+a_1+" âˆ™ ("+razaoq+")<span class='exp'>"+result2+" </span> <br>   <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1> = "+a_1+" âˆ™ ("+result3+") <br>  <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1> =<a1 style='color: #FF0000'> "+a_n+"</a1></div>     <hr>   <input onclick='GerarPG()' type='button' class='form-control' value='Gerar SequÃªncia' class='btn2' />  <br>	<textarea name='resultado'   rows='3'   style='background-color: #DFDFDF; border: solid 1px #122561; width: 100% ; color: #225651; font: 14px Tahoma' readonly='readonly'></textarea>  <br>   <hr><h1 class='logomarca'> BpW </h1>  " 
   
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
        if (isNaN(n) ||  n <= 0) {alert("Digite a quantidade de termos da progressÃ£o aritmÃ©tica (P.A.) e/ou somente nÃºmeros positivos!");
		  document.PG.n.focus();
          document.PG.n.select();			  
          return false;         
        }	
        if (isNaN(a_n) ) {alert("Digite o termo geral da progressÃ£o geomÃ©trica (P.G.)!");
          document.PG.a_n.focus();
          document.PG.a_n.select();			  
          return false;         
        }  
        if (isNaN(razaoq) ) {alert("Digite a razÃ£o da progressÃ£o geomÃ©trica (P.G.)!");
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
   
   document.getElementById('resposta').innerHTML ="<hr> O primeiro termo <a1 style='color: #FF0000'><a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1></a1> da progressÃ£o geomÃ©trica finita Ã©: <br> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>n</a1> = <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>q</a1><span class='exp'>(<a1 style='font-family: times new roman; font-style:italic;'>n</a1> - 1)</span>  <br> "+a_n+" = <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> âˆ™ ("+razaoq+")<span class='exp'>("+n+" - 1)</span>  <br>  <div style='line-height: 15px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+a_n+" </td></tr><tr><td style='text-align:center;'> ("+razaoq+")<span class='exp'>"+result2+" </td></tr></tbody></table>     <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;   text-align:center;'> "+a_n+"  </td></tr><tr><td style='text-align:center;'> "+result3+" </td></tr></tbody></table>   <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> =<a1 style='color: #FF0000'> "+a_1+"</a1> </div><hr><h1 class='logomarca'> BpW </h1>" 
   
    document.PG.a_1.focus();
	document.PG.a_1.select();     
	document.getElementById('resposta').style.display = "block";
}	
catch(e) {alert(e)}
}	

/** ******************************   q : (q = (n-1)âˆš(a_n/a_1))   *****************************  **/  
 if (a === "razaoPG2") {
		var a_n = eval(document.PG.a_n.value.replace(",",".").replace(/ /g,""));
		var n = parseFloat(document.PG.n.value.replace(",", "."));  
		var a_1 = eval(document.PG.a_1.value.replace(",",".").replace(/ /g,""));  	 
  
 try {
        if (isNaN(a_1) || a_1 == "") {alert("Digite o primeiro termo da progressÃ£o geomÃ©trica (P.G.) ou digite um nÃºmero nÃ£o nulo!");
          document.PG.a_1.focus();
          document.PG.a_1.select();			  
          return false;         
        } 
          
        if (isNaN(a_n) ) {alert("Digite o termo geral da progressÃ£o geomÃ©trica (P.G.)!");
          document.PG.a_n.focus();
          document.PG.a_n.select();		  
          return false;         
        }  
        if (isNaN(n) ||  n <= 0) {alert("Digite a quantidade de termos da progressÃ£o aritmÃ©tica (P.A.) e/ou somente nÃºmeros positivos!");
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

   document.getElementById('resposta').innerHTML ="<hr> A razÃ£o <a1 style='font-family: times new roman;font-size: 17px; font-style:italic;'><a1 style='color: #FF0000'>q</a1></a1> da progressÃ£o geomÃ©trica finita Ã©: <br>  <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>n</a1> = <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>q</a1><span class='exp'>(<a1 style='font-family: times new roman; font-style:italic;'>n</a1> - 1)</span> <br> "+a_n+" = "+a_1+" âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>q</a1><span class='exp'>("+n+" - 1)</span> <br> <div style='line-height: 14px;'>   <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> "+a_n+" </td><td rowspan='2'> &nbsp;=&nbsp; <a1 style='font-family: times new roman; font-style:italic;'>q</a1><span class='exp'>"+result2+"</span>  </td></tr><tr><td> "+a_1+" </td> </tr></tbody></table>  "+result3+" =  <a1 style='font-family: times new roman; '>q</a1><span class='exp'>"+result2+"</span> <br>  <br>  <a1 style='font-family: times new roman; font-size: 18px; font-style:italic;'>q</a1> =&nbsp;<span class='exp'><a1 style='font-family: times new roman; '>"+result2+"</a1></span>âˆš<a1 style='width:100%; height:100%; border-top:solid 1.1px; padding:1.2px;'>"+result3+" </a1> <br>  </div>   <a1 style='font-family: times new roman;font-size: 18px; font-style:italic;'>q</a1> =&nbsp; <a1 style='color: #FF0000'> "+q+"</a1> <hr><h1 class='logomarca'> BpW </h1>" 
   
    document.PG.a_1.focus();
	document.PG.a_1.select();     
	document.getElementById('resposta').style.display = "block";
}	
catch(e) {alert(e)}
}	

/** ******************************   n : (n = (n-1)âˆš(a_n/a_1))   *****************************  **/  
 if (a === "numerotermosPG") {
		var a_n = eval(document.PG.a_n.value.replace(",",".").replace(/ /g,""));
		var razaoq = eval(document.PG.razaoq.value.replace(",",".").replace(/ /g,""));		
		var a_1 = eval(document.PG.a_1.value.replace(",",".").replace(/ /g,"")); 	 
	 
 try {
        if (isNaN(a_1) || a_1 == "") {alert("Digite o primeiro termo da progressÃ£o geomÃ©trica (P.G.) ou digite um nÃºmero nÃ£o nulo!");
          document.PG.a_1.focus();
          document.PG.a_1.select();			  
          return false;         
        }	 
        if (isNaN(razaoq)) {alert("Digite o nÃºmero de termos da progressÃ£o geomÃ©trica (P.G.)!");
          document.PG.razaoq.focus();
		  document.PG.razaoq.select();		  
          return false;         
        }
        if (isNaN(a_n) ) {alert("Digite o termo geral da progressÃ£o geomÃ©trica (P.G.)!");
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

   document.getElementById('resposta').innerHTML ="<hr> O nÃºmero de termos da progressÃ£o geomÃ©trica finita Ã©: <br>   <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>n</a1> = <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> âˆ™ <a1 style='font-family: times new roman; font-style:italic;'>q</a1><span class='exp'>(<a1 style='font-family: times new roman; font-style:italic;'>n</a1> - 1)</span> <br> "+a_n+" = "+a_1+" âˆ™ "+razaoq+"<span class='exp'>(<a1 style='font-family: times new roman; font-style:italic;'>n</a1> - 1)</span>  <br> <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> "+a_n+" </td><td rowspan='2'> &nbsp;=&nbsp; "+razaoq+"<span class='exp'>(<a1 style='font-family: times new roman; font-style:italic;'>n</a1> - 1)</span>   </td></tr><tr><td> "+a_1+" </td> </tr></tbody></table>   </div> "+result3+" =  "+razaoq+"<span class='exp'>(<a1 style='font-family: times new roman; font-style:italic;'>n</a1> - 1)</span> <br> log("+result3+") =  log("+razaoq+"<span class='exp'>(<a1 style='font-family: times new roman; font-style:italic;'>n</a1> - 1)</span> ) <br>  log("+result3+") = (<a1 style='font-family: times new roman; font-style:italic;'>n</a1> - 1) âˆ™ log("+razaoq+")<br>   <div style='line-height: 16px;'>      <table id='fracao'><tbody style='text-align:center;'><tr><td style='border-bottom:solid 1.3px'> log("+result3+") </td><td rowspan='2'> &nbsp;=&nbsp; <a1 style='font-family: times new roman; font-style:italic;'>n</a1> - 1   </td></tr><tr><td> log("+razaoq+") </td> </tr></tbody></table>       </div>  "+log+" =  <a1 style='font-family: times new roman; font-style:italic;'>n</a1> - 1 <br>  <a1 style='font-family: times new roman; font-style:italic;'>n</a1> = "+log+" + 1        <br>   <a1 style='font-family: times new roman;font-size: 18px; font-style:italic;'>n</a1> =&nbsp; <a1 style='color: #FF0000'> "+n+"</a1> <hr><h1 class='logomarca'> BpW </h1> " 
   
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
        if (isNaN(a_1) || a_1 == "") {alert("Digite o primeiro termo da progressÃ£o geomÃ©trica (P.G.) ou digite um nÃºmero nÃ£o nulo!");
          document.PG.a_1.focus();
          document.PG.a_1.select();			  
          return false;         
        }	 
        if (isNaN(n) ||  n <= 0) {alert("Digite a quantidade de termos da progressÃ£o aritmÃ©tica (P.A.) e/ou somente nÃºmeros positivos!");
		  document.PG.n.focus();
          document.PG.n.select();			  
          return false;         
        }		
        if (isNaN(razaoq)) {alert("Digite a razÃ£o da progressÃ£o geomÃ©trica (P.G.)!");
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
   
   document.getElementById('resposta').innerHTML =" <hr>  A soma dos <a1 style='color: #FF0000'>"+n+"</a1> primeiros termos da progressÃ£o geomÃ©trica finita, para <a1 style='font-family: times new roman; font-size: 16px; font-style:italic;'>q</a1> â‰  1, Ã©: <br> <div style='line-height: 14px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> âˆ™ (1 - <a1 style='font-family: times new roman; font-style:italic;'>q</a1><span class='exp'><a1 style='font-family: times new roman; font-style:italic;'>n</a1></span>) </td></tr><tr><td style='text-align:center;'> 1 - <a1 style='font-family: times new roman; font-style:italic;'>q</a1> </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+a_1+" âˆ™ (1 - ("+razaoq+")<span class='exp'>"+n+"</span>) </td></tr><tr><td style='text-align:center;'> 1 - ("+razaoq+") </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+a_1+" âˆ™ (1 - ("+result2+")) </td></tr><tr><td style='text-align:center;'> "+result4+" </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+a_1+" âˆ™ ("+result3+") </td></tr><tr><td style='text-align:center;'> "+result4+" </td></tr></tbody></table>   <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+result5+" </td></tr><tr><td style='text-align:center;'> "+result4+" </td></tr></tbody></table>  </div>   <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>"+n+"</a1> =<a1 style='color: #FF0000'> "+S_n+"</a1> <hr><h1 class='logomarca'> BpW </h1> " 
   
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
        if (isNaN(a_1) || a_1 == "") {alert("Digite o primeiro termo da progressÃ£o geomÃ©trica (P.G.) ou digite um nÃºmero nÃ£o nulo!");
          document.PG.a_1.focus();
          document.PG.a_1.select();			  
          return false;         
        }	 
        if (isNaN(razaoq) || razaoq == "") {alert("Digite a razÃ£o da progressÃ£o geomÃ©trica (P.G.)!");
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

   document.getElementById('resposta').innerHTML ="  A soma dos infinitos termos da ProgressÃ£o geomÃ©trica para (-1 < <a1 style='font-family: times new roman; font-style:italic;'>q</a1> < 1) Ã©: <br>  <div style='line-height: 15px;'>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>âˆž</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>a</a1><a1 style='font-size: 10px; font-family: times new roman; '>1</a1> </td></tr><tr><td style='text-align:center;'> 1 - <a1 style='font-family: times new roman; font-style:italic;'>q</a1> </td></tr></tbody></table>  <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>âˆž</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+a_1+" </td></tr><tr><td style='text-align:center;'> 1 - ("+razaoq+") </td></tr></tbody></table> <table id='fracao'><tbody style='text-align:center;'><tr><td  rowspan='2'> <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>âˆž</a1> &nbsp;=&nbsp; </td><td style='border-bottom:solid 1.3px;text-align:center;'> "+a_1+" </td></tr><tr><td style='text-align:center;'> "+result2+" </td></tr></tbody></table>    <a1 style='font-family: times new roman;font-size: 20px; font-style:italic;'>S</a1><a1 style='font-size: 10px; font-family: times new roman; '>âˆž</a1> =<a1 style='color: #FF0000'> "+S_n+"</a1> </div><hr><h1 class='logomarca'> BpW </h1>" 
    document.PG.a_1.focus();
	document.PG.a_1.select();     
	document.getElementById('resposta').style.display = "block";
}	
catch(e) {alert(e)}
}		 

}




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


