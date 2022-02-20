
let canvas = document.getElementById('canvas');
let element = document.createElement('div');
    element.classList.add('element');
// let left = document.createElement('div');
//     left.classList.add('side');
//     left.innerText = '20.22';
// let center = document.createElement('div');
//     center.classList.add('center');
//     center.innerText = 'USD';
// let right = document.createElement('div');
//     right.classList.add('side');
//     right.innerText = '20.22';
// canvas.append(element);
// element.append(left, center, right);
//
// let date = new Date().toLocaleDateString();

let right = document.getElementById("right");
let left = document.getElementById("left");

right.addEventListener('click', function(event){
    document.location.href = "/exchange/getExchange";
})
left.addEventListener('click', function(event){
    document.location.href = "/exchange/getHistory";
})