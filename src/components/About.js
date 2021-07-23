import { Col, Row, Form, InputGroup, Button } from 'react-bootstrap';
import { useEffect } from 'react'

const About = () => {

	useEffect(()=>{
		setTimeout(() => {
			document.getElementsByClassName('loader')[0].style.display = "none"
		}, 700);
	}, [])

	return (
		<>
			<div className="loader">
				<img src="img/load.gif" alt="loading" />
			</div>
			<Row className="about-row1">
				<Col lg={6} xs={12}>
					<Row>
						<Col>
							<h3>Our Dream</h3>
							<h1 className="about-h1-1">Easy living </h1>
							<h1 className="about-h1-2"> for Everyone.</h1>
						</Col>
					</Row>
					<Row>
						<Col>
							<p className="about-p">The philosophy behind My-New-Roomie grew to create an inclusive living environment where youth have choices but are also required to take ownership. Tenants would have options so that they could choose according to their budget and personal preferences. The burden on owners would get reduced - to look for responsible tenants, do background checks and chase after tenants to pay in their dues. In the future, we believe My-New-Roomie as a platform will grow in many other directions, with housing as the core focus.</p>
						</Col>
					</Row>
				</Col>
				<Col lg={6} xs={12}>
					<img className="about-img" src={window.location.origin + "/img/parth-duarah-Ns36Qxt8lmY.jpg"} alt="About us" />
				</Col>
			</Row>
			<br />
			<Row className="about-row2">
				<Col lg={6} xs={12}>
					<h3>Get in Touch! Submit a request.</h3>
					<br />
					<form className="about-form">
						<Form.Group className="mb-3" >
							<Form.Label>Let us do the searching for you.*</Form.Label>
							<Form.Control type="text" placeholder="City name" />
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Rent</Form.Label>  <br />
							<Form.Check inline label="5k-10k" name="rent" type="radio" value="5_10" />
							<Form.Check inline label="10k-15k" name="rent" type="radio" value="10_15" />
							<Form.Check inline label="15k+" name="rent" type="radio" value="15kp" />
						</Form.Group>
						<Form.Group className="mb-3" >
							<Form.Control type="email" placeholder="Email ID" />
						</Form.Group>
						<Form.Group className="mb-3" >
							<InputGroup className="mb-3">
								<InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
								<Form.Control placeholder="Phone Number (10-digit)" aria-describedby="basic-addon1" />
							</InputGroup>
						</Form.Group>
						<br />
						<Button>Submit Request</Button>
					</form>
				</Col>
				<Col className="getInTouch-imgcol" lg={6} xs={12}>
					<img className="getInTouch-img" src={window.location.origin + "/img/Get in touch-rafiki.png"} alt="Get In Touch img" />
				</Col>
			</Row>
		</>
	);
}

export default About;