import HeaderMenu from "../components/HeaderMenu";

export default function AboutRecordPage() {

  return (
    <>
      <HeaderMenu></HeaderMenu>
      <div className="h-[50vh] bg-gray-200 flex">
        <div className="flex-1 flex justify-center">
          <img
            className="h-full w-[50%] object-cover "
            src="https://images.unsplash.com/photo-1616681255209-368a2cd3e643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
            alt="homepage"
          />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-white shadow-md border h-[90%] w-[60%]">asd</div>
        </div>
      </div>

      
    </>
  );
}
