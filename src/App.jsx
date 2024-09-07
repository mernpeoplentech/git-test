import Blog from "./components/Blog";

export default function App() {
  return (
    <main style={{ padding: 10 }}>
      <div style={{ textAlign: "center" }}>
        <div>
          <h1 style={{ color: "white", background: "orange" }}>Apurbo Tudu</h1>
        </div>
        <Blog />
        <button style={{ background: "orange", color: "white" }}>
          Conclusion
        </button>
      </div>
    </main>
  );
}
