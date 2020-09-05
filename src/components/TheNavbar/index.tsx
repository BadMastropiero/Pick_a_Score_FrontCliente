import React, { ReactElement } from 'react'

import ActionBtn from '../ActionBtn'

const Navbar: React.FC = (): ReactElement => {
    return (
        <div className="Header">
            <div className="Header-left">
                <h1 className="Header-logo">LOGO</h1>
                <i className="Logo-icon"></i>
                <ActionBtn />
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