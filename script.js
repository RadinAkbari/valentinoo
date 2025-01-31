document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const message = document.getElementById("message");

    // Ensure the "Yes" button works
    yesBtn.addEventListener("click", function () {
        if (message) {
            message.classList.remove("hidden");
            message.style.display = "block";
            createHearts();
        } else {
            console.error("Message element not found!");
        }
    });

    // Move the "No" button to a random position on hover
    if (noBtn) {
        noBtn.addEventListener("mouseover", function () {
            const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
            const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
            noBtn.style.position = "absolute";
            noBtn.style.left = `${x}px`;
            noBtn.style.top = `${y}px`;
        });

        // Show a pop-up message when "No" is clicked
        noBtn.addEventListener("click", function () {
            alert("Are you sure? I'll buy you ice cream 🍦🙇🏻‍♂️🥺!");
        });
    } else {
        console.error("No button not found!");
    }

    // Create floating hearts
    function createHearts() {
        for (let i = 0; i < 20; i++) {
            let heart = document.createElement("div");
            heart.className = "heart";
            heart.innerHTML = "❤️";
            heart.style.position = "absolute";
            document.body.appendChild(heart);

            const x = Math.random() * window.innerWidth;
            const y = window.innerHeight + Math.random() * 100;
            heart.style.left = `${x}px`;
            heart.style.top = `${y}px`;
            heart.style.fontSize = `${Math.random() * 20 + 10}px`;
            heart.style.animationDuration = `${Math.random() * 2 + 2}s`;

            setTimeout(() => heart.remove(), 4000);
        }
    }
});