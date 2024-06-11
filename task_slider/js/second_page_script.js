// Код для проверки просмотра всех слайдов и хранения номера салйда для каждого слайдар



function start_script_slider(){
    var ContentSlider = document.querySelectorAll('.block-slider')
    var NumberSlideInAllSlider = Array(ContentSlider.length).fill(0)
    var CheckViewAllSlideInSliders = []

    for (let index = 0; index < ContentSlider.length; index++) {
        function make_circles(indexSliderCurrent){
            let block_dots = ContentSlider[indexSliderCurrent].querySelector('.block-slider__dots')
            let LenghtSlideInCurrentSlider =  ContentSlider[indexSliderCurrent].querySelectorAll('.block-slider__item').length;
            block_dots.innerHTML = "";
            for (let index = 0; index < LenghtSlideInCurrentSlider; index++) {
                dot = document.createElement('span');
                dot.classList.add('dot')
                dot.onclick = function(){open_new_slide(indexSliderCurrent,index)}
                if(index === NumberSlideInAllSlider[indexSliderCurrent])
                    dot.classList.add('dot_active')
                block_dots.appendChild(dot)
            }
        }
        function open_new_slide(indexSliderCurrent,indexSlideInSlider){
            /*
                indexSliderCurrent - id слайдера
                indexSlideInSlider - id слайда который требуется открыть
                doName - действие, которое требуется сделать(предыдущий,следующий, выбранный слайд)
             */
            let NumberOldSlide = NumberSlideInAllSlider[indexSliderCurrent]
            let LenghtSlideInCurrentSlider =  ContentSlider[indexSliderCurrent].querySelectorAll('.block-slider__item').length;

            if (indexSlideInSlider >= LenghtSlideInCurrentSlider)
                NumberSlideInAllSlider[indexSliderCurrent] = 0
            else if( indexSlideInSlider <0 )
                NumberSlideInAllSlider[indexSliderCurrent] = LenghtSlideInCurrentSlider - 1
            else
                 NumberSlideInAllSlider[indexSliderCurrent] = indexSlideInSlider

            CheckViewAllSlideInSliders[indexSliderCurrent][NumberSlideInAllSlider[indexSliderCurrent]]=true;

            if(!CheckViewAllSlideInSliders[indexSliderCurrent].includes(false)){
                ContentSlider[indexSliderCurrent].querySelector('.button-continue__button').classList.remove('button-continue__button-not-active')
            }
            ContentSlider[indexSliderCurrent].querySelectorAll('.block-slider__item')[NumberOldSlide].classList.remove('block-slider__item_current_slide')
            ContentSlider[indexSliderCurrent].querySelectorAll('.block-slider__item')[NumberSlideInAllSlider[indexSliderCurrent]].classList.add('block-slider__item_current_slide')
            make_circles(indexSliderCurrent)
        }

        ContentSlider[index].querySelector('.block-slider__prev-button').addEventListener('click', ()=>open_new_slide(index, NumberSlideInAllSlider[index]-1, 'prev_slide'))
        ContentSlider[index].querySelector('.block-slider__next-button').addEventListener('click', ()=>open_new_slide(index,NumberSlideInAllSlider[index]+1, 'next_slide'))
        let CountSlideInCurrentSliders = ContentSlider[index].querySelectorAll('.block-slider__item').length
        CheckViewAllSlideInSliders.push(Array(CountSlideInCurrentSliders).fill(false))
        CheckViewAllSlideInSliders[index][0] = true
        make_circles(index)
        
    }
}
    

document.addEventListener('DOMContentLoaded',start_script_slider)

