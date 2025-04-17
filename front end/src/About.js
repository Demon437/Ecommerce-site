import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

function About() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #f3e8ff, #ede9fe)', // same as contact page
        padding: '60px 20px',
      }}
    >
      <MDBContainer>
        <MDBRow className="align-items-center">
          <MDBCol md="6">
            <MDBCard
              className="shadow-lg border-0 mb-4"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
              }}
            >
              <MDBCardImage
                src="https://images-platform.99static.com//ZUU0DJkgfiPJzVKTgSEaii6H9G8=/5x0:1705x1700/fit-in/590x590/99designs-contests-attachments/111/111213/attachment_111213383"
                alt="About Us Image"
                position="top"
                style={{
                  borderTopLeftRadius: '20px',
                  borderTopRightRadius: '20px',
                  maxHeight: '300px',
                  objectFit: 'cover',
                }}
              />
              <MDBCardBody>
                <MDBCardTitle className="mb-3">About Our E-Commerce Store</MDBCardTitle>
                <MDBCardText>
                  Welcome to our e-commerce store! We are dedicated to providing you with the best online shopping experience.
                  From the latest gadgets to everyday essentials, we aim to offer a wide range of products at competitive prices.
                </MDBCardText>
                <MDBCardText>
                  At our core, we believe in customer satisfaction, fast delivery, and top-notch service.
                  We strive to bring you high-quality products that meet your expectations.
                </MDBCardText>
                <MDBBtn
                  href="/"
                  style={{
                    height: "50px",
                    width: "100%",
                    fontSize: "16px",
                    backgroundColor: "#8b5cf6",
                    border: "none",
                  }}
                >
                  Shop Now
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="6" className="text-center d-flex flex-column align-items-center">
            <img
              src="https://4.imimg.com/data4/SP/FR/MY-27587645/e-commerce-website-design-services-500x500.jpg"
              alt="Team Image"
              className="rounded-circle mb-3"
              style={{
                width: "220px",
                height: "220px",
                border: "5px solid #8b5cf6",
                boxShadow: "0 4px 20px rgba(139, 92, 246, 0.4)",
                objectFit: 'cover'
              }}
            />
            <MDBCardTitle style={{ color: "#6b21a8" }}>Meet Our Team</MDBCardTitle>
            <MDBCardText style={{ maxWidth: "400px", color: "#4b5563" }} className="text-center">
              Our team of dedicated professionals is here to ensure you have the best shopping experience.
              We are passionate about providing top-notch customer service and delivering high-quality products.
            </MDBCardText>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default About;
