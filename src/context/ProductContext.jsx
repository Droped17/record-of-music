import axios from "../config/axios";
import { useState, useEffect, createContext } from "react";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [getProduct, setGetProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1112/authen/product", {
        id: "",
        albumName: "",
        price: "",
        recordInfo: "",
        image: "",
      })
      .then((res) => {
        setGetProduct(res.data.product);
        // console.log(getProduct);
      })
      .catch((e) => console.log(e));
  }, []);

  console.log(getProduct);

  return (
    <ProductContext.Provider value={{getProduct}}>
      {children}
    </ProductContext.Provider>
  );
}
