import {address} from "./module.js";

let first = document.getElementById('first');
let adminAlert = document.getElementById('adminAlert');
let closeAlert = document.getElementById('closeAlert');
let editCancel = document.getElementById('editCancel');

let body = document.getElementById('body');

let adminAddAlert = document.getElementById("adminAddAlert")
let addCancel = document.getElementById('addCancel');
let addWord = document.getElementById('addWord');
let add = document.getElementById('add')

first.addEventListener('click', () => {
    adminAlert.style.display = 'flex';
    body.style.height = '500px';
})
closeAlert.addEventListener('click', () => {
    adminAlert.style.display = 'none';
    body.style.height = 'auto';
})
editCancel.addEventListener('click', () => {
    adminAlert.style.display = 'none';
    body.style.height = 'auto';
})

addWord.addEventListener('click', () => {
    adminAddAlert.style.display = 'flex';
    body.style.height = '500px';
})
closeAddAlert.addEventListener('click', () => {
    body.style.height = 'auto';
    adminAddAlert.style.display = 'none';
})
addCancel.addEventListener('click', () => {
    adminAddAlert.style.display = 'none';
    body.style.height = 'auto';
})