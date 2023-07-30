// import animation from './images/waving-stick-figure.png';
// import quotes from './data/db.json';
// import useQuoteTimer from './useQuoteTimer';
import QuoteBlock from './QuoteBlock';

const Home = () => {
    
    return ( 
        <div className="home container text-center mt-5">
            <h2 className="page-title">Let's make this easy.</h2>
            
            <QuoteBlock />
            
        </div>
        
     );
}
 
export default Home;