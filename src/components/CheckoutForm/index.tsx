import React, { Fragment, useState } from 'react'
import Swal from 'sweetalert2';
import Modal from 'react-modal';
import ActionBtn from '../ActionBtn'

import {checkOut} from '../../API/users';

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
            title: result.message
        })
    }
}

export const CheckoutForm = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <Fragment>
            <div className="CheckoutForm-container">
                <form className="CheckoutForm-form">
                    <fieldset>
                        <h2>Complete los campos</h2>
                        <div>
                            <label htmlFor="Firstname">Nombre</label>
                            <input 
                                type="text" name="Firstname"
                                placeholder="Su nombre"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="Lastname">Apellido</label>
                            <input
                                type="text" name="Lastname"
                                placeholder="Apellido"
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="Nickname">Nickname</label>
                            <input
                                type="text" name="Nickname"
                                placeholder="Su nickname"
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email" name="email"
                                placeholder="ejemplo@email.com"
                                required 
                            />
                        </div>
                        <div className="CheckoutForm-btn">
                            <ActionBtn> 
                            <input
                                type='submit'
                                value='Comprar'
                                onClick={(e)=>{e.preventDefault(); handlerOnClick()}}
                                className='signin-submit'
                                />
                            </ActionBtn>
                        </div>
                    </fieldset>
                </form>
            </div>
            <Modal
                isOpen={modalIsOpen}
                className="Modal"
                overlayClassName="Overlay"
            > 
                <button className="CloseBtn" onClick={()=> setModalIsOpen(!modalIsOpen)}>X</button>
            </Modal>
        </Fragment>
    )
}
