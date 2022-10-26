import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog";
import Courses from "../pages/Courses";
import ErrorPage from "../pages/ErrorPage";
import FAQ from "../pages/FAQ";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/home',
        element:<Home></Home>
      },
      {
        path: '/courses',
        element: <Courses></Courses>,
        loader: ()=>fetch('https://learning-bee-server.vercel.app/courses')
      },
      {
        path: '/FAQ',
        element:<FAQ></FAQ>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path: '/blog',
        element:<Blog></Blog>
      },
    ]
  }
])

export default router;