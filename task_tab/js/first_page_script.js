var ContentTabs = document.querySelectorAll('.main-content');
var checkClickTabInAllContent = []
for (let index = 0; index < ContentTabs.length; index++) {
    let CountTabItemInCurrentContent = ContentTabs[index].querySelectorAll('.menu-tab__menu-item').length
    var tmp_arr = [] 
    for (let j_index = 0; j_index < CountTabItemInCurrentContent; j_index++) {
        tmp_arr.push(false)
    }
    tmp_arr[0] = true
    checkClickTabInAllContent.push(tmp_arr)
}

document.addEventListener('DOMContentLoaded',function(){
    function open_new_tab(indexTabContent,indexTab)
    {
        /*
            indexTabContent - id отдельно взятого блока TAB
            indexTab - id само TabMenu в каждом блоке
        */
        let allElementsContentBlock = document.querySelectorAll('.main-content')[indexTabContent]; // получение блоков
        let allMenuTab = allElementsContentBlock.querySelectorAll('.menu-tab__menu-item') // получение меню табов
        let allTabItem = allElementsContentBlock.querySelectorAll('.data-tab__tab-item') // получение всего контента табов

        checkClickTabInAllContent[indexTabContent][indexTab]=true
        
        if(!checkClickTabInAllContent[indexTabContent].includes(false)){
            allElementsContentBlock.querySelector('.button-continue__button').classList.remove('button-continue__button-not-active')
        }

        for (let index = 0; index < allMenuTab.length; index++) {
            if(index == indexTab){
                allTabItem[index].classList.remove('data-tab__tab-item_not_visible')
                allMenuTab[index].classList.add('menu-tab__menu-item_select_now')
            }
            else
            {
                allTabItem[index].classList.add('data-tab__tab-item_not_visible')
                if(allMenuTab[index].classList.contains('menu-tab__menu-item_select_now'))
                    allMenuTab[index].classList.remove('menu-tab__menu-item_select_now')
            }
            
        }
    }
    let allElementsTabContent = document.querySelectorAll('.main-content')   
    for (let index = 0; index < allElementsTabContent.length; index++) {
        allElementsTabInContent = allElementsTabContent[index].querySelectorAll('.menu-tab__menu-item');
        for (let j_index = 0; j_index < allElementsTabInContent.length; j_index++) {
            allElementsTabInContent[j_index].addEventListener('click',()=>open_new_tab(index,j_index))
        }
    }
})
