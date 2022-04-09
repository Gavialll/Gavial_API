
let buttons = document.querySelectorAll("button");
let result = document.getElementById("result");

addEventListener('click', (event) => {
    // console.log(event.target.innerText)
    for (const button of buttons) {
        if(button.innerText === event.target.innerText){
            result.append(button);
        }
    }
})
