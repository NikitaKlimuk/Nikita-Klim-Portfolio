window.addEventListener('DOMContentLoaded', () => {
    // Tabs (My works)
    function tabs() {
        const tabs = document.querySelectorAll('.works__section'),
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
    }

    tabs();


    function slider() {
        //Slider
        const slides = document.querySelectorAll('.lastVideos__slider_item'),
              prev = document.querySelector('.left'),
              next = document.querySelector('.right'),
              dots = document.querySelectorAll('.lastVideos__dot')

        let slideIndex = 3;

        showSlides(slideIndex);

        function showOneSlides(n) {
            let mainSlide = slides[slideIndex],
                mainDots = dots[slideIndex - 1];

            if (n > slides.length) {
                slideIndex = 0;
            }

            if (n < 0) {
                slideIndex = slides.length;
            }

            dots.forEach((item) => {
                item.classList.remove('lastVideos__dot_active');
            })

            slides.forEach((item) => {
                item.style.display = 'none';
                item.classList.remove('active');
            });

            mainDots.classList.add('lastVideos__dot_active');
            mainSlide.classList.add('active');
            mainSlide.style.display = 'block';
        }
        
        function showSlides(n) {
            let mainSlide = slides[slideIndex],
                mainDots = dots[slideIndex - 1],
                prevSlide = slides[slideIndex - 1],
                nextSlide = slides[slideIndex + 1];

            if (n > slides.length) {
                slideIndex = 0;
            }

            if (n < 0) {
                slideIndex = slides.length;
            }

            dots.forEach((item) => {
                item.classList.remove('lastVideos__dot_active');
            })

            slides.forEach((item) => {
                item.style.display = 'none';
                item.classList.remove('active');
            });

            mainDots.classList.add('lastVideos__dot_active');
            mainSlide.classList.add('active');
            mainSlide.style.display = 'block';

            prevSlide.style.display = 'block';
            nextSlide.style.display = 'block';
        }

        function renderSlides() {
            window.addEventListener('resize', () => {
                if (window.innerWidth >= 1400) {
                    showSlides(3)
                } else if (window.innerWidth < 1400) {
                    showOneSlides(3)
                }
            })

            if (window.innerWidth >= 1400) {
                showSlides(3)
            } else if (window.innerWidth < 1400) {
                showOneSlides(3)
            }
        }

        renderSlides();

        function plusSlides(n) {
            if (window.innerWidth >= 1400) {
                showSlides(slideIndex += n)
            } else {
                showOneSlides(slideIndex += n)
            } 
        }

        prev.addEventListener('click', () => {
            if (slideIndex > 1) {
                plusSlides(-1)
            }
        });

        next.addEventListener('click', () => {
            if (slideIndex < 5) {
                plusSlides(+1);
            }
        });
    }
    
    slider();
});