import { Link } from "react-router-dom";
import { useProduct } from "../hooks/use-product";

export default function RecordCardItem({
  albumName,
  recordInfo,
  price,
  image,
  id
}) {

  return (
    <>
      <Link to={`/aboutrecord/${id}`}>
        <div className="flex items-center justify-center hover:shadow-2xl cursor-pointer transition rounded-2xl">
          <div className="card bg-base-100 border shadow-sm rounded-2xl">
            <figure>
              <img src={image} alt="record" className="rounded-t-2xl" />
            </figure>
            <div className="card-body p-5 bg-white rounded-b-2xl">
              <h2 className="card-title text-xl font-semibold">{albumName}</h2>
              <p>{recordInfo}</p>
            </div>

            <div className="px-5 py-2 flex justify-between">
              <p className="font-semibold">Price: </p>
              <p className="text-lg font-bold">{price} &#3647;</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
