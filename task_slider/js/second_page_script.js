// Код для проверки просмотра всех слайдов и хранения номера салйда для каждого слайдар
var ContentSlider = document.querySelectorAll('.block-slider')
var NumberSlideInAllSlider = Array(ContentSlider.length).fill(0)
var CheckViewAllSlideInSliders = Array()

for (let index = 0; index < ContentSlider.length; index++) {
    CountSlideInCurrentSliders = ContentSlider[index].querySelectorAll('.block-slider__item').length
    CheckViewAllSlideInSliders.push(Array(CountSlideInCurrentSliders).fill(false))
    CheckViewAllSlideInSliders[index][0] = true
}

function make_circles(indexSliderCurrent){
    block_dots = ContentSlider[indexSliderCurrent].querySelector('.block-slider__dots')
    LenghtSlideInCurrentSlider =  ContentSlider[indexSliderCurrent].querySelectorAll('.block-slider__item').length;
    block_dots.innerHTML = "";
    for (let index = 0; index < LenghtSlideInCurrentSlider; index++) {
        dot = document.createElement('span');
        dot.classList.add('dot')
        dot.onclick = function(){open_new_slide(indexSliderCurrent,"open_special",index)}
        if(index === NumberSlideInAllSlider[indexSliderCurrent])
            dot.classList.add('dot_active')
        block_dots.appendChild(dot)
    }
}
function open_new_slide(indexSliderCurrent,doName,numberOpenSlide=null){
    /*
        indexSliderCurrent - id слайдера
        indexSlide - id слайда в слайдере
        doName - действие, которое требуется сделать(предыдущий,следующий, выьранный слайд)
     */
  
    LenghtSlideInCurrentSlider =  ContentSlider[indexSliderCurrent].querySelectorAll('.block-slider__item').length;
    NumberOldSlide = NumberSlideInAllSlider[indexSliderCurrent]
    if(doName=='prev_slide'){
        NumberSlideInAllSlider[indexSliderCurrent]-=1
        if(NumberSlideInAllSlider[indexSliderCurrent]<0)
            NumberSlideInAllSlider[indexSliderCurrent]=LenghtSlideInCurrentSlider-1
    }
    else if (doName =='next_slide'){
        NumberSlideInAllSlider[indexSliderCurrent]+=1
        if(NumberSlideInAllSlider[indexSliderCurrent]>=LenghtSlideInCurrentSlider)
            NumberSlideInAllSlider[indexSliderCurrent]=0
    }
    else{
        NumberSlideInAllSlider[indexSliderCurrent] = numberOpenSlide
    }
    CheckViewAllSlideInSliders[indexSliderCurrent][NumberSlideInAllSlider[indexSliderCurrent]]=true;
    if(!CheckViewAllSlideInSliders[indexSliderCurrent].includes(false)){
        ContentSlider[indexSliderCurrent].querySelector('.button-continue__button').classList.remove('button-continue__button-not-active')
    }
    ContentSlider[indexSliderCurrent].querySelectorAll('.block-slider__item')[NumberOldSlide].classList.remove('block-slider__item_current_slide')
    ContentSlider[indexSliderCurrent].querySelectorAll('.block-slider__item')[NumberSlideInAllSlider[indexSliderCurrent]].classList.add('block-slider__item_current_slide')
    make_circles(indexSliderCurrent)
}
document.addEventListener('DOMContentLoaded',function(){
    ContentSlider = document.querySelectorAll('.block-slider')
    for (let index = 0; index < ContentSlider.length; index++) {
        ContentSlider[index].querySelector('.block-slider__prev-button').addEventListener('click', ()=>open_new_slide(index,'prev_slide'))
        ContentSlider[index].querySelector('.block-slider__next-button').addEventListener('click', ()=>open_new_slide(index,'next_slide'))
        make_circles(index)
        
    }
})

