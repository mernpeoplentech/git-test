import Blog from "./components/Blog";

function App() {
  return (
    <main className="bodyStyle">
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
