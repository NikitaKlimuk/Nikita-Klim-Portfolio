//Slider
function slider() {
        
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