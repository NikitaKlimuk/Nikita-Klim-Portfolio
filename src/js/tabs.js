
// GET tabs
async function getVideos() {

    // Отправляем запрос, получаем JSON
    const response = await fetch('./js/videos.json');
    const videoArray = await response.json();

    renderNRandomVideos(videoArray, 6);

    const moreBtn = document.querySelector('.more_link');
    const tabs = document.querySelectorAll('.works__section');

    // Логика для кнопок
    function moreBtns() {

        moreBtn.addEventListener('click', () => {
            deleteContent()
            renderNRandomVideos(videoArray, 9);
            moreBtn.classList.add('hide');
        })
    }
    moreBtns();

    function allBtn() {
        const allBtn = document.querySelector(`#all`);

        allBtn.addEventListener('click', () => {
            deleteContent();
            clearTabStyle();
            renderNRandomVideos(videoArray, 6);
            allBtn.classList.add('works__section_active');
            moreBtn.classList.remove('hide');
        })
    }
    allBtn();

    function anyBtn(string) {
        const btn = document.querySelector(`#${string}`);

        const arr = videoArray.filter((item) => {
           return item.category == `${string}`;
        });

        btn.addEventListener('click', () => {
            deleteContent();
            clearTabStyle();
            renderNRandomVideos(arr);
            btn.classList.add('works__section_active');
            moreBtn.classList.add('hide');
        })
    }
    anyBtn('wedding');
    anyBtn('clips');
    anyBtn('shorts');


    // Очищаем все табы
    function deleteContent() {
        // Получаем все items
        items = document.querySelectorAll('.works__content_item');
        items.forEach(item => item.remove());
    }

    // Очистка стилей
    function clearTabStyle() {
        tabs.forEach(item => {
            item.classList.remove('works__section_active');
        });
    }
    
}
getVideos();

// const tabs = document.querySelectorAll('.works__section');
// const tabsContent = document.querySelectorAll('.works__content');

// Random video func
function renderNRandomVideos(arr, n) {

    // Получаем массив рандомных видосов
    let randomVideos = [];

    for (i = 0; i <= arr.length - 1; i++) {
        randomVideos.push(arr[i]);
    }

    for (countCycles = 1; countCycles <= arr.length - n; countCycles++) {
        randomVideos.splice(Math.random() * randomVideos.length, 1)[0];
    }
    renderVideos(randomVideos);
}

// Получаем враппер для рендера
const wrapper = document.querySelector('.works__content');

// Функция рендера видосов
function renderVideos(arr) {
    arr.forEach((item) => {
        const videosHTML = `
                <div class="works__content_item">
                    <img src="${item.imgSrc}" alt="${item.title}" class="works_item" id="${item.id}">
                </div>
        `
        wrapper.insertAdjacentHTML('beforeend', videosHTML);
    })
}





// Tabs (My works)
/* function tabsClick() {
    const tabs = document.querySelectorAll('.works__section'),
          tabsContent = document.querySelectorAll('.works__content'),
          tabsParent = document.querySelector('.works__sections');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        // tabs.forEach(item => {
        //     item.classList.remove('works__section_active');
        // });
    }

    //hideTabContent();

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('works__section_active');
    }

    //showTabContent();

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
} */

