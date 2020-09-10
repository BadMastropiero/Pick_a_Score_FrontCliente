import React, { Fragment, ReactElement, useState } from 'react';
import {Link} from 'react-router-dom'
import { AppRoutes as Routes } from '../../types/enums/app-routes.enum'
import Modal from 'react-modal';

import ActionBtn from '../ActionBtn';

interface CellBtnProp {
    row:number,
    col:number
}

const CellBtn: React.FC<CellBtnProp> = ({row, col}): ReactElement => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <Fragment>
            <div className="CellBtn" onClick={()=>{setModalIsOpen(!modalIsOpen)}}/> 
                <Modal 
                    isOpen={modalIsOpen}
                    className="Modal"
                    overlayClassName="Overlay"
                > 
                    <div className="Modal-header">
                        <h2>Title here</h2>
                        <button className="CloseBtn" onClick={()=> setModalIsOpen(!modalIsOpen)}>X</button>
                    </div>
                    <div className="Modal-body">
                        <span>
                            Usted va a comprar el  score <br/> <br/> {row+'-'+col}
                        </span>
                        <div className="Modal-btn">
                            <ActionBtn>
                                <Link to={Routes.REGISTER} className="ActionBtn-name" > comprar</Link>
                            </ActionBtn>
                        </div>
                    </div>
                </Modal>            
        </Fragment>
        
    )
}

export default CellBtn