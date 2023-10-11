import {Link} from "react-router-dom";
export default function Header() {
  return (
    <>
      <header className="bg-white border shadow-md p-4 flex justify-between sticky">
        <img src="https://images.unsplash.com/photo-1602848597941-0d3d3a2c1241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80" alt="" 
        className="w-20 top-1 absolute animate-spin-normal rounded-full"/>
        <Link to="/">
          <div className="font-bold text-lg cursor-pointer mx-24">Record Of Music</div>
        </Link>

        <div className="flex font-semibold text-md">
          <div>username</div>
          <div>Icon</div>
        </div>
      </header>
    </>
  );
}
