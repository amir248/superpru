// var datePath='site/js/data.js';
//         if(window.location.pathname=='/yandex/'){
//             datePath='../site/js/data.js';
//         }else if(window.location.pathname=='/yandex'){
//             datePath='../site/js/data.js';
//         }else{
//             datePath='/site/js/data.js';
//         }
//         // console.log(datePath+ " " + window.location.pathname);
// openPath="site/js/ifNeedCorrectPath.js";

// if(window.location.pathname=='/yandex/'){
//     datePath='../site/js/data.js';
// }else if(window.location.pathname=='/yandex'){
//     datePath='../site/js/data.js';
// }else{
//     datePath='/site/js/data.js';
// }
if(window.location.pathname=="/"){
    // console.log('pathname /');
}else{
    
    datePath='../site/js/data.js';
    linkPath='../site/js/toLinkMyContact.js';
    opPath="../site/js/ifNeedCorrectPath.js";
    // console.log("pathname else "+datePath +" " + linkPath + " " +opPath);
}