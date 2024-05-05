import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Todo from "./Components/Todo/Todo";
import { Routes, Route } from "react-router-dom";



function App () {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/hero' element={<Hero/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/todo' element={<Todo/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer />
    </>
    
  );
}


export default App