import React, { Fragment, ReactElement, useState } from 'react'

import {generateCells} from '../../utils' ;
import CellBtn from '../GameComponent/CellBtn';

// const Team1 = '../../assets/logos/team1.png'
// const Team2 = '../../assets/logos/team2.png';


const Game: React.FC =() : ReactElement => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [cells, setCells] = useState(generateCells());
    
    // const onClick = (row:number, col:number) => {
    //     alert(row+'-'+col)
    // }
    
    const renderCells = (): React.ReactNode => {
        return cells.map((row, rowIndex) => row.map((cell, colIndex) => 
            <CellBtn row={rowIndex} col={colIndex} 
        key={`${rowIndex}-${colIndex}`} />))
    }

    return (
        <Fragment> 
            <div className="Game">
                <div className="Top">
                    <div className="Top-Team2">
                        <div className="Team1-logo">
                            <h1>
                               Logo 
                            </h1>
                        </div>    
                        <div className="Team2-name">
                            Team2
                        </div>
                        <div className="Top-Score">
                                <h1>
                                    0
                                </h1>
                                <h1>
                                    1
                                </h1>
                                <h1>
                                    2
                                </h1>
                                <h1>
                                    3
                                </h1>
                                <h1>
                                    4
                                </h1>
                                <h1>
                                    5
                                </h1>
                                <h1>
                                    6
                                </h1>
                                <h1>
                                    7
                                </h1>
                                <h1>
                                    8
                                </h1>
                                <h1>
                                    9
                                </h1>
                        </div>
                    </div>
                </div>
                <div className="MainBody">
                    <div className="Left">
                        <div className="Team1-logo">
                            <h1>
                               Logo 
                            </h1>
                        </div> 
                        <div className="Left-Team1">
                            Team1
                        </div>
                        <div className="Left-Score">
                        <h1>
                                    9
                                </h1>
                                <h1>
                                    8
                                </h1>
                                <h1>
                                    7
                                </h1>
                                <h1>
                                    6
                                </h1>
                                <h1>
                                    5
                                </h1>
                                <h1>
                                    4
                                </h1>
                                <h1>
                                    3
                                </h1>
                                <h1>
                                    2
                                </h1>
                                <h1>
                                    1
                                </h1>
                                <h1>
                                    0
                                </h1>
                        </div>
                    </div>
                    <div className="Body">
                        {renderCells()}
                    </div>
                </div>
            </div>  
        </Fragment>
    )
}

export default Game