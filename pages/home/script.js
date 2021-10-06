var timeOutId;
var slidePos = 0;
var sliderContainer = document.getElementById("bg-slide-container");

var shit = function starting() {
    toggleMenu("sticky-search");
}();

function resetTimer() {
    window.clearInterval(timeOutId);
    startTimer();
}

function nextSlide() {
    sliderContainer.style.left = "-" + (slidePos * 4) + "%";

    var childs = document.getElementById("slider-controls").children;

    for (var j = 0; j < childs.length; j++) {
        childs[j].classList.remove("active-slide");
    }

    childs[slidePos / 25].classList.add("active-slide");

    console.log("before: " + slidePos);
    slidePos = parseInt(slidePos) + 25;

    if (slidePos >= 100)
        slidePos = 0;

    console.log("after 2: " + slidePos);
}

function startTimer() {
    timeOutId = window.setInterval(nextSlide, 5000);
}

startTimer()

function goSlide(pos) {
    slidePos = pos;

    nextSlide();
    resetTimer();
}
