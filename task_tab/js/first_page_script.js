


function start_script_tab(){
    var allTabElement = document.querySelectorAll('.main-content'); // получаю все Табы
    var checkClickTabInAllContent = [] // Массив для отслеживания просмотров всех вкладок

   
    
    for (let index = 0; index < allTabElement.length; index++) {

        function open_new_tab(indexTabElement,indexTabMenu)
        {
            /*
                indexTabElement - id отдельно взятого блока TAB
                indexTabMenu - id само TabMenu в каждом блоке
            */
            let currentTab = allTabElement[indexTabElement]; // получение конкретного таб-элемента
            let allMenuTabInCurrentTab = currentTab.querySelectorAll('.menu-tab__menu-item') // получение меню табов для текущего таб-элемента
            let allTabContentInCurrentTab = currentTab.querySelectorAll('.data-tab__tab-item') // получение всех контентов для каждого таба в текущем таб-элементе
    
            checkClickTabInAllContent[indexTabElement][indexTabMenu]=true // помечаю, что посмотрел вкладку в этом таб-элемента и какую именно по счету вкладку
            
            if(!checkClickTabInAllContent[indexTabElement].includes(false)){ // проверяю для конкретного таб-элемента, не все ли вклади уже были просмотрены
                currentTab.querySelector('.button-continue__button').classList.remove('button-continue__button-not-active') // разблокировка кнопки
            }
            for (let index = 0; index < allMenuTabInCurrentTab.length; index++) {
                if(index == indexTabMenu){
                    allTabContentInCurrentTab[index].classList.remove('data-tab__tab-item_not_visible')
                    allMenuTabInCurrentTab[index].classList.add('menu-tab__menu-item_select_now')
                }
                else
                {
                    allTabContentInCurrentTab[index].classList.add('data-tab__tab-item_not_visible')
                    if(allMenuTabInCurrentTab[index].classList.contains('menu-tab__menu-item_select_now'))
                        allMenuTabInCurrentTab[index].classList.remove('menu-tab__menu-item_select_now')
                }
                
            }
        }
        let allTabItemInTabElement = allTabElement[index].querySelectorAll('.menu-tab__menu-item'); // получаю все таб-меню для каждого таба
        let tmpArrForViewTabItem = []  // массив для создания элементов массива для отслеживания просмотра всех вкладок

        for (let j_index = 0; j_index < allTabItemInTabElement.length; j_index++) { // пробегаюсь по всем там-меню каждого таб-контента
            allTabItemInTabElement[j_index].addEventListener('click',()=>open_new_tab(index,j_index))
            tmpArrForViewTabItem.push(false);
        }
        tmpArrForViewTabItem[0] = true
        checkClickTabInAllContent.push(tmpArrForViewTabItem)


       
        
    }
}


document.addEventListener('DOMContentLoaded',start_script_tab)