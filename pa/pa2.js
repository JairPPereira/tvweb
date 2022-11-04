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
           if (isNaN(a_n)) {alert("Digite o segundo termo da progressÃ£o aritmÃ©tica (P.A.)!");
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
  
