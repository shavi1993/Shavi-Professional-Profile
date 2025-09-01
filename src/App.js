import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
