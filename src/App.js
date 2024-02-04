import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS

import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Careers } from "./components/pages/Careers";
import { Contact } from "./components/pages/Contact";
import { Sales } from "./components/pages/Sales";
import { GJR } from "./components/pages/Gjr";
import { Skywalker } from "./components/pages/Skywalker";
import { FifthStar } from "./components/pages/FifthStar";
import { Librex } from "./components/pages/Librex";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        {/* <div className="content"> */}
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/about" element={ <About />} />
            <Route path="/contact" element={ <Contact />} />
            <Route path="/careers" element={ <Careers />} />
            <Route path="/careers" element={ <Careers />} />
            <Route path="/sales" element={ <Sales /> } />
            <Route path="/gjr" element={ <GJR />} />
            <Route path="/skywalker" element={ <Skywalker />} />
            <Route path="/librex" element={ <Librex />} />
            <Route path="/fifthstar" element={ <FifthStar />} /> 
          </Routes>
        {/* </div> */}
      </Router>
    </div>
  );
}

export default App;
