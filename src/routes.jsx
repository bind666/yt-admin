import { createBrowserRouter } from "react-router-dom";
import Root from "./Layouts/Root";
import Dashboard from "./Layouts/Dashboard";
import Users from "./Users/Users";
import NonAuth from "./Layouts/NonAuth";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";

const router = createBrowserRouter([
    {
        path: "",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
                children: [
                    {
                        path: "users",
                        element: <Users />,
                    },
                ],
            },

            {
                path: "/auth",
                element: <NonAuth />,
                children: [
                    {
                        path: "/auth/signup",
                        element: <SignUp />
                    },
                    {
                        path: "/auth/login",
                        element: <Login />
                    },
                ],
            },
        ],
    },
]);

export default router