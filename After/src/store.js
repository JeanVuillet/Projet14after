import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";





export const userSlice=createSlice({
    name:'userList',
    initialState:{},
    reducers:{
    addUser: (currentState, action)=>{ return {...currentState, ...action.payload }  }
    }
}
)
  export const getUser=(state)=>state.userList;
const store=configureStore(
    {
        reducer:{
            userList:userSlice.reducer}
    },
);


export {store}