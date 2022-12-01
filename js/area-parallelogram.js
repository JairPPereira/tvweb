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

// 01
var v01a = +document.getElementById('i01a').value;
var v01h = +document.getElementById('i01h').value;
var v01S = roundDig(v01a * v01h);
katex.render('\\displaystyle{ '+ area +' = a \\cdot h }', document.getElementById("iCalRes_01_1"));	
katex.render('\\displaystyle{  = '+ v01S +'}', document.getElementById("iCalRes_01"));
 
// 02
var v02b = +document.getElementById('i02b').value;
var v02h = +document.getElementById('i02h').value;
var v02S = roundDig(v02b * v02h);
katex.render('\\displaystyle{ '+ area +' = b \\cdot h_b }', document.getElementById("iCalRes_02_1"));	
katex.render('\\displaystyle{ = '+ v02S +'}', document.getElementById("iCalRes_02"));
 	
// 03
var v03a = +document.getElementById('i03a').value;
var v03b = +document.getElementById('i03b').value;
var v03al = +document.getElementById('i03al').value;
var v03S = roundDig(v03a * v03b * Math.sin(v03al * Math.PI / 180) );
katex.render('\\displaystyle{ '+ area +' = a \\cdot b \\cdot \\sin(\\alpha)^\\circ }', document.getElementById("iCalRes_03_1"));	
katex.render('\\displaystyle{ = '+ v03S +'}', document.getElementById("iCalRes_03"));

// 04
var v04d1 = +document.getElementById('i04d1').value;
var v04d2 = +document.getElementById('i04d2').value;
var v04al = +document.getElementById('i04al').value;
var v04S = roundDig(0.5 * v04d1 * v04d2 * Math.sin(v04al * Math.PI / 180) );
katex.render('\\displaystyle{ '+ area +' = \\frac{1}{2} \\cdot d_1 \\cdot d_2 \\cdot \\sin({\\alpha})^\\circ }', document.getElementById("iCalRes_04_1"));	
katex.render('\\displaystyle{   = '+ v04S +'}', document.getElementById("iCalRes_04"));

// 05
var v05a = +document.getElementById('i05a').value;
var v05r = +document.getElementById('i05r').value;
var v05S = roundDig(2 * v05a * v05r);
katex.render('\\displaystyle{ '+ area +' = 2 \\cdot a \\cdot r }', document.getElementById("iCalRes_05_1"));	
katex.render('\\displaystyle{  = '+ v05S +'}', document.getElementById("iCalRes_05"));	
	
// 06 
var v06r = +document.getElementById('i06r').value;
var v06al = +document.getElementById('i06al').value;
var v06S = roundDig(4 * (v06r * v06r) / Math.sin(v06al * Math.PI / 180));
katex.render('\\displaystyle{ '+ area +' =\\frac{4 \\cdot r^2 }{\\sin(\\alpha)^\\circ } }', document.getElementById("iCalRes_06_1"));
katex.render('\\displaystyle{   = '+ v06S +'}', document.getElementById("iCalRes_06"));		
	
	// table formula
katex.render('\\displaystyle{ '+ area +' = a \\cdot h }', document.getElementById("iCalRes_001_1"));	
katex.render('\\displaystyle{ '+ area +' = b \\cdot h_b }', document.getElementById("iCalRes_002_1"));		
katex.render('\\displaystyle{ '+ area +' = a \\cdot b \\cdot \\sin(\\alpha)^\\circ }', document.getElementById("iCalRes_003_1"));		
katex.render('\\displaystyle{ '+ area +' = \\frac{1}{2} d_1 d_2 \\sin({\\alpha})^\\circ }', document.getElementById("iCalRes_004_1"));		
katex.render('\\displaystyle{ '+ area +' = 2 \\cdot a \\cdot r }', document.getElementById("iCalRes_005_1"));	
katex.render('\\displaystyle{ '+ area +' =\\frac{4 \\cdot r^2 }{\\sin(\\alpha)^\\circ } }', document.getElementById("iCalRes_006_1"));	
};