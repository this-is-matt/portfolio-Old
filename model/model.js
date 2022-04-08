import * as view from '../view/view.js';
export function getNav() {
    // let navList;
    let navPath = "../json/navList.json";
    // let navArray;
    fetch(navPath)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            let navName = data.navName;
            let navPath = data.navPath;
            console.log(navName, navPath);

            view.setNav(navName, navPath);
        });
}