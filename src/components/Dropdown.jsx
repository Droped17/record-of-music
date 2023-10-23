import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useCart } from "../hooks/use-cart";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useEffect } from "react";

export default function Dropdown() {
  const { cartItem, subTotal } = useCart(); //value: obj
  const [subTotalArray, setSubTotalArray] = useState([]);

  // console.log(cartItem);

  useEffect(() => {
    if (subTotal != null && !isNaN(subTotal)) {
      setSubTotalArray((prev) => [subTotal]);
      // console.log(subTotal);

    }
  }, [subTotal]);
  
  const total = subTotalArray.reduce((acc, current) => acc + +current, 0);
  //use uuid becuse key issue(same keyid)
  cartItem.forEach((item) => {
    if (!item.uuid) {
      item.uuid = uuidv4();
    }
  });


  return (
    <>
      <div className="absolute bg-white max-h-[90vh] w-[600px] -mx-72 rounded-xl shadow-2xl border overflow-auto flex flex-col gap-1">
        {cartItem?.map((el) => (
          <CartItem key={el.uuid} id={el.id} amount={el.countItem}></CartItem>
        ))}

        <div className="text-center p-3">sub total : {total }</div>
        <div className="flex">
          <Link to="/">
            <button className="bg-gray-400 p-3 flex-1">SHOP MORE</button>
          </Link>
          <Link to="/checkout">
            <button className="bg-black p-3 text-white">CHECK OUT</button>
          </Link>
        </div>
      </div>
    </>
  );
}
