import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import { useState } from "react";
import { useStateValue } from "./components/StateProvider";
// import { useStateValue } from "./components/StateProvider";
// import { useEffect } from "react";
function App() {
 const[{user},dispatch]=useStateValue()
  return ( 
    <div className="app">
      {!user ? (
        <Login  />
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
