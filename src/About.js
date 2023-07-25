import headshot from './images/Professional_headshot_no_bg.png'

const About = () => {
    return ( 
        <div className="about container text-center mt-5">
            <h3 className="page-title fs-1">Who am I?</h3>
            <div className="container mt-5 backdrop">
                <div className="row">
                    <div className="col">
                        <img className='photo-of-me' src={headshot} alt="professional headshot" />
                    </div>
                    <div class="col" id="about-me">
                        <p class="content-text mt-5 fs-4">I am and always have been passionate about computers. I first started programming at a young age using laguages such as Pascal, C++, and Dr Scheme.</p>
                            <br />
                            <p class="content-text fs-4"> As an adult I pursued a different career, and have recently returned back to the passion of my youth. I am in a Full Stack Coding Bootcamp through the University of Utah, and will be finished in October of 2023.</p>
                            <br />
                            <p class="content-text fs-4">In my spare time I have also started learning Python.
                            I couldn't be more excited for a career change.
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default About;