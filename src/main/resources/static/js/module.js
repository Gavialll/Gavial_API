export function POST(method,
                     url,
                     body,
                     headers = {
                         'Content-Type': 'application/json'
                     }){

    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        if (response.ok) {
            return response.json()
        }
    })
}
export function address(namePage){
    // return `http://localhost:8081${namePage}`;
    // return `http://192.168.1.100:8081${namePage}`;
    // return `http://localhost:63342/Gavial_API/templates${namePage}.html?_ijt=m41rs8hj7qt1n2lquoeg6l4pie&_ij_reload`;
    return `https://gavialapi.herokuapp.com${namePage}`;
}

export function upperFirstLetter(string){
    let stringArray = string.split("");
    return stringArray[0].toUpperCase() + stringArray.slice(1).join('');
}