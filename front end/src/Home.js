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
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate();
  const [apidata, setdata] = useState([]);

  function singleItem(pid) { navigate("/item", { state: pid }) }

  useEffect(() => {
    fetch("http://localhost:4000/products").then((result) => {
      result.json().then((data) => {
        setdata(data);
      });
    });
  }, []);

  function addCart(pid, pname, pprice, pimage) {
    const newProduct = { pid, pname, pprice, pimage };
    const existingCart = JSON.parse(localStorage.getItem('cartData')) || [];
    const updatedCart = [...existingCart, newProduct];
    localStorage.setItem('cartData', JSON.stringify(updatedCart));
    alert("Product added to cart successfully!");
  }

  return (
    <div style={{
      background: "#e0e0e0",
      minHeight: "100vh",
      padding: "20px",
    }}>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        {
          apidata.map((i) =>
            <MDBCol key={i.pid}>
              <MDBCard style={{ height: "100%" }} className="h-100 shadow-sm">
                <center>
                  <MDBCardImage
                    src={i.pimage}
                    alt={i.pname}
                    position='top'
                    style={{
                      width: "200px",
                      height: "200px",
                      margin: "10px"
                    }}
                  />
                </center>
                <MDBCardBody className="d-flex flex-column justify-content-between ">
                  <div>
                    <MDBCardTitle>{i.pname}</MDBCardTitle>
                    <MDBCardTitle>₹{i.pprice}</MDBCardTitle>
                    <MDBCardText>{i.pdesc}</MDBCardText>
                  </div>
                  <div>
                    <MDBBtn color="dark" onClick={() => singleItem(i.pid)} style={{ width: "200px", marginBottom: "20px" }}>Description</MDBBtn>
                    &nbsp;&nbsp;
                    <MDBBtn color="primary" onClick={() => addCart(i.pid, i.pname, i.pprice, i.pimage)} style={{ width: "200px" }} >Add To Cart</MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          )
        }
      </MDBRow>
      <Footer />
    </div>
  );
}
