import React ,{useState,useEffect,useContext} from "react";
import { target_subject } from "./App";
import { Link } from "react-router-dom";

import Quotes from "/src/short-quotes-master/short-quotes-master/quotes.json"


function Home() {
    const {subject,setsubject}=useContext(target_subject)
    const {font_size}=useContext(target_subject)
    const [author,setautor]=useState("")
    const [target_quotes,settarget]=useState([])
    const [dailyquote,setdaily]=useState([])

    
    useEffect(      
        ()=>{
            let rndomnumber=Math.floor(Math.random()*500 ) +1 ;

        Quotes.map((quote,index)=>{
                            if (index==rndomnumber) {
                                
                                setdaily(quote)
                                
                            }
                        })}
        
        ,[]                
    )

    const categories = [
  { value: "coffee", label: "قهوة" },
  { value: "friendship", label: "صداقة" },
  { value: "habits", label: "عادات" },
  { value: "happiness", label: "سعادة" },
  { value: "life", label: "حياة" },
  { value: "loneliness", label: "وحدة" },
  { value: "love", label: "حب" },
  { value: "marriage", label: "زواج" },
  { value: "night", label: "الليل" },
  { value: "risk", label: "مخاطرة" },
  { value: "sadness", label: "حزن" },
  { value: "success", label: "نجاح" },
  { value: "travel", label: "سفر" },
  { value: "beauty", label: "الجمال" },
  { value: "wisdom", label: "حكمة" },
  { value: "religion", label: "دين وإيمان" },
  { value: "politics", label: "سياسة ووطن" },
  { value: "knowledge", label: "علم ومعرفة" },
  { value: "poetry", label: "شعر وأدب" },
  { value: "ethics", label: "أخلاق" },
];
    
    const {font}=useContext(target_subject)

    return (
        <div className="Home">
            <h1>اختر موضوعا</h1>
            <select  id="subject" style={{fontFamily:font}} value={subject} onChange={(e)=>{setsubject(e.target.value)}}>{categories.map((cat) => (
                    
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                    
                    )
                    )}
            </select>
            <Link to="/display" className="link search">ابحث</Link>
            <h1>حكمة لك</h1>
            <div className="quotes" style={{fontSize:"30px"}}>
                <h3>{dailyquote.text}</h3>
                <p>{dailyquote.author}</p>
            </div>

        </div>
    )
}
export default Home