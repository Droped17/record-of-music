
export default function RegisterPage() {

  const handleInput = (e) => {
    console.log(e.target.value);
  }

  return (
    <div className="flex h-screen items-center">
      <div className="flex-1">
        <div className="text-xl font-bold flex justify-center">
          Create Account
        </div>
        <form action="" className="flex flex-col w-5/12 mx-auto gap-8">
          <input type="text" className="border p-3" placeholder="firstname" onChange={handleInput}/>
          <input type="text" className="border p-3" placeholder="lastname" onChange={handleInput}/>
          <input type="email" className="border p-3" placeholder="email" onChange={handleInput}/>
          <input
            type="password"
            className="border p-3"
            placeholder="password"
            onChange={handleInput}
          />
          <input
            type="password"
            className="border p-3"
            placeholder="confirm password"
            onChange={handleInput}
          />

          <input type="text" className="border p-3" placeholder="phone" onChange={handleInput}/>
          <button className="bg-black text-white px-4 py-3">Register</button>
        </form>
      </div>
    </div>
  );
}
