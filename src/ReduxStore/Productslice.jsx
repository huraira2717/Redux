import { createSlice } from "@reduxjs/toolkit";
export const STATUS=Object.freeze({
SUCCESS:'SUCCESS',
Error:'error',
Loading:'LOADING'
})
const Productslice=createSlice({
    name:'product',
    initialState:{
        data:[],
        status:STATUS.SUCCESS,
    },
    reducers:{
        setProducts(state , action){
            state.data=action.payload
        },
        setStatus(state , action){
            state.status=action.payload
        }
    }
})

export const {setProducts , setStatus}=Productslice.actions;
export default Productslice.reducer;