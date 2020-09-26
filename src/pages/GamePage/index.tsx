import React, { Fragment, ReactElement,useEffect } from 'react';
import { getBetsByGame } from '../../API/games';
import Game from '../../components/GameComponent/MainComponent';

import {
    useParams
} from "react-router-dom";

const GamePage: React.FC = (props): ReactElement => {
    console.log(props)
    let { gameId, hostTeamName, visitTeamName  } = useParams<any>();
    console.log(JSON.stringify(hostTeamName))
    useEffect(()=>{
        getBetsByGame(gameId).then(bets => {
            console.log(bets)
            bets?.map((item:any) => {
                alert(JSON.stringify(item))
            })
        })
    },[])



    return (
        <Fragment>
            <div className="GameSection">
                <Game hostTeamName={hostTeamName} visitTeamName={visitTeamName}/>
            </div>
        </Fragment>
    )
}

export default GamePage