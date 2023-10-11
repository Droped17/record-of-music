import RecordCardItem from "../components/RecordCardItem";
import HeaderMenu from "../components/HeaderMenu";

export default function HomePage() {
  return (
    <>
      <HeaderMenu></HeaderMenu>

      <div className="bg-gray-100">
        <div className="text-center pt-2 text-2xl font-semibold">Recommend</div>
        <div className="flex gap-5 p-5 justify-center"></div>
      </div>

      <main className="p-10 gap-16 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        <RecordCardItem></RecordCardItem>
        <RecordCardItem></RecordCardItem>
        <RecordCardItem></RecordCardItem>
        <RecordCardItem></RecordCardItem>
        <RecordCardItem></RecordCardItem>
        <RecordCardItem></RecordCardItem>
        <RecordCardItem></RecordCardItem>
        <RecordCardItem></RecordCardItem>
        <RecordCardItem></RecordCardItem>
        <RecordCardItem></RecordCardItem>
        <RecordCardItem></RecordCardItem>
        <RecordCardItem></RecordCardItem>

        <div className="join">
          <button className="join-item btn border">1</button>
          <button className="join-item btn border">2</button>
          <button className="join-item btn btn-disabled border">...</button>
          <button className="join-item btn border">99</button>
          <button className="join-item btn border">100</button>
        </div>
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
