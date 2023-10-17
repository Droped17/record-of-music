import { Navigate } from "react-router-dom";
import { useAuthen } from "../hooks/use-auth";

export default function RedirectAuthen({children}){
    const {authStatus} = useAuthen();
    if (authStatus) {
        return <Navigate to="/"/>
    }

    return children;
}