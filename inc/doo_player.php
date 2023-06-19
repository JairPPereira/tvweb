<?php
/*
* ----------------------------------------------------
* @author: Doothemes
* @author URI: https://doothemes.com/
* @copyright: (c) 2021 Doothemes. All rights reserved
* ----------------------------------------------------
*
* @since 2.5.0
*
*/

class DooPlayer{
	// Attributes
	public $postmeta;

    /**
     * @since 2.5.0
     * @version 1.0
     */
	public function __construct(){

        // Main postmeta
        $this->postmeta = 'repeatable_fields';

        // Actions
        add_action('save_post', array($this,'save'));
        add_action('admin_init', array($this,'add_metabox'), 1);

        // Ajax Actions
        add_action('wp_ajax_doo_player_ajax', array($this,'ajax'));
    	add_action('wp_ajax_nopriv_doo_player_ajax', array($this,'ajax'));

		// Api Rest
		add_action('rest_api_init', array($this,'api_route'));
	}

    /**
     * @since 2.5.0
     * @version 1.0
     */
	public function languages(){
		return array(
			__d('---------')			=> null,
			__d('Chinese')				=> 'cn',
			__d('Denmark')				=> 'dk',
			__d('Dutch')				=> 'nl',
			__d('English')				=> 'en',
			__d('English British')		=> 'gb',
			__d('Egypt')				=> 'egt',
			__d('French')				=> 'fr',
			__d('German')				=> 'de',
			__d('Indonesian')			=> 'id',
			__d('Hindi')				=> 'in',
			__d('Italian')				=> 'it',
			__d('Japanese')				=> 'jp',
			__d('Korean')				=> 'kr',
			__d('Philippines')			=> 'ph',
			__d('Portuguese Portugal')	=> 'pt',
			__d('Portuguese Brazil')	=> 'br',
			__d('Polish')				=> 'pl',
			__d('Romanian')				=> 'td',
			__d('Scotland')				=> 'sco',
			__d('Spanish Spain')		=> 'es',
			__d('Spanish Mexico')		=> 'mx',
			__d('Spanish Argentina')	=> 'ar',
			__d('Spanish Peru')			=> 'pe',
			__d('Spanish Chile')		=> 'cl',
			__d('Spanish Colombia')		=> 'co',
			__d('Sweden')				=> 'se',
			__d('Turkish')				=> 'tr',
			__d('Rusian')				=> 'ru',
			__d('Vietnam')				=> 'vn'
		);
	}

	/**
     * @since 2.5.0
     * @version 1.0
     */
	public function types_player_options(){
		// Normal types
		$types['iframe']   = __d('URL Embed');
		$types['mp4']      = __d('URL MP4');
		//$types['gdrive']   = __d('ID or URL Google Drive');
		// Special types
		//if(!dooplay_get_option('playajax'))
		$types['dtshcode'] = __d('Shortcode or HTML');
		// Return Types
		return $types;
	}

    /**
     * @since 2.5.0
     * @version 1.0
     */
	public function type_player(){
		return array(
			__d('URL Iframe')			  => 'iframe',
			__d('URL MP4')				  => 'mp4',
			__d('ID or URL Google Drive') => 'gdrive',
			__d('Shortcode or HTML')	  => 'dtshcode',
		);
	}

    /**
     * @since 2.5.0
     * @version 1.0
     */
	public function add_metabox(){
		add_meta_box('repeatable-fields', __d('Video Player'), array($this,'view_metabox'), 'movies', 'normal', 'default');
		add_meta_box('repeatable-fields', __d('Video Player'), array($this,'view_metabox'), 'episodes', 'normal', 'default');
	}

    /**
     * @since 2.5.0
     * @version 1.0
     */
	public function view_metabox(){
        global $post;
		$postmneta = get_post_meta($post->ID, $this->postmeta, true);
		wp_nonce_field('doo_player_editor_nonce','doo_player_editor_nonce');
        require get_parent_theme_file_path('/inc/parts/player_editor.php');
	}

    /**
     * @since 2.5.0
     * @version 1.0
     */
	public function save($post_id){
		if(!isset($_POST['doo_player_editor_nonce']) || !wp_verify_nonce($_POST['doo_player_editor_nonce'], 'doo_player_editor_nonce')) return;
		if(defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
		if(!current_user_can('edit_post',$post_id)) return;
		// Meta data
		$antiguo = get_post_meta($post_id, $this->postmeta, true);
		$nuevo	 = array();
		$options = $this->type_player();
		$names	 = doo_isset($_POST,'name');
		$selects = doo_isset($_POST,'select');
		$idiomas = doo_isset($_POST,'idioma');
		$urls	 = doo_isset($_POST,'url');
		$count	 = count($names);
		// Serialized data
		for($i = 0; $i < $count; $i++){
			if ($names[$i] != ''):
				$nuevo[$i]['name'] = stripslashes(strip_tags($names[$i]));
				if(in_array($selects[$i], $options)) $nuevo[$i]['select'] = $selects[$i];
				else $nuevo[$i]['select'] = '';
				if(in_array($idiomas[$i], $idiomas)) $nuevo[$i]['idioma'] = $idiomas[$i];
				else $nuevo[$i]['idioma'] = '';
				if($urls[$i] == 'http://') $nuevo[$i]['url'] = '';
				else $nuevo[$i]['url'] = stripslashes($urls[$i]);
			endif;
		}
		if(!empty($nuevo) && $nuevo != $antiguo) update_post_meta($post_id, $this->postmeta, $nuevo);
		elseif (empty($nuevo) && $antiguo) delete_post_meta($post_id, $this->postmeta, $antiguo);
	}

    /**
     * @since 2.5.0
     * @version 1.0
     */
	public function ajax(){
		// Set URL IFRAME
		$url_iframe = '';
		// POST Data
        $post_id = doo_isset($_POST,'post');
        $post_ty = doo_isset($_POST,'type');
        $play_nm = doo_isset($_POST,'nume');
		// Verify data
        if($post_id && $play_nm){
            // Get post meta
            switch ($post_ty) {
                case 'movie':
                    $postmeta = doo_postmeta_movies($post_id);
					$streamalyUrl = $this->checkForMovie( $postmeta ); //aqui
                    break;
                case 'tv':
                    $postmeta = doo_postmeta_episodes($post_id);
					$streamalyUrl = $this->checkTv( $postmeta ); //aqui
                    break;
            }
            // Compose Player
            $player = doo_isset($postmeta,'players');
            $player = maybe_unserialize($player);
            // compose data
            $pag = doo_compose_pagelink('jwpage');
            $url = ($play_nm != 'trailer') ? $this->ajax_isset($player, ($play_nm-1),'url') : false;
            $typ = ($play_nm == 'trailer') ? 'trailer' : $this->ajax_isset($player, ($play_nm-1),'select');
            // verify data
			if ( ! empty( $play_nm ) && $play_nm == 'streamaly' ) { //aqui
		        $typ = 'streamaly'; //aqui
	        }//aqui
			$get_ul = "https://api.canaisvip.site/embed/?tmdb".$streamalyUrl;//aqui
            if($typ){
                switch($typ){
					case 'iframe':
						$url_iframe = $url;
						break;
					case 'mp4':
					case 'gdrive':
						$url_iframe = "{$pag}?source=".urlencode($url)."&id={$post_id}&type={$typ}";
						break;
					case 'streamaly': //aqui
						$url_iframe = $get_ul; //aqui
						break; //aqui	
					case 'dtshcode':
						$url_iframe = do_shortcode($url);
						break;
					case 'trailer':
						$url_iframe = doo_trailer_iframe_url_embed(doo_isset($postmeta,'youtube_id'), 1);
						break;
                }
            }
        }
        // End Action
        wp_send_json(array('embed_url' => $url_iframe,'type' => $typ));
	}

    /**
     * @since 2.5.0
     * @version 1.0
     */
	public function ajax_isset($data = array(), $n, $k){
		return (isset($data[$n][$k])) ? $data[$n][$k] : false;
	}

    /**
     * @since 2.5.0
     * @version 1.0
     */
    public static function viewer($post, $type, $players, $trailer, $size, $views, $ads = false, $image = false){
		// Set Ajax Player
		$ajax_player = dooplay_get_option('playajax');
		$play_pager  = doo_compose_pagelink('jwpage');
		$source_name = dooplay_get_option('playsource');
		$class_size  = ($size == 'regular') ? '' : ' bigger';
		$set_mode    = ($ajax_player == true) ? 'ajax_mode' : 'no_ajax';
		// Define size
        if($size == 'regular'){
            self::fake($image, 'regular');
        }
        if($players OR $trailer){
			if(dooplay_get_option('playsourcescrolling') == true){
				$ulclass = (!wp_is_mobile()) ? 'options scrolling' : 'options';
			}else{
				$ulclass = 'options';
			}
			$html ="<div class='dooplay_player'>";
            $html .="<div id='playcontainer' class='play{$class_size}'>";
            if(!empty($ads) && $ajax_player){
                $html .="<div class='asgdc'>{$ads}</div>";
            }
			if($ajax_player == true){
				$html .="<div id='dooplay_player_response'></div>";
			} else {
				$html .="<div id='dooplay_player_content'>";
				$html .="<div id='source-player-trailer' class='source-box'><div class='pframe'>".doo_trailer_iframe($trailer)."</div></div>";
				$num = 1;
				if(!empty($players) && is_array($players)){
	                foreach($players as $play){
						// Set Source
						$source = doo_isset($play,'url');
						// HTML Player
						$html .="<div id='source-player-{$num}' class='source-box'>";
						switch (doo_isset($play,'select')) {
							case 'mp4':
								$html .="<div class='pframe'><if"."rame class='metaframe rptss' src='{$play_pager}?source=".urlencode($source)."&id={$post}&type=mp4' frameborder='0' scrolling='no' allow='autoplay; encrypted-media' allowfullscreen></ifr"."ame></div>";
								break;
							case 'iframe':
								$html .="<div class='pframe'><if"."rame class='metaframe rptss' src='{$source}' frameborder='0' scrolling='no' allow='autoplay; encrypted-media' allowfullscreen></ifr"."ame></div>";
								break;
							case 'dtshcode':
								$html .= "<div class='pframe'>".do_shortcode($source)."</div>";
								break;
						}
						$html .="</div>";
						$num++;
					}
				}
				$html .="</div>";
			}
            $html .="</div>";
            $html .="<h2>".__d('Video Sources')." <span id='playernotice' data-text='{$views}'>{$views}</span> ";
			if(dooplay_get_option('report_form') == true)
				$html .="<a href='#' class='report-video-error'>".__d('Report Error')."</a>";
            $html .="</h2><div id='playeroptions' class='{$ulclass}'><ul id='playeroptionsul' class='{$set_mode}'>";
            if($trailer != false){
                $html .="<li id='player-option-trailer' class='dooplay_player_option' data-post='{$post}' data-type='{$type}' data-nume='trailer'>";
                $html .="<i class='fas fa-play-circle'></i>";
                $html .="<span class='title'>".__d('Watch trailer')."</span>";
				if($source_name == true)
                	$html .="<span class='server'>youtube.com</span>";
                $html .="<span class='flag'><i class='yt fab fa-youtube'></i></span>";
                $html .="<span class='loader'></span></li>";
            }
            $num = 1;
            if(!empty($players) && is_array($players)){
                foreach($players as $play){
				  if($play['select'] == "streamaly"){	
                    $html .="<li id='player-option-{$num}' class='dooplay_player_option' data-type='{$type}' data-post='{$post}' data-nume='streamaly'>";
                    $html .="<i class='fas fa-play-circle'></i>";
                    $html .="<span class='title'>{$play['name']}</span>";
					$html .="<span class='server'>".doo_compose_servername($play['url'], $play['select'])."</span>";
					if(isset($play['idioma'])) {
						$html .="<span class='flag'><img src='".DOO_URI."/assets/img/flags/br.png'></span>";
					}
					$html .="<span class='loader'></span></li>";continue;
				  }
				    $html .="<li id='player-option-{$num}' class='dooplay_player_option' data-type='{$type}' data-post='{$post}' data-nume='{$num}'>";
                    $html .="<i class='fas fa-play-circle'></i>";
                    $html .="<span class='title'>{$play['name']}</span>";
					if($source_name == true)
                    	$html .="<span class='server'>".doo_compose_servername($play['url'], $play['select'])."</span>";
                    if(!empty($play['idioma'])){
                        $html .="<span class='flag'><img src='".DOO_URI."/assets/img/flags/{$play['idioma']}.png'></span>";
                    }
                    $html .="<span class='loader'></span></li>";
                    $num++;
                }
            }
            $html .="</ul></div>";
            $html .="</div>";
            echo $html;
        }
    }

    /**
     * @since 2.5.0
     * @version 1.0
     */
    public static function viewer_big($size, $ads = false, $image = false){
        if($size === 'bigger'){
            self::fake($image, 'bigger');
            $html ="<div class='dooplay_player'>";
            $html .="<div id='dooplay_player_big_content'></div>";
            $html .="</div>";
            echo $html;
        }
    }

    /**
     * @since 2.5.0
     * @version 1.0
     */
    private static function fake($image, $class = 'regular'){
        $autolo = dooplay_get_option('playautoload');
        $active = dooplay_get_option('fakeplayer');
        $pimage = isset($image) ? $image : dooplay_get_option('fakebackdrop');
        $flinks = self::fake_links();
        if($autolo != true && $active == true && $flinks != false){
            $html ="<div id='fakeplayer' class='fakeplayer {$class}'>";
            $html .="<a id='clickfakeplayer' rel='nofollow' href='{$flinks}' target='_blank'>";
            $html .="<div class='playbox'>";
            if(doo_is_true('fakeoptions','qua')) $html .="<span class='quality'>HD</span>";
            if(doo_is_true('fakeoptions','pla')) $html .="<span class='playbtm'><img src='".DOO_URI."/assets/img/play.svg'/></span>";
            if($pimage) $html .="<img class='cover' src='{$pimage}'/>";
            $html .="<section>";
            $html .="<div class='progressbar'></div>";
            $html .="<div class='controls'><div class='box'>";
            $html .="<i class='fas fa-play-circle'></i>";
            if(doo_is_true('fakeoptions','ads')) $html .="<i class='fas fa-dollar-sign flashit'></i> <small>".__d('Advertisement')."</small>";
            $html .="<i class='fas fa-expand right'></i>";
            $html .="<i class='fas fa-lightbulb right'></i>";
            $html .="</div></div></section>";
            $html .="</div></a></div>";
            // Compose Fake Player
            echo $html;
        }
    }

    /**
     * @since 2.5.0
     * @version 1.0
     */
    private static function fake_links(){
        $flinks = dooplay_get_option('fakeplayerlinks');
        if(!empty($flinks) && is_array($flinks)){
            $numb = array_rand($flinks);
            $link = $flinks[$numb]['link'];
            return esc_url($link);
        } else {
            return false;
        }
    }

	/**
     * @since 2.5.0
     * @version 1.0
     */
	public function api_route(){
		register_rest_route('dooplayer/v2','/(?P<id>\d+)/(?P<type>[a-zA-Z0-9-]+)/(?P<source>[a-zA-Z0-9-]+)',array(
			'methods'  			  => WP_REST_Server::READABLE,
			'callback'            => array($this,'api_action'),
			'permission_callback' => '__return_true',
		));
	}

	/**
     * @since 2.5.0
     * @version 1.0
     */
	public function api_action($data){
		// Verify Method
		if(dooplay_get_option('playajaxmethod') !== 'wp_json') return null;
		// Compose Data
		$post_id   = doo_isset($data,'id');
		$post_type = doo_isset($data,'type');
		$post_numb = doo_isset($data,'source');
		// Switching post_type
		switch ($post_type) {
			case 'movie':
				$postmeta = doo_postmeta_movies($post_id);
				break;
			case 'tv':
				$postmeta = doo_postmeta_episodes($post_id);
				break;
		}
		// Compose Player
		$player = doo_isset($postmeta,'players');
		$player = maybe_unserialize($player);
		// Compose more data
		$pag = doo_compose_pagelink('jwpage');
		$url = ($post_numb != 'trailer') ? $this->ajax_isset($player, ($post_numb-1),'url') : false;
		$typ = ($post_numb == 'trailer') ? 'trailer' : $this->ajax_isset($player, ($post_numb-1),'select');
		// Filter types
		switch($typ) {
			case 'iframe':
				$url_iframe = $url;
				break;
			case 'mp4':
			case 'gdrive':
				$url_iframe = "{$pag}?source=".urlencode($url)."&id={$post_id}&type={$typ}";
				break;
			case 'dtshcode':
				$url_iframe = do_shortcode($url);
				break;
			case 'trailer':
				$url_iframe = doo_trailer_iframe_url_embed(doo_isset($postmeta,'youtube_id'), 1);
				break;
		}
			// The Response
		return array('embed_url' => $url_iframe, 'type' => $typ);
	}

    /**
     * @since 2.5.0
     * @version 1.0
     */
	public function __destruct(){
		return false;
	}
	public function checkTv( $post ) { //aqui
		if ( ! empty( $post['temporada'] ) ) {  //aqui
			$ids          = $post['ids'];  //aqui
			$streamaly = '='.$ids.'/'.$post['temporada'].'/'.$post['episodio'].'' ;  //aqui
		}  //aqui
		return $streamaly;  //aqui
	}
	
// versao 2	 checkForMovie

public function checkForMovie($post) {
    $url = 'https://api.canaisvip.site/embed/?tmdb=';
    $idtmdb = $post['idtmdb'];
    $ids = $post['ids'];

    $response_tmdb = file_get_contents($url . $idtmdb);
    $response_ids = file_get_contents($url . $ids);

    $error_message = 'Não foi possível obter a URL do vídeo';

    if (strpos($response_tmdb, $error_message) !== false && strpos($response_ids, $error_message) !== false) {
        // Ambas as opções contêm o erro, não há opção válida
        return null;
    } else if (strpos($response_tmdb, $error_message) !== false) {
        // A opção 'idtmdb' contém o erro, redireciona para 'ids'
        return '=' . $ids;
    } else if (strpos($response_ids, $error_message) !== false) {
        // A opção 'ids' contém o erro, redireciona para 'idtmdb'
        return '=' . $idtmdb;
    } else {
        // Nenhuma opção contém o erro, redireciona para 'idtmdb'
        return '=' . $idtmdb;
    }
}



// versao 1 checkForMovie
	
// 	public function checkForMovie( $post ) {  //aqui 
// 		return '='.$post['ids']; //aqui 
// 	}  //aqui
}
new DooPlayer;
