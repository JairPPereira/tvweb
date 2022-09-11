<?php
/////////////////////////////////////////////////////
// READ META DATA FROM STREAMING URL
//
// Copyright (C) SODAH | JOERG KRUEGER 
// https://www.flashradio.info
/////////////////////////////////////////////////////
error_reporting(0);
header('Content-type: text/plain');
header('Pragma: public'); 
header('Expires: Sat, 26 Jul 1997 05:00:00 GMT');                  
header('Last-Modified: '.gmdate('D, d M Y H:i:s') . ' GMT');
header('Cache-Control: no-store, no-cache, must-revalidate');
header('Cache-Control: pre-check=0, post-check=0, max-age=0');
header('Pragma: no-cache'); 
header('Expires: 0'); 

if (isset($_POST['url']) && $_POST['url'] != ""):
    echo getMp3StreamTitle($_POST['url']);
else:
	echo "";
endif;

function getMp3StreamTitle($steam_url) {
        $result = false;
        $icy_metaint = -1;
        $needle = 'StreamTitle=';
        $ua = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36';

        $opts = array(
            'http' => array(
                'method' => 'GET',
                'header' => 'Icy-MetaData: 1',
                'user_agent' => $ua
            )
        );
        $default = stream_context_set_default($opts);
        $stream = fopen($steam_url, 'r');
        if($stream && ($meta_data = stream_get_meta_data($stream)) && isset($meta_data['wrapper_data'])){
            foreach ($meta_data['wrapper_data'] as $header){
                if (strpos(strtolower($header), 'icy-metaint') !== false){
                    $tmp = explode(":", $header);
                    $icy_metaint = trim($tmp[1]);
                    break;
                }
            }
        }
        if($icy_metaint != -1) {
            $buffer = stream_get_contents($stream, 300, $icy_metaint);

            if(strpos($buffer, $needle) !== false) {
                $title = explode($needle, $buffer);
                $title = trim($title[1]);
                $result = substr($title, 1, strpos($title, ';') - 2);
            }
        }
        if($stream) {
            fclose($stream);                
        }
        return $result;
    }

?>