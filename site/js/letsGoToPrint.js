    let countClick=+0;
    function goToPrint(){
        countClick++;
    if(countClick==1){
        console.log('print')
        document.querySelector('article > nav').style.display="none";
        document.querySelector('article > fieldset').style.display="none";
        document.querySelector('body > main > article > i').style.display="none";
        document.querySelector('body > main > article > i').style.display="none";
        document.querySelector('body > main > article > table').style.display="none";
        document.querySelector('body > main > article > table').style.display="none";
        document.querySelector('body > main > article > i').style.display="none";
        document.querySelector('body > main > article > p').style.display="none";
        document.querySelector('body > main > article > h2').style.display="none";
        
        document.querySelector('body > main > article > img').style.display="none";
        
        document.querySelector('body > main > article > strong').style.display="none";
        // body > main:nth-child(1) > article:nth-child(1) > p:nth-child(14)
        document.querySelector('body > main > article > p').style.display="none";
        document.querySelector('body > main > article > p').style.display="none";
        document.querySelector('body > main > article > strong').style.display="none";
        
        // document.querySelector('body > main:nth-child(1) > article:nth-child(1) > p:nth-child(14)').style.display="none";
    
        document.querySelector('body > main > article > section > strong').style.display="none";
        document.querySelector('body > main:nth-child(1) > article:nth-child(1) > section:nth-child(20) > section:nth-child(8)').style.display="none";
        document.querySelector('body > main:nth-child(1) > article:nth-child(1) > section:nth-child(20) > footer:nth-child(9)').style.display="none";
        // document.querySelector('body > main > article > p').style.display="none";
        document.querySelector('body > main:nth-child(1) > article:nth-child(1) > i:nth-child(4)').style.display="none";
        document.querySelector('body > main:nth-child(1) > article:nth-child(1) > table:nth-child(6)').style.display="none";
        document.querySelector('body > main:nth-child(1) > article:nth-child(1) > i:nth-child(7)').style.display="none";
        document.querySelector('body > main:nth-child(1) > article:nth-child(1) > p:nth-child(10)').style.display="none";
        document.querySelector('body > main:nth-child(1) > article:nth-child(1) > h2:nth-child(11)').style.display="none";
        document.querySelector('body > main:nth-child(1) > article:nth-child(1) > p:nth-child(14)').style.display="none";
        document.querySelector('body > main:nth-child(1) > article:nth-child(1) > p:nth-child(15)').style.display="none";
        document.querySelector('body > main:nth-child(1) > article:nth-child(1) > p:nth-child(16)').style.display="none";
        document.querySelector('body > main:nth-child(1) > article:nth-child(1) > p:nth-child(17)').style.display="none";
        document.querySelector('body > main:nth-child(1) > article:nth-child(1) > strong:nth-child(19)').style.display="none";
        document.querySelector('body > main:nth-child(1) > article:nth-child(1) > strong:nth-child(18)').style.display="none";
    
        document.querySelector('#letsGoToPrint').innerHTML=`let's go to again`;
    }else{
        console.log('print')
    document.querySelector('article > nav').style.display="";
    document.querySelector('article > fieldset').style.display="";
    document.querySelector('body > main > article > i').style.display="";
    document.querySelector('body > main > article > i').style.display="";
    document.querySelector('body > main > article > table').style.display="";
    document.querySelector('body > main > article > table').style.display="";
    document.querySelector('body > main > article > i').style.display="";
    document.querySelector('body > main > article > p').style.display="";
    document.querySelector('body > main > article > h2').style.display="";
    
    document.querySelector('body > main > article > img').style.display="";
    
    document.querySelector('body > main > article > strong').style.display="";
    // body > main:nth-child(1) > article:nth-child(1) > p:nth-child(14)
    document.querySelector('body > main > article > p').style.display="";
    document.querySelector('body > main > article > p').style.display="";
    document.querySelector('body > main > article > strong').style.display="";
    
    // document.querySelector('body > main:nth-child(1) > article:nth-child(1) > p:nth-child(14)').style.display="none";

    document.querySelector('body > main > article > section > strong').style.display="";
    document.querySelector('body > main:nth-child(1) > article:nth-child(1) > section:nth-child(20) > section:nth-child(8)').style.display="";
    document.querySelector('body > main:nth-child(1) > article:nth-child(1) > section:nth-child(20) > footer:nth-child(9)').style.display="";
    // document.querySelector('body > main > article > p').style.display="none";
    document.querySelector('body > main:nth-child(1) > article:nth-child(1) > i:nth-child(4)').style.display="";
    document.querySelector('body > main:nth-child(1) > article:nth-child(1) > table:nth-child(6)').style.display="";
    document.querySelector('body > main:nth-child(1) > article:nth-child(1) > i:nth-child(7)').style.display="";
    document.querySelector('body > main:nth-child(1) > article:nth-child(1) > p:nth-child(10)').style.display="";
    document.querySelector('body > main:nth-child(1) > article:nth-child(1) > h2:nth-child(11)').style.display="";
    document.querySelector('body > main:nth-child(1) > article:nth-child(1) > p:nth-child(14)').style.display="";
    document.querySelector('body > main:nth-child(1) > article:nth-child(1) > p:nth-child(15)').style.display="";
    document.querySelector('body > main:nth-child(1) > article:nth-child(1) > p:nth-child(16)').style.display="";
    document.querySelector('body > main:nth-child(1) > article:nth-child(1) > p:nth-child(17)').style.display="";
    document.querySelector('body > main:nth-child(1) > article:nth-child(1) > strong:nth-child(19)').style.display="";
    document.querySelector('body > main:nth-child(1) > article:nth-child(1) > strong:nth-child(18)').style.display="";

    document.querySelector('#letsGoToPrint').innerHTML=`let's go to print`;
    countClick=0;
    }
    
}
document.querySelector("#letsGoToPrint").addEventListener('click',()=>{
    goToPrint();
})
document.querySelector('main').addEventListener('click',()=>{

});
