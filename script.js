function changeLanguage() {
    const language = document.getElementById('language').value;

    if (language === "en") {
        document.querySelector("header nav ul li:nth-child(1) a").innerText = "Home";
        document.querySelector("header nav ul li:nth-child(2) a").innerText = "Services";
        document.querySelector("header nav ul li:nth-child(3) a").innerText = "Projects";
        document.querySelector("header nav ul li:nth-child(4) a").innerText = "Offers";
        document.querySelector("header nav ul li:nth-child(5) a").innerText = "Contact";
        document.querySelector("#home h2").innerText = "Welcome to Bezumnyy Tekhnarioz";
        document.querySelector("#home p").innerText = "We provide electrical installations, replacements, and maintenance in your home or apartment in Geldrop, Noord-Brabant.";
        document.querySelector("#services h2").innerText = "Our Services";
        document.querySelector("#projects h2").innerText = "Our Projects";
        document.querySelector("#offers h2").innerText = "Our Offers";
        document.querySelector("#contact h2").innerText = "Contact Us";
        document.querySelector("#contact p").innerText = "Contact us using the details below:";
        document.querySelector("footer p").innerText = "© 2024 Bezumnyy Tekhnarioz - All rights reserved";
    } else if (language === "ua") {
        document.querySelector("header nav ul li:nth-child(1) a").innerText = "Головна";
        document.querySelector("header nav ul li:nth-child(2) a").innerText = "Послуги";
        document.querySelector("header nav ul li:nth-child(3) a").innerText = "Проекти";
        document.querySelector("header nav ul li:nth-child(4) a").innerText = "Пропозиції";
        document.querySelector("header nav ul li:nth-child(5) a").innerText = "Контакти";
        document.querySelector("#home h2").innerText = "Ласкаво просимо до Bezumnyy Tekhnarioz";
        document.querySelector("#home p").innerHere’s the updated and expanded code to help you create your **Bezumnyy Tekhnarioz** website. This includes a modern, beautiful background, animation for sections, multiple pages (services, projects, offers, contact), and mobile responsiveness (for Android/iOS).
} else if (language === "ru") {
        // Add Russian translations here
    }		
}
