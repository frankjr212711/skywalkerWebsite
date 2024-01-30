import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import { Navbar } from "./components/Navbar";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Careers } from "./components/pages/Careers";
import { Contact } from "./components/pages/Contact";
import { Sales } from "./components/pages/Sales";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/sales" element={<Sales />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
