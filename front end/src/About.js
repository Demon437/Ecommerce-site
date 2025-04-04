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
    <MDBContainer className="py-5">
      <MDBRow>
        <MDBCol md="6">
          <MDBCard className="shadow-0 border rounded-3">
            <MDBCardImage src="https://images-platform.99static.com//ZUU0DJkgfiPJzVKTgSEaii6H9G8=/5x0:1705x1700/fit-in/590x590/99designs-contests-attachments/111/111213/attachment_111213383" alt="About Us Image" position="top" />
            <MDBCardBody>
              <MDBCardTitle className="mb-3">About Our E-Commerce Store</MDBCardTitle>
              <MDBCardText>
                Welcome to our e-commerce store! We are dedicated to providing you with the best online shopping experience.
                From the latest gadgets to everyday essentials, we aim to offer a wide range of products at competitive prices.
                Our mission is to make your shopping journey simple, enjoyable, and seamless.
              </MDBCardText>
              <MDBCardText>
                At our core, we believe in customer satisfaction, fast delivery, and top-notch service.
                We strive to bring you high-quality products that meet your expectations.
              </MDBCardText>
              <MDBBtn href="/" className="custom-shop-btn">Shop Now</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="6" className="d-flex flex-column justify-content-center align-items-center">
          <img src="https://4.imimg.com/data4/SP/FR/MY-27587645/e-commerce-website-design-services-500x500.jpg" alt="Team Image" className="rounded-circle" style={{ width: "200px", height: "150px" }} />
          <MDBCardTitle className="mt-3">Meet Our Team</MDBCardTitle>
          <MDBCardText className="text-center">
            Our team of dedicated professionals is here to ensure you have the best shopping experience.
            We are passionate about providing top-notch customer service and delivering high-quality products.
          </MDBCardText>
        </MDBCol>
      </MDBRow>

      <style>
        {`
          .custom-shop-btn {
            height: 50px; /* Fixed height */
            width: 100%; /* Full width */
            font-size: 16px; /* Adjust font size */
            line-height: 1.5;
          }
        `}
      </style>
    </MDBContainer>
  );
}

export default About;
