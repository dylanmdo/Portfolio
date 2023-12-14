let tabsMenu = document.querySelectorAll("[data-tab]");
let tabsContent = document.querySelectorAll("[data-content]");
let tabsHeader = document.querySelectorAll("[data-header]");
const hamburgerMenuIcon = document.getElementById("hamburgerMenuIcon");
const hamburgerMenu = document.getElementById("hamburgerMenu");

/**
 * Gère le clic sur un onglet du menu.
 * @param {Event} event - L'événement de clic.
 * @param {number} index - L'index de l'onglet cliqué.
 */
function handleTabClick(event, index) {
    // Masquer tous les contenus
    tabsContent.forEach((content) => {
        content.classList.remove("content-active");
    });

    // Réinitialiser l'état de tous les onglets
    tabsMenu.forEach((tab) => {
        tab.classList.remove('active');
        tab.classList.add('hover:text-neutral-800');
    });

    // Afficher le contenu de l'onglet cliqué
    tabsContent[index].classList.add("content-active");
    event.target.classList.add('active');
    event.target.classList.remove('hover:text-neutral-800');

    // Afficher le contenu de l'en-tête correspondant
    tabsHeader.forEach((content) => {
        content.classList.remove("content-active");
    });
    tabsHeader[index].classList.add("content-active");
}

// Ajoute un écouteur d'événement pour chaque onglet
tabsMenu.forEach((tab, index) => {
    tab.addEventListener("click", (event) => {
        handleTabClick(event, index);
    });
});

/**
 * Gère le clic sur l'icône du menu hamburger.
 */
hamburgerMenuIcon.addEventListener("click", handleHamburgerClick);
function handleHamburgerClick() {
    hamburgerMenu.classList.toggle("hamburger-menu");
    hamburgerMenu.classList.toggle("hamburger-menu-active");
}




