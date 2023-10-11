import GenereItem from "../components/GenereItem";
import HeaderMenu from "../components/HeaderMenu";

export default function GenerePage() {
  return (
    <>
      <HeaderMenu></HeaderMenu>
      <div className="text-center text-3xl font-semibold">GENERE</div>
      <div className="grid grid-cols-4 gap-20 p-10">
        <GenereItem></GenereItem>
        <GenereItem></GenereItem>
        <GenereItem></GenereItem>
        <GenereItem></GenereItem>
        <GenereItem></GenereItem>
        <GenereItem></GenereItem>
        <GenereItem></GenereItem>
        <GenereItem></GenereItem>
      </div>
    </>
  );
}
