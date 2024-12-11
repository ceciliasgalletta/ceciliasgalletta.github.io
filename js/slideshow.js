let currentSlideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".slide");

    // Ensure index stays within bounds
    if (index >= slides.length) {
        currentSlideIndex = 0; // Loop back to the first slide
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1; // Go to the last slide
    } else {
        currentSlideIndex = index;
    }

    // Hide all slides
    slides.forEach(slide => slide.style.display = "none");

    // Show the current slide
    slides[currentSlideIndex].style.display = "block";
}

// Handlers for navigation buttons
function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

function prevSlide() {
    showSlide(currentSlideIndex - 1);
}

// Initialize the slideshow
document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlideIndex); // Show the first slide
});
