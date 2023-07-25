import { Link } from 'react-router-dom';
import logo from './images/cb-logo.png';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="title">
                <h1>Chad Bowler</h1>
                <h4 className='subtitle'>Full Stack Developer</h4>
            </div>
            
            <img src={logo} alt="logo" />
            <div className="links">
                <Link to='/' className='btn'>Home</Link>
                <Link to='/about' className='btn'>About</Link>
                <Link to='/projects' className='btn'>Projects</Link>
                <Link to='/contact' className='btn'>Contact</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;