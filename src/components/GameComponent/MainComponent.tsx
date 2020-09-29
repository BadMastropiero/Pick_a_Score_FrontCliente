import React, { Fragment, ReactElement, useEffect, useState } from 'react';
import {generateCells} from '../../utils' ;
import {gameInfo} from '../../API/games';
import {ACCESS_INFO} from '../../constants'
import CellBtn from '../GameComponent/CellBtn';


interface GameProps {
    IDgame: string
}

const Game: React.FC <GameProps> =({IDgame}) : ReactElement => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [cells, setCells] = useState(generateCells());

    const [game, setGame] = useState<any>({})

    const IDuser = ACCESS_INFO.user._id;

    useEffect(() => {
        gameInfo(IDgame).then(data => {
            setGame(data)
            // alert(JSON.stringify(data))
            console.log(data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const renderCells = (): React.ReactNode => {
        return cells.map((row, rowIndex) => row.map((cell, colIndex) => 
            <CellBtn userID={IDuser} gameID={IDgame} row={rowIndex} col={colIndex} 
        key={`${rowIndex}-${colIndex}`} />))
    }
    
    const buff1 = game.teams ? Buffer.from(game.teams?.team1?.card.data).toString('base64') : ''
    const buff2 = game.teams ? Buffer.from(game.teams?.team2?.card.data).toString('base64') : ''
    // const buff1 = Buffer.from(game.teams?.team1.card.data).toString('base64')
    // console.log(buff1)

    return (
        <Fragment>
            <div className="GamePage">
            <div className="Game">
                <div className="Top">
                    <div className="Top-Team2">
                        <div className="Team2-logo">
                           <img className="Logo-img" src={"data:image/png;base64, "+buff2} alt=""/>
                        </div>    
                        <div className="Team-name">
                            <span>{game.teams?.team2?.name}</span>
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
                            <img className="Logo-img" src={"data:image/png;base64, "+buff1} alt=""/>
                        </div> 
                        <div className="Team-name">
                            <span>{game.teams?.team1?.name}</span>
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
                                <div className="ScoreCount-Score">
                                    <h3>
                                        <span>
                                            3500
                                        </span>
                                    </h3>
                                </div>
                                <br/>
                            </span> 
                        <h2>
                            <span>E</span>
                            <span>N</span>
                            <span>{'   '}</span>
                            <span>J</span>
                            <span>U</span>
                            <span>E</span>
                            <span>G</span>
                            <span>O</span>
                        </h2>
                    </div>
                </div>
            </div>  
            </div> 
        </Fragment>
    )
}

export default Game