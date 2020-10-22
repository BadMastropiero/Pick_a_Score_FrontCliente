import { basePath } from '../API/config';
import { ACCESS_INFO } from '../constants';
import {openInNewTab} from '../utils/index';

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

export function checkOut(row: number, col: number, userID: string, gameID: string ) {

    const url = `${basePath}/paypal/checkoutBet`;

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: userID,
            game: gameID,
            numbers: {
                n1: row,
                n2: col
            }
        })
    }
    // alert(JSON.stringify(params))
    
    return fetch(url, params)
    
        .then(response => {
            console.log(JSON.stringify(params))
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

export function refreshUser() {
    const url = `${basePath}/user/user/refreshToken`;
    const token = ACCESS_INFO.token
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: token
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