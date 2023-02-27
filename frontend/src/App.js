import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    getNames();
  }, []);

  const getNames = async () => {
    const response = await axios.get("/names");
    setUsername(response.data);
  };

  return <div className="App">My name is {username}</div>;
}

export default App;
