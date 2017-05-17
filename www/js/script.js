// Ajout/supprime ingrédient recette ajout tab for ajout li
var soiree = ["rhum", "jus de citron", "vin rouge"]

function ajout_soiree() {
    texte = document.getElementById("soiree").value;
    soiree[soiree.length] = texte;
    console.log(soiree);
}

function supprime_soiree() {
    if (document.getElementsByTagName("li").length > 0) {
        liste.removeChild(liste.lastChild);
        var monTableau = ingredients;
        var dernier = monTableau.pop();
    }
}
function storageAvailable(type) {
	try {
		var storage = window[type],
			x = '__storage_test__';
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	}
	catch(e) {
		return false;
	}
}
if (storageAvailable($soiree)) {
	if(!localStorage.getItem('bgcolor')) {
        populateStorage();
} else {
  setStyles();
}
else {
	// Malheureusement, localStorage n'est pas disponible
}