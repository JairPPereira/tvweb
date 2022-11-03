<?php 

if (isset($_POST["acao"])){ 

   $nome=$_POST["nome"]; 
   $telefone=$_POST["telefone"]; 
   $email=$_POST["email"]; 
   $radio=$_POST["novidades"]; 
   $msg=$_POST["mensagem"]; 

   echo "<p>Olá, ".$nome."</p>"; echo "<p>Seu email é: ".$email."</p>"; 

   echo "<p>Seu telefone é: ".$telefone."</p>"; 

   if ($radio=="sim"){ 
      echo "<p>Você escolheu receber nossas novidades</p>"; 
   }
   elseif ($radio=="nao") { 
      echo "<p>Você escolheu NÃO receber nossas novidades</p>"; 
   } 
   echo "<p>Sua mensagem é:<br/>".$msg."</p>"; 
} 

?>