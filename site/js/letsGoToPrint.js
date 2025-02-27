    let countClick=+0;
    function goToPrint(){
        countClick++;
    if(countClick==1){
        // console.log('print')
        document.querySelector('body > main > article > nav').style.display="none";
        document.querySelector('body > main > article > fieldset').style.display="none";

        document.querySelector('.notPrint').style.display="none";
        document.querySelector('#invoicing > h2').style.display="none";
        document.querySelector('#invoicing > strong:nth-child(7)').style.display="none";
        document.querySelector('#invoicing > section:nth-child(9)').style.display="none";
        document.querySelector('#invoicing > footer').style.display="none";
        document.querySelector('#barter').style.display="none";
        
        document.querySelector('#invoicing > footer').style.display="none";
        document.querySelector('#letsGoToPrint').innerHTML='go back';
    }else{
        // console.log('print')
        document.querySelector('body > main > article > nav').style.display="";
        document.querySelector('body > main > article > fieldset').style.display="";

        document.querySelector('.notPrint').style.display="";
        document.querySelector('#invoicing > h2').style.display="";
        document.querySelector('#invoicing > strong:nth-child(7)').style.display="";
        document.querySelector('#invoicing > section:nth-child(9)').style.display="";

        document.querySelector('#barter').style.display="";

        document.querySelector('#invoicing > footer').style.display="";

        document.querySelector('#letsGoToPrint').innerHTML='let\'s go to print';

    
    countClick=0;
    removeAttention();
    onClickId();
    }
    
}
document.querySelector("#letsGoToPrint").addEventListener('click',()=>{
    goToPrint();
    attention();
})
// document.querySelector('main').addEventListener('click',()=>{

// });
function attention(){
    let rusStrong=document.createElement('strong');
    rusStrong.innerHTML="Чтобы распечатать счет, нажмите: \"Ctrl+P\".";
    rusStrong.setAttribute('id','rus');
    document.querySelector('#letsGoToPrint').insertAdjacentElement('afterend',rusStrong);
    // let engStrong=document.createElement('strong');
    // engStrong.innerHTML="To print the invoice, press: \"Ctrl+P\".";
    // engStrong.setAttribute('id','eng');
    // document.querySelector('#letsGoToPrint').insertAdjacentElement('afterend',engStrong);
    // onClickId();
}
function removeAttention(){
    document.querySelector('#invoicing > div strong').remove();
    // document.querySelector('#invoicing > div > strong').remove();
}