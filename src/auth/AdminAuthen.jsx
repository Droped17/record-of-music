import { Navigate } from "react-router-dom";
import { useAuthen } from "../hooks/use-auth";

export default function AdminAuthen({ children }) {
  const { authStatus } = useAuthen();
  if (authStatus && authStatus.isAdmin == "false") {
    return <Navigate to="/" />;
  } 

  return children;
}
