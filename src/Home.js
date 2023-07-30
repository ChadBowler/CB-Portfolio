import Container from 'react-bootstrap/Container';
import QuoteBlock from './QuoteBlock';

const Home = () => {
    
    return ( 
        <Container className="home fade-in">
            
            <h2 className="page-title">Let's make this easy.</h2>
            
            <QuoteBlock />
       
        </Container>
        
        
     );
}
 
export default Home;