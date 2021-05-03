import "./styles/main.css"
import {Alert} from "./components/Alert";
import {connect} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Signup from "./components/Auth/Signup";
import PrivateRoute from "./components/PrivateRoute";
import Main from "./components/Main/Main";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = (props) => {

    return (
        <Router>
            <div className="flex flex-col min h-screen w-screen">
                <Navbar/>
                <div className="flex flex-col flex-grow flex-wrap space-y-6 content-center space-y-4 h-9/10">
                    <Switch>
                        <Route path='/signup' component={Signup}/>
                        <Route path='/about' component={About}/>
                        <PrivateRoute path='/main' component={Main}/>
                        <PrivateRoute path='/profile' component={Profile}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </Router>
    );
};

const mapStateToProps = state => ({
    alert: state.app.alert,
})


export default connect(mapStateToProps, null)(App);
