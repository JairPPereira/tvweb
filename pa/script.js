function PA(){
    var valor = parseInt(document.getElementById('inicial').value);
    var razao = parseInt(document.getElementById('razao').value);
    var termo = parseInt(document.getElementById('termo').value);
    var pa='';
  
    for(var count=1; count<=termo ; count++){
     pa += "Termo "+count+" = "+valor+"<br />";
      valor += razao;
    }
    document.write(pa);
  }
  var btn = document.querySelector("#refresh");
  btn.addEventListener("click", function() {
      
      location.reload();
  });
  
