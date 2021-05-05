import Profile from "./components/Profile/Profile";
import Login from "./components/Auth/Login";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Api from "./components/API page/Api";
import Toxicity from "./components/Toxicity/Toxicity";

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
    }
]

export const publicRoutes = [
    {
        path: '/login',
        Component: Login
    },
    {
        path: '/about',
        Component: About
    }
]