
let word = document.getElementById("word");
let sentence = document.getElementById("sentence");
let user = document.getElementById("user");

word.addEventListener('click', function(event){
    document.location.href = "https://gavialapi.herokuapp.com/word";
})
sentence.addEventListener('click', function(event){
    document.location.href = "https://gavialapi.herokuapp.com/sentence";
})


// let more = document.getElementById("more");
// more.addEventListener('click', () => {
//     let canvas = document.getElementById('canvas');
//     for (let i = 1; i < second.length; i++) {
//         let element = document.createElement('div');
//         element.classList.add('element');
//         let left = document.createElement('div');
//         left.classList.add('side');
//         left.innerText = second[i].purchaseRateNB.toString().substr(0, 5);
//         let center = document.createElement('div');
//         center.classList.add('center');
//         center.innerText = second[i].currency;
//         let right = document.createElement('div');
//         right.classList.add('side');
//         right.innerText = second[i].saleRateNB.toString().substr(0, 5);
//
//          canvas.insertBefore(element, more);
//         element.append(left, center, right);
//     }
// })




