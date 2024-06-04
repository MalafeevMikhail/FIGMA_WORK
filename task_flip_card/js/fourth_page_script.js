var allElementsCardContent = document.querySelectorAll('.main-content') 


var CheckViewAllCard = Array();

for (let index = 0; index < allElementsCardContent.length; index++) {
    CountCardCardInCurrentContent = allElementsCardContent[index].querySelectorAll('.main-content__card').length
    CheckViewAllCard.push(Array(CountCardCardInCurrentContent).fill(false))
    CheckViewAllCard[index][0] = true
}

function flip_open(indexFlipCardContent,indexFlipCardItem)
{
    CheckViewAllCard[indexFlipCardContent][indexFlipCardItem] = true
    if(!CheckViewAllCard[indexFlipCardContent].includes(false))
         allElementsCardContent[indexFlipCardContent].querySelector('.button-continue__button').classList.remove('button-continue__button-not-active')
        
    allElementsCardContent[indexFlipCardContent].querySelectorAll('.main-content__card_front_content')[indexFlipCardItem].style.transform = "rotateY(-180deg)"
    allElementsCardContent[indexFlipCardContent].querySelectorAll('.main-content__card-back-content')[indexFlipCardItem].style.transform = "rotateY(0deg)"
}

function flip_close(indexFlipCardContent,indexFlipCardItem)
{
    allElementsCardContent[indexFlipCardContent].querySelectorAll('.main-content__card_front_content')[indexFlipCardItem].style.transform = "rotateY(0deg)"
    allElementsCardContent[indexFlipCardContent].querySelectorAll('.main-content__card-back-content')[indexFlipCardItem].style.transform = "rotateY(180deg)"
}

document.addEventListener('DOMContentLoaded',function(){
    allElementsCardContent = document.querySelectorAll('.main-content') 
    for (let index = 0; index < allElementsCardContent.length; index++) {
        allElementCardInCurrentMenu = allElementsCardContent[index].querySelectorAll('.main-content__card')
        for (let j_index = 0; j_index < allElementCardInCurrentMenu.length; j_index++) {
            allElementCardInCurrentMenu[j_index].addEventListener('mouseover',()=>flip_open(index,j_index))
            allElementCardInCurrentMenu[j_index].addEventListener('mouseout',()=>flip_close(index,j_index)) 
        }
    }
})
