var d = new Date();
console.log(d.getDay() + " " +d.getFullYear());
document.querySelector('#data').innerHTML=`${d.getFullYear()}`;
let day=d.getDay();
document.querySelector('#dataDay').innerHTML=day;
const month = ["01","02","03","04","05","06","07","08","09","10","11","12"];

let nameMonth = month[d.getMonth()];
console.log(nameMonth);
console.log(day);
document.querySelector('#dataMonth').innerHTML=nameMonth;
document.querySelector('#dataDay').innerHTML=day;
