import React, { ReactElement, useRef } from 'react'
import { useForm } from "react-hook-form"
import Modal from 'react-modal'

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

const labelStyle = {
    marginTop: "10px"
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
        >
            <form onSubmit={handleSubmit(props.onSubmit)} style={{ display: "flex", flexFlow: "column" }}>
                <div style={{ textAlign: "center" }}>
                    <h4>Datos de usuario</h4>
                </div>
                <label style={labelStyle} >Nombre</label>
                <input ref={register({ required: true, maxLength: 100 })} maxLength={100} name="name" />
                {errors.name && (<div style={{ color: "red" }}>Debe ingresar un nombre</div>)}

                <label style={labelStyle} >Nickname</label>
                <input ref={register({ required: true, maxLength: 6 })} maxLength={6} name="nickname" />
                {errors.nickname && (<div style={{ color: "red" }}>Debe ingresar un nickname</div>)}

                <label style={labelStyle} >Email</label>
                <input ref={register({ required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} name="email" />
                {errors.email && (<div style={{ color: "red" }}>Debe ingresar un email valido</div>)}

                <button type="submit" >Registrar</button>
            </form>
        </Modal>
    </>)
}
export default UserRegisterPage