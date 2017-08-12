<?php

// PPM Quickstart theme supports
if ( ! function_exists( 'ppm_quickstart_theme_supports' ) ) :
function ppm_quickstart_theme_supports(){
    
    load_theme_textdomain( 'ppm-quickstart', get_template_directory() . '/languages' );
    
    add_theme_support( 'post-thumbnails' );
    add_image_size( 'post-image', 400, 400, true );
    
	register_nav_menus( array(
		'primary'   => __( 'Primary menu', 'ppm-quickstart' ),
	) );    
}
endif;
add_action('after_setup_theme', 'ppm_quickstart_theme_supports');


// Calling Theme files
function ppm_quickstart_theme_files(){
    
    wp_enqueue_style( 'ppm-quickstart-theme-bootstrap', get_theme_file_uri('/css/bootstrap.min.css'), array(), '3.1.0', 'all');
    wp_enqueue_style( 'ppm-quickstart-theme-font-awesome', get_theme_file_uri('/css/font-awesome.css'), array(), '3.1.0', 'all');
    wp_enqueue_style( 'ppm-quickstart-theme-custom-fonts', get_theme_file_uri('/css/custom-fonts.css'), array(), '3.1.0', 'all');
    wp_enqueue_style( 'ppm-quickstart-theme-animate', get_theme_file_uri('/css/animate.css'), array(), '3.1.0', 'all');
    wp_enqueue_style( 'ppm-quickstart-theme-fancybox', get_theme_file_uri('/css/fancybox/jquery.fancybox.css'), array(), '2.1.0', 'all' );
    wp_enqueue_style( 'ppm-quickstart-theme-jcarousel', get_theme_file_uri('/css/jcarousel.css'), array(), '2.0', 'all' );
    wp_enqueue_style( 'ppm-quickstart-theme-flexslider', get_theme_file_uri('/css/flexslider.css'),array(), '2.0', 'all' );
    wp_enqueue_style( 'ppm-quickstart-theme-overwrite', get_theme_file_uri('/css/overwrite.css'),array(), '2.0', 'all' );
    wp_enqueue_style( 'ppm-quickstart-theme-style', get_stylesheet_uri() );
    wp_enqueue_style( 'ppm-quickstart-theme-default', get_theme_file_uri('/skins/default.css'), array(), '1.0', 'all' );

    
    wp_enqueue_script('jquery');

    wp_enqueue_script( 'ppm-quickstart-easing-js', get_theme_file_uri('/js/jquery.easing.1.3.js'), array('jquery'), '1.3', true );
    wp_enqueue_script( 'ppm-quickstart-bootstrap-js', get_theme_file_uri('/js/bootstrap.min.js'), array('jquery'), '3.1.0', true );
    wp_enqueue_script( 'ppm-quickstart-fancybox-js', get_theme_file_uri('/js/jquery.fancybox.pack.js'), array('jquery'), '2.1.4', true );
    wp_enqueue_script( 'ppm-quickstart-fancybox-media-js', get_theme_file_uri('/js/jquery.fancybox-media.js'), array('jquery'), '2.1.4', true );
    wp_enqueue_script( 'ppm-quickstart-prettify-js', get_theme_file_uri('/js/google-code-prettify/prettify.js'), array('jquery'), '20120206', true );
    wp_enqueue_script( 'ppm-quickstart-quicksand-js', get_theme_file_uri('/js/portfolio/jquery.quicksand.js'), array('jquery'), '1.2.2', true );
    wp_enqueue_script( 'ppm-quickstart-setting-js', get_theme_file_uri('/js/portfolio/setting.js'), array('jquery'), '20120206', true );
    wp_enqueue_script( 'ppm-quickstart-flexslider-js', get_theme_file_uri('/js/jquery.flexslider.js'), array('jquery'), '2.0', true );
    wp_enqueue_script( 'ppm-quickstart-animate-js', get_theme_file_uri('/js/animate.js'), array('jquery'), '1.0', true );
    wp_enqueue_script( 'ppm-quickstart-custom-js', get_theme_file_uri('/js/custom.js'), array('jquery'), '1.0', true );
    
    
    
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action('wp_enqueue_scripts', 'ppm_quickstart_theme_files'); 


function ppm_quickstart_ie_compitable_elements(){
    ?>
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <?php //var_dump(cs_get_option('favicon')); ?>
    
    <?php if(cs_get_option('favicon')) : ?>
    <link rel="shortcut icon" type="image/png" href="<?php echo wp_get_attachment_image_src(cs_get_option('favicon'), 'thumbnail')[0]; ?>"/>
    <?php endif; ?>
    
    <?php
}
add_action('wp_head', 'ppm_quickstart_ie_compitable_elements'); 


// Includes
include_once('inc/defult_support.php');
include_once('inc/widgets.php');
include_once('inc/shortcodes.php');
include_once('inc/custom-posts.php');
require_once dirname( __FILE__ ) .'/inc/cs-framework/cs-framework.php';

add_filter('widget_text', 'do_shortcode');

?>