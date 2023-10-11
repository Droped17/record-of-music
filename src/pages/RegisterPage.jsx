export default function RegisterPage() {

  return (
    <div className="flex h-screen items-center">
      {/* <div className="w-3/5 -mx-80 animate-spin-slow">
        <img src="https://images.unsplash.com/photo-1620831450720-de4a2a539e61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80" alt="" />
      </div> */}

      <div className="flex-1">
        <div className="text-xl font-bold flex justify-center">
          Create Account
        </div>
        <form action="" className="flex flex-col w-5/12 mx-auto gap-8">
          <input type="text" className="border p-3" placeholder="firstname" />
          <input type="text" className="border p-3" placeholder="lastname" />
          <input type="email" className="border p-3" placeholder="email" />
          <input
            type="password"
            className="border p-3"
            placeholder="password"
          />
          <input
            type="password"
            className="border p-3"
            placeholder="confirm password"
          />

          <input type="text" className="border p-3" placeholder="phone" />
          <button className="bg-black text-white px-4 py-3">Register</button>
        </form>
      </div>
    </div>
  );
}
