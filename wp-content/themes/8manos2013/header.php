<!DOCTYPE html>
<html  <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">

  <title><?php bloginfo('name'); ?><?php wp_title(' | '); ?></title>

  <meta name="description" content="<?php bloginfo('description'); ?>">

  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

  <link href='http://fonts.googleapis.com/css?family=Ubuntu:400,500&text=∞manos|Lato:400,700' rel='stylesheet' type='text/css'>
  <link href="<?php bloginfo('template_directory'); ?>/css/normalize.css" rel="stylesheet" media="all">
  <link href="<?php bloginfo('template_directory'); ?>/css/styles.css" rel="stylesheet" media="all">

  <!--[if lt IE 9]><script src="<?php bloginfo('template_directory'); ?>/js/html5shiv-printshiv.js" media="all"></script><![endif]-->

  <?php
    wp_enqueue_script('flexslider', get_bloginfo('template_directory').'/js/jquery.flexslider-min.js', array('jquery'), '2.2.2', true);
    wp_enqueue_script('freetile', get_bloginfo('template_directory').'/js/jquery.freetile.js', array('jquery'), '0.3.1', true);
    wp_enqueue_script('main', get_bloginfo('template_directory').'/js/main.js', false, null, true);
    wp_head();
  ?>
</head>
<body <?php body_class(); ?>>

  <header id="navigation" role="banner">

    <nav role="navigation">
      <?php wp_nav_menu(); ?>
    </nav>

    <div class="top_l">
      <h1 class="logo-text"> <a href="<?php bloginfo('url'); ?>"><?php bloginfo('name');?></a></h1>
    </div>

  </header>

  <!-- If you want to use an element as a wrapper, i.e. for styling only, then <div> is still the element to use -->
  <div class="wrap">
