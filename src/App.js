
import React from "react";
import Header from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Skill from "./component/skill";
 import Contact from "./component/Contact";
function App() {
  return (
    <div className="App">
     <Header/ >
     <Home />
     <About />
     <Skill />
      <Contact />
    </div>
  );
}

export default App;
