import React, {ReactElement} from 'react'
import {Link} from 'react-router-dom'
import { AppRoutes as Routes } from '../../types/enums/app-routes.enum'

import ActionBtn from '../ActionBtn'

interface FeaturesCardProps {
    source: string
    alt: string
    title: string
    description: string
}


const FeaturesCard: React.FC<FeaturesCardProps> = ({source, alt, title, description}): ReactElement => {
    return (
        <div className="FeaturesContainer-card">
            <h2 className="FeaturesContainer-name">{title}</h2>
            <img className="FeaturesContainer-img" src={source} alt={alt} />
            <span className="FeaturesContainer-text">
                {description}
            </span>
            <div className="FeaturesContainer-btn">
                <ActionBtn>
                <Link className="ActionBtn-name" to={Routes.GAME}> Pick this</Link>
                </ActionBtn>
            </div>
        </div>
    )
}

export default FeaturesCard