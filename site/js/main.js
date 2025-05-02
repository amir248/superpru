function openMenu(){
    return new Promise((resolve)=>{
        var menuPath='site/js/menu.js';
        if(window.location.pathname=='/yandex/'){
            menuPath='../site/js/menu.js';
        }else if(window.location.pathname=='/yandex'){
            menuPath='../site/js/menu.js';
        }else{
            menuPath='/site/js/menu.js';
        }
        // console.log(menuPath+ " " + window.location.pathname);
        function oM(){
            let openM=document.createElement('script');
            openM.src=`${menuPath}`;
            document.querySelector('body').append(openM);
        }
        setTimeout(()=>{
            resolve(oM());
        },1777);
    });
}
function date(){
    return new Promise((resolve)=>{
        function newDate(){
            const d = new Date();
            let year=d.getFullYear();
            document.querySelector('#data').innerHTML=`${year}`;
        }
        setTimeout(()=>{
            resolve(newDate());
        },777);
    });
}
function writeToMe(){
    return new Promise((resolve)=>{
        let linkPath='site/js/toLinkMyContact.js';
        function write(){
            if(window.location.pathname=="/"){
                let link=document.createElement('script');
                link.src=`${linkPath}`;
                document.querySelector('body').append(link);
            }else if(window.location.pathname=="/order-professional-landing-page"||window.location.pathname=="/order-professional-landing-page.html"){
                document.querySelector('#writeToMe').addEventListener('click',toGoClick);
                function toGoClick(){
                    window.location.href="https://wa.clck.bar/79528885656?text=Hi!%20I'm%20need%20landing%20page."
                };
            }else{
                console.log('link esfae');
            }
            
        }
        setTimeout(()=>{
            resolve(write());
        },777);
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
};//Llanguages
function linkToImg(){
    return new Promise((resolve)=>{
        if(window.location.pathname=="/"){
            let pathLink="../site/js/linkToImg.js";
            function toGoLink(){
                let linkYes=document.createElement('script');
                linkYes.src=`${pathLink}`;
                document.querySelector('body').append(linkYes);
            }
            resolve(toGoLink());
        }else{
            // console.log("FF");
        }
    })
};//linkToImg();
function firstImg(){
    return new Promise((resolve)=>{
        function ifAllOk(){
            // console.log('888888888888888888888')
            if(window.location.pathname=="/"){
                document.querySelector("header").style.cssText=`
                background-position: center center;
                background:url("site/img/Header Background.jpg");
            `;
            }else{
                // console.log('=_+');
            }
        }
        resolve(ifAllOk());
    })
    
};
function includeHTMLoK(){
    return new Promise((resolve)=>{
        function includeHTML() {
            var z, i, elmnt, file, xhttp;
            /* Loop through a collection of all HTML elements: */
            z = document.getElementsByTagName("*");
            for (i = 0; i < z.length; i++) {
              elmnt = z[i];
              /*search for elements with a certain atrribute:*/
              file = elmnt.getAttribute("w3-include-html");
              if (file) {
                /* Make an HTTP request using the attribute value as the file name: */
                xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                  if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                  }
                }
                xhttp.open("GET", file, true);
                xhttp.send();
                /* Exit the function: */
                return;
              }
            }
          }
          setTimeout(()=>{
            resolve(includeHTML());
          },0);
    });
};//includeHTML
firstImg();
async function main(){
    await includeHTMLoK();
    await firstImg();
    if(window.location.pathname=="/commercialOffer")await languages();
    await ifNeedCorrectPath();
    await openMenu();
    await date();
    await writeToMe();
    await linkToImg();
}
window.addEventListener('DOMContentLoaded',main);