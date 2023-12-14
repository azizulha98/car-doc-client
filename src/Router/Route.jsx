import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPages from "../components/Error/ErrorPages";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/Home/About/About";
import Services from "../Pages/Home/Services/Services";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Checkout from "../Pages/Checkout/Checkout";
import Booking from "../Pages/Booking/Booking";
import PrivateRoute from "./PrivateRoute";

const createRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    errorElement: <ErrorPages />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      {
        path: '/checkout/:id',
        element: <PrivateRoute><Checkout /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
      },
      { path: 'booking', element: <PrivateRoute><Booking /> </PrivateRoute> },

      { path: '/about', element: <About /> },
      { path: '/services', element: <Services /> },

    ]
  }
])

export default createRouter;