import React ,{useState,useEffect} from "react";

function Home() {
    const [subject,setsubject]=useState("beauty")
    const [quotes,setquotes]=useState([])
    const [author,setautor]=useState("")
    const [target_quotes,settarget]=useState([])


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
            const info=data.default;
            setquotes(info)
        });
            
    }
        ,[subject]
    )
    useEffect(()=>{
         const target=quotes.filter((quote)=> quote.author==author)
         settarget(target)
    }
        ,[author]
    )
    

    return (
        <div className="Home">
            <select  id="subject" onChange={(e)=>{setsubject(e.target.value)}}>{categories.map((cat) => (
                    
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                    
                    )
                    )}
            </select>
           
           <select  id="author" onChange={(a)=>{setautor(a.target.value)}}>
                <option value="">اختر المؤلف</option>
                {quotes.map((auth)=>(
                    <option key={auth.author} value={auth.author}>{auth.author}</option>
                ))}
           </select>
           <div >
                {target_quotes.map((quot)=>(
                    <p key={quot.author}>{quot.text}</p>
                ))}
           </div>

        </div>
    )
}
export default Home