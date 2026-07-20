import {BrowserRouter, Routes , Route} from "react-router-dom";
import { createContext ,useState ,useEffect} from "react";

import "./assets/font.css";
import  Home from "./Home.jsx";
import Display from "./display.jsx";
import Navbar from "./navbar.jsx";
import Random_quotes from "./random_quote.jsx";
import Paramiter from "./paramiter.jsx";
import Faverit from "./faverit.jsx";

export const target_subject=createContext()


function App() {
  const [subject,setsubject]=useState("beauty")
  
  const [font_size,setfont_size]=useState(()=> localStorage.getItem('selectedfontsize') ||"27px")

  const [font,setfont]=useState(()=>localStorage.getItem('selectedfont') || "Amiri")
  
  const [showparamiter,setshowparamiter]=useState(false)

  
  
  useEffect(
    ()=>{
      document.documentElement.style.fontFamily=font
    }
    ,[font]
    )

  return (
    <BrowserRouter>
    <target_subject.Provider value={{subject,setsubject,showparamiter,setshowparamiter,font_size,setfont_size,font,setfont}}>
      <Navbar  value={{showparamiter,setshowparamiter}} font={font}/>
      {showparamiter && (
        <Paramiter font_size={{font_size,setfont_size}} font={{font,setfont}} />
      )}
      <Routes>
        
          <Route path="/" element={<Home setsubject={setsubject} font={font} font_size={font_size}/>} />
          <Route path="/display" element={<Display subject={subject}/>} />
          <Route path="/random_quotes" element={<Random_quotes font_size={font_size}/>} />
          <Route path="/faverit" element={<Faverit />} />
        
      </Routes>
      </target_subject.Provider>
    </BrowserRouter>
  );
}

export default App;
    
