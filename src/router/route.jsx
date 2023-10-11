import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import HomePage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage.";
import Layout from "../layout/Layout";
import RegisterPage from "../pages/RegisterPage";
import GenerePage from "../pages/GenerePage";
import AlbumsPage from "../pages/AlbumsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: "", element: <HomePage></HomePage> },
      { path: "/genere", element: <GenerePage></GenerePage> },
      { path: "/albums", element: <AlbumsPage></AlbumsPage> },
      
      
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
