import React, { Fragment, ReactElement } from 'react';
import LOGO from '../../assets/logos/LOGO_V1.webp';

const TheFooter: React.FC = (): ReactElement => {
    return (
        <Fragment>
            <div className="Footer">
                <div className="Footer-left">
                    <h4>
                        Todos los pagos se realizan a través de Paypal
                    </h4>
                    <i className = "Paypal-icon"></i> 
                </div>
                <div className="Footer-right">
                    <h3>
                        Juega el Juego <br/> con <br/> Pickascore
                    </h3>
                </div>
            </div>
            <div className="CopyRight">
                <h3>Software owned by <br/> <span> Pick@Score </span> <br/> &copy; Copyright 2020</h3>
                <img className="Header-img" src={LOGO} alt="" />
            </div>
        </Fragment>
        
    )
} 

export default TheFooter