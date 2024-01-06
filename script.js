document.addEventListener("DOMContentLoaded", function () {
    // Preload background images
    var images = [
        "assets/bgimages/auto.png",
        "assets/bgimages/civil.png",
        "assets/bgimages/computer.png",
        "assets/bgimages/electrical.png",
        "assets/bgimages/mechanical.png",
        "assets/bgimages/electronics.png"
    ];

    images.forEach(function (image) {
        var img = new Image();
        img.src = image;
    });

    var countDownDate = new Date("Jan 25, 2024 00:00:00").getTime();

    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        days = days < 10 ? "0" + days : days;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);

    var hamburgerButton = document.querySelector(".hamburger");
    var overlay = document.querySelector("#myOverlay");

    hamburgerButton.addEventListener("click", function () {
        overlay.style.display = (overlay.style.display === "block") ? "none" : "block";
    });

    window.addEventListener("click", function (event) {
        if (!event.target.matches('.hamburger') && overlay.style.display === "block") {
            overlay.style.display = "none";
        }
    });
});


const introShown = sessionStorage.getItem('introShown');

        // If intro has not been shown during the current session, redirect to intro.html
        if (!introShown) {
            window.location.href = 'components/intro.html';

            // Set a flag indicating that the intro has been shown during the current session
            sessionStorage.setItem('introShown', 'true');
        }
