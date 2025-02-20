document.querySelector('#consultation').addEventListener('click',consultation);
document.querySelector('#consultationEng').addEventListener('click',consultation);
window.addEventListener('DOMContentLoaded',consultation);
document.querySelector('#seo').addEventListener('click',seo);
document.querySelector('#seoEng').addEventListener('click',seo);
window.addEventListener('DOMContentLoaded',seo);
document.querySelector('#semanticCore').addEventListener('click',semanticCore);
document.querySelector('#semanticCoreEng').addEventListener('click',semanticCore);
window.addEventListener('DOMContentLoaded',semanticCore);
document.querySelector('#yandex').addEventListener('click',yandex);
document.querySelector('#yandexEng').addEventListener('click',yandex);
window.addEventListener('DOMContentLoaded',yandex);
document.querySelector('#google').addEventListener('click',google);
document.querySelector('#googleEng').addEventListener('click',google);
window.addEventListener('DOMContentLoaded',google);
document.querySelector('#oneSlideo').addEventListener('click',landingPage);
document.querySelector('#oneSlideoEng').addEventListener('click',landingPage);
window.addEventListener('DOMContentLoaded',landingPage);
document.querySelector('#menuR').addEventListener('click',menuOk);
document.querySelector('#menuEng').addEventListener('click',menuOk);
window.addEventListener('DOMContentLoaded',menuOk);

function landingPage(){
    if(document.querySelector('#oneSlideo').checked==true){
        // console.log('chickbox Checked');
        document.querySelector('#price').removeAttribute('disabled');
        document.querySelector('#slides').removeAttribute('disabled');
        document.querySelector('#slides').style.background='white';
        document.querySelector('#slides').style.color='black';
        // document.querySelector('#price').style.display="";
        // document.querySelector('#summa').style.display="";
    }else if(document.querySelector('#oneSlideo').checked==false){
        // console.log('checkbox -False');
        document.querySelector('#price').setAttribute('disabled','');
        document.querySelector('#slides').setAttribute('disabled','');
        document.querySelector('#slides').setAttribute('min','0');
        document.querySelector('#slides').style.background='gray';
        document.querySelector('#slides').style.color='gray';
        // document.querySelector('#summa').style.display="none";
    }else{
        // console.log('else');
    }

    if(document.querySelector('#oneSlideoEng').checked==true){
        // console.log('chickbox Checked');
        document.querySelector('#priceEng').removeAttribute('disabled');
        document.querySelector('#summaEng').removeAttribute('disabled');
        document.querySelector('#slidesEng').style.background='white';
        document.querySelector('#slidesEng').style.color='black';
    }else if(document.querySelector('#oneSlideoEng').checked==false){
        // console.log('checkbox -False');
        document.querySelector('#priceEng').setAttribute('disabled','');
        document.querySelector('#summaEng').setAttribute('disabled','');
        document.querySelector('#slidesEng').style.background='gray';
        document.querySelector('#slidesEng').style.color='gray';
        // console.log('else');
    }
    countPrice();
}
function consultation(){
    if(document.querySelector('#consultation').checked==true){
        // console.log('chickbox Checked');
        document.querySelector('#twoSlide').style.display="";
    }else if(document.querySelector('#consultation').checked==false){
        // console.log('checkbox -False');
        document.querySelector('#twoSlide').style.display="none";
    }else{
        // console.log('else');
    }
    if(document.querySelector('#consultationEng').checked==true){
        // console.log('chickbox Checked');
        document.querySelector('#twoSlideEng').style.display="";
    }else if(document.querySelector('#consultationEng').checked==false){
        // console.log('checkbox -False');
        document.querySelector('#twoSlideEng').style.display="none";
    }else{
        // console.log('else');
    }
    countPrice();
}

function seo(){
    if(document.querySelector('#seo').checked==true){
        // console.log('chickbox Checked');
        document.querySelector('#threeSlide').style.display="";
    }else if(document.querySelector('#seo').checked==false){
        // console.log('checkbox -False');
        document.querySelector('#threeSlide').style.display="none";
    }else{
        // console.log('else');
    }
    if(document.querySelector('#seoEng').checked==true){
        // console.log('chickbox Checked');
        document.querySelector('#threeSlideEng').style.display="";
    }else if(document.querySelector('#seoEng').checked==false){
        // console.log('checkbox -False');
        document.querySelector('#threeSlideEng').style.display="none";
    }else{
        // console.log('else');
    }
    countPrice();
}

function semanticCore(){
    if(document.querySelector('#semanticCore').checked==true){
        // console.log('chickbox Checked');
        document.querySelector('#fourSlide').style.display="";
    }else if(document.querySelector('#semanticCore').checked==false){
        // console.log('checkbox -False');
        document.querySelector('#fourSlide').style.display="none";
    }else{
        // console.log('else');
        document.querySelector('#fourSlide').style.display="none";
    }
    if(document.querySelector('#semanticCoreEng').checked==true){
        // console.log('chickbox Checked');
        document.querySelector('#fourSlideEng').style.display="";
    }else if(document.querySelector('#semanticCoreEng').checked==false){
        // console.log('checkbox -False');
        document.querySelector('#fourSlideEng').style.display="none";
    }else{
        // console.log('else');
        document.querySelector('#fourSlideEng').style.display="none";
    }
    countPrice();
}
function yandex(){
    if(document.querySelector('#yandex').checked==true){
        // console.log('chickbox Checked');
        document.querySelector('#fiveSlide').style.display="";
    }else if(document.querySelector('#yandex').checked==false){
        // console.log('checkbox -False');
        document.querySelector('#fiveSlide').style.display="none";
    }else{
        // console.log('else');
    }
    if(document.querySelector('#yandexEng').checked==true){
        // console.log('chickbox Checked');
        document.querySelector('#fiveSlideEng').style.display="";
    }else if(document.querySelector('#yandexEng').checked==false){
        // console.log('checkbox -False');
        document.querySelector('#fiveSlideEng').style.display="none";
    }else{
        // console.log('else');
    }
    countPrice();
}
function google(){
    if(document.querySelector('#google').checked==true){
        // console.log('chickbox Checked');
        document.querySelector('#sixSlide').style.display="";
    }else if(document.querySelector('#google').checked==false){
        // console.log('checkbox -False');
        document.querySelector('#sixSlide').style.display="none";
    }else{
        // console.log('else');
    }
    if(document.querySelector('#googleEng').checked==true){
        // console.log('chickbox Checked');
        document.querySelector('#sixSlideEng').style.display="";
    }else if(document.querySelector('#googleEng').checked==false){
        // console.log('checkbox -False');
        document.querySelector('#sixSlideEng').style.display="none";
    }else{
        // console.log('else');
    }
    countPrice();
}
function menuOk(){
    if(document.querySelector('#menuR').checked==true){
        // console.log('chickbox Checked');
        document.querySelector('#sevenSlide').style.display="";
    }else if(document.querySelector('#menuR').checked==false){
        // console.log('checkbox -False');
        document.querySelector('#sevenSlide').style.display="none";
    }else{
        // console.log('else');
    }
    if(document.querySelector('#menuEng').checked==true){
        // console.log('chickbox Checked');
        document.querySelector('#sevenSlideEng').style.display="";
    }else if(document.querySelector('#menuEng').checked==false){
        // console.log('checkbox -False');
        document.querySelector('#sevenSlideEng').style.display="none";
    }else{
        // console.log('else');
    }
    countPrice();
}