function Log3() {
 var desMista = document.log3.desMista.value;
 
 if (document.log3.logx.value != "") {  //ln x
  var logx = eval(document.log3.logx.value.replace (",",".").replace(/ /g,""));
  var x1 = Math.pow(10,logx);
 } else if (document.log3.x1.value != "") {    //x1
  var x1 = eval(document.log3.x1.value.replace (",",".").replace(/ /g,""));
  if (x1 > 0) {
  var logx = Math.log(x1) / Math.log(10);
  } else {
    document.log3.x1.value = "ERROR: x < 0";
    document.log3.x1.style.border = "2px solid #cf000f";
    return;
  }
 } else {
   error1.style.color = "#cf000f";
   error1.style.fontWeight = "bold"; 
   location.href = "#error1";
   return;
 }
 document.log3.x1.value = ((x1.toFixed(desMista)).toString()).replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".",","); 
 document.log3.logx.value = ((logx.toFixed(desMista)).toString()).replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".",",");
}

   
function uvolniDM() {
 if (document.log3.desMista.value == "2") {
   document.log3.desMista.value = "";
 }
}
function zaplnDM() {
 if (document.log3.desMista.value == "") {
   document.log3.desMista.value = "2";
 }
}