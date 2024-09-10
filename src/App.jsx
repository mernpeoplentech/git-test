import Footer from "./components/Footer";
import InputForm from "./components/InputForm";

function App() {
  return (
    <main className="max-w-screen-md mx-auto mt-10 rounded-md px-4 flex flex-col text-white items-start justify-center">
      <div className="w-full p-3 bg-slate-900 rounded-md text-white">
        <InputForm />
        <Footer />
      </div>
    </main>
  );
}

export default App;
