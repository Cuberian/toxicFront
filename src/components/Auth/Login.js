import React, {useContext, useRef, useState} from "react";
import { useHistory } from "react-router-dom";
import {login, registration} from "../../http/userAPI";
import {observer} from "mobx-react-lite";
import {useAuth} from "../../contexts/AuthContext";

const Login = observer((props) => {

    const { user } = useAuth()
    const history = useHistory();
    const [error, setError] = useState()

    const emailRef = useRef()
    const passwordRef = useRef()

    async function handlerSubmit(e) {
        e.preventDefault();
        try {
            setError('')
            const response = await login(emailRef.current.value, passwordRef.current.value)
            console.log(response)

            user.setUser(response.user)
            user.setIsAuth(true)
            history.push('/')
        } catch (e) {
            console.log(e)
            setError('Ошибка авторизации')
        }
    }

    return (
        <div className="flex justify-center items-center w-full">
            <div className="rounded-md p-5 lg:border flex flex-col justify-center 2xl:w-1/4 lg:w-1/3 w-full">
                <h3 className="text-center mt-2 text-3xl font-semibold">Вход</h3>
                <form className="mt-6" onSubmit={handlerSubmit}>
                    <div className="flex flex-col content-center">
                        <label className="font-semibold mb-2 text-lg">Почта</label>
                        <input className="input-text" id="email" type="text" ref={emailRef} required/>
                    </div>
                    <div className="flex flex-col content-center mt-3">
                        <label className="font-semibold mb-2 text-lg">Пароль</label>
                        <input className="input-text" id="password" type="password" ref={passwordRef} required/>
                    </div>
                    <div className="flex mt-4 mb-4">
                        { props.loading ? <p>LOADING...</p> :
                        <button className="btn-green" type="submit">
                            Войти
                        </button> }
                    </div>
                </form>
            </div>
        </div>
    )
})



export default Login