import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import welding from "../images/welder.jpg";
import plumber from "../images/plumber.jpeg"
import wood from "../images/wood.jpg";
import cleaning from "../images/cleaning.jpeg";
import electrician from "../images/electrician.jpeg";
import hvac from "../images/HVAC.jpeg";
import painter from "../images/painter.jpg";
import Booking from './booking';
const Services = () => {
    const services = [
        { image: welding, title: 'Welding', description: 'Welder for welding service' },
        { image: plumber, title: 'Plumber', description: 'Plumber for Plumbing service' },
        { image: wood, title: 'Wood Work', description: 'Carpenter for wood work service' },
        { image: cleaning, title: 'Cleaning And Janitorial', description: 'Cleaning & Janitorial Service' },
        { image: electrician, title: 'Electrician', description: 'Electrician for electrician service' },
        { image: hvac, title: 'HVAC', description: 'Heating Ventilating and Cooling' },
        { image: painter, title: 'Painting', description: 'Painter for Painting service' },
      ];
      const [modalShow, setModalShow] = useState(false);

      const handleModalOpen = () => {
        setModalShow(true);
      };
    
      const handleModalClose = () => {
        setModalShow(false);
      };
    
    
  return (
    <div style={{backgroundColor:"whitesmoke",padding:"2%"}} id='services'>
      <h1>Our Services</h1>
      <Row>
      {services.map((service, index) => (
        <Col key={index} md={3}>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={service.image} height={200} alt={`${service.title} Image`} />
            <Card.Body>
              <Card.Title>{service.title}</Card.Title>
              <Card.Text>{service.description}</Card.Text>
              <Button variant="primary" onClick={handleModalOpen}>Book Now</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    <Booking show={modalShow} onHide={handleModalClose} />
    </div>
  )
}

export default Services
