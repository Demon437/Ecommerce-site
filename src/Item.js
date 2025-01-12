import { useEffect,useState } from "react"
import { useLocation } from "react-router-dom"
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
function Item()
{
    const location=useLocation()
     const [apidata,setdata]=useState({}) 
   const data=location.state
       useEffect(()=>{
            fetch("http://localhost:4000/"+data).then((result)=>
            {
                 result.json().then((data1)=>{
                    var result1= data1.find((obj)=>{
                        return obj.pid=data
                     })
           //  console.log(result1)
                  setdata(result1)
                 })
            })
        },[])
      return(
        <div>
            <br></br>
            <MDBCard>
      <center><MDBCardImage src={apidata.pimage} position='top' alt='...' 
      style={{width:"400px",height:"250px"}}/></center>
      <MDBCardBody>
        <MDBCardTitle>{apidata.pname}</MDBCardTitle>
        <MDBCardTitle>{apidata.pprice}</MDBCardTitle>
        <MDBCardTitle>{apidata.pcat}</MDBCardTitle>
        <MDBCardText>
         {apidata.pdesc}
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
        </div>
      )
}
export default Item