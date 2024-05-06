import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const MyNavbar = () => {
  const token = localStorage.getItem("token");
  const useremail = localStorage.getItem("useremail");

  return (
    <header>
      <Navbar sticky="top">
        <Container>
          <Navbar.Brand>
            <Link to="/home">
              <img className="mainlogo" src={window.location.origin + "/img/mainlogo.png"} alt="Home Page" />
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            {token ? (
              <>
                <Nav.Link as={Link} to="/home">Home page</Nav.Link>
                <Nav.Link as={Link} to="/rooms">Find rooms</Nav.Link>
                <Nav.Link as={Link} to="/about">About us</Nav.Link>
              </>
            ) : (
             ""
            )}
          </Nav>
          {/* Assuming this is a logout link */}
          {!token && (
            <Nav>
              <Nav.Link href='/login'>Login</Nav.Link>
            </Nav>
				  )}
				  <Nav>
					  <Nav.Link>{useremail}</Nav.Link>
					  {
						  token && (
							<Nav.Link onClick={() => {
								localStorage.clear();
								window.location.href = "/login";
	  
	  
							}}>Logout</Nav.Link>
	  
						  )
				}

            </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default MyNavbar;
