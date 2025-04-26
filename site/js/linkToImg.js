const boxWithPhoto={};
boxWithPhoto.photos=['site/img/DSC_8714.webp','site/img/DSC_8712.webp','site/img/DSC_8711.webp','site/img/DSC_8710.webp','site/img/DSC_8709.webp','site/img/DSC_8708.webp','site/img/DSC_8707.webp'];
boxWithPhoto.count=+0;
boxWithPhoto.text=[{title:'web agensy', twoTitle:'make landing.',description:'У нас вы найдёте качественные услуги по созданию и продвижению лендинг-страниц с использованием SEO и контекстной рекламы. Обращайтесь к нам и получите лучшие результаты!'},{title:'web studio', twoTitle:'don\'t yandex',description:'без искользования яндекса и поганой москвы!'},{title:'web workshop', twoTitle:'The Best SEO',description:'Создаём landing-страницы: просто, быстро, эффективно'},{title:'advertising agency', twoTitle:'effective landings',description:'SEO best solution'},{title:'web studio', twoTitle:'only the best',description:'без искользования яндекса и поганой москвы!'},{title:'web workshop', twoTitle:'with GPT chat',description:'Создаём landing-страницы: просто, быстро, эффективно'}];

function oNcamera(){
    document.querySelector('#photS').innerHTML=`📸`;
    setTimeout(()=>{
        document.querySelector("#photS").style.opacity="1";
    },1);
    setTimeout(()=>{
        document.querySelector("#photS").style.opacity="0";
    },300);
};//oNcamera();
function toGoNextText(){
    document.querySelector(".center > h1:nth-child(2) > span:nth-child(1)").innerHTML=`${boxWithPhoto.text[boxWithPhoto.count].title}`;
    document.querySelector(".center > h1:nth-child(2) > span:nth-child(2)").innerHTML=`${boxWithPhoto.text[boxWithPhoto.count].twoTitle}`
    console.log(boxWithPhoto.text[boxWithPhoto.count].title);
    document.querySelector(".center > p:nth-child(3)").innerHTML=`${boxWithPhoto.text[boxWithPhoto.count].description}`;
}
function toGoNextPhoto(){
    document.querySelector("header").style.cssText=`
    transition:all ease 1s; 
    opacity:0;
    background-position: center center;
    `;
    setTimeout(()=>{
        document.querySelector('header').style.cssText=`
        opacity:1;
        background:url(${boxWithPhoto.photos[boxWithPhoto.count]});
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    `;
    },300);
   }//toGoNextPhoto();
document.querySelector('#leftSpan').addEventListener('click',()=>{
    oNcamera();
    // console.log('click Left ' + boxWithPhoto.count);
    if(boxWithPhoto.count<0){
        boxWithPhoto.count=boxWithPhoto.photos.length;
        // console.log(boxWithPhoto.photos.length);
    }else if(boxWithPhoto.count==0){
        boxWithPhoto.count=boxWithPhoto.photos.length-1;
        toGoNextPhoto();
    }else{
        boxWithPhoto.count--;
    }
    toGoNextPhoto();
toGoNextText();
});
document.querySelector('#rightSpan').addEventListener('click',()=>{
    oNcamera();
    boxWithPhoto.count++;
    // console.log(boxWithPhoto.count);
    toGoNextPhoto();
    if(boxWithPhoto.count>=boxWithPhoto.photos.length){
        boxWithPhoto.count=0;
        toGoNextPhoto();
    }
toGoNextText();
});