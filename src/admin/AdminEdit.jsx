import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "../config/axios";
import { useRef } from "react";

export default function AdminEdit() {
  const fileEl = useRef(null);
  
  const [inputData, setInputData] = useState({
    albumName: "",
    genreName: "",
    price: "",
    artistName: "",
    image: "",
    recordInfo: "",
    score: "",
  });
  const handleOnChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  // file
  const [file, setFile] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:1112/product/${id}`)
      .then((res) => setInputData(res.data.product))
      .catch((e) => console.log(e));
  }, []);

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
    if (inputData.artistName) {
      formdata.append("artistName", inputData.artistName);
    }
    if (inputData.recordInfo) {
      formdata.append("recordInfo", inputData.recordInfo);
    }
    if (inputData.score) {
      formdata.append("score", inputData.score);
    }

    console.log(file);
    const res = axios.patch(`http://localhost:1112/product/${id}`, formdata);
  };

  return (
    <>
      <div className="bg-gray-200 p-5">
        <form
          className="flex flex-col gap-2 w-[50vw] mx-auto"
          onSubmit={handleSubmit}
        >
          <p className="text-start font-semibold text-xl">album name</p>
          <input
            className="h-10 p-3"
            type="text"
            name="albumName"
            onChange={handleOnChange}
            value={inputData.albumName}
          />
          <p className="text-start font-semibold text-xl">genre</p>
          <input
            className="h-10 p-3"
            type="text"
            name="genreName"
            onChange={handleOnChange}
            value={inputData.genreName}
          />
          <p className="text-start font-semibold text-xl">price</p>
          <input
            className="h-10 p-3"
            type="text"
            name="price"
            onChange={handleOnChange}
            value={inputData.price}
          />
          <p className="text-start font-semibold text-xl">artistName</p>
          <input
            className="h-10 p-3"
            type="text"
            name="artistName"
            onChange={handleOnChange}
            value={inputData.artistName}
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
              onChange={(e) => {
                if (e.target.files[0]) {
                  setFile(e.target.files[0]);
                }
              }}
            />
          )}
          <p className="text-start font-semibold text-xl">recordInfo</p>
          <input
            className="h-10 p-3"
            type="text"
            name="recordInfo"
            onChange={handleOnChange}
            value={inputData.recordInfo}
          />
          <p className="text-start font-semibold text-xl">score</p>
          <input
            className="h-10 p-3"
            type="text"
            name="score"
            onChange={handleOnChange}
            value={inputData.score}
          />
          <button className="p-3  bg-yellow-500 text-white ">Edit</button>
        </form>
      </div>
    </>
  );
}
