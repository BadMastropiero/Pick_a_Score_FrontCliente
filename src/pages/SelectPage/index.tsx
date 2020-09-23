import React, { Fragment, ReactElement, useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import { AuthRoutes } from '../../types/enums/app-routes.enum';
import { scrollToTop } from '../../utils';
import { getActiveGames } from '../../API/games'

import FeaturesCard from '../../components/FeaturesCard';
import Feature1 from '../../assets/figures/Rectángulo224.svg';
import Feature2 from '../../assets/figures/Rectángulo225.svg';
import Feature3 from '../../assets/figures/Rectángulo226.svg';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import GamePage from '../GamePage'

const SelectPage: React.FC = (): ReactElement => {
    const FeatureTitle1 = "Team A VS Team B"
    const infoFeature1 = "Some words about this feature"
    const FeatureTitle2 = "Team C VS Team D"
    const infoFeature2 = "Some words about this feature"
    const FeatureTitle3 = "Team E VS Team F"
    const infoFeature3 = "Some words about this feature"

    const [games, setGames] = useState([])

    useEffect(() => {
        getActiveGames().then(data => {
            setGames(data)
        })
    }, [])
    /*
    <Link onClick={scrollToTop} to={AuthRoutes.GAME}>
        <FeaturesCard source={Feature1} alt={""} title={FeatureTitle1} description={infoFeature1} />
    </Link>
    <Link onClick={scrollToTop} to={AuthRoutes.GAME}>
        <FeaturesCard source={Feature2} alt={""} title={FeatureTitle2} description={infoFeature2} />
    </Link>
    <Link onClick={scrollToTop} to={AuthRoutes.GAME}>
        <FeaturesCard source={Feature3} alt={""} title={FeatureTitle3} description={infoFeature3} />
    </Link>
    */
    const select = () => {
        return (
            <Fragment>

                <div className="Features-content">
                    <h2>ESCOGE TU QUINIELA Y GANA </h2>
                </div>
                <section className="Features">
                    {games?.map((item: any) => {
                        return (
                            <Link key={item._id} onClick={scrollToTop} to={AuthRoutes.GAME + '/' + item._id}>
                                <FeaturesCard source={Feature1} alt={""} title={FeatureTitle1} description={infoFeature1} />
                            </Link>
                        )
                    })}
                </section>

            </Fragment>
        )
    }

    return (
        <Router>
            <Switch>
                <Route path={AuthRoutes.SELECT}>
                    {select}
                </Route>
                <Route path={AuthRoutes.GAME + "/:gameId"} >
                    <GamePage />
                </Route>
            </Switch>
        </Router>
    )
}

export default SelectPage