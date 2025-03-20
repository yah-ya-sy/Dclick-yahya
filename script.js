document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Empêche l'envoi par défaut

        const inputs = form.querySelectorAll("input, textarea");
        let allFilled = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                allFilled = false;
                input.style.border = "2px solid red";
            } else {
                input.style.border = "none";
            }
        });

        if (!allFilled) {
            alert("Veuillez remplir tous les champs.");
        } else {
            alert("Merci pour votre message ! Je vous répondrai dès que possible 😊");
            form.reset(); // Réinitialise le formulaire
        }
    });
});
