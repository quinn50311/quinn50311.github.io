// get today date and now time
const nowDate = moment().format('YYYY-MM-DD');
const nowTime = moment().format('HH:mm:ss');

// output date
let finalDate = '';

// get all el
let dateEl = document.getElementById('date-input');
let timeEl = document.getElementById('time-input');
let dayEl = document.getElementById('day-input');
let hrEl = document.getElementById('hr-input');
let minEl = document.getElementById('min-input');
let secEl = document.getElementById('sec-input');
let calcEl = document.querySelector('.calc');
let outputEl = document.querySelector('.final-date');

// set init value for all el
dateEl.value = nowDate;
timeEl.value = nowTime;
dayEl.value = 0;
hrEl.value = 0;
minEl.value = 0;
secEl.value = 0;

function calculate() {
    if (!dayEl.value && !hrEl.value && !minEl.value && !secEl.value) return;

    finalDate = moment(dateEl.value + ' ' + timeEl.value)
        .add(dayEl.value, 'd')
        .add(hrEl.value, 'h')
        .add(minEl.value, 'm')
        .add(secEl.value, 's')
        .format('YYYY-MM-DD HH:mm:ss');

    outputEl.innerHTML = finalDate;
}

(function () {
    calcEl.addEventListener('click', calculate);

    window.onbeforeunload = function () {
        calcEl.removeEventListener('click', calculate);
    };
})();
