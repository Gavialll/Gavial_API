import {address} from "./module.js";

let first = document.getElementById('first');
let adminAlert = document.getElementById('adminAlert');
let closeAlert = document.getElementById('closeAlert');
let editCancel = document.getElementById('editCancel');


let adminAddAlert = document.getElementById("adminAddAlert")
let addCancel = document.getElementById('addCancel');
let addWord = document.getElementById('addWord');
let add = document.getElementById('add')

first.addEventListener('click', () => {
    adminAlert.style.display = 'flex';
})
closeAlert.addEventListener('click', () => {
    adminAlert.style.display = 'none';
})
editCancel.addEventListener('click', () => {
    adminAlert.style.display = 'none';
})

// addWord.addEventListener('click', () => {
//     adminAddAlert.style.display = 'flex';
// })
// closeAddAlert.addEventListener('click', () => {
//     adminAddAlert.style.display = 'none';
// })
// addCancel.addEventListener('click', () => {
//     adminAddAlert.style.display = 'none';
// })