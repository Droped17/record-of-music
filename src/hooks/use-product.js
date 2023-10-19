import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export function useProduct(){
    // console.log(useContext(ProductContext));
    return useContext(ProductContext);
}