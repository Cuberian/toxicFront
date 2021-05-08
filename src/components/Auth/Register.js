import React, {useContext, useRef, useState} from "react";
import { useHistory } from "react-router-dom";
import { registration } from "../../http/userAPI";
import { observer } from "mobx-react-lite";
import {Context} from "../../index";
import {useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";


const Register = observer((props) => {

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
    const usernameRef = useRef();
    const passwordRef = useRef();

    // async function handleSubmit(e) {
    //     e.preventDefault();
    //     try {
    //         setError('');
    //         const response = await registration(emailRef.current.value, usernameRef.current.value, passwordRef.current.value);
    //         console.log(response);
    //
    //         user.setUser(response.user);
    //         user.setIsAuth(true);
    //         history.push('/main')
    //     } catch (e) {
    //         console.log(e);
    //         setError('Ошибка при регистрации!')
    //     }
    // }

    const onSubmit = (data) => console.log(data);

    return (
        <div className="flex justify-center items-center w-full">
            <div className="rounded-md p-5 lg:border flex flex-col justify-center 2xl:w-1/4 lg:w-1/3 w-full">
                <h3 className="text-center mt-2 text-3xl font-semibold">Регистрация</h3>
                <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col content-center">
                        <label className="font-semibold mb-2 text-lg">Почта</label>
                        <input className={`input-text ${errors.email ? 'border-red-500' : ''}`} type="text" {...register("email", {required: "Это поле обязательно.",
                            pattern: {
                                value: /(\w+@[a-zA-Z_]+?\.[a-zA-Z])/,
                                message: "Некорректный формат почты. Пример: user@gmail.com."
                            }
                        })}/>
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
                        <label className="font-semibold mb-2 text-lg">Имя</label>
                        <input className={`input-text ${errors.username ? 'border-red-500' : ''}`} type="text" {...register("username", {required: "Это поле обязательно.",
                            pattern: {
                                value: /^[а-я|a-z ,.'-]+$/i,
                                message: "Некорректный формат имени. Поле должно содержать только буквы. Пример: Анастасия"
                            },
                            minLength: {
                                value: 2,
                                message: "Длина имени должна быть больше 2 символов."
                            }
                        })}/>
                        <ErrorMessage
                            errors={errors}
                            name="username"
                            render={({ messages }) => {
                                return messages
                                    ? Object.entries(messages).map(([type, message]) => (
                                        <p className="text-red-500" key={type}>{message}</p>
                                    ))
                                    : null;
                            }}
                        />
                    </div>
                    <div className="flex flex-col content-center">
                        <label className="font-semibold mb-2 text-lg">Пароль</label>
                        <input className={`input-text ${errors.password ? 'border-red-500' : ''}`} type="password" {...register("password", {required: "Это поле обязательно.",
                            pattern: {
                                value: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]/g,
                                message: "Пароль должен содержать в себе @#$Aa-Zz."
                            },
                            minLength: {
                                value: 6,
                                message: "Длина пароля должна быть больше 6 символов."
                            }})}/>
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
                        {
                            <button className="btn-green" type="submit">
                                Зарегистрироваться
                            </button> }
                    </div>
                </form>
            </div>
        </div>
    )
});



export default Register