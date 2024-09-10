import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { motion } from "framer-motion";
import { removeTodo } from "../redux/TodoSlice";
import { useState } from "react";
import toast from "react-hot-toast";
const TodoList = () => {
  const { todolist } = useSelector((state) => state?.todo);
  const [removetodo, setRemovetodo] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="w-[96%] mx-auto mt-5 border border-gray-400 p-3 rounded-md">
      {todolist?.length > 0 && (
        <div>
          <ul className="flex flex-col gap-3 py-">
            {todolist?.map((item) => (
              <TodoItem key={item?._id} items={item} />
            ))}
          </ul>
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="border border-green-500 mt-3 px-2 rounded-md text-yellow-500 py-2 text-sm"
            type="submit"
            onClick={() => setRemovetodo(true)}
          >
            Remove Todo
          </motion.button>
        </div>
      )}
      {todolist?.length == 0 && (
        <div className="text-center">
          <p className="text-yellow-500">Your todo Empty</p>
        </div>
      )}
      {removetodo && (
        <div className="w-full min-h-screen fixed top-0 left-0 bg-slate-900/50">
          <div
            className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 
          -translate-y-1/2 bg-slate-950 border border-green-500 px-8 py-2"
          >
            <p className="text-red-400 text-sm tracking-wide">
              Are you sure
              <span className="underline underline-offset-1"> remove </span>
              all the todos
            </p>
            <div className="flex items-center justify-center gap-10 py-3">
              <button
                className="border border-gray-400 rounded-md flex 
              items-center justify-center w-12 h-8 text-sm hover:border-red-500 duration-200"
                onClick={() => setRemovetodo(false)}
              >
                No
              </button>
              <button
                className="border border-gray-400 rounded-md flex
               items-center justify-center w-12 h-8 text-sm hover:border-red-500 duration-200"
                onClick={() => {
                  dispatch(removeTodo()), setRemovetodo(false);
                  toast.success("all todo remove successfully");
                }}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
