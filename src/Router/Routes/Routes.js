import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout";
import Donations from "../../Pages/Donations/Donations";
import Gallery from "../../Pages/Gallery/Gallery";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
// import Volunteer from "../../Pages/Volunteer/Volunteer";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      // {
      //   path: "/volunteer",
      //   element: <Volunteer></Volunteer>,
      // },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },

      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://sdp-2-server.vercel.app/services/${params.id}`),
      },
      {
        path: "/donations",
        element: (
          <PrivateRoute>
            <Donations></Donations>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
