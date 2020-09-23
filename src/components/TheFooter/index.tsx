import React, { Fragment, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import {NonAuthRoutes} from '../../types/enums/app-routes.enum';
import {scrollToTop} from '../../utils';

import ActionBtn from '../ActionBtn'

const TheFooter: React.FC = (): ReactElement => {
    return (
        <Fragment>
            <div className="Footer">
                <div className="Footer-left">
                    <h4>
                        Todos los pagos se realizan a través de Paypal
                    </h4>
                    <i className = "Paypal-icon"></i>
                    {/* <ul className="Footer-contact">
                        <li>
                            <i className = "Facebook-icon"></i>
                            <a href="/">Facebook</a>
                        </li>
                        <li>
                        <i className = "Whatsapp-icon"></i>
                            <a href="/">Whatsapp</a>
                        </li>
                        <li>
                        <i className = "Twitter-icon"></i>
                            <a href="/">Twitter</a>
                        </li>
                        <li>
                        <i className = "Instagram-icon"></i>
                            <a href="/">Instagram</a>
                        </li>
                    </ul> */}
                </div>
                <div className="Footer-right">
                    <h3>
                        Juega el Juego <br/> con <br/> Pickascore
                    </h3>
                    <div className="Footer-btn">
                        <Link onClick={scrollToTop} to={NonAuthRoutes.INFO}>
                            <ActionBtn>
                                Conoce las reglas
                            </ActionBtn>
                        </Link>
                        
                    </div>
                </div>
            </div>
            <div className="CopyRight">
                <h3>Software developed by <span> KmadaTech</span> &copy; Copyright 2020</h3>
                <i className="Kmada-icon"></i>
            </div>
        </Fragment>
        
    )
} 

export default TheFooter