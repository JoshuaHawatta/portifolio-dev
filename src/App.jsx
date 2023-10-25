import { BrowserRouter as Router } from 'react-router-dom'
import ROUTES_PATHS from './Routes'
import HEADER_JSX from './components/Header'

const App = () => (
	<Router>
		<HEADER_JSX />
		<ROUTES_PATHS />
	</Router>
)

export default App
