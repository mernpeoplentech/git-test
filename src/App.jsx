import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <main className="max-w-screen-xl mx-auto" style={{ padding: 10 }}>
      <Header />

      <Blog />
      <Footer />
    </main>
  );
}

export default App;
