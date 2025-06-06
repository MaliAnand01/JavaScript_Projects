let countDownDate = new Date("July 04, 2025 00:00:00").getTime();


let x = setInterval(function () {
    let now = new Date().getTime();
    let waitingTime = countDownDate - now;

    let days = Math.floor(waitingTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((waitingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((waitingTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((waitingTime % (1000 * 60)) / 1000);


    if (days >= 100) {
        document.querySelector('.launch-time').classList.add('gap');
    }

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;



    if (waitingTime < 0) {
        clearInterval(x);
        document.getElementById('days').innerHTML = "00";
        document.getElementById('hours').innerHTML = "00";
        document.getElementById('minutes').innerHTML = "00";
        document.getElementById('seconds').innerHTML = "00";
    }

}, 1000)