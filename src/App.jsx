import { BrowserRouter as Router } from 'react-router-dom';
import ROUTES_PATHS from './Routes';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
    <Router>
        <Header />
        <ROUTES_PATHS />
        <Footer />
    </Router>
)

export default App