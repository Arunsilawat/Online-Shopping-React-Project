import Carousel from 'react-bootstrap/Carousel';
import vid from "../images/v2.mp4"
import h1 from "../images/h5.jpg"
import h2 from "../images/h6.jpg"
import h3 from "../images/h2.avif"
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdPayment } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { GrDeliver } from "react-icons/gr";
import { IoTimerOutline } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";



import { addcart } from './cartSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';

const Home = () => {
    const Dispatch = useDispatch();
    const navigate = useNavigate();

    const [basicModal, setBasicModal] = useState(false);
    const toggleOpen = () => setBasicModal(!basicModal);

    const [mydata, setMydata] = useState([]);
    const loadData = () => {
        let api = "http://localhost:3000/product";
        axios.get(api).then((res) => {
            setMydata(res.data)
        })
    }
    useEffect(() => {
        loadData()
    })
    const addData = (eid, nm, dis, price, img) => {
        Dispatch(addcart({ id: eid, name: nm, images: img, description: dis, price: price, qnty: 1 }))
    }
    const dataSendCart = (key) => {
        navigate("/prodisplay", { state: key });
    }
    const ans = mydata.map((key) => {
        return (
            <>
                <Card style={{ width: "250px", marginLeft: "10px", marginRight: "10px", marginBottom: "20px" }}>
                    <Card.Img variant="top" src={"src/images/" + key.images} style={{ height: "250px" }} onClick={() => { dataSendCart(key) }} />
                    <Card.Body>
                        <Card.Title style={{ color: "blue", fontSize: "14px" }} onClick={() => { dataSendCart(key) }}>Name : {key.name}</Card.Title>
                        <Card.Text>
                            {key.description}
                            <h5 style={{ color: "red" }}> Price : {key.price} </h5>
                        </Card.Text>
                        <Button variant="primary" onClick={() => { addData(key.id, key.name, key.description, key.price, key.images) }} style={{marginRight:'15px'}}>Add to Cart</Button>
                        <span variant="primary" onClick={() => { addData(key.id, key.name, key.description, key.price, key.images) }} ><FaRegHeart style={{fontSize:'25px'}}/></span>
                        <span variant="primary" onClick={() => { addData(key.id, key.name, key.description, key.price, key.images) }} ><FaHeart style={{fontSize:'25px',color:'red'}}/></span>
                    </Card.Body>
                </Card>
            </>
        )
    })
    return (
        <>
            <marquee direction="left" height="20" style={{ color: "red", fontWeight: "bold" }}>
                "Unlock incredible savings with our exclusive online shopping offer! For a limited time only, enjoy up to 50% off on select items. Plus, get free shipping on all orders over 1000 Rupes Don't miss out—shop now and treat yourself to the best deals of the season. Hurry, before it's too late!"
            </marquee>
            <Carousel>
                <Carousel.Item>
                    <img src="https://cmsimages.shoppersstop.com/main_strapi_web_fa797dee45/main_strapi_web_fa797dee45.png" alt="" style={{ width: "100%" }} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src=" https://cmsimages.shoppersstop.com/women_strapi_web_3203c7dd32/women_strapi_web_3203c7dd32.png" alt="" style={{ width: "100%" }} />

                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://cmsimages.shoppersstop.com/men_strapi_web_b72b1cead7/men_strapi_web_b72b1cead7.png" alt="" style={{ width: "100%" }} />

                </Carousel.Item>
            </Carousel><br /><br />
            {/* -------------------------------------------corojal---------------------------------------------------- */}


            {/* 
            <video width="50%" controls autoplay muted >
                <source src="https://media.gettyimages.com/id/1306232227/video/women-shopping-at-clothes-store.mp4?s=mp4-640x640-gi&k=20&c=PxFhrvPjJvObqrSbd6P5HgEoatlEIyedde2BjMc_3DY=" type="video/mp4" />
            </video> */}

            {/* ----------------------------------------Carts---------------------------------------------------------- */}
            <h1 align="center"> Our Top Brands</h1><br />
            <Card>
                <Card.Img variant="top" src=" https://cmsimages.shoppersstop.com/onam_web_e3e495f279/onam_web_e3e495f279.png" />
            </Card><br /><br />
            <div id="cartdata">
                {ans}
            </div><br /><br />
            <section id='explor'>
                <div>
                    <img style={{ width: '100%', padding: '5%' }} src="https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHMlMjBzaG9wcGluZ3xlbnwwfHwwfHx8MA%3D%3D" />
                </div>
                <div>
                    <div style={{ fontSize: '250%', fontWeight: 'bold', padding: '5%' }}>Explore Our Products</div><br />
                    <div style={{ fontSize: '120%', fontWeight: 'bold', fontFamily: 'cursive', padding: '5%' }}>You are not allowed to redistribute this template ZIP file <br /> on any other website.</div>
                    <div style={{ padding: '5%' }} >There are 5 pages included in this HexaShop Template   <br />There are web development costs for us.
                        <div>Explore Our Products</div>
                        <br />
                        <Button >Discover More</Button>
                    </div><br />
                </div>
            </section><br />
            {/* -------------------------------------------------------------------------------------------------------- */}
            <Container>
                <Row>
                    <Col>
                        <Card
                            style={{ width: '250px', height: '200px', backgroundColor: "white" }}
                            className="mb-2"
                        >

                            <center>
                                <Card.Header></Card.Header><br />
                                <MdPayment style={{ fontSize: "30px", fontWeight: "bold" }} />
                                <Card.Body>
                                    <Card.Title> Safe Payment </Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on  the card title <br />
                                        bulk of the <br />
                                    </Card.Text>
                                </Card.Body>
                            </center>

                        </Card>
                    </Col>

                    <Col>
                        <Card
                            style={{ width: '250px', height: '200px', backgroundColor: "white" }}
                            className="mb-2"
                        >

                            <center>
                                <Card.Header></Card.Header><br />
                                <LuShoppingBag style={{ fontSize: "30px", fontWeight: "bold" }} />

                                <Card.Body>
                                    <Card.Title> Shop With Confidence
                                    </Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on  the card title <br />
                                        bulk of the <br />
                                    </Card.Text>
                                </Card.Body>
                            </center>

                        </Card>
                    </Col>
                    <Col>
                        <Card
                            style={{ width: '250px', height: '200px', backgroundColor: "white" }}
                            className="mb-2"
                        >

                            <center>
                                <Card.Header></Card.Header><br />
                                <GrDeliver style={{ fontSize: "30px", fontWeight: "bold" }} />
                                <Card.Body>
                                    <Card.Title> World Wide Delivery </Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on  the card title <br />
                                        bulk of the <br />
                                    </Card.Text>
                                </Card.Body>
                            </center>

                        </Card>
                    </Col>
                    <Col>
                        <Card
                            style={{ width: '250px', height: '200px', backgroundColor: "white" }}
                            className="mb-2"
                        >

                            <center>
                                <Card.Header></Card.Header> <br />
                                <IoTimerOutline style={{ fontSize: "30px", fontWeight: "bold" }} />
                                <Card.Body>
                                    <Card.Title> 24/6 Help Center </Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on  the card title <br />
                                        bulk of the <br />
                                    </Card.Text>
                                </Card.Body>
                            </center>

                        </Card>
                    </Col>
                </Row>
            </Container><br /><br />
            {/* --------------------------------------------------------------------------------------------------------- */}
            <MDBBtn onClick={toggleOpen}>LAUNCH DEMO MODAL</MDBBtn>
            <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Modal title</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>Modal body text goes here.</MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleOpen}>
                                Close
                            </MDBBtn>
                            <MDBBtn>Save changes</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
            {/* -------------------------------------footer----------------------------------------------------------- */}
            <MDBFooter bgColor='secondary' className='text-center text-lg-start text-muted' >
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' id='footerclr'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div >
                        <a href='' className='me-4 text-reset' >
                            <MDBIcon fab icon="facebook-f" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="twitter" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="google" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="instagram" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="linkedin" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="github" />
                        </a>
                    </div>
                </section>

                <section  id='footerclr'>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon icon="gem" className="me-3" />
                                    Company name
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Angular
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        React
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Vue
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Laravel
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Pricing
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Settings
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Orders
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Help
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <MDBIcon icon="home" className="me-2" />
                                    New York, NY 10012, US
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me-3" />
                                    info@example.com
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                                </p>
                                <p>
                                    <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' ,color:'white'}}>
                    © 2021 Copyright:
                    <a className='text-reset fw-bold' href='https://mdbootstrap.com/' >
                        www.onlineshopping.com
                    </a><br />
                   <a href="https://www.instagram.com/" style={{margin:'5px'}}>
                   <GrInstagram />
                   </a>
                   <a href="https://www.facebook.com/" style={{margin:'5px'}}>
                   <FaFacebookSquare />
                   </a>
                   <a href="https://x.com/i/flow/login" style={{margin:'5px'}}>
                   <FaTwitter />
                   </a>
                </div>
            </MDBFooter>

        </>
    )
}
export default Home;