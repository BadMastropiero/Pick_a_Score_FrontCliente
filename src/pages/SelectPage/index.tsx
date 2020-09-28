import React, { Fragment, ReactElement, useState, useEffect } from 'react';
import { AuthRoutes } from '../../types/enums/app-routes.enum';
import { scrollToTop } from '../../utils';
import { getActiveGames } from '../../API/games'

import FeaturesCard from '../../components/FeaturesCard';

import {
    Switch,
    Route,
    Link,
} from "react-router-dom";

import GamePage from '../GamePage';

const SelectPage: React.FC = (): ReactElement => {
    const [games, setGames] = useState([])

    useEffect(() => {
        getActiveGames().then(data => {
            setGames(data)
            // alert(JSON.stringify(data))
            // console.log(JSON.parse(JSON.stringify(data)))
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
                        const buff1 = Buffer.from(item.teams.team1.logo.data).toString('base64')
                        const buff2 = Buffer.from(item.teams.team2.logo.data).toString('base64')
                        return (
                            <Link key={item._id} 
                                  onClick={scrollToTop} 
                                  to={AuthRoutes.SELECT+AuthRoutes.GAME + '/' + item._id}>
                                <FeaturesCard source1={buff1} source2={buff2} alt={""} teams={item.teams}  description={item.description} />
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