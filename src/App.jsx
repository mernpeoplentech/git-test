import Blog from "./components/Blog";
import Header from "./components/Header";

function App() {
  return (
    <main className="bodyStyle">
      <Header />
      <div className="title">
        <img src="./src/assets/logoipsum-327.svg" alt="" />
        <h1>Muhammad Shourav</h1>
      </div>
      <p>MERN Stack Developer</p>

      <Blog />
    </main>
  );
}

export default App;
