import {address, POST} from "./module.js";


let url = address("/api/sentence/getAll")
fetch(url).then(response => {
    if (response.ok) {
        return response.json()
    }
}).then(words => {
    for (let word of words) {
        printWords(word);
    }

    document.addEventListener('click', function(e) {
        let id = +e.target.id;
        if(typeof id === "number") {
            let english = document.getElementById('english');
            let ukraine = document.getElementById('ukraine');
            let adminAlert = document.getElementById('adminAlert');
            let body = document.getElementById('body');

            for (let word of words) {
                if (word.id === id) {
                    localStorage.setItem("id", id)
                    english.value = word.english;
                    ukraine.value = word.ukraine;

                    adminAlert.style.display = 'flex';
                    let height = document.documentElement.clientHeight;
                    if (height < 600) {
                        body.style.height = '650px';
                    } else {
                        body.style.height = `${height}px`
                    }
                }
            }
        }
    })
})

let save = document.getElementById('save');
save.addEventListener('click', () => {

    console.log(localStorage.getItem('id'));
    let word = {
        english: document.getElementById('english').value,
        ukraine: document.getElementById('ukraine').value,
        id: localStorage.getItem('id')
    }


    fetch(address("/api/sentence/edit"), {
        method: 'POST',
        body: JSON.stringify(word),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            return response.json()
        }
    })
    location.reload();
})

let add = document.getElementById('add');
add.addEventListener('click', () => {

    console.log(document.getElementById('addEnglish').value);
    console.log(document.getElementById('addEnglish').innerText);
    let word = {
        english: document.getElementById('addEnglish').value,
        ukraine: document.getElementById('addUkraine').value,
        id: null
    }


    fetch(address("/api/sentence/edit"), {
        method: 'POST',
        body: JSON.stringify(word),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            return response.json()
        }
    })
    location.reload();
})

let del = document.getElementById('delete');
    del.addEventListener('click', ()=>{
        fetch(address("/api/sentence/delete"), {
            method: 'POST',
            body: JSON.stringify(localStorage.getItem('id')),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
        })
        location.reload();
    })

function printWords(sentence){
    let wrapper = document.getElementById("wrapper")
    let element = document.createElement("div");
        element.classList.add("element");
    let english = document.createElement("div");
        english.classList.add("element_name")
        english.innerText = sentence.english;
    let hr = document.createElement("hr")
        hr.style.width = "100%";
        hr.style.marginTop = "10px";
        hr.style.border = "1px solid #0f1010";
    let ukraine = document.createElement("div");
        ukraine.classList.add("element_name")
        ukraine.innerText = sentence.ukraine;
    let clickZone = document.createElement('div');
        clickZone.classList.add("clickZone")
        clickZone.id = sentence.id;

        element.append(english, hr, ukraine, clickZone)
    wrapper.append(element)
}





