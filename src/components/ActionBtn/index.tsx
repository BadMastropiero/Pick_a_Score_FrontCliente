import React, { ReactElement } from 'react'
import {Link} from 'react-router-dom'
import { AppRoutes as Routes } from '../../types/enums/app-routes.enum'


const ActionBtn: React.FC  = (title): ReactElement => {
    
    return (
        <div className="ActionBtn"> 
            <span  className="ActionBtn-title">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <Link className="ActionBtn-name" to={Routes.GAME}> Pick a Score</Link>
            </span>
        </div>
    )
}

export default ActionBtn