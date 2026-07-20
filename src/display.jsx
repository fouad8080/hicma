import { useContext,useEffect,useState } from "react";
import { target_subject } from "./App";
import Quotes from "./short-quotes-master/short-quotes-master/quotes.json"
function display() {
    const subject =useContext(target_subject)
    const [quotes,setquotes]=useState([])
    
    document.body.style.height="auto"

    useEffect(()=>{
        let ind=Math.floor(Math.random()*500 ) +1
        
        let filteredQuotes = Quotes.filter((quote) => quote.category === subject.subject);

        
        setquotes(filteredQuotes);
    },[subject.subject])
    
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