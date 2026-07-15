import {BrowserRouter, Routes , Route} from "react-router-dom";
import { createContext ,useState ,useEffect} from "react";

import "./assets/font.css";
import  Home from "./Home.jsx";
import Display from "./display.jsx";
import Navbar from "./navbar.jsx";
import Random_quotes from "./random_quote.jsx";

export const target_subject=createContext()


function App() {
  const [subject,setsubject]=useState("beauty")
  const [info,setinfo]=useState([])

  const fonts = [
    { value: "Amiri", family:"اميري"},
    { value: "Rakkas", family: "راكاس" },
    { value: "Reem Kufi", family: "كوفي" }
  ]
  const [font,setfont]=useState(fonts[0].value)

  useEffect(
    ()=>{
      document.documentElement.style.fontFamily=font
    }
    ,[font]
  )


  return (
    <BrowserRouter>
    <target_subject.Provider value={{subject,setsubject,info,setinfo}}>
      <Navbar />
      <div className="continer">
      <select id="fonts" style={{fontFamily:font}} value={setfont} onChange={(e) => setfont(e.target.value)} >
        {fonts.map((targetfont)=>(
          <option key={targetfont.value} value={targetfont.value} style={{fontFamily:targetfont.value}}>{targetfont.family}</option>
        ))}
      </select>
        </div>
        
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
    
