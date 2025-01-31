document.addEventListener("DOMContentLoaded", function() {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const message = document.getElementById("message");

    yesBtn.addEventListener("click", function() {
        message.classList.remove("hidden");
        message.style.display = "block";
        createHearts();
    });

    // Move the "No" button to a random position on hover
    noBtn.addEventListener("mouseover", function () {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.position = "absolute";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    // Show a pop-up message when "No" is clicked
    noBtn.addEventListener("click", function () {
        alert("Are you sure? I buy you ice cream🍦🙇🏻‍♂️🥺!");
    });
});

    function createHearts() {
        for (let i = 0; i < 20; i++) {
            let heart = document.createElement("div");
            heart.className = "heart";
            heart.innerHTML = "❤️";
            document.body.appendChild(heart);

            let x = Math.random() * window.innerWidth;
            let y = window.innerHeight + Math.random() * 100;
            heart.style.left = `${x}px`;
            heart.style.top = `${y}px`;
            heart.style.fontSize = `${Math.random() * 20 + 10}px`;
            heart.style.animationDuration = `${Math.random() * 2 + 2}s`;

            setTimeout(() => heart.remove(), 4000);
        }
    }
});
