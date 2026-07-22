import { useEffect ,useState} from "react";
import Quotes from "./short-quotes-master/short-quotes-master/quotes.json"

 export function Addtofaverit(quote){
    
    const saved= JSON.parse(localStorage.getItem('quotesid')) || []
    const exist=saved.includes(quote.index)
    const update=exist ? saved.filter(id => id !== quote.index) : [...saved,quote.index]
    localStorage.setItem('quotesid', JSON.stringify(update));
    return update

    
  }

function Faverit() {
  
  const [copySuccess, setCopySuccess] = useState(false);
    async function copyquote(quote){
        const quoteText = `"${quote.text}" \n— "${quote.author}"`;
        await navigator.clipboard.writeText(quoteText);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
    }
  
  const [getquotes,setgetquotes]=useState([])
  const [notempty,setnotempty]=useState(false)
  useEffect(
    ()=>{
      const savedid=JSON.parse(localStorage.getItem('quotesid')) || []; 
      const filtered= Quotes.filter(q=>savedid.includes(q.index));
      setgetquotes(filtered)
      setnotempty(filtered.length>0)
    
    } 
    ,[]
  )

  return (
    notempty ? (<div className="continer display">
        {
          getquotes.map((quote ,index)=>(
            <div key={index} className="quotes">
                              <div className="choices">
                                <button className="copy" onClick={()=>{
                                  copyquote(quote)
                                }}>
                                  <p>نسخ</p>
                                </button>
                                <button className="copy" onClick={()=>{
                                  Addtofaverit(quote)
                                  const updatelist=getquotes.filter(q=>q.index !== quote.index)
                                  setgetquotes(updatelist)
                                  setnotempty(updatelist.length>0)
                              }}> <p>الغاء الحفظ</p> </button>
                              </div>
                <h3>{quote.text}</h3>
                <p> {quote.author}</p>
            </div>
          ))
        }
      </div>) : <h1>ليس لديك مفضلات</h1>
      
    
  )
}
  

export default Faverit;