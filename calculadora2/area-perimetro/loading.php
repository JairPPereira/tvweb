<!DOCTYPE HTML>
<html>
  <head>                             
    <meta name="robots" content="noindex">
    <meta charset="UTF-8">
    <title>Loading</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      .loader {
        border: 10px solid #f3f3f3;
        border-radius: 50%;
        border-top: 10px solid #4d86bd;
        border-bottom: 10px solid #4d86bd;
        width: 35px;
        height: 35px;
       -webkit-animation: spin 2s linear infinite;
        animation: spin 2s linear infinite;
      }

      @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>
  </head>
  <body>
    <div class="loader"></div>
  </body>
</html>
