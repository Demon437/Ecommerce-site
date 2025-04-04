import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home';
import Mobile from './Mobile';
import Laptop from './Laptop';
import Electronics from './Electronics';
import Register from './Register';
import Login from './Login';
import Upload from './Upload';
import Item from './Item';
import Cart from './Cart';
import About from './About';
import Contact from './Contact';
import Cloths from './Cloths';

function Routing() {
  const navigate = useNavigate()
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/" style={{ fontWeight: "bold", fontSize: "20px" }}>E-Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" style={{ color: "lightgray", fontSize: "16px" }}>Home</Nav.Link>
              <Nav.Link href="/mobile" style={{ color: "lightgray", fontSize: "16px" }}>Mobile</Nav.Link>
              <Nav.Link href="/laptop" style={{ color: "lightgray", fontSize: "16px" }}>Laptop</Nav.Link>
              <Nav.Link href="/electronics" style={{ color: "lightgray", fontSize: "16px" }}>Electronics</Nav.Link>
              <Nav.Link href="/cloths" style={{ color: "lightgray", fontSize: "16px" }}>Cloths</Nav.Link>
              <Nav.Link href="/about" style={{ color: "lightgray", fontSize: "16px" }}>About</Nav.Link>
              <Nav.Link href="/contact" style={{ color: "lightgray", fontSize: "16px" }}>Contact</Nav.Link>
            </Nav>

            {/* Right Side Buttons */}
            <Nav className="ms-auto">
              <Nav.Link>
                <Button variant="outline-info" className="mx-1" onClick={() => navigate("/login")}>
                  Admin
                </Button>
              </Nav.Link>
              <Nav.Link>
                <Button variant="outline-success" className="mx-1" onClick={() => navigate("/register")}>
                  Registration
                </Button>
              </Nav.Link>
              <Nav.Link>
                <Button variant="outline-warning" className="mx-1" onClick={() => navigate("/cart")}>
                  Cart
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>




      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/mobile' Component={Mobile}></Route>
        <Route path='/laptop' Component={Laptop}></Route>
        <Route path='/electronics' Component={Electronics}></Route>
        <Route path='/register' Component={Register}></Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='/upload' Component={Upload}></Route>
        <Route path='/item' Component={Item}></Route>
        <Route path='/cart' Component={Cart}></Route>
        <Route path='/about' Component={About}></Route>
        <Route path='/contact' Component={Contact}></Route>
        <Route path='/cloths' Component={Cloths}></Route>


      </Routes>
      <br />
    </>
  );
}

export default Routing;
