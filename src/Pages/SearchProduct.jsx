import { useState } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addcart } from './cartSlice';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const SearchProduct = () => {
  const [val, setVal] = useState("");
  const [mydata, setMydata] = useState([]);
  const Dispatch = useDispatch();
  const navigate= useNavigate();

  const handleChange = (e) => {
    setVal(e.target.value);
    let api = `http://localhost:3000/product`;
    axios.get(api).then((res) => {
      setMydata(res.data);
    })
  }


  const DataCart = (pid, nm, imges, desc, price) => {
    Dispatch(addcart({ id: pid, name: nm, images: imges, description: desc, qnty: 1, price: price }))
  }
  const dataSendCart=(key)=>
    {
       navigate("/prodisplay", { state: key });  
    }

  const ans = mydata.map((key) => {
    let str = key.name;
    let status = str.includes(val);


    if (status == true) {

      return (
        <>
          <Card style={{ width: "250px", marginLeft: "10px", marginRight: "10px", marginBottom: "20px" }}>
            <Card.Img variant="top" src={"src/images/" + key.images} style={{ height: "250px" }} onClick={()=>{dataSendCart(key)}} />
            <Card.Body>
              <Card.Title style={{ color: "blue", fontSize: "14px" }} onClick={()=>{dataSendCart(key)}}>{key.name}</Card.Title>
              <Card.Text>
                {key.description}
                <h5 style={{ color: "red" }}> Price : {key.price}</h5>
              </Card.Text>
              <Button variant="primary"
                onClick={() => { DataCart(key.id, key.name, key.images, key.description, key.price) }}>Add to Cart</Button>
            </Card.Body>
          </Card>


        </>
      )
    }
  })




  return (
    <>
      <center>
        <h1 align="center"> Search Your Product</h1>
        Enter Product :
        <input type="text" value={val} onChange={handleChange} />

        <hr />

        <div id="cartdata">
          {ans}
        </div>
      </center>


    </>
  )
}

export default SearchProduct;