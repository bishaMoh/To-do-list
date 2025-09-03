console.log("working");

import { loadContent } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";

document.addEventListener("DOMContentLoaded", () => {
    loadContent();
    
});
 const homeButton = document.getElementById("home");
 homeButton.addEventListener("click", () => {
    loadContent();
});

const menuButton = document.getElementById("menu");
menuButton.addEventListener("click", () => {
        menu();
});

const contactBotton = document.getElementById("contact");
contactBotton.addEventListener("click", () => {
    contact();
});