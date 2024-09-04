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


import { addcart } from './cartSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const Dispatch = useDispatch();
    const navigate= useNavigate();

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
        Dispatch(addcart({ id: eid, name: nm, images: img, description: dis, price: price,qnty:1 }))
    }
    const dataSendCart=(key)=>
        {
           navigate("/prodisplay", { state: key });  
        }
    const ans = mydata.map((key) => {
        return (
            <>
                <Card style={{ width: "250px", marginLeft: "10px", marginRight: "10px", marginBottom: "20px" }}>
                    <Card.Img variant="top" src={"src/images/" + key.images} style={{ height: "250px" }} onClick={()=>{dataSendCart(key)}}/>
                    <Card.Body>
                        <Card.Title style={{ color: "blue", fontSize: "14px" }} onClick={()=>{dataSendCart(key)}}>Name : {key.name}</Card.Title>
                        <Card.Text>
                            {key.description}
                            <h5 style={{ color: "red" }}> Price : {key.price} </h5>
                        </Card.Text>
                        <Button variant="primary" onClick={() => { addData(key.id, key.name, key.description, key.price, key.images) }} >Add to Cart</Button>
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
                    <img src="https://cmsimages.shoppersstop.com/main_strapi_web_fa797dee45/main_strapi_web_fa797dee45.png" alt=""   style={{ width: "100%" }}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src=" https://cmsimages.shoppersstop.com/women_strapi_web_3203c7dd32/women_strapi_web_3203c7dd32.png" alt="" style={{ width: "100%" }} />
                     
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://cmsimages.shoppersstop.com/men_strapi_web_b72b1cead7/men_strapi_web_b72b1cead7.png" alt="" style={{ width: "100%" }} />
                  
                </Carousel.Item>
            </Carousel><br /><br />
    {/* -------------------------------------------corojal---------------------------------------------------- */}
    <Card className="bg-dark text-white">
      <Card.Img src="https://beyoung.in/api/catalog/new-bb/mobile/banner/Home-page-banner-desktop-view11.jpg" alt="Card image" style={{width:'100%',height:'300px'}}/>
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
    {/* ----------------------------------------Carts---------------------------------------------------------- */}
    <h1 align="center"> Our Top Brands</h1><br /><br />
            <div id="cartdata">
                {ans}
            </div><br /><br />
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
           

            {/* <video width="100%" height="500px" controls autoplay muted >
                <source src={vid} type="video/mp4" />
            </video> */}
        </>
    )
}
export default Home;