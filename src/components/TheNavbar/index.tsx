import React, { ReactElement, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthRoutes, NonAuthRoutes } from '../../types/enums/app-routes.enum';
import { registerUser } from '../../API/users'

import ActionBtn from '../ActionBtn';
import LOGO from '../../assets/logos/LOGO_V1.png';
import UserRegisterPage from '../UserRegisterPage'

const Navbar: React.FC = (): ReactElement => {

    const modalPropsDefault = {
        isOpen: false,
        onSubmit: (data: any) => { alert(data) },
        //onAfterOpen?: () => void,
        onRequestClose: () => {
            let oldValues = modalProps
            oldValues.isOpen = false
            let newValues = { ...oldValues }
            setModalProps(newValues)
        }
    }
    const [modalProps, setModalProps] = useState(modalPropsDefault)

    const submitHandler = (data: any) => {
        console.log(data)
        registerUser(data).then( userData=> {
            console.log(userData)
            closeModal()
        }).catch(err => {
            alert('Error al registrar')
            console.log(err)
        })
    }

    const openModal = () => {
        let oldValues = modalProps
        oldValues.isOpen = true
        let newValues = { ...oldValues }
        setModalProps(newValues)
    }

    const closeModal = () => {
        let oldValues = modalProps
        oldValues.isOpen = false
        let newValues = { ...oldValues }
        setModalProps(newValues)
    }

    useEffect(() => {
        let oldValues = modalProps
        oldValues.onSubmit = submitHandler
        let newValues = { ...oldValues }
        setModalProps(newValues)
    }, [])
    
    return (
        <div className="Header">
            <UserRegisterPage {...modalProps} />
            <div className="Header-left">
                <div className="Header-logo">
                    <Link to={NonAuthRoutes.HOME}>
                        <img className="Header-img" src={LOGO} alt="" />
                    </Link>
                </div>
                <i className="Logo-icon"></i>
                <ActionBtn>
                    <Link className="ActionBtn-name" to={AuthRoutes.SELECT}> Select a Game</Link>
                </ActionBtn>
            </div>
            <div className="Header-right">
                <i className="Notification-icon"></i>
                <div className="Header-user">
                    <span>UserName</span>
                </div>
                <div className="Header-user">
                    <span onClick={openModal}>Register</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar