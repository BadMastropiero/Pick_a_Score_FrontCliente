import React, { Fragment, ReactElement, useState, useEffect } from 'react';
import { AuthRoutes } from '../../types/enums/app-routes.enum';
import { scrollToTop } from '../../utils';
import { getActiveGames } from '../../API/games'

import FeaturesCard from '../../components/FeaturesCard';
// import Feature1 from '../../assets/figures/Rectángulo224.svg';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

import GamePage from '../GamePage';

const SelectPage: React.FC = (): ReactElement => {
    const [games, setGames] = useState([])

    useEffect(() => {
        getActiveGames().then(data => {
            setGames(data)
            alert(JSON.stringify(data))
            console.log(JSON.parse(JSON.stringify(data)))
        })
    }, [])

    const SelectPageComp:React.FC = (): ReactElement => {
        return (
            <Fragment>
                <div className="Features-content">
                    <h2>ESCOGE TU QUINIELA Y GANA </h2>
                </div>
                <section className="Features">
                    {games?.map((item: any) => {
                        const buff = Buffer.from(item.teams.team1.logo.data).toString('base64')

                        // let Buff = new Buffer(, 'base64')
                        //alert(JSON.stringify((buff)))
                        return (
                            <Link key={item._id}
                                onClick={scrollToTop}
                                to={AuthRoutes.SELECT+ AuthRoutes.GAME + '/' + item._id}>
                                <FeaturesCard source={buff} alt={""} teams={item.teams} description={item.description} />
                            </Link>
                        )
                    })}
                </section>
            </Fragment>
        )
    }



    return (

        <Switch>
            <Route exact path={AuthRoutes.SELECT} component={SelectPageComp}>
            </Route>
            <Route path={AuthRoutes.SELECT+AuthRoutes.GAME + "/:gameId"}  children={<GamePage/>}/>
        </Switch>

    )
}

export default SelectPage