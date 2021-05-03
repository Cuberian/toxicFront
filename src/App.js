import "./styles/main.css"
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./components/Auth/Login";
import PrivateRoute from "./components/PrivateRoute";
import Main from "./components/Main/Main";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthProvider from "./contexts/AuthContext";


const App = (props) => {
    return (
        <AuthProvider>
            <Router>
                <div className="min-h-screen w-full flex flex-col">
                    <Navbar/>
                    <div className="flex  flex-grow">
                        <Switch>
                            <Route path='/login' component={Login}/>
                            <Route path='/about' component={About}/>
                            <PrivateRoute path='/' component={Main} />
                        </Switch>
                    </div>
                    <Footer/>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
