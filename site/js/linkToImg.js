const boxWithPhoto={};
boxWithPhoto.photos=['site/img/DSC_8714.webp','site/img/DSC_8712.webp','site/img/DSC_8711.webp','site/img/DSC_8710.webp','site/img/DSC_8709.webp','site/img/DSC_8708.webp','site/img/DSC_8707.webp'];
boxWithPhoto.count=+0;

function oNcamera(){
    document.querySelector('#photS').innerHTML=`📸`;
    setTimeout(()=>{
        document.querySelector("#photS").style.opacity="1";
    },1);
    setTimeout(()=>{
        document.querySelector("#photS").style.opacity="0";
    },300);
};//oNcamera();
document.querySelector('#leftSpan').addEventListener('click',()=>{
    oNcamera();
    console.log('click Left ' + boxWithPhoto.count);
    if(boxWithPhoto.count<0){
        boxWithPhoto.count=boxWithPhoto.photos.length;
    }else if(boxWithPhoto.count==0){
        boxWithPhoto.count=boxWithPhoto.photos.length;
        setTimeout(()=>{
            document.querySelector('header').style.cssText=`
            opacity:1;
            background-position:center center;
            background:url(${boxWithPhoto.photos[boxWithPhoto.count]});
        `;
        },1);
    }else{
        boxWithPhoto.count--;
    }
    document.querySelector("header").style.cssText=`
        transition:all ease 1s; 
        opacity:0;
    `;
    setTimeout(()=>{
        document.querySelector('header').style.cssText=`
        opacity:1;
        background-position:center center;
        background:url(${boxWithPhoto.photos[boxWithPhoto.count]});
    `;
    },300);
});
document.querySelector('#rightSpan').addEventListener('click',()=>{
    oNcamera();
    console.log('click Right ' + boxWithPhoto.count);
    if(boxWithPhoto.count>=boxWithPhoto.photos.length){
        boxWithPhoto.count=0;
    }else{
        boxWithPhoto.count++;
    }
    document.querySelector("header").style.cssText=`
        transition:all ease 1s; 
        opacity:0;
    `;
    setTimeout(()=>{
        document.querySelector('header').style.cssText=`
        opacity:1;
        background-position:center center;
        // background:url("site/img/1726572642360.jpg");
        background:url(${boxWithPhoto.photos[boxWithPhoto.count]});
    `;
    },300);
    
});