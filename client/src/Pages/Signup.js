import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import Navbar from '../Components/Navbar';

const Signup = () => {
  const [formData, setFormData] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  return (
    <div>
    <Navbar/>
    <Container className="container d-flex flex-column align-items-center justify-content-center fullscreen">
      <h1 className="mb-4">MIND-LINK</h1>
      <Form style={{ width: 300 }}>
      <Form.Group>
          <Form.Label htmlFor="firstName">First Name</Form.Label>
          <Form.Control
            id="firstName"
            type="text"
            name="firstName"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
        <Form.Label htmlFor="lastName">Last Name</Form.Label>
          <Form.Control
            id="lastName"
            type="text"
            name="lastName"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">Email Address</Form.Label>
          <Form.Control
            id="email"
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="aboutYou">About You</Form.Label>
          <Form.Control
            id="aboutYou"
            type="text"
            placeholder="Tell us what you want people to know about you as an artist"
            name="aboutYou"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-center">
          <Button type="submit">Create Profile</Button>
        </Form.Group>
      </Form>
      <Link className="mt-4" to="/login">
        Already Have an Account? Click here for Login.
      </Link>
    </Container>
    </div>
  );
};

export default Signup
