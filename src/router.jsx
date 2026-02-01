import {
    createBrowserRouter,
    //   RouterProvider,
} from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home/Home";
import Register from "./pages/Shared/REgister";
import Signin from "./pages/Shared/Signin";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path:'register',
                Component: Register
            },
            {
                path:'signIn',
                Component: Signin
            }
        ]
    },
]);

export default router;