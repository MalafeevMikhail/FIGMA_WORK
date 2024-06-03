
var count_tab = 4
// Код для проверки нажатия
var check_click_all_tav = Array(count_tab).fill(0)
check_click_all_tav[0] = 1
function check_click_tabs(){
    for (let index = 0; index < check_click_all_tav.length; index++) {
        if(check_click_all_tav[index]==0)
            return false
    }
    return true
}
function open_new_tab(index_tab)
{
    check_click_all_tav[index_tab-1]=1
    if(check_click_tabs()){
        document.querySelector('.button-continue__button').classList.remove('button-continue__button-not-active')
    }
    for (let index = 1; index <= count_tab; index++) {
        if(index == index_tab){
            //document.getElementById('tab_'+index).setAttribute('style','display:block')
            document.querySelector('.data-tab__tab-item[data-id=tab_'+index+']').classList.remove('data-tab__tab-item_not_visible');
            document.querySelector('.menu-tab__menu-item[data-id=menu-tab__item_'+index+']').classList.add('menu-tab__menu-item_select_now')
        }
        else
        {
            document.querySelector('.data-tab__tab-item[data-id=tab_'+index+']').classList.add('data-tab__tab-item_not_visible')
            if(document.querySelector('.menu-tab__menu-item[data-id=menu-tab__item_'+index+']').classList.contains('menu-tab__menu-item_select_now'))
                document.querySelector('.menu-tab__menu-item[data-id=menu-tab__item_'+index+']').classList.remove('menu-tab__menu-item_select_now')
        }
        
    }
}
