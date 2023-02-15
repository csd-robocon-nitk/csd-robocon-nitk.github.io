import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages";
import React from 'react'
import Gallery from "./components/pages/gallery";
import Team from './components/pages/team'
import Alumni from "./components/pages/alumni"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/team" element={<Team />} />
                <Route path="/supporters" element={<Alumni />} />
            </Routes>
        </Router>
    );
}

export default App;
