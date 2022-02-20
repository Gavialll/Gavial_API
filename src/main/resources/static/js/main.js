function GET(url, headers = {
                        'Content-Type': 'application/json'
                    }) {
    return fetch(url, {
        method: "GET",
        headers: headers
    }).then(response => {
        if (response.ok) {
            return response.json()
        }
        else {
            console.log('false')
        }
    })
}

let url = 'https://gavialapi.herokuapp.com/api/exchange';

let first = [];
let second = [];
GET(url).then(res => {
    let canvas = document.getElementById('canvas');
    let button = document.getElementById('more')

    let arr = res.exchangeRate;
    console.log(arr)
    let currency = ['USD', 'EUR', 'PLN', 'CZK'];


    for (let j = 0; j < currency.length; j++) {
        for (let i = 0; i < arr.length; i++) {
                if (arr[i].currency === currency[j]) {
                    first.push(arr[i]);
                    arr.slice(i,i)
                }
        }
    }
    second = arr;
    for (let i = 0; i < first.length; i++) {
            let element = document.createElement('div');
            element.classList.add('element');
            let left = document.createElement('div');
            left.classList.add('side');
            left.innerText = first[i].purchaseRate.toString().substr(0, 5);
            let center = document.createElement('div');
            center.classList.add('center');
            center.innerText = first[i].currency;
            let right = document.createElement('div');
            right.classList.add('side');
            right.innerText = first[i].saleRate.toString().substr(0, 5);

            canvas.insertBefore(element, button);
            element.append(left, center, right);
        }
})

let r = 0;
let more = document.getElementById("more");
more.addEventListener('click', () => {
    let canvas = document.getElementById('canvas');
    console.log(second);
    for (let i = 1; i < second.length; i++) {
        let element = document.createElement('div');
        element.classList.add('element');
        let left = document.createElement('div');
        left.classList.add('side');
        left.innerText = second[i].purchaseRateNB.toString().substr(0, 5);
        let center = document.createElement('div');
        center.classList.add('center');
        center.innerText = second[i].currency;
        let right = document.createElement('div');
        right.classList.add('side');
        right.innerText = second[i].saleRateNB.toString().substr(0, 5);

        canvas.insertBefore(element, more);
        element.append(left, center, right);
        r++;
        console.log(r)
    }
})




let right = document.getElementById("right");
let left = document.getElementById("left");

right.addEventListener('click', function(event){
    document.location.href = "https://gavialapi.herokuapp.com/exchange/getExchange";
})
left.addEventListener('click', function(event){
    document.location.href = "https://gavialapi.herokuapp.com/exchange/getHistory";
})