let slides='';
document.querySelector('#slides').addEventListener('click',countPrice);
document.querySelector('#price').addEventListener('click',countPrice);
function countPrice(){
    let value=document.querySelector('#slides').value;
    let price=document.querySelector('#price').value;
    let summa=value * price;
    let oK=document.querySelector('#summa').innerHTML=`${summa}`;
    let oKtwo=document.querySelector('#summaTwo').innerHTML=`${summa}`;
    let totalToPay=document.querySelector('#totalToPay').innerHTML=`${summa}`;
    let oneSlice=document.querySelector('#oneSlide').innerHTML=`${price}`
    console.log(value);
    console.log(summa);
    console.log(price);
    // return oK;
};
countPrice();

document.querySelector('#slidesEng').addEventListener('click',countPriceEng);
document.querySelector('#priceEng').addEventListener('click',countPriceEng);
function countPriceEng(){
    let valueEng=document.querySelector('#slidesEng').value;
    let priceEng=document.querySelector('#priceEng').value;
    let summaEng=valueEng * priceEng;
    let oKeng=document.querySelector('#summaEng').innerHTML=`${summaEng}`;
    let oKtwoEng=document.querySelector('#summaTwoEng').innerHTML=`${summaEng}`;
    let totalToPayEng=document.querySelector('#totalToPayEng').innerHTML=`${summaEng}`;
    let oneSliceEng=document.querySelector('#oneSlideEng').innerHTML=`${priceEng}`
    console.log(valueEng);
    console.log(summaEng);
    console.log(priceEng);
    // return oK;
};
countPriceEng();