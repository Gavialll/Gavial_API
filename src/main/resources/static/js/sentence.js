import {address} from "./module.js";

let body = document.getElementById('body');
let first = document.getElementById('first');
let adminAlert = document.getElementById('adminAlert');
let closeAlert = document.getElementById('closeAlert');
let cancel = document.getElementById('cancel');

first.addEventListener('click', () => {
    adminAlert.style.display = 'flex';
    body.style.height = "100%";
    body.style.overflow = "hidden";
})
closeAlert.addEventListener('click', () => {
    adminAlert.style.display = 'none';
    body.style.height = "90vh";
    body.style.overflow = "visible";
})
cancel.addEventListener('click', () => {
    adminAlert.style.display = 'none';
})