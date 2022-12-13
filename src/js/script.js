window.addEventListener('DOMContentLoaded', () => {
    // hamburger
    function menu() {
        const hamburger = document.querySelector('.hamburger'),
              menu = document.querySelector('.menu');

        function toggleHamburger() {
            hamburger.addEventListener('click', () => {
                menu.style.display = 'block';
                menu.classList.toggle('menu_active');

            })
        }

        toggleHamburger();

        function closeHamburger() {
            menu.addEventListener('click', () => {
                menu.classList.remove('menu_active');
            })
        } 

        closeHamburger();
    }

    menu();
});