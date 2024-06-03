var counter_slider = 1;

function make_circles(){
    // Код для создания "крошек" каждый раз при переключении слайдера
    block_dots = document.querySelector('.block-slider__dots')
    block_dots.innerHTML = "";
    for (let index = 1; index <=4; index++) {
        dot = document.createElement('span');
        dot.classList.add('dot')
        dot.onclick = function(){special_open_slide(index)}
        if(index === counter_slider)
            dot.classList.add('dot_active')
        block_dots.appendChild(dot)

                
    }
}

document.addEventListener("DOMContentLoaded", make_circles);

function view_slide_current(){
    //new_slide = document.querySelector('item_slider_'+counter_slider)
    document.querySelector('.block-slider__item[data-id=slider_'+counter_slider+']').classList.add('block-slider__item_current_slide')
    make_circles()
}
function special_open_slide(special_id)
{
    document.querySelector('.block-slider__item[data-id=slider_'+counter_slider+']').classList.remove('block-slider__item_current_slide')
    counter_slider = special_id
    view_slide_current()
}
function prev_slide_open(){
    counter_slider-=1;
    if (counter_slider<1){
        document.querySelector('.block-slider__item[data-id=slider_'+(counter_slider+1)+']').classList.remove('block-slider__item_current_slide')
        counter_slider =4
        view_slide_current() 
    }
    else
    {
        document.querySelector('.block-slider__item[data-id=slider_'+(counter_slider+1)+']').classList.remove('block-slider__item_current_slide')
        view_slide_current()

    }
}

function next_slide_open(){
    if(counter_slider==3){
        document.querySelector('.button-continue__button').classList.remove('button-continue__button-not-active')
    }
    counter_slider+=1;
    if (counter_slider>4){
        document.querySelector('.block-slider__item[data-id=slider_'+(counter_slider-1)+']').classList.remove('block-slider__item_current_slide')
        counter_slider =1
        
        view_slide_current() 
    }
    else
    {
        document.querySelector('.block-slider__item[data-id=slider_'+(counter_slider-1)+']').classList.remove('block-slider__item_current_slide')
        view_slide_current()
    }
}


document.querySelector('.block-slider__prev-button').addEventListener('click',prev_slide_open)
document.querySelector('.block-slider__next-button').addEventListener('click',next_slide_open)
