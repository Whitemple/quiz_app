import {ifabQuestions} from './questions.js' ;

const questionsBlock = document.querySelector('.questionsBlock');
const formBlock = document.querySelector('.formBlock');
const formBlock__button = document.querySelector('.formBlock__button');
const startQuizButton = document.querySelectorAll('.startQuizButton');
const info = document.querySelector('.info');
const resultsBlock = document.querySelector('.resultsBlock');
const showQuizAnswersButton = document.querySelector('.showQuizAnswersButton');
const resultsBlock__score = document.querySelector('.resultsBlock__score');

// Переменные для хранения временной информации
const userShowedQuestions = [];
const exludeQuestions = [];
let countClick = 0;
let score = 0;
let flag = true;
const maxQuestions = 5;


startQuizButton.forEach(button => button.addEventListener('click', e => {
        e.preventDefault();

        // Сброс всех ранее созданных параметров
        userShowedQuestions.length = 0;
        exludeQuestions.length = 0;
        countClick = 0;
        score = 0;
        flag = true;

        // показываем блок вопросов
        toggleBlocks(formBlock, 'hideElement', 'showElement');
        // скрываем начальное приветствие и старт тесты
        toggleBlocks(info, 'showElement', 'hideElement');
        // скрываем результаты
        toggleBlocks(resultsBlock, 'showElement', 'hideElement');
        countClick++;
        questionsBlock.append(createQuestionBlock(ifabQuestions));
    })
);


formBlock__button.addEventListener('click', e => {
    e.preventDefault();
    if(document.querySelector('input[name="responseOption"]:checked')){
        checkAnswers();
        questionsBlock.innerHTML='';
        if(countClick < maxQuestions){
            countClick++
            questionsBlock.append(createQuestionBlock(ifabQuestions));
        }
        else {
            // меняем флаг на false для избежания ошибок при показе результатов
            flag = false;
            // скрываем блок вопросов
            toggleBlocks(formBlock, 'showElement', 'hideElement');
            // показываем результаты
            resultsBlock__score.innerText = `Ваш результат: ${score}/${maxQuestions}`;
            toggleBlocks(resultsBlock, 'hideElement', 'showElement');
        }
    }
    else {
        return
    }
    
});

showQuizAnswersButton.addEventListener('click', e => {
    e.preventDefault();
    // скрываем результаты
    toggleBlocks(resultsBlock, 'showElement', 'hideElement');
    questionsBlock.innerHTML = '';
    // показываем блок ответов
    toggleBlocks(formBlock, 'hideElement', 'showElement');
    userShowedQuestions.forEach(element => {
        questionsBlock.append(element);
    });
})

function toggleBlocks(element, removeClass, addClass){
    element.classList.remove(removeClass);
    element.classList.add(addClass); 
}

function checkAnswers(){
    const correctAnswer = document.querySelector('input[value="true"]').closest('.questionsBlock__question');
    const choosedAnswer = document.querySelector('input[name="responseOption"]:checked').closest('.questionsBlock__question');
    // Устанавливаем класс для ответа. По умолчанию на ответ пользвоателя ставится красный цвет. Если ответ верный и выбранный пользователем, то он пометится зеленым и перепишет красный
    choosedAnswer.classList.add('wrongAnswer');
    correctAnswer.classList.add('correctAnswer');

    // Делам неактивным выбор кнопок и фиксируем выбранный вариант
    const answersArray = document.querySelectorAll('input[name="responseOption"]');
    answersArray.forEach(element => element.disabled = true);

    if(choosedAnswer.classList.contains("correctAnswer") && flag) score++

    // Добавляем элемент с выбранными классами в массив
    const questionBlock = document.querySelector('.questionsBlock__container');
    userShowedQuestions.push(questionBlock);
}



function randomIntegerWithException(min, max, exeption) {
    let number
        exeption = Array.isArray(exeption) ? exeption : [(isNaN(exeption) ? min-1 : exeption)];
    while(true){
        number = Math.floor(Math.random() * (max - min + 1)) + min;
        if(exeption.indexOf(number) < 0) return number;
    }
};





function createQuestionBlock(ifabQuestions){
    const questionNumber = randomIntegerWithException(0, ifabQuestions.length-1, exludeQuestions);
    const element = document.createElement('div');
    element.classList.add('questionsBlock__container');
    element.setAttribute('id', `${ifabQuestions[questionNumber].id}`);
    element.innerHTML = `
        <h2 class="questionsBlock__title">Вопрос № ${countClick} / ${maxQuestions} (IFAB № ${ifabQuestions[questionNumber].id})</h2>
        <p class="questionsBlock__text">${ifabQuestions[questionNumber].question}</p>
        ${createAnswersBlock(ifabQuestions[questionNumber].answers)}
    `;
    exludeQuestions.push(questionNumber);
    return element;
};

// Перемешиваем блок ответов, чтобы каждый раз менялась их очередность показа
function shuffleArray(array){
    const shuffledArray = array
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    return shuffledArray;
}

function createAnswersBlock(answersArray){
    const questionsBlock__module = document.createElement('div');
    questionsBlock__module.classList.add('questionsBlock__module');

    
    // let shuffledAnswersArray = answersArray
    // .map(value => ({ value, sort: Math.random() }))
    // .sort((a, b) => a.sort - b.sort)
    // .map(({ value }) => value)


    shuffleArray(answersArray).forEach((answer, index) => {
        questionsBlock__module.innerHTML += `
            <div class="questionsBlock__question">
                <input type="radio" id="contactChoice_${index}" name="responseOption" value="${answer.correct}" />
                <label for="contactChoice_${index}">${answer.text}</label>
            </div>
            <hr>
        `;
    });
    return questionsBlock__module.innerHTML;
};