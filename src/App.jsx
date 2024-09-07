import Blog from "./components/Blog";
<<<<<<< HEAD
import Header from "./components/Header";

function App() {
  return (
    <main className="bodyStyle">
      <Header />
      <div className="title">
        <img src="./src/assets/logoipsum-327.svg" alt="" />
        <h1>Muhammad Shourav</h1>
=======
import Navbar from "./components/Navbar";

function App() {
  return (
    <main style={{ padding: 10 }}>
      <Navbar />
      <div>
        <h2>Welcome To Dummy Blog</h2>
      </div>
      <div>
        <h3 className="tech">Latest Technologies</h3>
>>>>>>> origin
      </div>
      <p>MERN Stack Developer</p>

      <Blog />
<<<<<<< HEAD
=======
      <footer>All rights reserved @ dummy blog</footer>
>>>>>>> origin
    </main>
  );
}

export default App;
