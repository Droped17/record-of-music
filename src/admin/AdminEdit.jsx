export default function AdminEdit() {
  
  return (
    <>
      <div className="bg-gray-200 p-5">
        <form className="flex flex-col gap-2 w-[50vw] mx-auto">
          <p className="text-start font-semibold text-xl">album name</p>
          <input className="h-10 p-3" type="text" name="albumName" id="" />
          <p className="text-start font-semibold text-xl">genre</p>
          <input className="h-10 p-3" type="text" name="genreName" id="" />
          <p className="text-start font-semibold text-xl">price</p>
          <input className="h-10 p-3" type="text" name="price" id="" />
          <p className="text-start font-semibold text-xl">artist</p>
          <input className="h-10 p-3" type="text" name="artistId" id="" />
          <p className="text-start font-semibold text-xl">imageo</p>
          <input className="h-10 p-3" type="text" name="image" id="" />
          <p className="text-start font-semibold text-xl">recordInfo</p>
          <input className="h-10 p-3" type="text" name="recordInfo" id="" />
          <p className="text-start font-semibold text-xl">score</p>
          <input className="h-10 p-3" type="text" name="score" id="" />
          <button className="p-3  bg-yellow-500 text-white ">Edit</button>
        </form>
      </div>
    </>
  );
}
