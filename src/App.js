import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "aos/dist/aos.css";
import SingleProject from './components/SingleProject';
import Blogs from './pages/Blogs';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/project/:id' element={<SingleProject />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
