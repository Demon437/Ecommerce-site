import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBInput
} from 'mdb-react-ui-kit';
import axios from 'axios';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      message,
    };

    axios.post('http://localhost:4000/send-email', formData)
      .then(response => {
        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch(error => {
        alert('There was an error sending the message.');
        console.error(error);
      });
  };

  return (
    <MDBContainer className="py-5">
      <MDBRow>
        <MDBCol md="6">
          <MDBCard className="shadow-0 border rounded-3">
            <MDBCardBody>
              <MDBCardTitle className="mb-3">Contact Us</MDBCardTitle>
              <MDBCardText>
                If you have any questions, concerns, or suggestions, please feel free to reach out to us. We're here to help!
              </MDBCardText>

              <form onSubmit={handleSubmit}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Name"
                  id="form1"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Your Name"
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="form2"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Message"
                  id="form3"
                  type="textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  placeholder="Your Message"
                  required
                />
                <MDBBtn type="submit" style={{ height: "50px", width: "100%", fontSize: "16px" }}>
                  Send Message
                </MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md="6" className="d-flex flex-column justify-content-center align-items-center">
          <img
            src="https://i.pinimg.com/736x/76/4d/1b/764d1b00c7719b5791c2d7d692a47264.jpg"
            alt="Contact Image"
            className="rounded-circle"
            style={{ width: "200px", height: "200px" }}
          />
          <MDBCardTitle className="mt-3">Get in Touch</MDBCardTitle>
          <MDBCardText className="text-center">
            We value your feedback and are happy to answer any questions you may have. Connect with us anytime!
          </MDBCardText>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Contact;
