import { Link } from "react-router-dom";

export default function CheckoutPage() {
  return (
    <>
      <div className="flex p-5 ">
        <div className="flex-1  bg-gray-100  p-3 h-[70vh]">
          <div>Address</div>
          <form className="flex flex-col gap-2">
            <p>province</p>
            <input type="text" className="p-3" />
            <p>district</p>
            <input type="text" className="p-3" />
            <p>sub district</p>
            <input type="text" className="p-3" />
            <p>zipcode</p>
            <input type="text" className="p-3" />
          </form>
        </div>
        <div className="flex-1 p-3">
          <div>item</div>
          <div>item</div>
          <div>item</div>
          <div>item</div>

          <div>albumname</div>

          <div>total</div>

          <Link to="/payment">
            <button className="p-3 text-white bg-black">check out</button>
          </Link>
        </div>
      </div>
    </>
  );
}
