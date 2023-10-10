import { createBrowserRouter } from "react-router-dom";
import { RouterProvider} from "react-router-dom";
import HomePage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage.";

const router = createBrowserRouter([
  { path: "/", element: <HomePage></HomePage> },
  { path: "/login", element: <LoginPage></LoginPage> },
  // children: [
  //   { path: "/", element: <HomePage></HomePage> },
  //   { path: "/login", element: <LoginPage></LoginPage>},
  // ],
]);

export default function Route() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
