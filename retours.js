//Rappel du fonctionnement classique github / fork / clone / push / pull request
let aRevoir = "https://ue12-p23-git.readthedocs.io/en/main/4-01-git-for-homework-nb.html#devoir-avec-starter-repo"

/**
 * En général, y a du bon ! (Même si parfois j'ai eu l'impression de voir des copier-coller de code)
 */

/**
 * Pas de js dans le html mais des event sur les entités html
 */

//    < button onclick = "appendToDisplay('7')" > 7 < /button>


/**
 * Parfois y a des répétitions de code qui peuvent facilement être évitées
 */

if (!action) {
    if (displayedNum === '0') {
        display.textContent = keyContent
        calculator.dataset.previousKey = 'number'
    }
}
if (!action) {
    if (displayedNum === '0') {
        display.textContent = keyContent
    } else {
        display.textContent = displayedNum + keyContent
    }
}

/**
 * Ou encore
 */

if (action === 'add') {
    display.dataset.operator = 'add';
    display.dataset.firstValue = displayedNum;
    display.textContent = " "
}

// On fait pareil pour les autres opérations !
if (action === 'subtract') {
    display.dataset.operator = 'subtract';
    display.dataset.firstValue = displayedNum;
    display.textContent = " "
}

if (action === 'multiply') {
    display.dataset.operator = 'multiply';
    display.dataset.firstValue = displayedNum;
    display.textContent = " "
}

if (action === 'divide') {
    display.dataset.operator = 'divide';
    display.dataset.firstValue = displayedNum;
    display.textContent = " "
}

/**
 * Plus difficile
 */


if (display.dataset.operator === 'add') {
    const result = Number(displayedNum) + Number(display.dataset.firstValue)
    display.textContent = result;
}

if (display.dataset.operator === 'subtract') {
    const result = Number(display.dataset.firstValue) - Number(displayedNum)
    display.textContent = result;
}

if (display.dataset.operator === 'multiply') {
    const result = Number(display.dataset.firstValue) * Number(displayedNum)
    display.textContent = result;
}

if (display.dataset.operator === 'divide') {
    const result = Number(display.dataset.firstValue) / Number(displayedNum)
    display.textContent = result;
}

/**
 * Taille des blocs > 175 lignes : penser à splitter dans des fonctions bien nommées - en plus ça permet de documenter
 * le code sans avoir besoin de commentaires. Par exemple :
 * https://github.com/Lindpy/ue22-p23-web-calculator/blob/main/subject/script.js
 */


/**
 * Parfois c'est plus facile de concaténer des string que des calculer des puissances de dix
 */

result += stack.pop * Math.pow(10, i);

/**
 * De l'usage des data-set <button class="key--operator" data-action="add">+</button>
 * =>
 */

calculator.dataset.operator = action


/**
 * On écoute habituellement soit le load de la window, soit le DOMContentLoaded, mais pas les deux.
 */

window.addEventListener("load", () => {
    let buttons = document.querySelectorAll("button");
    //...
})

document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.calculator__display');
    const keys = document.querySelector('.calculator__keys');
    //...
})

/**
 * Mais en tous cas jamais dans le js sans eventListener
 */

const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = calculator.querySelector('.calculator__display');
let ancien = null;
let opérateur = null;
let opération = false;

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
//...
    }
})


/**
 * La notion de pile (ici à deux étages) n'est pas très loin :)
 */

if (operateur === "+") {
    screen.textContent = Number(valeur1) + Number(valeur2);
    valeur1 = null;
    valeur2 = null;
    operateur = null; //réinitialisation des variables après chaque calcul
    //(NB : on n'a alors pas de mémoire/historique accessible mais ça serait une étape suivante)
    //...
}


    /**
     * Factoriser les fonctions qui se ressemblent beaucoup beaucoup beaucoup, surtout quand y en a dix
     */

//cf code_repété.js

/**
 * Hey, on va à la ligne (et en extrait dans une fonction)
 */

else if (bouton.textContent === "0" && display.textContent === "0") {
    premier_click = false;
    ecran_zero = true;
    console.log("ecran_zero");
    console.log(display.textContent);
} else if (premier_click) {
    console.log("premier click");
    display.textContent = bouton.textContent;
    expression += bouton.textContent;
    premier_click = false;
} else if (bouton.textContent === "=") {
    display.textContent = eval(expression);
    expression = "";
    premier_click = true;
}

//...
{
    if (bouton.textContent === "0" && display.textContent === "0") {
        //...
    } else {
        {
            if (display.textContent === "0" && !ecran_zero) {
                display.textContent = "";
                console.log("j'ai effacé le 0");
            }
            display.textContent += bouton.textContent;
            console.log(display.textContent);
            expression += bouton.textContent;
        }

        console.log(expression)
    }
}


/**
 * Comment passer des paramètres à des call-backs ? Et pourquoi préférer passer une fonction anonyme triviale ?
 */

{
    //...
    for (let button of buttons) {
        button.addEventListener("click", printTargetContentToConsole)
    }
}

{
    //...
    for (let button of buttons) {
        button.addEventListener("click", () => printTargetContentToConsole())
    }
}

{
    //...
    for (let button of buttons) {
        button.addEventListener("click", (event) => printTargetContentToConsole(event))
    }
}

{
    //...
    let aVariable = "initial_value"
    for (let button of buttons) {
        button.addEventListener("click", (event) => printTargetContentToConsole(event, button, aVariable))
    }
    //Et "event.target" peut être différent de "button" (cf "bubbling")
}
//(Cf exemple 2 du cours)
//(Cf cours partie "closure")

/**
 * Nommage
 */
function func(event) {
    a = event.target.textContent;
    // à renommer en input par exemple ?
}

function changeNumberToDisplay(event) {
//... qui est devenue la fonction qui fait tout
}

//=> renommer en "processInput" via "Renommer le symbole", ou F2, qui tentera de le renommer partout.

let bool = false

//=> Choisir un nom qui donne la sémantique du booléen. Et si ça ne suffit pas, mettre un commentaire.

/**
 * Convention d'écriture
 */

//Les Majuscules En Tête De Mot Sont Réservées Aux Classes.
//SAUF POUR LES CONSTANTES QUI SONT COMPLETEMENT EN MAJUSCULES
function Addition(x, L) {
    //...
}

//=>renommer en addition

//[Opinion] On met des espaces
for (let button of buttons) {
    //...
}

for (let button of buttons) {
    //...
}

//On fait un peu attention à l'indentation, aux sauts de ligne (ni trop, ni pas assez). Ici pas assez. parfois trop, notamment avant des "}"

//Bof :
function func(event) {
    if (screen.textContent == '0') {
        screen.textContent = event.target.textContent
    } else {
        screen.textContent += event.target.textContent
    }
}

//Mieux :
function func(event) {
    if (screen.textContent == '0') {
        screen.textContent = event.target.textContent
    } else {
        screen.textContent += event.target.textContent
    }
}

// Et pas de blocs vides !
if (affichage.textContent == 0) {
} else {
    affichage.textContent += '0'
}


/**
 * Ne pas se forcer à initialiser, quitte à initialiser à undefined (je sais, c'est pas réglo, mais c'est js)
 */

//Bof :
let operande = "°";

//Mieux
let operande = undefined;


/**
 * YAGNI
 */

//[Opinion] Utilisation d'une liste, on sent que c'est intéressant, mais pour l'instant c'est une liste qui n'aura jamais que deux entrées.

/**
 * "DRY => SRP" : Factorisation => séparation des responsabilités (ici "traitement" vs "affichage")
 * Mais c'était vraiment bien déjà d'avoir séparé en petites fonctions
 */


//si qqch apparait dix fois => variable locale avec le bon nom
document.getElementsByClassName("calculator__display")[0]

function type_number(number) {
    let scr = document.getElementById("calculator__display");
    //...
    scr.textContent = "something computed"
}

function operator(op) {
    let scr = document.getElementById("calculator__display");
    //...
    scr.textContent = "something else computed"
}

function calculate() {
    let scr = document.getElementById("calculator__display");
    //...
    scr.textContent = "something else again computed"
}

//=> On factorise tout dans une fonction d'affichage qu'on appelle ensuite dans chaque méthode
function printToScreen(textContent) {
    document.getElementById("calculator__display").textContent = textContent;
}

function type_number(number) {
    //...
    printToScreen("something computed")
}

/**
 * Usage du data-* : on peut accéder directement a un attribut dans un tag en l'appelant data-xxx. Ex
 * <div data-qqch="a value"> => divElement.data.qqch (où divElement = document.getElementBy...(...))
 */

let action = button.dataset.action;

var element = document.body.querySelector('[data-qqch="123456789"]')

/**
 * Et ça peut éviter d'identifier explicitement en plus les touches
 */

// <button id="+" className="key--operator" data-action="add">+</button>
// <button id="moins" className="key--operator" data-action="subtract">-</button>
// <button id="x" className="key--operator" data-action="multiply">&times;</button>
// <button id="/" className="key--operator" data-action="divide">÷</button>

/**
 * Un ou une bonne développeuse logicielle est une développeuse flemmarde ;)
 * => utilisation de eval qui essaye d'évaluer la chaine de caractère
 */

return eval(expr);

console.log(eval("1+2"));
// 3
console.log(eval("1+2*3"));
// 7
console.log(eval("2*Math.PI+Math.exp(5)"));
// 154.6963444097562

/**
 *  Quand c'est fastidueux, y a sûrement moyen de faire plus court (et souvent avec plus de sens)
 */

if ((touche == "0") || (touche == "1") || (touche == "2") || (touche == "3") || (touche == "4") ||
    (touche == "5") || (touche == "6") || (touche == "7") || (touche == "8") || (touche == "9")) {
    //...
}
// => mettre un attribut, voire un attribut data-, une classe... quelque chose qui permet de signifier que c'est une touche,
// et qui permet en même temps de les cibler

// mais sinon y a aussi ça
if (["+", "-", "×", "÷"].includes(bouton.textContent)) {
    //...
}

/**
 *  Eviter de mettre plusieurs fonctions sur le même événement, préférer gérer cela de manière explicite.
 *  (soit une fonction qui appelle en séquence les fonctions, soit il y a vraiment besoin de paralléliser et dans ce cas passer par
 *  l'appel de promise en //, cf cours suivant).
 */

for (let button of buttons) {
    button.addEventListener("click", printTargetContent);
    button.addEventListener('click', agregate);
    button.addEventListener("click", operation);
}

/**
 * Et finalement, mettre cela dans une classe ?
 */

let display;
let operator;
let stack;
let clearRequired;
// A mettre dans une classe CalculatorState (=> cf redux), ou dans une classe Calculator avec alors les fonctions (=> cf POO).
// C'est ici : https://github.com/ue22-p21/web-calculator/tree/main/edouard-gv

// Ou encore : mettre des événements différents, au lieu de metttre un fonction qui switche : intéressant, ça ressemble à des webcomponent.

document.getElementById("clear").addEventListener("click", () => {
        document.getElementById("display").textContent = "";
        current_num = "";
        start = true;
        s = 0;
    }
);

document.getElementById("decimal").addEventListener("click", () => {
        document.getElementById("display").textContent = document.getElementById("display").textContent + ".";
        current_num = current_num + ".";
    }
);


/**
 * Traiter les erreurs, c'est bien !
 */

if (operator == "÷") {
    if (current == "0") {
        current = "error";
    }
}

if (isNaN(resultat)) {
    entree_utilisateur = ""
    liste_nombres = []
    liste_operateurs = []
    affichage = "Erreur de saisie"
}

/**
 * Y en a quelques uns qui n'ont pas réussi à aller très loin. Ne pas désespérer, c'est une histoire de quelques heures, facilement rattrapables.
 */

/**
 * Tester, tester ;). Exemple anonymous où ça ne fonctionne que la première fois, ou après avoir appuyé sur AC
 */
