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
        document.querySelector('.video-container button').addEventListener('click', function() {
            var video = document.querySelector('.video-container video');
            video.play();
            video.setAttribute('controls', '');
            this.style.display = 'none';
        });
    }

    document.querySelectorAll('.increase, .decrease').forEach(function(button) {
        button.addEventListener('click', function() {
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
    

});



