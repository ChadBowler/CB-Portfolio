// import logo from './cb-logo.png';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='about' element={<About />} />
            <Route path='projects' element={<Projects />} />
            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
