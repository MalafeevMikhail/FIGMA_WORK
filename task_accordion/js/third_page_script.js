function start_script_accord(){
    var allElementAccordElement = document.querySelectorAll('.main-content');
    var CheckViewAllAccordItem = [];
    for (let index = 0; index < allElementAccordElement.length; index++) {
        function open_items(indexTabContent,indexTabItem){
            var cur_element =  allElementAccordElement[indexTabContent].querySelectorAll('.main-content__tab-content')[indexTabItem]

            CheckViewAllAccordItem[indexTabContent][indexTabItem] = true

            if(!CheckViewAllAccordItem[indexTabContent].includes(false))
                allElementAccordElement[indexTabContent].querySelector('.button-continue__button').classList.remove('button-continue__button-not-active')
            
            if (cur_element.classList.contains('main-content__tab-item_active')){
                allElementAccordElement[indexTabContent].querySelectorAll('.main-content__tab-icon')[indexTabItem].setAttribute('src','./img/btn_down_click.svg')
            }
            else
            {
                allElementAccordElement[indexTabContent].querySelectorAll('.main-content__tab-icon')[indexTabItem].setAttribute('src','./img/btn_up_click.svg')
            }
            cur_element.classList.toggle('main-content__tab-item_active')
            allElementAccordElement[indexTabContent].querySelectorAll('.main-content__tab-item')[indexTabItem].classList.toggle('main-content__tab-item_open')
        }
        CountSlideInCurrentSliders = allElementAccordElement[index].querySelectorAll('.main-content__tab-item').length
        CheckViewAllAccordItem.push(Array(CountSlideInCurrentSliders).fill(false))
        CheckViewAllAccordItem[index][0] = true
        allElementTabMenu = allElementAccordElement[index].querySelectorAll('.main-content__name-tab')
        for (let j_index = 0; j_index < allElementTabMenu.length; j_index++) {
            allElementTabMenu[j_index].addEventListener('click',()=>open_items(index,j_index))
        }
    }
}


document.addEventListener("DOMContentLoaded",start_script_accord)