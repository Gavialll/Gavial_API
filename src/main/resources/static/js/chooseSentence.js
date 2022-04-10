import {address} from "./module.js";

let control = {
    score: 0,
    health: 3,
    englishWords: [],
    ukraine: "",
    english: []
};

function printButton(){
    let url = address("/api/sentence/getAll")
    fetch(url).then(response => {
        if (response.ok) {
            return response.json()
        }
    }).then(words => {
        shuffle(words);
        document.getElementById("task").innerText = words[0].ukraine;
        control.englishWords = (words[0].english.trim() + " " + words[1].english.trim()).split(" ");
        shuffle(control.englishWords);
        control.english = words[0].english.trim().split(" ");
        control.ukraine = words[0].ukraine;

        let result = document.getElementById("result");
        let choose = document.getElementById("choose");
        while (result.firstChild) {
            result.removeChild(result.firstChild);
        }
        while (choose.firstChild) {
            choose.removeChild(choose.firstChild);
        }

        for (let i = 0; i < control.englishWords.length; i++) {
            let button = document.createElement("button");
            button.innerText = control.englishWords[i];
            button.id = "id" + i;
            button.draggable = true;
            choose.append(button);
        }
    });
}

printButton();

document.getElementById("choose").addEventListener("dragstart", (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
});

document.getElementById("result").addEventListener("dragover", (event) => {
    event.preventDefault();
})
document.getElementById('result').addEventListener("drop", (event) => {
    console.log("end")
    const id = event.dataTransfer.getData('text');
    const result = document.getElementById("result");
    const draggableElement = document.getElementById(id);
    const dropZone = event.target;

    if ("result" === dropZone.id) {
        dropZone.appendChild(draggableElement);
        event.dataTransfer.clearData();

        let flag = false;
        if (result.childNodes.length === control.english.length) {
            for (let i = 0; i < control.english.length; i++) {
                if (control.english[i] === result.childNodes[i].innerText) {
                    flag = true;
                } else {
                    flag = false;
                    break
                }
            }
            if(flag) {
                result.style.border = "solid 5px green"
                control.score++;
                document.getElementById("score").innerText = "🏆 " + control.score;
                console.log("new question")
                printButton();
            }else {
                result.style.border = "solid 5px red"
                control.health--;
                document.getElementById("health").innerText = control.health + " ❤️";
                printButton();
                if (control.health === 0) {
                    document.getElementById("alertScore").innerText = "🏆 " + control.score;
                    document.getElementById("alert").style.display = "flex";
                }
            }
        }
    }
});


document.getElementById("result").addEventListener("dragstart", (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
});

document.getElementById("choose").addEventListener("dragover", (event) => {
    event.preventDefault();
})
document.getElementById('choose').addEventListener("drop", (event) => {
    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;

    if ("choose" === event.target.id) {
        dropzone.appendChild(draggableElement);
        event.dataTransfer.clearData();
    }
})

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

document.getElementById("menu")
    .addEventListener("click", () => {
        window.location.href = address('/index');
    })
document.getElementById('tryAgain')
    .addEventListener("click", () => {
        document.getElementById("alert").style.display = "none";
        control = {
            score: 0,
            health: 3,
            englishWords: [],
            ukraine: "",
            english: []
        };
        let score = document.getElementById("score");
        score.innerText = "🏆 " + control.score;
        let health = document.getElementById("health");
        health.innerText = control.health + " ❤️";
        printButton();
    })
