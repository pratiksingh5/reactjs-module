function TodoItem({ item }) {
  return (
    <div className="flex border w-full gap-x-3 border-gray-700 p-4 rounded-lg duration-300  text-black items-center">
      <span className="outline-none w-full bg-transparent text-white">
        {item.text}{" "}
      </span>
      <button className="inline-flex py-2 px-4 cursor-pointer rounded-lg text-sm border border-black/10 justify-center items-center text-white bg-red-400 hover:bg-red-600 shrink-0" 
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
