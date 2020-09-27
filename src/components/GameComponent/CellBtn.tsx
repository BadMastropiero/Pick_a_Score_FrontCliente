import React, { Fragment, ReactElement, useState } from 'react';
// import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
// import { AuthRoutes } from '../../types/enums/app-routes.enum';
import Modal from 'react-modal';
// import { scrollToTop } from '../../utils';
import {checkOut} from '../../API/users';

// import ActionBtn from '../ActionBtn';

interface CellBtnProp {
    row: number,
    col: number
}

const handlerOnClick = async() => {
    const result = await checkOut()
    // alert(result)
    console.log(result)
    if (result.code !== 200) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 8000,
            timerProgressBar: true,
            onOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        Toast.fire({
            icon: 'error',
            title: result.Error.message
        })
    }
}

const CellBtn: React.FC<CellBtnProp> = ({ row, col }): ReactElement => {
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
                    <div className="Modal-btn">
                        
                            <button onClick={handlerOnClick} className="ActionBtn-name" > comprar</button>
                            
                        
                    </div>
                </div>
            </Modal>
        </Fragment>

    )
}

export default CellBtn