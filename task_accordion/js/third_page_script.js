var ContentAccordion = document.querySelectorAll('.main-content');
var CheckViewAllAccordItem = Array();

for (let index = 0; index < ContentAccordion.length; index++) {
    CountSlideInCurrentSliders = ContentAccordion[index].querySelectorAll('.main-content__tab-item').length
    CheckViewAllAccordItem.push(Array(CountSlideInCurrentSliders).fill(false))
    CheckViewAllAccordItem[index][0] = true
}

function open_items(indexTabContent,indexTabItem){
        var cur_element =  ContentAccordion[indexTabContent].querySelectorAll('.main-content__tab-content')[indexTabItem]

        CheckViewAllAccordItem[indexTabContent][indexTabItem] = true

        if(!CheckViewAllAccordItem[indexTabContent].includes(false))
            ContentAccordion[indexTabContent].querySelector('.button-continue__button').classList.remove('button-continue__button-not-active')
        if (cur_element.classList.contains('main-content__tab-item_active')){
            ContentAccordion[indexTabContent].querySelectorAll('.main-content__tab-icon')[indexTabItem].setAttribute('src','./img/btn_down_click.svg')

        }
        else
        {
            ContentAccordion[indexTabContent].querySelectorAll('.main-content__tab-icon')[indexTabItem].setAttribute('src','./img/btn_up_click.svg')

        }
        cur_element.classList.toggle('main-content__tab-item_active')
        ContentAccordion[indexTabContent].querySelectorAll('.main-content__tab-item')[indexTabItem].classList.toggle('main-content__tab-item_open')
}

document.addEventListener('DOMContentLoaded',function(){
    allElementsTabContent = document.querySelectorAll('.main-content') 
    for (let index = 0; index < allElementsTabContent.length; index++) {
        allElementTabMenu = allElementsTabContent[index].querySelectorAll('.main-content__name-tab')
        for (let j_index = 0; j_index < allElementTabMenu.length; j_index++) {
            allElementTabMenu[j_index].addEventListener('click',()=>open_items(index,j_index))
        }
    }
})
