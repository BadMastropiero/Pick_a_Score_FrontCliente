import React, { Fragment, ReactElement, useState } from 'react';
import Modal from 'react-modal';
import {checkOut} from '../../API/users';

interface rolProps {
    _id: string
    name: string
}

interface userProps {
    email: string
    name: string
    nickname: string
    rol: rolProps
    _id: string
}

interface numbersProps {
    N1: number
    N2: number
}

interface betProps {
    createdAt: string
    date: string
    game: string
    numbers: numbersProps
    paid: boolean
    user: userProps
}


interface CellBtnProp {
    bets: any
    row: number
    col: number
    userID: string
    gameID: string
}

const CellBtn: React.FC<CellBtnProp> = ({bets, row, col, userID, gameID }): ReactElement => {
    const handlerOnClick = async() => {
        const result = await checkOut(row, col, userID, gameID)
        // alert(result)
        console.log(result)
    }
    console.log(bets)
    let cellScore

    bets.map((bet:betProps) => {
        if (bet.numbers.N1 === row && bet.numbers.N2 === col) {
            return cellScore = <div className="CellBtn-scoreWithUser" >
                                    <span> {bet.user.nickname} </span>
                                </div>
            
            
        } else {
            return cellScore = <div className="CellBtn-score">
                                    <span> {row + '-' + col} </span>
                                </div>
        }
    })


    for (let betPays of bets) {
        console.log(betPays)
    }


    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <Fragment>
            <div className="CellBtn" onClick={() => { setModalIsOpen(!modalIsOpen) }}>
                {cellScore}
            </div>
            <Modal
                isOpen={modalIsOpen}
                className="Modal"
                overlayClassName="Overlay"
            >
                <div className="Modal-header">
                    <h2>Comprar</h2>
                    <button className="CloseBtn" onClick={() => setModalIsOpen(!modalIsOpen)}>X</button>
                </div>
                <div className="Modal-body">
                    <span>
                        Usted va a comprar el  score <br /> <br /> {row + '-' + col}
                    </span>
                    <div className="Modal-btn">
                        <button onClick={handlerOnClick} className="ActionBtn-name" > comprar</button>
                    </div>
                </div>
            </Modal>
        </Fragment>

    )
}

export default CellBtn