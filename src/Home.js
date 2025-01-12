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
import axios from 'axios';

export default function Home() {
  const navigate = useNavigate();
  const [apidata, setdata] = useState([]);
  
  function singleItem(pid) {
    navigate("/item", { state: pid });
  }

  useEffect(() => {
    fetch("http://localhost:4000/").then((result) => {
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
    <div>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{ padding: "20px" }}>
        {
          apidata.map((i) =>
            <MDBCol key={i.pid}>
              <MDBCard style={{ height: "100%" }} className="h-100">
                <center>
                  <MDBCardImage
                    src={i.pimage}
                    alt='...'
                    position='top'
                    style={{ width: "200px", height: "200px", margin: "10px" }}
                  />
                </center>
                <MDBCardBody className="d-flex flex-column justify-content-between">
                  <div>
                    <MDBCardTitle>{i.pname}</MDBCardTitle>
                    <MDBCardTitle>{i.pprice}</MDBCardTitle>
                    <MDBCardText>
                      {i.pdesc}
                    </MDBCardText>
                  </div>
                  <div>
                    <MDBBtn style={{ height: "40px", width: "120px" }} onClick={() => singleItem(i.pid)}>Description</MDBBtn>
                    &nbsp;&nbsp;
                    <MDBBtn style={{ height: "40px", width: "200px" }} onClick={() => addCart(i.pid, i.pname, i.pprice, i.pimage)}>Add To Cart</MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          )
        }
      </MDBRow>
      <Footer></Footer>
    </div>
  );
}
