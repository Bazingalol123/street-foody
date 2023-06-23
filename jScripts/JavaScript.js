var slidePosition = 0;

function previousSlide() {
  showSlide(slidePosition  -1);
}

function nextSlide() {
    showSlide(slidePosition + 1);

}

function goToSlide(index) {
  showSlide(index);
}

function showSlide(index) {
    const slides = document.getElementsByClassName("Containers");
    const thumbnails = document.getElementsByClassName("thumbnail");
    slidePosition = index;

    if (slidePosition >= slides.length) {
        slidePosition = 0;
    } else if (slidePosition < 0) {
        slidePosition = slides.length - 1;
    }

    for (var i = 0; i <= slides.length - 1; i++) {
        if (i == slidePosition) {
            slides[slidePosition].style.display = "block";
            thumbnails[slidePosition].style.opacity = "1";

        } else {
            slides[i].style.display = "none";
            thumbnails[i].style.opacity = "0.6";
        }

    }

}














// פונקציות למטלה  של פיתוח אתרי אינטרנט - כפתור גלילה לחלק העליון של האתר
window.addEventListener('scroll', function () {
    var scrollButton = document.querySelector('.scroll-up-button');
    if (window.scrollY > 100) { // Adjust the scroll threshold as desired
        scrollButton.classList.add('show');
    } else {
        scrollButton.classList.remove('show');
    }
});
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
