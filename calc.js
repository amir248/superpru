let slides='';
document.querySelector('#slides').addEventListener('click',countPrice);
document.querySelector('#price').addEventListener('click',countPrice);
document.querySelector('#oneSlideo').addEventListener('click',countPrice);
document.querySelector('#slidesEng').addEventListener('click',countPrice);
document.querySelector('#priceEng').addEventListener('click',countPrice);
document.querySelector('#oneSlideoEng').addEventListener('click',countPrice);

document.querySelector('#menuEng').addEventListener('click',countPrice);
document.querySelector('#menuR').addEventListener('click',countPrice);


addEventListener("keyup", (event) => {
    // console.log(event);
    countPrice();
    let sumOk;
    if(document.querySelector('#price').value==1){
  
        document.querySelector('#summa').innerHTML=sumOk;
    }else if(document.querySelector('#price').value==2){
        
        document.querySelector('#summa').innerHTML=sumOk;
        sumOk=document.querySelector('#price').value*5;
    }else if(document.querySelector('#price').value==3){

        sumOk=document.querySelector('#price').value*5;
    }else if(document.querySelector('#price').value==4){
       
        document.querySelector('#summa').innerHTML=sumOk;
        sumOk=document.querySelector('#price').value*5;
    }
    if(document.querySelector('#priceEng').value==1){
      
        // document.querySelector('#price').value.innerHTML=5;
        // sumOk=document.querySelector('#price').value*5;
        // console.log(document.querySelector('#priceEng').value);
        document.querySelector('#summaEng').innerHTML=sumOk;
    }else if(document.querySelector('#priceEng').value==2){
        
        document.querySelector('#summaEng').innerHTML=sumOk;
        sumOk=document.querySelector('#priceEng').value*5;
    }else if(document.querySelector('#priceEng').value==3){
        
        document.querySelector('#summaEng').innerHTML=sumOk;
        sumOk=document.querySelector('#priceEng').value*5;
    }else if(document.querySelector('#priceEng').value==4){
     
        document.querySelector('#summaEng').innerHTML=sumOk;
        sumOk=document.querySelector('#priceEng').value*5;
    }
});


function countPrice(){
    let value=document.querySelector('#slides').value;
    let price;
    if(document.querySelector('#oneSlideo').checked==true){
        price=document.querySelector('#price').value;
    }else{
        price=0;
    }
    let consultation;
    if(document.querySelector('#consultation').checked==true){
        consultation=100;
    }else{
        consultation=0;
    }
    let seo;
    if(document.querySelector('#seo').checked==true){
        seo=10;
    }else{
        seo=0;
    }
    let semanticCore;
    if(document.querySelector('#semanticCore').checked==true){
        semanticCore=10;
    }else{
        semanticCore=0;
    }
    let google;
    if(document.querySelector('#google').checked==true){
        google=200;
    }else{
        google=0;
    }
    let yandex;
    if(document.querySelector('#yandex').checked==true){
        yandex=150;
    }else{
        yandex=0;
    }
    let menuR;
    if(document.querySelector('#menuR').checked==true){
        menuR=10;
    }else{
        menuR=0;
    }
    // --------------- ENG ----------------------------
    let valueEng=document.querySelector('#slidesEng').value;
    let priceEng;
    if(document.querySelector('#oneSlideoEng').checked==true){
        priceEng=document.querySelector('#priceEng').value;
    }else{
        priceEng=0;
    }
    let consultationEng;
    if(document.querySelector('#consultationEng').checked==true){
        consultationEng=100;
    }else{
        consultationEng=0;
    }
    let seoEng;
    if(document.querySelector('#seoEng').checked==true){
        seoEng=10;
    }else{
        seoEng=0;
    }
    let semanticCoreEng;
    if(document.querySelector('#semanticCoreEng').checked==true){
        semanticCoreEng=10;
    }else{
        semanticCoreEng=0;
    }
    let googleEng;
    if(document.querySelector('#googleEng').checked==true){
        googleEng=200;
    }else{
        googleEng=0;
    }
    let yandexEng;
    if(document.querySelector('#yandexEng').checked==true){
        yandexEng=150;
    }else{
        yandexEng=0;
    }
    let menuEng;
    if(document.querySelector('#menuEng').checked==true){
        menuEng=10;
    }else{
        menuEng=0;
    }
    // ___________________ ENG _____________________


    let summa=value * price;
    let fullSumma=summa+seo+consultation+semanticCore+google+yandex+menuR;
    let oK=document.querySelector('#summa').innerHTML=`${summa}`;
    let oKtwo=document.querySelector('#summaTwo').innerHTML=`${fullSumma}`;
    let totalToPay=document.querySelector('#totalToPay').innerHTML=`${fullSumma}`;
    let oneSlice=document.querySelector('#oneSlide').innerHTML=`${price}`
    
    // return oK;



    // ------------------------------
    // let valueEng=document.querySelector('#slidesEng').value;
    // let priceEng=document.querySelector('#priceEng').value;
    let summaEng=valueEng * priceEng;
    let fullSummaEng=summaEng+seoEng+consultationEng+semanticCoreEng+googleEng+yandexEng+menuEng;
    let oKeng=document.querySelector('#summaEng').innerHTML=`${summaEng}`;
    let oKtwoEng=document.querySelector('#summaTwoEng').innerHTML=`${fullSummaEng}`;
    let totalToPayEng=document.querySelector('#totalToPayEng').innerHTML=`${fullSummaEng}`;
    let oneSliceEng=document.querySelector('#oneSlideoEng').innerHTML=`${fullSummaEng}`
  
    // return oK;
};
countPrice();

// document.querySelector('#slidesEng').addEventListener('click',countPriceEng);
// document.querySelector('#priceEng').addEventListener('click',countPriceEng);
// document.querySelector('#oneSlideo').addEventListener('click',countPriceEng);
    
// function countPriceEng(){
   
// };
// countPriceEng();
