// импорт массива вопросов ИФАБ
import {ifabQuestions} from './questions.js' ;

import {randomIntegerWithException, shuffleArray, toggleBlocks, isQuizPassed} from './modules.js';

// переменные для работы
const questionsBlock = document.querySelector('.questionsBlock');
const formBlock = document.querySelector('.formBlock');
const formBlock__button = document.querySelector('.formBlock__button');
const startQuizButton = document.querySelectorAll('.startQuizButton');
const info = document.querySelector('.info');
const resultsBlock = document.querySelector('.resultsBlock');
const showQuizAnswersButton = document.querySelector('.showQuizAnswersButton');
const resultsBlock__score = document.querySelector('.resultsBlock__score');
const startLearnButton = document.querySelectorAll('.startLearnButton');
const exitButton = document.querySelector('.exitButton');
const cleanHistoryButton = document.querySelector('.cleanHistoryButton');

// функция проверки наличия coockie
function getCookie() {
    if(document.cookie.indexOf("lastQuestion") == 0){
        return Number(document.cookie.split('=')[1])
    }
    else{
        return 0;
    }
};

// Переменные для хранения временной информации
// Массивы для сохранения исключений при показе вопросов и для вывода результатов ответов в тесте
const userShowedQuestions = [];
const exludeQuestions = [];

// флаги и счетчики
let score = 0;
let flag = true;
let isLearnButtonClicked = false;
let answersArray = null;

// инициализируем начальный элемент, с какого показывать вопросы в Learning mod
let startLearnElement = getCookie() ? getCookie()-1 : 0;
let countClick = getCookie() ? getCookie() : 0;

// значения минимального проходного балла, максимального кол-ва вопросов в тесте и общее число вопросов для показа в learning mod
const minimalPassedBall = 17;
const maxQuestions = 20;
const totalCountQuestions = ifabQuestions.length;

exitButton.addEventListener('click', () => document.cookie = `lastQuestion=${startLearnElement};max-age=604800`);
cleanHistoryButton.addEventListener('click', () => document.cookie = 'lastQuestion=; max-age=-99999999;');

// запуск процесса изучения вопросов
startLearnButton.forEach(button => button.addEventListener('click', e => {
        e.preventDefault();
        isLearnButtonClicked = true;
        // Сброс всех ранее созданных параметров
        userShowedQuestions.length = 0;
        exludeQuestions.length = 0;
        countClick = getCookie() ? getCookie() : 1;
        startLearnElement = getCookie() ? getCookie()-1 : 0;
        score = 0;
        flag = true;

        // показываем блок вопросов
        toggleBlocks(formBlock, 'hideElement', 'showElement');
        // скрываем начальное приветствие и старт тесты
        toggleBlocks(info, 'showElementFlex', 'hideElement');
        // скрываем результаты
        toggleBlocks(resultsBlock, 'showElementFlex', 'hideElement');
        // показываем кнопку выхода на стартовый экран
        toggleBlocks(exitButton, 'hideElement', 'showElement');
        countClick = getCookie() ? getCookie() : countClick++;
        questionsBlock.append(createQuestionBlock(ifabQuestions, totalCountQuestions, isLearnButtonClicked));

        immediatelyShowAnswers();
        
    })
)

// кнпока запускает мож "Тест"
startQuizButton.forEach(button => button.addEventListener('click', e => {
        e.preventDefault();

        // Сброс всех ранее созданных параметров
        userShowedQuestions.length = 0;
        exludeQuestions.length = 0;
        countClick = 1;
        score = 0;
        flag = true;

        // показываем блок вопросов
        toggleBlocks(formBlock, 'hideElement', 'showElement');
        // скрываем начальное приветствие и старт тесты
        toggleBlocks(info, 'showElementFlex', 'hideElement');
        // скрываем результаты
        toggleBlocks(resultsBlock, 'showElementFlex', 'hideElement');
        // countClick = lastQuestion ? lastQuestion : countClick++;
        questionsBlock.append(createQuestionBlock(ifabQuestions, maxQuestions, isLearnButtonClicked));
    })
);

// запускае отрисовки элементов и логики блока вопросов и ответов
function startQuiz(e, totalCount, isLearn){
    e.preventDefault();
   
    if(document.querySelector('input[name="responseOption"]:checked')){
        checkAnswers(isLearn);
        questionsBlock.innerHTML='';
        if(countClick < totalCount){
            countClick++
            questionsBlock.append(createQuestionBlock(ifabQuestions, totalCount, isLearn));
            if(isLearn) immediatelyShowAnswers();
        }
        else {
            // меняем флаг на false для избежания ошибок при показе результатов
            flag = false;
            isLearnButtonClicked = false;
            // скрываем блок вопросов
            toggleBlocks(formBlock, 'showElement', 'hideElement');
            if(isLearn){
                // показываем начальное приветствие и старт тесты
                toggleBlocks(info, 'hideElement', 'showElementFlex');
                document.cookie = 'lastQuestion=; max-age=-99999999;';
            } else{
                    // показываем результаты
                    resultsBlock__score.innerText = `
                    ${isQuizPassed(score, minimalPassedBall) ? 'Поздравляем! Вы прошли тест по Правилам Игры' : 'К сожалению, Вы не прошли тест по Правилам Игры. Попробуйте снова.'}
                    Минимальный проходной балл ${minimalPassedBall}. Ваш результат: ${score} / ${totalCount}
                    `;
                    toggleBlocks(resultsBlock, 'hideElement', 'showElementFlex');
            }
        }
    }
    else {
        return
    }
};

// логика работы кнопки "Далее"
formBlock__button.addEventListener('click', (e) =>{
    if(isLearnButtonClicked){
        answersArray = document.querySelectorAll('input[name="responseOption"]');
        answersArray.forEach(answer => answer.removeEventListener('change', () => checkAnswers(isLearnButtonClicked) ) );
        startQuiz(e, totalCountQuestions, isLearnButtonClicked)
    } else{
        startQuiz(e, maxQuestions, isLearnButtonClicked)
    }
    
});

// кнопка клика по запуску теста
showQuizAnswersButton.addEventListener('click', e => {
    e.preventDefault();
    // скрываем результаты
    toggleBlocks(resultsBlock, 'showElementFlex', 'hideElement');
    questionsBlock.innerHTML = '';
    // показываем блок ответов
    toggleBlocks(formBlock, 'hideElement', 'showElement');
    userShowedQuestions.forEach(element => {
        questionsBlock.append(element);
    });
});

// function toggleBlocks(element, removeClass, addClass){
//     element.classList.remove(removeClass);
//     element.classList.add(addClass); 
// };

// function isQuizPassed(score, minimalPassedBall){
//     return score>=minimalPassedBall ? true : false;
// };

// функция по моментальному показу правильного/ошибочного ответа в режиме isLearn
function immediatelyShowAnswers(){
    answersArray = document.querySelectorAll('input[name="responseOption"]');
    answersArray.forEach(answer => answer.addEventListener('change', () => checkAnswers(isLearnButtonClicked) ) );
};

function checkAnswers(isLearn){
    const correctAnswer = document.querySelector('input[value="true"]').closest('.questionsBlock__question');
    const choosedAnswer = document.querySelector('input[name="responseOption"]:checked').closest('.questionsBlock__question');
    // Устанавливаем класс для ответа. По умолчанию на ответ пользвоателя ставится красный цвет. Если ответ верный и выбранный пользователем, то он пометится зеленым и перепишет красный
    choosedAnswer.classList.add('wrongAnswer');
    correctAnswer.classList.add('correctAnswer');

    // Делам неактивным выбор кнопок и фиксируем выбранный вариант
    const answersArray = document.querySelectorAll('input[name="responseOption"]');
    answersArray.forEach(element => element.disabled = true);
    if(!isLearn){
        if(choosedAnswer.classList.contains("correctAnswer") && flag) score++
        // Добавляем элемент с выбранными классами в массив
        const questionBlock = document.querySelector('.questionsBlock__container');
        userShowedQuestions.push(questionBlock);
    }
    
};

// // функция по случайному показу вопросов
// function randomIntegerWithException(min, max, exeption) {
//     let number
//         exeption = Array.isArray(exeption) ? exeption : [(isNaN(exeption) ? min-1 : exeption)];
//     while(true){
//         number = Math.floor(Math.random() * (max - min + 1)) + min;
//         if(exeption.indexOf(number) < 0) return number;
//     }
// };

// создаем блок вопроса и возвращаем html-элемент
function createQuestionBlock(arrayQuestions, totalCount, isLearn){
    let questionNumber = isLearn ?
                        startLearnElement :
                        randomIntegerWithException(0, arrayQuestions.length-1, isLearn ? [] : exludeQuestions);
    const element = document.createElement('div');
    element.classList.add('questionsBlock__container');
    element.setAttribute('id', `${arrayQuestions[questionNumber].id}`);
    element.innerHTML = `
        <h2 class="questionsBlock__title">Вопрос № ${countClick} / ${totalCount}
        ${isLearn ? '' : `(IFAB № ${arrayQuestions[questionNumber].id})`}</h2>
        <p class="questionsBlock__text">${arrayQuestions[questionNumber].question}</p>
        ${createAnswersBlock(arrayQuestions[questionNumber].answers)}
    `;
    isLearn ? startLearnElement++ : exludeQuestions.push(questionNumber);
    return element;
};

// // Перемешиваем блок ответов, чтобы каждый раз менялась их очередность показа
// function shuffleArray(array){
//     const shuffledArray = array
//         .map(value => ({ value, sort: Math.random() }))
//         .sort((a, b) => a.sort - b.sort)
//         .map(({ value }) => value);
//     return shuffledArray;
// };

// создаем блок ответов и возвращаем html-элемент
function createAnswersBlock(answersArray){
    const questionsBlock__module = document.createElement('div');
    questionsBlock__module.classList.add('questionsBlock__module');
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



let time = 10; // Начинаем с 10
const timer = setInterval(() => {
  const countdownElement = document.getElementById('countdown'); // Наблюдаем за полосой прогресса
  if(time >= 0) {
    countdownElement.value = time--; // Заполняем полосу прогресса
  } else {
    clearInterval(timer); // Полностью останавливаем таймер
    countdownElement.textContent = 'Отсчёт завершён!'; // Сообщение о завершении
  }
}, 1000);