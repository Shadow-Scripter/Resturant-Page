import { loadPage } from './loadPage.js';

document.addEventListener('DOMContentLoaded', () => {
    loadPage();
});
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.querySelector('nav button:nth-child(1)');
    const menuButton = document.querySelector('nav button:nth-child(2)');
    const aboutButton = document.querySelector('nav button:nth-child(3)');
    const contactButton = document.querySelector('nav button:nth-child(4)');

    // Initial load
    loadHome();

    homeButton.addEventListener('click', () => {
        clearContent();
        loadHome();
    });

    menuButton.addEventListener('click', () => {
        clearContent();
        loadMenu();
    });

    contactButton.addEventListener('click', () => {
        clearContent();
        loadContact();
    });

    function clearContent() {
        const content = document.getElementById('content');
        content.innerHTML = '';
    }
});
