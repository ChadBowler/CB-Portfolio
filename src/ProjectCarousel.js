import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import NinjaImg from './images/Productivity_Ninja_Screenshot.png';
import mealPrepImg from './images/meal_prep_screenshot.png';
import blogImg from './images/blog_screenshot.png';
import projects from './data/projects.json';
import { Col } from 'react-bootstrap';

function ProjectCarousel() {
    const images = [{img: NinjaImg}, {img: mealPrepImg}, {img: blogImg}];
    const textStyle = {
        color: 'white'
    }
  return (
    <Carousel className='cube'>
        {projects.map((project) => (
            <Carousel.Item key={project.id}>
                
                <a href={project.deployedLink} rel="noreferrer" target='_blank'>
                    <img className='project-image img carousel-img' src={images[project.id -1].img} alt={`${project.title} screenshot`} />
                </a>
                
                    <div style={textStyle} className="carousel-backdrop">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                
              
                
            </Carousel.Item>
         
            ))}
    </Carousel>
        
        

    
  );
}

export default ProjectCarousel;