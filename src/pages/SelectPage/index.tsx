import React, { Fragment, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import {AuthRoutes} from '../../types/enums/app-routes.enum';
import {scrollToTop} from '../../utils';

import FeaturesCard from '../../components/FeaturesCard';


import Feature1 from '../../assets/figures/Rectángulo224.svg';
import Feature2 from '../../assets/figures/Rectángulo225.svg';
import Feature3 from '../../assets/figures/Rectángulo226.svg';


const SelectPage: React.FC = (): ReactElement => {
    const FeatureTitle1 = "Team A VS Team B"
    const infoFeature1 = "Some words about this feature"
    const FeatureTitle2 = "Team C VS Team D"
    const infoFeature2 = "Some words about this feature"    
    const FeatureTitle3 = "Team E VS Team F"
    const infoFeature3 = "Some words about this feature"
    return (
        <Fragment>
            
                <div className="Features-content">
                        <h2>Pick one of this</h2>
                    </div>
                <section className ="Features">
                    <Link onClick={scrollToTop} to={AuthRoutes.GAME}>
                        <FeaturesCard source={Feature1} alt={""} title={FeatureTitle1} description={infoFeature1}  />
                    </Link>
                    <Link onClick={scrollToTop} to={AuthRoutes.GAME}>
                        <FeaturesCard source={Feature2} alt={""} title={FeatureTitle2} description={infoFeature2}  />
                    </Link>
                    <Link onClick={scrollToTop} to={AuthRoutes.GAME}>
                        <FeaturesCard source={Feature3} alt={""} title={FeatureTitle3} description={infoFeature3}  />
                    </Link>
                </section>
            
        </Fragment>
    )
}

export default SelectPage