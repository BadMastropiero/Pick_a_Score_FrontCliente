import {basePath} from '../API/config';

export function signIn(data:any){
    const url = `${basePath}/auth/signIn`;
    // alert(JSON.stringify(data.password))
    const params = {
        method:'POST',
        headers:{
            "pin": data.password
        }
    }

    return fetch(url,params)
    .then(response => {
        return response.json();
    })
    .then(result => {  
        console.log(result)    
        return result;
    })
    .catch(error => {
        console.log(error)
    })
}

export function checkOut() {
    const url =`${basePath}/paypal/checkoutBet`;

    const params = {
        method:'POST',
        body: JSON.stringify({
            "user": "5f545db5ab1a2dc54485dcae",
            "game": "5f5403a479e9922e717934ef",
            "numbers": {
                "n1": 0,
                "n2": 0
            }
        })
    }

    return fetch(url, params)
    .then(response => {
        return response.json();
    })
    .then(result => {
        return result;
    })
    .catch(error => {
        console.log(error)
    })
}