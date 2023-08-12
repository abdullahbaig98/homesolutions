import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from "axios";
const Booking = ({ show, onHide }) => {
    const [formData, setFormData] = useState({
        email: '',
        phoneNumber: '',
        address: '',
        selectedService: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleFormSubmit = async(e) => {
       
    e.preventDefault();
    // Handle form submission logic here
    try {
      await axios.post("http://localhost:5000/send", formData);

      // Email sent successfully
      alert("mail request submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting the form.");
    }

         // Close the modal after submission
      };
  return (
    <div>
      <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Book A Service</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter phone number"
            />
          </Form.Group>

          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter address"
            />
          </Form.Group>

          <Form.Group controlId="selectedService">
            <Form.Label>Services</Form.Label>
            <Form.Control
              as="select"
              name="selectedService"
              value={formData.selectedService}
              onChange={handleInputChange}
            >
              <option value="">Select a service</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Wood Work">Wood Work</option>
              <option value="Cleaning & Janitorial">Cleaning & Janitorial</option>
              <option value="Electrician">Electrician</option>
              <option value="HVAC">HVAC </option>
              <option value="Painting">Painting</option>
              <option value="Welding">Welding</option>
            </Form.Control>
          </Form.Group>
  <p>What do you Want?</p>
  <Form.Control
              as="textarea"
            
              placeholder="Enter "
            />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default Booking
