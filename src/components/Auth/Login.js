import React, {useContext, useRef, useState} from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../http/userAPI";
import { observer } from "mobx-react-lite";
import {Context} from "../../index";
import {useForm} from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const Login = observer((props) => {

    const {
            register,
            formState: { errors },
            handleSubmit
        } = useForm({
        criteriaMode: "all"
    });

    const {user} = useContext(Context);
    const history = useHistory();
    const [error, setError] = useState();

    const emailRef = useRef();
    const passwordRef = useRef();

    async function loginHandler(data) {
        try {
            setError('');
            const response = await login(data.email, data.password);
            console.log(response);

            user.setUser(response.user);
            user.setIsAuth(true);
            history.push('/main')
        } catch (e) {
            console.log(e);
            setError('Ошибка авторизации!')
        }
    }

    return (
        <div className="flex justify-center items-center w-full">
            <div className="rounded-md p-5 lg:border flex flex-col justify-center 2xl:w-1/4 lg:w-1/3 w-full">
                <h3 className="text-center mt-2 text-3xl font-semibold">Вход</h3>
                <form className="mt-6" onSubmit={handleSubmit(loginHandler)}>
                    <div className="flex flex-col content-center">
                        <label className="font-semibold mb-2 text-lg">Почта</label>
                        <input className="input-text" type="text"
                            {...register("email", {required: "Это поле обязательно."})}/>
                        <ErrorMessage
                            errors={errors}
                            name="email"
                            render={({ messages }) => {
                                return messages
                                    ? Object.entries(messages).map(([type, message]) => (
                                        <p className="text-red-500" key={type}>{message}</p>
                                    ))
                                    : null;
                            }}
                        />
                    </div>
                    <div className="flex flex-col content-center mt-3">
                        <label className="font-semibold mb-2 text-lg">Пароль</label>
                        <input className="input-text" type="password"
                           {...register("password", {required: "Это поле обязательно."})}/>
                        <ErrorMessage
                            errors={errors}
                            name="password"
                            render={({ messages }) => {
                                return messages
                                    ? Object.entries(messages).map(([type, message]) => (
                                        <p className="text-red-500" key={type}>{message}</p>
                                    ))
                                    : null;
                            }}
                        />
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
});



export default Login