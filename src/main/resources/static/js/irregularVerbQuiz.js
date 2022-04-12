import {address} from "./module.js";

let clear = document.getElementById("clear");
let verification = document.getElementById("verification");
let inputs = document.querySelectorAll('input')
let wrapperInputs = document.querySelectorAll(".wrapperInput");
let alert = document.getElementById('alert');
let score = document.getElementById("score");
let health = document.getElementById("health");
let irregularVerb = {
    id:0,
    past :"",
    present :"",
    future: "",
    ukraine :""
}

let control = {
    score: 0,
    health: 3,
};

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function printWord(){
    let url = address("/api/irregularVerb/getAll")
    fetch(url).then(response => {
        if (response.ok) {
            return response.json()
        }
    }).then(irregularVerbs => {
        shuffle(irregularVerbs);
        irregularVerb = irregularVerbs[0];
        document.getElementById('task').innerText = irregularVerb.ukraine
    });
}

function verificationAnswer(){
    let h2 = document.querySelectorAll("h2");
    let time = 200;
    let count = 0;
    if(inputs[0].value === irregularVerb.present){
        time = styleInputs(time, 0,"0 0 5px 4px rgb(0 255 0 / 57%)")
        count++;
    }else {
        h2[0].innerText = irregularVerb.present
        h2[0].style.color = "green";
        h2[0].style.display = 'flex';
        time = styleInputs(time, 0,"0 0 5px 4px rgb(255 0 0 / 57%)")
    }
    if(inputs[1].value === irregularVerb.past){
        time = styleInputs(time, 1, "0 0 5px 4px rgb(0 255 0 / 57%)")
        count++;
    }
    else {
        h2[1].innerText = irregularVerb.past
        h2[1].style.color = "green";
        h2[1].style.display = 'flex';
        time = styleInputs(time, 1,"0 0 5px 4px rgb(255 0 0 / 57%)")
    }
    if(inputs[2].value === irregularVerb.future){
        time = styleInputs(time, 2, "0 0 5px 4px rgb(0 255 0 / 57%)")
        count++;
    } else {
        h2[2].innerText = irregularVerb.future
        h2[2].style.color = "green";
        h2[2].style.display = 'flex';
        time = styleInputs(time, 2,"0 0 5px 4px rgb(255 0 0 / 57%)")
    }

    if (count ===  3) {
        setTimeout(() => {
            control.score++;
            score.innerText = "🏆 " + control.score;
            verification.innerText = 'Next';
            verification.style.boxShadow = '0 0 5px 4px rgb(0 255 0 / 57%)';
            verification.removeEventListener("click", verificationAnswer)
            verification.addEventListener("click", nextQuestion)
        }, time);
    }else {
        setTimeout(() => {
            control.health--;
            health.innerText = control.health + " ❤️";
            verification.innerText = 'Next';
            verification.style.boxShadow = '0 0 5px 4px rgb(255 0 0 / 57%)';
            verification.removeEventListener("click", verificationAnswer)
            verification.addEventListener("click", nextQuestion)
        }, time );
    }
}

function nextQuestion(){
    verification.removeEventListener("click", nextQuestion)
    verification.addEventListener("click", verificationAnswer)
    verification.style.boxShadow = '0 0 5px 4px rgb(0 0 0 / 57%)';
    verification.innerText = "Verification";
    let h2 = document.querySelectorAll("h2");
    for (let i = 0; i < h2.length; i++) {
        h2[i].innerText = ""
        h2[i].style.color = "green";
        h2[i].style.display = 'none';
    }
    if(control.health === 0){
        alert.style.display = "flex";
        return;
    }
    clearFields()
    printWord()
}

verification.addEventListener('click', verificationAnswer)

function styleInputs(time, indexInput, styleBoxShadow){
    setTimeout(()=>{
        wrapperInputs[indexInput].style.boxShadow = styleBoxShadow
    }, time)
    time += 200;
    return time;
}

clear.addEventListener('click', ()=>{
    clearFields()
})

function clearFields(){
    for (let i = 0; i < inputs.length; i++) {
        wrapperInputs[i].style.boxShadow = "0 0 5px 1px rgb(0 0 0 / 57%)";
        inputs[i].value = "";
    }
}

printWord();