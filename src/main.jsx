import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import routes from "./router/routes.jsx";
import Home from "./Layout/Home.jsx";
import { CartProvider } from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={routes}>
        <Home />
      </RouterProvider>
    </CartProvider>
  </StrictMode>
);
