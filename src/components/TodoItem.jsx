import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deletetodo } from "../redux/TodoSlice";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
const TodoItem = ({ items }) => {
  const dispatch = useDispatch();
  return (
    <motion.li
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full border border-gray-300 px-2 py-3 rounded-md flex items-center justify-between gap-5"
    >
      {items?.todo}
      <span
        className="text-xl hover:text-red-500 duration-200 cursor-pointer"
        onClick={() => {
          dispatch(deletetodo(items?._id)),
            toast.success("todo delete Success");
        }}
      >
        <MdDelete />
      </span>
    </motion.li>
  );
};

export default TodoItem;
