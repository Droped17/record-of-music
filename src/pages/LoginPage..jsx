import axios from "../config/axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthen } from "../hooks/use-auth";

export default function LoginPage() {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const {login} = useAuthen();

  const handleOnChangeLogin = (e) => {
    e.preventDefault();
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmitLogin = async (e) => {
    try {
      e.preventDefault();
      console.log(inputData);
      const res = await axios.post("http://localhost:1112/authen/login", {
        email: inputData.email,
        password: inputData.password,
      });
      
      login(inputData).catch((error)=>{
        alert(error.message);
      });

    } catch (error) {
      console.log(error);
    }
  };

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
        <form onSubmit={handleSubmitLogin} className="flex flex-col w-96 gap-5">
          <input
            name="email"
            type="email"
            className="border p-4"
            placeholder="email"
            onChange={handleOnChangeLogin}
            value={inputData.email}
          />
          <input
            name="password"
            type="password"
            className="border p-4"
            placeholder="password"
            onChange={handleOnChangeLogin}
            value={inputData.password}
          />
          <button className="bg-black text-white px-4 py-3 w-96">LOG IN</button>
          <Link to="/register">Register</Link>
        </form>
        <hr />
      </div>
    </div>
  );
}
