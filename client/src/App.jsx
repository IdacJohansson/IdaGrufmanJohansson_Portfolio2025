import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../src/pages/Home";
import Contact from "../src/pages/Contact";
import Experience from "../src/pages/Experience";
import Projects from "../src/pages/Projects";

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
