const timer = function (deadLine) {
    const timerDays = document.getElementById('timer-days')
    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')
    const timerArrEnd = document.getElementById('timer-arr-end')

    const endingsForDay = function (n) {
        let inone = n % 10;
        return inone == 1 && n != 11 ? 0 :
            (n > 4 && n < 21) || (inone > 4 && inone <= 9) ? 2 :
                inone == 0 ? 2 :
                    1;
    };

    const getTimeRemaining = function () {
        let dateNow = Date.now();
        let dateEnd = Date.parse(deadLine);
        // let dateEnd = new Date(deadLine).getTime();

        let difference = (dateEnd - dateNow) / 1000;

        let days = parseInt(difference / (60 * 60 * 24));
        let hours = parseInt(difference / (60 * 60) % 24);
        let minutes = Math.floor((difference / (60)) % 60);
        let seconds = Math.floor(difference % 60);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return {difference, days, hours, minutes, seconds}
    }

    const updateClock = function () {
        let getTime = getTimeRemaining();

        const arrayEndings = ['день  ', 'дня  ', 'дней  '];
        if (getTime.days == 0) {
            timerDays.style.display = 'none'
        } else {
            timerArrEnd.textContent = arrayEndings[endingsForDay(getTime.days)] + ':';
        }

        timerDays.textContent = getTime.days;
        timerHours.textContent = getTime.hours;
        timerMinutes.textContent = getTime.minutes;
        timerSeconds.textContent = getTime.seconds;

        if (getTime.difference < 0) {
           clearInterval(dateInterval)
            timerDays.textContent = "";
            timerHours.textContent = "00";
            timerMinutes.textContent = "00";
            timerSeconds.textContent = "00";
            timerArrEnd.textContent = "";
        }
    }
    let dateInterval = setInterval(updateClock, 1000)
    // setInterval(countTimer, 1000, '1 november 2021')
}

export default timer;
