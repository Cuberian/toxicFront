import Profile from "./components/Profile/Profile";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Main from "./components/Main/Main";
import Api from "./components/API page/Api";
import Toxicity from "./components/Toxicity/Toxicity";
import AnalysisRequestForm from "./components/AnalysisRequestForm/AnalysisRequestForm";

export const authRoutes = [
    {
        path: '/profile',
        Component: Profile
    },
    {
        path: '/main',
        Component: Main
    },
    {
        path: '/toxicity',
        Component: Toxicity
    },
    {
        path: '/api',
        Component: Api
    },
    {
        path: '/analysis/request',
        Component: AnalysisRequestForm
    }
];

export const publicRoutes = [

    {
        path: '/register',
        Component: Register
    },
    {
        path: '/login',
        Component: Login
    }
];
