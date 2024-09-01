import Logo from './components/Logo';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Err404 from "./pages/Err404.jsx";
import NavMenu from './components/NavMenu';
import BtnHolder from "./components/BtnHolder";
function App() {
  return (
      <Router>
    <div className="App">
      <header className="App-header">
        <NavMenu />
        <BtnHolder />
        <Logo prop={"svgImage"} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={< Err404 />} />
        </Routes>
      </header>

    </div>
      </Router>
  );
}

export default App;
