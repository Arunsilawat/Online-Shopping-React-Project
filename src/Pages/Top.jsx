import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../images/logo.jpg"
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Top = () => {
    const mycart=useSelector((state)=>state.mycart.cart);
    let datalength=mycart.length
    const navigate=useNavigate()
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" style={{position:'sticky',top:'0',zIndex:'1'}}>
                <Container fluid>
                <Navbar.Brand href="#"><img src={logo} alt="" style={{width:"100px"}}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="home" style={{fontWeight:"bold"}}>Home</Nav.Link>
                            <Nav.Link href="searchpro" style={{fontWeight:"bold"}}>Search</Nav.Link>
                            <Nav.Link href="cartproduct" style={{fontWeight:"bold"}}>My Cart</Nav.Link>
                            <NavDropdown title="Categories" id="navbarScrollingDropdown" style={{fontWeight:"bold"}}>
                                <NavDropdown.Item href="men's">Men's Category</NavDropdown.Item>
                                <NavDropdown.Item href="women's">Women's Category</NavDropdown.Item>
                                <NavDropdown.Item href="kid's">Kid's Category</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex" >
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                style={{borderRadius:'40px'}}
                            />
                            
                        </Form>
                        <GrCart style={{fontWeight:"bold",fontSize:"28px"}} onClick={()=>{navigate("/cartproduct")}}/>
                        {datalength>=1? <span id="tokri"> {datalength} </span>: ""}
                        <FaRegHeart style={{fontWeight:"bold",fontSize:"28px",margin:"8px"}} onClick={()=>{navigate("/wishlist")}}/>
                        <CgProfile style={{fontWeight:"bold",fontSize:"28px",margin:"8px"}}/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}
export default Top;