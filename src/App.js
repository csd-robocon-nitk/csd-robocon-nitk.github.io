import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages";
import SininPage from "./components/pages/signin";
import React from 'react'
import Gallery from "./components/pages/gallery";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/signin" element={<SininPage />} />
            </Routes>
        </Router>
    );
}

export default App;
