import React, { Fragment, ReactElement, useState } from 'react'

import {generateCells} from '../../utils' ;
import CellBtn from '../GameComponent/CellBtn';
import ActionBtn from '../ActionBtn';

import Team1 from '../../assets/logos/NFLTeams/team1.png'
import Team2 from '../../assets/logos/NFLTeams/team2.png';


const Game: React.FC =() : ReactElement => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [cells, setCells] = useState(generateCells());
        
    const renderCells = (): React.ReactNode => {
        return cells.map((row, rowIndex) => row.map((cell, colIndex) => 
            <CellBtn row={rowIndex} col={colIndex} 
        key={`${rowIndex}-${colIndex}`} />))
    }

    return (
        <Fragment>
            <div className="GamePage">
            <div className="Game">
                <div className="Top">
                    <div className="Top-Team2">
                        <div className="Team2-logo">
                           <img className="Logo-img" src={Team1} alt=""/>
                        </div>    
                        <div className="Team-name">
                            <span>Team2</span>
                        </div>
                        <div className="Top-Score">
                                <div className="ScoreNumber">
                                    <span>
                                        0
                                    </span>
                                </div>
                                <div className="ScoreNumber">
                                <span>
                                        1
                                    </span>
                                </div>
                                <div className="ScoreNumber">
                                <span>
                                        2
                                    </span>
                                </div>
                                <div className="ScoreNumber">
                                <span>
                                        3
                                    </span>
                                </div>
                                <div className="ScoreNumber">
                                <span>
                                        4
                                    </span>
                                </div>
                                <div className="ScoreNumber">
                                <span>
                                        5
                                    </span>
                                </div>
                                <div className="ScoreNumber">
                                <span>
                                        6
                                    </span>
                                </div>
                                <div className="ScoreNumber">
                                <span>
                                        7
                                    </span>
                                </div>
                                <div className="ScoreNumber">
                                <span>
                                        8
                                    </span>
                                </div>
                                <div className="ScoreNumber">
                                <span>
                                        9
                                    </span>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="MainBody">
                    <div className="Left">
                        <div className="Team1-logo">
                            <img className="Logo-img" src={Team2} alt=""/>
                        </div> 
                        <div className="Team-name">
                            <span>Team1</span>
                        </div>
                        <div className="Left-Score">
                        <div className="ScoreNumber">
                                    <span>
                                        9
                                    </span>
                                </div>
                                <div className="ScoreNumber">
                                <span>
                                        8
                                    </span>
                                </div>
                                <div className="ScoreNumber">
                                <span>
                                        7
                                    </span>
                                </div>
                                <div className="ScoreNumber">
                                <span>
                                        6
                                    </span>
                                </div>
                                <div className="ScoreNumber">
                                <span>
                                        5
                                    </span>
                                </div>
                                <div className="ScoreNumber">
                                <span>
                                        4
                                    </span>
                                </div>
                                <div className="ScoreNumber">
                                <span>
                                        3
                                    </span>
                                </div>
                                <div className="ScoreNumber">
                                <span>
                                        2
                                    </span>
                                </div>
                                <div className="ScoreNumber">
                                <span>
                                        1
                                    </span>
                                </div>
                                <div className="ScoreNumber">
                                <span>
                                        0
                                    </span>
                                </div>
                        </div>
                    </div>
                    <div className="Body">
                        {renderCells()}
                    </div>
                    <div className="ScoreCount">
                        <h2>
                            <span>A</span>
                            <span>C</span>
                            <span>T</span>
                            <span>U</span>
                            <span>A</span>
                            <span>L</span>
                            <span>M</span>
                            <span>E</span>
                            <span>N</span>
                            <span>T</span>
                            <span>E</span>
                        </h2>
                        
                            <span>    
                                <br/> 
                                    <div className="ScoreCount-Score">
                                        <ActionBtn> 
                                            500
                                        </ActionBtn>
                                    </div>
                                <br/>
                                En juego
                            </span> 
                    </div>
                </div>
            </div>  
            </div> 
        </Fragment>
    )
}

export default Game