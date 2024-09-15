document.addEventListener('DOMContentLoaded', function () {
    const rainContainer = document.getElementById('rain-container');
    const raindropsCount = 100; // Nombre de gouttes de pluie

    function createRaindrop() {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.style.left = `${Math.random() * 100}%`;
        raindrop.style.animationDuration = `${Math.random() * 1 + 0.5}s`; // Entre 0.5 et 1.5 secondes
        raindrop.style.opacity = Math.random();
        rainContainer.appendChild(raindrop);

        // Supprimer la goutte après l'animation
        raindrop.addEventListener('animationend', () => {
            raindrop.remove();
            createRaindrop();
        });
    }

    // Créer les gouttes initiales
    for (let i = 0; i < raindropsCount; i++) {
        setTimeout(createRaindrop, Math.random() * 1000);
    }
});