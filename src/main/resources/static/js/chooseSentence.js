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
        document.getElementById("choose").style.display = 'flex';
        document.getElementById("task").innerText = words[0].ukraine;

        control.englishWords = (words[0].english.trim() + " " + words[1].english.trim()).split(" ");
        control.english = words[0].english.trim().split(" ");
        control.ukraine = words[0].ukraine;

        shuffle(control.englishWords);

        document.getElementById("task").innerText = "\"" + words[0].ukraine.toUpperCase() + "\"";

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

    const id = event.dataTransfer.getData('text');
    const result = document.getElementById("result");
    const draggableElement = document.getElementById(id);
    const dropZone = event.target;
    let count = 0;
    let resultArr = result.childNodes
    let time = 250;

    if ("result" === dropZone.id) {
        dropZone.appendChild(draggableElement);
        event.dataTransfer.clearData();

        if (result.childNodes.length === control.english.length) {
            document.getElementById("choose").style.display = 'none';
            for (let i = 0; i < control.english.length; i++) {
                if (control.english[i] === resultArr[i].innerText) {
                    setTimeout(()=>{
                        resultArr[i].style.boxShadow = "0 0 5px 1px rgb(0 255 0 / 57%)";
                        resultArr[i].style.border = "solid 3px green";
                        resultArr[i].style.transition = "1s";
                    }, time)
                    count++;
                } else {
                    setTimeout(()=>{
                        resultArr[i].style.boxShadow = "0 0 5px 3px rgb(255 0 0 / 57%)";
                        resultArr[i].style.border = "solid 3px red";
                        resultArr[i].style.transition = "1s";
                    }, time)
                }
                time += 250;
            }

            if(count === control.english.length) {
                setTimeout(()=>{
                    control.score++;
                    document.getElementById("score").innerText = "🏆 " + control.score;
                    document.getElementById("controlButton").style.display = "flex"
                }, time);
            }else {
                setTimeout(()=>{
                    control.health--;
                    document.getElementById("next").style.border = "solid 3px red";
                    document.getElementById("health").innerText = control.health + " ❤️";
                    document.getElementById("controlButton").style.display = "flex"
                    if (control.health === 0) {
                        document.getElementById("alertScore").innerText = "🏆 " + control.score;
                        document.getElementById("alert").style.display = "flex";
                    }
                }, time);
            }
        }
    }
});

document.getElementById("next").addEventListener('click', () => {
    document.getElementById("next").style.border = "solid 3px green";
    document.getElementById("controlButton").style.display = 'none'
    printButton()
})

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

document.getElementById("choose")
    .addEventListener("click", (event) => {
        let result = document.getElementById("result");
        let id = event.target.id.toString();

        let count = 0;
        let resultArr = result.childNodes
        let time = 250;

        if(id.indexOf("id") !== -1){
            result.append(event.target);

            if (result.childNodes.length === control.english.length) {
                document.getElementById("choose").style.display = 'none';
                for (let i = 0; i < control.english.length; i++) {
                    if (control.english[i] === resultArr[i].innerText) {
                        setTimeout(()=>{
                            resultArr[i].style.boxShadow = "0 0 5px 1px rgb(0 255 0 / 57%)";
                            resultArr[i].style.border = "solid 3px green";
                            resultArr[i].style.transition = "1s";
                        }, time)
                        count++;
                    } else {
                        setTimeout(()=>{
                            resultArr[i].style.boxShadow = "0 0 5px 3px rgb(255 0 0 / 57%)";
                            resultArr[i].style.border = "solid 3px red";
                            resultArr[i].style.transition = "1s";
                        }, time)
                    }
                    time += 250;
                }

                if(count === control.english.length) {
                    setTimeout(()=>{
                        control.score++;
                        document.getElementById("score").innerText = "🏆 " + control.score;
                        document.getElementById("controlButton").style.display = "flex"
                    }, time);
                }else {
                    setTimeout(()=>{
                        control.health--;
                        document.getElementById("next").style.border = "solid 3px red";
                        document.getElementById("health").innerText = control.health + " ❤️";
                        document.getElementById("controlButton").style.display = "flex"
                        if (control.health === 0) {
                            document.getElementById("alertScore").innerText = "🏆 " + control.score;
                            document.getElementById("alert").style.display = "flex";
                        }
                    }, time);
                }
            }
        }

})

document.getElementById("result")
    .addEventListener("click", (event) => {
        let result = document.getElementById("choose");
        let id = event.target.id.toString();
        if(id.indexOf("id") !== -1){
            result.append(event.target);
        }

    })

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

document.getElementById("menu")
    .addEventListener("click", () => {
        window.location.href = address('/index');
    })

document.getElementById("menuOne")
    .addEventListener("click", () => {
        window.location.href = address('/index');
    })

document.getElementById('tryAgain')
    .addEventListener("click", () => {
        control = {
            score: 0,
            health: 3,
            englishWords: [],
            ukraine: "",
            english: []
        };
        document.getElementById("next").style.border = "solid 3px green";
        document.getElementById("controlButton").style.display = 'none'
        document.getElementById("alert").style.display = "none";
        document.getElementById("score").innerText = "🏆 " + control.score;
        document.getElementById("health").innerText = control.health + " ❤️";
        printButton();
    })

