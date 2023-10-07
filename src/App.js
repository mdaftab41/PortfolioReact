
import React from "react";
import Header from "./component/Navbar";
import Home from "./component/Home";
 
import About from "./component/About";
import Skill from "./component/skill";
import Form from "./component/contactForm";
import ContactDetail from "./component/ContactDetail";
function App() {
  return (
    <div className="App">
     <Header/ >
     <Home />
     <About />
     <Skill />
     <Form />
     <ContactDetail />
    </div>
  );
}

export default App;
