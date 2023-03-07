import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import JobsPage from './pages/Works'
import ResumePage from './pages/Resume'
import ContactPage from './pages/Contact'

const ROUTES_PATHS = () => (
	<Routes>
		<Route path='/' element={<HomePage />} />
		<Route path='/jobs' element={<JobsPage />} />
		<Route path='/resume' element={<ResumePage />} />
		<Route path='/contact' element={<ContactPage />} />
		<Route path='*' element={<HomePage />} />
	</Routes>
)

export default ROUTES_PATHS
