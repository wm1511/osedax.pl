// Preloader
window.addEventListener('DOMContentLoaded', function () {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.transition = 'opacity 0.2s';
        preloader.style.opacity = '0';

        setTimeout(() => {
            preloader.style.display = 'none';
            preloader.style.visibility = 'hidden';
        }, 200);
    }
});

// Map
if (document.getElementById('map')) {
    const map = L.map('map').setView([49.9329121, 19.3855164], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

    var marker = L.marker([49.9329121, 19.3855164]).addTo(map);
}

// Project filter
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('input[name="vbtn-radio"]');
    const cards = document.querySelectorAll('[data-category]');
    const years = document.querySelectorAll('.year');

    buttons.forEach(button => {
        button.addEventListener("change", function () {
            const filter = this.id.replace('projects-', '');

            cards.forEach(card => {
                const categories = card.dataset.category.split(" ");
                if (filter === 'w' || categories.includes(filter)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }
            });

            years.forEach(year => {
                const yearCards = year.querySelectorAll('[data-category]');
                const hasVisibleCards = Array.from(yearCards).some(card => card.style.display !== "none");

                if (hasVisibleCards) {
                    year.style.display = "";
                } else {
                    year.style.display = "none";
                }
            });
        });
    });
});

// Animate on scroll
AOS.init();