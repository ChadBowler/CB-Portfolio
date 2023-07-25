import Navbar from './Navbar';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return ( 
        <div className="App">
            <Header title="CB Portfolio" />
            <Navbar />
            <Outlet />
        </div>
     );
}
 
export default Layout;