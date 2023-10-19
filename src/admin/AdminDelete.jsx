export default function AdminDelete({ id }) {
  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:1112/product/:${id}`);
  };

  return (
    <>
      <button className="bg-red-500 w-[80px] p-2" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </>
  );
}
