// script.js

const items = document.querySelectorAll('.carousel .item');

items.forEach(item => {
    // Événement : Souris entre dans l'élément
    item.addEventListener('mouseenter', () => {
        // 1. Cible l'élément précédent
        const prevSibling = item.previousElementSibling;
        if (prevSibling) {
            prevSibling.classList.add('neighbor-effect');
        }

        // 2. Cible l'élément suivant
        const nextSibling = item.nextElementSibling;
        if (nextSibling) {
            nextSibling.classList.add('neighbor-effect2');
        }
    });

    // Événement : Souris sort de l'élément
    item.addEventListener('mouseleave', () => {
        // 1. Supprime la classe de l'élément précédent
        const prevSibling = item.previousElementSibling;
        if (prevSibling) {
            prevSibling.classList.remove('neighbor-effect');
        }

        // 2. Supprime la classe de l'élément suivant
        const nextSibling = item.nextElementSibling;
        if (nextSibling) {
            nextSibling.classList.remove('neighbor-effect2');
        }
    });
});