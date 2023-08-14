import ProjectList from './ProjectList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Projects = () => {
    
    return ( 
        <Container fluid className='projects fade-in p-5'>
            <Container className='projects text-center mt-5'>
                <h3 className="page-title fs-1">What can I do?</h3>
            </Container>
            <Container>
                <Row>
                    <ProjectList />
                </Row>
            </Container>
        </Container>
     );
}
 
export default Projects;