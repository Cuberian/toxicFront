import Profile from "./components/Profile/Profile";
import Login from "./components/Auth/Login";
import Main from "./components/Main/Main";
import About from "./components/About/About";

export const authRoutes = [
    {
        path: '/profile',
        Component: Profile
    },
    {
        path: '/main',
        Component: Main
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