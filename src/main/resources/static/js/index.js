import {address} from "./module.js";

document.addEventListener("touchstart", function() {},false);

let sentence = document.getElementById("sentence");
let wordQuiz = document.getElementById("wordQuiz");
let irregularVerbQuiz = document.getElementById("irregularVerb");

irregularVerbQuiz.addEventListener('click', function(){
    window.location.href = address('/irregularVerbQuiz');
})

wordQuiz.addEventListener('click', function(){
    window.location.href = address('/wordQuiz');
})

sentence.addEventListener('click', function(){
    window.location.href = address('/chooseSentenceQuiz')
})





