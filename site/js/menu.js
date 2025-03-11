const textMenu="<h3><a href='https://superp.ru'>Home</a></h3><h3><a href='https://qucu.ru/'>qucu.ru</a></h3><h3><a href='https://nasobe.ru/'>nasobe.ru</a></h3><h3><a href='https://superp.ru/about'>about</a></h3><h3><a href='https://superp.ru/commercialOffer'>Commercial Offer</a></h3><h3><a href='https://superp.ru/goals'>Goals</a></h3><h3><a href='https://order-landing-page.qucu.ru/'>Example</a><h3><a href='https://superp.ru/commercialOffer#barter'>Barter</a></h3><h3><a href='/gallery'>Gallery</a></h3><h3><a href='https://wa.me/79528885656'>Amir Dzhan</a></h3>";
document.querySelector('#menu').addEventListener('click',()=>{
    const openMenu=document.createElement('div');
    openMenu.classList.add('openMenu');
    openMenu.innerHTML=`${textMenu}`;
    document.querySelector('body').prepend(openMenu);
    setTimeout(()=>{
        document.querySelector('.openMenu').style.cssText=`width:100%;font-size:33px;opacity:1;z-index:99;`;
    },300);
    closeMenu();
});
function closeMenu(){
    document.querySelector('.openMenu').addEventListener('click',()=>{
        document.querySelector('.openMenu').style.cssText=`width:0;right:0;left:100%;`;
        setTimeout(()=>{
            document.querySelector('.openMenu').remove();
        },1300);
    });
    
}