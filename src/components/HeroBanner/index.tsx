import React, { ReactElement } from 'react'

import {HomeInput} from '../HomeInput'

const HeroBanner: React.FC = (): ReactElement =>{
    return(
        <div className = "Banner">
            <div className="Banner-content">
                <h1 className="Banner-contentTitle">
                    JUEGA EL JUEGO <br/> con <br/> <span> Pickascore </span> <br/> ¡Es muy fácil Ganar en Pickascore!
                    
                </h1>
                <p className = "Banner-contentText">
                    Solo Entra, Escoge y Juega el Juego. <br/>
                    La 1ra Quiniela Digital en la que ganas de volada hasta $4,000 x partido. <br/>
                    Ganas $1,000 por cuarto y hasta $4,000 por partido.
                </p>
                <HomeInput />
            </div>
        </div>
    )
}

export default HeroBanner