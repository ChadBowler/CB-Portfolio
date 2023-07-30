import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layout = () => {
    return ( 
        <div className="App">
            <Navigation />
            <Outlet />
            <Footer />
        </div>
     );
}
 
export default Layout;