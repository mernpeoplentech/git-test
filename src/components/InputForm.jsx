import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addtodo } from "../redux/TodoSlice";
import toast from "react-hot-toast";
import TodoList from "./TodoList";

const InputForm = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const HandleTodo = (e) => {
    e.preventDefault();
    if (todo === "") {
      toast.error("Please Enter Todo");
    } else {
      dispatch(
        addtodo({ _id: Math.random().toString().slice(0, 4), todo: todo })
      );
      setTodo("");
      toast.success("Todo added Successfully");
    }
  };
  return (
    <div className="w-full py-5 rounded-md">
      {/* TodoForm */}
      <form className="w-full px-4 flex items-center justify-between gap-5 relative">
        <input
          type="text"
          placeholder="Enter Your Todo..."
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          className="flex-1 h-12 px-4 py-2 rounded-md text-base placeholder:text-sm text-gray-300
           outline-none border border-gray-400 bg-transparent focus-visible:border-green-500"
        />
        {todo && (
          <span
            onClick={() => {
              setTodo(""), toast.success("item deleted");
            }}
            className=" absolute top-3.5 right-36 text-white text-xl hover:text-red-500 duration-200 cursor-pointer"
          >
            <IoCloseOutline />
          </span>
        )}
        <button
          type="submit"
          onClick={HandleTodo}
          className="w-24 h-12 uppercase text-xs  md:text-sm font-semibold border border-gray-400 rounded-md"
        >
          Add Todo
        </button>
      </form>
      {/* todoList */}
      <TodoList />
    </div>
  );
};

export default InputForm;
