var ContentAccordion = document.querySelectorAll('.main-content')

var CheckViewAllAccordItem = Array()

for (let index = 0; index < ContentAccordion.length; index++) {
    CountSlideInCurrentSliders = ContentAccordion[index].querySelectorAll('.main-content__tab-item').length
    CheckViewAllAccordItem.push(Array(CountSlideInCurrentSliders).fill(false))
    CheckViewAllAccordItem[index][0] = true
}

// var tabsArr = Array(count_tab).fill(0)
// function check_all_view()
// {
//     for (let index = 0; index < tabsArr.length; index++) {
//         if(tabsArr[index]===0){
//             return false
//         }
//     }
//     return true
// }
function open_items(indexTabContent,indexTabItem){
        // var cur_element =  document.getElementById('tab_'+index).classList.toggle('tab_active')
        var cur_element =  ContentAccordion[indexTabContent].querySelectorAll('.main-content__tab-content')[indexTabItem]

        console.log(cur_element)
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
        //tabsArr[special_id-1] = 1
        // if(check_all_view()==true)
        //     document.querySelector('.button-continue__button').classList.remove('button-continue__button-not-active')
}


document.addEventListener('DOMContentLoaded',function(){
    allElementsTabContent = document.querySelectorAll('.main-content') 
    //console.log("всего - ", allElementsTabContent)  
    for (let index = 0; index < allElementsTabContent.length; index++) {
        allElementTabMenu = allElementsTabContent[index].querySelectorAll('.main-content__name-tab')
        //console.log("Внутри - ", allElementTabMenu)
        for (let j_index = 0; j_index < allElementTabMenu.length; j_index++) {
            allElementTabMenu[j_index].addEventListener('click',()=>open_items(index,j_index))
        }
    }
})
