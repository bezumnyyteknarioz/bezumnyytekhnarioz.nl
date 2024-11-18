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

I’ve also incorporated the language selector to switch between Dutch, English, Ukrainian, and Russian.

### **index.html**
```html
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Bezumnyy Tekhnarioz - Electriciteit voor uw woning in Geldrop, Nederland. Installatie, reparatie en onderhoud van elektrische systemen.">
    <title>Bezumnyy Tekhnarioz - Uw Elektriciteitsexpert</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <header>
        <div class="logo">
            <h1>Bezumnyy Tekhnarioz</h1>
        </div>
        <nav>
            <ul>
                <li><a href="#home" class="active">Home</a></li>
                <li><a href="#services">Diensten</a></li>
                <li><a href="#projects">Projecten</a></li>
                <li><a href="#offers">Aanbiedingen</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <div class="language-selector">
            <select id="language" onchange="changeLanguage()">
                <option value="nl">Nederlands</option>
                <option value="en">English</option>
                <option value="ua">Українська</option>
                <option value="ru">Русский</option>
            </select>
        </div>
    </header>

    <section id="home" class="fade-in">
        <h2>Welkom bij Bezumnyy Tekhnarioz</h2>
        <p>Wij verzorgen de installatie, vervanging en het onderhoud van elektrische systemen in uw huis of appartement in Geldrop, Noord-Brabant.</p>
    </section>

    <section id="services" class="fade-in">
        <h2>Onze Diensten</h2>
        <ul>
            <li>Volledige elektrische installatie voor uw woning</li>
            <li>Montage van stopcontacten en schakelaars</li>
            <li>Aansluiting van elektrische kast</li>
            <li>Reparatie en onderhoud van elektrische systemen</li>
        </ul>
    </section>

    <section id="projects" class="fade-in">
        <h2>Onze Projecten</h2>
        <div class="project-gallery">
            <div class="project-item">Project 1</div>
            <div class="project-item">Project 2</div>
            <div class="project-item">Project 3</div>
        </div>
    </section>

    <section id="offers" class="fade-in">
        <h2>Onze Aanbiedingen</h2>
        <p>Ontvang speciale kortingen op onze diensten door contact met ons op te nemen.</p>
    </section>

    <section id="contact" class="fade-in">
        <h2>Contacteer ons</h2>
        <p>Neem contact met ons op via de onderstaande gegevens:</p>
        <p>Telefoon: +31616711835</p>
        <p>Email: <a href="mailto:alcheev.com@gmail.com">alcheev.com@gmail.com</a></p>
    </section>

    <footer>
        <p>&copy; 2024 Bezumnyy Tekhnarioz - Alle rechten voorbehouden</p>
    </footer>
</body>
</html>
