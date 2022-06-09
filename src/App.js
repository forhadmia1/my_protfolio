import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Projects from './pages/Home/Projects';
import Skill from './pages/Skill/Skill';
import Blogs from './pages/Blogs/Blogs';
import ContactPage from './pages/Contact/ContactPage';
import AboutMe from './pages/About/AboutMe';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skill' element={<Skill />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
