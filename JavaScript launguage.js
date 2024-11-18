function changeLanguage() {
    const language = document.getElementById('language').value;
    if (language === "en") {
        document.querySelector("header nav ul li:nth-child(1) a").innerText = "Home";
        // Update all other sections' text for English
    }
    // Similar logic for other languages
}
