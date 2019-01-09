



$(document).ready(function(){

    $( ".choix-tout" ).click(function() {
        $( ".projet-web" ).show();
        $( ".projet-c" ).show();
        $( ".projet-java" ).show();
        $( ".projet-non-visible" ).hide();
    });

    $( ".choix-web" ).click(function() {
        $( ".projet-web" ).show();
        $( ".projet-c" ).hide();
        $( ".projet-java" ).hide();
    });

    $( ".choix-java" ).click(function() {
        $( ".projet-java" ).show();
        $( ".projet-c" ).hide();
        $( ".projet-web" ).hide();
    });


    $( ".choix-c" ).click(function() {
        $( ".projet-c" ).show();
        $( ".projet-web" ).hide();
        $( ".projet-java" ).hide();
    });


   $( ".projet-non-visible" ).hide();

  

})




	
