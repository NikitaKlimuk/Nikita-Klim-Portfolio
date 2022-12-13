
// GET tabs
async function getVideos() {

    // Отправляем запрос, получаем JSON
    const response = await fetch('./js/videos.json');
    const videoArray = await response.json();
    // renderProducts(productsArray);

    renderNRandomVideos(videoArray, 6);

}
getVideos();

// Получаем враппер для рендера
const wrapper = document.querySelector('.works__content');

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
    //console.log(randomVideos);
    renderVideos(randomVideos);
}

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
function tabsClick() {
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
tabsClick();
