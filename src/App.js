import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS

import { Home } from "./components/pages/Home";

import { Careers } from "./components/pages/Careers";
import { Contact } from "./components/pages/Contact";
import { About } from "./components/pages/About";

import { GJR } from "./components/pages/Gjr";
import { Skywalker } from "./components/pages/Skywalker";
import { FifthStar } from "./components/pages/FifthStar";
import { Librex } from "./components/pages/Librex";



import { SkyAbout } from "./components/pages/SkyAbout";



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
            <Route path="/gjr" element={ <GJR />} />
            <Route path="/skywalker" element={ <Skywalker />} />
            <Route path="/librex" element={ <Librex />} />
            <Route path="/fifthstar" element={<FifthStar />} /> 
          {/*  */}
          <Route path="/skyabout" element={ <SkyAbout />} />


          </Routes>
        {/* </div> */}
      </Router>
    </div>
  );
}

export default App;
