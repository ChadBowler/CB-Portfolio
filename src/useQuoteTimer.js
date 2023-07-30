import { useState ,useEffect } from "react";

const useQuoteTimer = (quotes) => {

    const [quote, setQuote] = useState(quotes[0])

    useEffect(() => {
        setInterval(() => {
            let randomNum = Math.floor(Math.random() * quotes.length);
            let randomQuote = quotes[randomNum];
            setQuote(randomQuote)
    return (randomQuote) 
        }, 5000);
    }, []);
    return(quote)
}
 
export default useQuoteTimer;