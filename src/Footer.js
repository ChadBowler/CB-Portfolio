const github = "https://github.com/ChadBowler";
const linkedin = "https://www.linkedin.com/in/chad-bowler-82683b5/"
const copy = '© 2023 - Chad Bowler'

const Footer = () => {
    return ( 
        <div className="container footage-container footage fixed-bottom text-center">
            <div className="row">
                <div className="col">
                    <a href={github}><i className="fa-brands fa-github fs-1 m-1 p-2 footage footage-text"></i></a>
                    <a href={linkedin}><i className="fa-brands fa-linkedin-in fs-1 m-1 p-2 footage footage-text"></i></a>
                    <span className="footage name-text fs-3">{copy}</span>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;