export default function RecordCardItem() {
  return (
    <>
      <div className="flex items-center justify-center hover:shadow-xl cursor-pointer transition rounded-2xl">
        <div className="card bg-base-100 border shadow-sm rounded-2xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1580656449278-e8381933522c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
              alt="record"
              className="rounded-t-2xl"
            />
          </figure>
          <div className="card-body p-5 bg-white rounded-b-2xl">
            <h2 className="card-title">Album_name</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa,
              voluptate.
            </p>

          </div>

          <div className="px-5 py-2 flex justify-between">
            <p className="font-semibold">Price: </p>
            <p className="text-lg font-bold">999 &#3647;</p>
          </div>
        </div>
      </div>
    </>
  );
}
