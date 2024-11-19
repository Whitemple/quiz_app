// let min = 1;
// let sec = 15;

let time = 75;
const timeLeft = document.querySelector('.timeLeft');

export function timer(){
    timeLeft.innerText = time !== 0 ? time-1 : '00';
    minutes.innerText = sec !== 0 ?  '0' + min : 'l'
}