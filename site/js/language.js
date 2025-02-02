let eng=document.querySelectorAll('#eng');
let rus=document.querySelectorAll('#rus');
let chi=document.querySelectorAll('#chi');
// console.log(eng.length);

language.addEventListener('click',onClickId);
function onClickId(){
    console.log('oK ' + window.location.href);
   
    if(document.querySelector('#language > input').checked){
        console.log('CheckBoxChecked');
        for(let i=0;i<=eng.length;i++){
            eng[i].style.display='block';
            rus[i].style.display='none';
        }
    }else{
        for(let y=0;y<=eng.length;y++){
            eng[y].style.display='none';
            rus[y].style.display='block';
        }
    }
}
window.addEventListener('DOMContentLoaded',onClickId);
// domContentLoaded <- mabe not working 
if(window.location.href=='https://superp.ru/commercialOffer?eng'){
    console.log('eng');
    document.querySelector('#language > input').checked=true;
}
onClickId(); //and this works