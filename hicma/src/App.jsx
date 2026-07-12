import {BrowserRouter, Routes , Route} from "react-router-dom";

import  Home from "./Home.jsx";
import Display from "./display.jsx";
import Navbar from "./navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
    
