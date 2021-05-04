import React, {createContext} from 'react';
import {render} from 'react-dom';
import "tailwindcss/tailwind.css"
import App from './App';

import UserStore from "./store/UserStore";

export const Context = createContext(null)

const app = (
    <Context.Provider value={{
        user: new UserStore()
    }}>
        <App/>
    </Context.Provider>
    )
render(app, document.getElementById('root'));

