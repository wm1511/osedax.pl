// Preloader
window.addEventListener('load', function () {
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

// Animate on scroll
AOS.init();