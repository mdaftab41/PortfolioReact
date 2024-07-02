
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Skill from "./component/skill";
 import Contact from "./component/Contact";
 //import Cursor from "./component/cursor";
function App() {
  return (
    <div className="w-full mx-auto App">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Skill" element={<Skill />} />
        <Route path="/Contact" element={<Contact />} /> 
      </Routes>
    </Router>
    </div>
  );
}

export default App;
 