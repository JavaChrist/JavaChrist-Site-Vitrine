// Fonction pour trouver l'utilisateur connecté
function getLoggedInUser() {
    const userEmail = localStorage.getItem("userEmail");

    // Assure-toi que le tableau 'users' est défini dans users.js
    return users.find(user => user.email === userEmail);
}

// Fonction pour afficher les informations du client
function displayClientInfo() {
    const client = getLoggedInUser();

    if (client) {
        const clientInfoDiv = document.getElementById("client-info");
        clientInfoDiv.innerHTML = `
            <h2>Bonjour, ${client.name}</h2>
            <p>Email : ${client.email}</p>
        `;
    } else {
        // Gérer le cas où aucun utilisateur n'est trouvé
        window.location.href = "/fr/login.html"; // Redirection si utilisateur non trouvé
    }
}

// Fonction pour afficher la liste des fichiers
function displayFileList() {
    const files = [
        { name: "Facture - Janvier", url: "/files/facture-janvier.pdf" },
        { name: "Rapport de projet", url: "/files/rapport-projet.pdf" },
        { name: "Maquette site - Février", url: "/files/maquette-fevrier.zip" },
    ];

    const fileListUl = document.querySelector("#file-list ul");
    files.forEach((file) => {
        const li = document.createElement("li");
        li.classList.add("file-item");
        li.innerHTML = `<span>${file.name}</span> <a href="${file.url}" download>Télécharger</a>`;
        fileListUl.appendChild(li);
    });
}

// Fonction de déconnexion
function logout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userEmail");
    window.location.href = "/fr/login.html";
}

// Vérifie si l'utilisateur est connecté
document.addEventListener("DOMContentLoaded", function () {
    const loggedIn = localStorage.getItem("loggedIn");

    if (!loggedIn) {
        window.location.href = "/fr/login.html";
    } else {
        displayClientInfo(); // Affiche les infos client
        displayFileList();   // Affiche les fichiers du client
    }
});

// Gestionnaire d'événement pour la déconnexion
document.getElementById("logout").addEventListener("click", logout);
