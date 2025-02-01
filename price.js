async function onClicToButton(){
    const url =
    "https://data.fixer.io/api/fluctuation?access_key={0266c5b8751d14ff26d7b63ace6b4c33}&symbols=USD&start_date=2012-05-01&end_date=2025-02-01";
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