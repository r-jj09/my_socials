particlesJS.load("particles-js", "config/particlesjs-config.json", function () {
    console.log("Particles.js loaded successfully!");
    document.getElementById("particles-js").style.background = "#160721";
});

document.addEventListener("DOMContentLoaded", function () {
    const employeeCard = document.querySelectorAll(".link");

    function isElementInView(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= window.innerHeight &&
            rect.right <= window.innerWidth
        );
    }

    function handleScroll() {
        employeeCard.forEach((el, index) => {
            if (isElementInView(el)) {
                // Check if the screen width is greater than 768px (desktop)
                if (window.innerWidth > 768) {
                    el.style.animationDelay = `${0.3 * index}s`;  // Apply delay only on desktop
                } else {
                    el.style.animationDelay = "0s"; // No delay on mobile
                }
                el.classList.add("animate-on-scroll");
            }
        });
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
});

