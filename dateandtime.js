var date = new Date();
var n = date.toDateString().split(' ').slice(1,3).join(' ');

const div = document.querySelector('.clock');

const clock = () => {
const now = new Date();
const htmlClock = `Today is : ${dateFns.format(now, 'dddd')}.
Current time is : ${dateFns.format(now, n + ' hh : mm : ss A')}`;
div.innerHTML = htmlClock;
};

setInterval(clock, 1000);
