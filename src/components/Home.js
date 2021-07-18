import { Row, Col, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom' 
import { useEffect } from 'react'

const Home = () => {

	useEffect(()=>{
		setTimeout(() => {
			document.getElementsByClassName('loader')[0].style.display = "none"
		}, 1000);
	}, [])

	return (
		<>
			<div className="loader">
				<img src="img/load.gif" alt="loading" />
			</div>
			<Row className="home-row">
				<Col >
					<Button> <Link to="/rooms" className="links"> Find rooms </Link> </Button>
				</Col>
				<Col  className="home-imgcol">
					<h1 className="home-heading"> Find your New Best Roomie!</h1>
					<img className="home-bannerimg" src="img/hrishikesh-nag-jTXnOAteD.jpg" alt="Home banner" />

				</Col>
				<Col >
					<p className="home-intro-p1"> Living with the right people beats living on your own any day. When you live with the right people, you don't just share your space - you share your life. </p>
					<p className="home-intro-p"> They become more than your flatmates, more than the people ahead of you in the queue for the bathroom. They're your friends. </p>
					<p className="home-intro-p"> Start your journey here! </p>
				</Col>
			</Row>
			<Row className="home-row benefit-row">
				<Col >
					<h3 className="benefit-head">Benefits</h3>
				</Col>
				<Col >
					<img className="benefit-img" src="img/family-icon.png" alt="Home for all" />
					<p className="benefit-headp">Home for all, Family, Friends, Solo</p>
					<p className="benefit-p">Rent a beautiful house for your family, or rent a bachelor friendly house with your friends, or rent a shared room or a private room for yourself. </p>
				</Col>
				<Col >
					<img className="benefit-img" src="img/safety-icon.png" alt="Safety" />
					<p className="benefit-headp">Safety</p>
					<p className="benefit-p">Your safety is our top priority. We have a team of moderators working 7 days a week to check ads and content</p>
				</Col>
				<Col>
					<img className="benefit-img" src="img/people-icon.png" alt="All about people" />
					<p className="benefit-headp">We're all about people</p>
					<p className="benefit-p">Everyone's idea of the perfect roommate is different, so search based on what's important to you.</p>
				</Col>
			</Row>
			<Row className="home-row">
				<Col>
					<Row>
						<Col>
							<h3 className="srch-head">Search by Popular Cities</h3>
						</Col>
					</Row>
					<Row className="srch-imgrow">
						<Col >
							<img className="srch-img" src="img/aniket-bhattacharya-vCv1OoxEpjc.jpg" alt="Search in Mumbai" />
							<p className="srch-ct">Mumbai</p>
							<p className="srch-txt">Starting from <span>Rs. 9100</span> /bed</p>
							<span className="srch-icocontr">
								<Link to="/rooms" className="links">
									<img className="srch-ico" src="img/search.png" alt="Search in Mumbai" />
								</Link></span>
						</Col>
						<Col >
							<img className="srch-img" src="img/hakan-nural-JwhkDV3sfi8.jpg" alt="Search in Delhi" />
							<p className="srch-ct">Delhi</p>
							<p className="srch-txt">Starting from <span>Rs. 8100</span> /bed</p>
							<span className="srch-icocontr">
								<Link to="/rooms" className="links">
									<img className="srch-ico" src="img/search.png" alt="Search in Delhi" />
								</Link></span>
						</Col>
						<Col>
							<img className="srch-img" src="img/arpit-batra-Ap4wCqDFJ6k.jpg" alt="Search in Bengaluru" />
							<p className="srch-ct">Bengaluru</p>
							<p className="srch-txt">Starting from <span>Rs. 8350</span> /bed</p>
							<span className="srch-icocontr">
								<Link to="/rooms" className="links">
									<img className="srch-ico" src="img/search.png" alt="Search in Bengaluru" />
								</Link></span>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row className="home-row subsc-row">
				<Col>
					<h4> Subscribe to our Newsletter</h4>
					<p>Get latest updates on rents and prices at the best neighbourhood.</p>
					<Form.Control type="email" placeholder="Email ID" />
					<Button variant="light">Submit</Button>
				</Col>
			</Row>
		</>
	);
}

export default Home;