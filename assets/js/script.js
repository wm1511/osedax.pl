window.addEventListener('load', function () {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.transition = 'opacity 0.5s';
        preloader.style.opacity = '0';

        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});