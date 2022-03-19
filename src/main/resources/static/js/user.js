import {address} from "./module.js";

let adminPanel = document.getElementById('adminPanel');
let adminAlert = document.getElementById('adminAlert');
let closeAlert = document.getElementById('closeAlert');
let word = document.getElementById('word');
let sentence = document.getElementById('sentence');
let irregularVerb = document.getElementById('irregularVerb');
let body = document.getElementById('body');

adminPanel.addEventListener('click', () => {
    adminAlert.style.display = 'flex';
    let height = document.documentElement.clientHeight;
    if(height < 600){
        body.style.height = '650px';
    }else {
        body.style.height = `${height}px`
    }
})
closeAlert.addEventListener('click', () => {
    adminAlert.style.display = 'none';
    body.style.height = 'auto';
})
word.addEventListener('click', () => {
    window.location.href = address("/word");
})
sentence.addEventListener('click', () => {
    window.location.href = address("/sentence");
})
irregularVerb.addEventListener('click', () => {
    window.location.href = address("/irregularVerb");
})

