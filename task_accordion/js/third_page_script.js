function start_script_accord(){
    var allElementAccordElement = document.querySelectorAll('.main-content');
    var CheckViewAllAccordItem = [];
    for (let index = 0; index < allElementAccordElement.length; index++) {
        function open_items(indexTabItem){
            var cur_element =  allElementAccordElement[index].querySelectorAll('.main-content__tab-content')[indexTabItem]

            CheckViewAllAccordItem[index][indexTabItem] = true

            if(!CheckViewAllAccordItem[index].includes(false))
                allElementAccordElement[index].querySelector('.button-continue__button').classList.remove('button-continue__button-not-active')
            
            if (cur_element.classList.contains('main-content__tab-item_active')){
                allElementAccordElement[index].querySelectorAll('.main-content__tab-icon')[indexTabItem].style = "transform:rotate(00deg);"
            }
            else
            {
                allElementAccordElement[index].querySelectorAll('.main-content__tab-icon')[indexTabItem].style = "transform:rotate(180deg);"
            }
            cur_element.classList.toggle('main-content__tab-item_active')
            allElementAccordElement[index].querySelectorAll('.main-content__tab-item')[indexTabItem].classList.toggle('main-content__tab-item_open')
        }

        CountSlideInCurrentSliders = allElementAccordElement[index].querySelectorAll('.main-content__tab-item').length
        CheckViewAllAccordItem.push(Array(CountSlideInCurrentSliders).fill(false))
        allElementTabMenu = allElementAccordElement[index].querySelectorAll('.main-content__name-tab')
        for (let j_index = 0; j_index < allElementTabMenu.length; j_index++) {
            allElementTabMenu[j_index].addEventListener('click',()=>open_items(j_index))
        }
    }
}


document.addEventListener("DOMContentLoaded",start_script_accord)