import { createContext } from "react";
import { useProduct } from "../hooks/use-product";
import { useState } from "react";
import { useEffect } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const { getProduct } = useProduct();
  const [totalPrice, setTotalPrice] = useState(0);
  const [value, setValue] = useState([
    {
      id: "",
    },
  ]);

  const updateContext = (newValue) => {
    setValue([...value, ...newValue]);
  };

  const updateSubTotal = (price) => {
    setTotalPrice(price);
    console.log(totalPrice);
  };

  useEffect(() => {
    value.splice(0, 1);
  }, []);

  return (
    <CartContext.Provider
      value={{ getProduct, updateContext, value, setValue, updateSubTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}
