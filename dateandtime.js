const div = document.querySelector('.clock');

const clock = () => {
const now = new Date();
const htmlClock = `Today is : ${dateFns.format(now, 'dddd')}.
Current time is : ${dateFns.format(now, 'hh A : mm : ss')}`;
div.innerHTML = htmlClock;
};

setInterval(clock, 1000);
