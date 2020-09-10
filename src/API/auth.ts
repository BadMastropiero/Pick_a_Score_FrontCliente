// import {basePath} from '../API/config';
import {ACCESS_TOKEN,REFRESH_TOKEN} from '../constants';
import jwtDecode from 'jwt-decode';

// Obtengo el token del local storage
export function getAccessToken(){
    const accesToken = localStorage.getItem(ACCESS_TOKEN);
    if(!accesToken || accesToken === "null"){
        return null;
    }
    return willExpireToken(accesToken) ? null : accesToken;
}

// Funcion para logout
export function logout(){
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
}

const willExpireToken= async(token:any)=>{
    const seconds = 60;
    const {exp} = await jwtDecode(token)   
    const now = (Date.now() + seconds) / 1000;
    return now > exp;
}