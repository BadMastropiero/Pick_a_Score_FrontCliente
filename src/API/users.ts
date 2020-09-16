import { basePath } from '../API/config';

export function signIn(data: any) {
    const url = `${basePath}/auth/signIn`;
    // alert(JSON.stringify(data.password))
    const params = {
        method: 'POST',
        headers: {
            "pin": data.password
        }
    }

    return fetch(url, params)
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

    const url = `${basePath}/paypal/checkoutBet`;

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "user": "5f545db5ab1a2dc54485dcae",
            "game": "5f5403a479e9922e717934ef",
            "numbers": {
                "n1": 0,
                "n2": 0
            }
        })
    }
    // alert(JSON.stringify(params))
    return fetch(url, params)
        .then(response => {
            return response.json();
        })
        .then(result => {
            // console.log(result)
            // alert(JSON.stringify(result))
            openInNewTab(result.data.approveLink)
            return result;
        })
        .catch(error => {
            console.log(error)
        })
}

function openInNewTab(url: string) {
    const win: any = window.open(url, '_blank');
    win.focus();
}

export function registerUser(data: any) {
    const url = `${basePath}/user/user/`;
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ email: data.email, name: data.name, nickname: data.nickname })
    }

    return fetch(url, params)
        .then(response => {
            return response.json();
        })
        .then(result => {
            
            if (result.code !== 200) {
                return result
            }
            return result.data;
        })
        .catch(error => {
            return error
        })
}