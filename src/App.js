import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useState } from "react";
import Login from "./components/Login";
function App() {
  const [user, setUser] = useState();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="appbody">
          <Navbar />
          <Home />
        </div>
      )}
    </div>
  );
}

export default App;
