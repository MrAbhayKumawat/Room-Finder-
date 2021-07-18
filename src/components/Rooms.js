import data from '../data/data.json'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'

// Card component for each image 
const Card = (props)=>{
	return (
		<Col md="4">
			<Link to={"/rooms/"+props.id} target="_about" className="links">
				<img className="roomsimg" src={window.location.origin + props.photo} alt="room gallery"/>
				<p className="roomsloc">{props.city}, {props.state}</p> </Link>
			<p className="roomssm">{props.bhk}BHK for rent at {props.address } {props.city}, {props.state}, India </p>
			<p> Rent - <span className="roomsbld">Rs. {props.rentperbed}/bed</span></p>
			<p className="roomssm"> Type - {props.type}</p>
		</Col>
	);
}

const Rooms = ()=>{

	useEffect(()=>{
		setTimeout(() => {
			document.getElementsByClassName('loader')[0].style.display = "none"
		}, 1000);
	}, [])
	
	const roomList = data.roomList
	roomList.sort((a,b) => a.rentperbed-b.rentperbed)
	const [newList, setNewList] = useState(roomList)

	const maxRent = roomList.reduce( (max, room) =>  
		max<room.rentperbed ? room.rentperbed : max
	, 0 );
	const minRent = roomList.reduce( (min, room) =>  
		min>room.rentperbed ? room.rentperbed : min
	, 20000 );	

	const [range, setRange] = useState(maxRent)

	// updateList fn called any of the filter inputs are changed 
	const updateList = (e)=>{
		let temList = []
		
		// updating rooms list based on location
		const locationVal = document.getElementById('location').value;
		if (locationVal === "All") {
			temList = [...roomList]
		} else {
			temList = roomList.filter((r)=>{
				const rLocation = r.location.city+", "+r.location.state
				return rLocation === locationVal
			})
		}

		// updating rooms list based on rent price range
		const rentVal = Number(document.getElementById('rent').value)
		temList = temList.filter((r)=>{
			return r.rentperbed <= rentVal
		})

		// updating rooms list based on No. of BHK
		let checkedBhk = []
		document.getElementsByName('bhk').forEach((e)=>{ 
			if (e.checked===true) checkedBhk.push(Number(e.value)) 
		})
		temList = temList.filter((r)=>{
			return checkedBhk.includes(r.bhk)
		})
		
		// updating rooms list based on type of room [For Family, For Girls, For Boys]
		let checkedType = []
		document.getElementsByName('type').forEach((e)=>{ 
			if (e.checked===true) checkedType.push(e.value)
		})
		temList = temList.filter((r)=>{
			return checkedType.includes(r.type)
		})

		// updating rooms list based on amenities, if true then each room of the list must have that amenity
		let checkedAmenity = []
		document.getElementsByName('amenity').forEach((e)=>{ 
			if (e.checked===true) checkedAmenity.push(e.value)
		})
		temList = temList.filter((r)=>{
			let fl = true;
			for (e in checkedAmenity) {  
				if (r.amenities[checkedAmenity[e]]===false) { 
					fl = false;
					break;
				}
			}
			return fl
		})

		// sorting the list again based on value of sortby
		if (document.getElementById('sortby').value === "Price (low-high)")
			temList.sort((a,b) => a.rentperbed-b.rentperbed)
		else 
			temList.sort((a,b) => b.rentperbed-a.rentperbed)

		setNewList(temList);
	}

	// sortList fn called when sortby value is changed
	const sortList = () => {
		let temList = [...newList]
		if (document.getElementById('sortby').value === "Price (low-high)")
			temList.sort((a,b) => a.rentperbed-b.rentperbed)
		else 
			temList.sort((a,b) => b.rentperbed-a.rentperbed)

		setNewList(temList);
	}

	// to track the value of range input and display it
	const updateRange = (e) => {
		setRange(e.target.value)
	}

	// to reset the filter inputs to default and update the rooms list to all.
	const clearFltr = () => {

		setRange(maxRent)
		document.getElementById('rent').value = 15000
		
		document.getElementById('location').value = "All"

		document.getElementsByName('bhk').forEach( (e)=>{ e.checked=true })

		document.getElementsByName('type').forEach( (e)=>{ e.checked=true })

		document.getElementsByName('amenity').forEach( (e)=>{ e.checked=false })

		setNewList(roomList);
	}

	return (
		<>
			<div className="loader">
				<img src="img/load.gif" alt="loading" />
			</div>
			<Row className="rooms-div">
				<Col>
					<Row className="rooms-hdrow">
						<Col>
							<h1 className="rooms-hdtxt">Find your Next Favorite Room </h1>
						</Col>
					</Row>
					<Row>
						<Col md={3} className="fltrcol">							
							<h4>Sort By</h4>	
							<Form.Group className="mb-3">
								<select id="sortby" name="sortby" className="fltrslt"
								onChange={sortList} >
									<option value="Price (low-high)">Price (low-high)</option>
									<option value="Price (high-low)">Price (high-low)</option>
								</select>
							</Form.Group>
							<h4>Filters</h4>
							<Form.Group className="mb-3">
								<Form.Label className="fltrhds">Rent per Bed: {range}</Form.Label>
								<div className="rentdiv">
									<div>{minRent}</div> <div>{maxRent}</div>
								</div>  
								<input id="rent" name="rent" type="range" className="fltrrng" 
									min={minRent} max={maxRent} defaultValue={maxRent} 
									onMouseUp={updateList} onChange={updateRange} />
							</Form.Group>	
							<form onChange={ updateList } >
								<Form.Group className="mb-3">
									<Form.Label className="fltrhds">Location: </Form.Label>  <br />
									<select id="location" name="location" className="fltrslt" >
										<option value="All">All</option>
										<option value="Mumbai, Maharashtra">Mumbai, Maharashtra</option>
										<option value="Delhi, Delhi">Delhi, Delhi</option>
										<option value="Bangalore, Karnataka">Bangalore, Karnataka</option>
										<option value="Hyderabad, Andhra Pradesh">Hyderabad, Andhra Pradesh</option>
										<option value="Chennai, Tamil Nadu">Chennai, Tamil Nadu</option>
										<option value="Kolkata, West Bengal">Kolkata, West Bengal</option>
										<option value="Ahmedabad, Gujarat">Ahmedabad, Gujarat</option>
									</select>
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label className="fltrhds">BHK: </Form.Label>  <br />
									<Form.Check label="3 BHK" name="bhk" type="checkbox" value="3"  defaultChecked="true" />
									<Form.Check label="2 BHK" name="bhk" type="checkbox" value="2"  defaultChecked="true" />
									<Form.Check label="1 BHK" name="bhk" type="checkbox" value="1"  defaultChecked="true" />
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label className="fltrhds">Type: </Form.Label>  <br />
									<Form.Check label="For Family" name="type" type="checkbox" value="For Family"  defaultChecked="true" />
									<Form.Check label="For Girls" name="type" type="checkbox" value="For Girls"  defaultChecked="true" />
									<Form.Check label="For Boys" name="type" type="checkbox" value="For Boys"  defaultChecked="true" />
								</Form.Group>						
								<Form.Group className="mb-3">
									<Form.Label className="fltrhds">Amenities: </Form.Label>  <br />
									<Form.Check label="Kitchen" name="amenity" type="checkbox" value="Kitchen"  />
									<Form.Check label="Parking" name="amenity" type="checkbox" value="Parking"  />
									<Form.Check label="Balcony" name="amenity" type="checkbox" value="Balcony"  />
								</Form.Group>
							</form>		
							<Button variant="outline-danger" size="sm" onClick={clearFltr}>clear filters</Button>
						</Col>
						
						<Col md={9} className="rooms-col">
							<Row>
							{
								newList.map((room)=>{
									let {id, photo, location:{city,state}, address, bhk, rentperbed, type} = room;
									return <Card key={id} id={id} photo={photo} city={city} state={state} 
									address={address} bhk={bhk} rentperbed={rentperbed} type={type} />						
								})
							}
							</Row>
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	);
}

export default Rooms;