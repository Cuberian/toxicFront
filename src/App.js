import "./styles/main.css"
import {Alert} from "./components/Alert";
import {connect} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Signup from "./components/Auth/Signup";
import PrivateRoute from "./components/PrivateRoute";
import Main from "./components/Main/Main";
import About from "./components/About/About";


const App = (props) => {

    return (
        <Router>
            <div className="h-screen w-screen">
                <h3 className="text-pink-500 text-center h-1/10">TOXIC API</h3>
                <div className="flex flex-col flex-wrap space-y-6 content-center space-y-4 h-9/10">
                    <Switch>
                        <Route path='/signup'>
                            <Signup/>
                        </Route>
                        <Route path='/about' component={About}/>
                        <PrivateRoute path='/main' component={Main} />
                    </Switch>
                </div>
                <div>
                    {props.alert && <Alert text={props.alert}/>}
                </div>
            </div>
        </Router>
    );
}

const mapStateToProps = state => ({
    alert: state.app.alert,
})


export default connect(mapStateToProps, null)(App);
