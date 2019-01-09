<?php


$serveur ="";
$login = "";
$pass ='';
$name ="";

    $bdd = new PDO("mysql:host=$serveur;dbname=$name", $login, $pass);
	  $bdd-> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

          $requete = $bdd->prepare("SELECT * FROM message ");
          $requete-> execute();
          $resultat = $requete-> fetchall(PDO::FETCH_ASSOC);


          echo  json_encode($resultat);

 
?>
