import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then((response) => response.json())
      .then((data) => setData(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{data ? data : "Loading..."}</h1>
      </header>
    </div>
  );
}

export default App;
