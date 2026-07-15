import { useContext,useEffect,useState } from "react";
import { target_subject } from "./App";
import Quotes from "./short-quotes-master/short-quotes-master/quotes.json"
function display() {
    const subject =useContext(target_subject)
    const [quotes,setquotes]=useState([])
    
    document.body.style.height="auto"

    useEffect(
        ()=>{
            import(`./short-quotes-master/short-quotes-master/ar/${subject.subject}.json`)
            .then(data => {
                const info=data.default;
                setquotes(info)
            });
                
        }
            ,[subject.subject]
        )

    
    console.log(quotes)
    
    return(<div className="continer display">
        {quotes.map((quote,index)=>(
            <div key={index} className="quotes">
                <h3>{quote.text}</h3>
                <p> {quote.author}</p>
            </div>
        ))}
        
        </div>
    )
}
export default display;