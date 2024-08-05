import { createSlice } from "@reduxjs/toolkit";
import Item from "antd/es/list/Item";

const TodoSlice=createSlice({
    name:"todo",
    initialState:{
        task:[]
    },
    reducers:{
        addtask:(state,actions)=>{
            state.task.push(actions.payload)
         },
        deltask:(state,actions)=>{
            state.task=state.task.filter(Item=>Item.id!=actions.payload)
        },
        comptask:(state,actions)=>{
            for(var i=0;i<state.task.length;i++){
                if(state.task[i].id==actions.payload){
                    state.task[i].complate=true;
                }
            }
        }
    }
})
export default TodoSlice.reducer;
export const{addtask,deltask,comptask}=TodoSlice.actions;