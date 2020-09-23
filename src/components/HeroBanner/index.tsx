import React, { ReactElement } from 'react'

import {HomeInput} from '../HomeInput'

const HeroBanner: React.FC = (): ReactElement =>{
    return(
        <div className = "Banner">
            <div className="Banner-content">
                <h1 className="Banner-contentTitle">
                   <span> Pickascore </span> <br/>  <br/> La Quiniela Digital de la NFL
                    
                </h1>
                <p className = "Banner-contentText">
                    Solo Entra, Escoge y Juega el Juego <br/> con Pickascore
                </p>
                <p className="Banner-contentText">
                    Ganas hasta $1,000 por cuarto y hasta $4,000 por Partido
                </p>
                <i style={{margin: "10px"}} className = "Paypal-icon"></i> 
                <HomeInput />
            </div>
        </div>
    )
}

export default HeroBanner