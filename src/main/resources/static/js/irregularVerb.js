import {address, POST} from "./module.js";

let url = address("/api/irregularVerb/getAll")
fetch(url).then(response => {
    if (response.ok) {
        return response.json()
    }
}).then(words => {
    for (let word of words) {
        printWords(word);
    }
})

document.addEventListener('click', function(e) {
    let id = +e.target.id;
    if(typeof id === "number"){
        let ukraine = document.getElementById('ukraine');
        let past = document.getElementById('past');
        let present = document.getElementById('present');
        let future = document.getElementById('future');
        let adminAlert = document.getElementById('adminAlert');
        let body = document.getElementById('body');

        let url = address("/api/irregularVerb/getAll")
        fetch(url).then(response => {
            if (response.ok) {
                return response.json()
            }
        }).then(irregularVerbs => {
            for (let irregularWord of irregularVerbs){
                if (irregularWord.id === id) {
                    localStorage.setItem('id', id)
                    ukraine.value = irregularWord.ukraine;
                    past.value = irregularWord.past;
                    present.value = irregularWord.present;
                    future.value = irregularWord.future;

                    adminAlert.style.display = 'flex';
                    let height = document.documentElement.clientHeight;
                    if (height < 600) {
                        body.style.height = '650px';
                    } else {
                        body.style.height = `${height}px`
                    }
                }
            }
        })
    }
})

let save = document.getElementById('save');
save.addEventListener('click', () => {
    let irregularWord = {
        ukraine: document.getElementById('ukraine').value,
        past: document.getElementById('past').value,
        present: document.getElementById('present').value,
        future: document.getElementById('future').value,
        id: localStorage.getItem('id')
    }

    fetch(address("/api/irregularVerb/edit"), {
        method: 'POST',
        body: JSON.stringify(irregularWord),
        headers: {'Content-Type': 'application/json'}
    }).then(response => {
        if (response.ok) {
            response.json()
                .then(irregularWord => {
                    let arr = document.getElementById(localStorage.getItem('id'))
                        .parentElement
                        .childNodes;
                    arr[0].innerText = irregularWord.ukraine;
                    arr[1].innerText = irregularWord.past;
                    arr[2].innerText = irregularWord.present;
                    arr[3].innerText = irregularWord.future;
                    let body = document.getElementById('body');
                    body.style.height = 'auto';
                    let adminAlert = document.getElementById("adminAlert")
                    adminAlert.style.display = 'none';
            })
        }
    })
})

let add = document.getElementById('add');
add.addEventListener('click', () => {
    let irregularWord = {
        ukraine: document.getElementById('addUkraine').value,
        past: document.getElementById('addPast').value,
        present: document.getElementById('addPresent').value,
        future: document.getElementById('addFuture').value,
        id: null
    }

    fetch(address("/api/irregularVerb/edit"), {
        method: 'POST',
        body: JSON.stringify(irregularWord),
        headers: {'Content-Type': 'application/json'}
    }).then(response => {
        if (response.ok) {
            response.json().then(irregularWord => {
                printWords(irregularWord)
                let body = document.getElementById('body');
                body.style.height = 'auto';
                let adminAddAlert = document.getElementById("adminAddAlert")
                adminAddAlert.style.display = 'none';
            })
        }
    })
})

let del = document.getElementById('delete');
    del.addEventListener('click', () => {
        let id = localStorage.getItem('id');
        fetch(address("/api/irregularVerb/delete"), {
            method: 'POST',
            body: JSON.stringify(id),
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            if (response.ok) {
                document.getElementById(id).parentElement.remove()
                let body = document.getElementById('body');
                body.style.height = 'auto';
                let adminAlert = document.getElementById("adminAlert")
                adminAlert.style.display = 'none';
            }
        })
    })

function printWords(irregularVerb){
    let wrapper = document.querySelector('div[class = element_wrapper]')

    let element = document.createElement('div');
        element.classList.add('element');
    let ukraine = document.createElement("div")
        ukraine.classList.add("element_name")
        ukraine.innerText = irregularVerb.ukraine;
    let past = document.createElement('div');
        past.classList.add("element_name")
        past.innerText = irregularVerb.past;
    let present = document.createElement('div');
        present.classList.add("element_name")
        present.innerText = irregularVerb.present;
    let future = document.createElement('div');
        future.classList.add("element_name")
        future.innerText = irregularVerb.future;

    let clickZone = document.createElement('div');
        clickZone.classList.add("clickZone")
        clickZone.id = irregularVerb.id;

            element.append(ukraine, past, present, future, clickZone);
        wrapper.append(element);
}

let search = document.getElementById('search')
search.addEventListener('keydown', e => {
    console.log(e.code)
    if (e.code === "Enter") {
        document.querySelectorAll('.element').forEach(el => el.remove())
        let url = address("/api/irregularVerb/getAll")
        fetch(url).then(response => {
            if (response.ok) {
                return response.json()
            }
        }).then(words => {
            for (let word of words) {
                if (word.future.includes(search.value.toString().toLowerCase().trim()) ||
                    word.past.includes(search.value.toString().toLowerCase().trim()) ||
                    word.present.includes(search.value.toString().toLowerCase().trim()) ||
                    word.ukraine.includes(search.value.toString().toLowerCase().trim())) {
                    printWords(word);
                }
            }
        })
    }
});


let send = document.getElementById('send');
send.addEventListener('click', e => {
    console.log("send")
        document.querySelectorAll('.element').forEach(el => el.remove())
        let url = address("/api/irregularVerb/getAll")
        fetch(url).then(response => {
            if (response.ok) {
                return response.json()
            }
        }).then(words => {
            for (let word of words) {
                if (word.future.includes(search.value.toString().toLowerCase().trim()) ||
                    word.past.includes(search.value.toString().toLowerCase().trim()) ||
                    word.present.includes(search.value.toString().toLowerCase().trim()) ||
                    word.ukraine.includes(search.value.toString().toLowerCase().trim())) {
                    printWords(word);
                }
            }
        })
});




