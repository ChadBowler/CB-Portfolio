import NinjaImg from './images/Productivity_Ninja_Screenshot.png';
import mealPrepImg from './images/meal_prep_screenshot.png';
import blogImg from './images/blog_screenshot.png';
import projects from './data/projects.json';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const ProjectList = () => {
    const images = [{img: NinjaImg}, {img: mealPrepImg}, {img: blogImg}];
    
        return ( 
            projects.map((project) => (
                <Col className='row m-3' key={project.id}>
                    <Col className="row project-title-container">
                        <h3 className='project-title col'>{project.title}</h3>
                        <Col xs="12" lg="6" >
                            <a href={project.githubLink} rel="noreferrer" target='_blank' className="btn"><i className="fa-brands fa-github fs-2"></i></a>
                        </Col>
                    </Col>
                    <Col>
                        <a href={project.deployedLink} rel="noreferrer" target='_blank'>
                            <Image className='project-image img' src={images[project.id -1].img} alt={`${project.title} screenshot`} />
                        </a>
                    </Col>
                    <Col className="project-text-container">
                        <p className='content-text project-text'>{project.description}</p>
                    </Col>
                    <br />
                    <hr className='hr hr-blurry mt-4' />
                </Col>
                
            ))
         );
};
 
export default ProjectList;



