import React from 'react'
import  { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import logo from "../images/logo.jpg"
import axios from "axios";
const Contact = () => {
   const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleSubmit = async(e) => {
       
    e.preventDefault();
    // Handle form submission logic here
    try {
      await axios.post("http://localhost:5000/send2", formData);

      // Email sent successfully
      alert("Appointment request submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting the form.");
    }

        // You can add your form submission logic here (e.g., sending data to a server)
      };
  return (
    <div className="contact-container" id='contact'>
    <div className="contact-image">
      <img src={logo} alt="Contact" className='img-fluid'/>
    </div>
    <div className="contact-form">
      <h2>Contact Us</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </div>
  </div>
  )
}

export default Contact
