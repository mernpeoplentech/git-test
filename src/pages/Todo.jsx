import Footer from "../components/Footer";
import TodoList from "../components/TodoList";
const TodoPage = () => {
  return (
    <main className="max-w-screen-md mx-auto mt-10 rounded-md px-4 flex flex-col text-white items-start justify-center">
      <div className="w-full p-3 bg-slate-900 rounded-md text-white">
        <p>Todo List</p>
        <TodoList />
        <Footer />
      </div>
    </main>
  );
};

export default TodoPage;
