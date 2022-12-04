function Log1() {
 var desMista = document.log1.desMista.value;
 var a = document.log1.a.value.replace(",",".").replace(/ /g,"");

 if ((document.log1.a.value == "")||((document.log1.logx.value == "")&&(document.log1.x1.value == ""))) {
   error1.style.color = "#cf000f";
   error1.style.fontWeight = "bold"; 
   location.href = "#error1";
   if (document.log1.a.value == "") {
    document.log1.a.style.border = "2px solid #cf000f";
   } 
   if ((document.log1.logx.value == "")&&(document.log1.x1.value == "")) {
    document.log1.logx.style.border = document.log1.x1.style.border = "2px solid #cf000f";
   } 
   return;
 } else if (a < 0) {
  document.log1.a.value = "> 0";
  document.log1.a.style.border = "2px solid #cf000f";
  return;
 } else { 
  if (document.log1.logx.value != "") {  //ln x
   var logx = eval(document.log1.logx.value.replace(",",".").replace(/ /g,""));
   var x1 = Math.pow(a,logx);
  } else if (document.log1.x1.value != "") {    //x1
   var x1 = eval(document.log1.x1.value.replace(",",".").replace(/ /g,""));
   if (x1 > 0) {
   var logx = Math.log(x1) / Math.log(a);
   } else {
    document.log1.x1.value = "ERROR: x < 0";
    document.log1.x1.style.border = "2px solid #cf000f";
    return;
   }
  } 
  document.log1.x1.value = ((x1.toFixed(desMista)).toString()).replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".",","); 
  document.log1.logx.value = ((logx.toFixed(desMista)).toString()).replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".",","); 
  document.log1.a.value = a.replace(".",",")
 }
} 
   
function uvolniDM() {
 if (document.log1.desMista.value == "2") {
   document.log1.desMista.value = "";
 }
}
function zaplnDM() {
 if (document.log1.desMista.value == "") {
   document.log1.desMista.value = "2";
 }
}