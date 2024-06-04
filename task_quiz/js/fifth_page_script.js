var count_question = 10
var index_question = 0
var best_user_result = 0
var cur_score_user = 0
var score_restart_test = 1
dict_answer_for_user = {
    0:['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург'],
    1:['Красный', 'Синий', 'Зеленый', 'Желтый'],
    2:['Яблоко', 'Апельсин', 'Банан', 'Груша'],
    3:['Лев', 'Тигр', 'Слон', 'Жираф'],
    4:['Солнце', 'Луна', 'Звезды', 'Планеты'],
    5:['Январь', 'Февраль', 'Март', 'Апрель'],
    6:['Понедельник', 'Вторник', 'Среда', 'Четверг'],
    7:['Книга', 'Журнал', 'Газета', 'Комикс'],
    8:['Собака', 'Кошка', 'Хомяк', 'Попугай'],
    9:['Футбол', 'Баскетбол', 'Теннис', 'Волейбол'],
}

list_true_question_for_user = ['Москва', 'Красный', 'Банан', 'Жираф', 'Солнце', 'Январь', 'Среда', 'Книга', 'Собака', 'Футбол']

list_question_for_user = [
    'Какой город является столицей России?',
    'Какого цвета небо в ясный день?',
    'Какой фрукт желтого цвета?',
    'Какое животное имеет длинную шею?',
    'Какое небесное тело дает нам свет и тепло?',
    'Какой месяц идет первым в году?',
    'Какой день недели следует за вторником?',
    'Что вы держите в руках, когда читаете?',
    'Какое домашнее животное лает?',
    'Какой вид спорта играют ногами?'
]
function check_user_answer()
{
    let user_answer = document.querySelector('input[name="answer_question_user"]:checked')?.value;
    if(user_answer == list_true_question_for_user[index_question]){
        cur_score_user+=1;
    }
    index_question+=1
    if (index_question == count_question){
        index_question = 0

        document.querySelector('.main-block-questions').classList.add('block__not-view')
        
        var result_user_common_block = document.querySelector('.result-test-block__result-user')
        result_user_common_block.innerHTML = '<h3 class="result-test-block__number-test" id="count_doing_test">Результаты '+ score_restart_test + '-й  попытки</h3>';


        var statics_block = document.createElement('div')
        statics_block.classList.add('result-test-block__statistics-result')
        statics_block.innerHTML='<h2 class="result-test-block__count-true-answer-from-all">'+cur_score_user+'/'+count_question+'</h2><h2 class="result-test-block__percent-score">'+((100/count_question)*cur_score_user)+'%</h2>'
        
        if((100/count_question)*cur_score_user<80){
            statics_block.classList.remove('result-test-block__statistics-result_good-result')
            document.querySelector('.result-test-block__verdict-for-user').textContent = "Не очень хороший результат, рекомендуем изучить курс еще раз."
            document.querySelector('.result-test-block__btn-block').classList.remove('block__not-view')
        }else{
            statics_block.classList.add("result-test-block__statistics-result_good-result")
            document.querySelector('.result-test-block__btn-block').classList.add('block__not-view')
            document.querySelector('.result-test-block__verdict-for-user').textContent = "Текст-комментарий для положительного результата"
        }

        result_user_common_block.appendChild(statics_block)
        
        if(score_restart_test>1){
            document.querySelector('.result-test-block__result-user').classList.add('result_user_with_one_block')
            document.querySelector('.result-test-block__best-result-user-block').classList.add('result_user_with_one_block')
            document.querySelector('.result-test-block__best-result-user-block').classList.remove('block__not-view')
            document.querySelector('.result-test-block__best-result-user-block').innerHTML ='<h3 class="result-test-block__title-best-result">Лучший результат</h3><h2 class="result-test-block__score-best-result">'+((100/count_question)*best_user_result)+'%</h2>'
            
        }

        if(best_user_result<cur_score_user)
            best_user_result = cur_score_user
        score_restart_test+=1
        cur_score_user = 0 ;
        document.querySelector('.result-test-block').classList.remove('block__not-view');
        
    }else{
        load_test_for_user()
    }
}

function load_test_for_user()
{
    document.querySelector('.start-window-test').classList.add('block__not-view')
    document.querySelector('.main-block-questions__quest-name').textContent = list_question_for_user[index_question]
    block_question = document.querySelector('.main-block-question__block-content');
    block_question.innerHTML = "";
    for (let index = 0; index < dict_answer_for_user[index_question].length; index++) {
        var new_answer_item = document.createElement('div')
        new_answer_item.classList.add('block_questions_sub_question')
        if(index==0){
        new_answer_item.innerHTML = '<input type="radio" id="answer_'+index+'"  name="answer_question_user" class="item_question" value="' + dict_answer_for_user[index_question][index] + '" checked><label for="answer_'+index+'" class="item_label">' + dict_answer_for_user[index_question][index] + '</label>'

        }else{
            new_answer_item.innerHTML = '<input type="radio" id="answer_'+index+'"  name="answer_question_user" class="item_question" value="' + dict_answer_for_user[index_question][index] + '"><label for="answer_'+index+'" class="item_label">' + dict_answer_for_user[index_question][index] + '</label>'
        }
        block_question.appendChild(new_answer_item)
    }   
    
    document.querySelector('.main-block-questions').classList.remove('block__not-view')
}


function load_start_window(){
    document.querySelector('.result-test-block').classList.add('block__not-view')
    document.querySelector('.start-window-test').classList.remove('block__not-view')
}