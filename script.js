// =============================
// Initialize AOS Animation
// =============================

AOS.init({
    duration: 1000,
    once: true
});

// =============================
// Typing Animation
// =============================

const typed = new Typed("#typing", {
    strings: [
        "Full Stack Developer",
        "Java Developer",
        "Spring Boot Developer",
        "Frontend Developer",
        "Problem Solver"
    ],

    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

// =============================
// Mobile Menu
// =============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

// =============================
// Sticky Navbar Shadow
// =============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    }

    else{

        header.style.boxShadow = "none";

    }

});

// =============================
// Active Navigation Link
// =============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});



// scrollBtn.addEventListener("click", ()=>{

//     window.scrollTo({

//         top:0,

//         behavior:"smooth"

//     });

// });

// =============================
// Contact Form
// =============================

// =============================
// EmailJS Contact Form
// =============================

// Initialize EmailJS
emailjs.init({
    publicKey: "OCRppFq6jmwgMuAse"
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const button = form.querySelector("button");

    button.innerText = "Sending...";
    button.disabled = true;

    emailjs.sendForm(
        "service_kc367x9",
        "template_qkuhr0f",
        form
    )
    .then(() => {

        alert("Message sent successfully! Thank you for contacting me. 😊");

        form.reset();

        button.innerText = "Send Message";
        button.disabled = false;

    })
    .catch((error) => {

        console.error("EmailJS Error:", error);

        alert("Sorry, something went wrong. Please try again.");

        button.innerText = "Send Message";
        button.disabled = false;

    });

});

// const form = document.querySelector("form");

// form.addEventListener("submit",(e)=>{

//     e.preventDefault();

//     alert("Thank you! Your message has been received.");

//     form.reset();

// });