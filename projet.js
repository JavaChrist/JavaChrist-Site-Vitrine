document.addEventListener('DOMContentLoaded', function () {
  let currentIndex = 0;
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  const subTitle = document.querySelector('.sub-title');

  function showSlide(index) {
    if (index >= totalItems) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalItems - 1;
    } else {
      currentIndex = index;
    }
    const newTransform = -currentIndex * 100 + '%';
    document.querySelector('.carousel-inner').style.transform = `translateX(${newTransform})`;

    // Réinitialiser et rejouer l'animation du titre
    subTitle.classList.remove('animate');
    // Utiliser setTimeout pour forcer le recalcul du style
    setTimeout(() => {
      subTitle.classList.add('animate');
    }, 10); // Délai court pour forcer le recalcul
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  // Auto slide every 5 seconds (ralenti le changement d'image)
  setInterval(nextSlide, 5000);

  // Attach event listeners to the controls
  document.querySelector('.next').addEventListener('click', nextSlide);
  document.querySelector('.prev').addEventListener('click', prevSlide);
});