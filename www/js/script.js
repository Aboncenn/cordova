// Ajout/supprime ingrédient recette ajout tab for ajout li
var ingredients = ["rhum", "jus de citron", "vin rouge"]
for (var i = 0; i < ingredients.length; i++) {
    console.log(ingredients[i]);
    liste = document.getElementById("ingredient1");
    nouveauli = document.createElement("li");
    nouveauli.innerHTML = ingredients[i];
    liste.appendChild(nouveauli);
}
var recette = [];
var recette_2 = [];
var selection = [];

function ajout_recette() {
    liste = document.getElementById("recette1");
    texte = document.getElementById("recette").value;
    console.log(liste);
    console.log(texte);
}

function supprime_recette() {
    liste = document.getElementById("recette1");
    if (document.getElementsByTagName("li").length > 0) {
        liste.removeChild(liste.lastChild);
        var monTableau = recette;
        var dernier = monTableau.pop();
    }
}

function ajout_ingredient() {
    liste = document.getElementById("ingredient1");
    texte = document.getElementById("igredients").value;
    ingredients[ingredients.length] = texte;
    console.log(ingredients);
    nouveauli = document.createElement("li");
    nouveauli.innerHTML = texte;
    liste.appendChild(nouveauli);
    var x = document.getElementById("Select");
    var option = document.createElement("option");
    option.innerHTML = texte;
    x.add(option);
}

function supprime_ingredient() {
    liste = document.getElementById("ingredient1");
    if (document.getElementsByTagName("li").length > 0) {
        liste.removeChild(liste.lastChild);
        var monTableau = ingredients;
        var dernier = monTableau.pop();
    }
}
var ingredients_recette = [];

function add_selection() {
    liste = document.getElementById("selection1");
    texte = document.getElementById("Select").value;
    console.log(liste);
    console.log(texte);
    ingredients_recette[ingredients_recette.length] = texte;
    console.log(ingredients_recette);
    console.log(ingredients_recette.length);
    nouveauli = document.createElement("li");
    nouveauli.innerHTML = texte;
    liste.appendChild(nouveauli);
}
var recettes = [];

function Select() {
    for (var a = 0; a < ingredients.length; a++) {
        var x = document.getElementById("Select");
        var option = document.createElement("option");
        option.innerHTML = ingredients[a];
        x.add(option);
    }
}
Select();

function delete_selection() {
    liste = document.getElementById("selection1");
    if (document.getElementsByTagName("li").length > 0) {
        liste.removeChild(liste.lastChild);
    }
    var monTableau = selection;
    var dernier = monTableau.pop();
}

function createRecette() {
    texte = document.getElementById("recette").value;
    recettes[recettes.length] = [texte, ingredients_recette];
    console.log(recettes);
    liste = document.getElementById("listerecette");
    console.log(liste);
    nouveauli = document.createElement("li");
    var HTML = "<h3>" + texte + "</h3>";
    for (var a = 0; a < ingredients_recette.length; a++) {
        console.log(ingredients_recette[a]);
        HTML = HTML + "<br> <p>" + ingredients_recette[a] + "</p>";
    }
    nouveauli.innerHTML = HTML + "<br> <br> <br>";
    liste.appendChild(nouveauli);
    document.getElementById("selection1").innerHTML = "";
    ingredients_recette = [];
}