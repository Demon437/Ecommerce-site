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

    const formData = { name, email, message };

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
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #f3e8ff, #ede9fe)', // light purple-pink gradient
        padding: '60px 20px',
      }}
    >
      <MDBContainer>
        <MDBRow className="justify-content-center align-items-center">
          <MDBCol md="6">
            <MDBCard
              className="shadow-lg border-0"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
              }}
            >
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
                  <MDBBtn
                    type="submit"
                    style={{
                      height: "50px",
                      width: "100%",
                      fontSize: "16px",
                      backgroundColor: "#8b5cf6",
                      border: "none",
                    }}
                  >
                    Send Message
                  </MDBBtn>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="6" className="text-center d-flex flex-column justify-content-center align-items-center mt-4 mt-md-0">
            <img
              src="https://i.pinimg.com/736x/76/4d/1b/764d1b00c7719b5791c2d7d692a47264.jpg"
              alt="Contact Image"
              className="rounded-circle mb-3"
              style={{
                width: "220px",
                height: "220px",
                border: "5px solid #8b5cf6",
                boxShadow: "0 4px 20px rgba(139, 92, 246, 0.4)"
              }}
            />
            <h4 style={{ color: "#6b21a8" }}>Get in Touch</h4>
            <p style={{ maxWidth: "400px", color: "#4b5563" }}>
              We value your feedback and are happy to answer any questions you may have. Connect with us anytime!
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Contact;
