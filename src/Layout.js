import Navigation from './Navigation';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';

const Layout = () => {
    const location = useLocation();
  const currentRoute = location.pathname;
    return ( 
        <div className="App">
            <Navigation currentRoute={currentRoute} />
            <Outlet />
            <Footer />
        </div>
     );
}
 
export default Layout;