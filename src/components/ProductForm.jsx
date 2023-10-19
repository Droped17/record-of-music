export default function ProductForm() {
  return (
    <>
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
    </>
  );
}
