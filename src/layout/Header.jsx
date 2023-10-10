import {Link} from "react-router-dom";
export default function Header() {
  return (
    <>
      <header className="bg-white border shadow-md p-4 flex justify-between">
        <Link to="/">
          <div className="font-bold text-lg cursor-pointer">Record Of Music</div>
        </Link>
        <div className="border">
          <input type="text" />
        </div>
        <div className="flex font-semibold text-md">
          <div>username</div>
          <div>Icon</div>
        </div>
      </header>
    </>
  );
}
