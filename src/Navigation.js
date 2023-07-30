import { Link } from 'react-router-dom';
import logo from './images/cb-logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


const Navigation = () => {
    return ( 

    //     <Navbar expand="lg" className="bg-body-tertiary">
    //   <Container>
    //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link>
    //         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <>
    
        <Navbar collapseOnSelect className='navigation' expand="lg">
            <Container fluid className="title">
                <Navbar.Brand className='name-and-title'>
                    <span className='my-name'>Chad Bowler</span>
                    <h2 className='subtitle'>Full Stack Developer</h2>
                </Navbar.Brand>
                <Container className='d-none d-lg-flex justify-content-around'>
                    <img src={logo} alt="logo" />
                </Container>
                <Col className='d-flex d-lg-block justify-content-end'>
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