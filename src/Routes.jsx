import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import WorksPage from './pages/Works';
import ResumePage from './pages/Resume';
import ContactPage from './pages/Contact';

const ROUTES_PATHS = () => (
    <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/works' element={ <WorksPage /> } />
        <Route path='/resume' element={ <ResumePage /> } />
        <Route path='/contact' element={ <ContactPage /> } />
    </Routes>
  
)

export default ROUTES_PATHS