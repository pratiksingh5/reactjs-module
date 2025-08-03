import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="flex items-center justify-center h-[80vh]">
        <Routes>
          <Route path="/" element={<Home/> }/>
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
