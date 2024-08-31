
import { delcart, addQnty, DelQnty } from "./cartSlice";
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CartProduct = () => {
    const mydata = useSelector((state) => state.mycart.cart);
    const Dispatch = useDispatch();
    const navigate= useNavigate();
    const Navigate= useNavigate();

    const cartdel = (id) => {
        Dispatch(delcart(id))
    }
    const qtyInc = (id) => {
        Dispatch(addQnty(id))
    }

    const qtyDec = (id) => {
        Dispatch(DelQnty(id))
    }
    const checkOut=()=>{
        navigate("/checkout");
      
      }
    const dataSendCart=(key)=>
        {
           Navigate("/prodisplay", { state: key });  
        }
    let totalAmount = 0;
    const ans = mydata.map((key) => {
        totalAmount+=key.price*key.qnty;
        return (
            <>
                <tr>
                    <td> <img src={"src/images/" + key.images} idth="100" height="80" onClick={()=>{dataSendCart(key)}}/></td>
                    <th>{key.name}</th>
                    <td>{key.description}</td>
                    <td>{key.price}</td>
                    <td>
                        <a href="#">
                            <FaMinusCircle onClick={() => { qtyDec(key.id) }} />
                        </a>
                        <span style={{ paddingLeft: "5px", paddingRight: "5px", fontWeight: "bold" }}> {key.qnty}  </span>
                        <a href="#">
                            <FaPlusCircle onClick={() => { qtyInc(key.id) }} />
                        </a>
                    </td>
                    <td> {key.price*key.qnty} </td>
                    <td>
                        <Button variant="primary" size="sm" onClick={() => { cartdel(key.id) }}>Delete</Button>
                    </td>
                </tr>
            </>
        )
    })
    return (
        <>
            <br /> <br /><h1 align="center">Your Cart Products</h1><br />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Images</th>
                        <th> Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th> Quantity</th>
                        <th>Total Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {ans}
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>Total Amount :  </th>
                        <th>{totalAmount}</th>
                        <th></th>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>
                        <Button variant="primary" onClick={checkOut}>CheckOut</Button>
                        </th>
                        <th></th>
                    </tr>
                </tbody>
            </Table>

        </>
    )

}
export default CartProduct;