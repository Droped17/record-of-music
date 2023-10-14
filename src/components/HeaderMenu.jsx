import { Link } from "react-router-dom";
export default function HeaderMenu() {
  return (
    <>
      <div className="border-b flex justify-center gap-3 mb-4">
        <Link to="/genere">
          <div className="hover:bg-gray-300 transition p-2">genere</div>
        </Link>
        <Link to="/recommend">
          <div className="hover:bg-gray-300 transition p-2">recommend</div>
        </Link>
      </div>
    </>
  );
}
