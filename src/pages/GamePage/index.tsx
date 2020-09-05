import React, { Fragment, ReactElement } from 'react'

import Game from '../../components/GameComponent/MainComponent'
const team1 = '../../assets/logos/team1.png';

const GamePage: React.FC = (): ReactElement => {
    return (
        <Fragment>
            <div className="GameSection">
                <div className="Logos">
                    <img src={team1} alt=""/>
                </div>
                <Game/>
            </div>
        </Fragment>
    )
}

export default GamePage