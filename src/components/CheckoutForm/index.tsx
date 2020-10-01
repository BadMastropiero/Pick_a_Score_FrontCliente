import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import {AuthRoutes} from '../../types/enums/app-routes.enum';
import {scrollToTop} from '../../utils';
import ActionBtn from '../ActionBtn';



export const CheckoutForm = () => {
    
    return (
        <Fragment>
            <div className="CheckoutMessage">
                <h3 className="CheckoutMessage-text">
                    Muchas gracias por su compra <br/> Éxitos!
                </h3>
                <ActionBtn>
                    <Link onClick={scrollToTop} to={AuthRoutes.SELECT}>
                        Regresar a las quinielas
                    </Link>
                </ActionBtn>    
            </div>
            
        </Fragment>
    )
}
