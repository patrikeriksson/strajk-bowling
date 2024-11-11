import { createBrowserRouter } from "react-router-dom";
import Loading from "../pages/Loading";
import Booking from "../pages/Booking";
import Confirmation from "../pages/Confirmation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Loading />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
  {
    path: "/confirmation",
    element: <Confirmation />,
  },
]);

export default router;
