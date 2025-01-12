import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import './Upload.css'; // Add custom CSS

function Upload() {
  const [pid, setID] = useState('');
  const [pname, setName] = useState('');
  const [pprice, setPrice] = useState('');
  const [pdesc, setDesc] = useState('');
  const [pcat, setCat] = useState('');
  const [pimage, setImage] = useState(null);

  const handleApi = (e) => {
    e.preventDefault();
    const url = "http://localhost:4000/";
    const formData = new FormData();
    formData.append('pid', pid);
    formData.append('pname', pname);
    formData.append('pprice', parseInt(pprice));
    formData.append('pdesc', pdesc);
    formData.append('pcat', pcat);
    formData.append('pimage', pimage);
    axios.post(url, formData).then(result => {
      console.log(result.data);
      alert(result.data);
    });
  };

  return (
    <div
      style={{
        background: "linear-gradient(to right, #6a11cb, #2575fc)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px"
      }}
    >
      <Container
        style={{
          background: "#fff",
          borderRadius: "15px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
          padding: "30px",
          maxWidth: "500px",
          width: "100%"
        }}
      >
        <h3 className="text-center mb-4" style={{ color: "#333" }}>
          Upload Product
        </h3>
        <Form onSubmit={handleApi}>
          <Form.Group className="mb-3" controlId="formProductId">
            <Form.Label>Product ID</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Product ID"
              onChange={(e) => setID(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formProductName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formProductPrice">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Product Price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formProductDesc">
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Description"
              onChange={(e) => setDesc(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formProductCategory">
            <Form.Label>Product Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Category"
              onChange={(e) => setCat(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formProductImage">
            <Form.Label>Product Image</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </Form.Group>
          <Button variant="primary" type="submit" style={{ width: "100%" }}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Upload;
