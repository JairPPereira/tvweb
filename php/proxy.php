<?php
// URL da API
$url = 'https://zenoplay.zenomedia.com/api/zenofm/nowplaying/2cgy8mzvsy8uv';

// Faz a chamada à API
$data = file_get_contents($url);

// Retorna os dados
echo $data;
?>
