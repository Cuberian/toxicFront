import "./styles/main.css"
import {Alert} from "./components/Alert";
import {connect, useDispatch} from "react-redux";
import Signup from "./components/Auth/Signup";
import {useEffect} from "react";
import {setTokenFromLS} from "./redux/action";

const App = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token) {
            dispatch(setTokenFromLS(token))
        }
    }, [dispatch, props])

    return (
        <div className="h-screen w-screen">
            <h3 className="text-pink-500 text-center h-1/10">TOXIC API</h3>
            <div className="flex flex-col flex-wrap space-y-6 content-center space-y-4 h-9/10">
                <Signup/>
            </div>
            <div>
                {props.alert && <Alert text={props.alert}/>}
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    alert: state.app.alert
})


export default connect(mapStateToProps, null)(App);
