export default function CartItem() {
  return (
    <>
      <div className="bg-gray-200 p-2 flex gap-5 items-center justify-between">
        <div className="flex gap-5">
          <img
            className="h-20 w-20 object-cover"
            src="https://images.unsplash.com/photo-1616681255209-368a2cd3e643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
            alt="homepage"
          />
          <div className="flex flex-col justify-center">
            <div>album_name</div>
            <div>price: 99999</div>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="bg-gray-500 px-5 py-3 rounded-full text-white">
            -
          </button>
          <button className="bg-gray-500 px-5 py-3 rounded-full text-white">
            +
          </button>
        </div>
      </div>
    </>
  );
}
