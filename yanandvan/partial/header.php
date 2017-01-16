<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title><?= $title ?></title>

    <!-- Bootstrap Core CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css">

    <!-- Custom Fonts -->
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css" type="text/css">

    <!-- Plugin CSS -->
    <link rel="stylesheet" href="css/animate.min.css" type="text/css">

    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/creative.css" type="text/css">

    <!-- Style CSS -->
    <link rel="stylesheet" href="css/style.css" type="text/css">
    <!-- avis CSS -->
    <link rel="stylesheet" href="css/avis.css" type="text/css">

    <link href="css/fotorama.css" rel="stylesheet">
    <link href="css/carousel.css" rel="stylesheet">
    <link href="css/salons.css" rel="stylesheet">
    <link href="css/prestacreations.css" rel="stylesheet">

    <!--IPHONE -->
    <link rel="stylesheet" media="screen and (max-width: 390px)" href="css/responsive.css"/>
    <link rel="stylesheet" media="screen and (min-width: 768px)" href="css/responsive2.css"/>

    <!--Tablette -->
    <link rel="stylesheet" media="screen and (max-width: 890px)" href="css/tablette.css"/>

    <!--Grand écran -->
    <link rel="stylesheet" media="screen and (min-width: 1600px)" href="css/expansive.css"/>
    <!--Extra Grand écran -->
    <link rel="stylesheet" media="screen and (min-width: 2000px)" href="css/extraexpansive.css"/>
    
    
    

            

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body id="page-top">
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v2.5&appId=788347251311797";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

    <nav id="mainNav" class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid" id="header-move">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand page-scroll" href="index.php"><img src="img/logo.jpg" alt="logo yanandvan"></a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a class="page-scroll" href="index.php" id="indexlink">Accueil</a>
                    </li>
                    <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="salons">Salons <span class="caret"></span></a>               
              <ul class="dropdown-menu" role="menu" >
                <li><a href="paris_15.php">Yan&Van 15ème</a></li>
                <li><a href="paris_10.php">Yan&Van 10ème</a></li>
                <li><a href="paris_19.php">Yan&Van 19ème</a></li>
                <li><a href="paris_11.php">Yan&Van 11ème</a></li>
              </ul>                
            </li>
                <li id="saloon" ><a href="paris_15.php">Yan&Van 15ème</a></li>
                <li id="saloon2" ><a href="paris_10.php">Yan&Van 10ème</a></li>
                <li id="saloon3" ><a href="paris_19.php">Yan&Van 19ème</a></li>

                    <!--<li>
                        <a class="page-scroll" href="#services">salons</a>
                    </li>-->
                    <li>
                        <a class="page-scroll" href="prestations.php">Prestations</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="collections.php">Creations</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>