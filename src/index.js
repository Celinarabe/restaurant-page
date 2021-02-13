//import statements
import { onload } from './homePage.js';
import { loadContact } from './contactPage.js';
import { loadMenu } from './menuPage.js';

//start of script
console.log('we are using webpack teehee');

//add navbar event listeners
document.getElementById("home-btn").addEventListener("click", onload)
document.getElementById("contact-btn").addEventListener("click", loadContact)
document.getElementById("menu-btn").addEventListener("click", loadMenu)



onload();