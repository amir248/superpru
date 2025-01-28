function openMenu(){
    return new Promise((resolve)=>{
        var menuPath='site/js/menu.js';
        if(window.location.pathname=='/yandex/'){
            menuPath='../site/js/menu.js';
        }else if(window.location.pathname=='/yandex'){
            menuPath='../site/js/memu.js';
        }else{
            menuPath='/site/js/menu.js';
        }
        // console.log(menuPath+ " " + window.location.pathname);
        function oM(){
            let openM=document.createElement('script');
            openM.src=`${menuPath}`;
            document.querySelector('body').append(openM);
        }
        resolve(oM());
    });
}
function date(){
    return new Promise((resolve)=>{
        var datePath='site/js/data.js';
       
        // console.log(datePath+ " " + window.location.pathname);
        function newDate(){
            let dates=document.createElement('script');
            dates.src=`${datePath}`;
            document.querySelector('body').append(dates);
        }
        resolve(newDate());
    });
}
function writeToMe(){
    return new Promise((resolve)=>{
        let linkPath='site/js/toLinkMyContact.js';
        function write(){
            let link=document.createElement('script');
            link.src=`${linkPath}`;
            document.querySelector('body').append(link);
        }
        resolve(write());
    })
}
function ifNeedCorrectPath(){
    return new Promise((resolve)=>{
        var opPath="site/js/ifNeedCorrectPath.js";
        function path(){
            let openPath=document.createElement('script');
            openPath.src=`${opPath}`;
            document.querySelector('body').append(openPath);
        }
        resolve(path());
    });
}
function languages(){
    return new Promise((resolve)=>{
        var pathLanguage="../site/js/language.js";
        function rightPath(){
            let create=document.createElement('script');
            create.src=`${pathLanguage}`;
            document.querySelector('body').append(create);
        }
        resolve(rightPath());
    });
}
async function main(){
    if(window.location.pathname=="/commercialOffer")await languages();
    await ifNeedCorrectPath();
    await openMenu();
    await date();
    if(window.location.pathname=="/")await writeToMe();
}
window.addEventListener('DOMContentLoaded',main);