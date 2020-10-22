/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useReducer, Reducer, ChangeEvent } from 'react'
// import {minLengthValidation} from '../../API/form-validation'
import { signIn } from '../../API/users';
import { ACCESS_TOKEN, USER_DATA } from '../../constants';
import Swal from 'sweetalert2';
import ActionBtn from '../ActionBtn';

type State = { password: string }
type Action = { field: string, value: string }
const INITIAL_STATE = { password: '' }
function reducer(prevState: State, action: Action) {
  return {
    ...prevState,
    [action.field]: action.value
  }
}

export const HomeInput = () => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, INITIAL_STATE)
  /*const onChange = (event: ChangeEvent<HTMLFormElement>) => {
     dispatch({ field: event.target.name, value: event.target.value })
  }*/
  // const [formValid, setFormValid] = useState({
  //     password: false,
  // });

  const handlerOnClick = async () => {
    let pin: HTMLInputElement =  document.getElementById('password') as HTMLInputElement

    const result = await signIn({ password: pin?.value });

    //alert(JSON.stringify(result))
    // console.log("Result",result) 
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
    } else {
      const user = JSON.stringify(result.data)
      localStorage.setItem(ACCESS_TOKEN, user);
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 8000,
        timerProgressBar: true,
        onOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
          window.location.href = "/select";
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })
    }
  }



  return (
    <div className="animated-form">
      <div className="form-group">
        <form name="HomeInput" className='form' >
          {/* <label>Introduzca Pin</label> */}
          <input
            type="password"
            placeholder="PIN"
            id="password"
            className="password"
          />
          <div className="Banner-btn">
            <ActionBtn>
              <input
                type='submit'
                value='Iniciar sesión'
                onClick={(e) => { e.preventDefault(); handlerOnClick() }}
                className="btn-submit"
              />
            </ActionBtn>
          </div>
        </form>
      </div>
    </div>
  )
}
