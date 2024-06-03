var count_tab = 3
var tabsArr = Array(count_tab).fill(0)
function check_all_view()
{
    for (let index = 0; index < tabsArr.length; index++) {
        if(tabsArr[index]===0){
            return false
        }
    }
    return true
}
function open_items(special_id){
        // var cur_element =  document.getElementById('tab_'+index).classList.toggle('tab_active')
        var cur_element =  document.querySelector('.main-content__tab-content[data-id=tab_content_'+special_id+']')

        console.log(cur_element)
        if (cur_element.classList.contains('main-content__tab-item_active')){
            document.querySelector('.main-content__tab-icon[data-id=icon_'+special_id+']').setAttribute('src','./img/btn_down_click.svg')

        }
        else
        {
            document.querySelector('.main-content__tab-icon[data-id=icon_'+special_id+']').setAttribute('src','./img/btn_up_click.svg')

        }
        cur_element.classList.toggle('main-content__tab-item_active')
        document.querySelector('.main-content__tab-item[data-id=tab_'+special_id+']').classList.toggle('main-content__tab-item_open')
        tabsArr[special_id-1] = 1
        console.log(tabsArr)
        if(check_all_view()==true)
            document.querySelector('.button-continue__button').classList.remove('button-continue__button-not-active')
}