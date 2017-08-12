<?php

function moderna_theme_menus(){
	register_nav_menus(array(
		'main_menu' => 'main menu'
		));
}

add_action('init','moderna_theme_menus');

function moderna_fallback_menu(){
	echo '<ul class="nav navbar-nav">';
	if
}









?>