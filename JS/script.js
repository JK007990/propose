
"use strict";

// =====================================
// FULL PAGE SCROLL TRANSITION
// =====================================

const pageSections = document.querySelectorAll(
    ".intro, .story-section, .things-section, .future-section, .letter-section, .proposal-section"
);

const pageObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
        }

    });

}, {
    threshold: 0.08,
    rootMargin: "0px 0px -40px 0px"
});

pageSections.forEach((section) => {
    pageObserver.observe(section);
});


// =====================================
// STORY CARD REVEAL
// =====================================

const revealElements = document.querySelectorAll(".reveal");

const cardObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            cardObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach((element) => {
    cardObserver.observe(element);
});


// =====================================
// OPEN LOVE LETTER
// =====================================

const envelope = document.getElementById("envelope");
const openLetterButton = document.getElementById("open-letter");

if (envelope && openLetterButton) {

    openLetterButton.addEventListener("click", () => {

        if (envelope.classList.contains("opened")) return;

        envelope.classList.add("opened");

        openLetterButton.textContent = "Opened with love ♡";

        createHearts(15);
        createSparkles(18);

    });

}


// =====================================
// PROPOSAL YES BUTTON
// =====================================

const yesButton = document.getElementById("yes-btn");
const thinkButton = document.getElementById("think-btn");

const proposalQuestion = document.querySelector(".proposal-question");
const proposalResult = document.getElementById("proposal-result");

if (yesButton && proposalQuestion && proposalResult) {

    yesButton.addEventListener("click", () => {

        proposalQuestion.style.display = "none";

        proposalResult.classList.add("show");

        createHearts(35);
        createSparkles(30);

        setTimeout(() => {

            proposalResult.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 200);

    });

}


// =====================================
// THINK BUTTON
// =====================================

if (thinkButton) {

    thinkButton.addEventListener("click", () => {

        thinkButton.textContent = "Take your time ♡";

        createHearts(5);

    });

}


// =====================================
// FLOATING HEART ANIMATION
// =====================================

function createHearts(amount = 5) {

    const symbols = ["♡", "♥", "✧", "💕"];

    for (let i = 0; i < amount; i++) {

        setTimeout(() => {

            const heart = document.createElement("span");

            heart.className = "floating-heart";

            heart.textContent =
                symbols[Math.floor(Math.random() * symbols.length)];

            heart.style.left = Math.random() * 100 + "vw";

            heart.style.fontSize =
                (15 + Math.random() * 25) + "px";

            heart.style.animationDuration =
                (3 + Math.random() * 3) + "s";

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 6500);

        }, i * 120);

    }

}


// =====================================
// SPARKLE PARTICLES
// =====================================

function createSparkles(amount = 10) {

    const symbols = ["✦", "✧", "✨", "⋆"];

    for (let i = 0; i < amount; i++) {

        setTimeout(() => {

            const sparkle = document.createElement("span");

            sparkle.className = "sparkle";

            sparkle.textContent =
                symbols[Math.floor(Math.random() * symbols.length)];

            sparkle.style.left = Math.random() * 100 + "vw";
            sparkle.style.top = Math.random() * 100 + "vh";

            sparkle.style.fontSize =
                (12 + Math.random() * 20) + "px";

            document.body.appendChild(sparkle);

            setTimeout(() => {
                sparkle.remove();
            }, 1600);

        }, i * 70);

    }

}


// =====================================
// SUBTLE BACKGROUND HEARTS
// =====================================

setInterval(() => {

    if (Math.random() > 0.55) {
        createHearts(1);
    }

}, 4500);


// =====================================
// SMOOTH NAVIGATION
// =====================================

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});

