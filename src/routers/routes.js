import { CgProfile } from "react-icons/cg"; 
import { AiOutlineSetting } from "react-icons/ai"; 
import { ImEye } from "react-icons/im"; 
import Settings from "../pages/Settings"
import User from "../pages/User"
import MainDashboard from '../pages/MainDashboard';
import Login from "../pages/Login";


// brinchi obyektga qarab qoganlarini yaratib ket
const routes = [
    {
        key: 0,
        element: <MainDashboard />,
        path: "/",
        name: "Overview",
        icon: <ImEye />
    },
    {
        key: 1,
        element: <User />,
        path: "/profile",
        name: "Profile",
        icon: <CgProfile />
    },
    {
        key: 2,
        element: <Settings />,
        path: '/settings',
        name: "Settings",
        icon: <AiOutlineSetting />
    },
    {
        key: 3,
        element: <Login />,
        path: "/login",
        name: "Login",
        invisible: false
    }
]

export default routes