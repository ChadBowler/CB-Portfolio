import { Link } from 'react-router-dom';
import logo from './images/cb-logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Offcanvas from 'react-bootstrap/Offcanvas';


const Navigation = () => {
    return ( 
    <>
        <Navbar collapseOnSelect className='navigation' expand="lg">
            <Container fluid className="title">
                <Navbar.Brand className='name-and-title'>
                    <span className='display-1' id='my-name'>Chad Bowler</span>
                    <h2 className='subtitle display-8'>Full Stack Developer</h2>
                </Navbar.Brand>
                <Container className='d-none d-lg-flex justify-content-around'>
                    <img src={logo} alt="logo" />
                </Container>
                <Col className='d-flex justify-content-end'>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                    <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-lg`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                            Links
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="links m-5">
                                <Link to='/' className='btn mt-3'>Home</Link>
                                <Link to='/about' className='btn mt-3'>About</Link>
                                <Link to='/projects' className='btn mt-3'>Projects</Link>
                                <Link to='/contact' className='btn mt-3'>Contact</Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Col>
            </Container>
        </Navbar>
    </>
     );
}
 
export default Navigation;