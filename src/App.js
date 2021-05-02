import "./styles/main.css"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Signup from "./components/Auth/Signup";
import PrivateRoute from "./components/PrivateRoute";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Navbar from "./components/Navbar";


const App = (props) => {

    return (
        <Router>
            <div className="min-h-screen w-full flex flex-col">
                <Navbar/>
                <div className="flex  flex-grow">
                    <Switch>
                        <Route path='/signup' component={Signup}/>
                        <Route path='/about' component={About}/>
                        <PrivateRoute path='/main' component={Main} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}




export default App;
