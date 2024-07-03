// Function to toggle the side menu
function toggleMenu() {
    const sideMenu = document.getElementById("side-menu");
    if (sideMenu.style.width === "250px") {
        sideMenu.style.width = "0";
    } else {
        sideMenu.style.width = "250px";
    }
}

// Function to load the navbar into the header
document.addEventListener('DOMContentLoaded', function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
            // After inserting the navbar, add the event listener to the menu button
            const menuBtn = document.querySelector('.menu-btn');
            if (menuBtn) {
                menuBtn.addEventListener('click', toggleMenu);
            }
        })
        .catch(error => console.error('Error loading the navbar:', error));
});