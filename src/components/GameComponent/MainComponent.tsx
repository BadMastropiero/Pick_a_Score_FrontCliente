import React, { Fragment, ReactElement, useEffect, useState } from 'react';
import {generateCells} from '../../utils' ;
import {gameInfo, getBetsByGame} from '../../API/games';
import {ACCESS_INFO, MIN_BET, HOUSE_FEE} from '../../constants'
import CellBtn from '../GameComponent/CellBtn';

interface GameProps {
    IDgame: string
}

const Game: React.FC <GameProps> =({IDgame}) : ReactElement => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [cells, setCells] = useState(generateCells());

    const [game, setGame] = useState<any>({})

    const [bets, setBets] = useState<any>([])

    const IDuser = ACCESS_INFO.user._id;

    useEffect(() => {
        gameInfo(IDgame).then(data => {
            setGame(data)
            // alert(JSON.stringify(data))
            console.log(data)
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        getBetsByGame(IDgame).then(data=> {
            setBets(data)
            console.log(data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let payBet = () => {
        const ifPay = bets.filter((item: any) => (item.paid))
        if (ifPay.length>0){
            return (<span>{MIN_BET * ifPay.length * (100 - HOUSE_FEE)/100}</span>)
        } else {
            return (<span>Aun sin apuestas</span>)
        }
    }


    
    const renderCells = (): React.ReactNode => {
        return cells.map((row, rowIndex) => row.map((cell, colIndex) => 
            <CellBtn bets={bets} userID={IDuser} gameID={IDgame} row={rowIndex} col={colIndex} 
        key={`${rowIndex}-${colIndex}`} />))
    }
    
    const buff1 = game.teams ? Buffer.from(game.teams?.team1?.card.data).toString('base64') : ''
    const buff2 = game.teams ? Buffer.from(game.teams?.team2?.card.data).toString('base64') : ''

    return (
        <Fragment>
            <div className="GamePage">
            <div className="Game">
                <div className="Top">
                    <h2 className="Top-title">
                    Las apuestas solo son válidas hasta las 9PM, hora Central de Estados Unidos
                    </h2>
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
                                        {payBet()}
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
