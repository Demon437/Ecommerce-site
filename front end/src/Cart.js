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
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        minHeight: "100vh",
        padding: "40px 20px",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Container>
        <h1 className="mb-4" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>🛒 Your Cart</h1>
        <Row>
          {apidata.map((item, index) => (
            <Col xs={12} md={4} className="mb-4" key={`${item.pid}-${index}`}>
              <Card style={{
                width: '100%',
                borderRadius: '15px',
                background: "#fff",
                color: "#333",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)"
              }}>
                <Card.Img
                  variant="top"
                  src={item.pimage}
                  style={{
                    height: "200px",
                    objectFit: "contain",
                    padding: "10px",
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px"
                  }}
                />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bold" }}>{item.pname}</Card.Title>
                  <Card.Text style={{ fontSize: "1.2rem", fontWeight: "600" }}>
                    Price: ₹{item.pprice}
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button color="dark" style={{ width: "48%" }}>Buy Now</Button>
                    <Button color="dark" style={{ width: "48%" }} onClick={() => removeItem(index)}>
                      Remove
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="mt-4 p-3" style={{ background: "rgba(255,255,255,0.2)", borderRadius: "10px" }}>
          <h2>Total Amount: ₹{tot}</h2>
          <h3>Number of Items: {apidata.length}</h3>
        </div>
      </Container>
    </div>
  );
}

export default Cart;
