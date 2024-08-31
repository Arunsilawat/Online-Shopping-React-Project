import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addcart } from './cartSlice';
import Button from 'react-bootstrap/Button';


const ProductDisplay = () => {

  const dispatch = useDispatch();
  const [myPro, setMyPro] = useState({
    id: "",
    name: "",
    description: "",
    images: "",
    price: ""
  });
  const location = useLocation();
  useEffect(() => {
    setMyPro(
      {
        id: location.state.id,
        name: location.state.name,
        description: location.state.description,
        images: location.state.images,
        price: location.state.price
      }
    )
  }, [])


  const DataCart = (pid, nm, img, desc, price) => {
    dispatch(addcart({ id: pid, name: nm, image: img, description: desc, qnty: 1, price: price }))
  }

  return (
    <>
    <br />
      <center><h1>Our Product</h1></center>
      
      <div id="productData">
        <div>
          <img src={`src/images/${myPro.images}`} style={{ height: "70%", width: "80%" ,marginLeft:"70px"}} />
        </div>
        <div style={{marginRight:"300px"}} >
          <h2>   Product Name : {myPro.name} </h2>
          <h4 style={{ color: "blue" }}>Description: {myPro.description}  </h4>
          <h2 style={{ color: "red" }}>Price : {myPro.price} </h2>
          <br />
            <Button variant="primary" onClick={() => { DataCart(myPro.id, myPro.name, myPro.images, myPro.description, myPro.price) }} >Add to Cart</Button>
        </div>
      </div>
    </>
  )
}

export default ProductDisplay;