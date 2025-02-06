// Improved Slideshow with Smooth Transitions
let index = 0;
function showSlides() {
    let slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.style.display = "none");
    index = (index + 1) % slides.length;
    slides[index].style.display = "block";
}
setInterval(showSlides, 3000);
showSlides();

// Floating Hearts Animation
function createHeart() {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.getElementById("hearts-container").appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 500);