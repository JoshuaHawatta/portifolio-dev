import { BrowserRouter as Router } from 'react-router-dom';
import ROUTES_PATHS from './Routes';
import Header from './components/Header';

const App = () => (
    <Router>
        <h6>P<span>o</span>r favor, me deixe em vertical!</h6>
        <Header />
        <ROUTES_PATHS />
    </Router>
)

export default App