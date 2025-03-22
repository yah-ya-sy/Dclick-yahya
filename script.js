
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll("input, textarea");

    // Charger les données enregistrées depuis le localStorage
    inputs.forEach(input => {
        const savedValue = localStorage.getItem(input.name);
        if (savedValue) {
            input.value = savedValue;
        }
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let allFilled = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                allFilled = false;
                input.style.border = "2px solid red";
            } else {
                input.style.border = "2px solid green";
            }
        });

        if (!allFilled) {
            alert("Veuillez remplir tous les champs.");
        } else {
            alert("Merci pour votre message ! Je vous répondrai dès que possible 😊");

            // Enregistre uniquement prénom & nom pour réutilisation
            inputs.forEach(input => {
                if (["prenom", "nom"].includes(input.name)) {
                    localStorage.setItem(input.name, input.value);
                }
            });

            form.reset();

            // Réinitialise les styles
            inputs.forEach(input => input.style.border = "none");
        }
    });
});
