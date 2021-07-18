import { Link } from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap'

const Page100 = () => {
	return (
		<>
			<Row className="pg100-row">
				<Col>
					<br/>
					<h1>404</h1>
					<br/>
					<h3>Page Not Found!</h3>
					<br/>
					<br/>
					<Button><Link to="/" className="links"> Home page </Link></Button>
				</Col>
			</Row>
		</>
	);
}

export default Page100;