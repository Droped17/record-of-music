import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import HomePage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage.";
import Layout from "../layout/Layout";
import RegisterPage from "../pages/RegisterPage";
import GenerePage from "../pages/GenerePage";
import RecommendPage from "../pages/RecommendPage";
import AboutRecordPage from "../pages/AboutRecordPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: "", element: <HomePage></HomePage> },
      { path: "/genere", element: <GenerePage></GenerePage> },
      { path: "/recommend", element: <RecommendPage></RecommendPage> },
      {path: "/aboutrecord", element: <AboutRecordPage></AboutRecordPage>},
      
      
    ],
  },
  { path: "/login", element: <LoginPage></LoginPage> },
  { path: "/register", element: <RegisterPage></RegisterPage> },
]);

export default function Route() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
