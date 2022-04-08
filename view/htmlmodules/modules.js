function renderNav(navList) {
    let navItems = document.createElement("ul");
    navItems.setAttribute("class", "nav-list");

    let navItem;
    //  = document.createElement("li");
    // navItem.setAttribute("class", "nav-item");
    // navItems.appendChild(navItem);

    navList.array.forEach(item => {
        navItem = document.createElement("li");
        navItem.setAttribute("class", "nav-item");
        navItem.innerText(item);
        navItems.appendChild(navItem);
    });
    return navItems;
}