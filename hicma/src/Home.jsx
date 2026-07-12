import React ,{useState,useEffect} from "react";

function Home() {
    const [subject,setsubject]=useState("beauty")
    const [quotes,setquotes]=useState("")
    

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
    useEffect(
    ()=>{
        import(`./short-quotes-master/short-quotes-master/ar/${subject}.json`)
        .then(data => {
            const das=data.default
            setquotes(data.default))
        }
            
    }
        ,[subject]
    )


    return (
        <div className="Home">
            <select  id="subject" onChange={(e)=>{setsubject(e.target.value)}}>{categories.map((cat) => (
                    
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                    
                    )
                    )}
            </select>
           
           <select  id="author">
                
           </select>
           

        </div>
    )
}
export default Home