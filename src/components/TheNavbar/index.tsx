import React, { ReactElement, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthRoutes, NonAuthRoutes } from '../../types/enums/app-routes.enum';
import { registerUser } from '../../API/users';
import Swal from 'sweetalert2';
import {scrollToTop} from '../../utils';

import ActionBtn from '../ActionBtn';
import LOGO from '../../assets/logos/LOGO_V1.png';
import UserRegisterPage from '../UserRegisterModal'

const Navbar: React.FC = (props): ReactElement => {

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
        
        registerUser(data).then(userData => {
            if (userData.errors) {
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
                    title: 'Error al crear registro'
                  })
                return
            } else {
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
                  icon: 'success',
                  title: 'Registrado Correctamente'
                })
                closeModal()
            }
        }).catch(err => {
            // alert('Error al registrar')
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="Header">
            <UserRegisterPage {...modalProps} />
            <div className="Header-left">
                <div className="Header-logo">
                    <Link onClick={scrollToTop} to={NonAuthRoutes.HOME}>
                        <img className="Header-img" src={LOGO} alt="" />
                    </Link>
                </div>
                <i className="Logo-icon"></i>
                <ActionBtn>
                    <a href={AuthRoutes.SELECT} className="ActionBtn-name"> Acceso a las Quinielas</a>
                </ActionBtn>
            </div>
            <div className="Header-right">
                <i className="Notification-icon"></i>
                {/* <div className="Header-user">
                    <span>UserName</span>
                </div> */}
                <div className="Header-user">
                    <span onClick={openModal}>Registrarse</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar