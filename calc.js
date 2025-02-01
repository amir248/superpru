let slides='';
document.querySelector('#slides').addEventListener('click',countPrice);
function countPrice(){
    let value=document.querySelector('#slides').value;
    let price=document.querySelector('#price').value;
    let summa=value * price;
    let oK=document.querySelector('#summa').innerHTML=`${summa}`;
    let oKtwo=document.querySelector('#summaTwo').innerHTML=`${summa}`;
    let totalToPay=document.querySelector('#totalToPay').innerHTML=`${summa}`;

    console.log(value);
    console.log(summa);
    console.log(price);
    // return oK;
};
countPrice();