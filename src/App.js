import './App.css';
import Navbar from './components/navbar';
import React, { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <div className="App">
        <Navbar />
      <h1>{message}</h1>
    </div>
  );
}
export default App;
