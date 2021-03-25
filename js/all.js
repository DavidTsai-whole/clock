const hr = document.querySelector('.hour');
const min = document.querySelector('.minute');
const sec = document.querySelector('.second');

function getTime() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    const secondDeg = ((360 / 60) * second) + 180;
    const minuteDeg = ((360 / 60) * minute) + ((6 / 60) * second);  
    const hourDeg = ((360 / 12) * (hour % 12)) + ((30 / 60) * minute) + 270;

    hr.style.transform = `rotate(${hourDeg}deg)`;
    min.style.transform = `rotate(${minuteDeg}deg)`;
    sec.style.transform = `rotate(${secondDeg}deg)`;
    
    
}
getTime();
setInterval(getTime, 1000);

