import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

function Item() {
  const location = useLocation();
  const [apidata, setdata] = useState({});
  const data = location.state;

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((result) => result.json())
      .then((data1) => {
        // Corrected Comparison
        const result1 = data1.find((obj) => obj.pid === data);

        if (result1) {
          setdata(result1);
        } else {
          console.error("Product not found");
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [data]);

  return (
    <div>
      <br />
      <MDBCard>
        <center>
          <MDBCardImage
            src={apidata.pimage}
            position='top'
            alt='Product Image'
            style={{ width: "400px", height: "250px" }}
          />
        </center>
        <MDBCardBody>
          <MDBCardTitle>{apidata.pname}</MDBCardTitle>
          <MDBCardTitle>₹{apidata.pprice}</MDBCardTitle>
          <MDBCardTitle>{apidata.pcat}</MDBCardTitle>
          <MDBCardText>{apidata.pdesc}</MDBCardText>
          <MDBBtn href="#">Buy Now</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default Item;
