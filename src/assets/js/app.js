document.addEventListener("DOMContentLoaded", () => {
    //= components/

    Fancybox.bind("[data-fancybox]", {
        Thumbs: false
    });

    gsap.registerPlugin(ScrollTrigger);

    SmoothScroll({
        // Время скролла 400 = 0.4 секунды
        animationTime: 800,
        // Размер шага в пикселях 
        stepSize: 75,

        // Дополнительные настройки:

        // Ускорение 
        accelerationDelta: 30,
        // Максимальное ускорение
        accelerationMax: 2,

        // Поддержка клавиатуры
        keyboardSupport: true,
        // Шаг скролла стрелками на клавиатуре в пикселях
        arrowScroll: 50,

        // Pulse (less tweakable)
        // ratio of "tail" to "acceleration"
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,

        // Поддержка тачпада
        touchpadSupport: true,
    })


    gsap.to(".ticker-content", {
        xPercent: 100,
        ease: "none",
        repeat: -1,
        duration: 10
    });

    if (document.querySelector('.video-container button')) {
        document.querySelector('.video-container button').addEventListener('click', function () {
            var video = document.querySelector('.video-container video');
            video.play();
            video.setAttribute('controls', '');
            this.style.display = 'none';
        });
    }

    document.querySelectorAll('.increase, .decrease').forEach(function (button) {
        button.addEventListener('click', function () {
            const input = this.parentNode.querySelector('.number-input');
            const currentValue = parseInt(input.value, 10);
            if (this.classList.contains('increase')) {
                input.value = currentValue + 1;
            } else if (currentValue > 0) {
                input.value = currentValue - 1;
            }
        });
    });

    let additionToWatchSwiper = new Swiper(".addition-to-watch-swiper", {
        slidesPerView: 4,
        spaceBetween: 50,
    });


    function initializeCustomSelect(selectContainer) {
        const select = selectContainer.querySelector('.my-select');
        const selectTrigger = selectContainer.querySelector('.select-trigger');
        const selectTriggerSpan = selectContainer.querySelector('.select-trigger span')
        const selectOptions = selectContainer.querySelector('.select-options');
        const selectOptionsList = selectContainer.querySelectorAll('.select-options li');

        selectTrigger.addEventListener('click', function () {
            selectOptions.style.display = selectOptions.style.display === 'flex' ? 'none' : 'flex';
        });

        selectOptionsList.forEach(function (option) {
            option.addEventListener('click', function () {
                const value = option.getAttribute('data-value');
                selectTriggerSpan.textContent = option.textContent;
                select.value = value;
                selectOptions.style.display = 'none';
                console.log('Selected value:', value);
            });
        });

        // Закрытие выпадающего списка при клике вне элемента
        document.addEventListener('click', function (event) {
            const target = event.target;
            if (!selectTrigger.contains(target) && !selectOptions.contains(target)) {
                selectOptions.style.display = 'none';
            }
        });
    }

    // Применяем функцию к каждому селекту
    const selectContainers = document.querySelectorAll('.custom-select');
    selectContainers.forEach(function (container) {
        initializeCustomSelect(container);
    });

    let formDeliveryContent = document.querySelector('.form-delivery__content')
    let formDeliveryBtns = document.querySelectorAll('.form-delivery__tabs-btn')


    formDeliveryBtns.forEach(e => {
        e.addEventListener('click', el => {
            formDeliveryBtns.forEach(elem => {
                elem.classList.remove('--active');
            });
            e.classList.add("--active");
            formDeliveryContent.innerHTML = e.querySelector('div').innerHTML;
    
            const newSelectContainers = formDeliveryContent.querySelectorAll('.custom-select');
            newSelectContainers.forEach(function (container) {
                initializeCustomSelect(container);
            });
        });
    });

});



