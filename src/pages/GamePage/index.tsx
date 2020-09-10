import React, { Fragment, ReactElement } from 'react'

import Game from '../../components/GameComponent/MainComponent'
const team1 = '../../assets/logos/team1.png';

const GamePage: React.FC = (): ReactElement => {
    return (
        <Fragment>
            <div className="GameSection">
                <Game/>
            </div>
        </Fragment>
    )
}

export default GamePage