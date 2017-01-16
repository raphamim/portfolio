$(document).ready(function(){

	//Fonction pour créer un nouveau commentaire
	function addNewComment(param1, param2, param3){
		$('#readComments').append('<article class="newComment"><p>'+param1+'</p><p><i class="fa fa-comment"></i> Comment by : '+param2+' <span><a href="mailto:'+param3+'" target="_blank">'+param3+'</a></span></p></article>');
		$('.newComment').fadeIn();
	};

	//Manipuler les données d'un formulaire
	/*Fonctions d'aide pour le formulaire*/
	function helpForm() {
		$('#helpForm').html('Aide : minimum 5 caractères').css('color', 'white');
	};
	function emptyHelp() {
		$('#helpForm').text('');
	}

	/*Afficher ou désafficher le messaged 'aide*/
	$('#userName').on('focus', helpForm);
	$('#userName').on('blur', emptyHelp);
	$('#userEmail').on('focus', helpForm);
	$('#userEmail').on('blur', emptyHelp);
	$('#message').on('focus', helpForm);
	$('#message').on('blur', emptyHelp);

	/*Fonction pour valider le formulaire*/
	$('#validation').click(function(event) {
		/*Stopper le comportement normal du bouton submit*/
		event.preventDefault();
		var userName = $('#userName').val();
		var userEmail = $('#userEmail').val();
		var message = $('#message').val();

		/*Condition if qui vérifie le nombre de caractères des deux inputs*/
		if (userName.length >= 5  && userEmail.length >= 5  && message.length >= 5) {
			//ajouter un nouveau commentaire
			//Attendre avec setTimeout
			setTimeout(function(){
				addNewComment(message, userName, userEmail);
				//Vider les champs
				$('#userName').val('');
				$('#userEmail').val('');
				$('#message').val('');
			}, 200);



		} else {
			$('#helpForm').html("Vous devez remplir tous les champs du formulaire !").css('color', 'white');
		}
	});

});