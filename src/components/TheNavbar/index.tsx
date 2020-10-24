import React, { ReactElement, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthRoutes, NonAuthRoutes } from '../../types/enums/app-routes.enum';
import { registerUser, refreshUser } from '../../API/users';
import {logout} from '../../API/auth'
import Swal from 'sweetalert2';
import {scrollToTop, openInNewTab} from '../../utils';
import {ACCESS_TOKEN, ACCESS_INFO, USER_DATA, USER_INFO} from '../../constants/index';

// components
import ActionBtn from '../ActionBtn';
import UserRegisterPage from '../UserRegisterModal'

// images
import LOGO from '../../assets/logos/LOGO_V1.webp';

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
                localStorage.setItem("userData", JSON.stringify(userData))
                openInNewTab('/')
            }
            
        }).catch(err => {
            // alert('Error al registrar')
            console.log(err)
        })
    }

    const refreshHandler = () => {
        refreshUser().then(userData => {
            // alert(JSON.stringify(userData))
            // localStorage.setItem("userData", JSON.stringify(userData))
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


    const logoutHandler = () => {
        logout()
        window.location.href = '/';
    }
    let acces;

    if(localStorage.getItem(USER_DATA)){
        acces = <div className="Header-user">
                    <span className="UserName"> {USER_INFO.nickname} </span>
                    <span onClick={logoutHandler}> Salir </span>
                </div>
    } else if (localStorage.getItem(ACCESS_TOKEN)){
        acces = <div className="Header-user">
                    <span className="UserName"> {ACCESS_INFO.user.nickname} </span>
                    <span onClick={logoutHandler}> Salir </span>
                </div>

    }  else {
        acces = <span onClick={openModal}>Registrarse</span>
    }

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
               
            </div>
            <div className="Header-center">
                <ActionBtn>
                    <a onClick={refreshHandler} href={AuthRoutes.SELECT} className="ActionBtn-name"> Quinielas</a>
                </ActionBtn>
                <ActionBtn>
                    <Link onClick={scrollToTop} to={NonAuthRoutes.INFO} className="ActionBtn-name">
                        Reglas
                    </Link>
                </ActionBtn>
            </div>
            <div className="Header-right">
                <i className="Notification-icon"></i>
                <div className="Header-user">
                    {acces}
                </div>
            </div>
        </div>
    )
}

export default Navbar