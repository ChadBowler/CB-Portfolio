import weatherImg from './images/weather_dashboard.png';
import mealPrepImg from './images/meal_prep_screenshot.png';
import blogImg from './images/blog_screenshot.png';

const Projects = () => {
    return ( 
        <div className="projects fade-in p-5">
            <div className="projects container text-center mt-5">
                <h3 className="page-title">What can I do?</h3>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col row m-3">
                        <div className="col row project-title-container">
                            <h3 className='project-title col'>Weather Dashboard</h3>
                            <div className="col-12">
                                <a href='https://github.com/ChadBowler/weather-dashboard' rel="noreferrer" target='_blank' className="btn"><i className="fa-brands fa-github fs-2"></i></a>
                            </div>
                            
                        </div>
                        <div className="col">
                            <a href="https://chadbowler.github.io/weather-dashboard/" rel="noreferrer" target='_blank'>
                                <img className='project-image' src={weatherImg} alt="weather dashboard screenshot" />
                            </a>
                        </div>
                        <div className="col project-text-container">
                            <p className='content-text project-text'>A weather app to get current weather conditions and a 5-day forecast anywhere in the world! </p>
                            
                        </div>
                        
                    </div>
                    <div className="col row m-3">
                        <div className="col row project-title-container">
                            <h3 className='project-title col'>Meal Prep</h3>
                            <div className="col-12">
                                <a href='https://github.com/Mateocassidy/Meal-Planner-Project' rel="noreferrer" target='_blank' className="btn"><i className="fa-brands fa-github fs-2"></i></a>
                            </div>
                        </div>
                        <div className="col">
                            <a href="https://mateocassidy.github.io/Meal-Planner-Project/" rel="noreferrer" target='_blank'>
                                <img className='project-image' src={mealPrepImg} alt="meal prep screenshot" />
                            </a>
                        </div>
                        <div className="col project-text-container">
                            <p className='content-text project-text'>This meal planner gets a calculated daily calorie goal, then gives you the option to search for different foods to meet those goals. This was a collaborative group project.</p>
                            
                        </div>
                        
                    </div>
                    <div className="col row m-3">
                        <div className="col row project-title-container">
                            <h3 className='project-title col'>Stack 'em Back Blog</h3>
                            <div className="col-12">
                                <a href='https://github.com/ChadBowler/Stack-em-Back-Blog' rel="noreferrer" target='_blank' className="btn"><i className="fa-brands fa-github fs-2"></i></a>
                            </div>
                        </div>
                        <div className="col">
                            <a href="https://stack-em-back-blog-d06f61c5c0a9.herokuapp.com/" rel="noreferrer" target='_blank'>
                                <img className='project-image' src={blogImg} alt="blog screenshot" />
                            </a>
                        </div>
                        <div className="col project-text-container">
                            <p className='content-text project-text'>This is a basic blog site where you can log in and add, delete, or update blog entries, and add or delete comments.</p>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;