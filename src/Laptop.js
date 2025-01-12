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

export default function Laptop() {
   const [apidata,setdata]=useState([])
  useEffect(()=>{
      fetch("http://localhost:4000/").then((result)=>
      {
           result.json().then((data)=>{
            setdata(data)
           })
      })
  },[])
  return (
    <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{padding:"20px"}}>
       {
          apidata.map((i)=>
            i.pcat=="laptop"?
            <MDBCol>
            <MDBCard >
              <center>
              <MDBCardImage
                src={i.pimage}
                alt='...'
                position='top'
                style={{width:"200px",height:"200px",margin:"10px"}}
              />
              </center>
              <MDBCardBody>
                <MDBCardTitle>{i.pname}</MDBCardTitle>
                <MDBCardTitle>{i.pprice}</MDBCardTitle>
                <MDBCardTitle>{i.pcat}</MDBCardTitle>
                <MDBCardText>
                 {i.pdesc}
                </MDBCardText>
                <MDBBtn>Decription</MDBBtn>
                &nbsp;&nbsp;<MDBBtn>Add To Cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>:null
          )
       }
      
     
      
    </MDBRow>
  );
}