// import * as functions from '../library/functions.js';
import * as model from '../model/model.js';
import * as view from '../view/view.js';
let nav = document.querySelector(".nav-container");
model.getNav();
//right now this just gets the data. what we want is to call the view function that will get data, render it, and print to dom
// nav.addEventListener("click", model.getNav);

const menuIcon = document.querySelector(".menuIcon");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");

menuIcon.addEventListener("click", ()=>{change()});

function  change() {
    menu.classList.toggle("change");
    menuIcon.classList.toggle("change");
    main.classList.toggle("mainChange");
}