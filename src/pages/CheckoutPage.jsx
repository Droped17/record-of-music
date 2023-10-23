import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "../config/axios";
import { useCart } from "../hooks/use-cart";
import { useEffect } from "react";
import CartItem from "../components/CartItem";
import { useAuthen } from "../hooks/use-auth";

export default function CheckoutPage() {
  const { cartItem, subTotal } = useCart(); //value: obj
  const { authStatus } = useAuthen();
  const [inputdata, setInputData] = useState({
    province: "",
    district: "",
    subdistrict: "",
    zipcode: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const currentDate = new Date();

  // console.log(currentDate);
  console.log(cartItem);
  const handleOnChange = (e) => {
    setInputData({ ...inputdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("http://localhost:1112/address", {
        province: inputdata.province,
        district: inputdata.district,
        subdistrict: inputdata.subdistrict,
        zipcode: inputdata.zipcode,
        userId: authStatus.id,
      });
      setIsSubmit(true);
    } catch (error) {
      console.log(error);
    }
  };


  const handleCreateOrder = async () => {
    try {
      
      const res = await axios.post("http://localhost:1112/order", {
        userId: authStatus.id,
        amount: cartItem,
        date: currentDate,
        recId: cartItem,
        orderId: 1,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex p-5 ">
        <div className="flex-1  bg-gray-100  p-3 h-[70vh]">
          <div>Address</div>
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <p>province</p>
            <input
              type="text"
              className="p-3"
              name="province"
              onChange={handleOnChange}
            />
            <p>district</p>
            <input
              type="text"
              className="p-3"
              name="district"
              onChange={handleOnChange}
            />
            <p>sub district</p>
            <input
              type="text"
              className="p-3"
              name="subdistrict"
              onChange={handleOnChange}
            />
            <p>zipcode</p>
            <input
              type="text"
              className="p-3"
              name="zipcode"
              onChange={handleOnChange}
            />

            <button
              className={`${
                isSubmit
                  ? "bg-gray-300  text-white p-3"
                  : "bg-black text-white p-3"
              }`}
            >
              confirm address
            </button>
          </form>
        </div>
        <div className="flex-1 p-3">
          <div>Items:</div>
          {cartItem.map((item) => (
            <CartItem
              key={item.uuid}
              id={item.id}
              amount={item.amount}
            ></CartItem>
          ))}
          <div>Total: {subTotal}</div>

          <button
            className="p-3 text-white bg-black"
            onClick={handleCreateOrder}
          >
            check out
          </button>
        </div>
      </div>
    </>
  );
}
