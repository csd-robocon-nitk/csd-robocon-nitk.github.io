import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages";
import React from 'react'
import Gallery from "./components/pages/gallery";
import Team from './components/pages/team'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/team" element={<Team />} />
            </Routes>
        </Router>
    );
}

export default App;
