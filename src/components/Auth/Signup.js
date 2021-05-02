import React, {useRef, useState} from "react";
import { useHistory } from "react-router-dom";

import { useAuth } from '../../contexts/AuthContext'

const Signup = (props) => {

    const history = useHistory();
    const [error, setError] = useState()

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()

    function handlerSubmit(e) {
        e.preventDefault();

        try {
            setError('')
            login(emailRef.current.value, passwordRef.current.value)
        } catch(e) {
            setError('Ошибка авторизации')
        }
    }

    return (
        <>
            {props.user_token ?  history.push('/main') :
                <div className="flex justify-center w-full mt-16">
                    <div className="rounded-md p-5 lg:border flex flex-col justify-center 2xl:w-1/4 lg:w-1/3 w-full h-1/3">
                        <h3 className="text-center mt-2 text-3xl font-semibold">Регистрация</h3>
                        <form className="mt-6" onSubmit={handlerSubmit}>
                            <div className="flex flex-col content-center">
                                <label className="font-semibold mb-2 text-lg">Почта</label>
                                <input className="input-text" id="email" type="text" ref={emailRef} required/>
                            </div>
                            <div className="flex flex-col content-center mt-3">
                                <label className="font-semibold mb-2 text-lg">Пароль</label>
                                <input className="input-text" id="password" type="text" ref={passwordRef} required/>
                            </div>
                            <div className="flex mt-4 mb-4">
                                { props.loading ? <p>LOADING...</p> :
                                <button className="btn-green" type="submit">
                                    Зарегистрироваться
                                </button> }
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}



export default Signup