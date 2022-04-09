import {address} from "./module.js";

document.addEventListener("touchstart", function() {},false);

let sentence = document.getElementById("sentence");
let wordQuiz = document.getElementById("wordQuiz");

wordQuiz.addEventListener('click', function(event){
    window.location.href = address('/wordQuiz');
})

sentence.addEventListener('click', function(event){
    window.location.href = address('/chooseSentenceQuiz')
})





