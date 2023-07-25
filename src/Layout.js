import Navbar from './Navbar';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layout = () => {
    return ( 
        <div className="App">
            <Header title="CB Portfolio" />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
     );
}
 
export default Layout;