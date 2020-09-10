import React, { ReactElement } from 'react'
import {Link} from 'react-router-dom'
import { AppRoutes as Routes } from '../../types/enums/app-routes.enum'

import ActionBtn from '../ActionBtn'

const Navbar: React.FC = (): ReactElement => {
    return (
        <div className="Header">
            <div className="Header-left">
                <h1 className="Header-logo">LOGO</h1>
                <i className="Logo-icon"></i>
                <ActionBtn>
                    <Link className="ActionBtn-name" to={Routes.SELECT}> Select a Game</Link>
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