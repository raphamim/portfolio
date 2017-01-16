$(document).ready(function(){
	//Déclaraiton de toutes les variables
	var userFirstName = $('#userFirstName');
	var userLastName = $('#userLastName');
	var userEmail = $('#userEmail');
	var userMessage = $('#userMessage');
	var userValidation = $('#userValidation');
	var userPaysVal = $('#userCountry').val();
	var userPays = $('#userCountry');
	var userGenderVal = $('input:radio[name="gender"]:checked').length;
	var sectionGender = $('#genderSection');
	var userSkillsVal = $('#skillsSection input:checked').length;
	var sectionSkills = $('#skillsSection');


	//Fonction pour valider le formulaire
	userValidation.click(function(event) {
		/*Stopper le comportement normal du bouton submit*/
		event.preventDefault();

		var validatedForm = true;

		if($('#userFirstName').val().length <= 5){
			userFirstName.next('.error').text('Au moins 5 caractères pour le prénom').fadeIn();
			validatedForm = false;
		} else {
			userFirstName.next('.error').text('').fadeOut();
		}

		if($('#userLastName').val().length <= 5){
			userLastName.next('.error').text('Au moins 5 caractères pour le nom').fadeIn();
			validatedForm = false;
		} else {
			userFirstName.next('.error').text('').fadeOut();
		}

		if($('#userEmail').val().length <= 5){
			userEmail.next('.error').text('Veuillez indiquer une adresse mail').fadeIn();
			validatedForm = false;
		} else {
			userEmail.next('.error').text('').fadeOut();
		}

		if(userPaysVal == ''){
			userPays.next('.error').text('Choisissez votre pays').fadeIn();
			validatedForm = false;
		} else {
			userPays.next('.error').text('').fadeOut();
		}

		if($('input:radio[name="gender"]:checked').length == 0){
			sectionGender.find('.error').text('Veuillez indiquer votre genre').fadeIn();
			validatedForm = false;
		} else {
			sectionGender.find('.error').text('').fadeOut();
		}

		if($('#skillsSection input:checked').length == 0){
			sectionSkills.find('.error').text('Veuillez indiquer votre genre').fadeIn();
			validatedForm = false;
		} else {;
			sectionSkills.find('.error').text('').fadeOut();
		}

		if($('#userMessage').val().length <= 5){
			userMessage.next('.error').text('Au moins 5 caractères pour le message').fadeIn();
			validatedForm = false;
		} else {
			userMessage.next('.error').text('').fadeOut();
		}

		if(validatedForm == true) {
			console.log('Prénom : ' + $('#userFirstName').val());
			console.log('Nom : ' + $('#userLastName').val());
			console.log('Email : ' + $('#userEmail').val());
			console.log('Pays : ' + $('#userCountry').val());

			for(var i=0; i < $('input:checkbox[name="skills"]:checked').length; i++){
				console.log($('input:checkbox[name="skills"]:checked')[i]);
			};

			console.log('Genre : ' + $('input:radio[name="gender"]:checked').val());
			console.log('Message : ' + $('#userMessage').val());

		}else{

		}

	});

});