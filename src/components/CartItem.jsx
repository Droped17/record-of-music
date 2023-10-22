import { useEffect, useState } from "react";
import axios from "../config/axios";
import { useCart } from "../hooks/use-cart";
import { useProduct } from "../hooks/use-product";

export default function CartItem({ id, amount }) {
  const [productById, setProductById] = useState({});
  const [loading, setLoading] = useState();
  const { updateSubTotal, cartItem, updateContext } = useCart();

  // get product
  useEffect(() => {
    axios
      .get(`http://localhost:1112/product/${id}`)
      .then((res) => {
        setProductById(res.data.product);
        // updateSubTotal(res.data.product.price);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, [id, amount]);

  const subTotal = productById.price * (amount || 0);

  useEffect(() => {
    updateSubTotal(subTotal);
  }, [subTotal]);

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className="bg-gray-200 p-2 flex gap-5 items-center justify-between">
          <div className="flex gap-5">
            <img
              className="h-20 w-20 object-cover"
              src={productById.image}
              alt="homepage"
            />
            <div className="flex flex-col justify-center">
              <div>ALBUM NAME: {productById.albumName}</div>
              <div>{amount}</div>
              <div>PRICE: {productById.price}</div>
              <div>TOTAL PRICE: {subTotal}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
