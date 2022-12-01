"use strict"; 

window.onload = function()
{
Calculator(); 
};

var n_round = 3;

function roundDig(num)
{
return Math.round(num * Math.pow(10, n_round)) / Math.pow(10, n_round);
};
 
function Calculator() 
{
// 1
var v01a = +document.getElementById('i01a').value;
var v01b = +document.getElementById('i01b').value;	
var v01S = roundDig(v01a * v01b);
katex.render('\\displaystyle{ '+area+' = a \\cdot b}', document.getElementById("iCalRes_01_1"));
katex.render('\\displaystyle{ = '+v01S+'}', document.getElementById("iCalRes_01"));
 
// 2
var v02a = +document.getElementById('i02a').value;
var v02P = +document.getElementById('i02P').value;
var v02S = roundDig((v02P * v02a - 2 * v02a * v02a)/2);
katex.render('\\displaystyle{ P = 2 \\cdot a + 2 \\cdot b }', document.getElementById("iCalRes_02_p"));	
katex.render('\\displaystyle{ '+area+' = \\frac{ P \\cdot a - 2 \\cdot a^2}{2} }', document.getElementById("iCalRes_02_1"));
katex.render('\\displaystyle{  = '+v02S+' }', document.getElementById("iCalRes_02"));

// 3
var v03a = +document.getElementById('i03a').value;
var v03d = +document.getElementById('i03d').value;	
var v03S = roundDig(v03a * Math.sqrt( Math.pow(v03d, 2) - Math.pow(v03a, 2) ) );
katex.render('\\displaystyle{ '+area+' = a \\cdot \\sqrt{d^2 - a^2} }', document.getElementById("iCalRes_03_1"));
katex.render('\\displaystyle{   = '+v03S+' }', document.getElementById("iCalRes_03"));

// 4
var v04d = +document.getElementById('i04d').value;
var v04al = +document.getElementById('i04al').value;	
var v04S = roundDig( (Math.pow(v04d, 2) *  Math.sin(v04al * Math.PI / 180)) /2 );
katex.render('\\displaystyle{ '+area+' = \\frac{d^2 \\cdot \\sin{\\alpha ^\\circ}}{2} }', document.getElementById("iCalRes_04_1"));
katex.render('\\displaystyle{ = '+v04S+' }', document.getElementById("iCalRes_04"));
	
// 5
var v05a = +document.getElementById('i05a').value;
var v05R = +document.getElementById('i05R').value;	
var v05S = roundDig(v05a * Math.sqrt( 4 * Math.pow(v05R, 2) - Math.pow(v05a, 2) ) );
katex.render('\\displaystyle{ '+area+' = a \\cdot \\sqrt{4 \\cdot R^2 - a^2}  }', document.getElementById("iCalRes_05_1"));
katex.render('\\displaystyle{   = '+v05S+' }', document.getElementById("iCalRes_05"));

// 6
var v06a = +document.getElementById('i06a').value;
var v06D = +document.getElementById('i06D').value;	
var v06S = roundDig(v06a * Math.sqrt( Math.pow(v06D, 2) - Math.pow(v06a, 2) ) );
katex.render('\\displaystyle{ '+area+' = a \\cdot \\sqrt{D^2 - a^2}  }', document.getElementById("iCalRes_06_1"));
katex.render('\\displaystyle{  = '+v06S+' }', document.getElementById("iCalRes_06"));	
	
	// table formula
katex.render('\\displaystyle{ '+area+' = a \\cdot b}', document.getElementById("iCalRes_001_1"));
katex.render('\\displaystyle{ '+area+' = \\frac{ P \\cdot a - 2 \\cdot a^2}{2} }', document.getElementById("iCalRes_002_1"));
katex.render('\\displaystyle{ '+area+' = a \\cdot \\sqrt{d^2 - a^2} }', document.getElementById("iCalRes_003_1"));
katex.render('\\displaystyle{ '+area+' = \\frac{d^2 \\cdot \\sin{\\alpha ^\\circ}}{2} }', document.getElementById("iCalRes_004_1"));
katex.render('\\displaystyle{ '+area+' = a \\cdot \\sqrt{4 \\cdot R^2 - a^2}  }', document.getElementById("iCalRes_005_1"));
katex.render('\\displaystyle{ '+area+' = a \\cdot \\sqrt{D^2 - a^2}  }', document.getElementById("iCalRes_006_1"));
};