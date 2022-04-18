const colors = ["green" , "red" , "rgba(133,122,200)" ,"#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

function getRandomInt() {
    return Math.floor(Math.random()*colors.length);
}

btn.addEventListener("click" , function() {
    let x = getRandomInt();
    document.body.style.backgroundColor = colors[x];
    color.textContent = colors[x];
});