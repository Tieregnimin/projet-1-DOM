// Attendre que le DOM soit complètement chargé avant d'exécuter les scripts
document.addEventListener('DOMContentLoaded', function () {
  
    // Sélectionner tous les articles du panier
    const articles = document.querySelectorAll('.card-body');
  
    // Fonction pour mettre à jour le prix total
    function updateTotalPrice() {
      let total = 0;
      articles.forEach(article => {
        const unitPrice = parseFloat(article.querySelector('.unit-price').textContent.replace(' $', ''));
        const quantity = parseInt(article.querySelector('.quantity').textContent);
        total += unitPrice * quantity;
      });
      document.querySelector('.total').textContent = `${total} $`;
    }
  
    // Ajouter des événements pour ajuster les quantités
    articles.forEach(article => {
      const plusButton = article.querySelector('.fa-plus-circle');
      const minusButton = article.querySelector('.fa-minus-circle');
      const quantitySpan = article.querySelector('.quantity');
      const removeButton = article.querySelector('.fa-trash-alt');
      const heartButton = article.querySelector('.fa-heart');
  
      // Fonction pour augmenter la quantité
      plusButton.addEventListener('click', function () {
        let quantity = parseInt(quantitySpan.textContent);
        quantity += 1;
        quantitySpan.textContent = quantity;
        updateTotalPrice();
      });
  
      // Fonction pour diminuer la quantité
      minusButton.addEventListener('click', function () {
        let quantity = parseInt(quantitySpan.textContent);
        if (quantity > 0) {
          quantity -= 1;
          quantitySpan.textContent = quantity;
          updateTotalPrice();
        }
      });
  
      // Fonction pour supprimer un article
      removeButton.addEventListener('click', function () {
        article.remove();
        updateTotalPrice();
      });
  
      // Fonction pour ajouter/enlever des articles des favoris
      heartButton.addEventListener('click', function () {
        heartButton.classList.toggle('text-danger'); // Change la couleur du cœur (rouge)
      });
    });
  
    // Initialiser le prix total dès le chargement de la page
    updateTotalPrice();
  });
  