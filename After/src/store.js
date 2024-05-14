import { configureStore } from '@reduxjs/toolkit';

import { createSlice } from "@reduxjs/toolkit";






export const firstSlice=createSlice(
    {
        name:'myFirstSlice',
        initialState:{
            user:{},
            props:{login:false}
        },
        reducers:{
            setUser:(currentState,action)=>{{
               const user= action.payload
               return {...currentState,user:user}
            }},
            login: (currentState,action)=>{
              {
                const props={...currentState.props,login:action.payload}
                return {...currentState,props:props}
              }
            }
        }

    }
)
export const storeGetUser = (state) => state && state.myFirstSlice.user;
export const getLogin=(state)=>state && state.myFirstSlice.props.login

const store = configureStore({
  reducer:{
    myFirstSlice:firstSlice.reducer,

  },
 
});
  // Ajoutez ici d'autres options de configuration du store si nécessaire


export {store};