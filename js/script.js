const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const innerYear = document.getElementById('inner-year');

const now = new Date();

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const today = now.getDate().toString().padStart(2, '0');
date1.innerHTML = today.slice(0, 1);
date2.innerHTML = today.slice(1, 2);
day.innerHTML = weekDays[now.getDay()];
month.innerHTML = months[now.getMonth()];
innerYear.innerHTML = now.getFullYear().toString().slice(2, 4);


if (today === '14') {
    const heart = document.createElement('span');
    heart.innerHTML = "❤️";
    day.appendChild(heart);
}
                        