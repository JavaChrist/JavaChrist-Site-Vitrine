// Données simulées pour l'utilisateur et les fichiers
const clientData = {
    name: "Christian Grohens",
    email: "christian@example.com",
};

const files = [
    { name: "Facture - Janvier", url: "/files/facture-janvier.pdf" },
    { name: "Rapport de projet", url: "/files/rapport-projet.pdf" },
    { name: "Maquette site - Février", url: "/files/maquette-fevrier.zip" },
];

// Fonction pour afficher les informations du client
function displayClientInfo() {
    const clientInfoDiv = document.getElementById("client-info");
    clientInfoDiv.innerHTML = `
        <h2>Bonjour, ${clientData.name}</h2>
        <p>Email : ${clientData.email}</p>
    `;
}

// Fonction pour afficher la liste des fichiers
function displayFileList() {
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
    console.log("Statut de connexion:", loggedIn);

    if (!loggedIn) {
        console.log("Utilisateur non connecté. Redirection.");
        window.location.href = "/fr/login.html";
    } else {
        console.log("Utilisateur connecté.");
        displayClientInfo();
        displayFileList();
    }
});

// Gestionnaire d'événement pour la déconnexion
document.getElementById("logout").addEventListener("click", logout);

