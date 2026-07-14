import Quotes from "/src/short-quotes-master/short-quotes-master/quotes.json"

function Random_quotes(){
    return(<div className="continer">
        {Quotes.map((quote,index)=>(
            <div key={index} className="quotes">
                 <h3>{quote.text}</h3>
                <p> {quote.author}</p>
            </div>
        ))}
        </div>
    )
}
export default Random_quotes