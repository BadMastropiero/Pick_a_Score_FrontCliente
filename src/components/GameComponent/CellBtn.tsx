import React, { Fragment, ReactElement, useState } from 'react';
import Modal from 'react-modal';
import {checkOut} from '../../API/users';

interface CellBtnProp {
    row: number,
    col: number
    userID: string
    gameID: string
}

const CellBtn: React.FC<CellBtnProp> = ({ row, col, userID, gameID }): ReactElement => {
    const handlerOnClick = async() => {
        const result = await checkOut(row, col, userID, gameID)
        // alert(result)
        console.log(result)
    }

    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <Fragment>
            <div className="CellBtn" onClick={() => { setModalIsOpen(!modalIsOpen) }}>
                <div className="CellBtn-score">
                    <span>{row + '-' + col}</span>
                </div>
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
                    <span>{userID}</span>
                    
                    <span>{gameID}</span>
                    <div className="Modal-btn">
                        <button onClick={handlerOnClick} className="ActionBtn-name" > comprar</button>
                    </div>
                </div>
            </Modal>
        </Fragment>

    )
}

export default CellBtn