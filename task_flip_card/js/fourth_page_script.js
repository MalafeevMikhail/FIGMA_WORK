count_card = 3
my_struct = Array(count_card).fill(0)

function check_all_view_card()
{
    for (let index = 0; index < my_struct.length; index++) {
        if(my_struct[index]==0)
            return false        
    }
    return true
}

function flip_open(sender,index)
{
    my_struct[index-1] = 1
    if(check_all_view_card()){
        document.querySelector('.button-continue__button').classList.remove('button-continue__button-not-active')
    }

    console.log(index);

    sender.querySelector('.main-content__card_front_content').style.transform = "rotateY(-180deg)"
    sender.querySelector('.main-content__card-back-content').style.transform = "rotateY(0deg)"

}

function flip_close(sender,index)
{
    my_struct[index-1] = 1
    sender.querySelector('.main-content__card_front_content').style.transform = "rotateY(0deg)"
    sender.querySelector('.main-content__card-back-content').style.transform = "rotateY(180deg)"

}