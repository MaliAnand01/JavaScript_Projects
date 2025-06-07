const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');
const number3 = document.querySelector('#number3');
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

setInterval(() => {
    if (counter1 == 96) {
        clearInterval();
    } else {
        counter1 += 1;
        number1.innerHTML = counter1 + '%';
    }

    if (counter2 == 88) {
        clearInterval();
    } else {
        counter2 += 1;
        number2.innerHTML = counter2 + '%';
    }

    if (counter3 == 75) {
        clearInterval();
    } else {
        counter3 += 1;
        number3.innerHTML = counter3 + '%';
    }
}, 20);