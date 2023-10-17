import CartItem from "./CartItem";

export default function Dropdown() {
  return (
    <>
      <div className="absolute bg-white max-h-[90vh] w-[600px] -mx-72 rounded-xl shadow-2xl border overflow-auto flex flex-col gap-1">
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
        <div className="text-center p-3">sub total : 999999</div>
        <div className="flex">
          <button className="bg-gray-400 p-3 flex-1">SHOP MORE</button>
          <button className="bg-black p-3 flex-1 text-white">CHECK OUT</button>
        </div>
      </div>
    </>
  );
}
