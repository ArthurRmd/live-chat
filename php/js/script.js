



$(document).ready(function(){

	var menuAffiche = false;
	

	window.addEventListener('scroll', function(e) {

		if(!menuAffiche){
			if (window.scrollY > (this.screen.availHeight * 0.12) ){
				$( "nav" ).addClass( "bg-dark" );
				$( "nav" ).removeClass( "navbar-grande" );
				$( "nav" ).addClass( "navbar-petite" ); 
								
			}
			else {
				$( "nav" ).removeClass( "bg-dark" );
				$( "nav" ).removeClass( "navbar-petite" );
				$( "nav" ).addClass( "navbar-grande" );
			}
		}
		
		// else if (window.scrollY < (this.screen.availHeight * 0.12){
		// 	$( "nav" ).removeClass( "bg-dark" );
		// }
	});


	$('.btn-menu ').click(function(){
		
		// alert(window.scrollY);
		// alert((window.screen.availHeight * 0.12))

		if(!menuAffiche){
			$( "nav" ).addClass( "bg-dark" );
			menuAffiche = true;
		}
		else if (window.scrollY < (window.screen.availHeight * 0.12) )  {
			$( "nav" ).removeClass( "bg-dark" );
			menuAffiche = false;
		}
		else {
			$( "nav" ).removeClass( "navbar-grande" );
			$( "nav" ).addClass( "navbar-petite" );
			menuAffiche = false;
		}
		
	})






})




	
