import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Todo from "./Components/Todo/Todo";



const App = ()  => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Todo/>
      <Contact/>
      <Footer/>
    </div>
  )
}


export default App