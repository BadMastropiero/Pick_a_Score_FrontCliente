import React, { useReducer, Reducer, ChangeEvent } from 'react'
// import {minLengthValidation} from '../../API/form-validation'
import {signIn} from '../../API/users';
import {ACCESS_TOKEN} from '../../constants';
import Swal from 'sweetalert2';
import ActionBtn from '../ActionBtn';

type State = { password: string }
type Action = { field: string, value: string }
const INITIAL_STATE = { password: '' }
function reducer (prevState: State, action: Action) {
  return {
    ...prevState,
    [action.field]: action.value
  }
}

export const HomeInput = () => {
    const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, INITIAL_STATE)
    const onChange = (event: ChangeEvent<HTMLFormElement>) => {
       dispatch({ field: event.target.name, value: event.target.value })
    }
    // const [formValid, setFormValid] = useState({
    //     password: false,
    // });
 
    const handlerOnClick = async() => {
        //let pin:HTMLElement 
        //pin = document.getElementById('password')
        const result = await signIn(state);     
        //alert(JSON.stringify(result))
        // console.log("Result",result) 
        if(result.code!== 200){
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
        }else{
           const {token} = result.data;
           localStorage.setItem(ACCESS_TOKEN,token);
           //localStorage.setItem(REFRESH_TOKEN,refreshToken);
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
     
     const inputValidation = (e: ChangeEvent<HTMLInputElement>) => {
        const { type, value } = e.target
        if (type === "password") {
            dispatch({field:"password",value:value})
            /*setFormValid({
//                ...formValid,
                [name]: minLengthValidation(e.target, 6)
            })*/
        }
    };

    return (
        <div className="animated-form">
            <div className="form-group">
                <form className='form'  onChange={onChange}>                
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Your Password"
                        id="password"
                        className="password"
                        onChange={inputValidation}
                    />
                    <div className="Banner-btn">
                        <ActionBtn>
                            <input
                            type='submit'
                            value='Iniciar sesion'
                            onClick={(e)=>{e.preventDefault(); handlerOnClick()}}
                            className='signin-submit'
                            />
                        </ActionBtn>
                    </div>
                </form>
            </div>
        </div>
    )
}
