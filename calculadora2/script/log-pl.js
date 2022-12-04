function Log2() {
 var desMista = document.log2.desMista.value;
 
 if (document.log2.logx.value != "") {  //ln x
  var logx = eval(document.log2.logx.value.replace (",",".").replace(/ /g,""));
  var x1 = Math.pow(Math.E,logx);
 } else if (document.log2.x1.value != "") {    //x1
  var x1 = eval(document.log2.x1.value.replace (",",".").replace(/ /g,""));
  if (x1 > 0) {
  var logx = Math.log(x1);
  } else {
    document.log2.x1.value = "ERROR: x < 0";
    document.log2.x1.style.border = "2px solid #cf000f";
    return;
  }
 } else {
   error1.style.color = "#cf000f";
   error1.style.fontWeight = "bold"; 
   location.href = "#error1";
   return;
 }
 document.log2.x1.value = ((x1.toFixed(desMista)).toString()).replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".",",");
 document.log2.logx.value = ((logx.toFixed(desMista)).toString()).replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".",","); 
}

   
function uvolniDM() {
 if (document.log2.desMista.value == "2") {
   document.log2.desMista.value = "";
 }
}
function zaplnDM() {
 if (document.log2.desMista.value == "") {
   document.log2.desMista.value = "2";
 }
}