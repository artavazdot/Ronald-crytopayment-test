import { Navigate, useRoutes } from "react-router-dom";
import OthersLayout from "../layouts/OthersLayout";
import ClientLayout from "../layouts/ClientLayout";
import HomePage from "../pages/client/HomePage";
import SignUpPage from "../pages/client/SignUpPage";
import { CLIENT_PAGES } from "./paths";
import CoinPaymentPage from "../pages/client/CoinPaymentPage";

export default function Router() {
    return useRoutes([
      // Others
      {
        path: "*",
        element: <OthersLayout/>,
        children: [
        //   { path: "500", element: <Page500 > },
        //   { path: "404", element: <NotFound/> },
        //   { path: "*", element: <Navigate to="/404" replace/> },
        ],
      },
      // Client
      {
        path: "/",
        element: <ClientLayout/>,
        children: [
          { element: <HomePage/>, index: true },
          { path: CLIENT_PAGES.signUp, element: <SignUpPage/> },
          { path: CLIENT_PAGES.coinpayment, element: <CoinPaymentPage/> },
        ],
      },
      // Redirection
      { path: "*", element: <Navigate to="/404" replace/> },
    ]);
  }