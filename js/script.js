document.addEventListener('DOMContentLoaded', function () {
    // переключение страниц
    const tabs = document.querySelectorAll('[data-tab]');
    const sections = document.querySelectorAll('[data-section]');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');

            tabs.forEach(t => t.classList.remove('tabs-block__tab_active'));
            tab.classList.add('tabs-block__tab_active');

            sections.forEach(section => {
                section.classList.add('visually-hidden');
            });

            document.querySelector(`[data-section="${target}"]`).classList.remove('visually-hidden');
        });
    });

    // Слайдер для отзывов
    const reviewsSlider = document.getElementById('reviews-slider');
    if (reviewsSlider) {
        const track = document.getElementById('reviews-slider-track');
        const slides = reviewsSlider.querySelectorAll('.reviews-slider__slide');
        const prevBtn = document.getElementById('reviews-slider-prev');
        const nextBtn = document.getElementById('reviews-slider-next');
        const dots = document.querySelectorAll('.reviews-slider__dot');

        let currentIndex = 0;
        const slideWidth = 100;

        function updateSlider() {
            track.style.transform = `translateX(-${currentIndex * slideWidth}%)`;

            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlider();
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlider();
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
            });
        });
    }
});

function toggleMenu() {
    const menu = document.querySelector('.header__menu');
    menu.classList.toggle('active');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            const menu = document.querySelector('.header__menu');
            if (menu && menu.classList.contains('active')) {
                menu.classList.remove('active');
            }
        }
    });
});
