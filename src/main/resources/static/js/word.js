import {address, POST} from "./module.js";

let search = document.getElementById('search');
search.addEventListener('keydown', e => {
    console.log(e.code)
    if (e.code === "Enter"){
        document.querySelectorAll('.element').forEach(el => el.remove())
        let url = address("/api/getAll")
        fetch(url).then(response => {
            if (response.ok){
                return response.json()
            }
        }).then(words => {
            for (let word of words) {
                if(word.english.includes(search.value.toString().toLowerCase()) || word.ukraine.includes(search.value.toString().toLowerCase())){
                    printWords(word);
                }
            }
        })
    }
});


    let url = address("/api/getAll")
    fetch(url).then(response => {
        if (response.ok) {
            return response.json()
        }
    }).then(words => {
        console.log("first print")
        for (let word of words) {
            printWords(word);
        }
    })



document.addEventListener('click', function(e) {
    let id = +e.target.id;
    if(typeof id === "number"){
        let english = document.getElementById('english');
        let ukraine = document.getElementById('ukraine');
        let adminAlert = document.getElementById('adminAlert');
        let body = document.getElementById('body');

        let url = address("/api/getAll")
        fetch(url).then(response => {
            if (response.ok) {
                return response.json()
            }
        }).then(words => {
            for (let word of words){
                if (word.id === id) {
                    localStorage.setItem('id', id)
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
        })
    }
})

let save = document.getElementById('save');
save.addEventListener('click', () => {
    let word = {
        english: document.getElementById('english').value,
        ukraine: document.getElementById('ukraine').value,
        id: localStorage.getItem('id')
    }

    fetch(address("/api/edit"), {
        method: 'POST',
        body: JSON.stringify(word),
        headers: {'Content-Type': 'application/json'}
    }).then(response => {
        if (response.ok) {
            response.json()
                .then(word => {
                    let arr = document.getElementById(localStorage.getItem('id'))
                        .parentElement
                        .childNodes;
                    arr[0].innerText = word.english;
                    arr[1].innerText = word.ukraine
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
    let word = {
        english: document.getElementById('addEnglish').value,
        ukraine: document.getElementById('addUkraine').value,
        id: null
    }

    fetch(address("/api/edit"), {
        method: 'POST',
        body: JSON.stringify(word),
        headers: {'Content-Type': 'application/json'}
    }).then(response => {
        if (response.ok) {
            response.json().then(word => {
                printWords(word)
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
        document.getElementById(id).parentElement.remove()
        let body = document.getElementById('body');
        body.style.height = 'auto';
        let adminAlert = document.getElementById("adminAlert")
        adminAlert.style.display = 'none';
        fetch(address("/api/delete"), {
            method: 'POST',
            body: JSON.stringify(id),
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            if (response.ok) {

            }
        })
    })

function printWords(word){
    let wrapper = document.querySelector('div[class = element_wrapper]')

    let element = document.createElement('div');
        element.classList.add('element');

    let english = document.createElement('div');
        english.innerText = word.english;
        english.classList.add('element_name')
    let ukraine = document.createElement('div');
        ukraine.innerText = word.ukraine;
        ukraine.classList.add('element_name')

    let clickZone = document.createElement('div');
        clickZone.classList.add("clickZone")
        clickZone.id = word.id;

            element.append(english, ukraine, clickZone);
        wrapper.append(element);
}




