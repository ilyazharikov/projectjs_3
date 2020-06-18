function sliders({sliderSelcetor, slidersSelector, preArrow, nextArrow, totalCounter, currentCounter, wrapper, field}) {
    // Sliders 

    const pre = document.querySelector(preArrow),
          next = document.querySelector(nextArrow),
          slider = document.querySelectorAll(sliderSelcetor),
          slides = document.querySelector(slidersSelector),
          total = document.querySelector(totalCounter),
          current = document.querySelector(currentCounter),
          sliderWrapper = document.querySelector(wrapper),
          sliderField = document.querySelector(field),
          width = window.getComputedStyle(sliderWrapper).width;

    let sliderIndex = 1;
    let offset = 0;

    if (slider.length < 10) {
        total.textContent = `0${slider.length}`;
        current.textContent = `0${sliderIndex}`;
    } else {
        total.textContent = slider.length;
        current.textContent = sliderIndex;
    }
    
    sliderField.style.width = 100 * slider.length + '%';
    sliderField.style.display = 'flex';
    sliderField.style.transition = "0.5s all";

    sliderWrapper.style.overflow = 'hidden';

    slider.forEach(slide => {
        slide.style.width = width;
    });

    slides.style.position = 'relative';

    const indicators = document.createElement('ol'),
          dots = [];

    indicators.classList.add('carusel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    slides.append(indicators);

    for (let i = 0; i < slider.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;
    `;

        if (i === 0) {
            dot.style.opacity = '1';
        }

        indicators.append(dot);
        dots.push(dot);
    }


    function deleteWidth(str) {
        return +str.replace(/\D/g, '');
    }

    next.addEventListener('click', () => {
        if (offset == (deleteWidth(width) * (slider.length - 1))) {
            offset = 0;
        } else {
            offset += deleteWidth(width) ;
        }

        sliderField.style.transform = `translateX(-${offset}px)`;

        if (slider.length == sliderIndex) {
            sliderIndex = 1;
        } else {
            sliderIndex++;
        }

        currentCount(current);

        dotsCount(dots);
    });

    pre.addEventListener('click', () => {
        if (offset === 0) {  
            offset = (deleteWidth(width)  * (slider.length - 1));
        } else {
            offset -= deleteWidth(width);
        }

        sliderField.style.transform = `translateX(-${offset}px)`;

        if (sliderIndex === 1) {
            sliderIndex = slider.length;
        } else {
            sliderIndex--;
        }

        currentCount(current);

        dotsCount(dots);
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            sliderIndex = slideTo;
            offset = deleteWidth(width)  * (slideTo - 1);

            sliderField.style.transform = `translateX(-${offset}px)`;

            currentCount(current);

            dotsCount(dots);

        });
    });

    function currentCount(count) {
        if (slider.length < 10) {
            count.textContent = `0${sliderIndex}`;
        } else {
            count.textContent = sliderIndex;
        }
    }

    function dotsCount(arr) {
        arr.forEach(dot => dot.style.opacity = '.5');
        arr[sliderIndex - 1].style.opacity = '1';
    }
}

export default sliders;