document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.calculator__display');
    const keys = document.querySelector('.calculator__keys');

    keys.addEventListener('click', function(event) {
        if (event.target.matches('button')) {
            const key = event.target;
            const action = key.dataset.action;
            const keyContent = key.textContent;
            const displayedNum = display.textContent;


            if (!action) {
                // If the clicked key is a number or decimal point, append it to the display
                display.textContent = displayedNum === '0' ? keyContent : displayedNum + keyContent;
            }
            
            if (action === 'clear') {
                // remettre un 0 sur l'écran à la place du résultat d'avant
                display.textContent = '0';
            }

            if (action === 'calculate') {
                // signe "égale" => il faut différencier en fonction de l'opération précédente
                const expression = display.textContent;
                
                // on commence avec l'addition
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
            }

            if (action === 'add') {
                // on définit d'abord l'opérateur pour pouvoir l'utiliser dans la fonction "calculate" juste au dessus
                display.dataset.operator = 'add';
                // là on enregistre le premier chiffre de l'addition, afin de le garder en mémoire
                display.dataset.firstValue = displayedNum;
                // je ne sais pas quoi mettre, donc je mets rien comme ça pas de risque d'enregistrer la mauvaise valeur avant !
                display.textContent = " "
            }

            // bon on fait pareil pour les autres opérations !
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
        }
    });
});
