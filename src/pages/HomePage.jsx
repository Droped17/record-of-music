import RecordCardItem from "../components/RecordCardItem";
import HeaderMenu from "../components/HeaderMenu";

export default function HomePage() {
  return (
    <>
      <HeaderMenu></HeaderMenu>

      <div className="bg-gray-100">
        <div className="text-center pt-2 text-2xl font-semibold">Recommend</div>
        <div className="flex gap-5 p-5 justify-center">

        </div>
      </div>

      <div className="grid grid-cols-4 p-10 gap-16">
      <RecordCardItem></RecordCardItem>
      <RecordCardItem></RecordCardItem>
      <RecordCardItem></RecordCardItem>
      <RecordCardItem></RecordCardItem>
      <RecordCardItem></RecordCardItem>
      <RecordCardItem></RecordCardItem>
      <RecordCardItem></RecordCardItem>
      <RecordCardItem></RecordCardItem>


      </div>


    </>
  );
}
