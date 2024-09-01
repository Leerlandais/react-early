// App.js
// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Button from './components/Button.jsx';
import Link from './components/Link.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Err404 from "./pages/Err404.jsx";
function App() {
    const changeColour = (colour) => {
        document.body.style.backgroundColor = colour;
    };

    return (
        <Router>
        <>
            <div className="global">
            <nav className={"navBar"}>
                <Link linkTo="/" linkName="Home" />
                <Link linkTo="/About" linkName="About" />
                <Link linkTo="/Services" linkName="Services" />
                <Link linkTo="/Contact" linkName="Contact" />
            </nav>
            <div className="btnHolder">
                <Button btnName={"Blue"} onClick={() => changeColour("blue")} /> {/* Fix the prop name */}
                <Button btnName={"Green"} onClick={() => changeColour("green")} />
                <Button btnName={"Red"} onClick={() => changeColour("red")} />
                <Button btnName={"White"} onClick={() => changeColour("white")} />
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={< Err404 />} />
            </Routes>
            <Footer />
            </div>
        </>
        </Router>
    );
}

export default App;
