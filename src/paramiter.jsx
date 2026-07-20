import { useEffect ,useContext,useState,} from "react"
import { target_subject } from "./App";


function Paramiter(){

    const {font_size,setfont_size}=useContext(target_subject)
    const {font,setfont}=useContext(target_subject)
    const fonts = [
    { value: "Amiri", family:"اميري"},
    { value: "Rakkas", family: "راكاس" },
    { value: "Reem Kufi", family: "كوفي" },
    { value: "Aref Ruqaa", family: "ارف رقاء" },
  ]
   
    
    
    useEffect(
    ()=>{
      document.documentElement.style.fontFamily=font
    }
    ,[font]
    )
   
    return(<div className="continer paramiter">
        <h2>نوع الخط</h2>
      <select id="fonts" style={{fontFamily:font}} value={font} onChange={(e) => {setfont(e.target.value)
                                                                                  localStorage.setItem('selectedfont',e.target.value)}} >
        {fonts.map((targetfont)=>(
          <option key={targetfont.value} value={targetfont.value} style={{fontFamily:targetfont.value}}>{targetfont.family}</option>
        ))}
      </select>
      <h2>حجم الخط</h2>
      <select id="font_size" style={{fontFamily:font}} value={font_size} onChange={(e) => {setfont_size(e.target.value)
                                                                                           localStorage.setItem('selectedfontsize',e.target.value)
      } }>
          <option value="18px">صغير</option>
          <option value="27px">متوسط</option>
          <option value="36px">كبير</option>
      </select>
      </div>)
    
}
export default Paramiter