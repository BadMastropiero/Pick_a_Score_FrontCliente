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
            // alert(JSON.stringify(result.data))
            return result.data;
            
        })
        .catch(error => {
            console.log(error)
        })
}

export function getBetsByGame(gameId: string) {

    const url = `${basePath}/user/bet/listBetsByGame`;

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            game: gameId
        })
    }
    return fetch(url, params)
        .then(response => {
            alert(JSON.stringify(response))
            return response.json();
        })
        .then(result => {
            return result.data;
        })
        .catch(error => {
            console.log(error)
        })
}