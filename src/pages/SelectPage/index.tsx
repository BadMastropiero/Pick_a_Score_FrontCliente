import React, { Fragment, ReactElement, useState, useEffect } from 'react';
import { AuthRoutes } from '../../types/enums/app-routes.enum';
import { scrollToTop } from '../../utils';
import { getActiveGames } from '../../API/games'

import FeaturesCard from '../../components/FeaturesCard';
import Feature1 from '../../assets/figures/Rectángulo224.svg';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

import GamePage from '../GamePage';
// import Navbar from '../../components/TheNavbar';

const SelectPage: React.FC = (): ReactElement => {
    const [games, setGames] = useState([])

    useEffect(() => {
        getActiveGames().then(data => {
            setGames(data)
            // alert(JSON.stringify(data))
        })
    }, [])

    const select = () => {
        return (
            <Fragment>
                <div className="Features-content">
                    <h2>ESCOGE TU QUINIELA Y GANA </h2>
                </div>
                <section className="Features">
                    {games?.map((item: any) => {
                        return (
                            <Link key={item._id} 
                                  onClick={scrollToTop} 
                                  to={AuthRoutes.GAME + '/' + item._id}>
                                <FeaturesCard source={Feature1} alt={""} teams={item.teams}  description={item.description} />
                            </Link>
                        )
                    })}
                </section>
            </Fragment>
        )
    }

    return (
        <Router>
            {/* <Navbar/> */}
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