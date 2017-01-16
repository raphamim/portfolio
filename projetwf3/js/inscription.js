$(document).ready(function(){

	//Déclaration des variables globales
	var userFirstName = $('#userFirstName');
	var userLastName = $('#userLastName');
	var userEmail = $('#userEmail');
	var userPseudo = $('#userPseudo');
	var divProfil = $('#profilUser');
	var divSkills = $('#skillsSection');
	var passSection = $('#passSection');
	var userPass = $('#userPass');
	var verifPass = $('#verifPass');
	var userValidation = $('#userValidation');
	var popItUpForm = $('#formResponse');
	var popItUpFormDiv = $('#formResponse div');

	/*Variable pour la validation du formulaire. A chaque fois qu'une condition
	est respecter on incrémente la variable de +1 et sinon on lui donne la valeur de 0*/
	var validationForm = 0;

	/*Fonction pour effacer le formulaire, le principe est de vider toutes
	les valeurs et de supprimer les attributs checked et selected*/
	var clearMyForm = function(){
		$('input').val('').removeAttr('checked').removeAttr('selected');
	}

	//Fonction pour afficher l'aide sur les input text
	var inputCheck = function(param1, param2){
		if(param1.val() < 5) {
			param1.next().html('Minimum 5 caractère pour votre ' + param2);
			validationForm = 0
		} else {
			param1.next().html('');
			validationForm++;
		}
	};

	/*Fonction pour vérifier le mot de passe, on vérifi si le mots de passe fait au minimum 5 caractère
	et on compare le passe et la vérification pour être sûr que les deux chmaps sont identique */
	var checkPass = function(){
		if(userPass.val() < 5){
			passSection.find('.passError').html('Minimum 5 caractère pour votre mot de passe');
			validationForm = 0
		} else if(userPass.val() != verifPass.val()){
				passSection.find('.passError').html('Les mots de passe doivent correspondre');
				validationForm = 0
		} else {
			passSection.find('.passError').html('');
			validationForm++;
		}
	};

	/*Fonction pour valider le formulaire*/
	$('#userValidation').click(function(event) {
		//Stopper le comportement normal du bouton submit
		event.preventDefault();

		//On lance les fonctions pour afficher l'aide avec en paramètre le input concerné et le message personnalisé
		inputCheck(userFirstName, 'prénom');
		inputCheck(userLastName, 'nom');
		inputCheck(userPseudo, 'pseudo');

		/*Vérification des radio, le principe et de vérifier la longueur des valeurs de chacun
		des éléments :checked, si la longueur est 0 alors aucun éléments n'est :checked*/
		//Déclaration des variables:checked des radio
		var userSkills = $('input:checkbox[name="skills"]:checked');
		var userProfil = $('input:radio[name="profil"]:checked');

		var verifCheckRadio = function(param1, param2, param3){
			if(param1.length == 0){
				param2.find('span').html('Vous devez choisir ' + param3);
				validationForm = 0
			} else {
				param2.find('span').html('');
				validationForm++;
			};
		}

		verifCheckRadio(userSkills, divSkills, 'au moins une compétence');
		verifCheckRadio(userProfil, divProfil, 'votre profil utilisateur');

		/*Vérification du select, le principe est d'initier une option de balse dont lavaleur est 'none'
		on vérifi ensuite que, si la varialble est égale à 'non', alors le select n'à pas été fait*/
		if ($('select').val() == 'none') {
			$('form').find('.genderError').html('Vous devez définir votre genre');
			validationForm = 0

		}else{
			$('form').find('.genderError').html('');
			validationForm++;
		};

		//Appel de la fonction pou vérifier le mot de passe
		checkPass();

		/*Vérification de l'adresse mail, le principe est d'utiliser une expression régulière pour vérifier que
		l'adresse mail contient bien les éléments nécessaires (tu text puis un arobase puis du texte puis un point puis du text*/
		//Expression régiluière (plus d'info https://goo.gl/3wSfd2)
		var re=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		//Condition if classique pour vérifier la longueur de la valeur
		if (userEmail.val() == 0) {
			$('form').find('.emailError').html('Vous devez indiquer votre adresse mail');
			validationForm = 0

		} else if(userEmail.val() =='' || re.test(userEmail.val())) {
			$('form').find('.emailError').html('');
			validationForm++;
			//Le else if permet de vérifier l'adresse avec l'expression régulière

		} else {
			$('form').find('.emailError').html('Votre adresse mail n\'est pas valide');
			validationForm = 0
		}

		/*Condition pour la validation finale du formulaire, si chacune des condition ont été respecter
		alors la variable de validationForm sera égale à 8 (car il y à 8 champs à remplir - sans la vérification du mot de passe)*/
		if (validationForm >= 8) {
			console.log(userFirstName.val());
			console.log(userLastName.val());
			console.log(userEmail.val());
			console.log($('select').val());
			console.log(userPseudo.val());
			console.log(userPass.val());
			console.log(userProfil.val());

			var userValidatedSkills = [];
			/*Récupération de l avaleur des checkboxs, le principe est d'utiliser la fonction each() de jQuery
			pour effectuer une boucle sur les éléments :checked des checkbox (https://api.jquery.com/each/)*/
			userSkills.each(function() {
		        console.log($(this).val());
		        userValidatedSkills.push($(this).val());
		    });


			/*Afficge des résultat dans un popIn, le principe est d'utiliser la fonction append() pour ajouter des
			balises dans la div de la balise #formResponse et à la fin, un fadeIn() sur #formResponse pour l'afficher*/
			var userValidatedGender;
		    if($('select').val() == 'woman'){
		    	userValidatedGender = 'Madame';
		    } else if ($('select').val() == 'man'){
		    	userValidatedGender = 'Monsieur';
		    } else {
		    	userValidatedGender = 'Truc';
		    }
		    popItUpFormDiv.append('<h2>Merci ' + userValidatedGender + ' ' + userFirstName.val() + ' ' + userLastName.val() + '</h2>');
		    popItUpFormDiv.append('<p><b>Profil :</b> ' + userProfil.val() + '</p>');
		    popItUpFormDiv.append('<p><b>Identifiant :</b> ' + userPseudo.val() + '</p>');
		    popItUpFormDiv.append('<p><b>Mot de passe :</b> ' + userPass.val() + '</p>');
		    popItUpFormDiv.append('<p><b>compétences :</b> ' + userValidatedSkills + '</p>');
		    popItUpForm.fadeIn();

		    //Appel de la fonction pour vider le formulaire
		    clearMyForm();

		    /*Fonction pour effacer #formResponse après 2 seconde, le principe est d'utiliser la fonction jquery
		    setTimeout() dans laquelle nous faisons un fadeOut sur #formResponse*/
		    setTimeout(function(){
			  popItUpForm.fadeOut();
			}, 2000);

		} else{
			//Le formulaire n'est pas validé, iln'y a rien à faire
		};
	});

});