const form = document.querySelector('#formulaire');
const inputNom = document.querySelector('#nom');
const listeDiv = document.querySelector('#liste');
const participantsDiv = document.querySelector('#participants');


// Etape 1 : je detecte le clic sur le bouton "Envoyer"
form.addEventListener('submit', function(event) {
	event.preventDefault(); // empêche le rechargement
	console.log('Je clic sur le bouton submit');
	
	// Etape 2 : je récupère le contenu du INPUT #nom
	const nom = inputNom.value.trim();
	console.log('Nom saisi :', nom);
	
	// Etape 3 : j'affiche la #liste si elle est masquée
	if (listeDiv.hidden) {
		console.log('🆕 Première participation, affichage de la liste');
		listeDiv.hidden = false;
	}
	
	// Etape 4 : j'ajoute le participant à la liste
	const ligne = document.createElement('div');
	ligne.textContent = '- ' + nom;
	participantsDiv.appendChild(ligne);
});