let countTimer;
const timer = deadline => {
    const handlerForEach = (array, method) => {
        array.forEach(item => {
            item.children[1].textContent = method;
        });
    };
    const timerDays = document.querySelectorAll('.count_1');
    const timerHours = document.querySelectorAll('.count_2');
    const timerMinutes = document.querySelectorAll('.count_3');
    const timerSeconds = document.querySelectorAll('.count_4');
    const news = {};

    function getTimeRemaining() {
        const dateStop = new Date(deadline).getTime();
        const dateNow = new Date().getTime();
        const timeRemaining = (dateStop - dateNow) / 1000;
        const seconds = Math.floor(timeRemaining % 60);
        const minutes = Math.floor((timeRemaining / 60) % 60);
        const hours = Math.floor(timeRemaining / 60 / 60 % 24);
        const days = Math.floor(timeRemaining / 60 / 60 / 24);
        news.timeRemaining = timeRemaining;
        news.days = days;
        news.hours = hours;
        news.minutes = minutes;
        news.seconds = seconds;
    }

    function updateClock() {
        getTimeRemaining();
        const addNull = item => {
            if (item < 10) {
                return '0' + item;
            } else {
                return +item;
            }
        };
        handlerForEach(timerDays, addNull(news.days));
        handlerForEach(timerHours, addNull(news.hours));
        handlerForEach(timerMinutes, addNull(news.minutes));
        handlerForEach(timerSeconds, addNull(news.seconds));
    }

    updateClock();
    if (news.timeRemaining > 0) {
        countTimer = setInterval(updateClock, 1000);
    } else {
        timerDays.innerText = '00';
        timerHours.innerText = '00';
        timerMinutes.innerText = '00';
        timerSeconds.innerText = '00';
        clearInterval(countTimer);
    }
};
export default timer;
