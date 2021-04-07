import React, {useRef} from "react";
import {connect, useDispatch} from "react-redux";
import {login} from "../../redux/action";

const Signup = () => {

    const dispatch = useDispatch()

    const emailRef = useRef()
    const passwordRef = useRef()

    function handlerSubmit(e) {
        e.preventDefault();
        dispatch(login({'email': emailRef.current.value, 'password': passwordRef.current.value}))
    }

    return (
        <>
            <div className="rounded-md p-5 border-2 xl:w-1/4 lg:w-1/3 md:w-1/2 xs:w-3/4">
                <div>
                    <h3 className="text-center mt-2 text-3xl font-semibold">Sign Up</h3>
                    <form className="mt-6" onSubmit={handlerSubmit}>
                        <div className="flex flex-col content-center">
                            <label className="font-semibold mb-2 text-lg">Email</label>
                            <input className="input-text" id="email" type="text" ref={emailRef} required/>
                        </div>
                        <div className="flex flex-col content-center mt-3">
                            <label className="font-semibold mb-2 text-lg">Password</label>
                            <input className="input-text" id="password" type="text" ref={passwordRef} required/>
                        </div>
                        <div className="flex mt-4 mb-4">
                            <button className="btn-green" type="submit">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default connect(null, null)(Signup)