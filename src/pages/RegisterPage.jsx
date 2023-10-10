export default function RegisterPage() {
  return (
    <div>
      <div className="text-xl font-bold">Record Of Music</div>
      <form action="" className="flex flex-col w-5/12 mx-auto gap-2">
        <input type="text" className="border p-3" placeholder="username" />
        <input type="password" className="border p-3" placeholder="password" />
        <input
          type="password"
          className="border p-3"
          placeholder="confirm password"
        />
        <input type="email" className="border p-3" placeholder="email" />
        <input type="text" className="border p-3" placeholder="phone" />
        <textarea type="text" className="border p-3" placeholder="addres" />
        <button className="bg-black text-white px-4 py-3">Register</button>
      </form>
      <hr className="border-gray-300 my-5"></hr>


    </div>
  );
}
