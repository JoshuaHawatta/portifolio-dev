import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HamburgerDiv, NavBar } from './Styles'
import { FaHome, FaCode, FaFile, FaPaperPlane } from 'react-icons/fa'

const NAVBAR_JSX = () => {
	const [openMenu, setOpenMenu] = useState(true)

	const handleDisplayMenu = () => setOpenMenu(state => !state)

	return (
		<>
			<HamburgerDiv opened={openMenu} onClick={handleDisplayMenu}>
				<div />
				<div />
			</HamburgerDiv>

			<NavBar showNavBar={openMenu}>
				<div>
					<Link onClick={handleDisplayMenu} to='/'>
						<FaHome />
					</Link>
					<p>Home</p>
				</div>

				<div>
					<Link onClick={handleDisplayMenu} to='/jobs'>
						<FaCode />
					</Link>
					<p>Jobs</p>
				</div>

				<div>
					<Link onClick={handleDisplayMenu} to='/resume'>
						<FaFile />
					</Link>
					<p>Currículo</p>
				</div>

				<div>
					<Link onClick={handleDisplayMenu} to='/contact'>
						<FaPaperPlane />
					</Link>
					<p>Contato</p>
				</div>
			</NavBar>
		</>
	)
}

export default NAVBAR_JSX
