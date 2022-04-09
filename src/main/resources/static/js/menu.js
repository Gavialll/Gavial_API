import {address} from "./module.js";

let home = document.getElementById("home");
let user = document.getElementById("user");
document.addEventListener("touchstart", function() {},false);

home.addEventListener('click', function(event){
    window.location.href = address('/index');
})

user.addEventListener('click', function(event){
    window.location.href = address('/user');
})