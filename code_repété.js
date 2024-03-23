

//btn 0
var buttonThree = document.getElementById('btn0');
buttonThree.addEventListener('click', function () {
    afficherZero();
});
function afficherZero() {
    console.log("zéro");
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    var ancienne_valeur = valeur_ecran.textContent;
    var nouvelle_valeur = "0";
    if (ancienne_valeur === "0") {
        valeur_ecran.textContent = nouvelle_valeur
    }
    else {
        valeur_ecran.textContent = ancienne_valeur + nouvelle_valeur;
    }
}
//attention à la virgule

//btn 1
var buttonThree = document.getElementById('btn1');
buttonThree.addEventListener('click', function () {
    afficherUn();
});
function afficherUn() {
    console.log("un");
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    var ancienne_valeur = valeur_ecran.textContent;
    var nouvelle_valeur = "1";
    if (ancienne_valeur === "0") {
        valeur_ecran.textContent = nouvelle_valeur
    }
    else {
        valeur_ecran.textContent = ancienne_valeur + nouvelle_valeur;
    }
}

//btn 2
var buttonThree = document.getElementById('btn2');
buttonThree.addEventListener('click', function () {
    afficherDeux();
});
function afficherDeux() {
    console.log("deux");
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    var ancienne_valeur = valeur_ecran.textContent;
    var nouvelle_valeur = "2";
    if (ancienne_valeur === "0") {
        valeur_ecran.textContent = nouvelle_valeur
    }
    else {
        valeur_ecran.textContent = ancienne_valeur + nouvelle_valeur;
    }
}

//btn 3
var buttonThree = document.getElementById('btn3');
buttonThree.addEventListener('click', function () {
    afficherTrois();
});
function afficherTrois() {
    console.log("trois");
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    var ancienne_valeur = valeur_ecran.textContent;
    var nouvelle_valeur = "3";
    if (ancienne_valeur === "0") {
        valeur_ecran.textContent = nouvelle_valeur
    }
    else {
        valeur_ecran.textContent = ancienne_valeur + nouvelle_valeur;
    }
}

//btn 4
var buttonThree = document.getElementById('btn4');
buttonThree.addEventListener('click', function () {
    afficherQuatre();
});
function afficherQuatre() {
    console.log("quatre");
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    var ancienne_valeur = valeur_ecran.textContent;
    var nouvelle_valeur = "4";
    if (ancienne_valeur === "0") {
        valeur_ecran.textContent = nouvelle_valeur
    }
    else {
        valeur_ecran.textContent = ancienne_valeur + nouvelle_valeur;
    }
}

//btn 5
var buttonThree = document.getElementById('btn5');
buttonThree.addEventListener('click', function () {
    afficherCinq();
});
function afficherCinq() {
    console.log("Cinq");
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    var ancienne_valeur = valeur_ecran.textContent;
    var nouvelle_valeur = "5";
    if (ancienne_valeur === "0") {
        valeur_ecran.textContent = nouvelle_valeur
    }
    else {
        valeur_ecran.textContent = ancienne_valeur + nouvelle_valeur;
    }
}

//btn 6
var buttonThree = document.getElementById('btn6');
buttonThree.addEventListener('click', function () {
    afficherSix();
});
function afficherSix() {
    console.log("Six");
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    var ancienne_valeur = valeur_ecran.textContent;
    var nouvelle_valeur = "6";
    if (ancienne_valeur === "0") {
        valeur_ecran.textContent = nouvelle_valeur
    }
    else {
        valeur_ecran.textContent = ancienne_valeur + nouvelle_valeur;
    }
}

//btn 7
var buttonThree = document.getElementById('btn7');
buttonThree.addEventListener('click', function () {
    afficherSept();
});
function afficherSept() {
    console.log("Sept");
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    var ancienne_valeur = valeur_ecran.textContent;
    var nouvelle_valeur = "7";
    if (ancienne_valeur === "0") {
        valeur_ecran.textContent = nouvelle_valeur
    }
    else {
        valeur_ecran.textContent = ancienne_valeur + nouvelle_valeur;
    }
}

//btn 8
var buttonThree = document.getElementById('btn8');
buttonThree.addEventListener('click', function () {
    afficherHuit();
});
function afficherHuit() {
    console.log("Huit");
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    var ancienne_valeur = valeur_ecran.textContent;
    var nouvelle_valeur = "8";
    if (ancienne_valeur === "0") {
        valeur_ecran.textContent = nouvelle_valeur
    }
    else {
        valeur_ecran.textContent = ancienne_valeur + nouvelle_valeur;
    }
}

//btn 9
var buttonThree = document.getElementById('btn9');
buttonThree.addEventListener('click', function () {
    afficherNeuf();
});
function afficherNeuf() {
    console.log("Neuf");
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    var ancienne_valeur = valeur_ecran.textContent;
    var nouvelle_valeur = "9";
    if (ancienne_valeur === "0") {
        valeur_ecran.textContent = nouvelle_valeur
    }
    else {
        valeur_ecran.textContent = ancienne_valeur + nouvelle_valeur;
    }
}





//btn symbole
for (var i in ["+", "-", "*", "/"]) {
    const index = i;
    var buttonSymbole = document.getElementById(`btn${index}`);
    buttonSymbole.addEventListener('click', function () {
        afficherSymbole(index);
    });
}
function afficherSymbole(symbole) {
    console.log(symbole);
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    var ancienne_valeur = valeur_ecran.textContent;
    var nouvelle_valeur = symbole;
    if (ancienne_valeur == 0) {
        valeur_ecran.textContent = nouvelle_valeur
    }
    else {
        valeur_ecran.textContent = ancienne_valeur + nouvelle_valeur;
    }
}
