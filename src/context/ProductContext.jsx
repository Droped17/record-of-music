import { useRef } from "react";
import axios from "../config/axios";
import { useState, useEffect, createContext } from "react";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [getProduct, setGetProduct] = useState([]);

  const inputEl = useRef(null);
  const [file,setFile] = useState(null);



  useEffect(() => {
    axios
      .get("http://localhost:1112/product", {
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


  // console.log(getProduct);

  return (
    <ProductContext.Provider value={{getProduct,inputEl,setFile,file}}>
      {children}
    </ProductContext.Provider>
  );
}
