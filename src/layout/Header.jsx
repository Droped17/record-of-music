import { Link } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import { useState } from "react";
import { useAuthen } from "../hooks/use-auth";
export default function Header() {
  const [dropDownStatus, setDropDownStatus] = useState(false);

  const handleDropdown = () => {
    setDropDownStatus(!dropDownStatus);
  };

  const { authStatus, logout } = useAuthen();
  // console.log(authStatus);

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

        <div className="font-semibold text-mdrounded-md w-80 p-1 relative">
          <div className="flex justify-between items-center">
            {" "}
            <div className="flex items-center flex-1 justify-around">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="user"
                className="w-10 border rounded-full"
              />
              <div className="px-2">{authStatus.firstName}</div>
              <div>
                {authStatus.isAdmin === "true" ? (
                  <Link to="/admin">
                    <button className="text-white p-2 bg-blue-400 rounded-md">
                      Dashboard
                    </button>
                  </Link>
                ) : undefined}
              </div>
              <div>
                <button
                  className="p-2 bg-red-400 rounded-md hover:bg-red-500 transition text-white"
                  onClick={logout}
                >
                  Log Out
                </button>
              </div>
              <div></div>
            </div>
            <div className="cursor-pointer " onClick={handleDropdown}>
              ICON
            </div>
          </div>
          {dropDownStatus ? <Dropdown></Dropdown> : <div></div>}
        </div>
      </header>
    </>
  );
}
