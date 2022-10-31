import { BrowserRouter as Router } from 'react-router-dom';
import ROUTES_PATHS from './Routes';
import Header from './components/Header';

const App = () => (
    <Router>
        <Header />
        <ROUTES_PATHS />
    </Router>
)

export default App