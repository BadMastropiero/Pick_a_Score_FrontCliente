import React, { ReactElement } from 'react';
import {USER_DATA, USER_INFO} from '../../constants/index';

import {HomeInput} from '../HomeInput'

let userPin: {} | null | undefined;

if(!localStorage.getItem(USER_DATA)){
    userPin = <div className="UserPin">
        <span className="UserPin">Debe registrarse para obtener su pin de invitado</span>
    </div>
} else {
    userPin = <div className="UserPin">
        <span >Su pin de invitado es: <span> <strong>  {USER_INFO.pin.pin}  </strong> </span></span>
    </div>
}

const HeroBanner: React.FC = (): ReactElement =>{
    return(
        <div className = "Banner">
            <div className="Banner-content">
                <h1 className="Banner-contentTitle">
                   <span> Pickascore </span> <br/> <br/> La Quiniela Digital de la NFL
                </h1>
                <p className = "Banner-contentText">
                    Solo Entra, Escoge y Juega el Juego <br/> con Pickascore
                </p>
                <p className="Banner-contentText">
                    Ganas hasta $1,000 por cuarto y hasta $4,000 por Partido
                </p>
                {userPin}
                <i style={{margin: "10px"}} className = "Paypal-icon"></i> 
                <HomeInput />
            </div>
        </div>
    )
}

export default HeroBanner