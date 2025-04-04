import React, { useEffect, useState } from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import Footer from './Footer';

export default function Mobile() {
  const [apidata, setdata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products").then((result) => {
      result.json().then((data) => {
        setdata(data);
      });
    });
  }, []);

  return (
    <div style={{
      background: "#e0e0e0",
      minHeight: "100vh",
      padding: "20px",
    }}>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        {
          apidata.map((i) =>
            i.pcat === "mobile" ? (
              <MDBCol key={i._id}>
                <MDBCard style={{ height: "100%" }} className="h-100 shadow-sm">
                  <center>
                    <MDBCardImage
                      src={i.pimage}
                      alt='...'
                      position='top'
                      style={{ width: "200px", height: "200px", margin: "10px" }}
                    />
                  </center>
                  <MDBCardBody className="d-flex flex-column">
                    <MDBCardTitle>{i.pname}</MDBCardTitle>
                    <MDBCardTitle>₹{i.pprice}</MDBCardTitle>
                    <MDBCardTitle>{i.pcat}</MDBCardTitle>
                    <MDBCardText className="flex-grow-1">
                      {i.pdesc}
                    </MDBCardText>
                    <div className="mt-auto">
                      <MDBBtn color="dark" style={{ width: "200px", marginBottom: "20px" }}>Description</MDBBtn>
                      &nbsp;&nbsp;
                      <MDBBtn color="primary" style={{ width: "200px" }}>Add To Cart</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ) : null
          )
        }
      </MDBRow>
      <Footer />
    </div>
  );
}
