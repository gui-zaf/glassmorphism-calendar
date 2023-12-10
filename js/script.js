const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const today = new Date();

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

date.innerHTML = today.getDate().toString().padStart(2, '0');
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = months[today.getMonth()];
console.log(months[today.getMonth()]);
year.innerHTML = today.getFullYear();
