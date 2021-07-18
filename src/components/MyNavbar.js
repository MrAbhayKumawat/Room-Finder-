import { Link } from 'react-router-dom'
import { Navbar, Container, Nav   } from 'react-bootstrap'

const MyNavbar = () => {
	return (
		<header>
			<Navbar sticky="top">
				<Container>
					<Navbar.Brand> <Link to="/">
						<img className="mainlogo" src={window.location.origin + "/img/mainlogo.png"} 
						alt="Home Page"/>	
						</Link>
					</Navbar.Brand>
					<Nav className="me-auto">
						<Nav><Link to="/"> Home page </Link></Nav>
						<Nav><Link to="/rooms"> Find rooms </Link></Nav>
						<Nav><Link to="/about"> About us </Link></Nav>
					</Nav>
					<Nav>
						<Nav.Link >Login </Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</header>
	);
}

export default MyNavbar;