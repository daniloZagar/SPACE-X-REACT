import React from "react";
import "./App.css";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Nav from "./components/Navigation/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LaunchesDetails from "./components/Launches/LaunchesDetails"

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/launches/:id"  element={<LaunchesDetails/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
