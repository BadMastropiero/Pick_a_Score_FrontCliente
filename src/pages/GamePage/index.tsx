import React, { Fragment, ReactElement,useEffect } from 'react';
import { getBetsByGame } from '../../API/games';
import Game from '../../components/GameComponent/MainComponent';

import { useParams } from "react-router-dom";

const GamePage: React.FC = (): ReactElement => {
    
    let { gameId } = useParams<any>();

    const gameString = gameId

    // console.log(typeof gameString)

    useEffect(()=>{
        // alert('Entro a GamePage')
        getBetsByGame(gameId).then(bets => {
            bets?.map((item:any) => {
                // alert(JSON.parse(JSON.stringify(item)))
            })
        }).catch(err => {
            console.error(err)
        })
    },[])



    return (
        <Fragment>
            <div className="GameSection">
                <Game IDgame={gameString}/>
            </div>
        </Fragment>
    )
}

export default GamePage