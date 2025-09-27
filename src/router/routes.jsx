import { createBrowserRouter } from "react-router";
import Home from "../Layout/Home";
import CrackersList from "../Components/CrackersList";
import CrakersCategory from "../Components/CrakersCategory";
import CartPage from "../Components/CartPage";
import OrderForm from "../Components/OrderForm";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <CrakersCategory />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/order",
        element: (
          <OrderForm
            webhookUrl={
              "https://adhithya200503.app.n8n.cloud/webhook/89a10712-92d3-454e-8056-366bd18a5e2b"
            }
          />
        ),
      },
      {
        path: "/:crackersCategory",
        element: <CrackersList />,
      },
    ],
  },
]);

export default routes;
