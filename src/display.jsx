import { useContext,useEffect,useState } from "react";
import { target_subject } from "./App";
import { Addtofaverit } from "./faverit";

import Quotes from "./short-quotes-master/short-quotes-master/quotes.json"



function display() {
    const subject =useContext(target_subject)
    const [quotes,setquotes]=useState([])
    
    const [copySuccess, setCopySuccess] = useState(false);
    async function copyquote(quote){
        const quoteText = `"${quote.text}" \n— "${quote.author}"`;
        await navigator.clipboard.writeText(quoteText);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
    }

    
   
       function handelclick(quote){
           Addtofaverit(quote);
           setissaved(!issaved)
       }

    useEffect(()=>{
        let ind=Math.floor(Math.random()*500 ) +1
        
        let filteredQuotes = Quotes.filter((quote) => quote.category === subject.subject);

        
        setquotes(filteredQuotes);
    },[subject.subject])
    
    
    return(<div className="continer display">
        {quotes.map((quote, index) => {
  const saved = JSON.parse(localStorage.getItem('quotesid')) || [];
  const isThisSaved = saved.includes(quote.index);

  return (
    <div key={index} className="quotes">
      <div className="choices">
                    <button className="copy" onClick={()=>{copyquote(dailyquote)}}> <p>نسخ</p> </button>
                    <button className="copy" onClick={() => handelclick(quote)}>
                                {isThisSaved ? "تم الحفظ" : "حفظ"}
                    </button>
        </div>
      <h3>{quote?.text}</h3>
      <p>{quote?.author}</p>
    </div>
  );
})}
        
        </div>
    )
}
export default display;