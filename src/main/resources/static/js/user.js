import {address} from "./module.js";

let adminPanel = document.getElementById('adminPanel');
let adminAlert = document.getElementById('adminAlert');
let closeAlert = document.getElementById('closeAlert');
let word = document.getElementById('word');
let sentence = document.getElementById('sentence');
let irregularVerb = document.getElementById('irregularVerb');

adminPanel.addEventListener('click', () => {
    adminAlert.style.display = 'flex';
})
closeAlert.addEventListener('click', () => {
    adminAlert.style.display = 'none';
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

