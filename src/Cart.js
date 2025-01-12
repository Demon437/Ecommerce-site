import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cart() {
  const [apidata, setData] = useState(() => {
    const storedData = localStorage.getItem('cartData');
    return storedData ? JSON.parse(storedData) : [];
  });
  const [tot, setTot] = useState(0);

  useEffect(() => {
    const total = apidata.reduce((acc, obj) => acc + obj.pprice, 0);
    setTot(total);
    localStorage.setItem('cartData', JSON.stringify(apidata));
  }, [apidata]);

  const removeItem = (indexToRemove) => {
    const updatedData = apidata.filter((_, index) => index !== indexToRemove);
    setData(updatedData);
    localStorage.setItem('cartData', JSON.stringify(updatedData));
  };

  return (
    <div
      style={{
        background: "linear-gradient(to right, #6a11cb, #2575fc)",
        minHeight: "100vh",
        padding: "20px",
        color: "#fff",
      }}
    >
      <Container>
        <h1 className="text-center mb-4">Your Cart</h1>
        <Row>
          {apidata.map((item, index) => (
            <Col xs={12} md={4} className="mb-4" key={`${item.pid}-${index}`}>
              <Card style={{ width: '100%', borderRadius: '10px' }}>
                <Card.Img
                  variant="top"
                  src={item.pimage}
                  style={{
                    height: "200px",
                    objectFit: "contain",
                    padding: "10px",
                  }}
                />
                <Card.Body>
                  <Card.Title>{item.pname}</Card.Title>
                  <Card.Text>Price: ₹{item.pprice}</Card.Text>
                  <div className="d-flex justify-content-center">
                    <Button
                      variant="success"
                      className="me-2"
                      style={{ width: "48%" }}
                    >
                      Buy Now
                    </Button>
                    <Button
                      variant="danger"
                      style={{ width: "48%" }}
                      onClick={() => removeItem(index)}
                    >
                      Remove
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <h2>Total Amount: ₹{tot}</h2>
          <h3>Number of Items: {apidata.length}</h3>
        </div>
      </Container>
    </div>
  );
}

export default Cart;
