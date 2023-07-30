import quotes from './data/db.json';
import useQuoteTimer from './useQuoteTimer';

const QuoteBlock = () => {

    const data = useQuoteTimer(quotes);
    return(
        
            <div className='mt-5 fs-1 quote-list show-quote'>
                <div className="quote-container" key={data.id}>
                    <p className='quote'>
                    {data.quote}
                    </p>
                    <p className='quote-author'>- {data.author}</p>
                </div>
            </div>
       
    )
}
 
export default QuoteBlock;