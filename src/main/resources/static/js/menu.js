import {address} from "./module.js";

let home = document.getElementById("home");
let user = document.getElementById("user");
let wordQuiz = document.getElementById("wordQuiz");
document.addEventListener("touchstart", function() {},false);

home.addEventListener('click', function(event){
    window.location.href = address('/index');
})

user.addEventListener('click', function(event){
    window.location.href = address('/user');
})

wordQuiz.addEventListener('click', function(event){
    window.location.href = address('/wordQuiz');
})