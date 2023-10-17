import { useContext } from "react";
import { AuthenContext } from "../context/AuthenContext";

export function useAuthen(){
    return useContext(AuthenContext);
}