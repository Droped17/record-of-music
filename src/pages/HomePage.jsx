import RecordCardItem from "../components/RecordCardItem";
import HeaderMenu from "../components/HeaderMenu";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <HeaderMenu></HeaderMenu>

      <div>
        <img
          className="h-80 w-full object-cover"
          src="https://images.unsplash.com/photo-1616681255209-368a2cd3e643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
          alt="homepage"
        />
      </div>

      <main className="p-10">
        <Link to="/aboutrecord" className="gap-16 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          <RecordCardItem></RecordCardItem>
          <RecordCardItem></RecordCardItem>
          <RecordCardItem></RecordCardItem>
          <RecordCardItem></RecordCardItem>
          <RecordCardItem></RecordCardItem>
          <RecordCardItem></RecordCardItem>
          <RecordCardItem></RecordCardItem>
          <RecordCardItem></RecordCardItem>
        </Link>

        {/* <div className="join">
          <button className="join-item btn border">1</button>
          <button className="join-item btn border">2</button>
          <button className="join-item btn btn-disabled border">...</button>
          <button className="join-item btn border">99</button>
          <button className="join-item btn border">100</button>
        </div> */}
      </main>

      <footer className="bg-black h-60 p-10">
        <div className="text-white text-2xl">Record Of Music</div>
        <div className="flex gap-5">
          {" "}
          <div className="text-white">FB</div>
          <div className="text-white">IG</div>
        </div>
      </footer>
    </>
  );
}
