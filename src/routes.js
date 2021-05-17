import Profile from "./components/Profile/Profile";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Api from "./components/API page/Api";
import Toxicity from "./components/Toxicity/Toxicity";
import AnalysisRequestForm from "./components/AnalysisRequestForm/AnalysisRequestForm";
import AnalysisRequestPage from "./components/AnalysisRequestForm/AnalysisRequestPage";
import UserVkPage from "./components/ObjectsPages/UserVKPage";
import GroupPage from "./components/ObjectsPages/GroupPage";
import PostPage from "./components/ObjectsPages/PostPage";

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
    },
    {
        path: '/analysis/request/:id',
        Component: AnalysisRequestPage
    },
    {
        path: '/objects/user/:id',
        Component: UserVkPage
    },
    {
        path: '/objects/group/:id',
        Component: GroupPage
    },
    {
        path: '/objects/post/:id',
        Component: PostPage
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
    },
    {
        path: '/about',
        Component: About
    }
];