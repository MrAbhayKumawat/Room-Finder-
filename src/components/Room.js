import data from "../data/data.json";
import Page100 from "./Page100";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";

const Room = () => {
  const { id } = useParams();
  const room = data.roomList.find((r) => r.id === id);
  const [mainImg, setMainImg] = useState(room.photo);

  useEffect(() => {
    setTimeout(() => {
      document.getElementsByClassName("loader")[0].style.display = "none";
    }, 1000);
  }, []);

  return (
    <>
      {room !== undefined && (
        <Row style={{ margin: "0" }}>
          <div className="loader">
            <img src={window.location.origin + "/img/load.gif"} alt="loading" />
          </div>
          <Col>
            <Row>
              <Col>
                <Button className="room-bkbtn" size="sm" variant="dark">
                  <Link to="/rooms" className="links">
                    Back to All Rooms
                  </Link>
                </Button>
              </Col>
            </Row>
            <Row className="room-div">
              <Col xs={12} lg={6}>
                <Row>
                  <Col>
                    <img
                      className="room-img"
                      src={window.location.origin + mainImg}
                      alt="room gallery"
                    />
                  </Col>
                </Row>
                <Row className="room-thbrow">
                  <Col md={2} xs={2}>
                    <img
                      className="room-thbimg"
                      src={window.location.origin + room.photo}
                      alt="room gallery thumb"
                      onClick={() => setMainImg(room.photo)}
                    />
                  </Col>
                  <Col md={2} xs={2}>
                    <img
                      className="room-thbimg"
                      src={window.location.origin + "/img/thumb1.jpg"}
                      alt="room gallery thumb"
                      onClick={() => setMainImg("/img/thumb1.jpg")}
                    />
                  </Col>
                  <Col md={2} xs={2}>
                    <img
                      className="room-thbimg"
                      src={window.location.origin + "/img/thumb2.jpg"}
                      alt="room gallery thumb"
                      onClick={() => setMainImg("/img/thumb2.jpg")}
                    />
                  </Col>
                  <Col md={2} xs={2}>
                    <img
                      className="room-thbimg"
                      src={window.location.origin + "/img/thumb3.jpg"}
                      alt="room gallery thumb"
                      onClick={() => setMainImg("/img/thumb3.jpg")}
                    />
                  </Col>
                  <Col md={2} xs={2}>
                    <img
                      className="room-thbimg"
                      src={window.location.origin + "/img/thumb4.jpg"}
                      alt="room gallery thumb"
                      onClick={() => setMainImg("/img/thumb4.jpg")}
                    />
                  </Col>
                  <Col md={2} xs={2}>
                    <img
                      className="room-thbimg"
                      src={window.location.origin + "/img/thumb5.jpg"}
                      alt="room gallery thumb"
                      onClick={() => setMainImg("/img/thumb5.jpg")}
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs={12} lg={6} className="room-txtcol">
                <p className="room-lochead">
                  <img
                    className="room-locimg"
                    src={window.location.origin + "/img/location.png"}
                    alt="at location"
                  />
                  {room.location.city}, {room.location.state}
                </p>
                <p className="room-txt">
                  The prime location provides residents with access to the very
                  best that this city has to offer. The property is situated
                  close to all the basic amenities. It is close to the main road
                  making it highly accessible.
                </p>
                <table className="room-tbl">
                  <tbody>
                    <tr>
                      <td className="room-tblhd">Address: </td>
                      <td>
                        {room.bhk}BHK for rent at {room.address}{" "}
                        {room.location.city}, {room.location.state}, India{" "}
                      </td>
                    </tr>
                    <tr>
                      <td className="room-tblhd">Rent: </td>
                      <td> Rs. {room.rentperbed} /bed</td>
                    </tr>
                    <tr>
                      <td className="room-tblhd">Type: </td>
                      <td> {room.type} </td>
                    </tr>
                  </tbody>
                </table>
                <p className="room-tblhd"> Amenities: </p>
                <ul className="room-ul1">
                  <li>
                    <img
                      className="room-ico"
                      src={window.location.origin + "/img/bedroom.png"}
                      alt="bedroom"
                    />
                    {room.amenities.bedroom} Bedrooms
                  </li>
                  <li>
                    <img
                      className="room-ico"
                      src={window.location.origin + "/img/bathroom.png"}
                      alt="bathroom"
                    />
                    {room.amenities.bathroom} Bathroom
                  </li>
                  {room.amenities.kitchen && (
                    <li>
                      <img
                        className="room-ico"
                        src={window.location.origin + "/img/kitchen.png"}
                        alt="kitchen"
                      />
                      Kitchen{" "}
                    </li>
                  )}
                  {room.amenities.parking && (
                    <li>
                      <img
                        className="room-ico park"
                        src={window.location.origin + "/img/parking.png"}
                        alt="parking"
                      />
                      Parking available{" "}
                    </li>
                  )}
                  {room.amenities.balcony && (
                    <li>
                      <img
                        className="room-ico"
                        src={window.location.origin + "/img/balcony.png"}
                        alt="balcony"
                      />
                      Balcony{" "}
                    </li>
                  )}
                </ul>
                <br />
                <br />
                <p className="room-reshd"> Contact: </p>
                <ul className="room-ul1">
                  <li>Name : {room.contact.name}</li>
                  <li>Phone : {room.contact.phone}</li>
                  <li>Emaial : {room.contact.email}</li>
                </ul>
                <br />
                <br />
                <p className="room-reshd">We are responsible for </p>
                <ul className="room-ul2">
                  <li>
                    <img
                      className="room-ico"
                      src={window.location.origin + "/img/task.png"}
                      alt="task"
                    />
                    Showing this house
                  </li>
                  <li>
                    <img
                      className="room-ico"
                      src={window.location.origin + "/img/task.png"}
                      alt="task"
                    />
                    Booking confirmation with owner
                  </li>
                  <li>
                    <img
                      className="room-ico"
                      src={window.location.origin + "/img/task.png"}
                      alt="task"
                    />
                    Creating rental agreement with owner{" "}
                  </li>
                  <li>
                    <img
                      className="room-ico"
                      src={window.location.origin + "/img/task.png"}
                      alt="task"
                    />
                    Post move-in services and maintenance at nominal prices
                    available{" "}
                  </li>
                  <li>
                    <img
                      className="room-ico"
                      src={window.location.origin + "/img/task.png"}
                      alt="task"
                    />
                    Returning deposit at the time of move-out{" "}
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
      {room === undefined && <Page100 />}
    </>
  );
};

export default Room;
