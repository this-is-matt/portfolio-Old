import * as modules from '../view/htmlmodules/modules.js';
const navContainer = document.querySelector(".nav-container");
export function setNav(navName, navPath){
    // get nav module from modules, 
    const navItems = renderNav(navName, navPath);
    // render to dom
    navContainer.appendChild(navItems);
}

//some of this probably belongs in the controller file i think. 
function renderNav(navName, navPath) {
    let navItems = document.createElement("ul");
    navItems.setAttribute("class", "nav-list");

    //create nav unordered list
    //need to determine how to add the navPath as well. 
    let navItem;
    let path
    // navName.forEach(item => {
    let i = 0;
        for(i in navName){
        navItem = document.createElement("li");
        path = document.createElement("a");
        
        path.textContent = navName[i];
        navItem.appendChild(path);
        path.setAttribute("href", `${navPath[i]}`);

        navItem.setAttribute("class", "nav-item");

        navItems.appendChild(navItem);
    };

    // navPath.forEach(item => {
    //     console.log(item);

    //     //path is the last value that was set in the other forEach. won't work. 
    //     path.setAttribute("href", item);
    // });
    return navItems;
}