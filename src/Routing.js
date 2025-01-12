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
  const navigate=useNavigate()
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto" >
            <Nav.Link href="/" style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link href="/mobile" style={{color:"white"}}>Mobile</Nav.Link>
            <Nav.Link href="/laptop" style={{color:"white"}}>Laptop</Nav.Link>
            <Nav.Link href="/electronics" style={{color:"white"}}>Electronics</Nav.Link>
            <Nav.Link href="/cloths" style={{color:"white"}}>Cloths</Nav.Link>
            <Nav.Link href="/about" style={{color:"white"}}>About</Nav.Link>
            <Nav.Link href="/contact" style={{color:"white"}}>Contact</Nav.Link>
            <Nav.Link > <Button variant="primary" onClick={()=>navigate("/login")} >Login</Button></Nav.Link>
            <Nav.Link > <Button variant="primary" onClick={()=>navigate("/register")}>Registration</Button></Nav.Link>
            <Nav.Link > <Button variant="primary" onClick={()=>navigate("/cart")}>cart</Button></Nav.Link>
          </Nav>
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
