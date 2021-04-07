import "./styles/main.css"
import Groups from "./components/Groups";
import {Alert} from "./components/Alert";
import {connect} from "react-redux";

function App(props) {
    return (
        <div className="h-screen w-screen">
            <h3 className="text-pink-500 text-center h-1/10">HELLO FRIEND!</h3>
            <div className="flex flex-col flex-wrap space-y-6 content-center space-y-4 h-8/10">
                <Groups/>
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
