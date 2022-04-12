import {address} from "./module.js";

let control = {
    one : "",
    two : "",
    flag : true,
    count : 0,
    sizeWords : 7,
    score : 0,
    health : 3
}

let array = [];
let printWords = function () {
    let url = address("/api/getAll")
    fetch(url).then(response => {
        if (response.ok) {
            return response.json()
        }
    }).then(words => {
        shuffle(words);
        let arr = [];
            array = [];
        for (let i = 0; i < control.sizeWords; i++) {
            array.push(words[i])
            arr.push(words[i].ukraine);
            arr.push(words[i].english);
        }
        shuffle(arr);
        for (const arrElement of arr) {
            let button = document.createElement("button");
                button.innerText = arrElement;
                button.name = "false";
            document.querySelector("main").append(button);
        }
    })
}

printWords();

addEventListener("click", (event) => {
    let buttonArr = document.querySelectorAll("button")

    if (control.flag) {
        for (const buttonElement of buttonArr) {
            if (buttonElement.innerText === event.target.innerText) {
                if (buttonElement.name === "true") {
                    return;
                }
                buttonElement.style.boxShadow = "0 0 5px 1px rgb(0 255 0 / 57%)";
                control.one = buttonElement;
                control.flag = false;
                break;
            }
        }
    } else {
        for (const buttonElement of buttonArr) {
            if (buttonElement.innerText === event.target.innerText) {
                if (buttonElement.name === "true") {
                    control.one.style.boxShadow = "0 0 5px 1px rgb(0 0 0 / 57%)";
                    control.one = "";
                    control.two = "";
                    control.flag = true;
                    return;
                }
                buttonElement.style.boxShadow = "0 0 5px 1px rgb(0 255 0 / 57%)";
                control.two = buttonElement;

                if (control.one.innerText === control.two.innerText) {
                    control.flag = true;
                    control.one.style.boxShadow = "0 0 5px 1px rgb(0 0 0 / 57%)";
                    control.two.style.boxShadow = "0 0 5px 1px rgb(0 0 0 / 57%)";
                    console.log("та сама кнопка верути до сірого кольору")
                    break
                }
                for (const word of array) {
                    if (control.one.innerText === word.english &&
                        control.two.innerText === word.ukraine ||
                        control.two.innerText === word.english &&
                        control.one.innerText === word.ukraine) {
                        control.flag = true
                        control.count++;
                        control.one.name = "true";
                        control.two.name = "true";

                        control.score++;
                        document.getElementById("score").innerText = "🏆 " + control.score;

                        if (control.count === control.sizeWords) {
                            let main = document.querySelector("main");
                            while (main.firstChild) {
                                main.removeChild(main.firstChild);
                            }
                            control.count = 0;
                            control.flag = true;
                            control.one = "";
                            control.two = "";
                            printWords();
                        }
                        return;
                    }
                }

                control.health--;
                document.getElementById("health").innerText = control.health + " ❤️";

                control.one.style.boxShadow = "0 0 5px 1px rgb(255 0 0 / 57%)";
                control.two.style.boxShadow = "0 0 5px 1px rgb(255 0 0 / 57%)";
                control.flag = true;

                if(control.health === 0){
                    let main = document.querySelector("main");
                    while (main.firstChild) {
                        main.removeChild(main.firstChild);
                    }
                    document.getElementById("alertScore").innerText = "🏆 " + control.score;
                    document.getElementById("alert").style.display = "flex";

                    //here save score in database if score > max result
                    return;
                }
            }
        }
    }
})

document.getElementById('tryAgain').addEventListener("click", () => {
    control = {
        one : "",
        two : "",
        flag : true,
        count : 0,
        sizeWords : 7,
        score : 0,
        health : 3
    }
    document.getElementById("alert").style.display = "none";
    document.getElementById("score").innerText = "🏆 " + control.score;
    document.getElementById("health").innerText = control.health + " ❤️";
    printWords();
})

document.getElementById("menu").addEventListener("click", () => {
    window.location.href = address('/index');
})

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}



