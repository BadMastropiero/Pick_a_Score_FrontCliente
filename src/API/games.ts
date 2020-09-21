import { basePath } from '../API/config';
//
export function getActiveGames() {

    const url = `${basePath}/guest/games/active`;

    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: undefined
    }
    return fetch(url, params)
        .then(response => {
            return response.json();
        })
        .then(result => {
            return result.data;
        })
        .catch(error => {
            console.log(error)
        })
}