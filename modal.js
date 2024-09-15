// Fonction pour initialiser la modale
function initModal() {
    console.log("Initializing modal");

    var modal = document.getElementById("modal");
    var span = document.getElementsByClassName("close")[0];
    var modalTitle = document.getElementById("modal-title");
    var modalText = document.getElementById("modal-text");

    console.log("Modal elements:", modal, span, modalTitle, modalText);

    // Fonction pour afficher la modale avec le contenu correct
    function showModal(serviceId) {
        console.log("Showing modal for service:", serviceId);

        // Vérifier si nous sommes sur la page anglaise ou française
        const isEnglish = window.location.pathname.includes('accueil.html');
        const details = isEnglish ? window.serviceDetailsEN[serviceId] : window.serviceDetails[serviceId];

        if (details) {
            modalTitle.textContent = details.title;
            modalText.textContent = details.content;
            modal.style.display = "block";
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        } else {
            console.error("Service details not found for:", serviceId);
        }
    }

    // Gestionnaire d'événements pour les boutons "En savoir plus"
    document.querySelectorAll('.read').forEach(function (btn) {
        btn.onclick = function (e) {
            e.preventDefault();
            var serviceId = this.getAttribute('data-service');
            console.log("Read button clicked:", serviceId);
            showModal(serviceId);
        }
    });

    // Fermeture de la modale
    function closeModal() {
        console.log("Closing modal");
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }

    // Gestionnaires d'événements pour fermer la modale
    if (span) {
        span.onclick = closeModal;
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            closeModal();
        }
    }
}

// Appeler initModal une fois que le DOM est chargé
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initModal);
} else {
    initModal();
}

// Assurez-vous que ces objets sont définis globalement
window.serviceDetails = window.serviceDetails || {
    // ... Définissez ici les détails des services en français ...
};

window.serviceDetailsEN = window.serviceDetailsEN || {
    // ... Définissez ici les détails des services en anglais ...
};