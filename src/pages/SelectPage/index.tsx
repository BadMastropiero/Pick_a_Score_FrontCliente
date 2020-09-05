import React, { Fragment, ReactElement } from 'react'

import FeaturesCard from '../../components/FeaturesCard';


import Feature1 from '../../assets/figures/Rectángulo224.svg';
import Feature2 from '../../assets/figures/Rectángulo225.svg';
import Feature3 from '../../assets/figures/Rectángulo226.svg';

const SelectPage: React.FC = (): ReactElement => {
    const FeatureTitle1 = "This is number 1 feature"
    const infoFeature1 = "Some words about this feature"
    const FeatureTitle2 = "This is number 2 feature"
    const infoFeature2 = "Some words about this feature"    
    const FeatureTitle3 = "This is number 3 feature"
    const infoFeature3 = "Some words about this feature"
    return (
        <Fragment>
             <div className="Features-content">
                    <h2>Pick one of this</h2>
                </div>
            <section className ="Features">
                <FeaturesCard source={Feature1} alt={""} title={FeatureTitle1} description={infoFeature1}  />
                <FeaturesCard source={Feature2} alt={""} title={FeatureTitle2} description={infoFeature2}  />
                <FeaturesCard source={Feature3} alt={""} title={FeatureTitle3} description={infoFeature3}  />
            </section>
        </Fragment>
    )
}

export default SelectPage