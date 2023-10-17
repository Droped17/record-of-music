import { Link } from "react-router-dom";

export default function LoginPage() {

  


  return (
    // animate-spin-slow
    <div className="flex ">
      <div className="h-screen flex-1 flex items-center justify-center">
        <img
          className="rounded-full flex-1"
          src="https://images.unsplash.com/photo-1620831450720-de4a2a539e61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
          alt=""
        />
      </div>
      <div className="w-80 flex flex-1 justify-center items-center flex-col gap-6">
          <h1 className="text-lg font-bold ">RECORD OF MUSIC</h1>
          <form action="" className="flex flex-col w-96 gap-5">
            <input type="email" className="border p-4" placeholder="emial"/>
            <input type="password" className="border p-4" placeholder="password"/>
            <button className="bg-black text-white px-4 py-3 w-96">LOG IN</button>  
            <Link to="/register">Register</Link>
          </form>
          <hr />
      </div>
    </div>
  );
}
