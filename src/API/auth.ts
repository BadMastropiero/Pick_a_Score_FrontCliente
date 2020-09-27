/* eslint-disable @typescript-eslint/no-unused-vars */
// import {basePath} from '../API/config';
import {ACCESS_TOKEN, USER_DATA} from '../constants';
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
    localStorage.removeItem(USER_DATA);
}

const willExpireToken= async(token:any)=>{
    const seconds = 60;
    const {exp} = await jwtDecode(token)   
    const now = (Date.now() + seconds) / 1000;
    return now > exp;
}