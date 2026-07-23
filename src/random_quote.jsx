import Quotes from "/src/short-quotes-master/short-quotes-master/quotes.json"
import { useEffect, useState ,useContext} from "react"
import Aos from "aos";
import 'aos/dist/aos.css';
import { Addtofaverit } from "./faverit";

import{ target_subject} from "./App"

function Random_quotes(){
    const [copySuccess, setCopySuccess] = useState(false);
    async function copyquote(quote){
        const quoteText = `"${quote.text}" \n— "${quote.author}"`;
        await navigator.clipboard.writeText(quoteText);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
    }

    
    const [getpublish,setgetpublish]=useState([])
    
    const [getquote,setgetquote]=useState([])
    let [number,setnember]=useState(0)
    const {font_size} =useContext(target_subject)

    const [issaved,setissaved]=useState(false)
        
    
        function handelclick(quote){
            Addtofaverit(quote);
            setissaved(!issaved)
        }

    useEffect(() => {
        Aos.init({
            duration: 800,
            once: true,
        });
    }, []);
        

    useEffect(
        ()=>{
            let ind=Math.floor(Math.random()*500 ) +1
            if(getpublish.map((inde)=>{
                inde==ind
                }
                )){
                setgetpublish(prev=>[...prev,ind])
                if(number<50){
                    setgetquote(prev=>[...prev,Quotes[ind]])
                    setnember(number=number+1)
                    
                }
            }
                
        }
       ,[getquote]
    )

    return(<div className="continer display">
        {getquote.map((quote, index) => {
  const saved = JSON.parse(localStorage.getItem('quotesid')) || [];
  const isThisSaved = saved.includes(quote.index);

  return (
    <div key={index} className="quotes" data-aos="fade-up" style={{fontSize:font_size}} >
        <div className="choices">
                    <button className="copy" onClick={()=>{copyquote(dailyquote)}}> نسخ </button>
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
export default Random_quotes