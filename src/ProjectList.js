import weatherImg from './images/weather_dashboard.png';
import mealPrepImg from './images/meal_prep_screenshot.png';
import blogImg from './images/blog_screenshot.png';
import projects from './data/projects.json';
import Col from 'react-bootstrap/Col';


const ProjectList = () => {
    const images = [{img: weatherImg}, {img: mealPrepImg}, {img: blogImg}];
    
        return ( 
            projects.map((project) => (
                <Col className='row m-3' key={project.id}>
                    <Col className="row project-title-container">
                        <h3 className='project-title col'>{project.title}</h3>
                        <div className="col-12">
                            <a href={project.githubLink} rel="noreferrer" target='_blank' className="btn"><i className="fa-brands fa-github fs-2"></i></a>
                        </div>
                    </Col>
                    <div className="col">
                        <a href={project.deployedLink} rel="noreferrer" target='_blank'>
                            <img className='project-image img' src={images[project.id -1].img} alt={`${project.title} screenshot`} />
                        </a>
                    </div>
                    <div className="col project-text-container">
                        <p className='content-text project-text'>{project.description}</p>
                    </div>
                </Col>
            ))
            
         );
    

    
}
 
export default ProjectList;



