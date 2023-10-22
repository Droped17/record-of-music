import { createContext } from "react";
import { useProduct } from "../hooks/use-product";
import { useState } from "react";
import { useEffect } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const { getProduct } = useProduct();
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItem, setCartItem] = useState([]);
  const [subTotal, setSubTotal] = useState([]);
  const [value, setValue] = useState([
    {
      id: "",
    },
  ]);

  // id,countItem,price
  const updateContext = (data) => {
    setCartItem([...cartItem, data]);
  };

  const updateSubTotal = (newSubTotal) => {
    setSubTotal(newSubTotal);
  };

  useEffect(() => {
    value.splice(0, 1);
  }, []);

  const addToCart = (productId, count) => {
    // Check if the product already exists in the cart
    const existingItemIndex = cartItem.findIndex(
      (item) => item.id === productId
    );

    if (existingItemIndex !== -1) {
      // If the product already exists in the cart, update the countItem
      cartItem[existingItemIndex].countItem += count;
      setCartItem([...cartItem]);
    } else {
      // If the product is not in the cart, add a new item
      const newItem = { id: productId, countItem: count };
      setCartItem([...cartItem, newItem]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        getProduct,
        updateContext,
        value,
        setValue,
        updateSubTotal,
        addToCart,
        cartItem,
        subTotal,
        setSubTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
