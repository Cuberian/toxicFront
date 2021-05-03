import "./styles/main.css"
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./components/Auth/Login";
import PrivateRoute from "./components/PrivateRoute";
import Main from "./components/Main/Main";
import Profile from "./components/Profile/Profile";
import Api from "./components/API page/Api";
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
                            <Route exact path='/login' component={Login}/>
                            <Route exact path='/about' component={About}/>
                            <PrivateRoute exact path='/' component={Main}/>
                            <PrivateRoute exact path='/profile' component={Profile}/>
                            <PrivateRoute exact path='/api' component={Api}/>
                        </Switch>
                    </div>
                    <Footer/>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
