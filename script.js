// Créez une fonction renderAnimaux qui ne prend aucun paramètre. Cette fonction doit
// ajouter chaque animal de la liste, à la balise <ul> du fichier HTML

animaux = [];

function addAnimal (name,country) {
	animal = {
		'animalName': name,
		'animalCountry':country
	}
	animaux.push(animal)
	console.log(animaux)
}

$(".ajout_animal").on("click", function(){
  var name = $('.name_input').val();
  var country = $('.country_input').val();
  addAnimal(name,country)
});


function renderAnimaux () {
	
}



