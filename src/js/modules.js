// функция по случайному показу вопросов
 export function randomIntegerWithException(min, max, exeption) {
    let number
        exeption = Array.isArray(exeption) ? exeption : [(isNaN(exeption) ? min-1 : exeption)];
    while(true){
        number = Math.floor(Math.random() * (max - min + 1)) + min;
        if(exeption.indexOf(number) < 0) return number;
    }
};

// Перемешиваем блок ответов, чтобы каждый раз менялась их очередность показа
export function shuffleArray(array){
    const shuffledArray = array
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    return shuffledArray;
};


export function toggleBlocks(element, removeClass, addClass){
    element.classList.remove(removeClass);
    element.classList.add(addClass); 
};

export function isQuizPassed(score, minimalPassedBall){
    return score>=minimalPassedBall ? true : false;
};