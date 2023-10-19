import { useState } from "react";
import { useProduct } from "../hooks/use-product";
import { Link } from "react-router-dom";
import axios from "../config/axios";
import { useRef } from "react";
import AdminDelete from "./AdminDelete";

export default function AdminDashboard() {
  const fileEl = useRef(null);
  //modal
  const [isOpenform, setIsOpenform] = useState(false);
  // loading
  const [loading, setLoading] = useState(false);

  //input
  const [inputData, setInputData] = useState({
    albumName: "",
    genreName: "",
    price: "",
    artistId: "",
    image: "",
    recordInfo: "",
    score: "",
  });

  ///input onChange
  const handleOnChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  // file
  const [file, setFile] = useState(null);

  //submit form.
  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    if (file) {
      formdata.append("image", file);
    }
    if (inputData.albumName) {
      formdata.append("albumName", inputData.albumName);
    }
    if (inputData.genreName) {
      formdata.append("genreName", inputData.genreName);
    }
    if (inputData.price) {
      formdata.append("price", inputData.price);
    }
    if (inputData.artistId) {
      formdata.append("artistId", inputData.artistId);
    }
    if (inputData.albumName) {
      formdata.append("recordInfo", inputData.recordInfo);
    }
    if (inputData.score) {
      formdata.append("score", inputData.score);
    }

    setLoading(true);
    console.log(file);
    const res = axios.post("http://localhost:1112/product", formdata);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpenform(!isOpenform);
  };

  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:1112/product/${id}`);
  };

  const { getProduct, inputEl } = useProduct();

  //   console.log(getProduct);

  return (
    <>
      <div className="h-full p-5 flex flex-col gap-3">
        <div className="text-center">Admin</div>
        <div className="text-center">
          <button className="p-3  bg-blue-500 text-white rounded-full">
            Add Product
          </button>
          {/* modal */}
          <div className="bg-gray-200  p-8 mt-3">
            <form
              className="flex flex-col gap-2 w-[50vw] mx-auto"
              onSubmit={handleSubmit}
            >
              <p className="text-start font-semibold text-xl">album name</p>
              <input
                className="h-10 p-3"
                type="text"
                name="albumName"
                id=""
                onChange={handleOnChange}
                value={inputData.albumName}
              />
              <p className="text-start font-semibold text-xl">genre</p>
              <input
                className="h-10 p-3"
                type="text"
                name="genreName"
                id=""
                onChange={handleOnChange}
                value={inputData.genreName}
              />
              <p className="text-start font-semibold text-xl">price</p>
              <input
                className="h-10 p-3"
                type="text"
                name="price"
                id=""
                onChange={handleOnChange}
                value={inputData.price}
              />
              <p className="text-start font-semibold text-xl">artist</p>
              <input
                className="h-10 p-3"
                type="text"
                name="artistId"
                id=""
                onChange={handleOnChange}
                value={inputData.artistId}
              />
              <p className="text-start font-semibold text-xl">image</p>
              {file ? (
                <div onClick={() => fileEl.current.click()}>
                  <img src={URL.createObjectURL(file)} alt="" />
                </div>
              ) : (
                <input
                  className="h-10 p-3"
                  type="file"
                  ref={fileEl}
                  name="image"
                  id=""
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      setFile(e.target.files[0]);
                    }
                  }}
                  value={inputData.image}
                />
              )}
              <p className="text-start font-semibold text-xl">recordInfo</p>
              <input
                className="h-10 p-3"
                type="text"
                name="recordInfo"
                id=""
                onChange={handleOnChange}
                value={inputData.recordInfo}
              />
              <p className="text-start font-semibold text-xl">score</p>
              <input
                className="h-10 p-3"
                type="text"
                name="score"
                id=""
                onChange={handleOnChange}
                value={inputData.score}
              />
              <button className="p-3  bg-blue-500 text-white ">Add</button>
            </form>
          </div>

          {/* All Product */}
          <div className="bg-green-400">
            <div>
              {getProduct.map((el) => (
                <div key={el.id} id={el.id} className="flex justify-around">
                  <div>{el.albumName}</div>
                  <Link to={`/admin/edit/${el.id}`}>
                    <button className="bg-yellow-500 w-[80px] p-2">Edit</button>
                  </Link>
                  <button
                    className="bg-red-500 w-[80px] p-2"
                    onClick={() => handleDelete(el.id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
