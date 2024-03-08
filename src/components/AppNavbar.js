import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button  } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function AppNavbar(){

 
  const cart = useSelector((state)=>state.Cart);
    return(

        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className="fs-100"><span style={{fontWeight: 'bold'}}>ABDO-COLLECTION</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
            <Link to='/' className='navbar-brand'>Home</Link>
            <Link to='/products' className='navbar-brand'>Products</Link>
            {/* <Link to='/' className='navbar-brand'>About</Link>
            <Link to='/' className='navbar-brand'>Contact</Link> */}
            </Nav>
            <Nav className="ms-auto">
            <Link to='/login' className='navbar-brand'>Login</Link>
            <Link to='/register' className='navbar-brand'>Register</Link>
            <Link to='/cart' className='navbar-brand'><FontAwesomeIcon icon="fa-solid fa-cart-shopping" />Cart-{cart.length} </Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 

    )
}
export default AppNavbar;