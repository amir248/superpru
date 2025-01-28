const writeToMeNow = document.querySelector('#writeToMe');
const writeToMeTwo = document.querySelector('#writeToMeTwo');
const writeToMeThree = document.querySelector('#writeToMeThree');
const writeToMeFour = document.querySelector('#writeToMeFour');

writeToMeFour.addEventListener('click',toGoOrder);
writeToMeThree.addEventListener('click',toGoOrder);
writeToMeNow.addEventListener('click',toGoOrder);
writeToMeTwo.addEventListener('click',toGoOrder);
function toGoOrder(){
    window.location.href="https://wa.clck.bar/79528885656?text=Hi!%20I'm%20need%20landing%20page."
}