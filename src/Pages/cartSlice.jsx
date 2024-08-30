import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

const cartSlice = createSlice({
    name: "mycart",
    initialState: {
        cart: []
    },
    reducers: {
        addcart: (state, actions) => {
            let data = state.cart.filter((item) => item.id == actions.payload.id);
            if (data.length >= 1) {
                // alert("product already added")
                message.warning("Product Aleready Added!!!");
            }
            else {
                state.cart.push(actions.payload);
                message.success("Your Product Successfull Added")
            }
        },
        delcart:(state,actions)=>{
            state.cart=state.cart.filter((item)=>item.id!=actions.payload)
            message.info("Produnt  Deleted")
        },
        
        addQnty:(state, actions)=>{

            for(var i=0; i<state.cart.length; i++)
            {
                if (state.cart[i].id==actions.payload)
                {
                    state.cart[i].qnty+=1;
                    //state.cart[i].qnty= state.cart[i].qnty+1;

                }
            }
        },
        DelQnty:(state, actions)=>{

            for(var i=0; i<state.cart.length; i++)
            {
                if (state.cart[i].id==actions.payload)
                {
                    if (state.cart[i].qnty<=1)
                    {
                       message.error("Quantity not less than 1");
                    }
                    else 
                    {
                        state.cart[i].qnty-=1;
                        //state.cart[i].qnty= state.cart[i].qnty-1;
                    }
                   

                }
            }
        }
    }
})
export default cartSlice.reducer;
export const { addcart,delcart,addQnty,DelQnty } = cartSlice.actions;