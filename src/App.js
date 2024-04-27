
import React from "react";
import Header from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Skill from "./component/skill";
 import Contact from "./component/Contact";
 import Cursor from "./component/cursor";
function App() {
  return (
    <div className="App">
     <Header/ >
     <Home />
     <About />
     <Skill />
      <Contact />
      {/*<Cursor /> */}
    </div>
  );
}

export default App;
