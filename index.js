const diwali = "4 Nov 2021";


const hours = document.getElementById('hours');
const minutes = document.getElementById('min');
const seconds = document.getElementById('sec');
const days = document.getElementById('day');



function countdown() {
    var current = new Date();
    var events = new Date(diwali);
    var diff = events - current;

    var sec = diff / 1000;
    var day = Math.floor(sec / 3600 / 24);
    var hour = Math.floor(sec / 3600) % 24;
    var min = Math.floor(sec / 60) % 60;
    var sec_left = Math.floor(diff/1000)% 60;
    console.log(day);
    days.innerHTML = day;
    hours.innerHTML = hour;
    minutes.innerHTML = min;
    seconds.innerHTML = sec_left;


}


countdown();
setInterval(countdown,1000);