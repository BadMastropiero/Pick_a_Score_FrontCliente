import React, { Fragment, ReactElement,useEffect } from 'react';
import { getBetsByGame } from '../../API/games';
import Game from '../../components/GameComponent/MainComponent';

import { useParams } from "react-router-dom";

const GamePage: React.FC = (): ReactElement => {
    
    let { gameId } = useParams<any>();

    useEffect(()=>{
        getBetsByGame(gameId).then(bets => {
            console.log(gameId,bets)
            bets?.map((item:any) => {
                alert(JSON.stringify(item))
            })
        }).catch(err => {
            console.error(err)
        })
    },[])



    return (
        <Fragment>
            <div className="GameSection">
                <Game/>
            </div>
        </Fragment>
    )
}

export default GamePage