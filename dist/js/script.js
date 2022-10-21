'use strict';

window.addEventListener('DOMContentLoaded', () => {

    // Tabs (My works)

    let tabs = document.querySelectorAll('.works__section'),
        tabsContent = document.querySelectorAll('.works__content'),
        tabsParent = document.querySelector('.works__sections');
    
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('works__section_active');
        });
    }

    hideTabContent();

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('works__section_active');
    }

    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('.works__section'.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
    
});



