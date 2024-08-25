import { gsap } from "gsap";

// Animate the header and subtitle
gsap.from("#main-title", { duration: 1.5, y: -50, opacity: 0, ease: "power2.out" });
gsap.from("#subtitle", { duration: 1.5, y: -50, opacity: 0, ease: "power2.out", delay: 0.3 });

// Animate the buttons
gsap.from("#button-group button", {
    duration: 1.2,
    opacity: 0,
    y: 30,
    stagger: 0.2,
    ease: "back.out(1.7)",
    delay: 0.5
});

// Primary Button Animations (Hover and Click)
const primaryButton = document.getElementById("primary-button");
primaryButton.addEventListener("mouseenter", () => {
    gsap.to(primaryButton, { scale: 1.2, duration: 0.3, ease: "power1.inOut" });
});
primaryButton.addEventListener("mouseleave", () => {
    gsap.to(primaryButton, { scale: 1, duration: 0.3, ease: "power1.inOut" });
});
primaryButton.addEventListener("click", () => {
    gsap.to(primaryButton, { rotation: 360, scale: 1.3, duration: 0.5, ease: "back.out(1.7)" });
    gsap.to(primaryButton, { scale: 1, duration: 0.3, delay: 0.5, ease: "power1.inOut" });
});

// Success Button Animations (Hover and Click)
const successButton = document.querySelectorAll("#button-group button")[1];
successButton.addEventListener("mouseenter", () => {
    gsap.to(successButton, { backgroundColor: "#38a169", duration: 0.3, ease: "power1.inOut" }); // Lighten green
});
successButton.addEventListener("mouseleave", () => {
    gsap.to(successButton, { backgroundColor: "#48bb78", duration: 0.3, ease: "power1.inOut" }); // Original green
});
successButton.addEventListener("click", () => {
    gsap.to(successButton, { x: 100, duration: 0.5, ease: "power2.out" });
    gsap.to(successButton, { x: 0, duration: 0.5, delay: 0.5, ease: "power2.in" });
});

// Danger Button Animations (Hover and Click)
const dangerButton = document.querySelectorAll("#button-group button")[2];
dangerButton.addEventListener("mouseenter", () => {
    gsap.to(dangerButton, { y: -10, duration: 0.3, ease: "bounce.out" });
});
dangerButton.addEventListener("mouseleave", () => {
    gsap.to(dangerButton, { y: 0, duration: 0.3, ease: "bounce.in" });
});
dangerButton.addEventListener("click", () => {
    gsap.to(dangerButton, { opacity: 0.5, scale: 0.8, duration: 0.5, ease: "elastic.out(1, 0.3)" });
    gsap.to(dangerButton, { opacity: 1, scale: 1, duration: 0.3, delay: 0.5, ease: "elastic.in(1, 0.3)" });
});

// Animate the content divs
gsap.from("#content-divs div", {
    duration: 1.2,
    opacity: 0,
    y: 50,
    stagger: 0.3,
    ease: "power2.out",
    delay: 0.7
});