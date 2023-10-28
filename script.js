document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez tous les boutons avec la classe .nb-series
    let buttons = document.querySelectorAll(".nb-series");

    // Pour chaque bouton...
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let h2 = button.querySelector("h2");
            let currentValue = parseInt(h2.innerText, 10);

            if (currentValue === 3) {
                h2.innerText = "0";
            } else {
                h2.innerText = (currentValue + 1).toString();
            }
        });
    });

    // Ajout des sélections manquantes
    let poidsInputs = document.querySelectorAll(".input-poids");
    let saveButtons = document.querySelectorAll(".btn-save-poids");
    let poidsDisplays = document.querySelectorAll(".display-poids");

    // Charger le poids depuis le localStorage pour chaque exercice
    poidsInputs.forEach((input, index) => {
        let savedWeight = localStorage.getItem("poids-exercice-" + index);
        if (savedWeight) {
            poidsDisplays[index].innerText = savedWeight; // afficher le poids sauvegardé
        }
    });

    // Sauvegarder le poids dans le localStorage
    saveButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            let poids = poidsInputs[index].value;
            if (poids) {
                localStorage.setItem("poids-exercice-" + index, poids);
                poidsDisplays[index].innerText = poids; // afficher le poids nouvellement enregistré

                // Réinitialiser la valeur de l'input
                poidsInputs[index].value = "";
            }
        });
    });
});
