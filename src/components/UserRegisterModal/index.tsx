import React, { ReactElement } from 'react';
import { useForm } from "react-hook-form";
import Modal from 'react-modal';

interface IUserRegisterPageProps {
    isOpen: boolean
    onSubmit: (data: any) => void,
    onAfterOpen?: () => void | undefined,
    onRequestClose?: () => void
}

const customStyles = {
    content: {
        display: "flex",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay: { zIndex: 9999 }
}


interface IFormInput {
    name: string,
    nickname: string,
    email: string
}

const UserRegisterPage: React.FC<IUserRegisterPageProps> = (props): ReactElement => {
    const { handleSubmit, register, errors } = useForm<IFormInput>();

    return (<>
        <Modal
            ariaHideApp={false}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            isOpen={props.isOpen}
            onAfterOpen={props.onAfterOpen}
            onRequestClose={props.onRequestClose}
            style={customStyles}
            contentLabel="New User"
            overlayClassName="Overlay"
        >
            <form onSubmit={handleSubmit(props.onSubmit)} className="RegisterForm" >
                <div>
                    <h4>Datos de usuario</h4>
                </div>

                <label className="RegisterForm-label" >
                    Nombre
                </label>

                <input className="RegisterForm-input" 
                       ref={register({ required: true, maxLength: 100 })} 
                       maxLength={100} 
                       name="name" 
                />
                    {errors.name && (<div style={{ color: "red" }}>Debe ingresar un nombre</div>)}

                <label className="RegisterForm-label">
                    Nickname
                </label>

                <input className="RegisterForm-input" 
                       ref={register({ required: true, maxLength: 6 })} maxLength={6} 
                       name="nickname" 
                />
                    {errors.nickname && (<div style={{ color: "red" }}>Debe ingresar un nickname</div>)}

                <label className="RegisterForm-label">
                    Email
                </label>

                <input className="RegisterForm-input" 
                       ref={register({ required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} 
                       name="email" 
                />
                    {errors.email && (<div style={{ color: "red" }}>Debe ingresar un email válido</div>)}

                <button className="RegisterForm-submit" type="submit" >Registrar</button>
            </form>
        </Modal>
    </>)
}
export default UserRegisterPage