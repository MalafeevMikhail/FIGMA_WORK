function start_script_flipCard(){
    var allElementsCardContent = document.querySelectorAll('.main-content') 
    var CheckViewAllCard = [];

    for (let index = 0; index < allElementsCardContent.length; index++) {
        function flip_open(indexFlipCardItem)
        {
            CheckViewAllCard[index][indexFlipCardItem] = true
            if(!CheckViewAllCard[index].includes(false))
                allElementsCardContent[index].querySelector('.button-continue__button').classList.remove('button-continue__button-not-active')
                
            allElementsCardContent[index].querySelectorAll('.main-content__card_front_content')[indexFlipCardItem].style.transform = "rotateY(-180deg)"
            allElementsCardContent[index].querySelectorAll('.main-content__card-back-content')[indexFlipCardItem].style.transform = "rotateY(0deg)"
        }
    
        function flip_close(indexFlipCardItem)
        {
            allElementsCardContent[index].querySelectorAll('.main-content__card_front_content')[indexFlipCardItem].style.transform = "rotateY(0deg)"
            allElementsCardContent[index].querySelectorAll('.main-content__card-back-content')[indexFlipCardItem].style.transform = "rotateY(180deg)"
        }

        allElementCardInCurrentMenu = allElementsCardContent[index].querySelectorAll('.main-content__card')
        CountCardCardInCurrentContent = allElementsCardContent[index].querySelectorAll('.main-content__card').length
        CheckViewAllCard.push(Array(CountCardCardInCurrentContent).fill(false))
        for (let j_index = 0; j_index < allElementCardInCurrentMenu.length; j_index++) {
            allElementCardInCurrentMenu[j_index].addEventListener('mouseover',()=>flip_open(j_index))
            allElementCardInCurrentMenu[j_index].addEventListener('mouseout',()=>flip_close(j_index)) 
        }
    }

}

document.addEventListener("DOMContentLoaded",start_script_flipCard)