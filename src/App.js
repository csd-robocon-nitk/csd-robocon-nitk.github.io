import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages";
import SininPage from "./components/pages/signin";
import React from 'react'
import Gallery from "./components/pages/gallery";
import Team from './components/pages/team';
import Aim from './components/pages/Aim';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/signin" element={<SininPage />} />
                <Route path="/team" element={<Team />} />
                <Route path="/Aim" element={<Aim />} />
            </Routes>
        </Router>
    );
}

export default App;
