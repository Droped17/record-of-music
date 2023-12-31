import { createBrowserRouter, Navigate } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage.";
import Layout from "../layout/Layout";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import GenerePage from "../pages/GenerePage";
import RecommendPage from "../pages/RecommendPage";
import AboutRecordPage from "../pages/AboutRecordPage";
import Authenticated from "../auth/Authenticated";
import RedirectAuthen from "../auth/RedirectAuthen";
import CheckoutPage from "../pages/CheckoutPage";
import AdminDashboard from "../admin/AdminDashboard";
import AdminEdit from "../admin/AdminEdit";
import PaymentBill from "../pages/PaymentBill";
import AdminAuthen from "../auth/AdminAuthen";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Authenticated>
        <Layout></Layout>
      </Authenticated>
    ),

    children: [
      { path: "", element: <HomePage></HomePage> },
      { path: "/genere", element: <GenerePage></GenerePage> },
      { path: "/recommend", element: <RecommendPage></RecommendPage> },
      {
        path: "/aboutrecord/:id",
        element: <AboutRecordPage></AboutRecordPage>,
      },
      {
        path: "/admin",
        element: (
          <AdminAuthen>
            <AdminDashboard></AdminDashboard>
          </AdminAuthen>
        ),
      },
      {
        path: "/edit/:id",
        element: (
          <AdminAuthen>
            <AdminEdit></AdminEdit>
          </AdminAuthen>
        ),
      },

      { path: "/checkout", element: <CheckoutPage></CheckoutPage> },
      { path: "/payment", element: <PaymentBill></PaymentBill> },
    ],
  },
  {
    path: "/login",
    element: (
      <RedirectAuthen>
        {" "}
        <LoginPage></LoginPage>
      </RedirectAuthen>
    ),
  },
  {
    path: "/register",
    element: <RegisterPage></RegisterPage>,
  },
]);

export default function Route() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
