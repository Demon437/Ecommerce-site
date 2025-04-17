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
import { useNavigate } from 'react-router-dom';

export default function Electronics() {
  const navigate = useNavigate();
  const [apidata, setdata] = useState([]);


  function singleItem(pid) { navigate("/item", { state: pid }) }

  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then((result) => result.json())
      .then((data) => setdata(data));
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
        {apidata.map((i) =>
          i.pcat === 'electronics' ? (
            <MDBCol key={i._id}>
              <MDBCard style={{ height: '100%' }} className='h-100 shadow-sm'>
                <center>
                  <MDBCardImage
                    src={i.pimage}
                    alt='...'
                    position='top'
                    style={{ width: '200px', height: '200px', margin: '10px' }}
                  />
                </center>
                <MDBCardBody className='d-flex flex-column'>
                  <MDBCardTitle>{i.pname}</MDBCardTitle>
                  <MDBCardTitle>₹{i.pprice}</MDBCardTitle>
                  <MDBCardTitle>{i.pcat}</MDBCardTitle>
                  <MDBCardText className='flex-grow-1'>{i.pdesc}</MDBCardText>
                  <div className="d-flex justify-content-between mb-3" style={{ gap: '10px', flexWrap: 'wrap' }}>
                    <MDBBtn
                      color="dark"
                      onClick={() => singleItem(i.pid)}
                      style={{ flex: 1, minWidth: '150px' }}>
                      Description
                    </MDBBtn>

                    <MDBBtn
                      color="primary"
                      onClick={() => addCart(i.pid, i.pname, i.pprice, i.pimage)}
                      style={{ flex: 1, minWidth: '150px' }}>
                      Add To Cart
                    </MDBBtn>
                  </div>

                  <MDBBtn
                    color="warning"
                    onClick={() => navigate("/payment", { state: { pid: i.pid, pname: i.pname, pprice: i.pprice } })}
                    style={{ width: "100%", marginBottom: "10px" }}>
                    Buy Now
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ) : null
        )}
      </MDBRow>
    </div>
  );
}
