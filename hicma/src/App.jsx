import {BrowserRouter, Routes , Route} from "react-router-dom";
import { createContext ,useState } from "react";

import  Home from "./Home.jsx";
import Display from "./display.jsx";
import Navbar from "./navbar.jsx";
import Random_quotes from "./random_quote.jsx";

export const target_subject=createContext()


function App() {
  const [subject,setsubject]=useState("beauty")
  const [info,setinfo]=useState([])

  return (
    <BrowserRouter>
    <target_subject.Provider value={{subject,setsubject,info,setinfo}}>
      <Navbar />
      
      <Routes>
        
          <Route path="/" element={<Home setsubject={setsubject}/>} />
          <Route path="/display" element={<Display subject={subject}/>} />
          <Route path="/random_quotes" element={<Random_quotes />} />
        
      </Routes>
      </target_subject.Provider>
    </BrowserRouter>
  );
}

export default App;
    
