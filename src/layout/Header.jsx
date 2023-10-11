import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header className="bg-white border shadow-md p-2 flex justify-between sticky top-0">
        <img
          src="https://images.unsplash.com/photo-1602848597941-0d3d3a2c1241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
          alt=""
          className="w-20 top-0 absolute animate-spin-normal rounded-full"
        />
        <Link to="/" className="flex items-center">
          <div className="font-bold text-xl cursor-pointer mx-24">
            Record Of Music
          </div>
        </Link>

        <div className="font-semibold text-md hover:bg-green-300 rounded-md cursor-pointer w-80">
          <div className="flex items-center">
            {" "}
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="user"
                className="w-10 border rounded-full"
              />
            </div>
            <div className="px-2">username</div>
          </div>
            <div></div>
        </div>
      </header>
    </>
  );
}
