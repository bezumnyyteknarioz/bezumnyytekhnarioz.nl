function changeLanguage() 
function toggleMenu() {
    const menu = document.querySelector("nav.menu");
    menu.classList.toggle("open");
}
{
    const language = document.getElementById('language').value;

    if (language === "nl") {
        document.querySelector("#home h2").innerText = "Welkom bij Bezumnyy Tekhnarioz";
        document.querySelector("#home p").innerText =
            "Wij verzorgen de installatie, vervanging en het onderhoud van elektrische systemen in uw huis of appartement in Geldrop, Noord-Brabant.";
        document.querySelector("#services h2").innerText = "Onze Diensten";
        document.querySelector("#projects h2").innerText = "Onze Projecten";
        document.querySelector("#offers h2").innerText = "Onze Aanbiedingen";
        document.querySelector("#contact h2").innerText = "Contacteer ons";
        document.querySelector("footer p").innerText =
            "© 2024 Bezumnyy Tekhnarioz - Alle rechten voorbehouden";
    } else if (language === "en") {
        document.querySelector("#home h2").innerText = "Welcome to Bezumnyy Tekhnarioz";
        document.querySelector("#home p").innerText =
            "We provide installation, replacement, and maintenance of electrical systems for your home or apartment in Geldrop, Noord-Brabant.";
        document.querySelector("#services h2").innerText = "Our Services";
        document.querySelector("#projects h2").innerText = "Our Projects";
        document.querySelector("#offers h2").innerText = "Our Offers";
        document.querySelector("#contact h2").innerText = "Contact Us";
        document.querySelector("footer p").innerText =
            "© 2024 Bezumnyy Tekhnarioz - All rights reserved";
    } else if (language === "ua") {
        document.querySelector("#home h2").innerText = "Ласкаво просимо до Bezumnyy Tekhnarioz";
        document.querySelector("#home p").innerText =
            "Ми надаємо послуги з монтажу, заміни та обслуговування електричних систем у вашому будинку чи квартирі в Гелдропі, Північний Брабант.";
        document.querySelector("#services h2").innerText = "Наші Послуги";
        document.querySelector("#projects h2").innerText = "Наші Проекти";
        document.querySelector("#offers h2").innerText = "Наші Пропозиції";
        document.querySelector("#contact h2").innerText = "Зв'яжіться з нами";
        document.querySelector("footer p").innerText =
            "© 2024 Bezumnyy Tekhnarioz - Усі права захищені";
    } else if (language === "ru") {
        document.querySelector("#home h2").innerText = "Добро пожаловать в Bezumnyy Tekhnarioz";
        document.querySelector("#home p").innerText =
            "Мы предоставляем услуги по установке, замене и обслуживанию электрических систем в вашем доме или квартире в Гелдропе, Северный Брабант.";
        document.querySelector("#services h2").innerText = "Наши Услуги";
        document.querySelector("#projects h2").innerText = "Наши Проекты";
        document.querySelector("#offers h2").innerText = "Наши Предложения";
        document.querySelector("#contact h2").innerText = "Свяжитесь с нами";
        document.querySelector("footer p").innerText =
            "© 2024 Bezumnyy Tekhnarioz - Все права защищены";
    }

