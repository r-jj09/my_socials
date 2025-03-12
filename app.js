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
                // Apply a delay based on the index of the element (e.g., 0.3s delay for the first, 0.6s for the second)
                el.style.animationDelay = `${0.3 * index}s`;  // You can adjust the delay multiplier
                el.classList.add("animate-on-scroll");
            }
        });
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
});
