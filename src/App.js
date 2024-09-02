import Logo from './components/Logo';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Colour from './pages/Colour';
import Counter from './pages/Counter';
import Hello from './pages/Hello';
import Err404 from "./pages/Err404.jsx";
import ToDo from './pages/ToDo.jsx';
import NavMenu from './components/NavMenu';

function App() {
  return (
      <Router>
    <div className="App">
      <header className="App-header">
        <NavMenu />

        <Logo prop={"svgImage"} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colour" element={<Colour />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="*" element={< Err404 />} />
        </Routes>
      </header>
    </div>
      </Router>
  );
}

export default App;
