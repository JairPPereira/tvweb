<?php
/////////////////////////////////////////////////////
// FALLBACK FOR META DATA
// https://www.luna-universe.com
//
// Copyright (C) SODAH | JOERG KRUEGER 
// https://www.sodah.de
/////////////////////////////////////////////////////
//error_reporting(0);
header('Content-type: text/plain');
header('Pragma: public'); 
header('Expires: Sat, 26 Jul 1997 05:00:00 GMT');                  
header('Last-Modified: '.gmdate('D, d M Y H:i:s') . ' GMT');
header('Cache-Control: no-store, no-cache, must-revalidate');
header('Cache-Control: pre-check=0, post-check=0, max-age=0');
header('Pragma: no-cache'); 
header('Expires: 0'); 



if (isset($_POST['url'])) {
	if ($_POST['url'] != "") {
		$output = useCurl($_POST['url']);
		if ($output == "" || $output == "The file you requested could not be found") {
			$output = useFileGetContents($_POST['url']);
		}
		echo $output;
	}
}

function useFileGetContents($sURL) {
	$options = array(
		'http'=>array(
		'method'=>"GET",
		'header'=>"Accept-language: en\r\n" .
					"Cookie: foo=bar\r\n" . 
					"User-Agent: Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.102011-10-16 20:23:10\r\n" // i.e. An iPad 
		)
	);
	$contents = file_get_contents($sURL, false, stream_context_create($options),0, 12000);
	return $contents;
}

function useCurl($sURL) {
	$user_agent='Mozilla/5.0 (Windows NT 6.1; rv:8.0) Gecko/20100101 Firefox/8.0';
	$options = array(
		CURLOPT_CUSTOMREQUEST  =>"GET",        
		CURLOPT_POST           =>false,        
		CURLOPT_USERAGENT      => $user_agent, 
		CURLOPT_RETURNTRANSFER => true,     
		CURLOPT_HEADER         => false,    
		CURLOPT_FOLLOWLOCATION => true,     
		CURLOPT_ENCODING       => "",       
		CURLOPT_AUTOREFERER    => true,     
		CURLOPT_CONNECTTIMEOUT => 120,      
		CURLOPT_TIMEOUT        => 120,      
		CURLOPT_MAXREDIRS      => 10,       
	);
	$ch = curl_init( $sURL );
	curl_setopt_array( $ch, $options );
	$data = curl_exec( $ch );
	$code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
	if ($code == 200){
		$content = $data;
	} else {
		$content = "";
	}
	curl_close( $ch );
	return $content;
}
?>