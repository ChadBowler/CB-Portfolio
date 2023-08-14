import headshot from './images/Professional_headshot_no_bg.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const About = () => {
    return ( 
        <Container className="about fade-in text-center mt-5">
            <h3 className="page-title fs-1">Who am I?</h3>
            <Row>
                <Col>
                    <p className="content-text fs-6">Greetings and welcome to my professional portfolio! I am an enthusiastic full stack web developer who has embarked on a remarkable journey from a background in law enforcement to the dynamic realm of web development.</p>
                </Col>
            </Row>
            <Row>
                <Col md>
                    <Row>
                        <Row>
                            <Col>
                                <Container className='backdrop-dark m-3 p-2 flip-card'>
                                    <Container className='flip-card-inner'>
                                        <Container className="flip-card-front">
                                            <Card.Title>Passion Ignited</Card.Title>
                                        </Container>
                                        <Card.Text className='flip-card-back p-3'>
                                            <p className="content-text fs-6"> Computers have always captivated me, and my high school exploration of programming languages like C++, Dr Scheme, and Pascal sparked a lifelong passion. My rapid grasp of new concepts continues to propel my growth in web development.</p>
                                        </Card.Text>
                                    </Container>
                                </Container>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Container className='backdrop-dark m-3 p-2 flip-card'>
                                    <Container className='flip-card-inner'>
                                        <Container className="flip-card-front">
                                            <Card.Title>Adapting Skills</Card.Title>
                                        </Container>
                                        <Card.Text className='flip-card-back p-3'>
                                            <p className="content-text fs-6">My transition has been guided by the fusion of my well-honed communication skills from my law enforcement tenure and the creative problem-solving mindset I've developed through my coding journey.</p>
                                        </Card.Text>
                                    </Container>
                                </Container>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Container className='backdrop-dark m-3 p-2 flip-card'>
                                    <Container className='flip-card-inner'>
                                        <Container className="flip-card-front">
                                            <Card.Title>Ready for Challenges</Card.Title>
                                        </Container>
                                        <Card.Text className='flip-card-back p-3'>
                                            <p className="content-text fs-6">As I traverse this exciting career shift, I'm equipped with the skills to tackle a myriad of challenges. Whether it's crafting user-friendly frontend interfaces or developing robust backend systems, I'm eager to make a lasting impact.</p>
                                        </Card.Text>
                                    </Container>
                                </Container>
                            </Col>
                        </Row>
                    </Row>
                </Col>
                <Col md className='my-photo-container'>
                    <Container>
                        <img className='photo-of-me img img-fluid' src={headshot} alt="professional headshot" />
                    </Container>
                </Col>
                <Col md>
                    <Row>
                        <Row>
                            <Col>
                                <Container className='backdrop-dark m-3 p-2 flip-card'>
                                    <Container className='flip-card-inner'>
                                        <Container className="flip-card-front">
                                            <Card.Title>Infusing Positivity</Card.Title>
                                        </Container>
                                        <Card.Text className='flip-card-back p-3'>
                                            <p className="content-text fs-6">With a natural wit and a penchant for fostering collaboration, I believe that a positive work environment is the breeding ground for innovation. I bring a dash of humor to my projects, ensuring both productivity and enjoyment.</p>
                                        </Card.Text>
                                    </Container>
                                </Container>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Container className='backdrop-dark m-3 p-2 flip-card'>
                                    <Container className='flip-card-inner'>
                                        <Container className="flip-card-front">
                                            <Card.Title>Reliable Excellence</Card.Title>
                                        </Container>
                                        <Card.Text className='flip-card-back p-3'>
                                            <p className="content-text fs-6">Known for my unwavering dedication and competence, I approach every project with a commitment to excellence. My law enforcement background has instilled a sense of reliability that I carry into my coding ventures.</p>
                                        </Card.Text>
                                    </Container>
                                </Container>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Container className='backdrop-dark m-3 p-2 flip-card'>
                                    <Container className='flip-card-inner'>
                                        <Container className="flip-card-front">
                                            <Card.Title>Let's Collaborate</Card.Title>
                                        </Container>
                                        <Card.Text className='flip-card-back p-3'>
                                            <p className="content-text fs-6">If you're seeking an adaptable and innovative full stack web developer who thrives on creative problem solving, I'm excited to connect. Let's explore how my unique journey and skill set can contribute to your projects.</p>
                                        </Card.Text>
                                    </Container>
                                </Container>
                            </Col>
                        </Row>
                    </Row>
                </Col>
            </Row>
            <Row className='pt-3'>
                <Col>
                    <p className="content-text fs-5">Thank you for visiting my portfolio—I'm thrilled to explore new opportunities and push the boundaries of web development!</p>
                </Col>
            </Row>
        </Container>
     );
}
 
export default About;


