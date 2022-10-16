import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';

const ROUTES_PATHS = () => (
    <Routes>
        <Route path='/' element={ <HomePage /> } />
    </Routes>
  
)

export default ROUTES_PATHS