import "./styles/main.css"
import React, {useContext, useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {check} from "./http/userAPI";
import { observer} from "mobx-react-lite";
import AppRouter from "./components/AppRouter";
import { Context } from "./index";


const App = observer(() => {

    const {user} = useContext(Context)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            if (data && data.user) {
                user.setUser(data.user)
                user.setIsAuth(true)
            } else {
                user.setIsAuth(false)
            }
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    return (
        <>
        {!loading &&
            <BrowserRouter>
                <div className="min-h-screen w-full flex flex-col">
                    <Navbar/>
                        <div className="flex-grow flex">
                            <AppRouter/>
                        </div>
                    <Footer/>
                </div>
            </BrowserRouter>
        }
        </>
    );
});

export default App;
