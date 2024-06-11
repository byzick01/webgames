document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    const toggleTheme = document.getElementById('toggle-theme');
    const body = document.body;
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentIndex = 0;
    const totalItems = document.querySelectorAll('.carousel-item').length;

    menuIcon.addEventListener('click', function() {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    toggleTheme.addEventListener('click', function() {
        if (body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
        }
    });

    function showSlide(index) {
        if (index < 0) {
            currentIndex = totalItems - 1;
        } else if (index >= totalItems) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevBtn.addEventListener('click', function() {
        showSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', function() {
        showSlide(currentIndex + 1);
    });

    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000);
});
