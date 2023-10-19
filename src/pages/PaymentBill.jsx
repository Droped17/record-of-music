import { Link } from "react-router-dom";
export default function PaymentBill() {
  return (
    <>
      <div className="p-5 flex items-center flex-col gap-5">
        <div className="text-center font-semibold text-xl">Payment Bill</div>
        <div className="h-[70vh] w-[70vw] bg-gray-100 p-5">
          <div>FirstName</div>
          <div>lastName</div>
          <div>email</div>
          <div>mobile</div>
          <div>address</div>
          <div>status</div>
          <div>record_order_id</div>
          <div>date</div>

          <div>
            <div>alnumName</div>
            <div>alnumName</div>
            <div>alnumName</div>
          </div>

          <div>
            <div>total</div>
          </div>
        </div>

        <Link to="/">
            <button className="p-3 text-white bg-black">check out</button>
          </Link>
      </div>
    </>
  );
}
