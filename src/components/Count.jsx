const Count = ({ count, handleCount, comp }) => {
  // count
  // setCount
  const newCount = 100;
  return (
    <div className="card">
      {comp}
      <button onClick={handleCount}>count is {count}</button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  );
};

export default Count;
