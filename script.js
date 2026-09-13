setTimeout(() => {
    document.getElementById("popup1").style.display = "none";
    document.getElementById("popup2").style.display = "block";
}, 5000);


let value = 0;

const timer = setInterval(() => {
    value++;

    document.getElementById("progress").style.width = value + "%";
    document.getElementById("percent").textContent = value + "%";

    if (value < 25) {
        document.getElementById("status").textContent =
            "Analyse du navigateur...";
    }
    else if (value < 50) {
        document.getElementById("status").textContent =
            "Recherche de données sensibles...";
    }
    else if (value < 75) {
        document.getElementById("status").textContent =
            "Vérification des comptes enregistrés...";
    }
    else if (value < 100) {
        document.getElementById("status").textContent =
            "Analyse finale...";
    }
    else {
        clearInterval(timer);

        document.getElementById("status").textContent =
            "😂 Simulation terminée — aucune donnée réelle récupérée.";
    }
}, 100);