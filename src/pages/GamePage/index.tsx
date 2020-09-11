import React, { Fragment, ReactElement } from 'react'

import Game from '../../components/GameComponent/MainComponent'


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