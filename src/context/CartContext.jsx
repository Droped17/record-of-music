import { createContext } from "react";
import { useProduct } from "../hooks/use-product";
import { useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const { getProduct } = useProduct();
  const [value, setValue] = useState([{
    id:""
  }]);

  const updateContext = (newValue) => {
    setValue([...value, ...newValue]);
  };

  // setCartValue({...value,newValue});
  // console.log(cartValue);

//   console.log(value);

  return (
    <CartContext.Provider value={{ getProduct, updateContext, value,setValue }}>
      {children}
    </CartContext.Provider>
  );
}
