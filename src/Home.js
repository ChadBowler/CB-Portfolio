import Container from 'react-bootstrap/Container';
import ProjectCarousel from './ProjectCarousel';

const Home = () => {
    
    return ( 
        <Container className="home fade-in cube-wrap">
            <h2 className="page-title fs-1">Let's make this easy.</h2>
                <ProjectCarousel />
        </Container>
     );
}
 
export default Home;