import Blog from "./components/Blog";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main style={{ padding: 10 }}>
      <Navbar />
      <div>
        <h2>Welcome To Dummy Blog</h2>
      </div>
      <div>
        <h3 className="tech">Latest Technologies</h3>
      </div>
      <Blog />
      <footer>All rights reserved @ dummy blog</footer>
    </main>
  );
}
