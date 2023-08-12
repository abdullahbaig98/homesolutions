import React,{useState} from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
const Loginreg = ({ show, onHide }) => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleRegister = async(e) => {
        // Here you can handle the login action
        console.log("Logging in with:", loginData);
        
        e.preventDefault();
        try {
          const response = await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({loginData}),
          });
        
          const data = await response.json();
          console.log(data.message);
          if(response.status===400){
            alert("Email already Exist")
          }
          else{
            alert("Register successfully")
            onHide();
          }
        
        } catch (error) {
          console.error('Error:', error);
          
        }
       
      
        // You can perform authentication checks, API calls, etc.
         // Close the modal after login
      };
      const handleLogin = async(e) => {
        // Here you can handle the login action
        console.log("Logging in with:", loginData);
        
        e.preventDefault();
        try {
          const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({loginData}),
          });
          const data = await response.json();
          console.log(data.message);
          if(response.status===400){
            alert("Email already Exist")
          }
          else{
            alert("Login successfully")
            onHide();
          }
        } catch (error) {
          console.error('Error:', error);
        }
        
        // You can perform authentication checks, API calls, etc.
         // Close the modal after login
      };

      const lign = (e) => {
        document.getElementById("login").style.display="block";
        document.getElementById("register").style.display="none";

      }
      const reg = (e) => {
        document.getElementById("login").style.display="none";
        document.getElementById("register").style.display="block";

      }
  return (
    <div>
      <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Login/Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span style={{display:'flex', alignItems:"center",justifyContent:"center", gap:'20px'}}>
      <Button variant="primary" onClick={lign} >
            Login
          </Button>
          <Button variant="primary" onClick={reg} >
            Register
          </Button>
          </span>
      <Form onSubmit={handleLogin} id='login'>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleInputChange}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleInputChange}
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <Form onSubmit={handleRegister} style={{display:'none'}} id='register'>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleInputChange}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleInputChange}
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleInputChange}
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
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

export default Loginreg
