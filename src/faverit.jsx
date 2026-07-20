import { useEffect ,useState} from "react";
import Quotes from "./short-quotes-master/short-quotes-master/quotes.json"

export function Addtofaverit(quotes){
  localStorage.setItem(quote.index,JSON.stringify(quotes) )
}

function Faverit() {
  const [getquotes,setgetquotes]=useState([])
  const [notempty,setnotempty]=useState(false)
  useEffect(
          ()=>{
            const saveid= JSON.parse(localStorage.getItem(''))
            })
          }
        ,[]
      )
  return (
    notempty ? (<div className="continer display">
          {getquotes.map((quote,index)=>(
              <div key={index} className="quotes" data-aos="fade-up" style={{fontSize:font_size}}>
                  <button className="copy" onClick={()=>{copyquote(quote)}}><p>نسخ</p></button>
                  <h3 >{quote?.text}</h3>
                  <p> {quote?.author}</p>
              </div>
          ))}
        </div> ) : (<h1>ليس لديك مفضلات</h1>
  )
        
  )
}
  

export default Faverit;