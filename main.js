let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function goToNextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    document.querySelector('.slider').style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(goToNextSlide, 3000); // Auto slide every 3 seconds
