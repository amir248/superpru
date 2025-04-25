const d = new Date();
// console.log(d.getDay() + " " +d.getFullYear());
let year=d.getFullYear();
document.querySelector('#data').innerHTML=`${year}`;
// let day=d.getDay();
const month = ["01","02","03","04","05","06","07","08","09","10","11","12"];

var dateString = new Date().toLocaleString("ru-RU", { timeZone: "Asia/Tomsk" });
var date = new Date(dateString);
var n = date.getDay();
// console.log(n);
if(window.location.path=="/commercialOffer"){
    console.log('right Path');
}
document.querySelector('#data1').innerHTML=dateString;

// console.log("Date String: ", dateString);
// console.log("Day:", n);

let nameMonth = month[d.getMonth()];
// console.log(nameMonth);
// console.log(day);
// document.querySelector('#dataMonth').innerHTML=nameMonth;
// document.querySelector('#dataDay').innerHTML=day;
