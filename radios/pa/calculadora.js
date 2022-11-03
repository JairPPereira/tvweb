//JavaScript	
	
	//Função que definirá a visibilidade e placeholder
	function ControleDeSelecao(){
		//recebe o value da string selecionada(dropdown)
		var dropdown = document.getElementById("operadores").options[document.getElementById("operadores").selectedIndex].value;			
		var placeText;
		var visibilidade;
		//se o dropdown for igual a algum desses(simplificação do ||)
		if ( [ 'raiz', 'fatorial', 'fibonacci', 'media', 'calc' ].indexOf(dropdown) > -1 ){			
			//oculta o txtValor2 e remove o texto
			visibilidade = "hidden";
			document.getElementById("txtValor1").value = ""
			//define placeholder de acordo com selecionado 
			switch(dropdown){
				case "raiz":
					placeText = "9 (ex: √9 = 3)"; break;
				case "fatorial":
					placeText = "5 (ex: 5x4x3x2x1 = 120)"; break;
				case "fibonacci":						
					placeText = "5 (ex: 1+1+2+3+5)"; break;
				case "media":
					placeText = "9,6.5,2(decimais com .)"; break;
				case "calc":
					placeText = "3+4*(5-1)"; break;
				default:
					break;
			}
		}else{
			//volta a exibir o txtValor2 e remove placeholder
			visibilidade = "visible";
			placeText = "";
		}			
		document.getElementById("txtValor2").style.visibility = visibilidade;
		document.getElementById("txtValor1").placeholder = placeText;
	}		

	function Limpar(id1, id2){
		document.getElementById(id1).value = "";
		document.getElementById(id2).value = "";
	}	

	function Calcular(id1, id2){
		//captura o valor do select(dropdown) selecionado
		var operador = document.getElementById("operadores").options[document.getElementById("operadores").selectedIndex].value;
		
		var num1 = document.getElementById(id1).value;
		var num2 = document.getElementById(id2).value;
		var resultado = new Number();
		//objeto com as funçoes dos algoritimos que retorna o resultado;
		var calcular = {
			fatorial: function(){
				var strRes = 1;
				for(i = num1; i > 1; i--){						
					strRes *= i;
				}
				return num1+"! = "+strRes;
			},
			fibonacci: function(){
				var strRes = 1;
				var fib = new Array(num1);
				fib[0] = 0;
				fib[1] = 1;
				for(i=2; i<= num1; i++){
					fib[i] = fib[i-2] + fib[i-1];
					strRes += ", "+ fib[i];
				}
				return strRes;
			},
			
			porcentagem: function (){
				function inputN(id, n1, n2){
					return `<input 	type="number" style="width: 3em" id="pct" step="5" value="100" onchange="document.getElementById('${id}').innerHTML = ((${n1} * this.value) / ${n2}).toFixed(2); document.getElementById('nud${id}').innerHTML = this.value;">`;		
				}
		
				function details(result, how){
					return 	`
						<details>
						  		<summary>${result}</summary>
						  		<p>${how}</p>
						</details>
							`;
				}

				var strRes = details(num1+"% de " +num2+" é " + (num2 * (num1 / 100)).toFixed(2), `(${num2} * ( ${num1} / 100 )`);
				strRes += details(num2+"% de " +num1+" é " + (num1 * (num2 / 100)).toFixed(2),  `(${num1} * (${num2} / 100) `); //inverso

				strRes += details(num1+" é "+((num1 * 100) / num2).toFixed(2)+"% de "+num2, `(${num1} * 100) / ${num2}`);
				strRes += details(num2+" é "+((num2 * 100) / num1).toFixed(2)+"% de "+num1, `(${num2} * 100) / ${num1}`); //inverso

				strRes += details("se "+num2+" é "+inputN("p1", num1, num2) +"%, então "+num1+" é <span id='p1'>"+((num1 * 100) / num2).toFixed(2) +"</span>%", 
					`(${num1} * <span id='nudp1'>100</span>) / ${num2}`); 
				strRes += details("se "+num1+" é "+inputN("p2", num2, num1) +"%, então "+num2+" é <span id='p2'>"+((num2 * 100) / num1).toFixed(2) +"</span>%", 
					`(${num2} * <span id='nudp2'>100</span>) / ${num1}`); //inverso

				strRes += details("se "+num1+" é "+num2+"% entao o montante total é "+((num1 * 100) / num2).toFixed(2), `(${num1} * 100) / ${num2}`);	
				strRes += details("se "+num2+" é "+num1+"% entao o montante total é "+((num2 * 100) / num1).toFixed(2), `(${num2} * 100) / ${num1}`); //inverso

				strRes += details("se um valor apos aumentar "+num1+"% é resultado de "+num2+" entao o valor inicial é "+(num2/(1+(num1/100))).toFixed(2), `${num2}/(1+(${num1}/100)`);//(num1*100) / (100+num2);	
				strRes += details("se um valor apos aumentar "+num2+"% é resultado de "+num1+" entao o valor inicial é "+(num1/(1+(num2/100))).toFixed(2), `${num1}/(1+(${num2}/100)`);//inverso 			

				strRes += details("se um valor apos diminuir "+num1+"% é resultado de "+num2+" entao o valor inicial é "+(num2/(1-(num1/100))).toFixed(2), `${num2}/(1-(${num1}/100))`); 			
				strRes += details("se um valor apos diminuir "+num2+"% é resultado de "+num1+" entao o valor inicial é "+(num1/(1-num2/100)).toFixed(2), `${num1}/(1-(${num2}/100))`);//inverso 			


				strRes += details("a o aumento percentual de "+num1+" para "+num2+" é de "+((num2/num1-1) * 100).toFixed(2) +"%", `(${num2}/${num1}-1) * 100`);
				strRes += details("a diminuição percentual de "+num2+" para "+num1+" é de "+((num1/num2-1) * 100).toFixed(2) +"%", `(${num1}/${num2}-1) * 100`);
				strRes += details(num1+" + "+num2+"% = "+((num2/100+1) * num1).toFixed(2), `(${num2}/100+1) * ${num1}`);
				strRes += details(num1+" - "+num2+"% = "+((1-num2/100) * num1).toFixed(2), `(${num1}/100+1) * ${num2}`);

				return strRes;
			},
			
			media: function (){
				//guarda os valores no array do tipo numeros separando pela virgula
				var arrayNum1 = num1.split(',').map(Number);
				var arrayNum2 = num2.split(',').map(Number);
				//junta os 2 arrays dos 2 campos em um só(caso os 2 tivesse habilitados)
				var arrayUnico = arrayNum1.concat(arrayNum2);
				//remove arrays em vazio ("")
				arrayUnico = arrayUnico.filter(Boolean)
				//realiza a soma de todos numeros contidos no array
				var somatorio = arrayUnico.reduce(function(a, b){ return a + b });
				//dividindo pela quantidade de numeros
				return  (somatorio / arrayUnico.length);
			}
		}
    
		switch(operador)
		{
			case "+":
			case "-":
			case "/":
			case "*":
				var StrExpressao = num1 + operador + num2;
				//método eval realiza uma operaçao de strings e retorna do tipo number
				resultado = eval(StrExpressao); break;					
			case "raiz":
				resultado = "&radic;"+num1 + " = " + Math.sqrt(num1); break;					
			case "potencia":
				resultado = num1+"<sup>"+num2 +"</sup> = "+ Math.pow(num1, num2); break;					
			case "fatorial":
				resultado = calcular['fatorial'](); break;					
			case "fibonacci":
				resultado = calcular['fibonacci'](); break;					
			case "porcento":
				resultado = calcular['porcentagem'](); break;
			case "media":
				resultado = calcular['media'](); break;
			case "calc":
				resultado = eval(num1); break;
			default:
				break;				
			
		}	
		
		document.getElementById("saida").innerHTML = "Resultado: "+ resultado;
	}