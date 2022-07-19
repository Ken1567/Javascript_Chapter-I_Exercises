const div = document.querySelector('.clock');
const div2 = document.querySelector('.circle');
const clock = () => {
const now = new Date();
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const month = months[now.getMonth()];
const date = now.getDate();
const htmlClock = `Today is : ${dateFns.format(now, 'dddd')}.
Current time is : ${month} ${date} &nbsp;${dateFns.format(now, ' hh : mm : ss A')}`;
div.innerHTML = htmlClock;
const htmlCircle = `<b>${month} ${date}</br>
${dateFns.format(now, ' hh : mm : ss A')}</br>
${dateFns.format(now, 'dddd')}<b>`;
div2.innerHTML = htmlCircle
};

setInterval(clock, 1000);