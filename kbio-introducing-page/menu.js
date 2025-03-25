document.addEventListener('DOMContentLoaded', function () {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;

            function toggleMenu() {
                const sideMenu = document.getElementById("side-menu");
                if (!sideMenu) return;
                if (sideMenu.style.width === "250px") {
                    sideMenu.style.width = "0";
                } else {
                    sideMenu.style.width = "250px";
                }
            }

            const menuBtn = document.querySelector('.menu-btn');
            if (menuBtn) {
                menuBtn.addEventListener('click', toggleMenu);
            }

            const closeBtn = document.querySelector('.close-btn');
            if (closeBtn) {
                closeBtn.addEventListener('click', toggleMenu);
            }
            
            const submenuToggles = document.querySelectorAll('.submenu-toggle');
            submenuToggles.forEach(toggle => {
                const parentLink = toggle.previousElementSibling;
                if (parentLink) {
                    parentLink.addEventListener('click', function (e) {
                        e.preventDefault(); // Prevent "#" navigation
                        toggle.style.display = (toggle.style.display === 'block') ? 'none' : 'block';
                    });
                }
            });
        })
        .catch(error => console.error('Error loading the navbar:', error));
});