import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/pages";
import React, { useState } from 'react'
import Gallery from "./components/pages/gallery";
import Team from './components/pages/team'
import Alumni from "./components/pages/alumni"
import Footer from "./components/Footer";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Router>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/team" element={<Team />} />
                <Route path="/supporters" element={<Alumni />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
