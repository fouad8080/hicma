import React ,{useState,useEffect,useContext} from "react";
import { target_subject } from "./App";
import { Link } from "react-router-dom";



function Home() {
    const {subject,setsubject}=useContext(target_subject)
    const [quotes,setquotes]=useState([])
    const [author,setautor]=useState("")
    const [target_quotes,settarget]=useState([])

    document.body.style.height="100vh"
    
    
    

    const categories = [
  { value: "beauty", label: "جمال" },
  { value: "coffee", label: "قهوة" },
  { value: "friendship", label: "صداقة" },
  { value: "habits", label: "عادات" },
  { value: "happiness", label: "سعادة" },
  { value: "life", label: "حياة" },
  { value: "loneliness", label: "وحدة" },
  { value: "love", label: "حب" },
  { value: "marriage", label: "زواج" },
  { value: "night", label: "ليل" },
  { value: "risk", label: "مخاطرة" },
  { value: "sadness", label: "حزن" },
  { value: "sport", label: "رياضة" },
  { value: "success", label: "نجاح" },
  { value: "travel", label: "سفر" },
];
    
    

    return (
        <div className="Home">
            <h1>اختر موضوعا</h1>
            <select  id="subject" onChange={(e)=>{setsubject(e.target.value)}}>{categories.map((cat) => (
                    
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                    
                    )
                    )}
            </select>
           
           
           <div >
                {target_quotes.map((quot)=>(
                    <p key={quot.author}>{quot.text}</p>
                ))}
           </div>
            <Link to="/display" className="link">ابحث</Link>
        

        </div>
    )
}
export default Home