import Container from 'react-bootstrap/Container';
// import QuoteBlock from './QuoteBlock';
import ProjectCarousel from './ProjectCarousel';

const Home = () => {
    
    return ( 
        <Container className="home fade-in cube-wrap">
            <h2 className="page-title">Let's make this easy.</h2>
            {/* <QuoteBlock /> */}
                <ProjectCarousel />
        </Container>
     );
}
 
export default Home;