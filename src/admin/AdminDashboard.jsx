import { useState } from "react";
import { useProduct } from "../hooks/use-product";

export default function AdminDashboard() {
  const [isOpenform, setIsOpenform] = useState(false);
  
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpenform(!isOpenform);
  };

  const { getProduct } = useProduct();
  console.log(getProduct);

  return (
    <>
      <div className="h-full p-5 flex flex-col gap-3">
        <div className="text-center">Admin</div>
        <div className="text-center">
          <button className="p-3  bg-blue-500 text-white rounded-full">
            Add Product
          </button>
          {/* modal */}
          <div className="bg-gray-200  p-8 mt-3">
            <form
              className="flex flex-col gap-2 w-[50vw] mx-auto"
              onSubmit={handleClick}
            >
              <p className="text-start font-semibold text-xl">album name</p>
              <input className="h-10 p-3" type="text" name="" id="" />
              <p className="text-start font-semibold text-xl">genre</p>
              <input className="h-10 p-3" type="text" name="" id="" />
              <p className="text-start font-semibold text-xl">price</p>
              <input className="h-10 p-3" type="text" name="" id="" />
              <p className="text-start font-semibold text-xl">artist</p>
              <input className="h-10 p-3" type="text" name="" id="" />
              <p className="text-start font-semibold text-xl">record info</p>
              <input className="h-10 p-3" type="text" name="" id="" />
              <p className="text-start font-semibold text-xl">score</p>
              <input className="h-10 p-3" type="text" name="" id="" />
              <button className="p-3  bg-blue-500 text-white ">Add</button>
            </form>
          </div>

          {/* All Product */}
          <div className="bg-green-400">
            <div>
              {getProduct.map((el) => (
                <div key={el.id} className="flex justify-around">
                  <div>{el.albumName}</div>
                  <button className="bg-yellow-500 w-[80px] p-2">Edit</button>
                  <button className="bg-red-500 w-[80px] p-2">Delete</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
