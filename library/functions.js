export function change(item) {
    const menu = document.querySelector(".menu");
    // const main = document.querySelector("main");
    item.classList.toggle("change");
    menu.classList.toggle("change");
    // main.classList.toggle("mainChange");
}