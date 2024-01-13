import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Nav from './Components/Nav';
import Home from "./Components/Home";
import Grooming from "./Components/Grooming";
import DogFood from "./Components/DogFood";
import Toys from "./Components/Toys";
import OurStory from "./Components/OurStory";
import MeetTeam from "./Components/MeetTeam";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/grooming" element={<Grooming />} />
          <Route path="/dog-food" element={<DogFood />} />
          <Route path="/dog-toys" element={<Toys />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/meet-team" element={<MeetTeam />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
