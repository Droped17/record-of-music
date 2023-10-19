import { useParams } from "react-router-dom";
import HeaderMenu from "../components/HeaderMenu";
import axios from "../config/axios";
import { useEffect } from "react";
import { useState } from "react";
import { useCart } from "../hooks/use-cart";

export default function AboutRecordPage() {
  const [productById, setProductById] = useState({});

  const { id } = useParams(); //id from route
  // console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:1112/product/${id}`)
      .then((res) => setProductById(res.data.product))
      .catch((e) => console.log(e));
  }, []);

  // console.log(productById);

  const [countItem, setCountItem] = useState(0);

  const handleAddCount = () => {
    setCountItem(countItem + 1);
  };

  const handleRemoveCount = () => {
    if (countItem > 0) {
      setCountItem(countItem - 1);
    }
  };

  const {updateContext} = useCart();


  const handleSumbit = () => {
    //creat object in array to send to CartContext
    const data = [{id,countItem}]
    updateContext(data);
  } 

  return (
    <>
      <HeaderMenu></HeaderMenu>
      <div className="h-[50vh] bg-gray-200 flex">
        <div className="flex-1 flex justify-center">
          <img
            className="h-full w-[50%] object-cover "
            src={productById.image}
            alt="homepage"
          />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-white shadow-md border h-[90%] w-[60%] p-5 flex flex-col justify-around">
            <div>{productById.albumName}</div>
            <div>{productById.price}</div>
            <div className="flex gap-5 items-center">
              <div>{countItem}</div>
              <button className="bg-gray-500 px-5 py-3 rounded-full text-white" onClick={handleRemoveCount}>
                -
              </button>
              <button
                className="bg-gray-500 px-5 py-3 rounded-full text-white"
                onClick={handleAddCount}
              >
                +
              </button>
            </div>

            <button className="bg-black text-white p-3 " onClick={handleSumbit}>Add to cart</button>
          </div>
        </div>
      </div>

      <div className="h-[300px] bg-red-400 flex p-5">
        <div className="flex-1">
          <div>About</div>
          <div>{productById.recordInfo}</div>
        </div>
        <div className="flex-1">
          <div>Track:</div>
          <div>track name</div>
          <div>track name</div>
          <div>track name</div>
          <div>track name</div>
          <div>track name</div>
        </div>
      </div>
    </>
  );
}
