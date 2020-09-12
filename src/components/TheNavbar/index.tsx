import React, { ReactElement } from 'react';
import {Link} from 'react-router-dom';
import {  AuthRoutes, NonAuthRoutes } from '../../types/enums/app-routes.enum';

import ActionBtn from '../ActionBtn';
import LOGO from '../../assets/logos/LOGO_V1.png';

const Navbar: React.FC = (): ReactElement => {
    return (
        <div className="Header">
            <div className="Header-left">
                <div className="Header-logo">
                    <Link to={NonAuthRoutes.HOME}> 
                        <img className="Header-img" src={LOGO} alt=""/>
                    </Link>
                </div>
                <i className="Logo-icon"></i>
                <ActionBtn>
                    <Link className="ActionBtn-name" to={AuthRoutes.SELECT}> Select a Game</Link>
                </ActionBtn>
            </div>
            <div className="Header-right">
                <i className="Notification-icon"></i>
                <div className="Header-user">
                    <span>UserName</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar