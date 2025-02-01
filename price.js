async function onClicToButton(){
    const url ="http://data.fixer.io/api/latest?access_key = 0266c5b8751d14ff26d7b63ace6b4c33";
const options = {
    method: "GET",
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}
}

// onClicToButton();

document.querySelector('#buttonPrice').addEventListener('click',()=>{
    onClicToButton();
});